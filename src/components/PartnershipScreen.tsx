import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SponsorshipTier } from '../types';
import { UrielLogo } from './UrielLogo';

interface PartnershipScreenProps {
  initialTier?: { name: string; amount: string; seats: number } | null;
}

const TIERS: SponsorshipTier[] = [
  {
    id: 'bronze',
    name: 'Bronze Tier',
    kicker: 'Micro-Cohort',
    priceNum: 3500000,
    priceFormatted: '₦3.5M',
    seats: 5,
    description: 'Outfits 5 complete workstations with dedicated backup power.',
    features: [
      '5 dual-monitor terminal stations',
      'Hub room surge suppression & clean wiring',
      'Direct solar hybrid inverter link',
      'Sponsor plaque recognition in Ekpoma hub',
    ],
  },
  {
    id: 'silver',
    name: 'Silver Tier',
    kicker: 'Lab Expansion',
    priceNum: 6500000,
    priceFormatted: '₦6.5M',
    seats: 10,
    description: 'Outfits 10 developer stations with heavy-duty task furniture.',
    features: [
      '10 Core i7 developer workstations',
      'Solid timber work tables & task seating',
      '5kVA continuous power allocation',
      'Quarterly video walkthroughs with student cohort',
    ],
  },
  {
    id: 'gold',
    name: 'Gold Tier',
    kicker: 'Strategic Partner',
    priceNum: 12000000,
    priceFormatted: '₦12M',
    seats: 20,
    popular: true,
    description: 'Funds half the lab capacity and expands solar storage.',
    features: [
      '20 complete high-performance setups',
      'Solar array & lithium bank expansion',
      'Priority Starlink Wi-Fi 6 lab allocation',
      'Named wing dedication & direct hiring pipeline',
    ],
  },
  {
    id: 'platinum',
    name: 'Platinum Tier',
    kicker: 'Hub Patron',
    priceNum: 20000000,
    priceFormatted: '₦20M',
    seats: 40,
    description: 'Endows all 40 workstations for the entire training year.',
    features: [
      'Full lab patronage (all 40 workstations)',
      'Autonomous solar microgrid operational backing',
      'Primary building naming & sponsor wall honors',
      'Advisory board seat & exclusive campus recruitment',
    ],
  },
];

