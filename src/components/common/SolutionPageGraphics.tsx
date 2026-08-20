import React from 'react';
import logoImg from '@/assets/a3cend-logo-crop.png';

{/* 1. LEADERSHIP SOLUTION GRAPHIC (EXACT USER SCREENSHOT CARD) */ }
export const LeadershipSolutionGraphic: React.FC = () => {
  return (
    <div className="rounded-[28px] border border-slate-200/90 shadow-2xl overflow-hidden bg-gradient-to-b from-[#fff5f8] via-white to-[#f0f9fa] p-5 sm:p-6 font-sans">

      {/* Top Browser / App Window Header Bar */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-200/70 mb-5">
        <div className="flex items-center gap-3">
          {/* Red, Yellow, Green Window Dots */}
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>

          <div className="h-4 w-px bg-slate-200 mx-1" />

          {/* Logo & Subtitle */}
          <div className="flex items-center gap-2">
            <img src={logoImg} alt="A3CEND" className="h-5 w-auto block object-contain" />
            <span className="font-mono text-xs font-bold text-[#ff4081] tracking-wider uppercase">
              REHEARSE · AI SIMULATION
            </span>
          </div>
        </div>

        {/* Live Session Pill */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff4081]/10 text-[#ff4081] border border-[#ff4081]/25 text-xs font-bold font-mono">
          <span className="w-2 h-2 rounded-full bg-[#ff4081] animate-pulse" />
          <span>LIVE SESSION</span>
        </div>
      </div>

      {/* Main 2-Column Workbench Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">

        {/* Left Container: Deep Teal Simulation Box */}
        <div className="bg-[#004d56] text-white rounded-2xl p-5 flex flex-col justify-between min-h-[310px] relative overflow-hidden shadow-lg border border-teal-800/80">

          {/* Top Pill & Timer */}
          <div className="flex items-center justify-between z-10">
            <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-teal-100 text-[11px] font-mono font-bold tracking-wider border border-white/20 uppercase">
              AI COACH · SARAH
            </span>
            <span className="font-mono text-xs font-bold text-teal-200">
              03:45
            </span>
          </div>

          {/* Center Avatar & Audio Bars */}
          <div className="py-4 text-center z-10 flex flex-col items-center justify-center">
            <div className="relative mb-3">
              <div className="w-20 h-20 rounded-full border-2 border-[#ff4081] bg-slate-950 flex items-center justify-center text-white font-heading font-black text-2xl shadow-xl">
                SJ
              </div>
              <span className="absolute bottom-0 right-0 w-4 h-4 bg-emerald-400 rounded-full border-2 border-[#004d56]" />
            </div>

            {/* Audio Waveform Equalizer Bars */}
            <div className="flex items-center justify-center gap-1.5 h-6">
              <span className="w-1.5 h-3 bg-[#04aac4] rounded-full animate-pulse" />
              <span className="w-1.5 h-6 bg-[#ff4081] rounded-full animate-pulse delay-75" />
              <span className="w-1.5 h-2.5 bg-[#04aac4] rounded-full animate-pulse delay-150" />
              <span className="w-1.5 h-5 bg-[#ff4081] rounded-full animate-pulse delay-100" />
              <span className="w-1.5 h-3 bg-[#04aac4] rounded-full animate-pulse" />
            </div>
          </div>

          {/* Bottom Transcript Dialogue Bubble */}
          <div className="bg-[#00373e] border border-teal-700/60 rounded-2xl p-3.5 text-xs text-white leading-relaxed font-medium z-10 shadow-inner">
            "I understand your perspective. How do you propose we address this timeline?"
          </div>

        </div>

        {/* Right Container: White Diagnostics Panel */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-md flex flex-col justify-between">

          <div>
            {/* Header Row */}
            <div className="flex items-baseline justify-between gap-2 pb-4 border-b border-slate-100 mb-5">
              <div>
                <div className="font-heading font-black text-xs text-slate-900 uppercase tracking-wider">
                  REAL-TIME DIAGNOSTICS
                </div>
              </div>
              <div className="text-right">
                <span className="font-heading font-black text-xl text-[#ff4081]">92%</span>
                <span className="font-heading font-bold text-xs text-[#ff4081] ml-1">Ready</span>
              </div>
            </div>

            {/* 3 Progress Bars */}
            <div className="space-y-4">

              {/* Bar 1: Confidence & Tone */}
              <div>
                <div className="flex justify-between text-xs font-bold mb-1.5">
                  <span className="text-slate-700">Confidence &amp; Tone</span>
                  <span className="font-mono text-[#008196]">92%</span>
                </div>
                <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#008196] rounded-full w-[92%]" />
                </div>
              </div>

              {/* Bar 2: Clarity & Structure */}
              <div>
                <div className="flex justify-between text-xs font-bold mb-1.5">
                  <span className="text-slate-700">Clarity &amp; Structure</span>
                  <span className="font-mono text-[#ff4081]">78%</span>
                </div>
                <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#ff4081] rounded-full w-[78%]" />
                </div>
              </div>

              {/* Bar 3: Empathy & Listening */}
              <div>
                <div className="flex justify-between text-xs font-bold mb-1.5">
                  <span className="text-slate-700">Empathy &amp; Listening</span>
                  <span className="font-mono text-[#008196]">88%</span>
                </div>
                <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#008196] rounded-full w-[88%]" />
                </div>
              </div>

            </div>
          </div>

          {/* Bottom Tinted Scenario Box */}
          <div className="mt-5 p-3.5 rounded-2xl bg-[#fff0f4] border border-[#ff4081]/25 flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff4081] shrink-0" />
            <span className="text-xs font-bold text-slate-800 leading-snug">
              Scenario: Difficult Performance Review
            </span>
          </div>

        </div>

      </div>

    </div>
  );
};

{/* 2. SALES SOLUTION GRAPHIC (UNIQUE CORAL PINK COMMERCIAL DETAILING CARD) */ }
export const SalesSolutionGraphic: React.FC = () => {
  return (
    <div className="rounded-[28px] border border-slate-200/90 shadow-2xl overflow-hidden bg-gradient-to-b from-[#fff0f5] via-white to-[#f5fbfd] p-5 sm:p-6 font-sans">

      {/* Window Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-200/70 mb-5">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>

          <div className="h-4 w-px bg-slate-200 mx-1" />

          <div className="flex items-center gap-2">
            <span className="font-heading font-black text-lg text-[#ff4081] tracking-tight">
              SELLIQ
            </span>
            <span className="font-mono text-xs font-bold text-[#008196] tracking-wider uppercase">
              COMMERCIAL SIMULATOR
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#008196]/10 text-[#008196] border border-[#008196]/25 text-xs font-bold font-mono">
          <span className="w-2 h-2 rounded-full bg-[#008196] animate-pulse" />
          <span>HCP DETAILING ACTIVE</span>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">

        {/* Left Container: Dark Navy HCP Buyer Box */}
        <div className="bg-[#001f26] text-white rounded-2xl p-5 flex flex-col justify-between min-h-[310px] relative overflow-hidden shadow-lg border border-slate-800">

          <div className="flex items-center justify-between z-10">
            <span className="px-3 py-1 rounded-full bg-[#ff4081]/20 text-[#ff79a8] text-[11px] font-mono font-bold tracking-wider border border-[#ff4081]/40 uppercase">
              AI BUYER · DR. THORNE
            </span>
            <span className="font-mono text-xs font-bold text-slate-300">
              04:12
            </span>
          </div>

          <div className="py-4 text-center z-10 flex flex-col items-center justify-center">
            <div className="relative mb-3">
              <div className="w-20 h-20 rounded-full border-2 border-[#008196] bg-slate-900 flex items-center justify-center text-white font-heading font-black text-2xl shadow-xl">
                AT
              </div>
              <span className="absolute bottom-0 right-0 w-4 h-4 bg-amber-400 rounded-full border-2 border-[#001f26]" />
            </div>

            <div className="flex items-center justify-center gap-1.5 h-6">
              <span className="w-1.5 h-4 bg-[#ff4081] rounded-full animate-pulse" />
              <span className="w-1.5 h-2.5 bg-[#04aac4] rounded-full animate-pulse delay-75" />
              <span className="w-1.5 h-6 bg-[#ff4081] rounded-full animate-pulse delay-150" />
              <span className="w-1.5 h-3 bg-[#04aac4] rounded-full animate-pulse delay-100" />
              <span className="w-1.5 h-5 bg-[#ff4081] rounded-full animate-pulse" />
            </div>
          </div>

          <div className="bg-slate-900/90 border border-slate-700/60 rounded-2xl p-3.5 text-xs text-slate-200 leading-relaxed font-medium z-10 shadow-inner">
            "What is the 3-year overall survival rate compared to the current standard of care?"
          </div>

        </div>

        {/* Right Container: Sales Diagnostics Panel */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-md flex flex-col justify-between">

          <div>
            <div className="flex items-baseline justify-between gap-2 pb-4 border-b border-slate-100 mb-5">
              <div>
                <div className="font-heading font-black text-xs text-slate-900 uppercase tracking-wider">
                  COMMERCIAL EXECUTION
                </div>
              </div>
              <div className="text-right">
                <span className="font-heading font-black text-xl text-[#008196]">3.6</span>
                <span className="font-heading font-bold text-xs text-[#008196] ml-1">/ 4.0</span>
              </div>
            </div>

            <div className="space-y-4">

              <div>
                <div className="flex justify-between text-xs font-bold mb-1.5">
                  <span className="text-slate-700">Clinical Data Efficacy Framing</span>
                  <span className="font-mono text-[#ff4081]">95%</span>
                </div>
                <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#ff4081] rounded-full w-[95%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold mb-1.5">
                  <span className="text-slate-700">Objection Handling &amp; ROI</span>
                  <span className="font-mono text-[#008196]">89%</span>
                </div>
                <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#008196] rounded-full w-[89%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold mb-1.5">
                  <span className="text-slate-700">Closing Commitment Signal</span>
                  <span className="font-mono text-[#ff4081]">91%</span>
                </div>
                <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#ff4081] rounded-full w-[91%]" />
                </div>
              </div>

            </div>
          </div>

          <div className="mt-5 p-3.5 rounded-2xl bg-[#e6f4f6] border border-[#008196]/25 flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#008196] shrink-0" />
            <span className="text-xs font-bold text-slate-800 leading-snug">
              Scenario: Physician Detailing &amp; Contract Closing
            </span>
          </div>

        </div>

      </div>

    </div>
  );
};

{/* 3. ONBOARDING SOLUTION GRAPHIC (UNIQUE TEAL RAMP VELOCITY CARD) */ }
export const OnboardingSolutionGraphic: React.FC = () => {
  return (
    <div className="rounded-[28px] border border-slate-200/90 shadow-2xl overflow-hidden bg-gradient-to-b from-[#eaf6f8] via-white to-[#f0f9fa] p-5 sm:p-6 font-sans">

      {/* Window Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-200/70 mb-5">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>

          <div className="h-4 w-px bg-slate-200 mx-1" />

          <div className="flex items-center gap-2">
            <img src={logoImg} alt="A3CEND" className="h-5 w-auto block object-contain" />
            <span className="font-mono text-xs font-bold text-[#008196] tracking-wider uppercase">
              VELOCITY ENGINE
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-300 text-xs font-bold font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>RAMP: 14 DAYS</span>
        </div>
      </div>

      {/* Main 3-Stage Progress Layout */}
      <div className="space-y-3.5">

        {/* Stage 1 */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-sm flex items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#008196]/15 text-[#008196] font-mono font-bold text-xs flex items-center justify-center shrink-0">
              30D
            </div>
            <div>
              <div className="text-xs font-extrabold text-slate-900">Culture &amp; Mission Articulation</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Automated Baseline Diagnostic</div>
            </div>
          </div>
          <span className="font-mono text-xs font-black text-emerald-600 bg-emerald-50 px-3 py-1 rounded-xl border border-emerald-200">
            96% Pass · Verified
          </span>
        </div>

        {/* Stage 2 */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-sm flex items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#ff4081]/15 text-[#ff4081] font-mono font-bold text-xs flex items-center justify-center shrink-0">
              60D
            </div>
            <div>
              <div className="text-xs font-extrabold text-slate-900">SOP &amp; Operational Tool Navigation</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Simulated Workflow Practice</div>
            </div>
          </div>
          <span className="font-mono text-xs font-black text-[#008196] bg-[#008196]/10 px-3 py-1 rounded-xl border border-[#008196]/20">
            90% Pass · Verified
          </span>
        </div>

        {/* Stage 3 */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-sm flex items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 font-mono font-bold text-xs flex items-center justify-center shrink-0">
              90D
            </div>
            <div>
              <div className="text-xs font-extrabold text-slate-900">First Live Customer Roleplay Milestone</div>
              <div className="text-[11px] text-slate-500 mt-0.5">AI Buyer Practice Simulation</div>
            </div>
          </div>
          <span className="font-mono text-xs font-black text-emerald-600 bg-emerald-50 px-3 py-1 rounded-xl border border-emerald-200">
            88% Pass · Ready
          </span>
        </div>

        {/* Timeline Benchmark comparison box */}
        <div className="mt-4 p-4 rounded-2xl bg-[#e6f4f6] border border-[#008196]/25 flex items-center justify-between text-xs font-bold text-slate-800">
          <span>Time-to-Productivity Acceleration</span>
          <span className="font-mono text-[#008196]">14 Days vs 45 Days Benchmark</span>
        </div>

      </div>

    </div>
  );
};

{/* 4. COMPLIANCE & GOVERNANCE SOLUTION GRAPHIC (UNIQUE PINK & TEAL POLICY CARD) */ }
export const ComplianceSolutionGraphic: React.FC = () => {
  return (
    <div className="rounded-[28px] border border-slate-200/90 shadow-2xl overflow-hidden bg-gradient-to-b from-[#fff0f5] via-white to-[#f0f9fa] p-5 sm:p-6 font-sans">

      {/* Window Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-200/70 mb-5">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>

          <div className="h-4 w-px bg-slate-200 mx-1" />

          <div className="flex items-center gap-2">
            <img src={logoImg} alt="A3CEND" className="h-5 w-auto block object-contain" />
            <span className="font-mono text-xs font-bold text-[#008196] tracking-wider uppercase">
              COMPLIANCE &amp; RISK ENGINE
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-300 text-xs font-bold font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>100% AUDIT READY</span>
        </div>
      </div>

      {/* 3 Compliance Protocol Monitor Cards */}
      <div className="space-y-3.5">

        {/* Protocol 1 */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-sm flex items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#ff4081]/15 text-[#ff4081] font-bold text-lg flex items-center justify-center shrink-0 border border-[#ff4081]/30">
              🛡️
            </div>
            <div>
              <div className="text-xs font-extrabold text-slate-900">GDPR &amp; Data Privacy Breach Escalation</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Turn-by-Turn Escalation Protocol Verification</div>
            </div>
          </div>
          <span className="font-mono text-xs font-black text-[#ff4081] bg-[#ff4081]/10 px-3 py-1 rounded-xl border border-[#ff4081]/25">
            L4 Mastery · 3.8
          </span>
        </div>

        {/* Protocol 2 */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-sm flex items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#008196]/15 text-[#008196] font-bold text-lg flex items-center justify-center shrink-0 border border-[#008196]/30">
              ⚖️
            </div>
            <div>
              <div className="text-xs font-extrabold text-slate-900">Anti-Bribery &amp; Ethics Policy Scenario</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Subtle Risk Identification in Vendor Interactions</div>
            </div>
          </div>
          <span className="font-mono text-xs font-black text-[#008196] bg-[#008196]/10 px-3 py-1 rounded-xl border border-[#008196]/20">
            L4 Mastery · 3.5
          </span>
        </div>

        {/* Protocol 3 */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-sm flex items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 font-bold text-lg flex items-center justify-center shrink-0 border border-purple-200">
              📋
            </div>
            <div>
              <div className="text-xs font-extrabold text-slate-900">Whistleblower Complaint Intake Simulation</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Empathetic Objective Intake Adhering to Legal Rules</div>
            </div>
          </div>
          <span className="font-mono text-xs font-black text-emerald-600 bg-emerald-50 px-3 py-1 rounded-xl border border-emerald-200">
            L3 Proficient · 3.2
          </span>
        </div>

        {/* Audit Status Box */}
        <div className="mt-4 p-4 rounded-2xl bg-[#fff0f4] border border-[#ff4081]/25 flex items-center justify-between text-xs font-bold text-slate-800">
          <span>Enterprise Governance &amp; Policy Adherence</span>
          <span className="font-mono text-[#ff4081]">Automated Heatmaps Active</span>
        </div>

      </div>

    </div>
  );
};
