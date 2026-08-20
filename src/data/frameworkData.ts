// Data structures for Framework & Analytics Page

export const ENTERPRISE_LIBRARIES = [
  {
    id: 'Leadership',
    name: 'Leadership & 1:1 Coaching',
    subtitle: 'High-stakes manager feedback & difficult conversations',
    iconType: 'people',
    iconBg: 'bg-blue-50 text-blue-500 border-blue-100',
    assessments: [
      {
        type: 'AI Voice Roleplay',
        title: 'Manager Rating Pushback & PIP Conversation',
        desc: 'Branching voice simulation managing defensive team member responses',
        score: '3.4 / 4.0',
        badge: 'L3 Proficient',
        dimensions: '14 Scored Dimensions',
      },
      {
        type: 'Signal Diagnostic',
        title: 'Empathy & Psychological Safety Diagnostic',
        desc: 'Pre-session baseline analyzing active listening & vocal inflection cues',
        score: '3.1 / 4.0',
        badge: 'L3 Proficient',
        dimensions: '8 Signal Signals',
      },
      {
        type: 'Branching Scenario',
        title: 'Cross-Functional Stakeholder Negotiation',
        desc: 'Multi-turn interactive scenario securing alignment across conflicting priorities',
        score: '2.9 / 4.0',
        badge: 'L2 Developing',
        dimensions: '12 Scored Dimensions',
      },
    ],
  },
  {
    id: 'Sales',
    name: 'Sales & HCP Detailing',
    subtitle: 'Objection handling & clinical value proposition pitching',
    iconType: 'headset',
    iconBg: 'bg-purple-50 text-purple-500 border-purple-100',
    assessments: [
      {
        type: 'AI Voice Roleplay',
        title: 'HCP Physician Clinical Trial Detailing',
        desc: 'High-stakes medical detailing defending efficacy vs side-effect profiles',
        score: '3.6 / 4.0',
        badge: 'L4 Mastery',
        dimensions: '18 Clinical Dimensions',
      },
      {
        type: 'Branching Scenario',
        title: 'Commercial Price & Budget Pushback',
        desc: 'Handling procurement objections & contract terms under pressure',
        score: '3.2 / 4.0',
        badge: 'L3 Proficient',
        dimensions: '10 Detailing Signals',
      },
      {
        type: 'Signal Diagnostic',
        title: 'Competitive Differentiating Assessment',
        desc: 'Rapid diagnostic checking positioning vs primary market alternatives',
        score: '2.8 / 4.0',
        badge: 'L2 Developing',
        dimensions: '6 Scored Dimensions',
      },
    ],
  },
  {
    id: 'Compliance',
    name: 'Compliance & Governance',
    subtitle: 'Mandatory policy, ethics & risk escalation protocols',
    iconType: 'shield',
    iconBg: 'bg-pink-50 text-pink-500 border-pink-100',
    assessments: [
      {
        type: 'Signal Diagnostic',
        title: 'GDPR & Data Privacy Breach Escalation',
        desc: 'Turn-by-turn protocol verification for immediate reporting flows',
        score: '3.8 / 4.0',
        badge: 'L4 Mastery',
        dimensions: '16 Regulatory Signals',
      },
      {
        type: 'Branching Scenario',
        title: 'Anti-Bribery & Ethics Policy Scenario',
        desc: 'Identifying subtle compliance risks in vendor & partner interactions',
        score: '3.5 / 4.0',
        badge: 'L4 Mastery',
        dimensions: '12 Scored Dimensions',
      },
      {
        type: 'AI Voice Roleplay',
        title: 'Whistleblower Complaint Intake Simulation',
        desc: 'Empathetic, objective intake roleplay adhering to legal guidelines',
        score: '3.2 / 4.0',
        badge: 'L3 Proficient',
        dimensions: '14 Protocol Signals',
      },
    ],
  },
  {
    id: 'Onboarding',
    name: 'Onboarding & Ramp-Up',
    subtitle: '30-60-90 day milestone readiness & time-to-productivity',
    iconType: 'gear',
    iconBg: 'bg-amber-50 text-amber-500 border-amber-100',
    assessments: [
      {
        type: 'Signal Diagnostic',
        title: '30-Day Culture & Values Articulation Check',
        desc: 'Checking baseline fluency in core company mission & strategic narrative',
        score: '3.3 / 4.0',
        badge: 'L3 Proficient',
        dimensions: '10 Culture Signals',
      },
      {
        type: 'Branching Scenario',
        title: 'SOP & Operational Tool Navigation',
        desc: 'Simulated walkthrough resolving common day-to-day workflow roadblocks',
        score: '3.1 / 4.0',
        badge: 'L3 Proficient',
        dimensions: '8 Scored Dimensions',
      },
      {
        type: 'AI Voice Roleplay',
        title: '60-Day Self-Directed Pitch Check',
        desc: 'Voice simulation presenting first key project update to manager',
        score: '2.7 / 4.0',
        badge: 'L2 Developing',
        dimensions: '12 Scored Dimensions',
      },
    ],
  },
  {
    id: 'Custom',
    name: 'Custom Enterprise Framework',
    subtitle: 'Architect custom role taxonomies mapped to internal KPIs',
    iconType: 'monitor',
    iconBg: 'bg-emerald-50 text-emerald-500 border-emerald-100',
    assessments: [
      {
        type: 'AI Voice Roleplay',
        title: 'Executive Stakeholder Alignment Roleplay',
        desc: 'Custom-built voice practice tailored to enterprise strategic priorities',
        score: '3.5 / 4.0',
        badge: 'L4 Mastery',
        dimensions: '15 Custom Signals',
      },
      {
        type: 'Branching Scenario',
        title: 'Change Management Communication Module',
        desc: 'Role-specific scenario testing message clarity during re-orgs',
        score: '3.1 / 4.0',
        badge: 'L3 Proficient',
        dimensions: '11 Scored Dimensions',
      },
      {
        type: 'Signal Diagnostic',
        title: 'Proprietary Skill Diagnostic Check',
        desc: 'Turn-by-turn evaluation against internal competency rubrics',
        score: '2.9 / 4.0',
        badge: 'L2 Developing',
        dimensions: '9 Scored Dimensions',
      },
    ],
  },
];

