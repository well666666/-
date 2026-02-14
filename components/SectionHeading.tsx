import React from 'react';

interface SectionHeadingProps {
  title: string;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, className = '' }) => {
  return (
    <div className={`mb-12 ${className}`}>
      <h2 className="text-3xl font-bold uppercase tracking-[0.2em] text-gray-900 relative inline-block">
        {title}
        <span className="absolute -bottom-4 left-0 w-12 h-1 bg-sky-600 rounded-full"></span>
      </h2>
    </div>
  );
};