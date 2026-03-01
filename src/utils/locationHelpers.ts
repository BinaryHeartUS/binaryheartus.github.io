import type { Chapter } from '../types/chapters';

/**
 * Location coordinates
 */
export interface Coordinates {
  latitude: number;
  longitude: number;
}

/**
 * Zippopotam API response structure
 */
interface ZippopotamResponse {
  'post code': string;
  country: string;
  'country abbreviation': string;
  places: Array<{
    'place name': string;
    longitude: string;
    latitude: string;
    state: string;
    'state abbreviation': string;
  }>;
}

/**
 * Fetch coordinates from US zip code using Zippopotam API
 * 
 * @param zipCode - US zip code (5 digits)
 * @returns Coordinates or null if invalid/not found
 */
export async function getCoordinatesFromZipCode(zipCode: string): Promise<Coordinates | null> {
  try {
    // Validate zip code format (5 digits)
    const cleanZip = zipCode.trim();
    if (!/^\d{5}$/.test(cleanZip)) {
      return null;
    }

    const response = await fetch(`https://api.zippopotam.us/us/${cleanZip}`);
    
    if (!response.ok) {
      return null;
    }

    const data: ZippopotamResponse = await response.json();
    
    if (!data.places || data.places.length === 0) {
      return null;
    }

    const place = data.places[0];
    return {
      latitude: parseFloat(place.latitude),
      longitude: parseFloat(place.longitude)
    };
  } catch (error) {
    console.error('Error fetching zip code data:', error);
    return null;
  }
}

/**
 * Calculate distance between two coordinates using Haversine formula
 * 
 * @param coord1 - First coordinate
 * @param coord2 - Second coordinate
 * @returns Distance in kilometers
 */
export function calculateDistance(coord1: Coordinates, coord2: Coordinates): number {
  const R = 6371; // Earth's radius in kilometers
  
  const lat1Rad = toRadians(coord1.latitude);
  const lat2Rad = toRadians(coord2.latitude);
  const deltaLat = toRadians(coord2.latitude - coord1.latitude);
  const deltaLon = toRadians(coord2.longitude - coord1.longitude);

  const a = 
    Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
    Math.cos(lat1Rad) * Math.cos(lat2Rad) *
    Math.sin(deltaLon / 2) * Math.sin(deltaLon / 2);
  
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  
  return R * c;
}

/**
 * Convert degrees to radians
 */
function toRadians(degrees: number): number {
  return degrees * (Math.PI / 180);
}

/**
 * Find the nearest chapter based on coordinates
 * 
 * @param userCoords - User's coordinates
 * @param chapters - Array of all chapters
 * @returns Nearest chapter or null if no chapters have coordinates
 */
export function findNearestChapter(
  userCoords: Coordinates,
  chapters: Chapter[]
): Chapter | null {
  let nearestChapter: Chapter | null = null;
  let minDistance = Infinity;

  for (const chapter of chapters) {
    if (chapter.latitude !== undefined && chapter.longitude !== undefined) {
      const chapterCoords: Coordinates = {
        latitude: chapter.latitude,
        longitude: chapter.longitude
      };
      
      const distance = calculateDistance(userCoords, chapterCoords);
      
      if (distance < minDistance) {
        minDistance = distance;
        nearestChapter = chapter;
      }
    }
  }

  return nearestChapter;
}

/**
 * Get all chapters with location data
 * 
 * @param chaptersData - Complete chapters data structure
 * @returns Array of all chapters that have coordinates
 */
export function getChaptersWithLocation(
  higherEducation: Chapter[],
  highSchool: Chapter[]
): Chapter[] {
  return [...higherEducation, ...highSchool].filter(
    chapter => chapter.latitude !== undefined && chapter.longitude !== undefined
  );
}
