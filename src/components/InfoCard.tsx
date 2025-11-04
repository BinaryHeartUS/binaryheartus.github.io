import type { ReactNode } from 'react';

interface InfoCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  bgColorClass?: string; // e.g., 'bg-red-100'
  iconColorClass?: string; // e.g., 'text-red-600'
}

export default function InfoCard({ 
  icon, 
  title, 
  description,
  bgColorClass = 'bg-blue-100',
  iconColorClass = 'text-blue-600'
}: InfoCardProps) {
  return (
    <div className="relative rounded-2xl bg-white/80 backdrop-blur-sm p-6 shadow-lg ring-1 ring-gray-900/5">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${bgColorClass} ${iconColorClass}`}>
            {icon}
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}
