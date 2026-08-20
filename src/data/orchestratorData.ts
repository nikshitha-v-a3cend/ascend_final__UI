export const ORCHESTRATOR_STAGES = [
  {
    n: 1,
    title: 'INGEST',
    headline: 'Bring your decks, SOPs & policies.',
    body: 'Upload existing PDFs, PPTs or text docs. The engine parses structure, key concepts, terminology and learning objectives automatically.',
    tags: ['PDF & PPT Ingestion', 'Auto-Structuring', 'Brand Tone Lock', 'Knowledge Base'],
    headerBg: 'linear-gradient(135deg,#003c46,#006070)',
    grad: 'linear-gradient(135deg,#008196,#04aac4)',
  },
  {
    n: 2,
    title: 'GENERATE',
    headline: 'One source → every format.',
    body: 'Generate interactive e-learning classes, video storyboards, avatar narration, micro-cards, and assessments from the single ingested source.',
    tags: ['e-Learning', 'AI Presenter Video', 'Flashcards', 'Scenario Sims'],
    headerBg: 'linear-gradient(135deg,#004a56,#008196)',
    grad: 'linear-gradient(135deg,#008196,#04aac4)',
  },
  {
    n: 3,
    title: 'COMPOSE',
    headline: 'Published on your brand.',
    body: 'Apply corporate design themes, voice personas, slide layouts, and custom scoring criteria. Export to your LMS or run directly on A3CEND.',
    tags: ['Brand Theme Lock', 'LMS Export (SCORM)', 'Multi-Language', 'Auto-Updates'],
    headerBg: 'linear-gradient(135deg,#fa6793,#e04f7f)',
    grad: 'linear-gradient(135deg,#fa6793,#e04f7f)',
  },
];

export const FORMAT_OPTIONS = [
  {
    n: 1,
    id: 'elearning',
    name: 'e-Learning & Interactive Class',
    def: 'Full multi-slide interactive course complete with learning objectives, visual decks, inline knowledge checks, and end-of-module assessment.',
  },
  {
    n: 2,
    id: 'video',
    name: 'AI Presenter & Micro-Video',
    def: 'Short, engaging video with a photorealistic avatar presenter teaching key points on-camera, complete with synchronized slide overlays.',
  },
  {
    n: 3,
    id: 'cards',
    name: 'Micro-Cards & Daily Nudges',
    def: 'Bite-sized flashcards designed for mobile flow-of-work learning. Quick reflections and 60-second reinforcement nudges.',
  },
  {
    n: 4,
    id: 'assessments',
    name: 'Diagnostics & Assessments',
    def: 'Automated multiple-choice and scenario-based diagnostic assessments mapped directly back to the A3CEND Skill Framework.',
  },
  {
    n: 5,
    id: 'simulations',
    name: 'Roleplay Simulation Prompt',
    def: 'Automatically synthesizes persona directions, pushback triggers, and scoring metrics for REHEARSE conversation simulations.',
  },
];
