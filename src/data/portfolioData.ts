import { Project, SkillCategory, Certification, EducationItem, ServiceItem, LanguageItem } from '../types';

export const PERSONAL_INFO = {
  name: 'SHREEN REDA AYAD',
  title: 'Data Analyst | Computer Science & Mathematics Student',
  shortBio: 'I turn raw data into clear, actionable insights using Python, SQL, Excel, and data visualization.',
  usp: 'I help businesses turn raw data into clear, actionable insights through Python, SQL, Excel, and data-driven reporting.',
  location: 'Menofia, Egypt',
  email: 'shreenayad4@gmail.com',
  phone: '+20 1033431739',
  linkedin: 'https://linkedin.com/in/shreen-ayad',
  linkedinDisplay: 'linkedin.com/in/shreen-ayad',
  github: 'https://github.com/shreenayad4',
  githubDisplay: 'github.com/shreenayad4',
  photoUrl: '/profile.jpg',
};

export const ABOUT_TEXT = `I am a Computer Science & Mathematics student at Menofia University (Faculty of Science) and currently enrolled in the intensive Professional Data Analysis Track at the Digital Egypt Pioneers Initiative (DEPI) under the Ministry of Communications and Information Technology.

My core focus spans Data Analysis, Python, SQL, Excel, Data Visualization, Exploratory Data Analysis, Business Intelligence, and Statistical Modeling. I specialize in bridging academic mathematical rigor with hands-on software development to solve real-world analytical problems. Rather than simply producing charts, I design modular, reusable data pipelines and interactive dashboards that empower teams and stakeholders to make confident, data-driven decisions.`;

