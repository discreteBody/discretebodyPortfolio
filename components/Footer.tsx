import React from 'react';
import { RESUME_DATA } from '../constants';
import { Github, Linkedin, Trophy } from 'lucide-react';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  const { profile } = RESUME_DATA;
  
  return (
    <footer className="bg-slate-950 border-t border-white/5 py-12 text-xs">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-500">
            © {year} {profile.name}. Crafted with precision.
          </div>
          
          <div className="flex items-center gap-4">
            {profile.socials.map((social) => (
              <a 
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-500 hover:text-white border border-glass rounded-lg hover:bg-white/[0.05] hover:border-white/20 transition-all duration-200"
                title={social.platform}
              >
                {social.platform === 'LinkedIn' && <Linkedin size={16} />}
                {social.platform === 'GitHub' && <Github size={16} />}
                {social.platform === 'Codolio' && <Trophy size={16} />}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
