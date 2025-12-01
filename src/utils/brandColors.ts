/**
 * BinaryHeart Brand Color Constants
 * 
 * Use these constants throughout the application to maintain consistent branding.
 * - BINARY_COLOR: The red color used for "Binary" text (#FF0040)
 * - HEART_COLOR: The blue color used for "Heart" text (#2F4A70)
 */

export const BRAND_COLORS = {
  // Primary brand colors
  BINARY_RED: '#FF0040',
  HEART_BLUE: '#193961',
  
  // Tailwind-compatible classes
  BINARY_TEXT: 'text-[#FF0040]',
  HEART_TEXT: 'text-[#193961]',
  
  // Background classes
  BINARY_BG: 'bg-[#FF0040]',
  HEART_BG: 'bg-[#193961]',
  
  // Gradient classes for buttons/cards
  BINARY_GRADIENT: 'from-[#ff235a] to-[#d70036]', // Approximates #FF0040
  HEART_GRADIENT: 'from-[#184374] to-[#112440]', // Custom blue gradient
} as const;

/**
 * New Trier Chapter Brand Colors
 * Official New Trier High School colors
 */
export const NEW_TRIER_COLORS = {
  // Primary colors
  PRIMARY_BLUE: '#2260b6',
  PRIMARY_GREEN: '#159734',
  
  // Tailwind-compatible text classes
  TEXT_BLUE: 'text-[#2260b6]',
  TEXT_GREEN: 'text-[#159734]',
  TEXT_HOVER: 'hover:text-[#1c4d85]',
  
  // Background classes
  BG_BLUE: 'bg-[#2260b6]',
  BG_GREEN: 'bg-[#159734]',
  BG_BLUE_LIGHT: 'bg-[#2260b6]/10',
  BG_GREEN_LIGHT: 'bg-[#159734]/10',
  
  // Gradient classes for banners and sections
  GRADIENT_LIGHT: 'from-blue-50 to-green-50',
  GRADIENT_LIGHT_BR: 'from-blue-50/30 to-transparent',
  
  // Gradient classes for buttons and prominent sections
  GRADIENT_PRIMARY: 'from-[#2260b6] to-[#1c4d85]',
  GRADIENT_PRIMARY_90: 'from-[#2260b6]/90 to-[#1c4d85]/90',
  GRADIENT_PRIMARY_HOVER: 'hover:from-[#1c4d85] hover:to-[#153a6b]',
  GRADIENT_SECONDARY: 'from-[#159734] to-[#0f6b25]',
  GRADIENT_SECONDARY_90: 'from-[#159734]/90 to-[#0f6b25]/90',
  GRADIENT_SECONDARY_HOVER: 'hover:from-[#0f6b25] hover:to-[#0a4e1a]',
} as const;

/**
 * Northwestern University Chapter Brand Colors
 * Purple color scheme for Northwestern chapter
 */
export const NORTHWESTERN_COLORS = {
  // Primary purple colors (Tailwind purple-500 to purple-600 range)
  PRIMARY: '#a855f7', // purple-500
  PRIMARY_DARK: '#9333ea', // purple-600
  PRIMARY_DARKER: '#7e22ce', // purple-700
  
  // Violet accent colors
  VIOLET: '#8b5cf6', // violet-500
  VIOLET_DARK: '#7c3aed', // violet-600
  
  // Tailwind-compatible text classes
  TEXT: 'text-purple-600',
  TEXT_HOVER: 'hover:text-purple-700',
  
  // Background classes
  BG: 'bg-purple-600',
  BG_LIGHT: 'bg-purple-100',
  BG_50: 'bg-purple-50',
  
  // Gradient classes for banners and sections
  GRADIENT_LIGHT: 'from-purple-50 to-violet-50',
  GRADIENT_LIGHT_BR: 'from-purple-50/30 to-transparent',
  
  // Gradient classes for buttons and prominent sections
  GRADIENT_PRIMARY: 'from-purple-600 to-violet-600',
  GRADIENT_PRIMARY_90: 'from-purple-500/90 to-violet-600/90',
  GRADIENT_PRIMARY_HOVER: 'hover:from-purple-700 hover:to-violet-700',
  GRADIENT_SECONDARY: 'from-[#909090] to-[#707070]',
} as const;

/**
 * Rose Hulman Chapter Brand Colors
 * Official Rose-Hulman Institute of Technology colors
 */
