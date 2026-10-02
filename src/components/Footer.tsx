import React from 'react';
import { motion } from 'motion/react';
import { PageTab } from '../types';
import { UrielLogo } from './UrielLogo';

interface FooterProps {
  setActiveTab: (tab: PageTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (tab: PageTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.hash = tab;
  };

  return (
    <footer className="w-full bg-surface-card border-t border-border-line mt-12 sm:mt-16 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-10 space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 pb-6 border-b border-border-line">
          <div className="flex items-center gap-3">
            <UrielLogo size={36} variant="orange-bg" className="shrink-0" />
            <div>
              <span className="font-display text-base sm:text-lg font-bold text-ink block tracking-tight">
                The Uriel Initiative
              </span>
              <p className="font-sans text-xs sm:text-sm text-mute">
                Grassroots youth technology infrastructure in Ekpoma, Edo State, Nigeria.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-display text-xs sm:text-sm font-semibold text-mute">
            <button onClick={() => handleNav('home')} className="hover:text-primary transition-colors cursor-pointer py-1 flex items-center gap-1">
              <span>3D Hub World</span>
              <span className="px-1 py-0.2 rounded text-[9px] font-mono bg-primary/10 text-primary">WebGL</span>
            </button>
            <button onClick={() => handleNav('partnership')} className="hover:text-primary transition-colors cursor-pointer py-1">
              Sponsorship Packages
            </button>
            <button onClick={() => handleNav('contact')} className="hover:text-primary transition-colors cursor-pointer py-1">
              Contact &amp; Hub Visit
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 font-sans text-xs text-mute text-center sm:text-left">
          <div>
            © 2025 The Uriel Initiative. Ekpoma Campus Technology Facility.
          </div>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="font-display font-semibold text-primary hover:text-primary-hover cursor-pointer text-xs flex items-center gap-1 py-1"
            type="button"
          >
            <span>Back to top</span>
            <span>↑</span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};
