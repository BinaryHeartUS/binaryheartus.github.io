import type { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  gradientFrom?: string; // e.g., 'from-blue-500'
  gradientTo?: string;   // e.g., 'to-indigo-600'
}

export default function FeatureCard({ 
  icon, 
  title, 
  description,
  gradientFrom = 'from-blue-500',
  gradientTo = 'to-indigo-600'
}: FeatureCardProps) {
  return (
    <div className="relative rounded-2xl bg-white/60 backdrop-blur-sm p-4 sm:p-6 shadow-lg ring-1 ring-gray-900/5">
      <div className={`mb-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-gradient-to-br ${gradientFrom} ${gradientTo} text-white`}>
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 break-words">{title}</h3>
      <p className="text-sm sm:text-base text-gray-600 break-words">{description}</p>
    </div>
  );
}