export const ROSE_HULMAN_COLORS = {
  // Primary colors
  PRIMARY: '#a01010',
  PRIMARY_DARK: '#800000',
  PRIMARY_HOVER: '#b01818',
  PRIMARY_DARK_HOVER: '#900808',
  
  // Secondary colors
  SECONDARY: '#8a8a8a',
  SECONDARY_DARK: '#6a6a6a',
  
  // Tailwind-compatible text classes
  TEXT: 'text-[#a01010]',
  TEXT_DARK: 'text-[#800000]',
  TEXT_HOVER: 'hover:text-[#800000]',
  
  // Background classes
  BG: 'bg-[#a01010]',
  BG_LIGHT: 'bg-[#a01010]/10',
  BG_GRADIENT: 'from-[#a01010]/5',
  BG_GRADIENT_END: 'to-[#800000]/5',
  
  // Gradient classes for buttons and cards
  GRADIENT_PRIMARY: 'from-[#a01010] to-[#800000]',
  GRADIENT_PRIMARY_90: 'from-[#a01010]/90 to-[#800000]/90',
  GRADIENT_PRIMARY_HOVER: 'hover:from-[#b01818] hover:to-[#900808]',
  GRADIENT_SECONDARY: 'from-[#8a8a8a]/90 to-[#6a6a6a]/90',
  GRADIENT_SECONDARY_HOVER: 'hover:from-[#8a8a8a] hover:to-[#6a6a6a]',
} as const;

/**
 * Walter Payton Chapter Brand Colors
 * Official Walter Payton College Prep colors
 */
export const WALTER_PAYTON_COLORS = {
  // Primary colors
  BLUE: '#113f62',
  BLUE_DARK: '#0d2f4a',
  BLUE_HOVER: '#154f7a',
  BLUE_DARK_HOVER: '#102844',
  
  // Secondary colors
  ORANGE: '#f27a24',
  ORANGE_DARK: '#d96b1f',
  ORANGE_HOVER: '#ff8a34',
  ORANGE_DARK_HOVER: '#e06419',
  
  // Tailwind-compatible text classes
  TEXT: 'text-[#113f62]', // Primary text
  TEXT_BLUE: 'text-[#113f62]',
  TEXT_BLUE_DARK: 'text-[#0d2f4a]',
  TEXT_BLUE_HOVER: 'hover:text-[#0d2f4a]',
  TEXT_ORANGE: 'text-[#f27a24]',
  TEXT_ORANGE_HOVER: 'hover:text-[#d96b1f]',
  
  // Background classes
  BG_LIGHT: 'bg-[#113f62]/10', // Light background
  BG_BLUE: 'bg-[#113f62]',
  BG_BLUE_LIGHT: 'bg-[#113f62]/10',
  BG_BLUE_GRADIENT: 'from-[#113f62]/5',
  BG_BLUE_GRADIENT_END: 'to-[#0d2f4a]/5',
  BG_ORANGE: 'bg-[#f27a24]',
  BG_ORANGE_LIGHT: 'bg-[#f27a24]/10',
  
  // Gradient classes for buttons and cards
  GRADIENT_PRIMARY: 'from-[#113f62] to-[#0d2f4a]', // Primary gradient
  GRADIENT_PRIMARY_90: 'from-[#113f62]/90 to-[#0d2f4a]/90', // 90% opacity primary
  GRADIENT_SECONDARY: 'from-[#f27a24]/90 to-[#d96b1f]/90', // Orange gradient
  GRADIENT_BLUE: 'from-[#113f62] to-[#0d2f4a]',
  GRADIENT_BLUE_90: 'from-[#113f62]/90 to-[#0d2f4a]/90',
  GRADIENT_BLUE_HOVER: 'hover:from-[#154f7a] hover:to-[#102844]',
  GRADIENT_ORANGE: 'from-[#f27a24] to-[#d96b1f]',
  GRADIENT_ORANGE_90: 'from-[#f27a24]/90 to-[#d96b1f]/90',
  GRADIENT_ORANGE_HOVER: 'hover:from-[#ff8a34] hover:to-[#e06419]',
} as const;

/**
 * Indiana University Bloomington Chapter Brand Colors
 * Official Indiana University colors
 */
