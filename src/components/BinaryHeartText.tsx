import { BRAND_COLORS } from '../utils/brandColors';

interface BinaryHeartTextProps {
  className?: string;
}

/**
 * Reusable component for displaying "BinaryHeart" text with proper brand colors
 * Binary = #FF0040 (red)
 * Heart = #2F4A70 (blue)
 */
export default function BinaryHeartText({ className = '' }: BinaryHeartTextProps) {
  return (
    <>
      <span className={`${BRAND_COLORS.BINARY_TEXT} ${className}`}>Binary</span>
      <span className={`${BRAND_COLORS.HEART_TEXT} ${className}`}>Heart</span>
    </>
  );
}
