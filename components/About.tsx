import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-zinc-950 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-zinc-100 mb-8 tracking-tight">About</h2>
          
          <div className="text-lg text-zinc-400 leading-relaxed space-y-8">
            <p>
              I am a <span className="text-zinc-200 font-medium">Software Engineer</span> driven by the challenge of building systems that scale. My background is deeply rooted in the Java ecosystem, where I've spent the last couple of year's architecting microservices and optimizing data pipelines.
            </p>
            
            <p>
              Currently, I am bridging the gap between backend robustness and frontend interactivity, expanding into <span className="text-zinc-200 font-medium">Full-Stack Development</span> and <span className="text-zinc-200 font-medium">Cloud Architecture</span>. I believe software engineering is as much about communication and clean design as it is about algorithms.
            </p>
            
            <div className="p-6 bg-zinc-900/30 border border-zinc-800/50 rounded-lg">
               <p className="text-base italic text-zinc-500">
                 "Building efficiently, scaling effectively, and learning continuously."
               </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};