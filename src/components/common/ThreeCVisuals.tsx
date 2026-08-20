import React from 'react';

/**
 * 3C PHILOSOPHY CUSTOM VISUAL HEADERS
 * Custom designed React/SVG illustrations built to fit the 200px card headers perfectly
 * without awkward image cropping or browser chrome overlap.
 */

export const ContentVisualHeader: React.FC = () => {
  return (
    <div className="w-full h-full relative overflow-hidden bg-gradient-to-br from-[#d9f5f9] via-[#e8f8fa] to-[#cbeff4] flex items-center justify-center p-4">
      {/* Soft Ambient Radial Blur Backgrounds */}
      <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-[#04aac4]/20 blur-xl pointer-events-none" />
      <div className="absolute -bottom-8 -right-6 w-36 h-36 rounded-full bg-[#008196]/20 blur-xl pointer-events-none" />

      {/* Main E-Learning Slide Card */}
      <div className="relative w-full max-w-[240px] h-[136px] bg-white rounded-2xl shadow-xl border border-[#008196]/20 p-3.5 flex flex-col justify-between transform -rotate-1 transition-transform group-hover:scale-105 duration-300">
        {/* Top Header Row inside Card */}
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#008196]" />
            <span className="font-heading font-extrabold text-[11px] text-ink-900">Module 4: Machine Learning</span>
          </div>
          <span className="px-2 py-0.5 bg-[#e3f5f8] text-[#008196] font-bold text-[9px] rounded-full uppercase">
            e-Learning
          </span>
        </div>

        {/* Content Body Layout */}
        <div className="grid grid-cols-[1fr_75px] gap-2 py-1.5 items-center">
          <div className="space-y-1.5">
            <div className="h-2 w-full bg-[#008196]/25 rounded-full" />
            <div className="h-1.5 w-4/5 bg-slate-200 rounded-full" />
            <div className="h-1.5 w-3/5 bg-slate-200 rounded-full" />
          </div>
          {/* Mini Presenter Video Box */}
          <div className="w-[75px] h-[48px] bg-gradient-to-br from-[#003c46] to-[#006070] rounded-lg relative overflow-hidden flex items-center justify-center border border-[#04aac4]/30 shadow-inner">
            <div className="w-4 h-4 rounded-full bg-[#ff4081] flex items-center justify-center shadow-sm">
              <svg className="w-2.5 h-2.5 text-white fill-current translate-x-[0.5px]" viewBox="0 0 24 24">
                <polygon points="5,3 19,12 5,21" />
              </svg>
            </div>
            <span className="absolute bottom-1 right-1 bg-black/60 text-white text-[7px] font-mono px-1 rounded">
              02:14
            </span>
          </div>
        </div>

        {/* Bottom Format Badges */}
        <div className="flex items-center gap-1.5 pt-1.5 border-t border-slate-100">
          <span className="px-2 py-0.5 bg-slate-100 text-slate-600 font-semibold text-[8px] rounded-md">📄 Slides</span>
          <span className="px-2 py-0.5 bg-slate-100 text-slate-600 font-semibold text-[8px] rounded-md">🎬 Video</span>
          <span className="px-2 py-0.5 bg-[#e3f5f8] text-[#008196] font-bold text-[8px] rounded-md">✓ Quiz</span>
        </div>
      </div>

      {/* Floating Side Format Pill */}
      <div className="absolute right-3 top-5 bg-white/95 backdrop-blur-md border border-[#008196]/20 px-3 py-1.5 rounded-xl shadow-md flex items-center gap-2 animate-floatSm pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-[#04aac4] animate-pulse" />
        <span className="font-heading font-extrabold text-[10px] text-[#008196]">Multi-Format Output</span>
      </div>
    </div>
  );
};

export const ContextVisualHeader: React.FC = () => {
  return (
    <div className="w-full h-full relative overflow-hidden bg-gradient-to-br from-[#d9f5f9] via-[#e8f8fa] to-[#cbeff4] flex items-center justify-center p-4">
      {/* Soft Ambient Radial Blur Backgrounds */}
      <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-[#04aac4]/20 blur-xl pointer-events-none" />
      <div className="absolute -bottom-8 -left-6 w-36 h-36 rounded-full bg-[#008196]/20 blur-xl pointer-events-none" />

      {/* Main Workplace Nudge Micro-Cards Layout */}
      <div className="relative w-full max-w-[245px] h-[136px] flex gap-2.5 items-center transition-transform group-hover:scale-105 duration-300">
        {/* Card 1: Daily Nudge */}
        <div className="flex-1 h-full bg-white rounded-2xl shadow-xl border border-[#008196]/20 p-3 flex flex-col justify-between -rotate-2">
          <div className="flex items-center justify-between pb-1 border-b border-slate-100">
            <span className="font-heading font-black text-[10px] text-[#008196] uppercase">Daily Nudge</span>
            <span className="w-2 h-2 rounded-full bg-[#04aac4]" />
          </div>
          <div className="space-y-1.5 my-1">
            <div className="font-bold text-[10px] text-ink-900 leading-tight">Active Listening Technique</div>
            <div className="h-1.5 w-full bg-cyan-100 rounded-full" />
            <div className="h-1.5 w-3/4 bg-cyan-100 rounded-full" />
          </div>
          <div className="px-2 py-1 bg-[#e3f5f8] text-[#008196] font-bold text-[8px] rounded-lg text-center">
            2 min reflection →
          </div>
        </div>

        {/* Card 2: Micro-Card */}
        <div className="flex-1 h-full bg-white rounded-2xl shadow-xl border border-[#008196]/20 p-3 flex flex-col justify-between rotate-2">
          <div className="flex items-center justify-between pb-1 border-b border-slate-100">
            <span className="font-heading font-black text-[10px] text-slate-700 uppercase">Micro-Card</span>
            <span className="font-mono text-[8px] font-bold text-coral-500">PEACE Framework</span>
          </div>
          <div className="space-y-1.5 my-1">
            <div className="font-bold text-[10px] text-ink-900 leading-tight">De-escalation SOP</div>
            <div className="h-1.5 w-full bg-slate-200 rounded-full" />
            <div className="h-1.5 w-4/5 bg-slate-200 rounded-full" />
          </div>
          <div className="px-2 py-1 bg-slate-100 text-slate-700 font-bold text-[8px] rounded-lg text-center">
            View SOP →
          </div>
        </div>
      </div>

      {/* Floating Side Badge */}
      <div className="absolute right-3 bottom-3 bg-white/95 backdrop-blur-md border border-[#008196]/20 px-3 py-1 rounded-xl shadow-md flex items-center gap-1.5 pointer-events-none">
        <span className="font-mono font-bold text-[9px] text-[#008196]">Slack &amp; MS Teams Nudges</span>
      </div>
    </div>
  );
};

export const CoachingVisualHeader: React.FC = () => {
  return (
    <div className="w-full h-full relative overflow-hidden bg-gradient-to-br from-[#ffe8ee] via-[#ffeff3] to-[#ffdce5] flex items-center justify-center p-4">
      {/* Soft Ambient Radial Blur Backgrounds */}
      <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-[#ff4081]/20 blur-xl pointer-events-none" />
      <div className="absolute -bottom-8 -right-6 w-36 h-36 rounded-full bg-[#008196]/20 blur-xl pointer-events-none" />

      {/* Simulation & Scorecard Dashboard */}
      <div className="relative w-full max-w-[245px] h-[136px] bg-white rounded-2xl shadow-xl border border-[#ff4081]/25 p-3.5 flex items-center justify-between gap-3 transition-transform group-hover:scale-105 duration-300">
        {/* Left: Signal Bars */}
        <div className="flex flex-col justify-between h-full flex-1">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#ff4081] animate-pulse" />
            <span className="font-heading font-black text-[10px] text-[#ff4081] uppercase">AI Simulation</span>
          </div>

          <div className="space-y-2 my-1">
            <div>
              <div className="flex justify-between text-[8px] font-bold text-slate-600 mb-0.5">
                <span>Empathy</span>
                <span className="text-[#ff4081]">88%</span>
              </div>
              <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-[#ff4081] rounded-full w-[88%]" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-[8px] font-bold text-slate-600 mb-0.5">
                <span>Clarity</span>
                <span className="text-[#008196]">94%</span>
              </div>
              <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-[#008196] rounded-full w-[94%]" />
              </div>
            </div>
          </div>

          <span className="text-[8px] font-bold text-slate-400">Vocal &amp; Facial Signal Analysis</span>
        </div>

        {/* Right: Circular Score Gauge */}
        <div className="w-[84px] h-[84px] rounded-full border-4 border-dashed border-[#ff4081]/40 flex items-center justify-center relative shrink-0">
          <div className="w-[66px] h-[66px] rounded-full bg-white border border-[#ff4081]/30 shadow-md flex flex-col items-center justify-center text-center">
            <span className="font-heading font-black text-sm text-[#ff4081]">92%</span>
            <span className="text-[7px] font-bold text-slate-400 uppercase leading-none">Score</span>
          </div>
          <span className="absolute -bottom-1 -left-2 bg-white border border-[#ff4081]/30 text-[#ff4081] font-bold text-[8px] px-1.5 py-0.5 rounded-full shadow-sm whitespace-nowrap">
            ★ 30+ hrs
          </span>
          <span className="absolute -top-1 -right-2 bg-white border border-[#ff4081]/30 text-[#ff4081] font-bold text-[8px] px-1.5 py-0.5 rounded-full shadow-sm whitespace-nowrap">
            ✓ Ready
          </span>
        </div>
      </div>
    </div>
  );
};
