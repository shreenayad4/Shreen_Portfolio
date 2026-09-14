import React from 'react';
import {
  X,
  Printer,
  Download,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import {
  PERSONAL_INFO,
  ABOUT_TEXT,
  SKILL_CATEGORIES,
  EDUCATION_DATA,
  PROJECTS,
  CERTIFICATIONS,
  LANGUAGES,
  SOFT_SKILLS,
} from '../data/portfolioData';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-white text-slate-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto text-left">
        
        {/* Modal Top Control Bar (Non-printed) */}
        <div className="px-6 py-3.5 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800 print:hidden shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Official Curriculum Vitae — Shreen Reda Ayad
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-sky-600 hover:bg-sky-500 text-white transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close CV Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable CV Document Body */}
        <div className="p-8 sm:p-12 overflow-y-auto space-y-8 font-sans bg-white leading-relaxed text-slate-800">
          
          {/* Header */}
          <div className="border-b border-slate-300 pb-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight uppercase">
              {PERSONAL_INFO.name}
            </h1>
            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs sm:text-sm text-slate-600 mt-2 font-medium">
              <span>{PERSONAL_INFO.location}</span>
              <span>•</span>
              <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-sky-600">
                {PERSONAL_INFO.phone}
              </a>
              <span>•</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-sky-600">
                {PERSONAL_INFO.email}
              </a>
              <span>•</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-600"
              >
                {PERSONAL_INFO.linkedinDisplay}
              </a>
              <span>•</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-600"
              >
                {PERSONAL_INFO.githubDisplay}
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Data Analyst and Computer Science &amp; Mathematics student, currently enrolled in the Professional Data Analysis Track at Digital Egypt Pioneers Initiative (DEPI). Hands-on experience in data analytics, Python programming (Pandas, NumPy, Matplotlib, Seaborn), SQL, and statistical modeling. Skilled in building modular, scalable data preprocessing pipelines, performing exploratory data analysis (EDA), and developing automated KPI reporting and dashboards. Proficient in Excel and Google Sheets for business intelligence reporting. Strong track record of translating complex, raw datasets into clear, actionable business insights using object-oriented, reusable code design.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
              Technical Skills
            </h2>
            <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5">
              <li>
                <strong>Programming &amp; OOP:</strong> Python (Pandas, NumPy), Object-Oriented Programming, Modular Code Architecture, Exception Handling
              </li>
              <li>
                <strong>Data Visualization &amp; EDA:</strong> Matplotlib, Seaborn, Exploratory Data Analysis, KPI Summaries, Correlation &amp; Distribution Analysis
              </li>
              <li>
                <strong>Database &amp; Querying:</strong> SQL (SELECT, JOIN, GROUP BY), Data Extraction &amp; Cleaning, Relational Database Concepts, Schema Design
              </li>
              <li>
                <strong>Data Engineering:</strong> Preprocessing Pipelines, Data Cleansing, Feature Engineering, Outlier Detection, Missing Value Handling
              </li>
              <li>
                <strong>Spreadsheet Analytics:</strong> Excel, Google Sheets, Pivot Tables, Dynamic Dashboards, Advanced Formulas, Slicers
              </li>
              <li>
                <strong>Tools:</strong> Jupyter Notebook, VS Code, Git, Microsoft Word, PowerPoint, Outlook
              </li>
            </ul>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
              Education
            </h2>
            <div>
              <div className="flex justify-between items-baseline text-xs sm:text-sm">
                <span className="font-bold text-slate-900">
                  Bachelor&apos;s Degree in Mathematics &amp; Computer Science — Grade: Very Good
                </span>
                <span className="text-slate-600 font-mono text-xs">2024 – 2028</span>
              </div>
              <p className="text-xs text-slate-600">Menofia University, Faculty of Science</p>
            </div>
          </div>

          {/* Professional Training */}
          <div className="space-y-2">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
              Professional Training
            </h2>
            <div>
              <div className="flex justify-between items-baseline text-xs sm:text-sm">
                <span className="font-bold text-slate-900">
                  Professional Data Analysis Track — Digital Egypt Pioneers Initiative (DEPI)
                </span>
                <span className="text-slate-600 font-mono text-xs">2026 – Present</span>
              </div>
              <p className="text-xs text-slate-700 mt-1">
                Intensive, industry-aligned training program covering data analysis, Python, SQL, and business intelligence tools as part of Egypt&apos;s Ministry of Communications and Information Technology initiative.
              </p>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
              Projects
            </h2>

            {/* Project 1 */}
            <div className="space-y-1.5">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                Advanced Python Data Exploration &amp; Automated Reporting Pipeline (Superstore Analysis)
              </h3>
              <ul className="list-disc list-inside text-xs sm:text-sm text-slate-700 space-y-1 pl-1">
                <li>Developed modular, scalable analytical workflows in Python (Pandas, NumPy, Matplotlib, Seaborn) to explore an enterprise retail dataset (Superstore 2019).</li>
                <li>Architected reusable preprocessing pipelines using Object-Oriented Programming and robust exception handling to clean, transform, and validate messy data.</li>
                <li>Engineered domain-specific features including Profit Margin, Shipping Duration, and Sales Performance Categories for deep-dive analysis.</li>
                <li>Performed advanced EDA and statistical correlation analysis, producing 8+ custom visualizations to evaluate sales performance and profitability drivers.</li>
                <li>Automated generation of analytical summary reports, KPI dashboards, and structured dataset exports, optimizing memory usage and DataFrame performance.</li>
              </ul>
            </div>

            {/* Project 2 */}
            <div className="space-y-1.5">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                Customer Behavior &amp; Sales Trends Analysis (Python &amp; Excel)
              </h3>
              <ul className="list-disc list-inside text-xs sm:text-sm text-slate-700 space-y-1 pl-1">
                <li>Processed, audited, and cleaned large-scale retail datasets containing 10,000+ transactional records using Python (Pandas, NumPy).</li>
                <li>Designed dynamic, interactive Excel dashboards using Pivot Tables, Slicers, and Advanced Charts to visualize KPIs and customer behavior.</li>
                <li>Delivered data-driven business recommendations that improved inventory management efficiency by up to 15%.</li>
              </ul>
            </div>

            {/* Project 3 */}
            <div className="space-y-1.5">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                Financial Data Cleaning &amp; Automated Reporting Tool (Python)
              </h3>
              <ul className="list-disc list-inside text-xs sm:text-sm text-slate-700 space-y-1 pl-1">
                <li>Built an automated Python data-cleaning script to systematically handle dirty data, missing records, duplicate entries, and inconsistent text formatting.</li>
                <li>Used Pandas for robust data transformation, schema alignment, and multi-source file merging across CSV and Excel formats.</li>
                <li>Integrated auto-reporting utilities generating summary statistics and financial health snapshots, reducing manual reporting workload while ensuring data integrity.</li>
              </ul>
            </div>
          </div>

          {/* Courses & Certifications */}
          <div className="space-y-2">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
              Courses &amp; Certifications
            </h2>
            <ul className="list-disc list-inside text-xs sm:text-sm text-slate-700 space-y-1 pl-1">
              {CERTIFICATIONS.map((cert) => (
                <li key={cert.id}>
                  {cert.title} — {cert.issuer}
                </li>
              ))}
            </ul>
          </div>

          {/* Languages & Soft Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
              Languages &amp; Soft Skills
            </h2>
            <p className="text-xs sm:text-sm text-slate-700">
              <strong>Languages:</strong> English (Upper Intermediate – B2), Arabic (Native)
            </p>
            <p className="text-xs sm:text-sm text-slate-700">
              <strong>Soft Skills:</strong> Analytical Thinking, Problem Solving, Modular Software Design, Cross-Functional Communication, Attention to Detail, Time Management
            </p>
          </div>

        </div>

        {/* Modal Bottom Footer (Non-printed) */}
        <div className="px-6 py-3 bg-slate-100 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600 print:hidden shrink-0">
          <span>Source: Official CV of Shreen Reda Ayad</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold transition-colors"
          >
            Close Viewer
          </button>
        </div>

      </div>
    </div>
  );
};
