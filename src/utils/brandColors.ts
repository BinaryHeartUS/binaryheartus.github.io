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
  HEART_BLUE: '#2F4A70',
  
  // Tailwind-compatible classes
  BINARY_TEXT: 'text-[#FF0040]',
  HEART_TEXT: 'text-[#2F4A70]',
  
  // Background classes
  BINARY_BG: 'bg-[#FF0040]',
  HEART_BG: 'bg-[#2F4A70]',
  
  // Gradient classes for buttons/cards
  BINARY_GRADIENT: 'from-rose-500 to-pink-600', // Approximates #FF0040
  HEART_GRADIENT: 'from-blue-600 to-indigo-700', // Approximates #2F4A70
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
 * Helper function to get gradient classes for CTA buttons
 * @param type - 'binary' for red donate buttons, 'heart' for blue join buttons
 * @returns Tailwind gradient classes
 */
export const getBrandGradient = (type: 'binary' | 'heart'): string => {
  return type === 'binary' ? BRAND_COLORS.BINARY_GRADIENT : BRAND_COLORS.HEART_GRADIENT;
};
