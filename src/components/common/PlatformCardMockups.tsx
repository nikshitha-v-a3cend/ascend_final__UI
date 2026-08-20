import React from 'react';
import logoImg from '@/assets/a3cend-logo-crop.png';

/**
 * NATIVE REACT PLATFORM UI MOCKUPS
 * Beautiful, clean visual representations with the official A3CEND logo neatly integrated into the header bar.
 */

export const ContentOrchestratorMockup: React.FC = () => {
  return (
    <div className="w-full bg-[#f4f8fa] rounded-2xl overflow-hidden border border-brand-600/20 shadow-xl text-left">
      {/* Top Header Bar with Official Logo */}
      <div className="bg-white px-4 py-3 border-b border-slate-200/80 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
          </div>
          <div className="h-4 w-px bg-slate-200" />
          <img src={logoImg} alt="A3CEND" className="h-5 w-auto block object-contain" />
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider hidden sm:inline">
            Content Orchestrator
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 bg-[#e3f5f8] text-[#008196] font-extrabold text-[10px] rounded-full uppercase">
            Super-User Mode
          </span>
        </div>
      </div>

      {/* Main Dashboard Layout */}
      <div className="p-4 sm:p-5 grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-4">
        {/* Left Column: Ingestion */}
        <div className="bg-white rounded-xl p-3.5 border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <span className="font-heading font-black text-xs text-ink-900 uppercase tracking-wide">
              1. Content Ingestion
            </span>
            <span className="w-2 h-2 rounded-full bg-[#008196] animate-pulse" />
          </div>

          <div className="space-y-2">
            <div className="p-2.5 rounded-lg border border-brand-600/20 bg-[#f8fcfd] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-md bg-[#008196]/10 text-[#008196] font-bold text-xs flex items-center justify-center">📄</span>
                <div>
                  <div className="font-bold text-xs text-ink-900">Company SOP Manual</div>
                  <div className="text-[10px] text-slate-500">PDF · 48 pages</div>
                </div>
              </div>
              <span className="px-2 py-0.5 bg-[#008196] text-white font-bold text-[9px] rounded-md">Ingested</span>
            </div>

            <div className="p-2.5 rounded-lg border border-slate-200 bg-slate-50/60 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-md bg-coral-500/10 text-coral-500 font-bold text-xs flex items-center justify-center">📊</span>
                <div>
                  <div className="font-bold text-xs text-ink-900">Product Handbook</div>
                  <div className="text-[10px] text-slate-500">PPTX · 120 slides</div>
                </div>
              </div>
              <span className="px-2 py-0.5 bg-slate-200 text-slate-600 font-bold text-[9px] rounded-md">Processing</span>
            </div>
          </div>

          <div className="pt-2 text-[10px] font-semibold text-slate-400 text-center border-t border-slate-100">
            Single Source of Truth Knowledge Base
          </div>
        </div>

        {/* Right Column: Multi-Format Outputs */}
        <div className="bg-white rounded-xl p-3.5 border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <span className="font-heading font-black text-xs text-[#008196] uppercase tracking-wide">
              2. Multi-Format Outputs
            </span>
            <span className="text-[10px] font-bold text-coral-500">Auto-Branded</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="p-2 rounded-lg border border-brand-600/15 bg-[#f5fbcd]/20 flex flex-col justify-between">
              <div className="font-bold text-[11px] text-ink-900">e-Learning Course</div>
              <div className="mt-1 h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-[#008196] w-[100%]" />
              </div>
              <span className="mt-2 text-[9px] font-extrabold text-[#008196]">Ready to Publish →</span>
            </div>

            <div className="p-2 rounded-lg border border-coral-500/15 bg-coral-50/30 flex flex-col justify-between">
              <div className="font-bold text-[11px] text-ink-900">Micro-Video</div>
              <div className="mt-1 h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-coral-500 w-[85%]" />
              </div>
              <span className="mt-2 text-[9px] font-extrabold text-coral-500">AI Avatar Video →</span>
            </div>

            <div className="p-2 rounded-lg border border-slate-200 bg-slate-50 flex flex-col justify-between">
              <div className="font-bold text-[11px] text-ink-900">Flash Cards</div>
              <div className="mt-1 h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-[#008196] w-[70%]" />
              </div>
              <span className="mt-2 text-[9px] font-bold text-slate-600">Daily Nudges →</span>
            </div>

            <div className="p-2 rounded-lg border border-slate-200 bg-slate-50 flex flex-col justify-between">
              <div className="font-bold text-[11px] text-ink-900">Assessments</div>
              <div className="mt-1 h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-coral-500 w-[90%]" />
              </div>
              <span className="mt-2 text-[9px] font-bold text-slate-600">Quiz Ready →</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const RehearseSimulationMockup: React.FC = () => {
  return (
    <div className="w-full bg-[#fdf8fa] rounded-2xl overflow-hidden border border-coral-500/20 shadow-xl text-left">
      {/* Top Header Bar with Official Logo */}
      <div className="bg-white px-4 py-3 border-b border-slate-200/80 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
          </div>
          <div className="h-4 w-px bg-slate-200" />
          <img src={logoImg} alt="A3CEND" className="h-5 w-auto block object-contain" />
          <span className="text-[11px] font-bold text-coral-500 uppercase tracking-wider hidden sm:inline">
            REHEARSE · AI Simulation
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="a3-live-dot" />
          <span className="font-mono font-extrabold text-[10px] text-coral-500 uppercase">Live Session</span>
        </div>
      </div>

      {/* Main Simulation Layout */}
      <div className="p-4 sm:p-5 grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-4">
        {/* Left Column: AI Roleplay Presenter Avatar */}
        <div className="bg-gradient-to-br from-[#003c46] to-[#005a69] rounded-xl p-4 text-white relative overflow-hidden flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between relative z-10">
            <span className="px-2.5 py-0.5 bg-white/15 backdrop-blur-md rounded-full text-[9px] font-bold tracking-wider uppercase text-cyan-300">
              AI Coach · Sarah
            </span>
            <span className="text-[10px] font-mono text-slate-300">03:45</span>
          </div>

          {/* Avatar Graphic / Waveform */}
          <div className="flex flex-col items-center justify-center my-2 space-y-2 relative z-10">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-coral-500 to-[#ff7ba3] p-0.5 shadow-lg">
              <div className="w-full h-full rounded-full bg-[#002f38] flex items-center justify-center font-heading font-black text-xl text-white">
                SJ
              </div>
            </div>
            {/* Active Voice Waveform */}
            <div className="flex items-center gap-1 h-5">
              <span className="w-1 h-3 bg-cyan-400 rounded-full animate-bounce" />
              <span className="w-1 h-5 bg-[#ff4081] rounded-full animate-bounce delay-100" />
              <span className="w-1 h-2 bg-cyan-400 rounded-full animate-bounce delay-200" />
              <span className="w-1 h-4 bg-[#ff4081] rounded-full animate-bounce delay-150" />
              <span className="w-1 h-3 bg-cyan-400 rounded-full animate-bounce" />
            </div>
          </div>

          <div className="bg-black/30 backdrop-blur-md rounded-lg p-2 text-[10px] text-slate-200 relative z-10">
            &quot;I understand your perspective. How do you propose we address this timeline?&quot;
          </div>
        </div>

        {/* Right Column: Real-time Scoring */}
        <div className="bg-white rounded-xl p-4 border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <span className="font-heading font-black text-xs text-ink-900 uppercase">Real-Time Diagnostics</span>
            <span className="font-heading font-black text-sm text-coral-500">92% Ready</span>
          </div>

          <div className="space-y-2.5">
            <div>
              <div className="flex justify-between text-[11px] font-bold text-slate-700 mb-1">
                <span>Confidence &amp; Tone</span>
                <span className="text-[#008196]">92%</span>
              </div>
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-[#008196] rounded-full w-[92%]" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-[11px] font-bold text-slate-700 mb-1">
                <span>Clarity &amp; Structure</span>
                <span className="text-coral-500">78%</span>
              </div>
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-coral-500 rounded-full w-[78%]" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-[11px] font-bold text-slate-700 mb-1">
                <span>Empathy &amp; Listening</span>
                <span className="text-[#008196]">88%</span>
              </div>
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-[#008196] rounded-full w-[88%]" />
              </div>
            </div>
          </div>

          <div className="p-2 bg-coral-50/60 rounded-lg border border-coral-500/20 text-[10px] font-bold text-coral-600 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-coral-500" />
            <span>Scenario: Difficult Performance Review</span>
          </div>
        </div>
      </div>
    </div>
  );
};
