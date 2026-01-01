import React from 'react';
import { RESUME_DATA } from '../constants';

export const Experience: React.FC = () => {
  const { experience } = RESUME_DATA;

  return (
    <section id="experience" className="py-32 bg-zinc-950 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-zinc-100 mb-16 tracking-tight">Experience</h2>

          <div className="relative space-y-12">
            {/* Vertical Line */}
            <div className="absolute left-0 top-2 bottom-2 w-px bg-zinc-800 md:left-[120px]"></div>

            {experience.map((job, index) => (
              <div key={index} className="relative pl-8 md:pl-[160px] group">
                {/* Timeline Dot */}
                <div className="absolute left-[-4px] md:left-[116px] top-2 w-[9px] h-[9px] rounded-full bg-zinc-800 border border-zinc-950 group-hover:bg-accent-500 transition-colors z-10" />

                <div className="md:absolute md:left-0 md:top-1 md:w-[100px] md:text-right">
                   <div className="text-sm font-mono text-zinc-500">{job.period}</div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-zinc-100">{job.role}</h3>
                  <div className="text-sm font-medium text-accent-400 mb-4">{job.company} • {job.location}</div>
                  
                  <ul className="space-y-3">
                    {job.points.map((point, idx) => (
                      <li key={idx} className="text-sm text-zinc-400 leading-relaxed">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};