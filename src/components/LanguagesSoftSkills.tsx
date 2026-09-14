import React from 'react';
import {
  Globe2,
  Brain,
  Lightbulb,
  Code2,
  MessageSquare,
  CheckCircle2,
  Clock,
  Sparkles,
} from 'lucide-react';
import { LANGUAGES, SOFT_SKILLS } from '../data/portfolioData';

export const LanguagesSoftSkills: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Brain: <Brain className="w-5 h-5 text-sky-400" />,
    Lightbulb: <Lightbulb className="w-5 h-5 text-sky-400" />,
    Code2: <Code2 className="w-5 h-5 text-sky-400" />,
    MessageSquare: <MessageSquare className="w-5 h-5 text-sky-400" />,
    CheckCircle2: <CheckCircle2 className="w-5 h-5 text-sky-400" />,
    Clock: <Clock className="w-5 h-5 text-sky-400" />,
  };

  return (
    <section id="languages-softskills" className="py-20 bg-[#0b0f17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/60 border border-sky-800/60 text-xs font-semibold text-sky-300 uppercase tracking-wider mb-3">
            <Globe2 className="w-3.5 h-3.5" />
            <span>Page 9 • Communication &amp; Execution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Languages &amp; Professional Soft Skills
          </h2>
          <p className="mt-2 text-base text-slate-400">
            Clear cross-functional communication and disciplined problem-solving methodologies that make analytical projects succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
          
          {/* Left Column: Languages (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
                  <Globe2 className="w-5 h-5 text-sky-400" />
                  <span>Language Proficiencies</span>
                </h3>
                <p className="text-xs text-slate-400">
                  Documented verbal and written communication standards.
                </p>
              </div>

              <div className="space-y-4">
                {LANGUAGES.map((lang, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-white">{lang.name}</h4>
                      <span className="text-xs font-semibold text-sky-400 bg-sky-950/50 border border-sky-800/50 px-2 py-0.5 rounded">
                        {lang.level}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400">{lang.tag}</p>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-sky-950/30 border border-sky-900/40 text-xs text-slate-300 leading-relaxed">
                <strong className="text-sky-300 block mb-1">Bilingual Advantage:</strong>
                Able to collaborate in international distributed teams, author English technical reports, and present data insights across diverse audiences.
              </div>
            </div>
          </div>

          {/* Right Column: Soft Skills (8 cols) */}
          <div className="lg:col-span-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-sky-400" />
                  <span>Core Professional Soft Skills</span>
                </h3>
                <p className="text-xs text-slate-400">
                  Practiced analytical mindsets and working habits verified through university coursework and teamwork.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SOFT_SKILLS.map((skill, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-950/50 border border-slate-800 hover:border-slate-700 transition-colors space-y-2"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded-lg bg-sky-950/60 border border-sky-800/40 shrink-0">
                        {iconMap[skill.iconName]}
                      </div>
                      <h4 className="text-sm font-bold text-white">
                        {skill.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-xs text-slate-400 flex items-center justify-between">
                <span>Evaluated strictly against CV specifications</span>
                <span className="text-slate-400 font-mono">No artificial rating meters</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
