import React from 'react';
import logoImg from '@/assets/a3cend-logo-crop.png';

/**
 * 1. HERO SECTION CONTENT ORCHESTRATOR GRAPHIC
 * 100% Native React Component.
 * Stacked vertical layout ensures ZERO overlapping, ZERO text squishing, and ZERO button collisions!
 */
export const ContentOrchestratorHeroGraphic: React.FC = () => {
  return (
    <div className="w-full bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-2xl text-left">
      {/* Top Browser Header */}
      <div className="bg-[#002f38] px-4 py-2.5 flex items-center justify-between gap-2 flex-wrap">
        <div className="flex items-center gap-3 min-w-0">
          <div className="bg-white px-2 py-0.5 rounded shadow-2xs border border-slate-200/80 flex items-center shrink-0">
            <img src={logoImg} alt="A3CEND" className="h-3.5 max-w-[80px] w-auto block object-contain" />
          </div>
          <span className="font-mono text-xs text-cyan-300 font-bold leading-snug">
            Content Orchestrator · Super-User Console
          </span>
        </div>
        <span className="px-3 py-1 bg-[#008196] text-white font-extrabold text-[11px] rounded-full uppercase tracking-wider shadow-sm shrink-0 whitespace-nowrap">
          AI Engine Active
        </span>
      </div>

      {/* Main Stacked Dashboard Body */}
      <div className="p-4 sm:p-5 bg-gradient-to-br from-[#f4fcfd] via-white to-[#f0fafc] space-y-4">
        {/* Section 1: Content Ingestion */}
        <div className="bg-white rounded-xl p-4 border border-brand-600/15 shadow-sm space-y-3">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#008196]" />
              <span className="font-heading font-black text-xs text-ink-900 uppercase tracking-wider">
                1. Content Ingestion
              </span>
            </div>
            <span className="text-[11px] font-bold text-[#008196] bg-[#e3f5f8] px-2.5 py-0.5 rounded-full">
              3 Sources Loaded
            </span>
          </div>

          <div className="space-y-2">
            <div className="p-3 rounded-xl border border-brand-600/20 bg-[#f4fcfd] flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-[#008196]/12 text-[#008196] font-bold text-sm flex items-center justify-center shrink-0">
                  📄
                </div>
                <div className="min-w-0">
                  <div className="font-bold text-xs text-ink-900 truncate">Company SOP Manual</div>
                  <div className="text-[10px] text-slate-500">PDF Document · 48 Pages</div>
                </div>
              </div>
              <span className="px-3 py-1 bg-[#008196] text-white text-[11px] font-bold rounded-lg shrink-0 shadow-sm">
                Ingested
              </span>
            </div>

            <div className="p-3 rounded-xl border border-slate-200 bg-slate-50/80 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/12 text-[#04aac4] font-bold text-sm flex items-center justify-center shrink-0">
                  📊
                </div>
                <div className="min-w-0">
                  <div className="font-bold text-xs text-ink-900 truncate">Product Handbook</div>
                  <div className="text-[10px] text-slate-500">PPTX Presentation · 120 Slides</div>
                </div>
              </div>
              <span className="px-2.5 py-1 bg-[#e3f5f8] text-[#008196] text-[10px] font-extrabold rounded-lg shrink-0">
                100% Ready
              </span>
            </div>
          </div>
        </div>

        {/* Section 2: Multi-Format Outputs */}
        <div className="bg-white rounded-xl p-4 border border-brand-600/15 shadow-sm space-y-3">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-coral-500" />
              <span className="font-heading font-black text-xs text-[#008196] uppercase tracking-wider">
                2. Multi-Format Outputs (Generated On Brand)
              </span>
            </div>
            <span className="text-[11px] font-bold text-coral-500 bg-coral-50 px-2.5 py-0.5 rounded-full">
              Auto-Formatted
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            <div className="p-3 rounded-xl border border-brand-600/20 bg-[#f4fcfd] flex flex-col justify-between space-y-2">
              <div>
                <div className="font-bold text-xs text-ink-900 flex items-center gap-1.5">
                  <span>🎓</span> e-Learning
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5">Interactive Class</div>
              </div>
              <button type="button" className="w-full py-1.5 bg-[#008196] text-white text-[11px] font-bold rounded-lg shadow-sm">
                View Course →
              </button>
            </div>

            <div className="p-3 rounded-xl border border-brand-600/20 bg-[#f4fcfd] flex flex-col justify-between space-y-2">
              <div>
                <div className="font-bold text-xs text-ink-900 flex items-center gap-1.5">
                  <span>🎬</span> Micro-Video
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5">AI Presenter Studio</div>
              </div>
              <button type="button" className="w-full py-1.5 bg-[#008196] text-white text-[11px] font-bold rounded-lg shadow-sm">
                Publish Video →
              </button>
            </div>

            <div className="p-3 rounded-xl border border-slate-200 bg-slate-50/80 flex flex-col justify-between space-y-2">
              <div>
                <div className="font-bold text-xs text-ink-900 flex items-center gap-1.5">
                  <span>🗂️</span> Micro-Cards
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5">Daily Nudges Feed</div>
              </div>
              <button type="button" className="w-full py-1.5 bg-[#008196] text-white text-[11px] font-bold rounded-lg shadow-sm">
                Generate →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


/**
 * FORMAT 01: e-Learning & Interactive Class (100% Native HTML/CSS)
 */
export const ElearningFormatGraphic: React.FC = () => {
  return (
    <div className="w-full bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xl text-left">
      {/* Top Header */}
      <div className="bg-[#002f38] px-4 py-2.5 flex items-center justify-between gap-2 flex-wrap">
        <div className="flex items-center gap-3 min-w-0 shrink-0">
          <div className="bg-white px-2 py-0.5 rounded shadow-2xs border border-slate-200/80 flex items-center shrink-0">
            <img src={logoImg} alt="A3CEND" className="h-3.5 max-w-[80px] w-auto block object-contain" />
          </div>
          <div className="hidden sm:flex gap-3 text-xs font-bold text-slate-300">
            <span className="text-cyan-400 border-b-2 border-cyan-400 pb-0.5">Courses</span>
            <span>Library</span>
            <span>Analytics</span>
            <span>Help</span>
          </div>
        </div>
        <span className="text-[10px] font-mono text-cyan-300 font-bold bg-[#004855] px-3 py-1 rounded-full shrink-0 whitespace-nowrap">
          Format 01 · e-Learning Class
        </span>
      </div>

      {/* Main Workspace */}
      <div className="p-4 sm:p-6 bg-gradient-to-br from-[#f4fcfd] to-white space-y-4">
        <div className="font-heading font-black text-lg sm:text-xl text-ink-900">
          Interactive E-Learning Class: Data Science Fundamentals
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_220px] gap-4">
          {/* Lesson Slide Panel */}
          <div className="bg-white rounded-xl p-4 border border-brand-600/20 shadow-sm space-y-3">
            <div className="flex justify-between items-center pb-2 border-b border-slate-100">
              <span className="font-bold text-xs text-[#008196]">MODULE 4: Machine Learning Basics</span>
              <span className="text-[10px] font-mono text-slate-400">Slide 14 / 28</span>
            </div>

            <div className="space-y-2">
              <div className="font-bold text-xs text-ink-900">4.1 Introduction to ML Architecture</div>
              <div className="p-3 bg-[#f8fcfd] rounded-lg border border-[#008196]/15 text-xs text-slate-700 space-y-1">
                <div className="font-bold text-[#008196]">Input Data → Model Training → Prediction Output</div>
                <div className="text-[11px] text-slate-500">Supervised algorithms map inputs to target labels using historic datasets.</div>
              </div>
            </div>

            <div className="pt-2 flex justify-between items-center border-t border-slate-100">
              <button type="button" className="px-3 py-1.5 bg-slate-100 text-slate-700 text-xs font-bold rounded-lg">
                ← Previous Slide
              </button>
              <button type="button" className="px-4 py-1.5 bg-[#008196] text-white text-xs font-bold rounded-lg shadow-sm">
                Next Slide →
              </button>
            </div>
          </div>

          {/* Video Instructor Box */}
          <div className="bg-[#002f38] rounded-xl p-4 text-white flex flex-col justify-between space-y-3">
            <div className="flex items-center justify-between text-[10px] text-cyan-300 font-mono">
              <span>VIDEO PRESENTER</span>
              <span className="w-2 h-2 rounded-full bg-[#ff4081] animate-pulse" />
            </div>
            <div className="text-center space-y-1.5 my-2">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#008196] to-cyan-400 mx-auto flex items-center justify-center font-heading font-black text-sm text-white shadow-lg">
                SJ
              </div>
              <div className="font-bold text-xs">Sarah Jensen</div>
              <div className="text-[10px] text-slate-300">Lead AI Instructor</div>
            </div>
            <div className="w-full bg-[#004855] text-cyan-300 text-[10px] font-mono p-1.5 rounded-lg text-center">
              12:45 / 25:30
            </div>
          </div>
        </div>

        {/* Checkpoint Quiz Question */}
        <div className="bg-white rounded-xl p-4 border border-brand-600/20 shadow-sm space-y-3">
          <div className="font-bold text-xs text-ink-900">Checkpoint Quiz: Machine Learning Basics</div>
          <div className="text-xs text-slate-600 font-medium">
            Question 3: What is the primary difference between Supervised and Unsupervised Learning?
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div className="p-2.5 bg-[#f4fcfd] border border-[#008196] rounded-lg font-bold text-[#008196] flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-[#008196] text-white text-[10px] flex items-center justify-center font-bold">✓</span>
              Supervised uses labeled data for training
            </div>
            <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-700">
              Unsupervised requires prior human outcomes
            </div>
          </div>
          <div className="pt-2 flex justify-between items-center border-t border-slate-100">
            <span className="text-xs font-bold text-[#008196]">Lesson Progress: 85% COMPLETE</span>
            <button type="button" className="px-5 py-2 bg-[#008196] text-white font-bold text-xs rounded-xl shadow-sm">
              Submit Answer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


/**
 * FORMAT 02: AI Presenter & Micro-Video (100% Native HTML/CSS)
 */
export const MicroVideoFormatGraphic: React.FC = () => {
  return (
    <div className="w-full bg-[#0c1216] text-white rounded-2xl overflow-hidden border border-slate-800 shadow-xl text-left">
      {/* Studio Header Bar */}
      <div className="bg-[#141e24] px-4 py-2.5 border-b border-slate-800 flex items-center justify-between gap-2 flex-wrap">
        <div className="flex items-center gap-3 min-w-0">
          <div className="bg-white px-2 py-0.5 rounded shadow-2xs border border-slate-200/80 flex items-center shrink-0">
            <img src={logoImg} alt="A3CEND" className="h-3.5 max-w-[80px] w-auto block object-contain" />
          </div>
          <span className="text-xs font-bold text-slate-200 leading-snug">Studio · Micro-Video Engine</span>
        </div>
        <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-800 shrink-0 whitespace-nowrap">
          Format 02 · 1080p Full HD
        </span>
      </div>

      <div className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-4">
        {/* Presenter Canvas */}
        <div className="bg-[#141e24] rounded-xl p-4 border border-slate-800 flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-cyan-400">AI Presenter: Maya</span>
            <span className="font-mono text-slate-400">00:28 / 00:45</span>
          </div>

          <div className="w-full h-48 bg-gradient-to-tr from-[#003c46] via-[#005566] to-[#002f38] rounded-xl relative overflow-hidden flex flex-col items-center justify-center border border-cyan-500/20 shadow-inner">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#008196] to-cyan-400 flex items-center justify-center font-heading font-black text-xl text-white shadow-xl">
              M
            </div>
            <div className="mt-3 bg-black/80 backdrop-blur-md px-3.5 py-2 rounded-lg border border-cyan-400/30 text-center max-w-[88%]">
              <p className="text-xs text-cyan-200 font-medium leading-tight">
                &quot;A3CEND leverages advanced AI to create highly engaging micro-videos for your brand.&quot;
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between pt-1">
            <div className="flex gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#008196]" />
              <span className="w-2 h-2 rounded-full bg-[#04aac4]" />
              <span className="w-2 h-2 rounded-full bg-[#ff4081]" />
            </div>
            <button type="button" className="px-4 py-2 bg-[#008196] text-white text-xs font-bold rounded-xl shadow-sm">
              EXPORT VIDEO (00:45s)
            </button>
          </div>
        </div>

        {/* Teleprompter Script */}
        <div className="bg-[#141e24] rounded-xl p-4 border border-slate-800 flex flex-col justify-between space-y-3">
          <div className="text-xs font-bold text-slate-200 border-b border-slate-800 pb-2">
            Teleprompter Script Panel
          </div>
          <div className="space-y-2 text-xs">
            <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800 text-slate-200 leading-relaxed">
              &quot;Today, I am thrilled to show you how easy it is to generate high-quality micro-videos with our platform.&quot;
            </div>
            <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800 text-slate-400 leading-relaxed">
              &quot;Just input your script, select your avatar, and let AI handle the rest.&quot;
            </div>
          </div>
          <div className="pt-2 border-t border-slate-800 text-[10px] text-cyan-400 font-mono">
            Burned-in Subtitles · English (US) · 30 fps
          </div>
        </div>
      </div>
    </div>
  );
};


/**
 * FORMAT 03: Micro-Cards & Daily Nudges (100% Native HTML/CSS)
 */
export const MicroCardsFormatGraphic: React.FC = () => {
  return (
    <div className="w-full bg-[#edf6f8] rounded-2xl overflow-hidden border border-brand-600/20 shadow-xl text-left">
      {/* Header Bar */}
      <div className="bg-white px-4 py-2.5 border-b border-slate-200 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="bg-white border border-slate-200/80 px-2 py-0.5 rounded shadow-2xs flex items-center">
            <img src={logoImg} alt="A3CEND" className="h-3.5 max-w-[80px] w-auto block object-contain" />
          </div>
          <span className="text-xs font-bold text-ink-900">Workplace Learning · Flow of Work</span>
        </div>
        <span className="text-[10px] font-mono text-[#008196] font-bold bg-[#e3f5f8] px-3 py-1 rounded-full">
          Format 03 · Slack &amp; Teams Integration
        </span>
      </div>

      <div className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl p-4 border border-brand-600/20 shadow-sm flex flex-col justify-between space-y-3">
          <div className="flex justify-between items-center pb-2 border-b border-slate-100">
            <span className="font-bold text-xs text-[#008196]">Daily Coaching Nudge</span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#04aac4]" />
          </div>
          <div className="space-y-1.5 my-2">
            <div className="font-bold text-xs text-ink-900">Active Listening Technique</div>
            <div className="text-xs text-slate-600">Focus on the 3-second pause before responding to client questions.</div>
          </div>
          <button type="button" className="w-full py-2 bg-[#e3f5f8] text-[#008196] text-xs font-bold rounded-xl">
            Complete Nudge (2 min) →
          </button>
        </div>

        <div className="bg-white rounded-xl p-4 border border-brand-600/20 shadow-sm flex flex-col justify-between space-y-3">
          <div className="flex justify-between items-center pb-2 border-b border-slate-100">
            <span className="font-bold text-xs text-slate-700">PEACE Framework</span>
            <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[9px] font-bold rounded">SOP</span>
          </div>
          <div className="space-y-1.5 my-2">
            <div className="font-bold text-xs text-ink-900">De-escalation SOP</div>
            <div className="text-xs text-slate-600">Prepare, Engage, Acknowledge, Clarify, Execute.</div>
          </div>
          <button type="button" className="w-full py-2 bg-[#008196] text-white text-xs font-bold rounded-xl shadow-sm">
            View Micro-Card →
          </button>
        </div>

        <div className="bg-white rounded-xl p-4 border border-brand-600/20 shadow-sm flex flex-col justify-between space-y-3">
          <div className="flex justify-between items-center pb-2 border-b border-slate-100">
            <span className="font-bold text-xs text-coral-500">Scenario Check</span>
            <span className="w-2.5 h-2.5 rounded-full bg-coral-500" />
          </div>
          <div className="space-y-1.5 my-2">
            <div className="font-bold text-xs text-ink-900">Quick Checkin</div>
            <div className="text-xs text-slate-600">Did you apply active listening in your meeting today?</div>
          </div>
          <button type="button" className="w-full py-2 bg-slate-100 text-slate-800 text-xs font-bold rounded-xl">
            Log Reflection ✓
          </button>
        </div>
      </div>
    </div>
  );
};


/**
 * FORMAT 04: Diagnostics & Skill Taxonomy (100% Native HTML/CSS)
 */
export const AssessmentsFormatGraphic: React.FC = () => {
  return (
    <div className="w-full bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xl text-left">
      {/* Header Bar */}
      <div className="bg-[#002f38] px-4 py-2.5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="bg-white px-2 py-0.5 rounded shadow-2xs border border-slate-200/80 flex items-center">
            <img src={logoImg} alt="A3CEND" className="h-3.5 max-w-[80px] w-auto block object-contain" />
          </div>
          <span className="text-xs font-bold text-cyan-300">Skill Taxonomy &amp; Diagnostics</span>
        </div>
        <span className="text-[10px] font-mono text-white font-bold bg-[#008196] px-3 py-1 rounded-full">
          Format 04 · 35 Skills / 200+ Dimensions
        </span>
      </div>

      <div className="p-4 sm:p-6 bg-gradient-to-br from-[#f4fcfd] to-white space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-4 border border-brand-600/20 shadow-sm space-y-1.5">
            <div className="text-xs font-bold text-slate-500">Universal Taxonomy</div>
            <div className="font-heading font-black text-2xl text-[#008196]">35 Skills</div>
            <div className="text-xs text-slate-600">Across 7 leadership &amp; sales communication frameworks.</div>
          </div>

          <div className="bg-white rounded-xl p-4 border border-brand-600/20 shadow-sm space-y-1.5">
            <div className="text-xs font-bold text-slate-500">Scored Dimensions</div>
            <div className="font-heading font-black text-2xl text-coral-500">200+</div>
            <div className="text-xs text-slate-600">Evaluated on L1–L4 mastery scale in real-time.</div>
          </div>

          <div className="bg-white rounded-xl p-4 border border-brand-600/20 shadow-sm space-y-1.5">
            <div className="text-xs font-bold text-slate-500">Cultural Presets</div>
            <div className="font-heading font-black text-2xl text-[#008196]">6 Global</div>
            <div className="text-xs text-slate-600">GlobeSmart cultural communication adaptation.</div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 border border-brand-600/20 shadow-sm space-y-3">
          <div className="font-bold text-xs text-ink-900">Diagnostic Heatmap Sample</div>
          <div className="space-y-2.5">
            <div>
              <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                <span>Executive Presence &amp; Gravitas</span>
                <span className="text-[#008196]">94% (L4 Mastery)</span>
              </div>
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-[#008196] w-[94%]" />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                <span>Objection De-escalation</span>
                <span className="text-coral-500">88% (L3 Advanced)</span>
              </div>
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-coral-500 w-[88%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


/**
 * FORMAT 05: Roleplay Simulation Prompt (100% Native HTML/CSS)
 */
export const SimulationsFormatGraphic: React.FC = () => {
  return (
    <div className="w-full bg-[#fdf8fa] rounded-2xl overflow-hidden border border-coral-500/20 shadow-xl text-left">
      {/* Header Bar */}
      <div className="bg-[#002f38] px-4 py-2.5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="bg-white px-2 py-0.5 rounded shadow-2xs border border-slate-200/80 flex items-center">
            <img src={logoImg} alt="A3CEND" className="h-3.5 max-w-[80px] w-auto block object-contain" />
          </div>
          <span className="text-xs font-bold text-cyan-300">
            REHEARSE · AI Simulation Prompt
          </span>
        </div>
        <span className="text-[10px] font-mono text-white font-bold bg-coral-500 px-3 py-1 rounded-full">
          Format 05 · Voice &amp; Video Roleplay
        </span>
      </div>

      <div className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-4">
        {/* Simulation Box */}
        <div className="bg-[#002f38] rounded-xl p-4 text-white flex flex-col justify-between space-y-3">
          <div className="flex justify-between items-center text-xs">
            <span className="font-bold text-cyan-300">1:1 AI Roleplay Simulation</span>
            <span className="px-2 py-0.5 bg-coral-500 text-white text-[9px] font-bold rounded">LIVE</span>
          </div>

          <div className="my-2 p-3 bg-black/40 rounded-lg border border-cyan-500/30 text-xs space-y-1.5">
            <div className="font-bold text-cyan-300">Scenario Configuration:</div>
            <div className="text-slate-200 text-xs leading-relaxed">
              &quot;Difficult Performance Conversation with Underperforming Team Member.&quot;
            </div>
          </div>

          <div className="pt-2 border-t border-[#004855] flex justify-between items-center">
            <span className="text-[10px] text-cyan-300 font-mono">Vocal &amp; Facial Signal Analysis</span>
            <button type="button" className="px-4 py-1.5 bg-[#008196] text-white text-xs font-bold rounded-xl shadow-sm">
              Start Roleplay →
            </button>
          </div>
        </div>

        {/* Readiness Scorecard */}
        <div className="bg-white rounded-xl p-4 border border-coral-500/20 shadow-sm flex flex-col justify-between space-y-3">
          <div className="font-bold text-xs text-ink-900 border-b border-slate-100 pb-2">
            Readiness Scorecard
          </div>

          <div className="flex items-center gap-3">
            <div className="w-16 h-16 rounded-full border-4 border-dashed border-coral-500/40 flex items-center justify-center shrink-0">
              <span className="font-heading font-black text-lg text-coral-500">92%</span>
            </div>
            <div>
              <div className="font-bold text-xs text-ink-900">Ready to Engage</div>
              <div className="text-[11px] text-slate-500">★ 30+ Practice Hours Logged</div>
            </div>
          </div>

          <div className="text-xs font-bold text-[#008196] bg-[#e3f5f8] p-2.5 rounded-xl text-center">
            Actionable AI Feedback Generated Instantly
          </div>
        </div>
      </div>
    </div>
  );
};
