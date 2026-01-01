
import React from 'react';
import { RESUME_DATA } from '../constants';

export const Skills: React.FC = () => {
  const { skills } = RESUME_DATA;

  return (
    <section id="skills" className="py-32 bg-zinc-950 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-100 mb-16 text-center tracking-tight">
            Technical Proficiency
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((category) => (
              <div 
                key={category.name} 
                className="group bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-800/50">
                  <span className="w-1 h-5 bg-accent-500 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.4)]"></span>
                  <h3 className="text-lg font-semibold text-zinc-100 tracking-wide">
                    {category.name}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1.5 bg-zinc-950/50 border border-zinc-800 rounded-lg text-sm text-zinc-400 group-hover:text-zinc-200 group-hover:border-zinc-700/50 transition-colors cursor-default"
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
