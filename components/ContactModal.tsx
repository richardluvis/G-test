import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, MessageCircle, Send } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';
import { PortfolioMode } from '../types';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: PortfolioMode;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, mode }) => {
  const isDev = mode === PortfolioMode.DEVELOPER;
  const accentBg = isDev ? 'bg-blue-600 hover:bg-blue-700' : 'bg-emerald-600 hover:bg-emerald-700';

  const [formState, setFormState] = useState({ name: '', message: '' });

  const handleWhatsApp = () => {
    const text = `Hi, I saw your portfolio. I'm ${formState.name}. ${formState.message}`;
    const url = `${SOCIAL_LINKS.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const handleEmail = () => {
    const subject = `Portfolio Inquiry from ${formState.name}`;
    const body = `${formState.message}`;
    const url = `mailto:${SOCIAL_LINKS.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 m-auto z-50 max-w-md h-fit w-[90%] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl p-6"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Get in Touch</h2>
              <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Name</label>
                <input 
                  type="text" 
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-slate-500"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Message</label>
                <textarea 
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white h-32 focus:outline-none focus:ring-2 focus:ring-slate-500"
                  placeholder="How can I help you?"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <button 
                  onClick={handleEmail}
                  className="flex items-center justify-center gap-2 py-3 rounded-lg border border-slate-600 hover:bg-slate-800 transition-colors text-white font-medium"
                >
                  <Mail size={18} />
                  Email
                </button>
                <button 
                  onClick={handleWhatsApp}
                  className={`flex items-center justify-center gap-2 py-3 rounded-lg ${accentBg} transition-colors text-white font-medium shadow-lg`}
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </button>
              </div>
              
              <p className="text-xs text-center text-slate-500 mt-4">
                Clicking WhatsApp will open the web chat directly.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};