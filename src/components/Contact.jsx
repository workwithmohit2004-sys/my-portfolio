import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  Linkedin, 
  Github, 
  MessageSquare, 
  AlertCircle,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Contact = () => {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [copiedType, setCopiedType] = useState(null); // 'phone' | 'email' | null
  const [submissionStatus, setSubmissionStatus] = useState(null); // null | 'ready-to-send'

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please enter your name (minimum 2 characters)';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address';
    }

    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      errs.subject = 'Please provide a subject line';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please write a message of at least 10 characters';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Build mailto URI
    const encodedSubject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
    const encodedBody = encodeURIComponent(
      `Hello Mohit,\n\nMy name is ${formData.name} (${formData.email}).\n\n${formData.message}\n\nBest regards,\n${formData.name}`
    );
    const mailtoUrl = `mailto:${personal.email}?subject=${encodedSubject}&body=${encodedBody}`;

    // Open mailto link
    window.location.href = mailtoUrl;
    setSubmissionStatus('ready-to-send');
  };

  const handleCopyFormattedMessage = () => {
    const text = `To: ${personal.email}\nSubject: [Portfolio Inquiry] ${formData.subject}\nFrom: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`;
    navigator.clipboard.writeText(text);
    setCopiedType('formatted');
    setTimeout(() => setCopiedType(null), 3000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Work Together</span>
          </h2>
          <p className="text-text-muted text-sm sm:text-base max-w-xl mx-auto mt-2">
            Have a project in mind or looking for a passionate frontend developer? Feel free to get in touch. I'd love to connect!
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto mt-3 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Phone Card */}
            <div className="glass-card rounded-2xl p-5 border border-white/5 flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-mono text-text-muted uppercase tracking-wider">Phone / WhatsApp</p>
                  <a 
                    href={`tel:${personal.phone.replace(/[^+\d]/g, '')}`} 
                    className="text-sm sm:text-base font-bold text-white hover:text-cyan-300 transition-colors"
                  >
                    {personal.phone}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleCopy(personal.phone, 'phone')}
                title="Copy phone number"
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/5 transition-colors cursor-pointer"
              >
                {copiedType === 'phone' ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Email Card */}
            <div className="glass-card rounded-2xl p-5 border border-white/5 flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-mono text-text-muted uppercase tracking-wider">Email Address</p>
                  <a 
                    href={`mailto:${personal.email}`} 
                    className="text-sm sm:text-base font-bold text-white hover:text-cyan-300 transition-colors break-all"
                  >
                    {personal.email}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleCopy(personal.email, 'email')}
                title="Copy email address"
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/5 transition-colors cursor-pointer"
              >
                {copiedType === 'email' ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Location Card */}
            <div className="glass-card rounded-2xl p-5 border border-white/5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] font-mono text-text-muted uppercase tracking-wider">Location</p>
                <p className="text-sm sm:text-base font-bold text-white">
                  {personal.location}
                </p>
              </div>
            </div>

            {/* Social Links Banner */}
            <div className="glass-card rounded-2xl p-6 border border-white/5">
              <p className="text-xs uppercase font-mono tracking-wider text-text-muted mb-4">
                Professional Profiles:
              </p>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white border border-white/10 text-xs font-semibold transition-all hover:-translate-y-0.5"
                >
                  <Github className="w-4 h-4 text-white" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 text-text-muted ml-auto" />
                </a>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 hover:text-cyan-400 border border-white/10 text-xs font-semibold transition-all hover:-translate-y-0.5"
                >
                  <Linkedin className="w-4 h-4 text-cyan-400" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 text-text-muted ml-auto" />
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 border border-white/5 relative"
          >
            <h3 className="text-xl font-bold text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-text-muted mb-6">
              Fill out the form below. Submitting will launch your default email client with your message pre-formatted.
            </p>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-slate-300 mb-1.5 font-mono">
                    Your Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Verma"
                    className={`w-full px-4 py-3 rounded-xl bg-[#080B14] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                      errors.name 
                        ? 'border-rose-500/50 focus:ring-rose-500/30' 
                        : 'border-white/10 focus:border-indigo-500 focus:ring-indigo-500/20'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-slate-300 mb-1.5 font-mono">
                    Your Email <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className={`w-full px-4 py-3 rounded-xl bg-[#080B14] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                      errors.email 
                        ? 'border-rose-500/50 focus:ring-rose-500/30' 
                        : 'border-white/10 focus:border-indigo-500 focus:ring-indigo-500/20'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-xs font-medium text-slate-300 mb-1.5 font-mono">
                  Subject <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Frontend Developer Role / Project Inquiry"
                  className={`w-full px-4 py-3 rounded-xl bg-[#080B14] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                    errors.subject 
                      ? 'border-rose-500/50 focus:ring-rose-500/30' 
                      : 'border-white/10 focus:border-indigo-500 focus:ring-indigo-500/20'
                  }`}
                />
                {errors.subject && (
                  <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1 font-mono">
                    <AlertCircle className="w-3 h-3" />
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-medium text-slate-300 mb-1.5 font-mono">
                  Your Message <span className="text-rose-400">*</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hello Mohit, I came across your portfolio and would like to discuss an opportunity..."
                  className={`w-full px-4 py-3 rounded-xl bg-[#080B14] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all resize-none ${
                    errors.message 
                      ? 'border-rose-500/50 focus:ring-rose-500/30' 
                      : 'border-white/10 focus:border-indigo-500 focus:ring-indigo-500/20'
                  }`}
                />
                {errors.message && (
                  <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1 font-mono">
                    <AlertCircle className="w-3 h-3" />
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:opacity-95 shadow-lg shadow-indigo-600/25 hover:shadow-glow-primary transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send Message via Email Client</span>
              </button>
            </form>

            {/* Honest Feedback Banner (No pretending a fake backend stored it) */}
            {submissionStatus === 'ready-to-send' && (
              <div className="mt-6 p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/30 animate-fadeIn">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      Draft Prepared & Email Client Launched!
                    </h4>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      Your default mail application has been opened with your message. If your browser didn't launch an email client, click below to copy the formatted text directly into Gmail:
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={handleCopyFormattedMessage}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-white bg-white/10 hover:bg-white/20 transition-colors"
                      >
                        {copiedType === 'formatted' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        {copiedType === 'formatted' ? 'Message Copied!' : 'Copy Formatted Email Text'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </motion.div>

        </div>

      </div>
    </section>
  );
};

