import React, { useState } from 'react';
import {
  Code,
  BarChart3,
  Database,
  Workflow,
  FileSpreadsheet,
  Wrench,
  Search,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const iconMap: Record<string, React.ReactNode> = {
    Code: <Code className="w-5 h-5 text-sky-400" />,
    BarChart3: <BarChart3 className="w-5 h-5 text-sky-400" />,
    Database: <Database className="w-5 h-5 text-sky-400" />,
    Workflow: <Workflow className="w-5 h-5 text-sky-400" />,
    FileSpreadsheet: <FileSpreadsheet className="w-5 h-5 text-sky-400" />,
    Wrench: <Wrench className="w-5 h-5 text-sky-400" />,
  };

  const filteredCategories = SKILL_CATEGORIES.filter((cat) => {
    if (activeCategory !== 'all' && cat.id !== activeCategory) {
      return false;
    }
    if (!searchTerm.trim()) return true;

    const term = searchTerm.toLowerCase();
    const matchesTitle = cat.title.toLowerCase().includes(term);
    const matchesSkills = cat.skills.some((s) => s.toLowerCase().includes(term));
    return matchesTitle || matchesSkills;
  });

  const totalSkillsCount = SKILL_CATEGORIES.reduce((acc, cat) => acc + cat.skills.length, 0);

  return (
    <section id="skills" className="py-20 bg-[#0c121e] border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 text-left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/60 border border-sky-800/60 text-xs font-semibold text-sky-300 uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Page 4 • Technical Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Technical Skills &amp; Competencies
            </h2>
            <p className="mt-2 text-base text-slate-400">
              Categorized technical proficiencies verified by practical projects, coursework, and DEPI training. No fabricated percentages.
            </p>
          </div>

          {/* Search Bar for Quick Filtering */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search skills (e.g., Python, SQL, Excel)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl bg-slate-900 border border-slate-700 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
            />
          </div>
        </div>

        {/* Category Pills Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar text-left">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all shrink-0 ${
              activeCategory === 'all'
                ? 'bg-sky-600 text-white font-semibold shadow-sm shadow-sky-600/30'
                : 'bg-slate-800/60 text-slate-300 hover:bg-slate-800 hover:text-white'
            }`}
          >
            All Categories ({totalSkillsCount})
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all shrink-0 ${
                activeCategory === cat.id
                  ? 'bg-sky-600 text-white font-semibold shadow-sm shadow-sky-600/30'
                  : 'bg-slate-800/60 text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              id={`skill-card-${cat.id}`}
              className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all duration-200 flex flex-col justify-between shadow-lg"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-950/60 border border-sky-800/50 flex items-center justify-center">
                    {iconMap[cat.iconName]}
                  </div>
                  <span className="text-[11px] font-semibold text-sky-400 bg-sky-950/40 border border-sky-800/40 px-2.5 py-0.5 rounded-full">
                    {cat.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-4 tracking-tight">
                  {cat.title}
                </h3>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, idx) => {
                    const isMatched = searchTerm && skill.toLowerCase().includes(searchTerm.toLowerCase());
                    return (
                      <span
                        key={idx}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                          isMatched
                            ? 'bg-sky-500/20 text-sky-300 border-sky-400 font-semibold'
                            : 'bg-slate-800/70 text-slate-200 border-slate-700/60 hover:bg-slate-800'
                        }`}
                      >
                        <CheckCircle2 className="w-3 h-3 text-sky-400 shrink-0" />
                        <span>{skill}</span>
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Card Footer Badge */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span>{cat.skills.length} core competencies</span>
                <span className="text-slate-400">Production Tested</span>
              </div>
            </div>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="p-8 text-center rounded-2xl bg-slate-900/40 border border-slate-800">
            <p className="text-slate-400 text-sm">No skills found matching &ldquo;{searchTerm}&rdquo;.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setActiveCategory('all');
              }}
              className="mt-3 text-xs text-sky-400 underline font-medium"
            >
              Clear filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
