
import React from 'react';
import { RESUME_DATA } from '../constants';
import { Github, Linkedin, Trophy } from 'lucide-react';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  const { profile } = RESUME_DATA;
  
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900/50 pt-16 pb-12 text-sm">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-zinc-500">
             © {year} {profile.name}. Crafted with precision.
          </div>
          
          <div className="flex items-center gap-6">
            {profile.socials.map((social) => (
              <a 
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-zinc-300 transition-colors"
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
    </footer>
  );
};
