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
 * Helper function to get gradient classes for CTA buttons
 * @param type - 'binary' for red donate buttons, 'heart' for blue join buttons
 * @returns Tailwind gradient classes
 */
export const getBrandGradient = (type: 'binary' | 'heart'): string => {
  return type === 'binary' ? BRAND_COLORS.BINARY_GRADIENT : BRAND_COLORS.HEART_GRADIENT;
};
