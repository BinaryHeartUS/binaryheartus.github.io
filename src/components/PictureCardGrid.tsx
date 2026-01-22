import { type ReactNode } from 'react';

interface PictureCardGridProps {
  children: ReactNode;
}

/**
 * A flex container for PictureCard components that automatically centers
 * items and wraps them into rows. Incomplete rows are centered automatically.
 * 
 * Cards have a min-width of 240px and grow to fill available space,
 * reducing whitespace while maintaining responsive behavior.
 * 
 * @param children - PictureCard components to display
 */
export default function PictureCardGrid({ children }: PictureCardGridProps) {
  return (
    <div className="flex flex-wrap justify-center gap-8 [&>*]:w-full [&>*]:sm:w-64">
      {children}
    </div>
  );
}
