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
 * Helper function to get gradient classes for CTA buttons
 * @param type - 'binary' for red donate buttons, 'heart' for blue join buttons
 * @returns Tailwind gradient classes
 */
export const getBrandGradient = (type: 'binary' | 'heart'): string => {
  return type === 'binary' ? BRAND_COLORS.BINARY_GRADIENT : BRAND_COLORS.HEART_GRADIENT;
};
