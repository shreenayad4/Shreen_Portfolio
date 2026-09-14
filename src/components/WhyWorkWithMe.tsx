import React from 'react';
import {
  Sparkles,
  Layers,
  LayoutDashboard,
  Brain,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { VALUE_PROPOSITION_POINTS, PERSONAL_INFO } from '../data/portfolioData';

export const WhyWorkWithMe: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Brain: <Brain className="w-6 h-6 text-sky-400" />,
    Layers: <Layers className="w-6 h-6 text-sky-400" />,
    LayoutDashboard: <LayoutDashboard className="w-6 h-6 text-sky-400" />,
    Sparkles: <Sparkles className="w-6 h-6 text-sky-400" />,
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="why-me" className="py-20 bg-[#0b0f17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/60 border border-sky-800/60 text-xs font-semibold text-sky-300 uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Page 3 • Value Proposition &amp; USP</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Why Work With Me?
          </h2>

          {/* Prominent USP Banner */}
          <div className="mt-4 p-5 rounded-2xl bg-gradient-to-r from-sky-950/50 via-slate-900 to-slate-900 border border-sky-800/40 shadow-md">
            <p className="text-base sm:text-lg text-sky-200 font-medium leading-relaxed">
              &ldquo;{PERSONAL_INFO.usp}&rdquo;
            </p>
          </div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {VALUE_PROPOSITION_POINTS.map((point, index) => (
            <div
              key={index}
              id={`usp-card-${index + 1}`}
              className="group p-6 rounded-2xl bg-slate-900/70 hover:bg-slate-900 border border-slate-800 hover:border-sky-500/50 transition-all duration-200 flex flex-col justify-between shadow-lg"
            >
              <div>
                {/* Icon Header */}
                <div className="w-12 h-12 rounded-xl bg-sky-950/60 border border-sky-800/40 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  {iconMap[point.icon]}
                </div>

                {/* Point Title */}
                <h3 className="text-base font-bold text-white mb-2.5 leading-snug group-hover:text-sky-300 transition-colors">
                  {point.title}
                </h3>

                {/* Point Description */}
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {point.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span>Pillar 0{index + 1}</span>
                <span className="text-sky-400 font-medium">CV Verified</span>
              </div>
            </div>
          ))}
        </div>

        {/* Client-Focused CTA Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div>
            <h4 className="text-sm font-bold text-white">
              Have a raw dataset or reporting challenge?
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Let's discuss how Python pipelines and dynamic dashboards can save you hours of manual work.
            </p>
          </div>
          <button
            onClick={() => scrollToSection('contact')}
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-xs sm:text-sm font-semibold text-white transition-all shadow-sm shadow-sky-600/30"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
