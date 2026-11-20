import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Mail, 
  Github, 
  Linkedin, 
  Code, 
  Sparkles, 
  Layers, 
  Terminal,
  ExternalLink,
  CheckCircle2
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Technology icons for floating badges
const techBadges = [
  {
    name: 'React.js',
    color: '#06B6D4',
    bg: 'rgba(6, 182, 212, 0.15)',
    border: 'rgba(6, 182, 212, 0.3)',
    className: 'top-2 right-4 sm:right-6',
    duration: 4.5,
    icon: (
      <svg className="w-5 h-5 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="2.5" fill="currentColor"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/>
      </svg>
    )
  },
  {
    name: 'JavaScript',
    color: '#FACC15',
    bg: 'rgba(250, 204, 21, 0.12)',
    border: 'rgba(250, 204, 21, 0.3)',
    className: 'bottom-8 -left-3 sm:-left-6',
    duration: 5.2,
    icon: (
      <span className="font-mono font-bold text-xs bg-yellow-400 text-black px-1 py-0.5 rounded">
        JS
      </span>
    )
  },
  {
    name: 'CSS3',
    color: '#38BDF8',
    bg: 'rgba(56, 189, 248, 0.12)',
    border: 'rgba(56, 189, 248, 0.3)',
    className: '-top-4 left-4 sm:left-6',
    duration: 4,
    icon: (
      <span className="font-mono font-bold text-xs text-sky-400 border border-sky-400/40 px-1 py-0.5 rounded">
        CSS3
      </span>
    )
  },
  {
    name: 'HTML5',
    color: '#F97316',
    bg: 'rgba(249, 115, 22, 0.12)',
    border: 'rgba(249, 115, 22, 0.3)',
    className: 'bottom-4 right-2 sm:right-4',
    duration: 5,
    icon: (
      <span className="font-mono font-bold text-xs text-orange-400 border border-orange-400/40 px-1 py-0.5 rounded">
        HTML5
      </span>
    )
  }
];

export const Hero = () => {
  const { personal } = portfolioData;

  // Typewriter effect for animated text
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const fullText = "Building Modern & Responsive Web Experiences";

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, isDeleting ? 40 : 80);

    return () => clearInterval(ticker);
  }, [displayText, isDeleting]);

  const tick = () => {
    const updatedText = isDeleting 
      ? fullText.substring(0, displayText.length - 1)
      : fullText.substring(0, displayText.length + 1);

    setDisplayText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }
  };

  const handleScrollTo = (targetId) => {
    const el = document.getElementById(targetId);
    if (el) {
      const navHeight = 72;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Introductions and CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-10"
        >
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Available for Frontend Roles & Opportunities</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-3">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-indigo-400">{personal.name}</span>
          </h1>

          {/* Professional Title */}
          <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 mb-4">
            {personal.role}
          </h2>

          {/* Animated Subtitle / Typewriter */}
          <div className="h-10 sm:h-8 flex items-center justify-center lg:justify-start mb-6">
            <p className="font-mono text-sm sm:text-base text-cyan-300/90 font-medium tracking-wide">
              <span>{displayText}</span>
              <span className="inline-block w-2 h-5 bg-cyan-400 ml-1 animate-pulse align-middle"></span>
            </p>
          </div>

          {/* Description */}
          <p className="text-text-muted text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
            {personal.heroDescription}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10 w-full sm:w-auto">
            <button
              onClick={() => handleScrollTo('projects')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:opacity-95 shadow-lg shadow-indigo-500/25 hover:shadow-glow-primary transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>View My Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => handleScrollTo('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-[#101827] hover:bg-[#1e293b] border border-white/10 hover:border-indigo-500/40 hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>Contact Me</span>
            </button>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center gap-4 text-text-muted">
            <span className="text-xs uppercase tracking-widest text-slate-400 font-medium">Connect:</span>
            
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-indigo-600/20 text-slate-300 hover:text-white border border-white/10 hover:border-indigo-500/40 transition-all duration-200 hover:-translate-y-1"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-cyan-600/20 text-slate-300 hover:text-cyan-400 border border-white/10 hover:border-cyan-500/40 transition-all duration-200 hover:-translate-y-1"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personal.email}`}
              aria-label="Send Email"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-indigo-600/20 text-slate-300 hover:text-indigo-400 border border-white/10 hover:border-indigo-500/40 transition-all duration-200 hover:-translate-y-1"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

        </motion.div>

        {/* Right Column: Visual Developer Profile Area with Glowing Border & Floating Tech Icons */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center items-center relative z-10"
        >
          <div className="relative w-72 h-72 sm:w-88 sm:h-88 flex items-center justify-center">
            
            {/* Ambient Background Glow behind profile */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-600/30 via-purple-600/20 to-cyan-500/30 blur-2xl animate-pulse-glow"></div>
            
            {/* Outer Subtle Spinning Gradient Ring */}
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-indigo-600 opacity-70 blur-[2px] animate-spin-slow"></div>

            {/* Circular Profile Container */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-1 bg-gradient-to-tr from-indigo-500 via-slate-800 to-cyan-400 shadow-2xl">
              
              {/* Replaceable Profile Image Placeholder */}
              <div className="w-full h-full rounded-full bg-[#0d1322] border-2 border-[#1e293b] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden group">
                
                {/* Tech Code Overlay Pattern */}
                <div className="absolute inset-0 opacity-10 bg-grid-pattern"></div>
                
                {/* Developer Avatar Placeholder Illustration */}
                <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-b from-indigo-500/20 to-cyan-500/20 border border-indigo-400/30 flex items-center justify-center mb-3 shadow-inner">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#101827] flex items-center justify-center border border-white/10">
                    <span className="text-2xl sm:text-3xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 to-cyan-300 font-mono">
                      MS
                    </span>
                  </div>
                </div>

                <div className="relative z-10">
                  <p className="text-white font-bold text-base sm:text-lg tracking-wide">
                    Mohit Sharma
                  </p>
                  <p className="text-xs text-cyan-300 font-mono mt-0.5">
                    React.js Developer
                  </p>
                  <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Open to Work</span>
                  </div>
                </div>

                {/* Developer hint overlay on hover (easy to replace photo) */}
                <div className="absolute inset-0 bg-[#080B14]/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center z-20">
                  <Code className="w-8 h-8 text-indigo-400 mb-2" />
                  <p className="text-xs text-white font-medium">Replaceable Avatar Slot</p>
                  <p className="text-[10px] text-text-muted mt-1">Place your photo in <code className="text-cyan-300">/public/profile.jpg</code> anytime</p>
                </div>
              </div>

            </div>

            {/* Floating Technology Badges with Smooth Framer Motion Float */}
            {techBadges.map((badge, idx) => (
              <motion.div
                key={badge.name}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: badge.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: idx * 0.3
                }}
                className={`absolute z-20 flex items-center gap-2 px-3 py-1.5 rounded-xl shadow-lg backdrop-blur-md ${badge.className}`}
                style={{
                  backgroundColor: badge.bg,
                  borderColor: badge.border,
                  borderWidth: '1px'
                }}
              >
                {badge.icon}
                <span className="text-xs font-semibold text-slate-200">
                  {badge.name}
                </span>
              </motion.div>
            ))}

          </div>
        </motion.div>

      </div>
    </section>
  );
};

