
import React from 'react';
import { RESUME_DATA } from '../constants';
import { Github } from 'lucide-react';

export const Projects: React.FC = () => {
  const { projects } = RESUME_DATA;

  return (
    <section id="projects" className="py-32 bg-zinc-950 scroll-mt-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-20">
          <div className="flex items-center gap-3 mb-4">
             <span className="w-10 h-[2px] bg-accent-500"></span>
             <span className="text-accent-400 font-mono text-sm uppercase tracking-widest">Projects</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-100 mb-6 tracking-tight">
            Engineering Log
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
            A collection of distributed systems, architectural challenges, and scalable backend solutions I've built.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-20">
          {projects.map((project, index) => (
            <article 
              key={index} 
              className="group relative bg-zinc-900/20 rounded-3xl border border-zinc-800/50 overflow-hidden hover:border-zinc-700/80 hover:bg-zinc-900/40 transition-all duration-500"
            >
              {/* Top highlight accent */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-accent-500/0 via-accent-500/50 to-accent-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="p-8 md:p-12">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                  <div className="flex gap-5">
                    <div className="shrink-0 w-14 h-14 rounded-2xl bg-zinc-900 flex items-center justify-center text-3xl border border-zinc-800 shadow-sm group-hover:scale-105 transition-transform duration-300">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-zinc-100 group-hover:text-accent-400 transition-colors mb-3">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3">
                         <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                           project.status?.includes('Production') ? 'bg-green-900/20 border-green-800/50 text-green-400' :
                           project.status?.includes('Startup') ? 'bg-purple-900/20 border-purple-800/50 text-purple-400' :
                           'bg-zinc-800/50 border-zinc-700 text-zinc-400'
                         }`}>
                           {project.status}
                         </span>
                         {project.githubUrl && (
                           <a 
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-500 hover:text-zinc-200 transition-colors ml-1 px-2 py-1 hover:bg-zinc-800/50 rounded-md"
                           >
                             <Github size={14} /> Source Code
                           </a>
                         )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Body */}
                <div className="space-y-4 mb-10 pl-2 md:pl-[76px]">
                   {project.description.map((desc, i) => (
                      <p key={i} className="text-zinc-400 leading-relaxed text-base md:text-lg">
                        {desc}
                      </p>
                   ))}
                </div>

                {/* Footer Tags */}
                <div className="pl-2 md:pl-[76px]">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1.5 bg-zinc-950/50 border border-zinc-800/80 rounded-lg text-xs font-medium text-zinc-500 font-mono group-hover:border-zinc-700 group-hover:text-zinc-400 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
