
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col text-zinc-400 font-sans selection:bg-accent-500/30 selection:text-accent-200">
      <Header />
      <main>
        <Hero />
        {/* Optimized Order: Experience -> Projects -> Skills -> About -> Contact */}
        <Experience />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;