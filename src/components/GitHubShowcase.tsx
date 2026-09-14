import React from 'react';
import {
  Github,
  FolderGit2,
  ExternalLink,
  Code2,
  Terminal,
  FileCode,
  ArrowRight,
  GitBranch,
} from 'lucide-react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';

export const GitHubShowcase: React.FC = () => {
  return (
    <section id="github" className="py-20 bg-[#0c121e] border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/60 border border-sky-800/60 text-xs font-semibold text-sky-300 uppercase tracking-wider mb-3">
            <Github className="w-3.5 h-3.5" />
            <span>Page 10 • Open Source &amp; Code Repositories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Explore My Code &amp; Projects
          </h2>
          <p className="mt-2 text-base text-slate-400">
            Transparent, reproducible codebases showcasing clean Python OOP architecture, Pandas pipelines, SQL scripts, and data cleaning utilities.
          </p>
        </div>

        {/* GitHub Banner Card */}
        <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl relative overflow-hidden text-left mb-8">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-sky-900/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-slate-950 border border-slate-700 flex items-center justify-center shrink-0">
                <Github className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  github.com/shreenayad4
                </h3>
                <p className="text-xs sm:text-sm text-sky-400 font-mono mt-0.5">
                  @shreenayad4 • Data Analyst &amp; CS Student
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Modular data pipelines, Jupyter notebooks, automated reporting scripts, and clean datasets.
                </p>
              </div>
            </div>

            <a
              id="github-showcase-visit-btn"
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-sky-600 hover:bg-sky-500 shadow-lg shadow-sky-600/30 transition-all hover:translate-y-[-1px] shrink-0"
            >
              <span>Visit My GitHub</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Repositories Cards Grid strictly matching CV projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {PROJECTS.map((project, idx) => (
            <div
              key={project.id}
              id={`repo-card-${project.id}`}
              className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between shadow-lg group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                  <div className="flex items-center gap-1.5 font-mono text-sky-400">
                    <FolderGit2 className="w-4 h-4 text-sky-400" />
                    <span>shreenayad4 / {project.id}</span>
                  </div>
                  <GitBranch className="w-3.5 h-3.5 text-slate-500" />
                </div>

                <h4 className="text-base font-bold text-white mb-2 group-hover:text-sky-300 transition-colors leading-snug">
                  {project.title}
                </h4>

                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-4">
                  {project.goal}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tools.slice(0, 4).map((tool, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-950 text-slate-300 border border-slate-800"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">Public Repository</span>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-sky-400 hover:text-sky-300 inline-flex items-center gap-1"
                >
                  <span>Inspect Code</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
