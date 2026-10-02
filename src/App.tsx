/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageTab } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeScreen } from './components/HomeScreen';
import { PartnershipScreen } from './components/PartnershipScreen';
import { ContactScreen } from './components/ContactScreen';
import { KageScreen } from './components/KageScreen';

export default function App() {
  const [activeTab, setActiveTab] = useState<PageTab>('home');
  const [isDark, setIsDark] = useState<boolean>(true);
  const [selectedTier, setSelectedTier] = useState<{
    name: string;
    amount: string;
    seats: number;
  } | null>(null);

  // Sync hash routing on mount and change
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '') as PageTab;
      if (hash === 'home' || hash === 'partnership' || hash === 'contact' || hash === 'kage') {
        setActiveTab(hash);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Sync dark class on document element
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark((prev) => !prev);
  };

  const handleSelectTier = (name: string, amount: string, seats: number) => {
    setSelectedTier({ name, amount, seats });
    setActiveTab('partnership');
    window.location.hash = 'partnership';
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface font-sans text-ink antialiased selection:bg-primary-container selection:text-primary-text transition-colors duration-200">
      {/* Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isDark={isDark}
        toggleDarkMode={toggleDarkMode}
      />

      {/* Main Content View with Smooth Page Transitions */}
      <main className={`w-full bg-[#05070a] flex-grow overflow-x-hidden ${
        activeTab === 'home' ? 'pt-14 sm:pt-16 min-h-[calc(100vh-3.5rem)]' : 'pt-16 sm:pt-20 min-h-[calc(100vh-80px)] bg-surface'
      }`}>
        <AnimatePresence mode="wait">
          {activeTab === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full flex flex-col"
            >
              <HomeScreen
                setActiveTab={setActiveTab}
                onSelectTier={handleSelectTier}
              />
            </motion.div>
          )}

          {activeTab === 'partnership' && (
            <motion.div
              key="partnership"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            >
              <PartnershipScreen initialTier={selectedTier} />
            </motion.div>
          )}

          {activeTab === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            >
              <ContactScreen
                setActiveTab={setActiveTab}
                onSelectTier={handleSelectTier}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      {activeTab !== 'home' && <Footer setActiveTab={setActiveTab} />}
    </div>
  );
}
