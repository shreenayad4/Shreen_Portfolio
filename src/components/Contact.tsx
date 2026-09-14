import React, { useState } from 'react';
import {
  Mail,
  Linkedin,
  Github,
  Phone,
  MapPin,
  Check,
  Copy,
  ArrowRight,
  ArrowUp,
  MessageSquare,
  Sparkles,
  Send,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  onOpenCVModal: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenCVModal }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [projectScope, setProjectScope] = useState('Data Cleaning & Preprocessing');
  const [clientMessage, setClientMessage] = useState('');
  const [formSent, setFormSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry regarding ${projectScope} - from ${clientName || 'Portfolio Visitor'}`);
    const body = encodeURIComponent(
      `Hello Shreen,\n\nMy name is ${clientName} (${clientEmail}).\n\nI am reaching out regarding: ${projectScope}\n\nProject details:\n${clientMessage}\n\nBest regards,\n${clientName}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setFormSent(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-24 bg-[#0b0f17] relative overflow-hidden">
      {/* Tech background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-96 bg-sky-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Strong Final CTA Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-950/80 border border-sky-800/80 text-xs font-semibold text-sky-300 uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Page 11 • Get In Touch</span>
          </div>

          <h2
            id="contact-headline"
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight"
          >
            Let&apos;s Turn Data Into Insights.
          </h2>

          <p
            id="contact-subtext"
            className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal"
          >
            I&apos;m open to opportunities where I can use data analysis, Python, SQL, Excel, and visualization to solve real-world problems and create meaningful insights.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              id="contact-primary-connect-btn"
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white bg-sky-600 hover:bg-sky-500 shadow-lg shadow-sky-600/30 transition-all hover:translate-y-[-1px]"
            >
              <Mail className="w-4 h-4" />
              <span>Let&apos;s Connect</span>
            </a>

            <button
              id="contact-secondary-projects-btn"
              onClick={scrollToProjects}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-slate-200 bg-slate-800/90 hover:bg-slate-700 border border-slate-700 transition-all hover:translate-y-[-1px]"
            >
              <span>View My Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Contact Details & Direct Connect Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left max-w-5xl mx-auto">
          
          {/* Left Column: Direct Info Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-5">
              <h3 className="text-base font-bold text-white tracking-wide flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-sky-400" />
                <span>Contact Channels</span>
              </h3>

              {/* Email with 1-click Copy */}
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  Direct Email
                </span>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-xs sm:text-sm font-mono text-sky-400 hover:underline truncate"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors shrink-0"
                    title="Copy Email Address"
                    aria-label="Copy Email Address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                {copiedEmail && (
                  <p className="text-[11px] text-emerald-400 font-medium animate-in fade-in">
                    ✓ Email copied to clipboard!
                  </p>
                )}
              </div>

              {/* Phone from CV */}
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  Phone / WhatsApp
                </span>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200 font-mono">
                  <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-sky-400 transition-colors">
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  Location
                </span>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-2 pt-2 border-t border-slate-800">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  Professional Profiles
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    id="contact-linkedin-link"
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-xs font-semibold text-slate-200 hover:text-white transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-sky-400" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    id="contact-github-link"
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-xs font-semibold text-slate-200 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

              {/* View CV Button */}
              <button
                id="contact-view-cv-modal-btn"
                onClick={onOpenCVModal}
                className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-bold text-slate-200 hover:text-white transition-colors"
              >
                Inspect Official Curriculum Vitae (CV)
              </button>
            </div>
          </div>

          {/* Right Column: Direct Message / Project Inquiry Composer (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-4">
              <div>
                <h3 className="text-base font-bold text-white tracking-wide">
                  Send a Direct Message / Project Inquiry
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Have a job opening or freelance project? Fill out this quick form to prepare a direct email.
                </p>
              </div>

              <form onSubmit={handleSendMessage} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Connor"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@company.com"
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-sky-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Service or Project Scope</label>
                  <select
                    value={projectScope}
                    onChange={(e) => setProjectScope(e.target.value)}
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-sky-500"
                  >
                    <option value="Data Cleaning & Preprocessing">Data Cleaning &amp; Preprocessing</option>
                    <option value="Exploratory Data Analysis (EDA)">Exploratory Data Analysis (EDA)</option>
                    <option value="Python Data Analysis & Pipelines">Python Data Analysis &amp; Pipelines</option>
                    <option value="SQL Querying & Schema Design">SQL Querying &amp; Schema Design</option>
                    <option value="Excel Dynamic Dashboards & KPI Reports">Excel Dynamic Dashboards &amp; KPI Reports</option>
                    <option value="Full-Time / Internship Role">Full-Time / Internship Role</option>
                    <option value="Other Consulting Project">Other Consulting Project</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Project Details / Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your dataset, project objectives, or role..."
                    value={clientMessage}
                    onChange={(e) => setClientMessage(e.target.value)}
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-sky-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-sky-600 hover:bg-sky-500 font-semibold text-xs sm:text-sm text-white transition-all shadow-md shadow-sky-600/30 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email</span>
                </button>

                {formSent && (
                  <p className="text-xs text-emerald-400 text-center font-medium">
                    ✓ Email client opened! Looking forward to connecting.
                  </p>
                )}
              </form>
            </div>
          </div>

        </div>

        {/* Back to Top */}
        <div className="mt-16 text-center">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-sky-400 transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
            <span>Back to top</span>
          </button>
        </div>

      </div>
    </section>
  );
};
