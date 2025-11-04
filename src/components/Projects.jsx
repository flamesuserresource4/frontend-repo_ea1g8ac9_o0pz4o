import React from 'react';
import { Rocket, Github, Globe } from 'lucide-react';

const projects = [
  {
    title: 'Real-time Analytics Service',
    stack: ['Go', 'Docker', 'PostgreSQL'],
    desc: 'Stream processing and metrics aggregation with efficient concurrency patterns.',
    links: { demo: '#', code: '#' },
  },
  {
    title: 'E-commerce API',
    stack: ['Java', 'Spring Boot', 'MongoDB'],
    desc: 'Secure, scalable backend with JWT auth, pagination, and robust validation.',
    links: { demo: '#', code: '#' },
  },
  {
    title: 'Interactive Portfolio',
    stack: ['React', 'JavaScript', 'Tailwind'],
    desc: 'Fast, responsive UI with smooth animations and 3D interactions.',
    links: { demo: '#', code: '#' },
  },
  {
    title: 'Content Platform',
    stack: ['PHP', 'Laravel', 'MySQL'],
    desc: 'Multi-tenant CMS with queues, caching, and role-based access control.',
    links: { demo: '#', code: '#' },
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-slate-950">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-10 w-10 rounded-xl bg-sky-500/10 flex items-center justify-center border border-sky-500/20">
            <Rocket className="h-5 w-5 text-sky-400" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white">Selected Projects</h2>
            <p className="text-slate-300/80">A snapshot of things I’ve built and shipped.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:bg-slate-900 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-white font-semibold text-lg">{p.title}</h3>
                  <p className="mt-1 text-slate-300/90 text-sm">{p.desc}</p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-slate-800 text-slate-200 border border-slate-700">{t}</span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3">
                <a href={p.links.demo} className="inline-flex items-center gap-1 text-sky-400 hover:text-sky-300 text-sm">
                  <Globe className="h-4 w-4" /> Demo
                </a>
                <a href={p.links.code} className="inline-flex items-center gap-1 text-slate-300 hover:text-white text-sm">
                  <Github className="h-4 w-4" /> Code
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
