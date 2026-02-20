
import React from 'react';
import { RESUME_DATA } from '../constants';
import { ArrowRight, Github, Linkedin, Trophy, FileDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const { profile } = RESUME_DATA;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 scroll-mt-24">
      
      {/* Subtle Radial Gradient Background */}
      <div className="absolute inset-0 bg-gradient-radial-subtle pointer-events-none" />
      
      {/* Minimal Grid Pattern */}
      <div className="absolute inset-0 bg-[size:40px_40px] bg-grid-pattern opacity-[0.02] pointer-events-none" />

      <div className="container mx-auto px-6 z-10 pt-32 md:pt-40">
        <div className="max-w-4xl mx-auto">
          
          {/* Status Badge */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-glass bg-white/[0.03] backdrop-blur-glass text-slate-300 text-xs font-medium">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-400"></span>
              </span>
              <span>Open for Opportunities</span>
            </div>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-center text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tighter leading-tight">
            <span className="block">{profile.name.split(' ').slice(0, 2).join(' ')}</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500">{profile.name.split(' ').slice(2).join(' ')}</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-center text-base md:text-lg text-slate-400 mb-2 tracking-wide uppercase font-medium">
            Backend Architect & Systems Engineer
          </p>
          
          {/* Divider */}
          <div className="flex justify-center my-10">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
          </div>

          {/* Description */}
          <p className="text-center text-slate-300 max-w-2xl mx-auto mb-14 text-sm md:text-base leading-relaxed">
            Architecting scalable distributed systems and high-throughput microservices. Transforming complex requirements into elegant, efficient solutions with a focus on clean code and system design excellence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16">
            <a 
              href="#projects" 
              className="w-full sm:w-auto group relative px-7 py-3 bg-white text-slate-950 font-semibold rounded-lg transition-all duration-300 hover:shadow-glass flex items-center justify-center gap-2 border border-white/20 hover:border-white/40"
            >
              View Work <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>

            <a 
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto group px-7 py-3 border border-glass bg-white/[0.03] backdrop-blur-glass text-slate-200 font-medium rounded-lg hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300 flex items-center justify-center gap-2"
            >
              Resume <FileDown size={16} />
            </a>
            
            {/* Social Links */}
            <div className="flex items-center gap-2 sm:ml-4 pt-3 sm:pt-0 border-t border-glass sm:border-t-0 sm:border-l sm:pl-4">
              {profile.socials.map((social) => (
                <a 
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 text-slate-400 hover:text-white border border-glass rounded-lg hover:bg-white/[0.05] transition-all duration-200"
                  title={social.platform}
                >
                  {social.platform === 'LinkedIn' && <Linkedin size={18} />}
                  {social.platform === 'GitHub' && <Github size={18} />}
                  {social.platform === 'Codolio' && <Trophy size={18} />}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
