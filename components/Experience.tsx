import React from 'react';
import { RESUME_DATA } from '../constants';

export const Experience: React.FC = () => {
  const { experience } = RESUME_DATA;

  return (
    <section id="experience" className="py-32 bg-slate-950 scroll-mt-24 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Section Header */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-blue-500 to-transparent"></div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Career</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Professional Experience
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative space-y-12">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-white/5"></div>

            {experience.map((job, index) => (
              <div key={index} className="group">
                
                {/* Timeline Dot & Date Column */}
                <div className="flex flex-col items-center md:flex-row md:items-center md:gap-8 mb-4">
                  {/* Dot & Date Stack */}
                  <div className="flex flex-col items-center gap-2">
                    {/* Animated Timeline Dot */}
                    <div className="w-3 h-3 rounded-full bg-slate-700 border-2 border-slate-950 group-hover:bg-blue-500 group-hover:scale-125 transition-all duration-300 z-10 relative" />
                    
                    {/* Date Below Dot */}
                    <div className="text-xs font-mono text-slate-400 uppercase font-semibold tracking-wide">
                      {job.period}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 border border-white/10 rounded-lg bg-white/[0.02] backdrop-blur-glass p-6 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300">
                    <h3 className="text-lg font-bold text-white mb-1">{job.role}</h3>
                    <div className="text-sm font-medium text-blue-400 mb-4">{job.company} • {job.location}</div>
                    
                    <ul className="space-y-3">
                      {job.points.map((point, idx) => (
                        <li key={idx} className="text-sm text-slate-400 leading-relaxed flex gap-3">
                          <span className="text-blue-400/50 mt-1 flex-shrink-0">▸</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};