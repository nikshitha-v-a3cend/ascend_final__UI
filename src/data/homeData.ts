export interface CycleStage {
  n: number;
  tag: string;
  name: string;
  solution: string;
  shift: string;
  detail: string;
  points: string[];
  link: string;
  linkLabel: string;
  hue: string;
  hueGrad: string;
  hueTint: string;
  hueBorder: string;
  hueRgb: string;
}

export const BRANDS = [
  'TimesPro',
  'Novartis',
  'Cargill',
  'Sandoz',
  'Axis Bank',
  'LTIMindtree',
  'Chryselys',
  'PharmaScroll',
];

export const CYCLE_STAGES: CycleStage[] = [
  {
    n: 1,
    tag: 'The shift',
    name: 'ASSESS',
    solution: 'Baseline Diagnostics',
    shift: 'Know where each persona stands before content lands.',
    detail:
      'Baseline every person against the skill framework with observable-behaviour diagnostics (L1 to L4, not self-report) then turn each gap into a personalised pathway, persona by persona.',
    points: [
      'L1 to L4 · scored on observable behaviour',
      'Gap → personalised pathway, persona by persona',
      'Micro-assessments feed each skill',
    ],
    link: '/framework',
    linkLabel: 'See the skill framework',
    hue: '#008196',
    hueGrad: 'linear-gradient(135deg,#008196,#04aac4)',
    hueTint: '#e3f5f8',
    hueBorder: '#bce6ef',
    hueRgb: '0,129,150',
  },
  {
    n: 2,
    tag: 'The shift',
    name: 'CREATE',
    solution: 'Content Orchestrator',
    shift: 'Knowledge must survive the workshop.',
    detail:
      'Generate multi-format learning from your existing content: one ingested source becomes e-learning, video, micro-cards and assessments, all on your brand, all kept current.',
    points: [
      'Multi-format learning from existing content',
      'Nudges, micro-cards & reflection in the flow of work',
      'Update the source once, every module regenerates',
    ],
    link: '/content-orchestrator',
    linkLabel: 'Explore the content engine',
    hue: '#008196',
    hueGrad: 'linear-gradient(135deg,#008196,#04aac4)',
    hueTint: '#e3f5f8',
    hueBorder: '#bce6ef',
    hueRgb: '0,129,150',
  },
  {
    n: 3,
    tag: 'The shift',
    name: 'SIMULATE',
    solution: 'REHEARSE',
    shift: 'Practice before it counts in a safe room.',
    detail:
      'AI conversation simulations with persona-based scenarios (100+ scenarios across 200 dimensions) scored on voice and facial-expression signals so people rehearse the moment before it is real.',
    points: [
      'AI conversation sims · 100+ scenarios · 200 dimensions',
      'Persona-based scenarios scored on voice & facial signals',
      'Voice and video, repeated safely',
    ],
    link: '/rehearse',
    linkLabel: 'See a live rehearsal',
    hue: '#e04f7f',
    hueGrad: 'linear-gradient(135deg,#fa6793,#e04f7f)',
    hueTint: '#fff0f4',
    hueBorder: '#ffd7e3',
    hueRgb: '224,79,127',
  },
  {
    n: 4,
    tag: 'The shift',
    name: 'MEASURE',
    solution: 'Skill Framework',
    shift: "Completions don't show readiness.",
    detail:
      'Six behavioural signals resolve into one composite score per skill, tracked back to the framework as the evidence base for workforce planning: where to hire versus where to train.',
    points: [
      'Six signals → one composite score per skill',
      'Workforce planning · hire vs train',
      'Competency heatmap across the cohort',
    ],
    link: '/framework',
    linkLabel: 'See outcomes & metrics',
    hue: '#fa6793',
    hueGrad: 'linear-gradient(135deg,#fa6793,#e04f7f)',
    hueTint: '#fff0f4',
    hueBorder: '#ffd7e3',
    hueRgb: '250,103,147',
  },
];
