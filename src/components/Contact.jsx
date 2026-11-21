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
  AlertCircle,
  CheckCircle2,
  ExternalLink,
  Loader2
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Contact = () => {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    botField: '' // Honeypot field for bot protection
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // null | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState('');
  const [copiedType, setCopiedType] = useState(null); // 'phone' | 'email' | null

  // Clipboard copy handler with modern API and fallback
  const handleCopy = async (text, type) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopiedType(type);
      setTimeout(() => setCopiedType(null), 2500);
    } catch (err) {
      console.error('Failed to copy to clipboard: ', err);
    }
  };

  // Field validation rules
  const validateField = (fieldName, value) => {
    switch (fieldName) {
      case 'name':
        if (!value.trim()) return 'Your Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return '';

      case 'email':
        if (!value.trim()) return 'Your Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value.trim())) return 'Please enter a valid email address (e.g. name@domain.com)';
        return '';

      case 'subject':
        if (!value.trim()) return 'Subject is required';
        if (value.trim().length < 3) return 'Subject must be at least 3 characters';
        return '';

      case 'message':
        if (!value.trim()) return 'Your Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        return '';

      default:
        return '';
    }
  };

  // Handle live input change & clear errors dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name]) {
      const fieldError = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: fieldError }));
    }
  };

  // Handle onBlur for immediate feedback
  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const fieldError = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: fieldError }));
  };

  // Form submission handler communicating directly with /api/send-email (Resend backend)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      subject: validateField('subject', formData.subject),
      message: validateField('message', formData.message)
    };

    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true
    });
    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some(Boolean);
    if (hasErrors) {
      return;
    }

    setIsSubmitting(true);
    setSubmissionStatus(null);
    setStatusMessage('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
          botField: formData.botField
        })
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && data.success) {
        setSubmissionStatus('success');
        setStatusMessage("Message sent successfully! I'll get back to you soon.");
        // Clear form upon success
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          botField: ''
        });
        setTouched({});
        setErrors({});
      } else {
        setSubmissionStatus('error');
        setStatusMessage(data.error || "Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setSubmissionStatus('error');
      setStatusMessage("Failed to send message. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
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
            {/* Phone Card with Copy Button */}
            <div className="glass-card rounded-2xl p-5 border border-white/5 flex items-center justify-between group hover:border-indigo-500/30 transition-all duration-300">
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
                aria-label="Copy phone number"
                title="Copy phone number"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 hover:border-indigo-500/30 transition-all duration-200 cursor-pointer active:scale-95"
              >
                {copiedType === 'phone' ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-mono font-medium text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400 group-hover:text-white" />
                    <span className="hidden sm:inline text-xs font-mono text-slate-400">Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Email Card with Copy Button */}
            <div className="glass-card rounded-2xl p-5 border border-white/5 flex items-center justify-between group hover:border-cyan-500/30 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-mono text-text-muted uppercase tracking-wider">Email Address</p>
                  <span className="text-sm sm:text-base font-bold text-white break-all">
                    {personal.email}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleCopy(personal.email, 'email')}
                aria-label="Copy email address"
                title="Copy email address"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 hover:border-cyan-500/30 transition-all duration-200 cursor-pointer active:scale-95"
              >
                {copiedType === 'email' ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-mono font-medium text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400 group-hover:text-white" />
                    <span className="hidden sm:inline text-xs font-mono text-slate-400">Copy</span>
                  </>
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

            {/* Social Links Banner - Clickable Profiles */}
            <div className="glass-card rounded-2xl p-6 border border-white/5">
              <p className="text-xs uppercase font-mono tracking-wider text-text-muted mb-4">
                Professional Profiles:
              </p>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white border border-white/10 hover:border-indigo-500/40 text-xs font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  <Github className="w-4 h-4 text-white" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 text-text-muted ml-auto" />
                </a>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 hover:text-cyan-400 border border-white/10 hover:border-cyan-500/40 text-xs font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  <Linkedin className="w-4 h-4 text-cyan-400" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 text-text-muted ml-auto" />
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Direct Email Contact Form (Resend API) */}
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
              Have an opportunity or question? Fill in your details below and your message will be delivered directly to my inbox.
            </p>

            {/* Honeypot field for bot protection (hidden) */}
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <input
                type="text"
                name="botField"
                value={formData.botField}
                onChange={handleChange}
                tabIndex="-1"
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-slate-300 mb-1.5 font-mono">
                    Your Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="e.g. Rahul Verma"
                    className={`w-full px-4 py-3 rounded-xl bg-[#080B14] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                      touched.name && errors.name 
                        ? 'border-rose-500/70 focus:ring-rose-500/30' 
                        : 'border-white/10 focus:border-indigo-500 focus:ring-indigo-500/20'
                    }`}
                  />
                  {touched.name && errors.name && (
                    <p className="text-[11px] text-rose-400 mt-1.5 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-slate-300 mb-1.5 font-mono">
                    Your Email <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="name@company.com"
                    className={`w-full px-4 py-3 rounded-xl bg-[#080B14] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                      touched.email && errors.email 
                        ? 'border-rose-500/70 focus:ring-rose-500/30' 
                        : 'border-white/10 focus:border-indigo-500 focus:ring-indigo-500/20'
                    }`}
                  />
                  {touched.email && errors.email && (
                    <p className="text-[11px] text-rose-400 mt-1.5 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-xs font-medium text-slate-300 mb-1.5 font-mono">
                  Subject <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Frontend Developer Opportunity / Project Inquiry"
                  className={`w-full px-4 py-3 rounded-xl bg-[#080B14] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                    touched.subject && errors.subject 
                      ? 'border-rose-500/70 focus:ring-rose-500/30' 
                      : 'border-white/10 focus:border-indigo-500 focus:ring-indigo-500/20'
                  }`}
                />
                {touched.subject && errors.subject && (
                  <p className="text-[11px] text-rose-400 mt-1.5 flex items-center gap-1 font-mono">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    <span>{errors.subject}</span>
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label htmlFor="message" className="block text-xs font-medium text-slate-300 font-mono">
                    Your Message <span className="text-rose-400">*</span>
                  </label>
                  <span className="text-[11px] font-mono text-slate-500">
                    {formData.message.length} chars (min 10)
                  </span>
                </div>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Hello Mohit, I came across your portfolio and would love to discuss an opportunity..."
                  className={`w-full px-4 py-3 rounded-xl bg-[#080B14] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all resize-none ${
                    touched.message && errors.message 
                      ? 'border-rose-500/70 focus:ring-rose-500/30' 
                      : 'border-white/10 focus:border-indigo-500 focus:ring-indigo-500/20'
                  }`}
                />
                {touched.message && errors.message && (
                  <p className="text-[11px] text-rose-400 mt-1.5 flex items-center gap-1 font-mono">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Submit Button with Loading State and Hover */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:opacity-95 shadow-lg shadow-indigo-600/25 hover:shadow-glow-primary transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>

            {/* Success Feedback Indicator */}
            {submissionStatus === 'success' && (
              <div className="mt-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 animate-fadeIn flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Message Sent!</h4>
                  <p className="text-xs text-emerald-300 mt-0.5">{statusMessage}</p>
                </div>
              </div>
            )}

            {/* Error Feedback Indicator */}
            {submissionStatus === 'error' && (
              <div className="mt-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 animate-fadeIn flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Submission Error</h4>
                  <p className="text-xs text-rose-300 mt-0.5">{statusMessage}</p>
                </div>
              </div>
            )}

          </motion.div>

        </div>

      </div>
    </section>
  );
};
