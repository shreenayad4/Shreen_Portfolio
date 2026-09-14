import React from 'react';
import {
  Filter,
  Search,
  Terminal,
  Database,
  FileSpreadsheet,
  Activity,
  LayoutDashboard,
  Cpu,
  BarChart2,
  TrendingUp,
  Briefcase,
  ArrowRight,
} from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

export const Services: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Filter: <Filter className="w-5 h-5 text-sky-400" />,
    Search: <Search className="w-5 h-5 text-sky-400" />,
    Terminal: <Terminal className="w-5 h-5 text-sky-400" />,
    Database: <Database className="w-5 h-5 text-sky-400" />,
    FileSpreadsheet: <FileSpreadsheet className="w-5 h-5 text-sky-400" />,
    Activity: <Activity className="w-5 h-5 text-sky-400" />,
    LayoutDashboard: <LayoutDashboard className="w-5 h-5 text-sky-400" />,
    Cpu: <Cpu className="w-5 h-5 text-sky-400" />,
    BarChart2: <BarChart2 className="w-5 h-5 text-sky-400" />,
    TrendingUp: <TrendingUp className="w-5 h-5 text-sky-400" />,
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-[#0c121e] border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/60 border border-sky-800/60 text-xs font-semibold text-sky-300 uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Page 8 • Client Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            What I Can Help With
          </h2>
          <p className="mt-2 text-base text-slate-400">
            End-to-end data analytics services tailored for startups, retail businesses, and analytics teams seeking clean data and clear insights.
          </p>
        </div>

        {/* Services Grid (10 client-focused cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {SERVICES.map((srv, idx) => (
            <div
              key={srv.id}
              id={`service-card-${srv.id}`}
              className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-sky-500/40 transition-all duration-200 flex flex-col justify-between shadow-lg group"
            >
              <div>
                {/* Icon & Index */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-950/60 border border-sky-800/50 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {iconMap[srv.iconName]}
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">
                    0{idx + 1}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-sky-300 transition-colors">
                  {srv.title}
                </h3>

                {/* Description (1-2 sentences) */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-4">
                  {srv.description}
                </p>

                {/* Deliverables checklist */}
                <div className="space-y-1.5 pt-3 border-t border-slate-800/80">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Typical Deliverables:
                  </span>
                  {srv.deliverables.map((deliv, i) => (
                    <div key={i} className="text-xs text-slate-300 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-sky-400 shrink-0" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">Python • SQL • Excel</span>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-xs font-semibold text-sky-400 group-hover:text-sky-300 inline-flex items-center gap-1"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
