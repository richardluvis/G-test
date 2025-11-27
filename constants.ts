import { PortfolioMode, Project, Skill, Experience } from './types';

/**
 * CONSTANTS
 * This file acts as a mock database/CMS. 
 * In a real Next.js app, this might be fetched via getStaticProps from a headless CMS.
 */

export const SOCIAL_LINKS = {
  github: "https://github.com/richardluvis",
  linkedin: "https://linkedin.com/in/richadlopez",
  whatsapp: "https://wa.me/1234567890", 
  email: "contact@example.com"
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
    title: 'E-Commerce Dashboard',
    description: 'A comprehensive analytics dashboard for online retailers featuring real-time data visualization using Recharts and Next.js SSR.',
    technologies: ['Next.js', 'React', 'Tremor', 'Supabase'],
    image: 'https://picsum.photos/600/400?random=1',
    type: PortfolioMode.DEVELOPER
  },
  {
    id: 'd2',
    title: 'SaaS Landing Page',
    description: 'High-conversion landing page with complex framer-motion animations and optimized Core Web Vitals.',
    technologies: ['React', 'Tailwind', 'Framer Motion'],
    image: 'https://picsum.photos/600/400?random=2',
    type: PortfolioMode.DEVELOPER
  },
  {
    id: 'd3',
    title: 'Task Management API',
    description: 'RESTful API built with NestJS supporting real-time web-socket updates for team collaboration.',
    technologies: ['Node.js', 'NestJS', 'Docker', 'Redis'],
    image: 'https://picsum.photos/600/400?random=3',
    type: PortfolioMode.DEVELOPER
  }
];

export const DEV_EXPERIENCE: Experience[] = [
  {
    id: 'de1',
    role: 'Senior Frontend Engineer',
    company: 'TechFlow Solutions',
    period: '2021 - Present',
    description: [
      'Led migration of legacy monolith to Next.js micro-frontends.',
      'Improved site performance score by 40% using SSR and image optimization.',
      'Mentored junior developers in React best practices.'
    ],
    type: PortfolioMode.DEVELOPER
  },
  {
    id: 'de2',
    role: 'Full Stack Developer',
    company: 'Creative Agency X',
    period: '2019 - 2021',
    description: [
      'Developed 15+ client websites using MERN stack.',
      'Integrated payment gateways (Stripe, PayPal) for e-commerce clients.'
    ],
    type: PortfolioMode.DEVELOPER
  }
];

// --- ENGINEER DATA ---

export const SYS_SKILLS: Skill[] = [
  { name: 'Linux Administration', level: 90, category: 'tools' },
  { name: 'AWS / Azure', level: 85, category: 'cloud' },
  { name: 'Docker & Kubernetes', level: 80, category: 'tools' },
  { name: 'Network Security', level: 75, category: 'network' },
  { name: 'CI/CD Pipelines', level: 85, category: 'tools' },
  { name: 'Bash / Python Scripting', level: 80, category: 'backend' },
];

export const SYS_PROJECTS: Project[] = [
  {
    id: 'e1',
    title: 'Hybrid Cloud Migration',
    description: 'Architected the migration of on-premise infrastructure to AWS, reducing operational costs by 30%.',
    technologies: ['AWS', 'Terraform', 'Ansible'],
    image: 'https://picsum.photos/600/400?random=4',
    type: PortfolioMode.ENGINEER
  },
  {
    id: 'e2',
    title: 'Secure Network Infrastructure',
    description: 'Designed a zero-trust network architecture for a fintech client, including VPN configuration and firewall rules.',
    technologies: ['Cisco', 'Palo Alto', 'OpenVPN'],
    image: 'https://picsum.photos/600/400?random=5',
    type: PortfolioMode.ENGINEER
  },
  {
    id: 'e3',
    title: 'Automated Deployment Pipeline',
    description: 'Implemented a robust CI/CD pipeline using Jenkins and Kubernetes, reducing deployment time from hours to minutes.',
    technologies: ['Jenkins', 'Kubernetes', 'Helm'],
    image: 'https://picsum.photos/600/400?random=6',
    type: PortfolioMode.ENGINEER
  }
];

export const SYS_EXPERIENCE: Experience[] = [
  {
    id: 'se1',
    role: 'Systems Engineer',
    company: 'Global Corp',
    period: '2020 - Present',
    description: [
      'Managed 500+ Linux servers across multiple data centers.',
      'Implemented automated patch management using Ansible.',
      'Responded to critical incidents ensuring 99.99% uptime.'
    ],
    type: PortfolioMode.ENGINEER
  },
  {
    id: 'se2',
    role: 'Network Administrator',
    company: 'Local ISP',
    period: '2018 - 2020',
    description: [
      'Configured OSPF and BGP routing protocols.',
      'Monitored network traffic using Nagios and Zabbix.'
    ],
    type: PortfolioMode.ENGINEER
  }
];