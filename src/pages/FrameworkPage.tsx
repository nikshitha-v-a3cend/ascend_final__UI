import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeroParticleCanvas } from '@/components/common/HeroParticleCanvas';
import { BottomCtaBanner } from '@/components/common/BottomCtaBanner';

import {
  ENTERPRISE_LIBRARIES,
  SKILL_FRAMEWORK_DATA,
  USER_ANALYTICS_COHORTS,
  CONTENT_ANALYTICS_DATA,
} from '@/data/frameworkData';

export const FrameworkPage: React.FC = () => {
  const [activeLibraryIndex, setActiveLibraryIndex] = useState<number>(0);
  const [userCohort, setUserCohort] = useState<'100' | '500'>('500');
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [showFullTaxonomyModal, setShowFullTaxonomyModal] = useState<boolean>(false);
  const [editToast, setEditToast] = useState<string | null>(null);

  const selectedLibrary = ENTERPRISE_LIBRARIES[activeLibraryIndex];
  const activeDomainName = selectedLibrary.name;
  const currentSkillsData = SKILL_FRAMEWORK_DATA[activeDomainName] || SKILL_FRAMEWORK_DATA['Leadership & 1:1 Coaching'];
  const cohortData = USER_ANALYTICS_COHORTS[userCohort];

  const handleRowClick = (skillName: string) => {
    if (isEditing) {
      setEditToast(`Target level updated for "${skillName}"`);
      setTimeout(() => setEditToast(null), 2500);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/60 text-ink-900 font-sans">
      
      {/* Toast Notification when Editing */}
      {editToast && (
        <div className="fixed top-20 right-6 z-50 bg-[#008196] text-white px-5 py-3 rounded-2xl shadow-2xl font-mono text-xs font-bold animate-bounce flex items-center gap-2">
          <span>✏️</span> {editToast}
        </div>
      )}

      {/* ── SECTION 1: HERO & COMPETENCY MATRIX (#assess) ── */}
      <section id="assess" className="a3-hero-iridescent relative overflow-hidden px-6 md:px-12 pt-8 md:pt-12 pb-16">
        <HeroParticleCanvas canvasId="fw-assess-canvas" count={180} />

        <div className="a3-blob a3-blob--cyan top-[-130px] left-[-90px] w-[500px] h-[500px] opacity-30 animate-floatSlow pointer-events-none" />
        <div className="a3-blob a3-blob--pink bottom-[-120px] right-[-90px] w-[450px] h-[450px] opacity-25 animate-floatRev pointer-events-none" />

        <div className="relative z-10 max-w-[1340px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.18fr] gap-12 items-center">
          
          {/* Hero Left Text Column */}
          <div className="flex flex-col">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#008196]/25 text-[#008196] text-xs font-mono font-bold tracking-widest uppercase w-fit shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#008196] animate-pulse" />
              Assess · universal skill taxonomy
            </div>

            <h1 className="mt-5 font-heading font-black text-4xl sm:text-5xl lg:text-6xl leading-[1.06] tracking-tight text-ink-900">
              One skill framework <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008196] via-[#04aac4] to-[#ff4081]">
                everything reads from.
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg leading-relaxed max-w-[54ch] text-slate-600">
              A unified skill taxonomy evaluating 35 communication skills across 7 frameworks and 200+ dimensions. Scored L1–L4 with 6 GlobeSmart cultural presets and real-time diagnostic heatmaps.
            </p>

            <div className="mt-8 flex flex-wrap gap-3.5 items-center">
              <a href="#measure" className="px-7 py-3.5 text-sm font-bold text-black bg-white border border-[#008196] hover:bg-[#ff4081] hover:text-white hover:border-[#ff4081] rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                See diagnostics →
              </a>
              <Link to="/contact" className="px-7 py-3.5 text-sm font-bold text-black bg-white border border-[#008196] hover:bg-[#008196] hover:text-white hover:border-[#008196] rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                Book a demo
              </Link>
            </div>

            {/* Bottom 3 Stat Pills */}
            <div className="mt-10 pt-8 border-t border-slate-200/80 grid grid-cols-3 gap-3 max-w-[480px]">
              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-slate-200/80 rounded-2xl p-3 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#008196]/10 text-[#008196] flex items-center justify-center font-bold text-lg">
                  📋
                </div>
                <div>
                  <div className="font-heading font-black text-lg leading-none text-ink-900">35</div>
                  <div className="text-[11px] text-slate-500 font-medium mt-0.5">Assessed Skills</div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-slate-200/80 rounded-2xl p-3 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#ff4081]/10 text-[#ff4081] flex items-center justify-center font-bold text-lg">
                  📊
                </div>
                <div>
                  <div className="font-heading font-black text-lg leading-none text-ink-900">200+</div>
                  <div className="text-[11px] text-slate-500 font-medium mt-0.5">Dimensions</div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-slate-200/80 rounded-2xl p-3 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#008196]/10 text-[#008196] flex items-center justify-center font-bold text-lg">
                  🌐
                </div>
                <div>
                  <div className="font-heading font-black text-lg leading-none text-ink-900">6</div>
                  <div className="text-[11px] text-slate-500 font-medium mt-0.5">Cultural Presets</div>
                </div>
              </div>
            </div>

          </div>

          {/* Hero Right Interactive Card: Competency Framework Matrix */}
          <div className="relative">
            
            {/* Floating Level Badge Overlay */}
            <div className="absolute -top-4 -right-2 z-20 bg-white/95 backdrop-blur-md border border-[#008196]/30 p-3.5 rounded-2xl shadow-xl flex items-center gap-3 animate-floatSm">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#008196] to-[#04aac4] flex items-center justify-center font-heading font-black text-sm text-white shadow-sm">
                L4
              </div>
              <div>
                <div className="font-heading font-extrabold text-xs text-ink-900">Mastery Level</div>
                <div className="text-[11px] text-slate-500">Tracked against framework</div>
              </div>
            </div>

            <div className="rounded-[28px] bg-white border border-slate-200/90 shadow-2xl p-6 sm:p-7 overflow-hidden relative">
              
              {/* Card Header */}
              <div className="flex items-center justify-between gap-4 pb-5 border-b border-slate-100 flex-wrap">
                <h3 className="font-heading font-black text-lg text-ink-900">
                  Competency Framework Matrix
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-400">Domain</span>
                  <div className="relative">
                    <select
                      value={activeLibraryIndex}
                      onChange={(e) => setActiveLibraryIndex(Number(e.target.value))}
                      className="appearance-none bg-slate-100 px-3.5 py-1.5 pr-7 rounded-full text-xs font-bold text-ink-900 border border-slate-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#008196]/30"
                    >
                      {ENTERPRISE_LIBRARIES.map((lib, idx) => (
                        <option key={lib.id} value={idx}>
                          {lib.name}
                        </option>
                      ))}
                    </select>
                    <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 pointer-events-none">▼</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsEditing(!isEditing)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold border transition-all ${
                      isEditing
                        ? 'bg-[#ff4081] text-white border-[#ff4081] shadow-sm animate-pulse'
                        : 'bg-[#008196]/10 text-[#008196] border-[#008196]/20 hover:bg-[#008196]/20'
                    }`}
                  >
                    {isEditing ? '✓ Editing Enabled' : '✏️ Editable'}
                  </button>
                </div>
              </div>

              {/* Table Header Columns */}
              <div className="grid grid-cols-[1.2fr_1fr_1fr_1.1fr_1fr] gap-2 pt-4 pb-2 px-2 text-center text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                <div className="text-left font-bold text-slate-500">Skill Domain</div>
                <div>
                  <div className="text-slate-700 font-extrabold">L1</div>
                  <div className="text-[10px] text-slate-400 lowercase">Baseline</div>
                </div>
                <div>
                  <div className="text-slate-700 font-extrabold">L2</div>
                  <div className="text-[10px] text-slate-400 lowercase">Developing</div>
                </div>
                <div className="bg-[#eef9fb] text-[#008196] py-1 rounded-t-lg font-black border-t-2 border-[#008196]">
                  <div>L3</div>
                  <div className="text-[10px] text-[#008196] lowercase">Proficient</div>
                </div>
                <div>
                  <div className="text-slate-700 font-extrabold">L4</div>
                  <div className="text-[10px] text-slate-400 lowercase">Mastery</div>
                </div>
              </div>

              {/* Skill Groups & Rows */}
              <div className="divide-y divide-slate-100">
                {currentSkillsData.map((group, idx) => {
                  const icons = ['💬', '🔥', '🎯', '⚙️'];
                  return (
                    <div key={group.category} className="py-3">
                      <div className="flex items-center gap-1.5 text-[11px] font-mono font-extrabold uppercase tracking-widest text-[#008196] mb-2 px-2">
                        <span>{icons[idx % icons.length]}</span>
                        <span>{group.category}</span>
                      </div>
                      <div className="space-y-2">
                        {group.skills.map((sk) => (
                          <div
                            key={sk.name}
                            onClick={() => handleRowClick(sk.name)}
                            className={`grid grid-cols-[1.2fr_1fr_1fr_1.1fr_1fr] gap-2 items-center px-2 py-1.5 rounded-xl transition-colors ${
                              isEditing ? 'hover:bg-[#008196]/10 cursor-pointer border border-dashed border-[#008196]/30' : 'hover:bg-slate-50'
                            }`}
                          >
                            <span className="text-xs font-semibold text-slate-700 leading-tight">
                              {sk.name}
                            </span>

                            {/* L1 bar */}
                            <div className="flex justify-center">
                              <div className="w-10 h-2.5 rounded-full bg-slate-100" />
                            </div>

                            {/* L2 bar */}
                            <div className="flex justify-center">
                              <div className="w-10 h-2.5 rounded-full bg-slate-100" />
                            </div>

                            {/* L3 badge */}
                            <div className="flex justify-center bg-[#eef9fb]/70 py-1">
                              <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold shadow-xs whitespace-nowrap ${
                                sk.isL4 ? 'bg-slate-100 text-slate-400' : 'bg-[#008196] text-white'
                              }`}>
                                L3 Proficient
                              </span>
                            </div>

                            {/* L4 badge */}
                            <div className="flex justify-center">
                              {sk.isL4 ? (
                                <span className="px-2.5 py-1 rounded-md bg-emerald-600 text-white text-[10px] font-bold shadow-xs whitespace-nowrap">
                                  L4 Mastery
                                </span>
                              ) : (
                                <div className="w-10 h-2.5 rounded-full bg-slate-100" />
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Table Footer */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500 px-2">
                <span><strong className="text-slate-700 font-bold">Levels:</strong> L1 · L2 · <span className="text-[#008196] font-bold">L3 Proficient</span> · L4</span>
                <button
                  type="button"
                  onClick={() => setShowFullTaxonomyModal(true)}
                  className="text-[11px] text-[#008196] font-bold hover:underline"
                >
                  Full taxonomy matrix →
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION 2: INTERACTIVE ENTERPRISE CAPABILITY WORKSPACE (REBUILT FOR A3CEND) ── */}
      <section className="bg-white py-16 px-6 md:px-12 border-t border-slate-200">
        <div className="max-w-[1340px] mx-auto">
          
          <div className="bg-white rounded-[28px] border border-slate-200/90 shadow-2xl p-7 sm:p-9">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
              
              {/* Left Side: Start from a library | or build custom */}
              <div className="pr-0 lg:pr-10 space-y-6">
                <div>
                  <div className="font-mono text-xs font-bold tracking-widest text-[#008196] uppercase mb-1">
                    Pre-Built Enterprise Taxonomy
                  </div>
                  <h3 className="font-heading font-black text-2xl text-ink-900 leading-tight">
                    Start from a library <span className="text-ink-900 font-black">| or build custom</span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">Select a capability domain to inspect turn-by-turn micro-assessment baselines.</p>
                </div>

                {/* 5 Enterprise Library Selection Cards */}
                <div className="space-y-3">
                  {ENTERPRISE_LIBRARIES.map((lib, idx) => {
                    const isSelected = activeLibraryIndex === idx;
                    return (
                      <button
                        key={lib.id}
                        type="button"
                        onClick={() => setActiveLibraryIndex(idx)}
                        className={`w-full rounded-2xl p-4 text-left border transition-all duration-300 flex items-center justify-between gap-4 group ${
                          isSelected
                            ? 'bg-gradient-to-r from-white via-slate-50 to-white border-[#008196] shadow-md ring-2 ring-[#008196]/15 translate-x-1'
                            : 'bg-slate-50/60 border-slate-200/80 hover:border-slate-300 hover:bg-white shadow-2xs'
                        }`}
                      >
                        <div className="flex items-center gap-3.5">
                          <div className={`w-11 h-11 rounded-2xl ${lib.iconBg} border flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform`}>
                            {lib.iconType === 'people' && (
                              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                                <path d="M18 11c1.66 0 2.99-1.34 2.99-3S19.66 5 18 5c-.32 0-.63.05-.91.14 1.15.89 1.91 2.26 1.91 3.86s-.76 2.97-1.91 3.86c.28.09.59.14.91.14zm0 3c-1.07 0-2.31.25-3.41.74 1.41.97 2.41 2.27 2.41 3.86v1.4h5v-2c0-2.21-3.58-4-4-4z" opacity="0.6" />
                              </svg>
                            )}
                            {lib.iconType === 'headset' && (
                              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 1a9 9 0 0 0-9 9v7c0 1.66 1.34 3 3 3h3v-8H6v-2c0-3.31 2.69-6 6-6s6 2.69 6 6v2h-3v8h3c1.66 0 3-1.34 3-3v-7a9 9 0 0 0-9-9z"/>
                              </svg>
                            )}
                            {lib.iconType === 'shield' && (
                              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
                              </svg>
                            )}
                            {lib.iconType === 'gear' && (
                              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
                              </svg>
                            )}
                            {lib.iconType === 'monitor' && (
                              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20 3H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h6l-2 3v1h8v-1l-2-3h6c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12H4V5h16v10z"/>
                              </svg>
                            )}
                          </div>
                          <div>
                            <div className={`text-sm font-extrabold leading-tight ${isSelected ? 'text-[#008196]' : 'text-slate-800'}`}>
                              {lib.name}
                            </div>
                            <div className="text-[11px] text-slate-500 font-medium mt-0.5 leading-snug">
                              {lib.subtitle}
                            </div>
                          </div>
                        </div>

                        <span className={`text-xs font-mono font-bold shrink-0 transition-opacity ${isSelected ? 'text-[#008196] opacity-100' : 'text-slate-400 opacity-0 group-hover:opacity-100'}`}>
                          {isSelected ? 'Active →' : 'Select'}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right Side: Linked AI Micro-Assessments */}
              <div className="pt-8 lg:pt-0 pl-0 lg:pl-10 space-y-6 flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs font-bold tracking-widest text-[#ff4081] uppercase mb-1">
                    Automated Signal Resolution
                  </div>
                  <h3 className="font-heading font-black text-2xl text-ink-900 leading-tight">
                    Linked micro-assessments <span className="text-[#008196]">→</span> baseline each skill
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">Real-time signal scores calculated turn-by-turn during practice sessions.</p>

                  {/* 3 Dynamic Micro-Assessment Cards for Selected Domain */}
                  <div className="mt-5 space-y-3.5">
                    {selectedLibrary.assessments.map((item) => (
                      <div
                        key={item.title}
                        className="bg-slate-50/80 hover:bg-white rounded-2xl p-4 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all duration-200 space-y-2"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <span className="px-2.5 py-0.5 rounded-full bg-[#008196]/10 text-[#008196] text-[10px] font-mono font-bold border border-[#008196]/20 uppercase">
                            {item.type}
                          </span>
                          <span className="font-mono text-xs font-black px-3 py-1 rounded-xl bg-white border border-slate-200 text-[#008196] shadow-xs">
                            {item.score}
                          </span>
                        </div>

                        <div>
                          <h4 className="text-xs font-black text-slate-900 leading-tight">
                            {item.title}
                          </h4>
                          <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>

                        <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-[10px] font-mono text-slate-500">
                          <span className="text-emerald-600 font-bold">✓ {item.badge}</span>
                          <span>{item.dimensions}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 leading-relaxed flex items-center justify-between font-mono">
                  <span>Updates taxonomy bars automatically</span>
                  <span className="text-[#008196] font-bold">Turn-by-Turn Scored</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION 3: MEASURE & ANALYTICS DASHBOARD (#measure) ── */}
      <section id="measure" className="bg-slate-50/80 py-20 px-6 md:px-12 border-t border-slate-200">
        <div className="max-w-[1340px] mx-auto">
          
          {/* Section Header with Cohort Switcher */}
          <div className="flex items-end justify-between gap-6 flex-wrap pb-8 border-b border-slate-200">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff4081]/10 text-[#ff4081] text-xs font-mono font-bold tracking-widest uppercase mb-3 border border-[#ff4081]/20">
                Measure
              </div>
              <h2 className="text-3xl sm:text-4xl font-heading font-black text-ink-900 leading-tight">
                One dashboard — readiness and content output.
              </h2>
            </div>

            {/* Cohort Switcher Pills */}
            <div className="flex gap-1.5 bg-slate-200/80 border border-slate-300 p-1 rounded-full shadow-inner">
              <button
                type="button"
                onClick={() => setUserCohort('100')}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                  userCohort === '100'
                    ? 'bg-[#008196] text-white shadow-md'
                    : 'text-slate-600 hover:text-ink-900'
                }`}
              >
                100 users
              </button>
              <button
                type="button"
                onClick={() => setUserCohort('500')}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                  userCohort === '500'
                    ? 'bg-[#008196] text-white shadow-md'
                    : 'text-slate-600 hover:text-ink-900'
                }`}
              >
                500 users
              </button>
            </div>
          </div>

          {/* 2-Column Analytics Panels */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Panel 1: User Analytics */}
            <div className="bg-white rounded-[28px] p-8 border border-slate-200 shadow-xl flex flex-col justify-between">
              <div>
                <div className="font-mono text-xs font-bold tracking-widest text-[#008196] uppercase mb-2">
                  {cohortData.cohortTitle}
                </div>
                <h3 className="font-heading font-black text-2xl text-ink-900 mb-6">
                  {cohortData.compositeScore} <span className="text-sm font-semibold text-slate-500">of 4 · L3 composite readiness</span>
                </h3>

                {/* Role Breakdown Bars */}
                <div className="space-y-3.5 mb-8">
                  {cohortData.roles.map((r) => (
                    <div key={r.role} className="space-y-1">
                      <div className="flex justify-between text-xs font-bold">
                        <span className="text-slate-700">{r.role}</span>
                        <span className="font-mono text-[#008196]">{r.score}</span>
                      </div>
                      <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#008196] to-[#04aac4] rounded-full transition-all duration-500"
                          style={{ width: r.width }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* 4 Stat Boxes Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-100">
                  {cohortData.stats.map((st) => (
                    <div key={st.k} className="bg-slate-50 rounded-2xl p-3 border border-slate-200/80 text-center">
                      <div className="font-heading font-black text-xl text-ink-900">{st.v}</div>
                      <div className="text-[11px] font-bold text-slate-500 mt-0.5">{st.k}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Panel 2: Content Analytics */}
            <div className="bg-white rounded-[28px] p-8 border border-slate-200 shadow-xl flex flex-col justify-between">
              <div>
                <div className="font-mono text-xs font-bold tracking-widest text-[#ff4081] uppercase mb-2">
                  Content analytics · last 90 days
                </div>
                <h3 className="font-heading font-black text-2xl text-ink-900 mb-6">
                  Production Velocity &amp; Format Output
                </h3>

                {/* 4 Key Stat Cards */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {CONTENT_ANALYTICS_DATA.cards.map((card) => (
                    <div key={card.label} className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80">
                      <div className="flex items-baseline justify-between">
                        <span className="font-heading font-black text-2xl text-ink-900">{card.value}</span>
                        <span className={`font-mono text-xs font-bold ${card.deltaColor}`}>{card.delta}</span>
                      </div>
                      <div className="text-xs font-bold text-slate-500 mt-1">{card.label}</div>
                    </div>
                  ))}
                </div>

                {/* Modules by Format List */}
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80">
                  <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
                    Modules by format
                  </div>
                  <div className="space-y-2.5">
                    {CONTENT_ANALYTICS_DATA.formats.map((fmt) => (
                      <div key={fmt.name} className="flex items-center gap-3 text-xs">
                        <span className="text-slate-600 font-semibold w-28 shrink-0">{fmt.name}</span>
                        <div className="flex-1 h-2 bg-slate-200/80 rounded-full overflow-hidden">
                          <div className="h-full bg-[#008196] rounded-full" style={{ width: fmt.width }} />
                        </div>
                        <span className="font-mono font-bold text-slate-800 w-6 text-right">{fmt.n}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── FULL TAXONOMY INSPECTION MODAL ── */}
      {showFullTaxonomyModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 max-w-[820px] w-full max-h-[85vh] overflow-y-auto shadow-2xl relative border border-slate-200">
            <button
              type="button"
              onClick={() => setShowFullTaxonomyModal(false)}
              className="absolute top-6 right-6 w-8 h-8 rounded-full bg-slate-100 text-slate-600 font-bold flex items-center justify-center hover:bg-slate-200"
            >
              ✕
            </button>
            
            <div className="font-mono text-xs font-bold text-[#008196] uppercase tracking-widest mb-1">
              Full Skill Taxonomy Inspection
            </div>
            <h3 className="font-heading font-black text-2xl text-ink-900 mb-2">
              35 Assessed Communication Competencies
            </h3>
            <p className="text-sm text-slate-600 mb-6">
              All 35 competencies evaluated across 7 frameworks and 200+ dimensions with 6 GlobeSmart cultural presets.
            </p>

            <div className="space-y-4">
              {Object.keys(SKILL_FRAMEWORK_DATA).map((domainKey) => (
                <div key={domainKey} className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80">
                  <div className="font-bold text-sm text-[#008196] mb-2">{domainKey}</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    {SKILL_FRAMEWORK_DATA[domainKey].flatMap((grp) =>
                      grp.skills.map((sk) => (
                        <div key={sk.name} className="bg-white p-2.5 rounded-xl border border-slate-200 flex items-center justify-between">
                          <span className="font-medium text-slate-800">{sk.name}</span>
                          <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded-md ${
                            sk.isL4 ? 'bg-emerald-100 text-emerald-700' : 'bg-[#008196]/15 text-[#008196]'
                          }`}>
                            {sk.level === 'L4' ? 'L4 Mastery' : 'L3 Proficient'}
                          </span>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 flex justify-end">
              <button
                type="button"
                onClick={() => setShowFullTaxonomyModal(false)}
                className="a3-btn a3-btn-coral px-6 py-2.5 text-xs font-bold"
              >
                Close Inspection
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── BOTTOM CTA BANNER ── */}
      <BottomCtaBanner
        eyebrow="UNIVERSAL SKILL TAXONOMY"
        heading="One skill framework everything reads from."
        subheading="Evaluate your team's readiness across 35 communication competencies and 200+ dimensions."
        primaryCtaText="Book a demo →"
        primaryCtaLink="/contact"
        secondaryCtaText="Explore REHEARSE"
        secondaryCtaLink="/rehearse"
      />

    </div>
  );
};
