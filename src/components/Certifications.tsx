import React from 'react';
import {
  Award,
  CheckCircle,
  ExternalLink,
  ShieldCheck,
  BookMarked,
} from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  const getIssuerBadgeColor = (issuer: string) => {
    switch (issuer) {
      case 'Coursera':
        return 'bg-blue-950/60 text-blue-300 border-blue-800/60';
      case 'Udemy':
        return 'bg-purple-950/60 text-purple-300 border-purple-800/60';
      case 'LinkedIn Learning':
        return 'bg-sky-950/60 text-sky-300 border-sky-800/60';
      default:
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  return (
    <section id="certifications" className="py-20 bg-[#0b0f17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/60 border border-sky-800/60 text-xs font-semibold text-sky-300 uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Page 7 • Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Professional Certifications &amp; Courses
          </h2>
          <p className="mt-2 text-base text-slate-400">
            Industry-recognized credentials verified through Coursera, Udemy, and LinkedIn Learning.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              id={`cert-card-${cert.id}`}
              className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all duration-200 flex flex-col justify-between shadow-lg group"
            >
              <div>
                {/* Header with Issuer Pill */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold border ${getIssuerBadgeColor(
                      cert.issuer
                    )}`}
                  >
                    <BookMarked className="w-3 h-3" />
                    <span>{cert.issuer}</span>
                  </span>

                  <span className="text-[11px] font-medium text-slate-400">
                    {cert.tag}
                  </span>
                </div>

                {/* Certificate Title */}
                <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-sky-300 transition-colors">
                  {cert.title}
                </h3>

                <p className="text-xs text-slate-400">
                  Comprehensive coursework covering data methodology, querying, modeling, and business analytics.
                </p>
              </div>

              {/* Footer with Verification status */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="inline-flex items-center gap-1 text-emerald-400 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Credential Verified in CV</span>
                </span>
                <span className="text-slate-400 text-[11px]">Authorized</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
