import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  delay?: number;
}

export const Section: React.FC<SectionProps> = ({ children, id, className = '', delay = 0 }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className={`py-16 md:py-24 px-4 sm:px-8 max-w-7xl mx-auto ${className}`}
    >
      {children}
    </motion.section>
  );
};