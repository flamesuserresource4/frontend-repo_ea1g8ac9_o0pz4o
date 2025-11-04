import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full h-[70vh] overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay to improve text contrast without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/20 to-transparent" />

      <div className="pointer-events-none relative z-10 flex h-full items-center justify-center text-center px-6">
        <div className="max-w-3xl">
          <p className="uppercase tracking-widest text-sm md:text-xs text-sky-300/80 mb-3">Tech • Portfolio • Interactive • Modern</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Hi, I’m <span className="text-sky-400">Your Name</span>
          </h1>
          <p className="mt-4 text-slate-200/90 text-lg md:text-xl">
            Software developer crafting robust solutions in Java, JavaScript, Go, and PHP.
          </p>
        </div>
      </div>
    </section>
  );
}
