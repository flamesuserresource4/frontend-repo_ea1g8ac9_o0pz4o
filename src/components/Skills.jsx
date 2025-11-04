import React from 'react';
import { Code, Cpu } from 'lucide-react';

const skills = [
  {
    name: 'Java',
    level: 90,
    blurb: 'Spring Boot services, REST APIs, and concurrent systems.',
    color: 'from-amber-400 to-orange-500',
  },
  {
    name: 'JavaScript',
    level: 92,
    blurb: 'Modern web apps, React, Node.js tooling and ecosystems.',
    color: 'from-yellow-300 to-amber-400',
  },
  {
    name: 'Go',
    level: 80,
    blurb: 'High-performance APIs, tooling, and microservices.',
    color: 'from-cyan-400 to-sky-500',
  },
  {
    name: 'PHP',
    level: 78,
    blurb: 'Laravel applications, RESTful backends, and integrations.',
    color: 'from-violet-400 to-fuchsia-500',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-16 md:py-24 bg-slate-950">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-10 w-10 rounded-xl bg-sky-500/10 flex items-center justify-center border border-sky-500/20">
            <Cpu className="h-5 w-5 text-sky-400" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white">Core Skills</h2>
            <p className="text-slate-300/80">Production-ready expertise across backend and frontend stacks.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((s) => (
            <div key={s.name} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 hover:bg-slate-900 transition-colors">
              <div className="flex items-center justify-between">
                <h3 className="text-white font-semibold">{s.name}</h3>
                <Code className="h-4 w-4 text-slate-400" />
              </div>
              <p className="mt-2 text-sm text-slate-300/90">{s.blurb}</p>
              <div className="mt-4">
                <div className="h-2 w-full rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${s.color}`}
                    style={{ width: `${s.level}%` }}
                  />
                </div>
                <div className="mt-2 text-right text-xs text-slate-400">{s.level}%</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
