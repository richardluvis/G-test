import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server } from 'lucide-react';
import { PortfolioMode } from '../types';

interface ToggleButtonProps {
  mode: PortfolioMode;
  setMode: (mode: PortfolioMode) => void;
}

/**
 * ToggleButton
 * A sliding switch that changes the global application state between Developer and Engineer.
 * Shows visual feedback for the active mode.
 */
export const ToggleButton: React.FC<ToggleButtonProps> = ({ mode, setMode }) => {
  const isDev = mode === PortfolioMode.DEVELOPER;

  return (
    <div className="relative flex items-center bg-slate-800 rounded-full p-1 cursor-pointer w-64 h-12 shadow-inner border border-slate-700">
      {/* Background Slider Animation */}
      <motion.div
        className={`absolute top-1 bottom-1 w-1/2 rounded-full shadow-lg ${
          isDev ? 'bg-blue-600' : 'bg-emerald-600'
        }`}
        layoutId="toggleBackground"
        initial={false}
        animate={{
          x: isDev ? 0 : '100%',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />

      {/* Developer Option */}
      <div
        onClick={() => setMode(PortfolioMode.DEVELOPER)}
        className={`relative z-10 w-1/2 flex items-center justify-center gap-2 text-sm font-semibold transition-colors duration-300 ${
          isDev ? 'text-white' : 'text-slate-400 hover:text-slate-200'
        }`}
      >
        <Code size={18} />
        <span>Developer</span>
      </div>

      {/* Engineer Option */}
      <div
        onClick={() => setMode(PortfolioMode.ENGINEER)}
        className={`relative z-10 w-1/2 flex items-center justify-center gap-2 text-sm font-semibold transition-colors duration-300 ${
          !isDev ? 'text-white' : 'text-slate-400 hover:text-slate-200'
        }`}
      >
        <Server size={18} />
        <span>Engineer</span>
      </div>
    </div>
  );
};