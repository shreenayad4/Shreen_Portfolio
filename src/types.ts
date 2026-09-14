export interface Project {
  id: string;
  title: string;
  subtitle: string;
  dataset: string;
  goal: string;
  whatIDid: string[];
  tools: string[];
  keyFeatures: string[];
  results: string[];
  githubUrl: string;
  impactMetric?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  category: string;
  iconName: string;
  skills: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: 'Coursera' | 'Udemy' | 'LinkedIn Learning';
  tag: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  faculty?: string;
  period: string;
  grade?: string;
  description?: string;
  highlights?: string[];
  isCurrent?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  deliverables: string[];
}

export interface LanguageItem {
  name: string;
  level: string;
  tag: string;
}