export const VALUE_PROPOSITION_POINTS = [
  {
    title: 'Turning Complex Datasets into Actionable Insights',
    description: 'Transforming messy, large-scale multi-format records into clean, validated narratives and actionable business intelligence.',
    icon: 'Brain',
  },
  {
    title: 'Building Reusable & Modular Workflows',
    description: 'Architecting maintainable Python pipelines with Object-Oriented principles, robust exception handling, and optimized DataFrame performance.',
    icon: 'Layers',
  },
  {
    title: 'Creating Clear Dashboards & KPI Reports',
    description: 'Designing interactive Excel dashboards with Pivot Tables, Slicers, and advanced charts that track critical performance indicators.',
    icon: 'LayoutDashboard',
  },
  {
    title: 'Analytical Thinking + Programming & BI',
    description: 'Combining rigorous mathematical foundations with modern SQL querying, Python analytics, and business acumen to solve business bottlenecks.',
    icon: 'Sparkles',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'prog',
    title: 'Programming & OOP',
    category: 'Core Engineering',
    iconName: 'Code',
    skills: [
      'Python',
      'Pandas',
      'NumPy',
      'Object-Oriented Programming',
      'Modular Code Architecture',
      'Exception Handling',
    ],
  },
  {
    id: 'viz',
    title: 'Data Visualization & EDA',
    category: 'Visual Analytics',
    iconName: 'BarChart3',
    skills: [
      'Matplotlib',
      'Seaborn',
      'Exploratory Data Analysis',
      'KPI Summaries',
      'Correlation Analysis',
      'Distribution Analysis',
    ],
  },
  {
    id: 'db',
    title: 'Database & Querying',
    category: 'Data Extraction',
    iconName: 'Database',
    skills: [
      'SQL',
      'SELECT Queries',
      'JOIN Operations',
      'GROUP BY & Aggregations',
      'Data Extraction & Cleaning',
      'Relational Database Concepts',
      'Schema Design',
    ],
  },
  {
    id: 'eng',
    title: 'Data Engineering',
    category: 'Pipeline Architecture',
    iconName: 'Workflow',
    skills: [
      'Preprocessing Pipelines',
      'Data Cleansing',
      'Feature Engineering',
      'Outlier Detection',
      'Missing Value Handling',
    ],
  },
  {
    id: 'sheets',
    title: 'Spreadsheet Analytics',
    category: 'Business Intelligence',
    iconName: 'FileSpreadsheet',
    skills: [
      'Microsoft Excel',
      'Google Sheets',
      'Pivot Tables',
      'Dynamic Dashboards',
      'Advanced Formulas',
      'Interactive Slicers',
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Development',
    category: 'Productivity & VCS',
    iconName: 'Wrench',
    skills: [
      'Jupyter Notebook',
      'VS Code',
      'Git Version Control',
      'Microsoft Word',
      'PowerPoint',
      'Outlook',
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'superstore-pipeline',
    title: 'Advanced Python Data Exploration & Automated Reporting Pipeline',
    subtitle: 'Superstore Retail Analysis',
    dataset: 'Superstore 2019 Enterprise Retail Dataset',
    goal: 'Explore an enterprise retail dataset, clean and transform messy data, engineer business features, and build an automated reporting pipeline to evaluate sales performance and profitability drivers.',
    whatIDid: [
      'Developed modular, scalable analytical workflows in Python using Pandas, NumPy, Matplotlib, and Seaborn.',
      'Architected reusable preprocessing pipelines using Object-Oriented Programming and robust exception handling to clean, transform, and validate messy data.',
      'Engineered domain-specific features including Profit Margin, Shipping Duration, and Sales Performance Categories for deep-dive analysis.',
      'Performed advanced Exploratory Data Analysis (EDA) and statistical correlation analysis, producing 8+ custom visualizations.',
      'Automated the generation of analytical summary reports, KPI dashboards, and structured dataset exports, optimizing memory usage and DataFrame performance.',
    ],
    tools: [
      'Python',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Seaborn',
      'Object-Oriented Programming',
      'Exception Handling',
      'Data Preprocessing',
      'Feature Engineering',
      'EDA',
      'Statistical Correlation',
      'Automated Reporting',
    ],
    keyFeatures: [
      '8+ custom visualizations (correlation matrices, distributions, category trends)',
      'Profit Margin calculations across product lines',
      'Shipping Duration tracking and delay analysis',
      'Sales Performance Categorization logic',
      'Memory-optimized DataFrame operations',
    ],
    results: [
      'Automated generation of analytical summary reports and KPI dashboards.',
      'Structured exports and optimized memory footprint for seamless reusability.',
      'Identified critical profitability drivers across product categories and shipping tiers.',
    ],
    githubUrl: 'https://github.com/shreenayad4',
    impactMetric: '8+ Custom Visualizations & Automated Pipeline',
  },
  {
    id: 'customer-behavior-sales',
    title: 'Customer Behavior & Sales Trends Analysis',
    subtitle: 'Python & Excel Integrated Dashboard',
    dataset: '10,000+ Retail Transaction Records',
    goal: 'Audit, process, and analyze 10,000+ customer transaction records to reveal purchasing trends, evaluate customer segments, and formulate data-driven inventory management recommendations.',
    whatIDid: [
      'Processed, audited, and cleaned large-scale retail datasets containing 10,000+ transactional records using Python (Pandas, NumPy).',
      'Designed dynamic, interactive Excel dashboards utilizing Pivot Tables, Slicers, and Advanced Charts to visualize KPIs and customer behavior patterns.',
      'Synthesized quantitative trends into concrete, actionable business recommendations for retail stock holding and procurement.',
    ],
    tools: [
      'Python',
      'Pandas',
      'NumPy',
      'Excel Dashboards',
      'Pivot Tables',
      'Interactive Slicers',
      'Advanced Charts',
      'KPI Analysis',
      'Customer Behavior Analysis',
    ],
    keyFeatures: [
      'Auditing & cleansing across 10,000+ transaction rows',
      'Dynamic multi-slicer Excel dashboard for stakeholder exploration',
      'Customer order frequency and basket trend visualization',
      'Targeted KPI metrics for retail sales performance',
    ],
    results: [
      'Delivered data-driven business recommendations that improved inventory management efficiency by up to 15%.',
      'Provided executive stakeholders with interactive drill-down capabilities via intuitive slicers.',
    ],
    githubUrl: 'https://github.com/shreenayad4',
    impactMetric: 'Up to 15% Inventory Efficiency Gain',
  },
  {
    id: 'financial-cleaning-tool',
    title: 'Financial Data Cleaning & Automated Reporting Tool',
    subtitle: 'Python Automated Data Pipeline',
    dataset: 'Multi-Source Financial CSV & Excel Records',
    goal: 'Eliminate manual data-entry errors, reconcile inconsistent file formats, and automate the creation of financial health summary snapshots.',
    whatIDid: [
      'Built an automated Python data-cleaning script to systematically handle dirty data, missing records, duplicate entries, and inconsistent text formatting.',
      'Used Pandas for robust data transformation, schema alignment, and multi-source file merging across CSV and Excel formats.',
      'Integrated auto-reporting utilities generating summary statistics and financial health snapshots, reducing manual reporting workload while ensuring data integrity.',
    ],
    tools: [
      'Python',
      'Pandas',
      'Data Cleaning',
      'Schema Alignment',
      'File Merging (CSV & Excel)',
      'Summary Statistics',
      'Financial Health Snapshots',
      'Automated Scripting',
    ],
    keyFeatures: [
      'Systematic resolution of duplicate entries, missing fields, and formatting anomalies',
      'Automated schema alignment merging CSV and Excel ledgers',
      'One-click summary statistics and key financial ratio calculation',
      'Strict data integrity guarantees preventing reporting discrepancies',
    ],
    results: [
      'Substantially reduced manual reporting workload and repetitive preparation time.',
      'Ensured full data integrity and unified formatting across distributed financial sheets.',
    ],
    githubUrl: 'https://github.com/shreenayad4',
    impactMetric: 'Automated Multi-Source Reconciliation',
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'bachelor',
    degree: "Bachelor's Degree in Mathematics & Computer Science",
    institution: 'Menofia University — Faculty of Science',
    period: '2024 – 2028',
    grade: 'Grade: Very Good',
    description: 'Undergraduate studies blending rigorous pure and applied mathematics (calculus, linear algebra, probability, statistics) with foundational computer science principles and software engineering.',
    highlights: [
      'Grade: Very Good',
      'Mathematical modeling, discrete structures, and applied statistics',
      'Algorithms, data structures, and computational problem solving',
    ],
    isCurrent: true,
  },
  {
    id: 'depi',
    degree: 'Professional Data Analysis Track',
    institution: 'Digital Egypt Pioneers Initiative (DEPI)',
    faculty: "Ministry of Communications and Information Technology (MCIT)",
    period: '2026 – Present',
    description: 'Intensive, industry-aligned training program covering advanced data analysis, Python programming, SQL database management, and business intelligence tools as part of Egypt’s prestigious national tech leadership initiative.',
    highlights: [
      'Data Analysis & Exploratory Data Analysis (EDA)',
      'Advanced Python for Data Science (Pandas, NumPy, Matplotlib, Seaborn)',
      'SQL querying, relational database concepts, and data extraction',
      'Business Intelligence tools and KPI dashboard reporting',
    ],
    isCurrent: true,
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'cert-1',
    title: 'Google Data Analytics Professional Certificate',
    issuer: 'Coursera',
    tag: 'Professional Certificate',
  },
  {
    id: 'cert-2',
    title: 'IBM Data Analysis Professional Certificate',
    issuer: 'Coursera',
    tag: 'Professional Certificate',
  },
  {
    id: 'cert-3',
    title: 'Python for Data Science, AI & Development',
    issuer: 'Coursera',
    tag: 'Specialization Course',
  },
  {
    id: 'cert-4',
    title: 'The Data Analyst Course 2025',
    issuer: 'Udemy',
    tag: 'Comprehensive Analytics',
  },
  {
    id: 'cert-5',
    title: 'Microsoft Excel: Beginner to Advanced',
    issuer: 'Udemy',
    tag: 'Spreadsheet Mastery',
  },
  {
    id: 'cert-6',
    title: 'Entrepreneurship Foundations',
    issuer: 'LinkedIn Learning',
    tag: 'Business & Strategy',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'srv-1',
    title: 'Data Cleaning & Preprocessing',
    description: 'Handling missing records, removing duplicates, normalizing inconsistent text formatting, and resolving schema misalignments across complex files.',
    iconName: 'Filter',
    deliverables: ['Cleaned datasets', 'Data audit report', 'Automated cleaning scripts'],
  },
  {
    id: 'srv-2',
    title: 'Exploratory Data Analysis (EDA)',
    description: 'Investigating underlying patterns, calculating statistical summaries, spotting outliers, and evaluating distributions to reveal hidden trends.',
    iconName: 'Search',
    deliverables: ['Statistical summaries', 'Distribution charts', 'Correlation findings'],
  },
  {
    id: 'srv-3',
    title: 'Python Data Analysis',
    description: 'Writing clean, modular, and reusable Python scripts with Pandas and NumPy for performant analytical workflows and deep dataset exploration.',
    iconName: 'Terminal',
    deliverables: ['Jupyter notebooks', 'Python automation scripts', 'Processed DataFrames'],
  },
  {
    id: 'srv-4',
    title: 'SQL Data Extraction & Analysis',
    description: 'Writing optimized SQL queries using SELECT, JOIN, GROUP BY, and aggregations to extract, filter, and summarize relational database records.',
    iconName: 'Database',
    deliverables: ['Structured SQL queries', 'Extracted report tables', 'Aggregated summaries'],
  },
  {
    id: 'srv-5',
    title: 'Excel Data Analysis',
    description: 'Transforming raw spreadsheets into organized analytical workbooks using advanced formulas, Pivot Tables, and dynamic data models.',
    iconName: 'FileSpreadsheet',
    deliverables: ['Structured workbooks', 'Formula models', 'Data summary sheets'],
  },
  {
    id: 'srv-6',
    title: 'KPI Reporting',
    description: 'Defining, measuring, and reporting essential business KPIs to help executives and managers monitor performance against targets.',
    iconName: 'Activity',
    deliverables: ['KPI definitions', 'Performance scorecards', 'Executive summary snapshots'],
  },
  {
    id: 'srv-7',
    title: 'Dashboard Development',
    description: 'Designing intuitive, interactive dashboards in Excel and Google Sheets equipped with dynamic slicers, filters, and high-impact visual charts.',
    iconName: 'LayoutDashboard',
    deliverables: ['Interactive dashboard', 'Dynamic slicer controls', 'Stakeholder presentation view'],
  },
  {
    id: 'srv-8',
    title: 'Automated Data Reporting',
    description: 'Developing automated scripts and pipelines that merge multi-source files and generate recurring analytical reports without manual effort.',
    iconName: 'Cpu',
    deliverables: ['Automated pipeline', 'Recurring summary generators', 'Formatted CSV/Excel outputs'],
  },
  {
    id: 'srv-9',
    title: 'Data Visualization',
    description: 'Creating clear, compelling visual representations using Matplotlib and Seaborn to communicate data stories clearly to technical and business teams.',
    iconName: 'BarChart2',
    deliverables: ['Custom visual figures', 'Correlation heatmaps', 'Presentation-ready charts'],
  },
  {
    id: 'srv-10',
    title: 'Business Data Insights',
    description: 'Synthesizing technical findings into clear, client-focused business recommendations that reduce operational friction and optimize efficiency.',
    iconName: 'TrendingUp',
    deliverables: ['Actionable recommendation deck', 'Bottleneck analysis', 'Strategic insights summary'],
  },
];

export const LANGUAGES: LanguageItem[] = [
  { name: 'Arabic', level: 'Native', tag: 'Native Fluency' },
  { name: 'English', level: 'Upper Intermediate (B2)', tag: 'Professional Working' },
];

export const SOFT_SKILLS = [
  {
    title: 'Analytical Thinking',
    description: 'Deconstructing complex business questions into systematic, measurable components.',
    iconName: 'Brain',
  },
  {
    title: 'Problem Solving',
    description: 'Troubleshooting pipeline errors, data discrepancies, and edge cases methodically.',
    iconName: 'Lightbulb',
  },
  {
    title: 'Modular Software Design',
    description: 'Structuring clean, reusable code using Object-Oriented principles and separation of concerns.',
    iconName: 'Code2',
  },
  {
    title: 'Cross-Functional Communication',
    description: 'Translating complex statistical metrics into clear insights for non-technical stakeholders.',
    iconName: 'MessageSquare',
  },
  {
    title: 'Attention to Detail',
    description: 'Rigorous validation of outliers, missing entries, and schema consistency across datasets.',
    iconName: 'CheckCircle2',
  },
  {
    title: 'Time Management',
    description: 'Balancing university studies, professional DEPI training, and project milestones on schedule.',
    iconName: 'Clock',
  },
];
