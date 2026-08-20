import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  TRY_IT_TOOLS,
  PRESENTER_TOPICS,
  AUDIENCE_OPTIONS,
  SIMULATION_PERSONAS,
  SIMULATION_LEVELS,
} from '@/data/tryItData';
import rehearseImg from '@/assets/img-rehearse.png';
import orchestratorImg from '@/assets/img-content-orchestrator.png';

interface TryItWorkbenchProps {
  initialTool?: 'presenter' | 'sim';
  showSwitcher?: boolean;
  autoStart?: boolean;
}

export const TryItWorkbench: React.FC<TryItWorkbenchProps> = ({
  initialTool = 'presenter',
  showSwitcher = true,
  autoStart = false,
}) => {
  const [activeTool, setActiveTool] = useState<'presenter' | 'sim'>(initialTool);

  // Presenter States
  const [presenterTopic, setPresenterTopic] = useState(PRESENTER_TOPICS[0].id);
  const [presenterAudience, setPresenterAudience] = useState(AUDIENCE_OPTIONS[0].id);
  const [presenterStage, setPresenterStage] = useState<'pick' | 'generating' | 'view'>('pick');
  const [genProgress, setGenProgress] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(1);

  // Simulation States
  const [simPersona, setSimPersona] = useState(SIMULATION_PERSONAS[0].id);
  const [simLevel, setSimLevel] = useState(SIMULATION_LEVELS[0].id);
  const [simStage, setSimStage] = useState<'pick' | 'active' | 'scorecard' | 'fullScorecard'>('pick');
  const [simClock, setSimClock] = useState(0);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  // Persona Quote Map from Developer Reference Architecture
  const personaQuotes: Record<string, { quote: string; nudge: string }> = {
    defensive: {
      quote: `"Jordan: Look, I put in 50 hours a week. The project delay wasn't on me!"`,
      nudge: "Validate his effort first before clarifying baseline project ownership goals.",
    },
    skeptical: {
      quote: `"Dr. Ramesh: Phase III data is one thing. What is the NNT for my elderly patients with comorbidities?"`,
      nudge: "Address the specific patient population NNT constraint before citing trial endpoint efficacy.",
    },
    peer_conflict: {
      quote: `"Sarah: I need the design resources reallocated to my sprint by tomorrow, budget alignment or not."`,
      nudge: "Acknowledge her sense of urgency while setting firm boundary on cross-functional resource governance.",
    },
  };

  // Handle URL hash changes
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'presenter' || hash === 'sim') {
        setActiveTool(hash);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Presenter Generation Simulator
  const handleRunPresenter = () => {
    setPresenterStage('generating');
    setGenProgress(0);
    const interval = setInterval(() => {
      setGenProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setPresenterStage('view');
          return 100;
        }
        return prev + 25;
      });
    }, 400);
  };

  // Auto-start: dedicated single-tool routes drop straight into the live demo
  useEffect(() => {
    if (!autoStart) return;
    if (initialTool === 'presenter') {
      handleRunPresenter();
    } else if (initialTool === 'sim') {
      setSimStage('active');
      setSimClock(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Simulation Timer
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (simStage === 'active') {
      timer = setInterval(() => {
        setSimClock((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [simStage]);

  const selectedTopicObj = PRESENTER_TOPICS.find((t) => t.id === presenterTopic) || PRESENTER_TOPICS[0];
  const selectedAudienceObj = AUDIENCE_OPTIONS.find((a) => a.id === presenterAudience) || AUDIENCE_OPTIONS[0];
  const selectedPersonaObj = SIMULATION_PERSONAS.find((p) => p.id === simPersona) || SIMULATION_PERSONAS[0];
  const activePersonaData = personaQuotes[simPersona] || personaQuotes.defensive;

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const toolRoutes: Record<string, string> = {
    presenter: '/try/live-presenter',
    sim: '/try/simulation',
  };

  return (
    <div className="w-full">
      {/* 2 Tool Switcher Cards */}
      {showSwitcher && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {TRY_IT_TOOLS.map((t) => {
            return (
              <Link
                key={t.id}
                to={toolRoutes[t.id]}
                className="a3-focusable text-left p-6 rounded-2xl border-2 border-[#008196]/35 bg-white transition-all duration-300 block hover:shadow-xl hover:-translate-y-1 hover:border-[#008196]/60"
              >
                <div className="flex items-center justify-between gap-2">
                  <span
                    className="font-mono text-xs font-bold tracking-widest uppercase"
                    style={{ color: t.hue }}
                  >
                    {t.kicker}
                  </span>
                  <span className="font-mono text-xs text-slate-500">{t.time}</span>
                </div>
                <div className="mt-3 font-heading font-extrabold text-xl text-ink-900 leading-snug">
                  {t.title}
                </div>
                <p className="mt-2 text-xs md:text-sm leading-relaxed text-slate-600">
                  {t.body}
                </p>
              </Link>
            );
          })}
        </div>
      )}

      {/* Main Workbench Screen */}
      <div className="a3-glass-card rounded-[26px] overflow-hidden border border-brand-600/15 bg-white shadow-xl">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-brand-600/10 bg-gradient-to-b from-[#f7fdfe] to-white flex-wrap gap-2">
          <span className="font-mono text-xs font-bold tracking-widest text-brand-600 uppercase">
            {activeTool === 'presenter'
              ? 'WORKBENCH · LIVE PRESENTER ENGINE'
              : 'WORKBENCH · REHEARSE SIMULATION ENGINE'}
          </span>
          <span className="text-xs text-slate-500 font-medium">
            Step {activeTool === 'sim' ? (simStage === 'pick' ? '1 of 3' : simStage === 'active' ? '2 of 3' : '3 of 3') : '1 of 2'}: Configuration
          </span>
        </div>

        {/* TOOL 1: LIVE PRESENTER ENGINE */}
        {activeTool === 'presenter' && (
          <div className="p-6 md:p-8">
            {presenterStage === 'pick' && (
              <div>
                <h3 className="font-heading font-extrabold text-xl text-ink-900">Pick a topic to turn into a live class.</h3>
                <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                  In the product you would drop in your own deck, SOP or policy. Here, pick one of ours — the AI presenter will teach it on camera.
                </p>

                <div className="mt-6 space-y-3">
                  {PRESENTER_TOPICS.map((pt) => {
                    const isSelected = presenterTopic === pt.id;
                    return (
                      <button
                        key={pt.id}
                        type="button"
                        onClick={() => setPresenterTopic(pt.id)}
                        className={`w-full text-left p-4 rounded-xl border flex items-center justify-between transition-all ${
                          isSelected
                            ? 'border-brand-600 bg-brand-50/60 shadow-sm'
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div>
                          <div className="font-bold text-sm text-ink-900">{pt.label}</div>
                          <div className="text-xs text-slate-500 mt-0.5">{pt.meta}</div>
                        </div>
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${isSelected ? 'border-brand-600 bg-brand-600 text-white' : 'border-slate-300'}`}>
                          {isSelected && <span className="text-[10px] font-bold">✓</span>}
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-6">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">
                    Target Audience
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {AUDIENCE_OPTIONS.map((ao) => (
                      <button
                        key={ao.id}
                        type="button"
                        onClick={() => setPresenterAudience(ao.id)}
                        className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                          presenterAudience === ao.id
                            ? 'bg-brand-600 text-white shadow-sm'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        {ao.label}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleRunPresenter}
                  className="a3-btn a3-btn-coral mt-8 px-8 py-3.5 text-sm font-bold w-full md:w-auto"
                >
                  Build the live presenter →
                </button>
              </div>
            )}

            {presenterStage === 'generating' && (
              <div className="py-12 text-center max-w-[420px] mx-auto animate-fadeUp">
                <div className="w-16 h-16 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center mx-auto text-xl font-bold animate-pulse">
                  ⚡
                </div>
                <h4 className="mt-4 font-heading font-extrabold text-xl text-ink-900">Generating AI Presenter...</h4>
                <p className="mt-1 text-xs text-slate-500">Synthesizing slides, script and video stream</p>
                <div className="mt-6 h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-600 transition-all duration-300 rounded-full" style={{ width: `${genProgress}%` }} />
                </div>
                <div className="mt-2 font-mono text-xs text-brand-600 font-bold">{genProgress}%</div>
              </div>
            )}

            {presenterStage === 'view' && (
              <div className="animate-fadeUp">
                <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
                  <div>
                    <span className="a3-tag a3-tag--teal text-[10px]">LIVE AI PRESENTER</span>
                    <h4 className="font-heading font-black text-xl text-ink-900 mt-1">{selectedTopicObj.label}</h4>
                  </div>
                  <button type="button" onClick={() => setPresenterStage('pick')} className="text-xs font-bold text-slate-500 hover:text-brand-600">
                    ← Try another topic
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900 h-64 flex items-center justify-center p-2">
                    <img src={orchestratorImg} alt="Presenter UI" className="w-full h-full object-contain opacity-90" />
                    <div className="absolute top-3 left-3 bg-red-600 text-white font-mono text-[10px] font-bold px-2.5 py-1 rounded-md flex items-center gap-1.5 shadow-md">
                      <span className="w-2 h-2 rounded-full bg-white animate-pulse" /> LIVE STREAM
                    </div>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                    <div className="flex justify-between items-center text-xs font-bold text-slate-500 mb-2">
                      <span>SLIDE {currentSlide} OF 4</span>
                      <span>Audience: {selectedAudienceObj.label}</span>
                    </div>
                    <div className="font-extrabold text-base text-ink-900">
                      {currentSlide === 1 && '1. Establishing the Feedback Foundation'}
                      {currentSlide === 2 && '2. De-escalating Defensiveness in Real Time'}
                      {currentSlide === 3 && '3. The 4-Step Behavioral Contract'}
                      {currentSlide === 4 && '4. Assessment & Follow-up Commitment'}
                    </div>
                    <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                      "When delivering tough feedback under pressure, clarity must precede comfort. State the observed behavioral gap directly without diluting the core message..."
                    </p>

                    <div className="mt-6 flex justify-between items-center">
                      <div className="flex gap-2">
                        <button type="button" onClick={() => setCurrentSlide((p) => Math.max(1, p - 1))} className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-700">
                          ← Prev
                        </button>
                        <button type="button" onClick={() => setCurrentSlide((p) => Math.min(4, p + 1))} className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-700">
                          Next →
                        </button>
                      </div>
                      <span className="text-xs font-mono text-brand-600 font-bold">100% On-Brand</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TOOL 2: REHEARSE SIMULATION ENGINE */}
        {activeTool === 'sim' && (
          <div className="p-6 md:p-8">
            {simStage === 'pick' && (
              <div>
                <h3 className="font-heading font-extrabold text-xl text-ink-900">Pick the conversation you would rather avoid.</h3>
                <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                  An AI character plays the other person and reacts to what you actually say. Scored on empathy, clarity, accountability and assertiveness.
                </p>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                  {SIMULATION_PERSONAS.map((sp) => {
                    const isSelected = simPersona === sp.id;
                    return (
                      <button
                        key={sp.id}
                        type="button"
                        onClick={() => setSimPersona(sp.id)}
                        className={`text-left p-5 rounded-2xl border transition-all flex flex-col justify-between ${
                          isSelected
                            ? 'border-brand-600 bg-brand-50/60 shadow-md ring-2 ring-brand-600/20'
                            : 'border-slate-200 hover:border-slate-300 bg-white'
                        }`}
                      >
                        <div>
                          <span className="a3-tag a3-tag--teal text-[9px] mb-2 inline-block">{sp.tag}</span>
                          <div className="font-extrabold text-base text-ink-900">{sp.name}</div>
                          <p className="mt-2 text-xs text-slate-600 leading-relaxed">{sp.body}</p>
                        </div>
                        <div className="mt-4 text-xs font-bold text-brand-600">Select persona →</div>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-6">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">
                    Resistance Level
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {SIMULATION_LEVELS.map((sl) => (
                      <button
                        key={sl.id}
                        type="button"
                        onClick={() => setSimLevel(sl.id)}
                        className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                          simLevel === sl.id
                            ? 'bg-brand-600 text-white shadow-sm'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        {sl.label}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setSimStage('active');
                    setSimClock(0);
                  }}
                  className="a3-btn a3-btn-coral mt-8 px-8 py-3.5 text-sm font-bold w-full md:w-auto"
                >
                  Start the rehearsal →
                </button>
              </div>
            )}

            {simStage === 'active' && (
              <div className="animate-fadeUp">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <span className="a3-tag a3-tag--coral text-[10px]">SIMULATION ACTIVE</span>
                    <h4 className="font-heading font-black text-xl text-ink-900 mt-1">{selectedPersonaObj.name}</h4>
                  </div>
                  <div className="font-mono text-xs font-bold text-coral-500 bg-coral-50 px-3 py-1.5 rounded-full">
                    ● {formatTime(simClock)}
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900">
                    <div className="h-64 relative">
                      <img
                        src={rehearseImg}
                        alt="AI Avatar Persona"
                        className="w-full h-full object-cover opacity-90"
                      />
                      <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ink-900/80 font-mono text-[10px] font-bold text-white">
                        <span className="w-1.5 h-1.5 rounded-full bg-coral-500 animate-pulse" />
                        LIVE · {formatTime(simClock)}
                      </div>
                    </div>
                    <div className="p-5 text-white bg-slate-950">
                      <div className="text-sm font-bold text-[#8fd9e6]">
                        {activePersonaData.quote}
                      </div>
                      <div className="mt-4 font-mono text-[10px] text-slate-400 uppercase tracking-widest">
                        COACH NUDGE
                      </div>
                      <div className="mt-1 text-xs text-slate-300">
                        {activePersonaData.nudge}
                      </div>
                    </div>
                  </div>

                  {/* Right: Live Signal Meters & Transcript */}
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                    <div className="font-mono text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                      REAL-TIME BEHAVIORAL SCORING
                    </div>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                          <span>Empathy &amp; Rapport</span>
                          <span className="font-mono text-brand-600 font-bold">78%</span>
                        </div>
                        <div className="h-2 rounded-full bg-slate-200 overflow-hidden">
                          <div className="h-full bg-brand-600 rounded-full w-[78%]" />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                          <span>Assertiveness &amp; Boundaries</span>
                          <span className="font-mono text-coral-500 font-bold">85%</span>
                        </div>
                        <div className="h-2 rounded-full bg-slate-200 overflow-hidden">
                          <div className="h-full bg-coral-500 rounded-full w-[85%]" />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                          <span>Accountability &amp; Clarity</span>
                          <span className="font-mono text-brand-600 font-bold">92%</span>
                        </div>
                        <div className="h-2 rounded-full bg-slate-200 overflow-hidden">
                          <div className="h-full bg-brand-600 rounded-full w-[92%]" />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                          <span>De-escalation Signal</span>
                          <span className="font-mono text-coral-500 font-bold">80%</span>
                        </div>
                        <div className="h-2 rounded-full bg-slate-200 overflow-hidden">
                          <div className="h-full bg-coral-500 rounded-full w-[80%]" />
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSimStage('scorecard')}
                      className="a3-btn a3-btn-primary mt-8 w-full py-3.5 text-sm font-bold"
                    >
                      End and score me
                    </button>
                  </div>
                </div>
              </div>
            )}

            {simStage === 'scorecard' && (
              <div className="p-7 md:p-9 animate-fadeUp">
                <div className="flex justify-between items-start gap-4 flex-wrap">
                  <div>
                    <div className="font-mono text-[10px] font-bold text-coral-500 tracking-widest uppercase">
                      SESSION COMPLETE · {selectedPersonaObj.name}
                    </div>
                    <h2 className="mt-2 text-2xl font-extrabold text-ink-900 max-w-[34ch]">
                      Here is the headline. The full scorecard needs a few details.
                    </h2>
                  </div>
                  <span className="px-3.5 py-1.5 rounded-full bg-coral-50 text-coral-500 text-xs font-bold">
                    4 turns · 2:41 spoken
                  </span>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-[0.7fr_1.3fr] gap-6">
                  <div className="rounded-2xl p-6 bg-gradient-to-br from-[#004a56] to-[#008196] text-white text-center flex flex-col items-center justify-center">
                    <div className="font-mono text-[10px] font-bold text-[#8fd9e6] tracking-widest">
                      COMPOSITE
                    </div>
                    <div className="mt-2 font-heading font-black text-6xl">2.9</div>
                    <div className="mt-2 text-xs text-slate-200">of 4 · L2 approaching L3</div>
                  </div>

                  <div>
                    <div className="p-4 rounded-xl border border-dashed border-brand-600/30 bg-brand-50/50 text-sm text-slate-700 leading-relaxed">
                      Locked in the full scorecard: turn-by-turn analysis, the two moments that cost you most, skill levels L1–L4 against the framework, and what to practise next.
                    </div>
                    <div className="mt-5 flex gap-3 flex-wrap">
                      <button
                        type="button"
                        onClick={() => setSimStage('fullScorecard')}
                        className="a3-btn a3-btn-coral px-6 py-2.5 text-sm font-bold"
                      >
                        See my full scorecard
                      </button>
                      <button
                        type="button"
                        onClick={() => setSimStage('pick')}
                        className="text-xs font-semibold text-slate-500 hover:text-ink-900 px-2"
                      >
                        Try again first
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {simStage === 'fullScorecard' && (
              <div className="p-7 md:p-9 animate-fadeUp">
                <div className="max-w-[500px] mx-auto text-center">
                  <h3 className="font-heading font-black text-2xl text-ink-900">Unlock your full scorecard</h3>
                  <p className="mt-2 text-sm text-slate-600">Enter your email to receive your full PDF analysis &amp; skill breakdown.</p>
                  
                  {!emailSubmitted ? (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (userEmail) setEmailSubmitted(true);
                      }}
                      className="mt-6 flex flex-col gap-3"
                    >
                      <input
                        type="email"
                        required
                        placeholder="Enter your work email"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-ink-900 focus:outline-none focus:border-brand-600"
                      />
                      <button type="submit" className="a3-btn a3-btn-coral py-3.5 text-sm font-bold w-full">
                        Send full scorecard →
                      </button>
                    </form>
                  ) : (
                    <div className="mt-6 p-4 rounded-xl bg-brand-50 border border-brand-400/30 text-brand-600 font-bold text-sm">
                      ✓ Scorecard sent to {userEmail}! Check your inbox.
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() => setSimStage('pick')}
                    className="mt-6 text-xs font-bold text-slate-400 hover:text-ink-900"
                  >
                    ← Back to scenarios
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
