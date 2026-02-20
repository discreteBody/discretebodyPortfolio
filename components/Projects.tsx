import React from 'react';
import { RESUME_DATA } from '../constants';
import { Github, ExternalLink } from 'lucide-react';

export const Projects: React.FC = () => {
  const { projects } = RESUME_DATA;

  return (
    <section id="projects" className="py-32 bg-slate-950 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="mb-20">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-blue-500 to-transparent"></div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Featured Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Engineering Projects
            </h2>
            <p className="text-slate-400 text-base max-w-2xl">
              A curated selection of distributed systems, scalable architectures, and production-grade backend solutions.
            </p>
          </div>

          {/* Timeline Layout with Animated Dots */}
          <div className="relative space-y-8">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-white/5"></div>

            {projects.map((project, index) => (
              <div key={index} className="group">
                {/* Animated Dot */}
                <div className="flex flex-col items-center md:flex-row md:items-center md:gap-8 mb-4">
                  {/* Dot */}
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-slate-700 border-2 border-slate-950 group-hover:bg-blue-500 group-hover:scale-125 transition-all duration-300 z-10 relative" />
                  </div>

                  {/* Content Card */}
                  <article className="flex-1 border border-glass rounded-xl overflow-hidden bg-white/[0.02] backdrop-blur-glass hover:bg-white/[0.05] transition-all duration-300 hover:border-white/20 w-full">
                    {/* Glass Background */}
                    <div className="absolute inset-0 pointer-events-none" />

                    <div className="relative p-6 md:p-8 flex flex-col">
                      
                      {/* Icon & Status */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="w-12 h-12 rounded-lg border border-glass bg-white/[0.05] flex items-center justify-center text-xl group-hover:bg-white/[0.08] transition-colors">
                          {project.icon}
                        </div>
                        <span className={`text-xs font-medium px-2.5 py-1 rounded-md border ${
                          project.status?.includes('Production') 
                            ? 'border-green-500/30 bg-green-500/10 text-green-300' 
                            : 'border-slate-500/30 bg-slate-500/10 text-slate-300'
                        }`}>
                          {project.status}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <div className="mb-6">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </h3>
                        <div className="space-y-3">
                          {project.description.map((desc, i) => (
                            <p key={i} className="text-sm text-slate-400 leading-relaxed">
                              {desc}
                            </p>
                          ))}
                        </div>
                      </div>

                      {/* Tech Stack */}
                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="text-xs px-2.5 py-1 rounded border border-glass bg-white/[0.03] text-slate-300 font-mono"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Footer Links */}
                      {project.githubUrl && (
                        <div className="flex items-center gap-2 pt-4 border-t border-glass">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
                          >
                            <Github size={14} />
                            <span>Source Code</span>
                          </a>
                        </div>
                      )}
                    </div>
                  </article>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
