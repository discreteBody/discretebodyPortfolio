import React from 'react';
import { RESUME_DATA } from '../constants';
import { Mail, ArrowRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const { profile } = RESUME_DATA;

  return (
    <section id="contact" className="py-32 bg-slate-950 border-t border-white/5 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Collaborate
          </h2>
          <p className="text-slate-400 text-base mb-10">
            I'm actively looking for roles in distributed systems, backend architecture, and scalable infrastructure. Reach out to discuss your next project.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={`mailto:${profile.email}`}
              className="group box-border inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-950 font-semibold rounded-lg hover:shadow-glass transition-all duration-300 border border-white/20 hover:border-white/40"
            >
              <Mail size={18} />
              <span>Get in Touch</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};