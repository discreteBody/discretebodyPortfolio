import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-slate-950 scroll-mt-24 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          
          {/* Section Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-blue-500 to-transparent"></div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">About</span>
            </div>
            <h2 className="text-4xl font-bold text-white">
              Who I Am
            </h2>
          </div>
          
          <div className="text-base text-slate-300 leading-relaxed space-y-6">
            <p>
              I am a <span className="text-white font-medium">Software Engineer</span> driven by the challenge of building systems that scale. My background is deeply rooted in the Java ecosystem, where I've spent years architecting microservices and optimizing data pipelines for production environments.
            </p>
            
            <p>
              Currently, I am bridging the gap between backend robustness and frontend interactivity, expanding into <span className="text-white font-medium">Full-Stack Development</span> and <span className="text-white font-medium">Cloud Architecture</span>. I believe software engineering is fundamentally about clear communication and elegant design.
            </p>
            
            <div className="mt-8 pt-6 border-t border-white/10 pl-6 italic text-slate-400">
              Building efficiently, scaling effectively, learning continuously.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};