export const SKILL_FRAMEWORK_DATA: Record<string, Array<{ category: string; skills: Array<{ name: string; level: string; isL4?: boolean }> }>> = {
  'Leadership & 1:1 Coaching': [
    {
      category: 'Coaching & Development',
      skills: [
        { name: 'Active Listening & Cue Spotting', level: 'L3' },
        { name: 'Constructive Feedback Delivery', level: 'L3' },
      ],
    },
    {
      category: 'Difficult Conversations',
      skills: [
        { name: 'Rating Pushback De-escalation', level: 'L4', isL4: true },
        { name: 'Holding Accountability', level: 'L3' },
      ],
    },
    {
      category: 'Performance & Delegation',
      skills: [
        { name: 'Setting Clear 30-60-90 Expectations', level: 'L3' },
      ],
    },
  ],

  'Sales & HCP Detailing': [
    {
      category: 'Clinical Detailing',
      skills: [
        { name: 'HCP Physician Efficacy Framing', level: 'L4', isL4: true },
        { name: 'Clinical Trial Evidence Presentation', level: 'L3' },
      ],
    },
    {
      category: 'Commercial Objections',
      skills: [
        { name: 'Price & Contract Pushback', level: 'L3' },
        { name: 'Competitive Differentiating', level: 'L3' },
      ],
    },
  ],

  'Compliance & Governance': [
    {
      category: 'Regulatory Protocols',
      skills: [
        { name: 'GDPR & Privacy Breach Response', level: 'L4', isL4: true },
        { name: 'Anti-Bribery & Ethics Enforcement', level: 'L4', isL4: true },
      ],
    },
    {
      category: 'Incident Escalation',
      skills: [
        { name: 'Whistleblower Intake Flow', level: 'L3' },
        { name: 'Audit Documentation Hygiene', level: 'L3' },
      ],
    },
  ],

  'Onboarding & Ramp-Up': [
    {
      category: 'Ramp-Up Milestones',
      skills: [
        { name: 'Company Mission & Story Articulation', level: 'L3' },
        { name: 'Tool & Operational Fluency', level: 'L3' },
        { name: 'Self-Directed Problem Solving', level: 'L4', isL4: true },
      ],
    },
  ],

  'Custom Enterprise Framework': [
    {
      category: 'Executive Strategy',
      skills: [
        { name: 'Executive Stakeholder Alignment', level: 'L4', isL4: true },
        { name: 'Change Management Communication', level: 'L3' },
        { name: 'Conflict Resolution & De-escalation', level: 'L3' },
      ],
    },
  ],
};

export const USER_ANALYTICS_COHORTS = {
  '100': {
    label: '100 users',
    cohortTitle: 'User analytics · 100-user cohort',
    compositeScore: '3.4',
    roles: [
      { role: 'Individual contributor', score: '3.5', width: '88%' },
      { role: 'Project manager', score: '3.3', width: '82%' },
      { role: 'Manager', score: '3.2', width: '80%' },
      { role: 'Senior manager', score: '3.0', width: '75%' },
    ],
    stats: [
      { v: '91%', k: 'Completion' },
      { v: '95%', k: 'Active users' },
      { v: '480', k: 'Sessions' },
      { v: '3', k: 'Alerts' },
    ],
  },
  '500': {
    label: '500 users',
    cohortTitle: 'User analytics · 500-user cohort',
    compositeScore: '3.1',
    roles: [
      { role: 'Individual contributor', score: '3.3', width: '83%' },
      { role: 'Project manager', score: '3.1', width: '78%' },
      { role: 'Manager', score: '3.0', width: '75%' },
      { role: 'Senior manager', score: '2.7', width: '68%' },
    ],
    stats: [
      { v: '86%', k: 'Completion' },
      { v: '92%', k: 'Active users' },
      { v: '1.2k', k: 'Sessions' },
      { v: '14', k: 'Alerts' },
    ],
  },
};

export const CONTENT_ANALYTICS_DATA = {
  cards: [
    { value: '48', delta: '▲ 9', label: 'Modules produced', deltaColor: 'text-emerald-600' },
    { value: '71%', delta: '▲ 6%', label: 'Source reuse rate', deltaColor: 'text-emerald-600' },
    { value: '2.3d', delta: '▼ 1.4d', label: 'Avg. build time', deltaColor: 'text-brand-600' },
    { value: '4.5/5', delta: '▲ 0.3', label: 'Avg. learner rating', deltaColor: 'text-emerald-600' },
  ],
  formats: [
    { name: 'e-Learning', n: '18', width: '85%' },
    { name: 'Live presenter', n: '11', width: '60%' },
    { name: 'Micro-videos', n: '9', width: '48%' },
    { name: 'Cards', n: '6', width: '32%' },
    { name: 'Assessments', n: '4', width: '22%' },
  ],
};
