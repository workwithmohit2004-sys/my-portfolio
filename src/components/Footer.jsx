import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Code } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer = () => {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative border-t border-white/5 bg-[#080B14] py-12 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand & Designer text */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <span className="font-bold text-white tracking-wider text-base">
              MOHIT SHARMA
            </span>
            <span className="text-xs px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 font-mono">
              React.js Dev
            </span>
          </div>
          <p className="text-xs text-text-muted">
            Designed & Developed by <span className="text-white font-medium">Mohit Sharma</span>
          </p>
          <p className="text-[11px] text-slate-400 font-mono mt-1">
            © 2026 Mohit Sharma. All Rights Reserved.
          </p>
        </div>

        {/* Center: Social Icons */}
        <div className="flex items-center gap-3">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/5 transition-all hover:-translate-y-0.5"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-cyan-400 border border-white/5 transition-all hover:-translate-y-0.5"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${personal.email}`}
            aria-label="Email Mohit Sharma"
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-indigo-400 border border-white/5 transition-all hover:-translate-y-0.5"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Right: Back to Top Button */}
        <div>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 bg-[#101827] hover:bg-[#1e293b] border border-white/10 hover:border-indigo-500/30 hover:text-white transition-all duration-200 cursor-pointer group"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4 text-cyan-400 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
};

