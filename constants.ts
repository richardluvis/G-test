import { PortfolioMode, Project, Skill, Experience } from './types';

/**
 * CONSTANTS
 * This file acts as a mock database/CMS. 
 * In a real Next.js app, this might be fetched via getStaticProps from a headless CMS.
 */

export const SOCIAL_LINKS = {
  github: "https://github.com/richardluvis",
  linkedin: "https://linkedin.com/in/richadlopez",
  whatsapp: "https://wa.me/+573167971834", 
  email: "lopezcard35@gmail.com"
};

// --- DEVELOPER DATA ---

export const DEV_SKILLS: Skill[] = [
  { name: 'React.js / Next.js', level: 90, category: 'frontend' },
  { name: 'TypeScript', level: 90, category: 'frontend' },
  { name: 'Boostrap', level: 95, category: 'frontend' },
  { name: 'Node.js', level: 85, category: 'backend' },
  { name: 'Vite.js', level: 80, category: 'backend' },
  { name: 'Python', level: 95, category: 'backend' },
  { name: 'MySQL', level: 75, category: 'backend' },
  { name: 'Java', level: 70, category: 'backend' },
  { name: 'C++', level: 65, category: 'backend' },
  { name: 'APIs', level: 90, category: 'backend' },
];

export const DEV_PROJECTS: Project[] = [
  {
    id: 'd1',
    title: 'Landing Page Premium',
    description: 'Boost your professional presence, ideal for businesses, services, or advertising campaigns. Fast delivery in 1-2 days.',
    technologies: ['Bosstrap','Node.js', 'React', 'Html', 'CSS'],
    image: '/src/landingPage.png',
    type: PortfolioMode.DEVELOPER
  },
  {
    id: 'd2',
    title: 'Professional Website',
    description: 'Perfect for businesses or professionals who need a complete online presence, 100% responsive design, social media integration, forms, maps, SEO improvements, etc.',
    technologies: ['React', 'Next.js', 'Node.js','TypeScript','Boostrap'],
    image: '/src/webPage.png',
    type: PortfolioMode.DEVELOPER
  },
  {
    id: 'd3',
    title: 'Front-End Performance & UX Optimization',
    description: 'Technical support for businesses that already have a website, but it´s slow or malfunctioning. We improve user experience (UI/UX), fix bugs, optimize code, and much more.',
    technologies: [],
    image: '/src/performance.png',
    type: PortfolioMode.DEVELOPER
  }
];

export const DEV_EXPERIENCE: Experience[] = [
  {
    id: 'de1',
    role: 'Software developer',
    company: 'Accepetrol SAS',
    period: '2023 - 2025',
    description: [
      'Built a responsive web application using HTML5, CSS, AJAX, Node.js and Vite, with a clear folder structure and optimized image assets.',
      'Developed front-end features and asynchronous client-server communication using AJAX and Node.js.',
      'Implemented performance and accessibility improvements for a fast, maintainable website.',
      'Designed and implemented the site structure using HTML5 for semantic markup and CSS for responsive, accessible styling.',
      'Configured the project with Vite for fast development builds and efficient module hot-reloading.',
      'Developed a lightweight Node.js backend to serve assets, handle API endpoints, and manage simple server-side logic.',
      'Optimized and compressed images, used proper formats and lazy loading to reduce page weight and improve load times.',
      'Implemented progressive enhancement and accessibility best practices (semantic HTML, ARIA attributes, keyboard navigation).',
      'Wrote modular, reusable JavaScript and CSS components to accelerate future feature development.',
      'Organized the repository with a clear folder structure to improve maintainability and handoffs.'
    ],
    type: PortfolioMode.DEVELOPER
  },
];

// --- ENGINEER DATA ---

export const SYS_SKILLS: Skill[] = [
  { name: 'Computers', level: 90, category: 'tools' },
  { name: 'Printers', level: 75, category: 'tools' },
  { name: 'Systems', level: 80, category: 'tools' },
];

export const SYS_PROJECTS: Project[] = [
  {
    id: 'e1',
    title: 'Computer Maintenance & Optimization Service',
    description: 'Full hardware and software maintenance for personal and business computers. I provide deep system diagnostics, component cleaning, performance tuning, and removal of malware or unnecessary software.',
    technologies: ['Desktop', 'Laptops'],
    image: '/src/pc.jpg',
    type: PortfolioMode.ENGINEER
  },
  {
    id: 'e2',
    title: 'Printer & Peripheral Setup and Support',
    description: 'Installation, configuration, and troubleshooting for printers, scanners, and office peripherals. I handle driver setup, wireless configuration, network printer integration, and advanced troubleshooting for errors or connection failures.',
    technologies: ['Epson', 'Cannon', 'HP'],
    image: '/src/printer.jpg',
    type: PortfolioMode.ENGINEER
  },
  {
    id: 'e3',
    title: 'Operating System Installation & Configuration',
    description: 'Professional installation and setup of Windows or Linux systems. This service includes formatting, partition management, driver installation, security hardening, and full system optimization.',
    technologies: ['Linux', 'Windows', 'Ubunto'],
    image: '/src/linux.png',
    type: PortfolioMode.ENGINEER
  }
];

export const SYS_EXPERIENCE: Experience[] = [
  {
    id: 'se1',
    role: 'Systems Engineer',
    company: 'Accepetrol SAS',  
    period: '2023 - Present',
    description: [
      'Development and maintenance of internal applications to optimize administrative processes.',
      'Support in the implementation of management systems and business data analysis',
      'Troubleshooting technical issues, ensuring system operational continuity.',
      'Development of solutions using HTML5, JavaScript, Node.js, Vite, Bootstrap, and React.',
      'Collaboration in development teams following the Scrum methodology.',
      'Version control management with GitHub.',
      'Multi-role teamwork as a Scrum Master',
      'Proficient in working with the DOM.',
    ],
    type: PortfolioMode.ENGINEER
  }
  
];