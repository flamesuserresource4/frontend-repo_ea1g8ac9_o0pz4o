import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { ArrowRight } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Hero with interactive Spline scene */}
      <Hero />

      {/* Intro cta placed after hero so Spline remains fully interactive */}
      <section className="bg-slate-950 -mt-6 relative z-10">
        <div className="mx-auto max-w-6xl px-6 pb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <p className="text-slate-300">
              Exploring roles in backend engineering, platform tooling, and interactive web.
            </p>
            <div className="flex items-center gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-lg bg-sky-500 text-slate-950 px-4 py-2 font-medium hover:bg-sky-400 transition-colors">
                View Projects <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 hover:border-slate-600">
                Contact
              </a>
            </div>
          </div>
        </div>
      </section>

      <Skills />
      <Projects />
      <Contact />

      <footer className="py-10 bg-slate-950">
        <div className="mx-auto max-w-6xl px-6 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Your Name. Built with React and a playful 3D touch.
        </div>
      </footer>
    </div>
  );
}
