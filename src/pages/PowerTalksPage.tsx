import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeroParticleCanvas } from '@/components/common/HeroParticleCanvas';
import { BottomCtaBanner } from '@/components/common/BottomCtaBanner';
import {
  POWERTALKS_STATS,
  POWERTALKS_CATEGORIES,
  POWERTALKS_FEATURES,
  PAST_TALKS,
  WHY_A3CEND,
} from '@/data/powerTalksData';

import patrickImg from '@/assets/patrick-ubezio.png';
import deviprasadImg from '@/assets/deviprasad-singh.png';
import powertalksImg from '@/assets/img-powertalks.png';

const SPEAKER_IMAGES: Record<string, string> = {
  PU: patrickImg,
  DS: deviprasadImg,
};

export const PowerTalksPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All Keynotes');
  const [selectedTalkModal, setSelectedTalkModal] = useState<typeof PAST_TALKS[0] | null>(null);

  // Access Request Form State inside Modal
  const [requestEmail, setRequestEmail] = useState<string>('');
  const [requestName, setRequestName] = useState<string>('');
  const [requestSuccess, setRequestSuccess] = useState<boolean>(false);

  const filteredTalks = activeCategory === 'All Keynotes'
    ? PAST_TALKS
    : PAST_TALKS.filter((t) => t.category === activeCategory);

  const handleOpenModal = (talk: typeof PAST_TALKS[0]) => {
    setSelectedTalkModal(talk);
    setRequestSuccess(false);
    setRequestEmail('');
    setRequestName('');
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRequestSuccess(true);
  };

  return (
    <div className="min-h-screen bg-slate-50/60 text-ink-900 font-sans">

      {/* ── SECTION 1: HERO (#archive) ── */}
      <section className="a3-hero-iridescent relative overflow-hidden px-6 md:px-12 pt-8 md:pt-12 pb-16">
        <HeroParticleCanvas canvasId="powertalks-hero-canvas" count={220} />

        <div className="a3-blob a3-blob--cyan top-[-120px] left-[-90px] w-[500px] h-[500px] opacity-30 animate-floatSlow pointer-events-none" />
        <div className="a3-blob a3-blob--pink bottom-[-130px] right-[-90px] w-[450px] h-[450px] opacity-25 animate-floatRev pointer-events-none" />

        <div className="relative z-10 max-w-[1340px] mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          
          {/* Left Column */}
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#008196]/25 text-[#008196] text-xs font-mono font-bold tracking-widest uppercase w-fit shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#008196] animate-pulse" />
              PowerTalks · Keynote Series Archive
            </div>

            <h1 className="mt-5 font-heading font-black text-4xl sm:text-5xl lg:text-6xl leading-[1.06] tracking-tight text-ink-900">
              Inspire. Energize.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008196] via-[#04aac4] to-[#ff4081]">
                Transform.
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg leading-relaxed max-w-[54ch] text-slate-600">
              Keynote lectures by senior practitioners and business leaders on leadership, collaboration, strategy, and organizational change — recorded and archived for replay.
            </p>

            <div className="mt-8 flex flex-wrap gap-3.5 items-center">
              <a href="#archive-grid" className="px-7 py-3.5 text-sm font-bold text-black bg-white border border-[#008196] hover:bg-[#ff4081] hover:text-white hover:border-[#ff4081] rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                Explore Keynote Archive ↓
              </a>
              <Link to="/contact" className="px-7 py-3.5 text-sm font-bold text-black bg-white border border-[#008196] hover:bg-[#008196] hover:text-white hover:border-[#008196] rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                Bring one to your team
              </Link>
            </div>

            {/* Feature Pills */}
            <div className="mt-8 flex flex-wrap gap-2.5">
              {POWERTALKS_FEATURES.map((f) => (
                <div
                  key={f.title}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-slate-200/90 rounded-2xl text-xs font-bold text-slate-700 shadow-2xs"
                >
                  <span className="w-2 h-2 rounded-full bg-[#008196]" />
                  <span><strong>{f.title}:</strong> {f.body}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual Card */}
          <div className="relative">
            
            {/* Floating Replay Pill Overlay */}
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-2 z-20 max-w-[calc(100%-1rem)] bg-white/95 backdrop-blur-md border border-[#008196]/30 p-2.5 sm:p-3.5 rounded-2xl shadow-xl flex items-center gap-2 sm:gap-3 animate-floatSm">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-r from-[#008196] to-[#04aac4] flex items-center justify-center font-heading font-black text-xs sm:text-sm text-white shadow-sm shrink-0">
                ▶
              </div>
              <div className="min-w-0">
                <div className="font-heading font-extrabold text-[11px] sm:text-xs text-ink-900 whitespace-nowrap">Keynote Replay Archive</div>
                <div className="text-[9px] sm:text-[11px] text-slate-500 whitespace-nowrap">Request Access to Recording &amp; Workbook</div>
              </div>
            </div>

            <div className="rounded-[28px] overflow-hidden bg-white border border-slate-200/90 shadow-2xl p-3">
              <div className="relative rounded-2xl overflow-hidden group">
                <img src={powertalksImg} alt="A3CEND PowerTalks keynote session" className="w-full h-auto block transform group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/20 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <span className="px-3 py-1 rounded-full bg-[#ff4081] text-white font-mono text-[10px] font-bold uppercase tracking-widest">
                      Keynote Series Archive
                    </span>
                    <h3 className="font-heading font-black text-xl text-white mt-2 leading-snug">
                      Senior Operator Insights On-Demand
                    </h3>
                  </div>
                </div>
              </div>

              {/* 3 Stat Boxes below image */}
              <div className="grid grid-cols-3 gap-2 pt-3 px-1">
                {POWERTALKS_STATS.slice(0, 3).map((st) => (
                  <div key={st.label} className="bg-slate-50 rounded-xl p-2.5 text-center border border-slate-200/80">
                    <div className="font-heading font-black text-base text-ink-900">{st.value}</div>
                    <div className="text-[10px] font-bold text-slate-500 leading-tight">{st.label}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── SECTION 2: KEYNOTE ARCHIVE (#archive-grid) ── */}
      <section id="archive-grid" className="bg-white py-16 px-6 md:px-12 border-t border-slate-200">
        <div className="max-w-[1340px] mx-auto">
          
          {/* Header & Category Filters */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff4081]/10 text-[#ff4081] text-xs font-mono font-bold tracking-widest uppercase mb-3 border border-[#ff4081]/20">
                The Archive
              </div>
              <h2 className="text-3xl sm:text-4xl font-heading font-black text-ink-900 leading-tight">
                Every PowerTalk so far.
              </h2>
              <p className="text-sm text-slate-600 mt-1 max-w-[60ch]">
                Keynote lectures by senior practitioners — recorded, archived, and ready to revisit.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {POWERTALKS_CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                      isActive
                        ? 'bg-[#008196] text-white shadow-md'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-ink-900'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Keynotes Grid */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredTalks.map((talk) => {
              const isCoral = talk.hue === '#ff4081';
              return (
                <div
                  key={talk.id}
                  className="bg-white rounded-[28px] border border-slate-200/90 shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Accent Line */}
                    <div className="h-2" style={{ background: talk.hue }} />

                    <div className="p-7">
                      {/* Category & Status Row */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider ${
                          isCoral ? 'bg-[#ff4081]/10 text-[#ff4081] border border-[#ff4081]/20' : 'bg-[#008196]/10 text-[#008196] border border-[#008196]/20'
                        }`}>
                          Recording
                        </span>
                        <span className="font-mono text-[11px] font-bold text-slate-400">
                          {talk.date}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-heading font-black text-xl text-ink-900 leading-snug group-hover:text-[#008196] transition-colors">
                        {talk.title}
                      </h3>

                      {/* Speaker Badge */}
                      <div className="mt-4 flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                        {SPEAKER_IMAGES[talk.speakerInitials] ? (
                          <img
                            src={SPEAKER_IMAGES[talk.speakerInitials]}
                            alt={talk.speaker}
                            className="w-10 h-10 rounded-xl object-cover border border-slate-200 shrink-0 shadow-xs"
                          />
                        ) : (
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center font-heading font-black text-xs text-white shrink-0 shadow-xs"
                            style={{ background: talk.hue }}
                          >
                            {talk.speakerInitials}
                          </div>
                        )}
                        <div>
                          <div className="text-xs font-black text-slate-900 leading-tight">{talk.speaker}</div>
                          <div className="text-[11px] text-slate-500 leading-tight mt-0.5">{talk.speakerTitle}</div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="mt-4 text-xs text-slate-600 leading-relaxed">
                        {talk.body}
                      </p>

                      {/* Key Takeaways List */}
                      <div className="mt-4 pt-3 border-t border-slate-100">
                        <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-2">
                          Key Takeaways
                        </div>
                        <ul className="space-y-1.5 text-xs text-slate-700">
                          {talk.takeaways.map((tk) => (
                            <li key={tk} className="flex items-start gap-2">
                              <span className="text-emerald-500 font-bold shrink-0">✓</span>
                              <span className="leading-tight">{tk}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Card Single CTA Button (Request Replay & Workbook) */}
                  <div className="px-7 py-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-400">{talk.duration}</span>
                    <button
                      type="button"
                      onClick={() => handleOpenModal(talk)}
                      className="px-5 py-2.5 bg-[#008196] hover:bg-[#04aac4] text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center gap-2 group-hover:shadow-lg"
                    >
                      <span>Request Replay &amp; Workbook</span>
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── SECTION 3: WHY A3CEND KEYNOTES ── */}
      <section className="bg-slate-50/80 py-20 px-6 md:px-12 border-t border-slate-200">
        <div className="max-w-[1340px] mx-auto">
          <div className="max-w-[64ch] mb-12">
            <div className="a3-eyebrow text-[#008196]">Why A3CEND</div>
            <h2 className="mt-2.5 text-3xl sm:text-4xl font-heading font-black text-ink-900 leading-tight">
              Actionable frameworks, not another webinar.
            </h2>
            <p className="mt-3 text-slate-600 text-base leading-relaxed">
              We deliver frameworks backed by research and real-world experience — built with senior practitioners, measured with participants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {WHY_A3CEND.map((w) => (
              <div key={w.n} className="bg-white rounded-[28px] p-8 border border-slate-200 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs font-bold text-[#008196] tracking-widest">{w.n}</div>
                  <h3 className="mt-3 text-xl font-heading font-black text-ink-900">{w.title}</h3>
                  <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">{w.body}</p>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-100">
                  <div className="font-heading font-black text-4xl text-ink-900">{w.stat}</div>
                  <div className="mt-1 text-xs font-semibold text-slate-500 leading-snug max-w-[26ch]">{w.statLabel}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACCESS REQUEST MODAL (SINGLE UNIFIED FORM) ── */}
      {selectedTalkModal && (
        <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white text-ink-900 rounded-3xl p-6 sm:p-8 max-w-[620px] w-full shadow-2xl relative border border-slate-200">
            <button
              type="button"
              onClick={() => setSelectedTalkModal(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 text-slate-600 font-bold flex items-center justify-center hover:bg-slate-200 transition-colors z-10"
            >
              ✕
            </button>

            {requestSuccess ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-3xl font-bold mx-auto">
                  ✓
                </div>
                <h3 className="font-heading font-black text-2xl text-ink-900">
                  Access Granted!
                </h3>
                <p className="text-xs text-slate-600 max-w-[42ch] mx-auto leading-relaxed">
                  We've emailed the full video recording link and session workbook PDF for <strong>"{selectedTalkModal.title}"</strong> to <strong>{requestEmail}</strong>.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => setSelectedTalkModal(null)}
                    className="a3-btn a3-btn-coral px-8 py-3 text-xs font-bold"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="font-mono text-xs font-bold text-[#008196] uppercase tracking-widest mb-1">
                  Request Replay &amp; Session Workbook
                </div>
                <h3 className="font-heading font-black text-xl text-ink-900 leading-tight">
                  {selectedTalkModal.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Delivered by {selectedTalkModal.speaker} ({selectedTalkModal.speakerTitle}) · {selectedTalkModal.duration}
                </p>

                <div className="mt-4 p-3 bg-slate-50 rounded-2xl border border-slate-200/80 text-xs text-slate-600">
                  Fill in your work details below to receive instant access to the full recorded talk and companion workbook PDF.
                </div>

                <form onSubmit={handleModalSubmit} className="mt-5 space-y-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={requestName}
                      onChange={(e) => setRequestName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#008196]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={requestEmail}
                      onChange={(e) => setRequestEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#008196]"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedTalkModal(null)}
                      className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-xl bg-[#008196] hover:bg-[#04aac4] text-white text-xs font-bold shadow-md transition-all"
                    >
                      Get Replay &amp; Workbook →
                    </button>
                  </div>
                </form>
              </div>
            )}

          </div>
        </div>
      )}

      {/* ── BOTTOM CTA BANNER ── */}
      <BottomCtaBanner
        eyebrow="BRING IT TO YOUR TEAM"
        heading="Want a PowerTalk for your team?"
        subheading="Join our L&D community and we'll set up a keynote lecture by a senior practitioner on leadership, collaboration, strategy, or organizational change — for your organisation."
        primaryCtaText="Get in touch →"
        primaryCtaLink="/contact"
        secondaryCtaText="Browse the archive"
        secondaryCtaLink="/powertalks#archive-grid"
      />

    </div>
  );
};
