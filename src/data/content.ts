export interface ServiceCard {
  code: string
  title: string
  body: string
  image: string
}

export interface TechCategory {
  code: string
  title: string
  tools: string[]
}

export interface ProcessStep {
  num: string
  title: string
  body: string
}

export interface PartnerRole {
  label: string
  focus: string
}

export interface TeamMember {
  code: string
  role: string
  label: string
  name: string
  bio: string
  responsibilities: string[]
  image: string
  figureLabel: string
}

export const SERVICE_CARDS: ServiceCard[] = [
  {
    code: 'S.01',
    title: 'Full Stack Development',
    body: 'We build custom websites, web apps, dashboards, portals, and business platforms using modern frontend and backend technologies.',
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1600&q=80',
  },
  {
    code: 'S.02',
    title: 'Mobile App Development',
    body: 'We create mobile apps and cross-platform experiences for businesses that need customer-facing or internal mobile solutions.',
    image:
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1600&q=80',
  },
  {
    code: 'S.03',
    title: 'Automation Systems',
    body: 'We automate repetitive tasks, lead follow-ups, workflows, notifications, and admin processes so businesses can save time and reduce manual work.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80',
  },
  {
    code: 'S.04',
    title: 'CRM Setup & Optimization',
    body: 'We set up and improve CRM systems for lead management, pipelines, appointments, follow-ups, and customer communication.',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80',
  },
  {
    code: 'S.05',
    title: 'Funnels & Landing Pages',
    body: 'We design and build high-converting funnels, landing pages, lead capture pages, and sales flows for campaigns and offers.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80',
  },
  {
    code: 'S.06',
    title: 'Operations Systems',
    body: 'We organize business workflows using tools, dashboards, SOPs, task boards, and communication systems so teams can execute clearly.',
    image:
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1600&q=80',
  },
  {
    code: 'S.07',
    title: 'Website Development',
    body: 'We create fast, responsive, modern websites for service businesses, startups, ecommerce brands, communities, and local businesses.',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&q=80',
  },
  {
    code: 'S.08',
    title: 'Ecommerce & Shopify',
    body: 'We build and optimize Shopify stores, product pages, checkout flows, and ecommerce systems for online sellers.',
    image:
      'https://images.unsplash.com/photo-1472851294608-062f824d1469?w=1600&q=80',
  },
  {
    code: 'S.09',
    title: 'Community & Platform Support',
    body: 'We help set up and manage platforms like Skool, Skoot, Slack, and other community or client delivery systems.',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80',
  },
  {
    code: 'S.10',
    title: 'Airbnb & Booking Systems',
    body: 'We support Airbnb-related systems, landing pages, workflows, automations, and guest communication setups.',
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=80',
  },
]

export const TECH_STACK: TechCategory[] = [
  {
    code: 'T.01',
    title: 'Frontend',
    tools: [
      'React',
      'Angular',
      'Next.js',
      'Vite',
      'TypeScript',
      'JavaScript',
      'HTML',
      'CSS',
    ],
  },
  {
    code: 'T.02',
    title: 'Backend',
    tools: ['Node.js', 'Express', 'MongoDB', 'MySQL', 'Supabase'],
  },
  {
    code: 'T.03',
    title: 'Mobile',
    tools: ['React Native', 'Ionic'],
  },
  {
    code: 'T.04',
    title: 'Business Tools',
    tools: [
      'GoHighLevel',
      'Skool',
      'Skoot',
      'Zapier',
      'Monday.com',
      'Slack',
      'Funnels',
      'WordPress',
      'Shopify',
      'Airbnb Systems',
    ],
  },
  {
    code: 'T.05',
    title: 'Automation & Operations',
    tools: [
      'CRM workflows',
      'Lead follow-up automation',
      'Appointment setting flows',
      'Task management systems',
      'Reporting dashboards',
      'Client onboarding systems',
    ],
  },
]

