import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageTab } from '../types';
import { UrielLogo } from './UrielLogo';

interface HeaderProps {
  activeTab: PageTab;
  setActiveTab: (tab: PageTab) => void;
  isDark: boolean;
  toggleDarkMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  isDark,
  toggleDarkMode,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNav = (tab: PageTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.hash = tab;
  };

  const navItems: { id: PageTab; label: string; badge?: string }[] = [
    { id: 'home', label: '3D Hub World', badge: 'WebGL' },
    { id: 'partnership', label: 'Sponsorship Packages' },
    { id: 'contact', label: 'Contact & Hub Visit' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-md border-b border-border-line transition-colors">
        <div className="h-14 sm:h-16 max-w-5xl mx-auto px-3.5 sm:px-6 flex items-center justify-between gap-2 sm:gap-4">
          {/* Brand identity */}
          <motion.button
            onClick={() => handleNav('home')}
            className="flex items-center gap-2.5 sm:gap-3 text-left focus:outline-none group cursor-pointer min-w-0"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
          >
            <UrielLogo size={34} variant="orange-bg" className="shrink-0 sm:w-9 sm:h-9" />
            <div className="min-w-0">
              <span className="font-display text-sm sm:text-base md:text-lg font-bold tracking-tight text-ink group-hover:text-primary transition-colors block leading-tight truncate">
                The Uriel Initiative
              </span>
              <span className="text-[10px] sm:text-[11px] text-mute uppercase font-mono tracking-wider block font-semibold truncate">
                Ekpoma • Edo State
              </span>
            </div>
          </motion.button>

          {/* Clean, high-legibility desktop navigation */}
          <nav className="hidden md:flex items-center gap-1 font-display text-sm font-semibold shrink-0">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`relative px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'text-primary font-bold'
                      : 'text-mute hover:text-ink hover:bg-surface-container'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="px-1.5 py-0.2 rounded text-[9px] font-mono font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
                      {item.badge}
                    </span>
                  )}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabBadge"
                      className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-primary rounded-full"
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            <motion.button
              aria-label="Toggle color mode"
              onClick={toggleDarkMode}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.92 }}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg border border-border-line bg-surface-card flex items-center justify-center text-mute hover:text-ink transition-colors cursor-pointer shadow-xs"
              type="button"
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <span className="material-symbols-outlined text-[17px] sm:text-[19px]">
                {isDark ? 'light_mode' : 'dark_mode'}
              </span>
            </motion.button>

            <motion.button
              onClick={() => handleNav('partnership')}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-lg bg-primary hover:bg-primary-hover text-accent-contrast font-display text-xs font-bold tracking-wide transition-all shadow-sm cursor-pointer"
            >
              <span>Sponsor Workstations</span>
              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </motion.button>

            <button
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-8 h-8 sm:w-9 sm:h-9 rounded-lg border border-border-line bg-surface-card flex items-center justify-center text-mute hover:text-ink cursor-pointer"
            >
              <span className="material-symbols-outlined text-[19px]">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden bg-surface-card border-b border-border-line px-4 py-3 flex flex-col gap-1.5 shadow-lg"
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`text-left text-sm py-3 px-3.5 rounded-lg font-display transition-colors min-h-[44px] flex items-center justify-between ${
                    activeTab === item.id
                      ? 'bg-surface-container font-bold text-primary'
                      : 'text-mute hover:text-ink active:bg-surface-container'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
                      {item.badge}
                    </span>
                  )}
                </button>
              ))}
              <button
                onClick={() => handleNav('partnership')}
                className="mt-1 w-full text-center py-3 rounded-lg bg-primary hover:bg-primary-hover text-accent-contrast font-display text-xs font-bold shadow-sm min-h-[44px] flex items-center justify-center gap-1"
              >
                <span>Sponsor Workstations</span>
                <span>→</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Backdrop overlay for mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
};
