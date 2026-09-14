import React from 'react';
import {
  GraduationCap,
  Award,
  BookOpen,
  CheckCircle,
  Database,
  BarChart3,
  Code2,
  TrendingUp,
} from 'lucide-react';
import { ABOUT_TEXT, PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const focusAreas = [
    { label: 'Data Analysis & EDA', icon: BarChart3 },
    { label: 'Python (Pandas & NumPy)', icon: Code2 },
    { label: 'SQL & Database Querying', icon: Database },
    { label: 'Excel & Dynamic Dashboards', icon: TrendingUp },
    { label: 'Business Intelligence', icon: Award },
    { label: 'Statistical Analysis', icon: BookOpen },
  ];

  return (
    <section id="about" className="py-20 bg-[#0c121e] border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/60 border border-sky-800/60 text-xs font-semibold text-sky-300 uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Page 2 • Background &amp; Focus</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            About Me
          </h2>
          <p className="mt-2 text-base text-slate-400">
            Translating mathematical rigor and computer science principles into high-impact analytical solutions.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Narrative (100–150 words, value focused) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="prose prose-invert max-w-none text-slate-300 text-base sm:text-lg leading-relaxed font-normal space-y-4">
              <p>
                I am a Computer Science &amp; Mathematics student at Menofia University (Faculty of Science) and currently enrolled in the intensive Professional Data Analysis Track at the Digital Egypt Pioneers Initiative (DEPI) under the Ministry of Communications and Information Technology.
              </p>
              <p>
                My core analytical focus encompasses Data Analysis, Python, SQL, Excel, Data Visualization, Exploratory Data Analysis (EDA), Business Intelligence, and Statistical Modeling.
              </p>
              <p className="text-sky-300 font-medium">
                Rather than simply generating static reports, I provide tangible business value: structuring reusable, object-oriented data pipelines, detecting hidden patterns, and engineering interactive dashboards that empower leadership to make confident, data-backed decisions.
              </p>
            </div>

            {/* Quick credentials badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-sky-400 mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider">Education</h4>
                  <p className="text-sm font-semibold text-white">Menofia University (2024–2028)</p>
                  <p className="text-xs text-emerald-400 font-medium">Grade: Very Good</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-3">
                <Award className="w-5 h-5 text-sky-400 mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider">Professional Track</h4>
                  <p className="text-sm font-semibold text-white">DEPI Initiative (2026–Present)</p>
                  <p className="text-xs text-sky-400 font-medium">Data Analysis Track • MCIT Egypt</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Focus Areas Chips */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl space-y-4">
              <h3 className="text-base font-bold text-white tracking-wide flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-sky-400" />
                <span>Primary Technical Focus Areas</span>
              </h3>
              <p className="text-xs text-slate-400">
                Core analytical capabilities backed by university coursework and DEPI intensive practical projects:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {focusAreas.map((area, idx) => {
                  const Icon = area.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/60 text-slate-200 text-xs font-medium hover:border-sky-500/40 transition-colors"
                    >
                      <Icon className="w-4 h-4 text-sky-400 shrink-0" />
                      <span className="truncate">{area.label}</span>
                    </div>
                  );
                })}
              </div>

              <div className="pt-3 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                <span>Location: <strong className="text-slate-200">{PERSONAL_INFO.location}</strong></span>
                <span className="text-emerald-400 font-semibold">Available for Work</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
