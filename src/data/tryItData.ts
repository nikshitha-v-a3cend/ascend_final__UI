export const TRY_IT_TOOLS = [
  {
    id: 'presenter',
    kicker: 'LIVE PRESENTER',
    time: '~30 sec',
    title: 'Build a live AI class',
    body: 'Pick a topic and watch an AI presenter teach it on camera, with slides and an assessment behind it.',
    hue: 'var(--brand-600)',
  },
  {
    id: 'sim',
    kicker: 'SIMULATION',
    time: '~3 min',
    title: 'Rehearse and get scored',
    body: 'Talk to an AI character who pushes back, then read your score on four behaviours.',
    hue: 'var(--brand-600)',
  },
];

export const PRESENTER_TOPICS = [
  {
    id: 'feedback',
    label: 'Delivering Tough Feedback Under Pressure',
    meta: 'Management · 12 slides · 4-min class',
  },
  {
    id: 'objections',
    label: 'Overcoming HCP Objections in Pharma Sales',
    meta: 'Sales · 10 slides · 3-min class',
  },
  {
    id: 'onboarding',
    label: 'New Hire Compliance & Policy Essentials',
    meta: 'Induction · 15 slides · 5-min class',
  },
];

export const AUDIENCE_OPTIONS = [
  { id: 'first_time', label: 'First-time Managers' },
  { id: 'senior_execs', label: 'Senior Executives' },
  { id: 'field_reps', label: 'Field Sales Reps' },
];

export const SIMULATION_PERSONAS = [
  {
    id: 'defensive',
    tag: 'MANAGEMENT',
    name: 'Defensive Direct Report',
    body: 'Jordan disagrees with his quarterly rating and blames cross-functional team delays.',
  },
  {
    id: 'skeptical',
    tag: 'SALES',
    name: 'Skeptical HCP / Doctor',
    body: 'Dr. Ramesh challenges efficacy data and questions your new clinical study methodology.',
  },
  {
    id: 'peer_conflict',
    tag: 'LEADERSHIP',
    name: 'Pushy Peer Leader',
    body: 'Sarah demands resource reallocation mid-quarter without budget alignment.',
  },
];

export const SIMULATION_LEVELS = [
  { id: 'balanced', label: 'Balanced Pushback (Standard)' },
  { id: 'challenging', label: 'High Resistance (Hard)' },
  { id: 'cooperative', label: 'Cooperative (Mild)' },
];
