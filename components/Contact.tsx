import React from 'react';
import { RESUME_DATA } from '../constants';
import { Mail } from 'lucide-react';

export const Contact: React.FC = () => {
  const { profile } = RESUME_DATA;

  return (
    <section id="contact" className="py-32 bg-zinc-950 border-t border-zinc-900 scroll-mt-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-zinc-100 mb-6 tracking-tight">Ready to collaborate?</h2>
        <p className="text-zinc-500 mb-10 max-w-lg mx-auto">
          I'm currently open to new roles and challenging backend projects.
        </p>
        
        <a 
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-3 px-8 py-4 bg-zinc-100 text-zinc-950 font-semibold rounded-full hover:bg-white hover:scale-105 transition-all duration-300"
        >
          <Mail size={20} />
          <span>{profile.email}</span>
        </a>
      </div>
    </section>
  );
};