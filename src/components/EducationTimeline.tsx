import React from 'react';
import {
  GraduationCap,
  Calendar,
  Award,
  BookOpen,
  CheckCircle2,
  Building2,
} from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const EducationTimeline: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-[#0c121e] border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/60 border border-sky-800/60 text-xs font-semibold text-sky-300 uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Page 6 • Education &amp; Training</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Education &amp; Professional Training
          </h2>
          <p className="mt-2 text-base text-slate-400">
            Rigorous mathematical foundations combined with intensive industry-aligned data analytics training.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
          {EDUCATION_DATA.map((item, idx) => {
            const isUniversity = item.id === 'bachelor';
            return (
              <div
                key={item.id}
                id={`education-card-${item.id}`}
                className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all duration-200 flex flex-col justify-between shadow-xl"
              >
                <div>
                  {/* Top Badge & Time */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-950/60 border border-sky-800/50 text-xs font-semibold text-sky-300">
                      {isUniversity ? <GraduationCap className="w-3.5 h-3.5" /> : <Award className="w-3.5 h-3.5" />}
                      <span>{isUniversity ? 'University Degree' : 'National Tech Initiative'}</span>
                    </span>

                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-sky-400" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Degree / Program Title */}
                  <h3 className="text-xl font-bold text-white tracking-tight leading-snug mb-1.5">
                    {item.degree}
                  </h3>

                  {/* Institution */}
                  <div className="flex items-center gap-2 text-sm text-sky-400 font-medium mb-3">
                    <Building2 className="w-4 h-4 shrink-0" />
                    <span>{item.institution}</span>
                  </div>

                  {/* Grade Badge if applicable */}
                  {item.grade && (
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-950/60 border border-emerald-800/60 text-xs font-bold text-emerald-300 mb-4">
                      <span>Academic Performance:</span>
                      <strong className="text-emerald-200">{item.grade}</strong>
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed font-normal mb-5">
                    {item.description}
                  </p>

                  {/* Core Highlights */}
                  {item.highlights && (
                    <div className="space-y-2 pt-2 border-t border-slate-800">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                        Curriculum Highlights:
                      </span>
                      <ul className="space-y-1.5">
                        {item.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 mt-0.5 shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Footer Tag */}
                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span>Status: <strong className="text-slate-200">{item.period.includes('Present') || item.period.includes('2028') ? 'Active / In Progress' : 'Completed'}</strong></span>
                  <span className="text-sky-400 font-medium">CV Documented</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
