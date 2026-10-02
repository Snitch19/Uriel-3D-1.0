import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageTab } from '../types';
import { UrielLogo } from './UrielLogo';

interface ContactScreenProps {
  setActiveTab: (tab: PageTab) => void;
  onSelectTier?: (tierName: string, amount: string, seats: number) => void;
}

export const ContactScreen: React.FC<ContactScreenProps> = ({ setActiveTab, onSelectTier }) => {
  const [fullName, setFullName] = useState('');
  const [contactChannel, setContactChannel] = useState('');
  const [proposalMessage, setProposalMessage] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('Sponsorship');
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const topics = [
    'Sponsorship',
    'Hardware Donation',
    'Hiring Graduates',
    'Hub Inspection Visit',
    'General Partnership',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    const waText = `Hello Will, I sent an inquiry from The Uriel Initiative website.%0A%0AName: ${encodeURIComponent(
      fullName
    )}%0AContact: ${encodeURIComponent(contactChannel)}%0ATopic: ${encodeURIComponent(
      selectedTopic
    )}%0AMessage: ${encodeURIComponent(proposalMessage)}`;

    setTimeout(() => {
      setIsSending(false);
      setIsSuccess(true);
      window.open(`https://wa.me/2347071175635?text=${waText}`, '_blank');
    }, 400);
  };

  const handleSponsorOne = () => {
    if (onSelectTier) {
      onSelectTier('Single Workstation', '250000', 1);
    }
    setActiveTab('partnership');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.hash = 'partnership';
  };

  return (
    <div className="flex flex-col w-full text-ink">
      <div className="max-w-4xl mx-auto px-3.5 sm:px-6 w-full py-6 sm:py-12 md:py-16 space-y-10 sm:space-y-16">
        
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-3.5 sm:space-y-4 max-w-xl mx-auto pt-1 sm:pt-2"
        >
          <div className="flex items-center justify-center">
            <UrielLogo size={48} variant="orange-bg" className="shadow-xs sm:w-[54px] sm:h-[54px]" />
          </div>

          <div className="inline-flex items-center flex-wrap justify-center gap-1.5 sm:gap-2.5 px-3 sm:px-3.5 py-1.5 rounded-full bg-surface-container border border-border-line text-[11px] sm:text-xs font-mono text-mute shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
            <span className="font-semibold text-ink">Ekpoma Ground Desk</span>
            <span>•</span>
            <span>Direct Access</span>
          </div>

          <h1 className="font-display text-2xl min-[380px]:text-3xl sm:text-5xl text-ink font-extrabold tracking-tight leading-tight">
            Connect with our team in Ekpoma.
          </h1>

          <p className="font-sans text-xs sm:text-sm md:text-base text-mute leading-relaxed">
            Sponsor workstations, donate equipment, hire graduates, or arrange a hub inspection near Ambrose Alli University.
          </p>
        </motion.header>

        {/* 3 Contact Quick-Link Cards (Stacked on mobile, 3-col on tablet/desktop) */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-center">
          <motion.a
            href="https://wa.me/2347071175635"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.98 }}
            className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-surface-card border border-border-line hover:border-primary/40 transition-colors block space-y-2 shadow-xs group cursor-pointer min-h-[90px]"
          >
            <div className="w-10 h-10 mx-auto rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-2xl">chat</span>
            </div>
            <div className="font-display font-bold text-sm text-ink">WhatsApp Desk</div>
            <div className="font-mono text-xs sm:text-sm text-primary font-bold">+234 707 117 5635 →</div>
          </motion.a>

          <motion.a
            href="tel:07071175635"
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.98 }}
            className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-surface-card border border-border-line hover:border-primary/40 transition-colors block space-y-2 shadow-xs group cursor-pointer min-h-[90px]"
          >
            <div className="w-10 h-10 mx-auto rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-2xl">call</span>
            </div>
            <div className="font-display font-bold text-sm text-ink">Direct Telephone</div>
            <div className="font-mono text-xs sm:text-sm text-primary font-bold">07071175635 →</div>
          </motion.a>

          <motion.a
            href="mailto:urielglobal.group@gmail.com"
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.98 }}
            className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-surface-card border border-border-line hover:border-primary/40 transition-colors block space-y-2 shadow-xs group cursor-pointer min-h-[90px]"
          >
            <div className="w-10 h-10 mx-auto rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-2xl">mail</span>
            </div>
            <div className="font-display font-bold text-sm text-ink">Official Email</div>
            <div className="font-sans text-xs sm:text-sm text-primary font-bold truncate">urielglobal.group@gmail.com →</div>
          </motion.a>
        </section>

        {/* Form & Hub Info */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-8 items-start">
          <form onSubmit={handleSubmit} className="md:col-span-7 p-4 sm:p-6 md:p-7 rounded-2xl bg-surface-card border border-border-line space-y-3.5 sm:space-y-4 shadow-xs">
            <div>
              <h2 className="font-display text-lg sm:text-xl md:text-2xl font-bold text-ink tracking-tight">
                Direct Message to Will Osezele
              </h2>
              <p className="font-sans text-xs sm:text-sm text-mute mt-1">
                Founder and Project Director. Direct replies during laboratory hours.
              </p>
            </div>

            <div className="space-y-1.5">
              <label className="block font-display text-xs font-semibold text-mute uppercase tracking-wider">Inquiry Topic</label>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-0.5">
                {topics.map((t) => {
                  const isSelected = selectedTopic === t;
                  return (
                    <motion.button
                      key={t}
                      type="button"
                      onClick={() => setSelectedTopic(t)}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className={`px-2.5 sm:px-3 py-1.5 rounded-lg font-display text-xs font-semibold transition-all cursor-pointer border min-h-[34px] flex items-center ${
                        isSelected
                          ? 'bg-primary text-accent-contrast border-primary shadow-2xs font-bold'
                          : 'bg-surface-container text-mute border-border-line hover:text-ink hover:border-outline'
                      }`}
                    >
                      {t}
                    </motion.button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="block font-display text-xs font-semibold text-mute mb-1">Your Name / Organization</label>
              <input
                type="text"
                required
                placeholder="e.g. Samuel Osaze / Horizon Capital"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full h-11 px-3.5 bg-surface-container text-ink rounded-lg border border-border-line font-sans text-base sm:text-sm focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div>
              <label className="block font-display text-xs font-semibold text-mute mb-1">Email, Phone or WhatsApp</label>
              <input
                type="text"
                required
                placeholder="e.g. samuel@example.com or 080..."
                value={contactChannel}
                onChange={(e) => setContactChannel(e.target.value)}
                className="w-full h-11 px-3.5 bg-surface-container text-ink rounded-lg border border-border-line font-sans text-base sm:text-sm focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div>
              <label className="block font-display text-xs font-semibold text-mute mb-1">Message or Proposal</label>
              <textarea
                required
                rows={3}
                placeholder="Briefly state your message, sponsorship interest, or equipment details..."
                value={proposalMessage}
                onChange={(e) => setProposalMessage(e.target.value)}
                className="w-full p-3.5 bg-surface-container text-ink rounded-lg border border-border-line font-sans text-base sm:text-sm focus:outline-none focus:border-primary resize-y transition-colors"
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSending}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 rounded-lg bg-primary hover:bg-primary-hover text-accent-contrast font-display text-sm font-bold cursor-pointer transition-all shadow-sm flex items-center justify-center gap-2 min-h-[46px]"
            >
              {isSending ? (
                <>
                  <span className="material-symbols-outlined text-[18px] animate-spin">refresh</span>
                  <span>Opening WhatsApp...</span>
                </>
              ) : (
                <>
                  <span>Send Direct Message</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </>
              )}
            </motion.button>

            <AnimatePresence>
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="p-3 rounded-lg bg-primary-container text-primary-text font-sans text-xs sm:text-sm text-center border border-primary/25 font-semibold"
                >
                  Opening WhatsApp to connect directly with Will Osezele...
                </motion.div>
              )}
            </AnimatePresence>
          </form>

          {/* Facility Location Details */}
          <div className="md:col-span-5 space-y-3.5 sm:space-y-4">
            <div className="p-5 sm:p-6 rounded-2xl bg-surface-card border border-border-line space-y-3.5 sm:space-y-4 shadow-xs">
              <h3 className="font-display text-base sm:text-lg font-bold text-ink tracking-tight">
                Ekpoma Facility Information
              </h3>
              <div className="space-y-3 font-sans text-xs sm:text-sm text-mute leading-relaxed">
                <div>
                  <strong className="font-display font-bold text-ink block">Location:</strong>
                  Ambrose Alli University (AAU) Corridor, Ekpoma, Edo State, Nigeria.
                </div>
                <div>
                  <strong className="font-display font-bold text-ink block">Lab Hours:</strong>
                  Monday – Saturday: 8:00 AM – 8:00 PM (WAT).
                </div>
                <div>
                  <strong className="font-display font-bold text-ink block">Equipment Drop-offs:</strong>
                  Laptops, monitors, inverters, and battery cells accepted with logged serial verification.
                </div>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.01 }}
              className="p-4 sm:p-5 rounded-2xl bg-surface-container border border-border-line font-sans text-xs sm:text-sm text-mute space-y-2 shadow-xs"
            >
              <span className="font-display font-bold text-ink block text-sm">Single Seat Funding</span>
              <p>Want to endow a single workstation (₦250k) right away?</p>
              <button
                onClick={handleSponsorOne}
                className="text-primary hover:text-primary-hover font-display text-xs sm:text-sm font-bold flex items-center gap-1 cursor-pointer py-1"
              >
                <span>Sponsor 1 Workstation Now</span>
                <span>→</span>
              </button>
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  );
};
