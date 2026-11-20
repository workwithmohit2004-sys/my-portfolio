import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, ExternalLink, Award, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const { personal, education, skills, experience, projects } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl my-8 bg-[#0D121F] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Toolbar (Header) */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#101827]">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-indigo-500"></span>
            <h2 className="text-sm sm:text-base font-bold text-white tracking-wide">
              Mohit Sharma — Curriculum Vitae
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close Resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-300 text-xs sm:text-sm print:text-black print:bg-white">
          
          {/* Header Info */}
          <div className="border-b border-white/10 pb-5">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              {personal.name}
            </h1>
            <p className="text-sm font-semibold text-cyan-400 mt-0.5">
              {personal.role}
            </p>
            
            <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-text-muted mt-3">
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-indigo-400" />
                {personal.phone}
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                {personal.email}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                {personal.location}
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h3 className="text-xs uppercase tracking-wider font-bold text-indigo-400 font-mono mb-2">
              Professional Summary
            </h3>
            <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
              Passionate Frontend Web Developer with a strong foundation in HTML, CSS, JavaScript, and React.js. Skilled in creating responsive, accessible, and user-centric web applications. Holds a Bachelor of Computer Applications (BCA) and actively pursuing MCA while continuously advancing into backend technologies like Node.js.
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-xs uppercase tracking-wider font-bold text-indigo-400 font-mono mb-2">
              Technical Competencies
            </h3>
            <div className="space-y-1.5 text-xs sm:text-sm">
              <p><strong className="text-white">Core Languages:</strong> HTML5, CSS3, JavaScript (ES6+)</p>
              <p><strong className="text-white">Frameworks & Libraries:</strong> React.js, Tailwind CSS</p>
              <p><strong className="text-white">Currently Learning:</strong> Node.js (Server-side JavaScript & APIs)</p>
              <p><strong className="text-white">Tools & Workflow:</strong> Visual Studio Code, Git, GitHub, Chrome DevTools</p>
              <p><strong className="text-white">Soft Skills:</strong> Teamwork, Communication, Problem-solving, Self-learning, Adaptability</p>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-xs uppercase tracking-wider font-bold text-indigo-400 font-mono mb-2">
              Practical Experience
            </h3>
            {experience.map((exp, idx) => (
              <div key={idx} className="bg-white/5 p-4 rounded-xl border border-white/5 mb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-white">{exp.position}</h4>
                    <p className="text-xs text-cyan-300">{exp.organization}</p>
                  </div>
                  <span className="text-xs font-mono text-text-muted">{exp.duration}</span>
                </div>
                <ul className="mt-2.5 space-y-1 text-xs text-slate-300">
                  {exp.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-1.5">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-xs uppercase tracking-wider font-bold text-indigo-400 font-mono mb-2">
              Featured Projects
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {projects.map((p) => (
                <div key={p.id} className="bg-white/5 p-3.5 rounded-xl border border-white/5">
                  <h4 className="font-bold text-white text-xs sm:text-sm">{p.title}</h4>
                  <p className="text-[11px] text-cyan-300 font-mono mt-0.5">{p.technologies.join(', ')}</p>
                  <p className="text-xs text-text-muted mt-1 leading-snug">{p.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs uppercase tracking-wider font-bold text-indigo-400 font-mono mb-2">
              Education
            </h3>
            <div className="space-y-2.5">
              {education.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-start text-xs sm:text-sm">
                  <div>
                    <p className="font-bold text-white">{edu.degree}</p>
                    {edu.institute && <p className="text-xs text-text-muted">{edu.institute}</p>}
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono text-cyan-300">{edu.status}</span>
                    <p className="text-[11px] font-mono text-slate-400">{edu.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

