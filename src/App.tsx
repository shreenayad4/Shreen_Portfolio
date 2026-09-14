import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { WhyWorkWithMe } from './components/WhyWorkWithMe';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { EducationTimeline } from './components/EducationTimeline';
import { Certifications } from './components/Certifications';
import { Services } from './components/Services';
import { LanguagesSoftSkills } from './components/LanguagesSoftSkills';
import { GitHubShowcase } from './components/GitHubShowcase';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CVModal } from './components/CVModal';

export default function App() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-100 selection:bg-sky-500 selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenCVModal={() => setIsCVModalOpen(true)} />

      {/* Main Content Sections (11 Dedicated Pages / Sections) */}
      <main>
        {/* Page 1: Hero / Cover */}
        <Hero onOpenCVModal={() => setIsCVModalOpen(true)} />

        {/* Page 2: About Me */}
        <About />

        {/* Page 3: Why Work With Me (USP & Value Proposition) */}
        <WhyWorkWithMe />

        {/* Page 4: Technical Skills */}
        <Skills />

        {/* Page 5: Featured Projects (Case Studies) */}
        <Projects />

        {/* Page 6: Education & Professional Training */}
        <EducationTimeline />

        {/* Page 7: Professional Certifications */}
        <Certifications />

        {/* Page 8: What I Can Help With (Client Services) */}
        <Services />

        {/* Page 9: Languages & Soft Skills */}
        <LanguagesSoftSkills />

        {/* Page 10: GitHub & Work Showcase */}
        <GitHubShowcase />

        {/* Page 11: Contact & Call To Action */}
        <Contact onOpenCVModal={() => setIsCVModalOpen(true)} />
      </main>

      {/* Professional Footer */}
      <Footer />

      {/* CV Modal (Full CV Viewer & Print to PDF) */}
      <CVModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
      />
    </div>
  );
}
