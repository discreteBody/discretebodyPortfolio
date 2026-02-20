import React from 'react';
import { RESUME_DATA } from '../constants';

export const Skills: React.FC = () => {
  const { skills } = RESUME_DATA;

  return (
    <section id="skills" className="py-32 bg-slate-950 scroll-mt-24 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          
          {/* Section Header */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-blue-500 to-transparent"></div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Expertise</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Technical Skills
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((category) => (
              <div 
                key={category.name} 
                className="group border border-white/10 rounded-lg bg-white/[0.02] backdrop-blur-glass p-6 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
                  <div className="w-1 h-4 bg-blue-500 rounded-full"></div>
                  <h3 className="text-sm font-semibold text-white uppercase tracking-widest">
                    {category.name}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1.5 bg-white/[0.03] border border-white/10 rounded-md text-xs text-slate-300 group-hover:bg-white/[0.05] group-hover:border-white/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