export const PartnershipScreen: React.FC<PartnershipScreenProps> = ({ initialTier }) => {
  const [sponsorName, setSponsorName] = useState('');
  const [sponsorEmail, setSponsorEmail] = useState('');
  const [selectedPackageText, setSelectedPackageText] = useState('Gold Tier (₦12,000,000)');
  const [bankRef, setBankRef] = useState('');
  const [copied, setCopied] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  // Slider State
  const [calcSeats, setCalcSeats] = useState<number>(20);
  const calculatedCost = calcSeats * 250000;

  useEffect(() => {
    if (initialTier) {
      const seats = initialTier.seats || 20;
      setSelectedPackageText(`${initialTier.name} (₦${parseInt(initialTier.amount, 10).toLocaleString()})`);
      setCalcSeats(seats);
    }
  }, [initialTier]);

  const handleCopyAccount = () => {
    navigator.clipboard.writeText('2271057578').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    });
  };

  const handleSelectTier = (tier: SponsorshipTier) => {
    setSelectedPackageText(`${tier.name} (${tier.priceFormatted})`);
    setCalcSeats(tier.seats);
    const element = document.getElementById('bank-details');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionSuccess(true);

    const message = `Hello Will, I have sent a sponsorship contribution for The Uriel Initiative.%0A%0ASponsor: ${encodeURIComponent(
      sponsorName || 'Patron'
    )}%0APackage: ${encodeURIComponent(selectedPackageText)}%0AReference: ${encodeURIComponent(
      bankRef || 'Zenith-Transfer'
    )}`;

    setTimeout(() => {
      window.open(`https://wa.me/2347071175635?text=${message}`, '_blank');
    }, 500);
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
            <span className="font-semibold text-ink">Verified Hardware Funding</span>
            <span>•</span>
            <span>Ekpoma, Nigeria</span>
          </div>

          <h1 className="font-display text-2xl min-[380px]:text-3xl sm:text-5xl text-ink font-extrabold tracking-tight leading-tight">
            Sponsorship packages backed by verified hardware.
          </h1>

          <p className="font-sans text-xs sm:text-sm md:text-base text-mute leading-relaxed">
            Every contribution directly funds computer workstations, Starlink bandwidth, and solar power in Ekpoma with transparent reporting.
          </p>
        </motion.header>

        {/* 4 Clean Packages (Mobile: 1 col, Tablet: 2 cols, Desktop: 4 cols) */}
        <section className="space-y-4 sm:space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 pb-3 border-b border-border-line">
            <h2 className="font-display text-lg sm:text-xl md:text-2xl font-bold text-ink tracking-tight">
              Sponsorship Levels
            </h2>
            <span className="font-mono text-xs font-semibold text-primary bg-primary-container/40 px-2.5 py-1 rounded border border-primary/20 w-fit">
              100% Directed to Ekpoma Hub
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 items-stretch">
            {TIERS.map((tier) => {
              const isSelected = selectedPackageText.startsWith(tier.name);
              return (
                <motion.div
                  key={tier.id}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className={`p-4 sm:p-5 rounded-2xl bg-surface-card border flex flex-col justify-between space-y-4 transition-all shadow-xs ${
                    tier.popular
                      ? 'border-primary ring-2 ring-primary/30 shadow-sm'
                      : isSelected
                      ? 'border-primary ring-1 ring-primary/40'
                      : 'border-border-line hover:border-outline'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-display font-bold text-primary uppercase tracking-wider">{tier.kicker}</span>
                      <span className="font-mono font-bold bg-surface-container text-ink px-2.5 py-0.5 rounded border border-border-line">
                        {tier.seats} Seats
                      </span>
                    </div>

                    <div>
                      <h3 className="font-display text-base sm:text-lg font-bold text-ink tracking-tight">{tier.name}</h3>
                      <div className="font-mono text-xl sm:text-2xl font-extrabold text-ink mt-0.5 tracking-tight">{tier.priceFormatted}</div>
                    </div>

                    <p className="font-sans text-xs sm:text-sm text-mute leading-relaxed">{tier.description}</p>

                    <ul className="space-y-2 font-sans text-xs sm:text-sm text-mute border-t border-border-line pt-3">
                      {tier.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary font-bold shrink-0">✓</span>
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <motion.button
                    onClick={() => handleSelectTier(tier)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-2.5 sm:py-3 rounded-lg font-display text-xs sm:text-sm font-bold cursor-pointer transition-all shadow-2xs min-h-[44px] flex items-center justify-center ${
                      tier.popular
                        ? 'bg-primary hover:bg-primary-hover text-accent-contrast'
                        : isSelected
                        ? 'bg-primary text-accent-contrast'
                        : 'bg-surface-container hover:bg-surface-container-high text-ink'
                    }`}
                  >
                    {isSelected ? '✓ Selected' : `Select ${tier.name}`}
                  </motion.button>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Seat Calculator Slider with Dynamic Animation */}
        <section className="p-4 sm:p-6 md:p-8 rounded-2xl bg-surface-card border border-border-line space-y-4 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="font-display text-base sm:text-lg md:text-xl font-bold text-ink tracking-tight">
                Workstation Allocation Calculator
              </h3>
              <p className="font-sans text-xs sm:text-sm text-mute">
                Adjust slider to calculate custom terminal and solar microgrid funding.
              </p>
            </div>
            <div className="text-left sm:text-right">
              <motion.span
                key={calculatedCost}
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                className="font-mono text-xl sm:text-2xl font-extrabold text-primary"
              >
                ₦{calculatedCost.toLocaleString()}{' '}
                <span className="font-sans text-xs text-mute font-medium">({calcSeats} {calcSeats === 1 ? 'seat' : 'seats'})</span>
              </motion.span>
            </div>
          </div>

          <div className="space-y-2 pt-2">
            <input
              type="range"
              min="1"
              max="40"
              value={calcSeats}
              onChange={(e) => {
                const val = parseInt(e.target.value, 10);
                setCalcSeats(val);
                setSelectedPackageText(`Custom Support (${val} Workstations - ₦${(val * 250000).toLocaleString()})`);
              }}
              className="w-full accent-primary h-3 sm:h-2.5 bg-surface-container rounded-lg cursor-pointer transition-all"
            />
            <div className="flex items-center justify-between text-xs font-mono font-medium text-mute">
              <span>1 Seat (₦250k)</span>
              <span>20 Seats (₦5M)</span>
              <span>40 Seats (₦10M)</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-3 border-t border-border-line text-xs sm:text-sm text-mute gap-2">
            <span>Directly enables terminal access for <strong className="text-ink font-semibold">{calcSeats * 4} university students</strong> annually.</span>
            <button
              onClick={() => {
                const element = document.getElementById('bank-details');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-primary hover:text-primary-hover font-display text-xs sm:text-sm font-bold flex items-center gap-1 cursor-pointer py-1"
            >
              <span>Transfer coordinates below</span>
              <span>↓</span>
            </button>
          </div>
        </section>

        {/* Bank Wire Details & Proof */}
        <section id="bank-details" className="p-4 sm:p-6 md:p-8 rounded-2xl bg-surface-card border border-border-line space-y-5 sm:space-y-6 shadow-xs">
          <div>
            <h2 className="font-display text-lg sm:text-xl md:text-2xl font-bold text-ink tracking-tight">
              Direct Bank Coordinates &amp; Proof of Transfer
            </h2>
            <p className="font-sans text-xs sm:text-sm text-mute mt-1">
              Official Zenith Bank account in Ekpoma, Edo State. All funds are receipted directly with photographic hardware reports.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 items-start">
            {/* Account Box with Copy Interaction */}
            <div className="p-4 sm:p-5 md:p-6 rounded-xl bg-surface-container border border-border-line space-y-4 flex flex-col justify-between">
              <div className="space-y-3 font-sans text-xs sm:text-sm">
                <div className="flex items-center justify-between border-b border-border-line pb-2.5">
                  <span className="text-mute font-medium">Bank Partner</span>
                  <span className="font-display font-bold text-ink">Zenith Bank Plc</span>
                </div>
                <div className="flex items-center justify-between border-b border-border-line pb-2.5">
                  <span className="text-mute font-medium">Account Name</span>
                  <span className="font-display font-bold text-ink">Will Osezele</span>
                </div>
                <div className="flex items-center justify-between border-b border-border-line pb-2.5">
                  <span className="text-mute font-medium">Branch Location</span>
                  <span className="text-ink font-medium">Ekpoma, Edo State</span>
                </div>
                <div>
                  <span className="font-display text-xs font-semibold text-mute uppercase tracking-wider block mb-1.5">
                    NUBAN Account Number
                  </span>
                  <div className="flex flex-col min-[340px]:flex-row items-stretch min-[340px]:items-center justify-between gap-2 bg-surface-card p-2.5 sm:p-3 rounded-lg border border-border-line shadow-2xs">
                    <span className="font-mono text-lg min-[360px]:text-xl sm:text-2xl font-extrabold text-primary tracking-wider text-center min-[340px]:text-left">
                      2271057578
                    </span>
                    <motion.button
                      type="button"
                      onClick={handleCopyAccount}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-3 py-2 bg-surface-container hover:bg-surface-container-high rounded-md font-display text-xs font-bold text-ink border border-border-line flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs min-h-[38px]"
                    >
                      <span className="material-symbols-outlined text-[16px] text-primary">
                        {copied ? 'check' : 'content_copy'}
                      </span>
                      <span>{copied ? 'Copied!' : 'Copy'}</span>
                    </motion.button>
                  </div>
                </div>
              </div>

              <motion.a
                href="https://wa.me/2347071175635"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 rounded-lg bg-surface-card border border-border-line hover:border-outline font-display text-xs sm:text-sm font-bold text-center block text-ink transition-colors shadow-2xs min-h-[44px] flex items-center justify-center"
              >
                Instant WhatsApp Confirmation (+234 707 117 5635)
              </motion.a>
            </div>

            {/* Lean Notification Form */}
            <form onSubmit={handleFormSubmit} className="space-y-3 sm:space-y-3.5">
              <span className="font-display text-xs font-bold text-mute uppercase tracking-wider block">
                Notify Director of Wire Transfer
              </span>

              <div>
                <label className="block font-display text-xs font-semibold text-mute mb-1">Your Name / Organization</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Adeola Johnson / Horizon Tech"
                  value={sponsorName}
                  onChange={(e) => setSponsorName(e.target.value)}
                  className="w-full h-11 px-3.5 bg-surface-container text-ink rounded-lg border border-border-line font-sans text-base sm:text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="block font-display text-xs font-semibold text-mute mb-1">Email for Official Receipt</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. sponsor@domain.com"
                  value={sponsorEmail}
                  onChange={(e) => setSponsorEmail(e.target.value)}
                  className="w-full h-11 px-3.5 bg-surface-container text-ink rounded-lg border border-border-line font-sans text-base sm:text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="block font-display text-xs font-semibold text-mute mb-1">Designated Package</label>
                <input
                  type="text"
                  required
                  value={selectedPackageText}
                  onChange={(e) => setSelectedPackageText(e.target.value)}
                  className="w-full h-11 px-3.5 bg-surface-container text-ink rounded-lg border border-border-line font-sans text-base sm:text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="block font-display text-xs font-semibold text-mute mb-1">Bank Reference / Narration</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Zenith Mobile 9948291"
                  value={bankRef}
                  onChange={(e) => setBankRef(e.target.value)}
                  className="w-full h-11 px-3.5 bg-surface-container text-ink rounded-lg border border-border-line font-sans text-base sm:text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 rounded-lg bg-primary hover:bg-primary-hover text-accent-contrast font-display text-sm font-bold cursor-pointer transition-all shadow-sm mt-1 min-h-[46px] flex items-center justify-center"
              >
                Transmit Transfer Record
              </motion.button>

              <AnimatePresence>
                {submissionSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-3 rounded-lg bg-primary-container text-primary-text font-sans text-xs sm:text-sm text-center border border-primary/25 font-semibold"
                  >
                    Transfer record logged. Connecting with Will Osezele via WhatsApp...
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </section>

      </div>
    </div>
  );
};
