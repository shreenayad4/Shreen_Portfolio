import React, { useState } from 'react';
import {
  FolderGit2,
  ExternalLink,
  Github,
  CheckCircle2,
  BarChart,
  ArrowRight,
  Sparkles,
  Layers,
  Database,
  X,
  Target,
  FileCode2,
  TrendingUp,
} from 'lucide-react';
import { PROJECTS, PERSONAL_INFO } from '../data/portfolioData';
import { Project } from '../types';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 bg-[#0b0f17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-left">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/60 border border-sky-800/60 text-xs font-semibold text-sky-300 uppercase tracking-wider mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Page 5 • Featured Projects</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Featured Case Studies &amp; Projects
            </h2>
            <p className="mt-2 text-base text-slate-400">
              Real-world analytical pipelines, interactive dashboards, and automated tools built using Python, SQL, and Excel.
            </p>
          </div>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors"
          >
            <span>Explore All Repositories on GitHub</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Project Cards List (Consistent Case Study Architecture) */}
        <div className="space-y-8 text-left">
          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all duration-200 shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Side: Summary & Case Study Details (8 cols) */}
                <div className="lg:col-span-8 space-y-5">
                  
                  {/* Category & Impact Tag */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-3 py-1 rounded-full bg-sky-950/70 border border-sky-800/60 text-xs font-semibold text-sky-300">
                      Project 0{index + 1} • {project.subtitle}
                    </span>
                    {project.impactMetric && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/50 border border-emerald-800/50 text-xs font-medium text-emerald-300">
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span>{project.impactMetric}</span>
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                    {project.title}
                  </h3>

                  {/* Problem / Goal */}
                  <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/60 space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-sky-400 flex items-center gap-1.5">
                      <Target className="w-3.5 h-3.5" />
                      Problem &amp; Objective
                    </span>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {project.goal}
                    </p>
                  </div>

                  {/* What I Did */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      What I Did (Methodology &amp; Implementation)
                    </h4>
                    <ul className="space-y-2">
                      {project.whatIDid.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tools & Technologies */}
                  <div className="space-y-2 pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Tools &amp; Technologies
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tools.map((tool, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700 text-xs font-medium"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Right Side: Key Features, Results & GitHub CTA (4 cols) */}
                <div className="lg:col-span-4 p-5 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-5 flex flex-col justify-between h-full">
                  
                  {/* Key Features */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-sky-400" />
                      Key Features &amp; Analysis
                    </h4>
                    <ul className="space-y-2">
                      {project.keyFeatures.map((feat, i) => (
                        <li key={i} className="text-xs text-slate-300 flex items-start gap-2 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Results / Impact */}
                  <div className="p-3.5 rounded-lg bg-slate-900 border border-sky-900/40 space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-sky-300 flex items-center gap-1.5">
                      <BarChart className="w-3.5 h-3.5 text-sky-400" />
                      Results &amp; Documented Impact
                    </h4>
                    <ul className="space-y-1.5">
                      {project.results.map((res, i) => (
                        <li key={i} className="text-xs text-slate-200 font-medium leading-relaxed">
                          • {res}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                    <a
                      id={`project-github-btn-${project.id}`}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 transition-colors shadow-sm shadow-sky-600/30"
                    >
                      <Github className="w-4 h-4" />
                      <span>View on GitHub</span>
                    </a>

                    <button
                      id={`project-deep-dive-btn-${project.id}`}
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
                    >
                      <span>Case Details</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-700 rounded-2xl p-6 sm:p-8 shadow-2xl text-left space-y-6">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
                  Case Study Deep Dive
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  {selectedProject.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Dataset: <strong className="text-slate-200">{selectedProject.dataset}</strong>
                </p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Close Case Study"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Problem Statement */}
            <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700 space-y-1">
              <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400">
                Problem &amp; Objective
              </h4>
              <p className="text-sm text-slate-200 leading-relaxed">
                {selectedProject.goal}
              </p>
            </div>

            {/* Implementation Steps */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Methodology &amp; Implementation Details
              </h4>
              <div className="space-y-2">
                {selectedProject.whatIDid.map((step, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-sky-950 text-sky-400 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 border border-sky-800">
                      {idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features & Results */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400">
                  Key Engineered Features
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {selectedProject.keyFeatures.map((f, i) => (
                    <li key={i}>• {f}</li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Documented Impact
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-200">
                  {selectedProject.results.map((r, i) => (
                    <li key={i}>• {r}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-xs font-semibold text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Visit GitHub Profile</span>
              </a>
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-lg bg-slate-800 text-xs font-semibold text-slate-300 hover:bg-slate-700 transition-colors"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