export const IU_COLORS = {
  // Primary colors
  PRIMARY: '#9a0202',
  PRIMARY_DARK: '#7a0000',
  PRIMARY_HOVER: '#aa0808',
  PRIMARY_DARK_HOVER: '#8a0202',
  
  // Secondary colors
  SECONDARY: '#808080',
  SECONDARY_DARK: '#606060',
  
  // Tailwind-compatible text classes
  TEXT: 'text-[#9a0202]',
  TEXT_DARK: 'text-[#7a0000]',
  TEXT_HOVER: 'hover:text-[#7a0000]',
  
  // Background classes
  BG: 'bg-[#9a0202]',
  BG_LIGHT: 'bg-[#9a0202]/10',
  BG_GRADIENT: 'from-[#9a0202]/5',
  BG_GRADIENT_END: 'to-[#7a0000]/5',
  
  // Gradient classes for buttons and cards
  GRADIENT_PRIMARY: 'from-[#9a0202] to-[#7a0000]',
  GRADIENT_PRIMARY_90: 'from-[#9a0202]/90 to-[#7a0000]/90',
  GRADIENT_PRIMARY_HOVER: 'hover:from-[#aa0808] hover:to-[#8a0202]',
  GRADIENT_SECONDARY: 'from-[#808080]/90 to-[#606060]/90',
  GRADIENT_SECONDARY_HOVER: 'hover:from-[#808080] hover:to-[#606060]',
} as const;

/**
 * Purdue University Chapter Brand Colors
 * Official Purdue University colors
 */
export const PURDUE_COLORS = {
  // Primary colors
  PRIMARY: '#ceb888', // Old Gold
  PRIMARY_DARK: '#b39a6b',
  PRIMARY_HOVER: '#d4c498',
  PRIMARY_DARK_HOVER: '#a88a5b',
  
  // Secondary colors
  SECONDARY: '#1f1f1f', // Black
  SECONDARY_DARK: '#0a0a0a',
  
  // Tailwind-compatible text classes
  TEXT: 'text-[#ceb888]',
  TEXT_DARK: 'text-[#1f1f1f]',
  TEXT_HOVER: 'hover:text-[#b39a6b]',
  
  // Background classes
  BG: 'bg-[#ceb888]',
  BG_LIGHT: 'bg-[#ceb888]/10',
  BG_GRADIENT: 'from-[#ceb888]/5',
  BG_GRADIENT_END: 'to-[#b39a6b]/5',
  
  // Gradient classes for buttons and cards
  GRADIENT_PRIMARY: 'from-[#ceb888] to-[#b39a6b]',
  GRADIENT_PRIMARY_90: 'from-[#ceb888]/90 to-[#b39a6b]/90',
  GRADIENT_PRIMARY_HOVER: 'hover:from-[#d4c498] hover:to-[#a88a5b]',
  GRADIENT_SECONDARY: 'from-[#1f1f1f]/90 to-[#0a0a0a]/90',
  GRADIENT_SECONDARY_HOVER: 'hover:from-[#1f1f1f] hover:to-[#0a0a0a]',
} as const;

/**
 * Helper function to get gradient classes for CTA buttons
 * @param type - 'binary' for red donate buttons, 'heart' for blue join buttons
 * @returns Tailwind gradient classes
 */
export const getBrandGradient = (type: 'binary' | 'heart'): string => {
  return type === 'binary' ? BRAND_COLORS.BINARY_GRADIENT : BRAND_COLORS.HEART_GRADIENT;
};

/**
 * Chapter type definition
 */
export type ChapterType = 'national' | 'iu' | 'purdue' | 'nt' | 'nu' | 'rose-hulman' | 'wp';

/**
 * Get chapter-specific colors for BinaryHeart text
 * @param chapter - The chapter identifier
 * @returns Object with binary and heart color classes
 */
export const getChapterColors = (chapter: ChapterType) => {
  switch (chapter) {
    case 'nt':
      return {
        binary: NEW_TRIER_COLORS.TEXT_BLUE,
        heart: NEW_TRIER_COLORS.TEXT_GREEN,
      };
    case 'nu':
      return {
        binary: NORTHWESTERN_COLORS.TEXT, // purple
        heart: 'text-violet-500', // violet accent
      };
    case 'rose-hulman':
      return {
        binary: ROSE_HULMAN_COLORS.TEXT,
        heart: ROSE_HULMAN_COLORS.TEXT_DARK,
      };
    case 'wp':
      return {
        binary: WALTER_PAYTON_COLORS.TEXT_BLUE,
        heart: WALTER_PAYTON_COLORS.TEXT_ORANGE,
      };
    case 'iu':
      return {
        binary: IU_COLORS.TEXT,
        heart: IU_COLORS.TEXT_DARK,
      };
    case 'purdue':
      return {
        binary: PURDUE_COLORS.TEXT,
        heart: PURDUE_COLORS.TEXT_DARK,
      };
    case 'national':
    default:
      return {
        binary: BRAND_COLORS.BINARY_TEXT,
        heart: BRAND_COLORS.HEART_TEXT,
      };
  }
};
