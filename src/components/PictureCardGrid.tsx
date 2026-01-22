import { type ReactNode } from 'react';

interface PictureCardGridProps {
  children: ReactNode;
}

/**
 * A flex container for PictureCard components that automatically centers
 * items and wraps them into rows. Incomplete rows are centered automatically.
 * 
 * PictureCard components inside will have a natural width and the container
 * will fit as many as possible per row, centering any overflow.
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
