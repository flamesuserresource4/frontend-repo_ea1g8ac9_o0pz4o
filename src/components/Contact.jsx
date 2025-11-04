import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const mailto = () => {
    const subject = encodeURIComponent('Portfolio Inquiry');
    const body = encodeURIComponent(`Hi, I am ${name} (${email}).\n\n${message}`);
    window.location.href = `mailto:your.email@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-950">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Contact</h2>
          <p className="text-slate-300/80">Let’s build something great together. Preferred contact person is listed below.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-white font-semibold">Contact Person</h3>
            <p className="text-slate-300 mt-2">Your Name</p>
            <div className="mt-4 space-y-3 text-slate-300">
              <a href="mailto:your.email@example.com" className="flex items-center gap-2 hover:text-white">
                <Mail className="h-4 w-4" /> your.email@example.com
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-white">
                <Phone className="h-4 w-4" /> +1 (234) 567-890
              </a>
              <div className="flex items-center gap-4 pt-2">
                <a href="#" className="inline-flex items-center gap-2 text-slate-300 hover:text-white">
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a href="#" className="inline-flex items-center gap-2 text-slate-300 hover:text-white">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-white font-semibold">Send a message</h3>
            <div className="mt-4 space-y-4">
              <div>
                <label className="text-sm text-slate-300" htmlFor="name">Name</label>
                <input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="mt-1 w-full rounded-lg bg-slate-950 border border-slate-800 px-3 py-2 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40" />
              </div>
              <div>
                <label className="text-sm text-slate-300" htmlFor="email">Email</label>
                <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="mt-1 w-full rounded-lg bg-slate-950 border border-slate-800 px-3 py-2 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40" />
              </div>
              <div>
                <label className="text-sm text-slate-300" htmlFor="message">Message</label>
                <textarea id="message" rows={4} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="What would you like to build?" className="mt-1 w-full rounded-lg bg-slate-950 border border-slate-800 px-3 py-2 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/40" />
              </div>
              <button onClick={mailto} className="inline-flex items-center gap-2 rounded-lg bg-sky-500 text-slate-950 px-4 py-2 font-medium hover:bg-sky-400 transition-colors">
                <Send className="h-4 w-4" /> Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