export const PROCESS_STEPS: ProcessStep[] = [
  {
    num: '01',
    title: 'Discover',
    body: 'We learn your goals, current tools, workflow gaps, and what your business needs to improve.',
  },
  {
    num: '02',
    title: 'Plan',
    body: 'We map the right solution, whether it is a website, CRM, automation, funnel, mobile app, or custom system.',
  },
  {
    num: '03',
    title: 'Build',
    body: 'We develop, connect, and configure the tools, pages, automations, dashboards, or apps needed.',
  },
  {
    num: '04',
    title: 'Test',
    body: 'We check functionality, responsiveness, workflows, integrations, and user experience.',
  },
  {
    num: '05',
    title: 'Launch',
    body: 'We help deploy the system and make sure your team understands how to use it.',
  },
  {
    num: '06',
    title: 'Optimize',
    body: 'We improve based on real usage, business needs, and performance signals.',
  },
]

export const TEAM: TeamMember[] = [
  {
    code: 'T.01',
    role: 'Operations & Automation Lead',
    label: 'PARTNER · OPS + CLIENT SUCCESS',
    name: '[ Her first name ]',
    bio: 'Handles client communication, project planning, workflow automation, and operations. The strategic layer that keeps every project on track and every client informed.',
    responsibilities: [
      'Client communication & onboarding',
      'Automation design & setup',
      'Project planning & timelines',
      'CRM configuration',
      'Process documentation',
    ],
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
    figureLabel: 'FIG. 01 — PARTNER / OPS',
  },
  {
    code: 'T.02',
    role: 'Full Stack & Mobile Development Lead',
    label: 'PARTNER · DEV + INTEGRATION',
    name: '[ Your first name ]',
    bio: 'Builds the products — websites, web apps, mobile applications, and system integrations. Handles all technical architecture, development, and third-party API connectivity.',
    responsibilities: [
      'Website & web app development',
      'Full stack engineering',
      'Mobile app development',
      'System integrations & APIs',
      'Technical architecture',
    ],
    image:
      'https://images.unsplash.com/photo-1537511446984-935f663eb1f4?w=800&q=80',
    figureLabel: 'FIG. 02 — PARTNER / DEV',
  },
]

export const PARTNER_ROLES: PartnerRole[] = [
  {
    label: 'Partner 01',
    focus:
      'DevOps, client communication, appointment setting, advertising, planning, and operations strategy.',
  },
  {
    label: 'Partner 02',
    focus:
      'Full stack website and app development, databases, and system implementation.',
  },
]

export const WHY_POINTS = [
  'Development and operations in one team',
  'Modern full stack and mobile development',
  'Automation-first approach',
  'CRM, funnel, and workflow experience',
  'Practical systems built for real business use',
  'Startup-friendly and growth-focused',
  'Flexible support for websites, apps, and operations',
] as const

export const NAV_ITEMS = [
  ['00', 'Home', '#top'],
  ['01', 'Services', '#services'],
  ['02', 'Tech Stack', '#tech-stack'],
  ['03', 'Process', '#process'],
  ['04', 'About', '#about'],
  ['06', 'Team', '#team'],
  ['07', 'Contact', '#contact'],
] as const

export const MARQUEE_ITEMS = [
  '● FULL STACK DEVELOPMENT',
  '● MOBILE APPS',
  '● WORKFLOW AUTOMATION',
  '● CRM SETUP',
  '● FUNNELS & LANDING PAGES',
  '● SHOPIFY & ECOMMERCE',
  '● OPERATIONS SYSTEMS',
] as const

export const HERO_SPECS = [
  ['A', 'PARTNERS', '2'],
  ['B', 'SERVICES', '10+'],
  ['C', 'FOCUS', 'Full Stack'],
  ['D', 'MODEL', 'Dev + Ops'],
] as const

export const CONTACT_INTERESTS = [
  'Full stack development',
  'Mobile app development',
  'Automation systems',
  'CRM setup',
  'Funnels & landing pages',
  'Operations systems',
  'Website development',
  'Ecommerce & Shopify',
  'General inquiry',
] as const
