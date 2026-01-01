
import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  // Optimized order: Experience -> Projects -> Skills -> About -> Contact
  const navLinks = [
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header 
        className={`fixed top-4 left-0 right-0 z-50 transition-all duration-500 px-4 md:px-0 flex justify-center`}
      >
        <div className={`
          relative flex items-center justify-between md:justify-center
          w-full md:w-auto md:min-w-[540px]
          px-8 py-3.5 
          rounded-2xl border 
          transition-all duration-300
          ${isScrolled 
            ? 'bg-zinc-900/80 backdrop-blur-md border-white/10 shadow-lg shadow-black/50' 
            : 'bg-transparent border-transparent'
          }
        `}>
          
          {/* Logo (Visible on mobile or when not scrolled on desktop for balance) */}
          <a href="#" className="md:hidden text-xl font-bold text-zinc-100 tracking-tight flex items-center gap-2">
            <Code2 className="text-accent-500" size={24} />
            <span>NS</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-5 py-2 text-base font-medium text-zinc-400 hover:text-zinc-100 transition-colors rounded-lg hover:bg-zinc-800/50"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-zinc-100 p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-zinc-950/98 backdrop-blur-md pt-32 px-10 md:hidden">
          <div className="flex flex-col space-y-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-3xl font-semibold text-zinc-200 hover:text-accent-400 transition-colors border-b border-zinc-900 pb-4"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
