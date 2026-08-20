import React from 'react';

export const RehearseLiveSimGraphic: React.FC = () => {
  return (
    <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-700/80 p-5 shadow-2xl font-sans text-white">
      
      {/* Top Header Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#008196] animate-pulse" />
          <span className="font-mono font-bold tracking-wider text-[#04aac4] uppercase text-[11px]">
            AI Persona Active · Voice &amp; Video HUD
          </span>
        </div>
        <span className="font-mono text-[10px] bg-[#ff4081]/15 text-[#ff4081] px-2.5 py-0.5 rounded-full border border-[#ff4081]/30 font-bold">
          LIVE SESSION 00:42
        </span>
      </div>

      {/* Main Roleplay Counterpart Area */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-[1fr_1.3fr] gap-4 items-center bg-slate-950/80 rounded-xl p-4 border border-slate-800">
        
        {/* Left: AI Avatar Silhouette */}
        <div className="relative flex flex-col items-center justify-center p-3 rounded-xl bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700/60">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#008196] to-[#04aac4] p-0.5 shadow-lg relative">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-white font-heading font-black text-xl">
              AI
            </div>
            <span className="absolute bottom-0 right-0 w-4 h-4 bg-emerald-500 rounded-full border-2 border-slate-900" />
          </div>
          <span className="mt-2 text-xs font-bold text-slate-200">Defensive Direct Report</span>
          <span className="text-[10px] text-slate-400 font-mono">Persona: Manager 1:1 Rating</span>
        </div>

        {/* Right: Real-time Audio Waveform & Dynamic Transcript */}
        <div className="space-y-3">
          
          {/* Audio Waveform Equalizer in A3CEND Teal & Coral */}
          <div className="bg-slate-900 rounded-lg p-2.5 border border-slate-800 flex items-center justify-between gap-1">
            <span className="text-[10px] font-mono text-slate-400 mr-1">VOICE SIGNAL</span>
            <div className="flex items-center gap-1 flex-1 h-5 justify-center">
              <span className="w-1 h-3 bg-[#008196] rounded-full animate-pulse" />
              <span className="w-1 h-5 bg-[#04aac4] rounded-full animate-pulse delay-75" />
              <span className="w-1 h-2 bg-[#ff4081] rounded-full animate-pulse delay-150" />
              <span className="w-1 h-4 bg-[#008196] rounded-full animate-pulse delay-100" />
              <span className="w-1 h-6 bg-[#04aac4] rounded-full animate-pulse delay-200" />
              <span className="w-1 h-3 bg-[#ff4081] rounded-full animate-pulse" />
              <span className="w-1 h-5 bg-[#008196] rounded-full animate-pulse delay-150" />
              <span className="w-1 h-2 bg-[#04aac4] rounded-full animate-pulse delay-75" />
            </div>
            <span className="text-[10px] font-mono text-[#04aac4] font-bold">142 BPM</span>
          </div>

          {/* Transcript Dialogue Bubble */}
          <div className="bg-[#008196]/15 border border-[#008196]/30 rounded-xl p-3 text-xs leading-relaxed text-slate-200">
            <span className="font-bold text-[#04aac4] block text-[10px] uppercase font-mono mb-0.5">AI Response:</span>
            "I feel this appraisal rating doesn't accurately reflect my Q3 deliverables..."
          </div>

        </div>

      </div>

      {/* Bottom Evaluated Signals Summary */}
      <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
        <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          Signal Analysis Active
        </span>
        <span className="text-slate-300 font-bold">L3 Proficient Threshold Mapped</span>
      </div>

    </div>
  );
};
