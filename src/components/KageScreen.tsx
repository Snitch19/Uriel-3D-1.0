import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageTab } from '../types';
import { Scene } from './Scene';

interface KageScreenProps {
  setActiveTab: (tab: PageTab) => void;
}

export const KageScreen: React.FC<KageScreenProps> = ({ setActiveTab }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleFullscreen = () => {
    if (!containerRef.current) return;

    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch(() => {
        // Fallback or permission denied
        setIsFullscreen(!isFullscreen);
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      }).catch(() => {
        setIsFullscreen(false);
      });
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full flex flex-col bg-[#05070a] text-[#dfe7e0] overflow-hidden ${
        isFullscreen ? 'h-screen fixed inset-0 z-50' : 'h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)] min-h-[550px]'
      }`}
    >
      {/* Sleek Top Status & Navigation Bar */}
      <div className="shrink-0 h-12 sm:h-14 px-3 sm:px-6 bg-[#0a0e12]/95 backdrop-blur-md border-b border-[rgba(223,231,224,0.1)] flex items-center justify-between gap-2 z-20">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <button
            onClick={() => {
              setActiveTab('home');
              window.location.hash = 'home';
            }}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[rgba(223,231,224,0.06)] hover:bg-[rgba(223,231,224,0.12)] text-xs sm:text-sm font-display font-medium text-[#dfe7e0] transition-colors cursor-pointer shrink-0"
            title="Return to Hub Overview"
          >
            <span className="material-symbols-outlined text-[16px] sm:text-[18px]">arrow_back</span>
            <span className="hidden min-[480px]:inline">Hub Overview</span>
          </button>

          <div className="h-4 w-px bg-[rgba(223,231,224,0.15)] shrink-0 hidden sm:block" />

          <div className="min-w-0 flex items-center gap-2">
            <span className="font-display font-bold text-xs sm:text-sm tracking-tight text-[#dfe7e0] truncate">
              Kage (影) — The Temple Experience
            </span>
            <span className="hidden md:inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-semibold uppercase tracking-wider bg-[#e0231c]/15 text-[#ff6660] border border-[#e0231c]/30">
              ThreeUI • WebGL
            </span>
          </div>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <button
            onClick={() => setShowInfo(!showInfo)}
            className="px-2.5 py-1 rounded-md bg-[rgba(223,231,224,0.06)] hover:bg-[rgba(223,231,224,0.12)] text-xs font-display font-medium text-[#aab4ad] hover:text-[#dfe7e0] transition-colors cursor-pointer flex items-center gap-1"
            title="About this experience"
          >
            <span className="material-symbols-outlined text-[16px]">info</span>
            <span className="hidden sm:inline">Guide</span>
          </button>

          <button
            onClick={toggleFullscreen}
            className="px-2.5 py-1 rounded-md bg-[rgba(223,231,224,0.06)] hover:bg-[rgba(223,231,224,0.12)] text-xs font-display font-medium text-[#aab4ad] hover:text-[#dfe7e0] transition-colors cursor-pointer flex items-center gap-1"
            title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
          >
            <span className="material-symbols-outlined text-[16px]">
              {isFullscreen ? 'fullscreen_exit' : 'fullscreen'}
            </span>
            <span className="hidden sm:inline">{isFullscreen ? 'Exit Full' : 'Fullscreen'}</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('partnership');
              window.location.hash = 'partnership';
            }}
            className="px-3 py-1 rounded-md bg-[#e0231c] hover:bg-[#c21f19] text-white text-xs font-display font-semibold transition-colors cursor-pointer shadow-sm"
          >
            Sponsor Hub
          </button>
        </div>
      </div>

      {/* Info / Guide Dropdown Drawer */}
      <AnimatePresence>
        {showInfo && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="absolute top-12 sm:top-14 left-0 right-0 z-30 bg-[#0a0e12]/98 backdrop-blur-lg border-b border-[rgba(223,231,224,0.15)] p-4 sm:p-6 shadow-2xl text-xs sm:text-sm text-[#aab4ad]"
          >
            <div className="max-w-3xl mx-auto space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-display font-bold text-sm sm:text-base text-[#dfe7e0]">
                  How to navigate the Kage Temple World
                </h4>
                <button
                  onClick={() => setShowInfo(false)}
                  className="p-1 rounded text-[#aab4ad] hover:text-[#dfe7e0] cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">close</span>
                </button>
              </div>
              <p className="leading-relaxed">
                <strong className="text-[#dfe7e0]">Kage (影)</strong> is a 5-chapter interactive night walk through a Kyoto mountain sanctuary rendered live with Three.js shaders, charred cypress, lantern light, and a vermilion moon.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1 text-xs">
                <div className="p-2.5 rounded bg-[rgba(223,231,224,0.04)] border border-[rgba(223,231,224,0.08)]">
                  <div className="font-bold text-[#dfe7e0] mb-0.5">1. Scroll or Swipe</div>
                  <span>Progress through the Sanmon gate, approach, lantern court, and moonwater scenes.</span>
                </div>
                <div className="p-2.5 rounded bg-[rgba(223,231,224,0.04)] border border-[rgba(223,231,224,0.08)]">
                  <div className="font-bold text-[#dfe7e0] mb-0.5">2. Cursor & Tilt</div>
                  <span>Move your mouse or tilt your device to influence dynamic 3D fog, lanterns, and camera parallax.</span>
                </div>
                <div className="p-2.5 rounded bg-[rgba(223,231,224,0.04)] border border-[rgba(223,231,224,0.08)]">
                  <div className="font-bold text-[#dfe7e0] mb-0.5">3. Audio Atmosphere</div>
                  <span>Toggle sound in the document corner for authentic Japanese temple environmental chimes.</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Interactive Shader Frame */}
      <div className="relative w-full flex-grow flex-1 h-full min-h-0 bg-[#05070a]">
        <Scene />
      </div>
    </div>
  );
};

export default KageScreen;
