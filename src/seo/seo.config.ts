// ============================================================
// A3CEND SEO + GEO Configuration — v2 (Reviewed & Fixed)
// Central source of truth for all page metadata & JSON-LD schemas
//
// Changes from v1:
// - Added user-requested keywords across relevant pages
// - Removed price:'0' from all Offer schemas (enterprise product, no public price)
// - Added BreadcrumbList consistently to ALL pages
// - Removed misleading/unverifiable featureList numbers from home schema
// - Kept FAQ schema — all Q&As match visible page content
// - Organization schema strengthened with all known public details
// ============================================================

export const SITE = {
  name: 'A3CEND',
  fullName: 'A3CEND — AI-Powered Practice & Readiness Platform',
  url: 'https://a3cend.com',
  company: 'Ascend Business Solutions Pvt. Ltd.',
  email: 'nirmalya.sengupta@a3cend.com',
  address: 'T-Hub, Hyderabad Knowledge City, Telangana 500081, India',
  linkedin: 'https://www.linkedin.com/company/a3cend/',
  logo: 'https://a3cend.com/favicon.png',
  ogImage: 'https://a3cend.com/og-image.png',
  themeColor: '#6C47FF',
  locale: 'en_IN',
};

export type PageKey =
  | 'home'
  | 'about'
  | 'framework'
  | 'rehearse'
  | 'content-orchestrator'
  | 'try-it'
  | 'powertalks'
  | 'contact'
  | 'solutions-leadership'
  | 'solutions-sales'
  | 'solutions-onboarding'
  | 'solutions-compliance'
  | 'privacy'
  | 'terms'
  | 'cookies';

export interface PageSEO {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  ogImage?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  schema: any | any[];
}

// ─── Breadcrumb helper ────────────────────────────────────────
const breadcrumb = (items: { name: string; item: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((x, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: x.name,
    item: x.item,
  })),
});

