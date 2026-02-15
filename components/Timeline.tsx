import React from 'react';
import { TimelineItem } from '../types';
import { Calendar } from 'lucide-react';

interface TimelineProps {
  items: TimelineItem[];
}

export const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="relative border-l-2 border-sky-200 ml-3 md:ml-6 space-y-12 py-4">
      {items.map((item) => (
        <div key={item.id} className="relative pl-8 md:pl-12 group">
          {/* Dot Indicator */}
          <div className="absolute -left-[9px] top-1.5 w-[18px] h-[18px] bg-white border-[3px] border-sky-300 rounded-full group-hover:border-sky-600 transition-colors duration-300"></div>
          
          {/* Header Line */}
          <div className="flex flex-col sm:flex-row sm:items-baseline mb-2">
             <h3 className="text-xl font-bold text-gray-900 mr-4 group-hover:text-sky-600 transition-colors">{item.title}</h3>
             <span className="text-sm font-medium text-sky-600 flex items-center mt-1 sm:mt-0">
               <Calendar size={14} className="mr-1.5" />
               {item.date}
             </span>
          </div>
          
          <h4 className="text-lg font-semibold text-gray-800 mb-4">{item.subtitle}</h4>
          
          {/* Core Value */}
          {item.coreValue && (
             <div className="mb-4 text-sm font-semibold text-sky-700 bg-sky-50 px-3 py-2 rounded inline-block">
               核心價值：{item.coreValue}
             </div>
          )}

          {/* Achievements */}
          {item.achievements && item.achievements.length > 0 && (
            <div className="mb-5">
              <h5 className="text-md font-bold text-gray-900 mb-2 border-l-4 border-sky-600 pl-2">績效成果</h5>
              <ul className="space-y-2">
                {item.achievements.map((desc, idx) => (
                  <li key={idx} className="text-gray-800 leading-relaxed text-sm relative pl-4">
                    <span className="absolute left-0 top-2.5 w-1.5 h-1.5 bg-sky-600 rounded-full"></span>
                    <span dangerouslySetInnerHTML={{ __html: desc }} />
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Responsibilities */}
          {item.responsibilities && item.responsibilities.length > 0 && (
            <div className="mb-5">
              <h5 className="text-md font-bold text-gray-900 mb-2 border-l-4 border-sky-200 pl-2">工作內容</h5>
              <ul className="space-y-2">
                {item.responsibilities.map((desc, idx) => (
                  <li key={idx} className="text-gray-800 leading-relaxed text-sm relative pl-4">
                    <span className="absolute left-0 top-2.5 w-1.5 h-1.5 bg-sky-300 rounded-full"></span>
                    <span dangerouslySetInnerHTML={{ __html: desc }} />
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Fallback for simple description (e.g., Education) */}
          {item.description && item.description.length > 0 && (
            <ul className="space-y-2">
              {item.description.map((desc, idx) => (
                <li key={idx} className="text-gray-800 leading-relaxed text-sm relative pl-4">
                  <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-sky-300 rounded-full"></span>
                  <span dangerouslySetInnerHTML={{ __html: desc }} />
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};