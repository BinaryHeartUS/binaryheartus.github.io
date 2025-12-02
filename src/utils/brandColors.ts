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
 * Purdue University Chapter Brand Colors
 * Official Purdue University colors: Old Gold and Black
 */
export const PURDUE_COLORS = {
  // Primary colors
  PRIMARY: '#CEB888', // Old Gold
  PRIMARY_DARK: '#b5a279',
  PRIMARY_HOVER: '#d8c494',
  PRIMARY_DARK_HOVER: '#a89968',
  
  // Secondary colors (Black)
  SECONDARY: '#1a1a1a',
  SECONDARY_DARK: '#000000',
  
  // Tailwind-compatible text classes
  TEXT: 'text-[#CEB888]',
  TEXT_DARK: 'text-[#b5a279]',
  TEXT_HOVER: 'hover:text-[#b5a279]',
  SECONDARY_TEXT: 'text-[#1a1a1a]',
  
  // Background classes
  BG: 'bg-[#CEB888]',
  BG_LIGHT: 'bg-[#CEB888]/10',
  BG_GRADIENT: 'from-[#CEB888]/5',
  BG_GRADIENT_END: 'to-[#b5a279]/5',
  BG_SECONDARY: 'bg-[#1a1a1a]',
  
  // Gradient classes for buttons and cards
  GRADIENT_PRIMARY: 'from-[#CEB888] to-[#b5a279]',
  GRADIENT_PRIMARY_90: 'from-[#CEB888]/90 to-[#b5a279]/90',
  GRADIENT_PRIMARY_HOVER: 'hover:from-[#d8c494] hover:to-[#a89968]',
  GRADIENT_SECONDARY: 'from-[#1a1a1a]/90 to-[#000000]/90',
  GRADIENT_SECONDARY_HOVER: 'hover:from-[#1a1a1a] hover:to-[#000000]',
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
  SECONDARY_TEXT: 'text-[#808080]',
  
  // Background classes
  BG: 'bg-purple-600',
  BG_LIGHT: 'bg-purple-100',
  BG_50: 'bg-purple-50',
  BG_SECONDARY: 'bg-[#808080]',
  
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
  SECONDARY_TEXT: 'text-[#8a8a8a]',
  
  // Background classes
  BG: 'bg-[#a01010]',
  BG_LIGHT: 'bg-[#a01010]/10',
  BG_GRADIENT: 'from-[#a01010]/5',
  BG_GRADIENT_END: 'to-[#800000]/5',
  BG_SECONDARY: 'bg-[#8a8a8a]',
  
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
  SECONDARY_TEXT: 'text-[#808080]',
  
  // Background classes
  BG: 'bg-[#9a0202]',
  BG_LIGHT: 'bg-[#9a0202]/10',
  BG_GRADIENT: 'from-[#9a0202]/5',
  BG_GRADIENT_END: 'to-[#7a0000]/5',
  BG_SECONDARY: 'bg-[#808080]',
  
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

/**
 * Get chapter-specific color scheme based on chapter slug
 * @param chapterSlug - Chapter identifier (e.g., 'nt', 'nu', 'rose-hulman', etc.)
 * @returns Minimal color scheme: binaryText, heartText, and derived bg colors
 */
export const getChapterColors = (chapterSlug: string) => {
  let binaryText: string;
  let heartText: string;
  let binaryBg: string;
  let heartBg: string;

  switch (chapterSlug) {
    case 'nt':
      binaryText = NEW_TRIER_COLORS.TEXT_BLUE;
      heartText = NEW_TRIER_COLORS.TEXT_GREEN;
      binaryBg = NEW_TRIER_COLORS.BG_BLUE;
      heartBg = NEW_TRIER_COLORS.BG_GREEN;
      break;
    case 'nu':
      binaryText = NORTHWESTERN_COLORS.TEXT;
      heartText = NORTHWESTERN_COLORS.SECONDARY_TEXT;
      binaryBg = NORTHWESTERN_COLORS.BG;
      heartBg = NORTHWESTERN_COLORS.BG_SECONDARY;
      break;
    case 'rose-hulman':
      binaryText = ROSE_HULMAN_COLORS.TEXT;
      heartText = ROSE_HULMAN_COLORS.SECONDARY_TEXT;
      binaryBg = ROSE_HULMAN_COLORS.BG;
      heartBg = ROSE_HULMAN_COLORS.BG_SECONDARY;
      break;
    case 'wp':
      binaryText = WALTER_PAYTON_COLORS.TEXT_BLUE;
      heartText = WALTER_PAYTON_COLORS.TEXT_ORANGE;
      binaryBg = WALTER_PAYTON_COLORS.BG_BLUE;
      heartBg = WALTER_PAYTON_COLORS.BG_ORANGE;
      break;
    case 'iu':
      binaryText = IU_COLORS.TEXT;
      heartText = IU_COLORS.SECONDARY_TEXT;
      binaryBg = IU_COLORS.BG;
      heartBg = IU_COLORS.BG_SECONDARY;
      break;
    case 'purdue':
      binaryText = PURDUE_COLORS.TEXT;
      heartText = PURDUE_COLORS.SECONDARY_TEXT;
      binaryBg = PURDUE_COLORS.BG;
      heartBg = PURDUE_COLORS.BG_SECONDARY;
      break;
    default:
      // National/default colors
      binaryText = BRAND_COLORS.BINARY_TEXT;
      heartText = BRAND_COLORS.HEART_TEXT;
      binaryBg = BRAND_COLORS.HEART_BG;
      heartBg = BRAND_COLORS.BINARY_BG;
  }

  return {
    binaryText,
    heartText,
    binaryBg,
    heartBg,
  };
};
