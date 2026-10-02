import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageTab } from '../types';
import { Scene } from './Scene';
import { UrielLogo } from './UrielLogo';

interface HomeScreenProps {
  setActiveTab: (tab: PageTab) => void;
  onSelectTier?: (tierName: string, amount: string, seats: number) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ setActiveTab, onSelectTier }) => {
  const [viewMode, setViewMode] = useState<'3d' | 'classic'>('3d');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showGuide, setShowGuide] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Send message to 3D world iframe
  const navigate3D = (hash: string) => {
    const iframe = document.querySelector('iframe');
    if (iframe?.contentWindow) {
      iframe.contentWindow.postMessage({ type: 'NAVIGATE', hash }, '*');
    }
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch(() => {
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

  const chapters = [
    { id: '#hero', label: 'Overview', num: '00' },
    { id: '#gate', label: 'Infrastructure', num: '01' },
    { id: '#pathways', label: 'Facilities', num: '02' },
    { id: '#lessons', label: 'Curriculum', num: '03' },
    { id: '#sponsorship', label: '40-Seat Grid', num: '04' },
    { id: '#contact', label: 'Contact', num: '05' },
  ];

  return (
    <div className="w-full flex flex-col bg-[#05070a] text-ink relative min-h-[calc(100vh-3.5rem)] sm:min-h-[calc(100vh-4rem)]">
      {/* 3D World Mode (Default Primary Experience) */}
      {viewMode === '3d' ? (
        <div
          ref={containerRef}
          className={`relative w-full flex flex-col bg-[#05070a] overflow-hidden ${
            isFullscreen ? 'h-screen fixed inset-0 z-50' : 'h-[calc(100vh-3.5rem)] sm:h-[calc(100vh-4rem)]'
          }`}
        >
          {/* Floating Interactive Chapter Toolbar */}
          <div className="shrink-0 h-11 sm:h-12 px-3 sm:px-6 bg-[#0a0e12]/95 backdrop-blur-md border-b border-[rgba(223,231,224,0.1)] flex items-center justify-between gap-2 z-20">
            {/* Left: Quick Chapter Navigation Chips */}
            <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto scrollbar-none py-1">
              <span className="hidden lg:inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-[#EA580C]/15 text-[#FDBA74] border border-[#EA580C]/30 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C] animate-pulse"></span>
                Uriel 3D World
              </span>

              <div className="h-4 w-px bg-[rgba(223,231,224,0.15)] shrink-0 hidden lg:block" />

              {chapters.map((ch) => (
                <button
                  key={ch.id}
                  onClick={() => navigate3D(ch.id)}
                  className="px-2 sm:px-2.5 py-1 rounded-md bg-[rgba(223,231,224,0.06)] hover:bg-[rgba(234,88,12,0.2)] text-[11px] sm:text-xs font-display font-medium text-[#dfe7e0] transition-colors cursor-pointer shrink-0 whitespace-nowrap flex items-center gap-1"
                >
                  <span className="font-mono text-[9px] text-[#EA580C]">{ch.num}</span>
                  <span>{ch.label}</span>
                </button>
              ))}
            </div>

            {/* Right: Controls & View Mode Toggle */}
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              <button
                onClick={() => setShowGuide(!showGuide)}
                className="px-2 sm:px-2.5 py-1 rounded-md bg-[rgba(223,231,224,0.06)] hover:bg-[rgba(223,231,224,0.12)] text-[11px] sm:text-xs font-display font-medium text-[#aab4ad] hover:text-[#dfe7e0] transition-colors cursor-pointer flex items-center gap-1"
                title="Navigation Tips"
              >
                <span className="material-symbols-outlined text-[15px]">info</span>
                <span className="hidden md:inline">Tips</span>
              </button>

              <button
                onClick={toggleFullscreen}
                className="px-2 sm:px-2.5 py-1 rounded-md bg-[rgba(223,231,224,0.06)] hover:bg-[rgba(223,231,224,0.12)] text-[11px] sm:text-xs font-display font-medium text-[#aab4ad] hover:text-[#dfe7e0] transition-colors cursor-pointer flex items-center gap-1"
                title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
              >
                <span className="material-symbols-outlined text-[15px]">
                  {isFullscreen ? 'fullscreen_exit' : 'fullscreen'}
                </span>
                <span className="hidden sm:inline">{isFullscreen ? 'Exit' : 'Full'}</span>
              </button>

              <button
                onClick={() => setViewMode('classic')}
                className="px-2.5 py-1 rounded-md bg-[rgba(223,231,224,0.06)] hover:bg-[rgba(223,231,224,0.12)] text-[11px] sm:text-xs font-display font-medium text-[#aab4ad] hover:text-[#dfe7e0] transition-colors cursor-pointer flex items-center gap-1"
                title="Switch to flat list layout"
              >
                <span className="material-symbols-outlined text-[15px]">view_agenda</span>
                <span className="hidden sm:inline">Classic</span>
              </button>

              <button
                onClick={() => {
                  setActiveTab('partnership');
                  window.location.hash = 'partnership';
                }}
                className="px-2.5 sm:px-3 py-1 rounded-md bg-[#EA580C] hover:bg-[#C2410C] text-white text-[11px] sm:text-xs font-display font-semibold transition-colors cursor-pointer shadow-sm shrink-0"
              >
                Sponsor Desk
              </button>
            </div>
          </div>

          {/* Guide Dropdown Drawer */}
          <AnimatePresence>
            {showGuide && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="absolute top-11 sm:top-12 left-0 right-0 z-30 bg-[#0a0e12]/98 backdrop-blur-xl border-b border-[rgba(223,231,224,0.15)] p-4 sm:p-5 shadow-2xl text-xs sm:text-sm text-[#aab4ad]"
              >
                <div className="max-w-3xl mx-auto space-y-2.5">
                  <div className="flex items-center justify-between">
                    <h4 className="font-display font-bold text-sm sm:text-base text-[#dfe7e0] flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#EA580C] text-[18px]">view_in_ar</span>
                      The Uriel Initiative — 3D Hub Navigation
                    </h4>
                    <button
                      onClick={() => setShowGuide(false)}
                      className="p-1 rounded text-[#aab4ad] hover:text-[#dfe7e0] cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[18px]">close</span>
                    </button>
                  </div>
                  <p className="leading-relaxed text-xs sm:text-sm">
                    This interactive 3D format renders The Uriel Initiative's Ekpoma facility in real-time WebGL with dynamic solar lighting, 3D typography, live facility viewports, and an interactive 40-seat workstation allocation grid.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 text-xs">
                    <div className="p-2.5 rounded bg-[rgba(223,231,224,0.04)] border border-[rgba(223,231,224,0.08)]">
                      <strong className="text-[#dfe7e0] block mb-0.5">Scroll or Swipe</strong>
                      <span>Glide through the 6 chapters: Infrastructure, Facilities, Curriculum, Sponsorship, and Contact.</span>
                    </div>
                    <div className="p-2.5 rounded bg-[rgba(223,231,224,0.04)] border border-[rgba(223,231,224,0.08)]">
                      <strong className="text-[#dfe7e0] block mb-0.5">Cursor &amp; Parallax</strong>
                      <span>Move pointer or tilt device to explore depth layers, floating embers, and 3D camera shifts.</span>
                    </div>
                    <div className="p-2.5 rounded bg-[rgba(223,231,224,0.04)] border border-[rgba(223,231,224,0.08)]">
                      <strong className="text-[#dfe7e0] block mb-0.5">40-Seat Interactive Grid</strong>
                      <span>Click seats in Chapter 04 to calculate tier costs and sponsor directly via WhatsApp.</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Real-time 3D World Canvas & Document Frame */}
          <div className="relative w-full flex-grow flex-1 h-full min-h-0 bg-[#05070a]">
            <Scene />
          </div>
        </div>
      ) : (
        /* Classic Flat Layout Mode (Accessible via toggle) */
        <div className="max-w-4xl mx-auto px-3.5 sm:px-6 w-full py-6 sm:py-12 md:py-16 space-y-10 sm:space-y-16">
          <div className="flex items-center justify-between pb-3 border-b border-border-line">
            <span className="font-display text-sm font-semibold text-mute">Classic Overview</span>
            <button
              onClick={() => setViewMode('3d')}
              className="px-3 py-1.5 rounded-lg bg-primary hover:bg-primary-hover text-accent-contrast font-display text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 shadow-2xs"
            >
              <span className="material-symbols-outlined text-[16px]">view_in_ar</span>
              <span>Back to 3D World</span>
            </button>
          </div>

          {/* Hero Section */}
          <section className="text-center space-y-4 max-w-2xl mx-auto">
            <UrielLogo size={48} variant="orange-bg" className="mx-auto" />
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container border border-border-line text-xs font-mono text-mute">
              <span>Ekpoma, Edo State</span>
              <span>•</span>
              <span className="text-primary font-bold">40 Dedicated Workstations</span>
            </div>
            <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-ink">
              Tech literacy in Edo State, starting with <span className="font-editorial-italic font-normal text-primary">Ekpoma</span>.
            </h1>
            <p className="font-sans text-sm sm:text-base text-mute max-w-xl mx-auto leading-relaxed">
              Equipping local university students with dedicated computer workstations, continuous solar electricity, and hands-on software engineering mentorship.
            </p>
          </section>

          {/* 4 Pillars */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <div className="p-4 rounded-xl bg-surface-card border border-border-line space-y-2">
              <span className="font-display font-bold text-sm text-primary">40 Terminals</span>
              <p className="text-xs sm:text-sm text-mute">Core i7 setups with dual 1080p IPS displays and NVMe storage.</p>
            </div>
            <div className="p-4 rounded-xl bg-surface-card border border-border-line space-y-2">
              <span className="font-display font-bold text-sm text-primary">10kVA Solar</span>
              <p className="text-xs sm:text-sm text-mute">Lithium microgrid power providing 99.8% uptime, eliminating city grid outages.</p>
            </div>
            <div className="p-4 rounded-xl bg-surface-card border border-border-line space-y-2">
              <span className="font-display font-bold text-sm text-primary">Starlink Link</span>
              <p className="text-xs sm:text-sm text-mute">Low-latency satellite internet for GitHub pushes and remote standups.</p>
            </div>
            <div className="p-4 rounded-xl bg-surface-card border border-border-line space-y-2">
              <span className="font-display font-bold text-sm text-primary">Mentorship</span>
              <p className="text-xs sm:text-sm text-mute">Real-world software engineering coaching, code reviews, and placement.</p>
            </div>
          </section>

          {/* Switch to 3D Banner */}
          <div className="p-6 rounded-2xl bg-surface-container border border-border-line text-center space-y-3">
            <h3 className="font-display text-xl font-bold text-ink">Experience The Uriel Initiative in 3D</h3>
            <p className="text-xs sm:text-sm text-mute max-w-md mx-auto">
              Explore the live WebGL atmosphere with real-time Three.js shaders, 3D wordmark, and interactive workstation capacity grid.
            </p>
            <button
              onClick={() => setViewMode('3d')}
              className="px-6 py-2.5 rounded-lg bg-primary hover:bg-primary-hover text-accent-contrast font-display text-sm font-bold cursor-pointer"
            >
              Enter 3D World Experience
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeScreen;