export const PAGE_SEO: Record<PageKey, PageSEO> = {

  // ── HOME ──────────────────────────────────────────────────
  home: {
    title: 'A3CEND — AI-Powered Practice & Readiness Platform | Leadership & Sales Excellence',
    description:
      'A3CEND is your AI-powered learning OS for enterprise capability building. Practice leadership conversations, sales objections, and workplace skills with AI simulations. Prove readiness with one unified skill framework.',
    keywords:
      'AI-powered learning platform, AI-powered practice platform, enterprise learning platform, employee skill development platform, workplace skills practice, AI workplace skills training, AI roleplay for workplace skills, AI coaching for leaders, leadership development platform, AI leadership development, leadership training platform, leadership communication training, difficult conversation practice, AI sales training, manager training platform, enterprise capability building, sales enablement AI, L&D platform India, practice-led learning, readiness platform',
    canonical: 'https://a3cend.com/',
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'A3CEND',
        url: 'https://a3cend.com',
        description:
          'AI-powered practice and readiness platform for enterprise capability building — sales, leadership, onboarding, and compliance.',
        publisher: { '@type': 'Organization', name: 'Ascend Business Solutions Pvt. Ltd.' },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'A3CEND Learning OS',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        url: 'https://a3cend.com',
        description:
          'Enterprise AI practice platform combining content generation, AI role-play simulations, and skill framework analytics in one unified system.',
        featureList: [
          'AI conversation simulations with diverse avatars',
          'Pre-built practice scenarios across assessed communication skills',
          'Content Orchestrator — ingest once, generate every learning format',
          'Skill Framework with competency matrix and readiness analytics',
          'SELLIQ — pharma and B2B sales AI training',
          'Multi-language support with cultural presets',
          'Microsoft Teams integration',
          'LMS xAPI integration',
        ],
        offers: {
          '@type': 'Offer',
          description: 'Enterprise pricing — contact us for a demo',
        },
        provider: { '@type': 'Organization', name: 'Ascend Business Solutions Pvt. Ltd.', url: 'https://a3cend.com' },
      },
    ],
  },

  // ── ABOUT ─────────────────────────────────────────────────
  about: {
    title: 'About A3CEND — Mission, Vision & Leadership Team | Ascend Business Solutions',
    description:
      "Learn about A3CEND's mission to build practice-led capability at scale. Meet the team behind the AI learning OS built for enterprise leadership, sales, and compliance training. Based in Hyderabad, India.",
    keywords:
      'about A3CEND, Ascend Business Solutions, AI learning company India, enterprise learning platform company, leadership development platform company, AI-powered learning platform India, T-Hub startup Hyderabad, enterprise L&D company, practice-led learning mission, AI coaching company India',
    canonical: 'https://a3cend.com/about',
    schema: [
      breadcrumb([
        { name: 'Home', item: 'https://a3cend.com' },
        { name: 'About', item: 'https://a3cend.com/about' },
      ]),
      {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'About A3CEND',
        url: 'https://a3cend.com/about',
        description:
          'A3CEND is built by Ascend Business Solutions Pvt. Ltd., headquartered at T-Hub, Hyderabad. We build AI-powered capability platforms for enterprise sales, leadership, and compliance training.',
        about: {
          '@type': 'Organization',
          name: 'Ascend Business Solutions Pvt. Ltd.',
          url: 'https://a3cend.com',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'T-Hub, Hyderabad Knowledge City',
            addressLocality: 'Hyderabad',
            addressRegion: 'Telangana',
            postalCode: '500081',
            addressCountry: 'IN',
          },
          contactPoint: { '@type': 'ContactPoint', email: 'nirmalya.sengupta@a3cend.com', contactType: 'customer service' },
        },
      },
    ],
  },

  // ── SKILL FRAMEWORK ───────────────────────────────────────
  framework: {
    title: 'Skill Framework — Enterprise Competency Architecture & Readiness Analytics | A3CEND',
    description:
      "Map, measure, and prove enterprise capability with A3CEND's Skill Framework. Define competency matrices, track readiness scores across cohorts, and generate actionable L&D insights — all in one platform.",
    keywords:
      'enterprise skill framework, competency matrix, employee skill development platform, enterprise learning platform, leadership competency model, sales competency framework, learning analytics, readiness measurement, capability architecture, skill taxonomy, L&D analytics platform, AI-powered learning platform, workplace skills practice',
    canonical: 'https://a3cend.com/framework',
    schema: [
      breadcrumb([
        { name: 'Home', item: 'https://a3cend.com' },
        { name: 'Skill Framework', item: 'https://a3cend.com/framework' },
      ]),
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Skill Framework — A3CEND',
        url: 'https://a3cend.com/framework',
        description: 'Enterprise competency architecture and readiness analytics for L&D teams.',
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is the A3CEND Skill Framework?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "The A3CEND Skill Framework is an enterprise competency architecture that allows L&D teams to define, map, and measure communication and leadership skills. It provides readiness analytics, cohort tracking, and a single source of truth for capability measurement across your organization.",
            },
          },
          {
            '@type': 'Question',
            name: 'How does A3CEND measure readiness?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "A3CEND measures readiness through AI-scored practice sessions mapped to a competency framework. Each session evaluates skill dimensions on a 0–5 scale with behavioral evidence from the transcript, generating a readiness score against the framework. Managers can see cohort-level analytics and identify skill gaps.",
            },
          },
        ],
      },
    ],
  },

  // ── REHEARSE ──────────────────────────────────────────────
  rehearse: {
    title: 'REHEARSE — AI Roleplay & Simulation for Leadership, Sales & Workplace Skills | A3CEND',
    description:
      'Practice difficult workplace conversations with AI avatars that respond like real people. REHEARSE offers pre-built scenarios for leadership conversations, sales objections, performance reviews, and more — with AI-scored feedback.',
    keywords:
      'AI roleplay for workplace skills, AI-powered practice platform, REHEARSE AI, leadership communication training, difficult conversation practice, manager training platform, AI leadership development, leadership development platform, leadership training platform, AI coaching for leaders, workplace skills practice, AI workplace skills training, sales conversation practice, leadership conversation AI, AI avatar training, performance review practice, AI sales training, AI coaching simulation, employee skill development platform',
    canonical: 'https://a3cend.com/rehearse',
    schema: [
      breadcrumb([
        { name: 'Home', item: 'https://a3cend.com' },
        { name: 'REHEARSE', item: 'https://a3cend.com/rehearse' },
      ]),
      {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'REHEARSE by A3CEND',
        applicationCategory: 'EducationalApplication',
        operatingSystem: 'Web',
        url: 'https://a3cend.com/rehearse',
        description:
          "REHEARSE is A3CEND's AI-powered conversation practice platform. Practice difficult workplace conversations with AI avatars across pre-built scenarios for leadership, sales, and communication. Turn-by-turn AI scoring.",
        featureList: [
          'Pre-built practice scenarios for leadership and sales',
          'AI-assessed communication skills',
          'Diverse AI avatars with behavioral personas',
          'Difficulty tiers — Supportive, Realistic, Challenging',
          'Multi-language support with cultural presets',
          'Real-time behavioral shift detection',
          'Manager dashboard and team analytics',
          'Microsoft Teams integration',
          'Calendar-driven meeting prep',
        ],
        offers: {
          '@type': 'Offer',
          description: 'Enterprise pricing — contact us for a demo',
        },
        provider: { '@type': 'Organization', name: 'Ascend Business Solutions Pvt. Ltd.', url: 'https://a3cend.com' },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is REHEARSE by A3CEND?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "REHEARSE is A3CEND's AI conversation practice platform where professionals rehearse difficult workplace scenarios — performance reviews, sales objections, leadership conversations, negotiations — with AI avatars that respond like real people. After each session, AI scores communication skills with behavioral evidence from the transcript.",
            },
          },
          {
            '@type': 'Question',
            name: 'What kinds of conversations can I practise with REHEARSE?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "REHEARSE covers leadership conversations (giving feedback, performance reviews, coaching, managing conflict, delegation), sales conversations (discovery, objection handling, negotiation, closing), presentation practice, meeting preparation, impromptu speaking, and custom scenarios built by your organization.",
            },
          },
        ],
      },
    ],
  },

  // ── CONTENT ORCHESTRATOR ──────────────────────────────────
  'content-orchestrator': {
    title: 'Content Orchestrator — Auto-Generate Every Learning Format from One Source | A3CEND',
    description:
      "Ingest content once and automatically generate e-learning modules, micro-videos, flash cards, assessments, and AI simulations. A3CEND Content Orchestrator is your AI-powered L&D content engine.",
    keywords:
      'content orchestrator AI, AI-powered learning platform, enterprise learning platform, auto-generate learning content, AI e-learning generator, micro-learning AI, L&D content automation, learning content creation AI, training content generator, AI instructional design, rapid content development, employee skill development platform',
    canonical: 'https://a3cend.com/content-orchestrator',
    schema: [
      breadcrumb([
        { name: 'Home', item: 'https://a3cend.com' },
        { name: 'Content Orchestrator', item: 'https://a3cend.com/content-orchestrator' },
      ]),
      {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'A3CEND Content Orchestrator',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        url: 'https://a3cend.com/content-orchestrator',
        description:
          'AI-powered content engine. Ingest PDFs, presentations, and documents once — automatically generate e-learning modules, micro-videos, flash cards, assessments, and AI simulations.',
        featureList: [
          'Single content ingestion, all learning formats as output',
          'E-learning module generation',
          'Micro-video creation with AI narration',
          'Flash card and micro-learning card generation',
          'AI assessment creation',
          'AI simulation scenarios from source content',
          'PDF and presentation document parsing',
        ],
        offers: {
          '@type': 'Offer',
          description: 'Enterprise pricing — contact us for a demo',
        },
        provider: { '@type': 'Organization', name: 'Ascend Business Solutions Pvt. Ltd.', url: 'https://a3cend.com' },
      },
    ],
  },

  // ── TRY IT ────────────────────────────────────────────────
  'try-it': {
    title: 'Try A3CEND Free — Live AI Practice Demo | REHEARSE & Live Presenter',
    description:
      "Experience A3CEND's AI practice platform. Try REHEARSE AI conversation simulation or the Live Presenter tool instantly — start practising in seconds.",
    keywords:
      'try A3CEND, AI-powered practice platform, AI roleplay for workplace skills, REHEARSE demo, live presenter AI, free AI learning demo, AI simulation demo, sales training AI demo, leadership training AI demo, workplace skills practice demo',
    canonical: 'https://a3cend.com/try-it',
    schema: [
      breadcrumb([
        { name: 'Home', item: 'https://a3cend.com' },
        { name: 'Try It', item: 'https://a3cend.com/try-it' },
      ]),
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Try A3CEND — Demo',
        url: 'https://a3cend.com/try-it',
        description: "Try A3CEND's AI practice tools. Experience REHEARSE AI conversation simulation or Live Presenter.",
      },
    ],
  },

  // ── POWERTALKS ────────────────────────────────────────────
  powertalks: {
    title: 'PowerTalks — Expert Leadership & Sales Keynotes | A3CEND',
    description:
      "Access A3CEND's PowerTalks keynote series — expert talks on leadership, sales excellence, organizational capability, and AI-powered learning from industry practitioners.",
    keywords:
      'PowerTalks leadership talks, leadership development platform events, AI leadership development talks, sales keynotes, leadership training talks, enterprise learning talks, L&D expert talks, sales excellence keynotes, A3CEND events, leadership speakers India',
    canonical: 'https://a3cend.com/powertalks',
    schema: [
      breadcrumb([
        { name: 'Home', item: 'https://a3cend.com' },
        { name: 'PowerTalks', item: 'https://a3cend.com/powertalks' },
      ]),
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'PowerTalks — A3CEND',
        url: 'https://a3cend.com/powertalks',
        description: 'A3CEND PowerTalks — a keynote series featuring expert practitioners sharing insights on leadership, sales, and AI-powered enterprise learning.',
      },
    ],
  },

  // ── CONTACT ───────────────────────────────────────────────
  contact: {
    title: 'Contact A3CEND — Book a Demo or Talk to Our Team | Hyderabad, India',
    description:
      "Book a personalized demo of A3CEND's AI practice platform or reach out to our team. Discover how A3CEND can transform leadership, sales, onboarding, and compliance training for your organization.",
    keywords:
      'contact A3CEND, book A3CEND demo, enterprise AI training demo, leadership development platform demo, AI-powered learning platform demo, manager training platform demo, Ascend Business Solutions contact, A3CEND Hyderabad',
    canonical: 'https://a3cend.com/contact',
    schema: [
      breadcrumb([
        { name: 'Home', item: 'https://a3cend.com' },
        { name: 'Contact', item: 'https://a3cend.com/contact' },
      ]),
      {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contact A3CEND',
        url: 'https://a3cend.com/contact',
        description: "Contact Ascend Business Solutions to book a demo of A3CEND's AI-powered practice platform.",
        contactPoint: {
          '@type': 'ContactPoint',
          email: 'nirmalya.sengupta@a3cend.com',
          contactType: 'sales',
          areaServed: ['IN', 'SG', 'AE', 'GB'],
          availableLanguage: ['English'],
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'T-Hub, Hyderabad Knowledge City',
          addressLocality: 'Hyderabad',
          addressRegion: 'Telangana',
          postalCode: '500081',
          addressCountry: 'IN',
        },
      },
    ],
  },

  // ── SOLUTION: LEADERSHIP ──────────────────────────────────
  'solutions-leadership': {
    title: 'Leadership Development — AI-Powered Practice for Managers & Executives | A3CEND',
    description:
      "Build leaders ready for the conversations that matter. A3CEND combines human-led executive programs with REHEARSE AI simulations — practice giving feedback, performance conversations, coaching, conflict management, and executive presence.",
    keywords:
      'leadership development platform, AI leadership development, leadership training platform, AI coaching for leaders, leadership communication training, difficult conversation practice, manager training platform, AI-powered learning platform, AI workplace skills training, AI roleplay for workplace skills, executive coaching AI, performance review training, first-time manager training, leadership AI simulation, management skills training, employee skill development platform, enterprise learning platform',
    canonical: 'https://a3cend.com/solutions/leadership',
    schema: [
      breadcrumb([
        { name: 'Home', item: 'https://a3cend.com' },
        { name: 'Solutions', item: 'https://a3cend.com/solutions/leadership' },
        { name: 'Leadership Development', item: 'https://a3cend.com/solutions/leadership' },
      ]),
      {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'A3CEND Leadership Development Solution',
        url: 'https://a3cend.com/solutions/leadership',
        description:
          'AI-powered leadership development for first-time managers, mid-level leaders, and senior executives. Combines human-led executive programs with REHEARSE AI simulations for high-stakes leadership conversations.',
        brand: { '@type': 'Brand', name: 'A3CEND' },
        offers: {
          '@type': 'Offer',
          description: 'Enterprise pricing — contact us for a demo',
        },
        audience: {
          '@type': 'Audience',
          audienceType: 'Enterprise L&D teams, HR Directors, Leadership Development Managers',
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How does A3CEND support leadership development?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "A3CEND supports leadership development through a 3-step model: INSIGHT (human-led executive programs building self-awareness and frameworks), REHEARSE (AI-powered practice for high-stakes leadership conversations scored turn-by-turn), and REINFORCE (personalized coaching feedback and manager alerts). Practice scenarios cover giving feedback, performance conversations, coaching team members, managing conflict, delegation, and executive presence.",
            },
          },
          {
            '@type': 'Question',
            name: 'What leadership scenarios can managers practise on A3CEND?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Managers can practise giving and receiving feedback, performance conversations, coaching team members, managing conflict, delegating effectively, building trust, communication and influence, managing change, stakeholder management, and decision-making. Senior leaders can practise executive presence, strategic communication, and leading through ambiguity.",
            },
          },
        ],
      },
    ],
  },

  // ── SOLUTION: SALES ───────────────────────────────────────
  'solutions-sales': {
    title: 'Sales Enablement — AI Sales Training, SELLIQ Pharma Practice & B2B Deal Simulation | A3CEND',
    description:
      "Give sales teams a safe environment to rehearse customer conversations, handle objections, and improve under pressure. SELLIQ by A3CEND offers AI doctor personas for pharma sales and B2B deal practice with PEACE framework scoring.",
    keywords:
      'AI sales training, sales enablement AI, sales conversation practice, SELLIQ pharma sales AI, difficult conversation practice, AI-powered practice platform, AI roleplay for workplace skills, objection handling AI, sales training simulation, HCP detailing AI, pharma sales training, AI coaching for leaders, PEACE framework sales, B2B deal practice, medical rep training AI, enterprise learning platform',
    canonical: 'https://a3cend.com/solutions/sales',
    schema: [
      breadcrumb([
        { name: 'Home', item: 'https://a3cend.com' },
        { name: 'Solutions', item: 'https://a3cend.com/solutions/sales' },
        { name: 'Sales & Customer Conversations', item: 'https://a3cend.com/solutions/sales' },
      ]),
      {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'A3CEND SELLIQ — Sales & Customer Conversation Practice',
        url: 'https://a3cend.com/solutions/sales',
        description:
          'AI-powered sales training platform. SELLIQ offers AI physician personas for pharma sales detailing, PEACE framework scoring, HCP objection handling practice, and B2B deal negotiation simulation.',
        brand: { '@type': 'Brand', name: 'A3CEND' },
        offers: {
          '@type': 'Offer',
          description: 'Enterprise pricing — contact us for a demo',
        },
        audience: {
          '@type': 'Audience',
          audienceType: 'Sales teams, Medical Representatives, Pharma sales managers, B2B sales professionals',
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is SELLIQ by A3CEND?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "SELLIQ is A3CEND's specialized AI sales training platform. Medical representatives can practice doctor detailing with AI physician personas scored on the PEACE framework: Discovery, Value Articulation, Objection Handling, Closing, and Call Control. SELLIQ also includes B2B deal practice for enterprise sales teams across SaaS, BFSI, FMCG, and manufacturing.",
            },
          },
          {
            '@type': 'Question',
            name: 'What sales conversations can I practise with A3CEND?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Sales teams can practise discovery conversations, customer questioning, needs identification, product conversations, relationship building, objection and price handling, competitor comparisons, negotiation and contract terms, influencing key buyers, closing commitments, and stakeholder management.",
            },
          },
        ],
      },
    ],
  },

  // ── SOLUTION: ONBOARDING ──────────────────────────────────
  'solutions-onboarding': {
    title: 'Employee Onboarding — Turn Knowledge Into Workplace Readiness with AI Practice | A3CEND',
    description:
      "Don't just onboard employees — get them ready to perform. A3CEND combines content generation with AI simulations so new hires demonstrate capability from Day 1.",
    keywords:
      'AI onboarding platform, employee skill development platform, enterprise learning platform, AI-powered learning platform, new hire readiness, onboarding simulation, role readiness platform, AI workplace skills training, Day 1 readiness, onboarding content generation, new employee training AI, faster onboarding AI',
    canonical: 'https://a3cend.com/solutions/onboarding',
    schema: [
      breadcrumb([
        { name: 'Home', item: 'https://a3cend.com' },
        { name: 'Solutions', item: 'https://a3cend.com/solutions/onboarding' },
        { name: 'Onboarding & Induction', item: 'https://a3cend.com/solutions/onboarding' },
      ]),
      {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'A3CEND Onboarding & Induction Solution',
        url: 'https://a3cend.com/solutions/onboarding',
        description:
          'AI-powered onboarding. New hires learn company knowledge, practise real-world scenarios with AI avatars, receive turn-by-turn feedback, and prove role readiness.',
        brand: { '@type': 'Brand', name: 'A3CEND' },
        offers: {
          '@type': 'Offer',
          description: 'Enterprise pricing — contact us for a demo',
        },
        audience: {
          '@type': 'Audience',
          audienceType: 'HR teams, L&D Managers, Onboarding Coordinators',
        },
      },
    ],
  },

  // ── SOLUTION: COMPLIANCE ──────────────────────────────────
  'solutions-compliance': {
    title: 'Compliance Training — Practice-Led, Verifiable & Behavior-Focused | A3CEND',
    description:
      'Move compliance from awareness to action. A3CEND turns policies and SOPs into scenario-based AI simulations where employees practise applying rules before real-world dilemmas occur.',
    keywords:
      'compliance training AI, AI compliance simulation, policy training AI, AI-powered learning platform, scenario-based compliance, verifiable compliance training, code of conduct training AI, regulatory compliance training, workplace compliance AI, ethics training AI, employee skill development platform, enterprise learning platform, difficult conversation practice',
    canonical: 'https://a3cend.com/solutions/compliance',
    schema: [
      breadcrumb([
        { name: 'Home', item: 'https://a3cend.com' },
        { name: 'Solutions', item: 'https://a3cend.com/solutions/compliance' },
        { name: 'Compliance Training', item: 'https://a3cend.com/solutions/compliance' },
      ]),
      {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'A3CEND Compliance Training Solution',
        url: 'https://a3cend.com/solutions/compliance',
        description:
          'Practice-led compliance training. Convert static policies into AI scenario simulations where employees demonstrate compliant behavior before real dilemmas occur. Move from "course completed" to "behavior demonstrated."',
        brand: { '@type': 'Brand', name: 'A3CEND' },
        offers: {
          '@type': 'Offer',
          description: 'Enterprise pricing — contact us for a demo',
        },
        audience: {
          '@type': 'Audience',
          audienceType: 'Compliance teams, Legal & Risk departments, L&D Managers',
        },
      },
    ],
  },

  // ── LEGAL PAGES ───────────────────────────────────────────
  privacy: {
    title: 'Privacy Policy — A3CEND Data Practices | Ascend Business Solutions',
    description: "Read A3CEND's Privacy Policy to understand how Ascend Business Solutions collects, uses, and protects your personal data.",
    keywords: 'A3CEND privacy policy, Ascend Business Solutions data policy',
    canonical: 'https://a3cend.com/privacy',
    schema: [
      breadcrumb([
        { name: 'Home', item: 'https://a3cend.com' },
        { name: 'Privacy Policy', item: 'https://a3cend.com/privacy' },
      ]),
      { '@context': 'https://schema.org', '@type': 'WebPage', name: 'Privacy Policy — A3CEND', url: 'https://a3cend.com/privacy' },
    ],
  },

  terms: {
    title: 'Terms of Service — A3CEND | Ascend Business Solutions',
    description: 'Read the Terms of Service governing your use of the A3CEND platform by Ascend Business Solutions Pvt. Ltd.',
    keywords: 'A3CEND terms of service, Ascend Business Solutions terms',
    canonical: 'https://a3cend.com/terms',
    schema: [
      breadcrumb([
        { name: 'Home', item: 'https://a3cend.com' },
        { name: 'Terms of Service', item: 'https://a3cend.com/terms' },
      ]),
      { '@context': 'https://schema.org', '@type': 'WebPage', name: 'Terms of Service — A3CEND', url: 'https://a3cend.com/terms' },
    ],
  },

  cookies: {
    title: 'Cookie Policy — A3CEND | Ascend Business Solutions',
    description: "Read A3CEND's Cookie Policy to understand how we use cookies and similar technologies.",
    keywords: 'A3CEND cookie policy, Ascend Business Solutions cookies',
    canonical: 'https://a3cend.com/cookies',
    schema: [
      breadcrumb([
        { name: 'Home', item: 'https://a3cend.com' },
        { name: 'Cookie Policy', item: 'https://a3cend.com/cookies' },
      ]),
      { '@context': 'https://schema.org', '@type': 'WebPage', name: 'Cookie Policy — A3CEND', url: 'https://a3cend.com/cookies' },
    ],
  },
};

// ─── Global Organization Schema (GEO anchor) ─────────────────
// This is injected into every page as a consistent brand identity signal.
// It is also hardcoded in index.html as a static fallback for crawlers
// that do not execute JavaScript.
export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Ascend Business Solutions Pvt. Ltd.',
  alternateName: 'A3CEND',
  url: SITE.url,
  logo: {
    '@type': 'ImageObject',
    url: SITE.logo,
    caption: 'A3CEND — AI-Powered Practice & Readiness Platform',
  },
  description:
    'Ascend Business Solutions Pvt. Ltd. builds A3CEND — an AI-powered practice and readiness platform for enterprise capability building in sales, leadership, onboarding, and compliance.',
  email: SITE.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'T-Hub, Hyderabad Knowledge City',
    addressLocality: 'Hyderabad',
    addressRegion: 'Telangana',
    postalCode: '500081',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: SITE.email,
    contactType: 'customer service',
    areaServed: ['IN', 'SG', 'AE', 'GB'],
    availableLanguage: ['English'],
  },
  sameAs: [SITE.linkedin],
  foundingLocation: { '@type': 'Place', name: 'Hyderabad, India' },
};
