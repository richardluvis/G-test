/**
 * Enums and Interfaces for the Portfolio Application.
 * Centralizing types ensures type safety across components.
 */

// Defines the two primary modes of the portfolio
export enum PortfolioMode {
  DEVELOPER = 'DEVELOPER',
  ENGINEER = 'ENGINEER'
}

// Structure for a Skill item
export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'cloud' | 'network' | 'tools';
  icon?: string; // Icon identifier
}

// Structure for a Project item
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  image: string; // URL placeholder
  type: PortfolioMode;
}

// Structure for Work Experience
export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  type: PortfolioMode; // Some experience might overlap, but usually leans one way
}

// Contact Form Data Structure
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}