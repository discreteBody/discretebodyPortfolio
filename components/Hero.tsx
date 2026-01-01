
import React from 'react';
import { RESUME_DATA } from '../constants';
import { ArrowRight, Github, Linkedin, Trophy, FileDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const { profile } = RESUME_DATA;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-zinc-950 scroll-mt-24">
      
      {/* Background Grid & Gradients */}
      <div className="absolute inset-0 bg-[size:50px_50px] bg-grid-pattern opacity-[0.03] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 z-10 pt-12">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-zinc-400 text-xs font-medium mb-8 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500"></span>
            </span>
            Open for new opportunities
          </div>
          
          <h1 className="text-5xl md:text-8xl font-bold text-zinc-100 tracking-tighter mb-6">
            {profile.name.split(' ')[0]}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-500"> {profile.name.split(' ')[1]}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-400 font-light mb-8 tracking-wide">
            Backend Architect & Distributed Systems Engineer
          </p>

          <p className="text-zinc-500 max-w-2xl mx-auto mb-10 text-base md:text-lg leading-relaxed">
            Specializing in high-throughput microservices and scalable architecture. 
            Translating complex requirements into clean, efficient code.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#projects" 
              className="w-full sm:w-auto px-8 py-3.5 bg-zinc-100 text-zinc-950 font-semibold rounded-full hover:bg-white transition-all flex items-center justify-center gap-2"
            >
              View Work <ArrowRight size={18} />
            </a>

            <a 
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 bg-zinc-900 border border-zinc-800 text-zinc-300 font-medium rounded-full hover:bg-zinc-800 hover:text-white transition-all flex items-center justify-center gap-2"
            >
              Resume <FileDown size={18} />
            </a>
            
            <div className="flex items-center gap-4 sm:ml-4 mt-4 sm:mt-0">
              {profile.socials.map((social) => (
                <a 
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-zinc-400 hover:text-zinc-100 transition-colors"
                  title={social.platform}
                >
                  {social.platform === 'LinkedIn' && <Linkedin size={22} />}
                  {social.platform === 'GitHub' && <Github size={22} />}
                  {social.platform === 'Codolio' && <Trophy size={22} />}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
