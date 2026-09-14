import React from 'react';
import {
  ArrowDown,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
  FileSpreadsheet,
  Database,
  Code2,
  CheckCircle2,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenCVModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCVModal }) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 sm:pt-28 pb-16 flex items-center bg-[#0b0f17] overflow-hidden"
    >
      {/* Subtle tech background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Subtle accent light pools (dark navy / subtle teal) */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-900/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Typography & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col text-left space-y-6">
            
            {/* Top Badges / Location & Status */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div
                id="hero-status-pill"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/70 text-xs font-medium text-slate-300 shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Open for Data Analyst Roles &amp; Freelance</span>
              </div>

              <div
                id="hero-location-pill"
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-800/40 border border-slate-700/50 text-xs text-slate-400"
              >
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>

            {/* VERY PROMINENT NAME (Largest typographic element) */}
            <div className="space-y-2">
              <h1
                id="hero-primary-name"
                className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white uppercase font-sans leading-[1.05]"
              >
                {PERSONAL_INFO.name}
              </h1>

              {/* Subheading: Professional Title */}
              <div className="flex items-center gap-2 pt-1">
                <p
                  id="hero-professional-title"
                  className="text-lg sm:text-xl md:text-2xl font-semibold text-sky-400 tracking-normal"
                >
                  {PERSONAL_INFO.title}
                </p>
              </div>
            </div>

            {/* Professional Value Statement */}
            <p
              id="hero-value-statement"
              className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed font-normal"
            >
              &ldquo;{PERSONAL_INFO.shortBio}&rdquo;
            </p>

            {/* Core Capability Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1 max-w-xl">
              <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300">
                <Code2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="truncate">Python (Pandas, NumPy)</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300">
                <Database className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="truncate">SQL Querying &amp; Schemas</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300">
                <FileSpreadsheet className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="truncate">Excel Dynamic Dashboards</span>
              </div>
            </div>

            {/* CTAs: "View My Projects" & "Let's Connect" */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                id="hero-cta-view-projects"
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white bg-sky-600 hover:bg-sky-500 shadow-lg shadow-sky-600/30 transition-all hover:translate-y-[-1px] active:translate-y-0"
              >
                <span>View My Projects</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                id="hero-cta-lets-connect"
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-slate-200 bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 hover:text-white transition-all hover:translate-y-[-1px]"
              >
                <span>Let's Connect</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Social & Contact Links */}
            <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center gap-6">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                Direct Channels:
              </span>

              <a
                id="hero-link-github"
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-sky-400 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span className="font-medium">GitHub</span>
              </a>

              <a
                id="hero-link-linkedin"
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-sky-400 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-sky-400" />
                <span className="font-medium">LinkedIn</span>
              </a>

              <a
                id="hero-link-email"
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-sky-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-sky-400" />
                <span className="font-medium">{PERSONAL_INFO.email}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Prominent Photo with Natural, Clean, Sophisticated Composition (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer decorative ring and backdrop frame */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-sky-600/30 via-slate-700/20 to-indigo-600/30 blur-sm" />
              
              <div className="relative rounded-2xl bg-slate-900/90 border border-slate-700/80 p-3 shadow-2xl shadow-black/40 overflow-hidden">
                
                {/* Natural image container with 3:4 aspect ratio */}
                <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden bg-slate-950">
                  <img
                    id="hero-personal-photo"
                    src={PERSONAL_INFO.photoUrl}
                    alt="Shreen Reda Ayad - Data Analyst"
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                    loading="eager"
                  />
                  
                  {/* Subtle bottom gradient overlay for card integration */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0b0f17] via-[#0b0f17]/60 to-transparent pointer-events-none" />

                  {/* Caption badge overlay */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-left">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold text-white tracking-wide">
                          Shreen Reda Ayad
                        </p>
                        <p className="text-[11px] text-sky-400 font-medium">
                          Menofia University • DEPI Fellow
                        </p>
                      </div>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800/60">
                        Verified CV
                      </span>
                    </div>
                  </div>
                </div>

                {/* Quick Academic & Training Highlight Bar */}
                <div className="mt-3 pt-3 border-t border-slate-800 grid grid-cols-2 gap-2 text-left">
                  <div className="px-2 py-1.5 rounded-lg bg-slate-800/50">
                    <span className="text-[10px] uppercase text-slate-400 font-semibold block">Education</span>
                    <span className="text-xs font-semibold text-slate-200 block truncate">Math &amp; Computer Sci.</span>
                    <span className="text-[10px] text-emerald-400 font-medium">Grade: Very Good</span>
                  </div>
                  <div className="px-2 py-1.5 rounded-lg bg-slate-800/50">
                    <span className="text-[10px] uppercase text-slate-400 font-semibold block">DEPI Training</span>
                    <span className="text-xs font-semibold text-slate-200 block truncate">Data Analysis Track</span>
                    <span className="text-[10px] text-sky-400 font-medium">2026 – Present</span>
                  </div>
                </div>

              </div>

              {/* Small floating tag */}
              <div className="absolute -top-3 -right-3 px-3 py-1 rounded-full bg-slate-800 border border-sky-500/40 text-[11px] font-semibold text-sky-300 shadow-lg flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                <span>100% CV Authenticated</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
