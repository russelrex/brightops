import type { ReactElement } from 'react'

const ICON_COLOR = '8a9199'

const BRAND_SLUGS: Record<string, string> = {
  React: 'react',
  'React Native': 'react',
  Angular: 'angular',
  'Next.js': 'nextdotjs',
  Vite: 'vite',
  TypeScript: 'typescript',
  JavaScript: 'javascript',
  HTML: 'html5',
  CSS: 'css',
  'Node.js': 'nodedotjs',
  Express: 'express',
  MongoDB: 'mongodb',
  MySQL: 'mysql',
  Supabase: 'supabase',
  Ionic: 'ionic',
  Zapier: 'zapier',
  'Monday.com': 'mondaydotcom',
  Slack: 'slack',
  WordPress: 'wordpress',
  Shopify: 'shopify',
  HubSpot: 'hubspot',
}

type FallbackKind =
  | 'workflow'
  | 'chart'
  | 'calendar'
  | 'funnel'
  | 'platform'
  | 'automation'
  | 'generic'

const FALLBACK_KINDS: Record<string, FallbackKind> = {
  GoHighLevel: 'platform',
  Skool: 'platform',
  Skoot: 'platform',
  Funnels: 'funnel',
  'Airbnb Systems': 'platform',
  'CRM workflows': 'workflow',
  'Lead follow-up automation': 'automation',
  'Appointment setting flows': 'calendar',
  'Task management systems': 'workflow',
  'Reporting dashboards': 'chart',
  'Client onboarding systems': 'platform',
}

function FallbackSvg({ kind }: { kind: FallbackKind }) {
  const paths: Record<FallbackKind, ReactElement> = {
    workflow: (
      <>
        <rect x="3" y="3" width="5" height="5" rx="0.5" />
        <rect x="10" y="10" width="5" height="5" rx="0.5" />
        <path d="M8 5.5h2M11 8v2" />
      </>
    ),
    chart: (
      <>
        <path d="M3 14V6M7 14V9M11 14V4M15 14v-3" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="4" width="12" height="11" rx="1" />
        <path d="M3 8h12M7 2v3M11 2v3" />
      </>
    ),
    funnel: (
      <path d="M4 4h10l-4 5v5H8V9L4 4z" />
    ),
    platform: (
      <>
        <rect x="3" y="3" width="12" height="12" rx="1.5" />
        <path d="M7 8h6M7 11h4" />
      </>
    ),
    automation: (
      <path d="M4 9c2-3 4-3 6 0s4 3 6 0M4 12h10" />
    ),
    generic: (
      <>
        <circle cx="9" cy="9" r="6" />
        <path d="M9 6v6M6 9h6" />
      </>
    ),
  }

  return (
    <svg
      className="toolIcon toolIcon--fallback"
      viewBox="0 0 18 18"
      width="28"
      height="28"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
    >
      {paths[kind]}
    </svg>
  )
}

interface ToolIconProps {
  name: string
}

export function ToolIcon({ name }: ToolIconProps) {
  const slug = BRAND_SLUGS[name]

  if (slug) {
    return (
      <img
        className="toolIcon toolIcon--brand"
        src={`https://cdn.simpleicons.org/${slug}/${ICON_COLOR}`}
        alt=""
        width={28}
        height={28}
        loading="lazy"
        decoding="async"
      />
    )
  }

  return <FallbackSvg kind={FALLBACK_KINDS[name] ?? 'generic'} />
}
