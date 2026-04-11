export const SITE_CONFIG = {
  name: 'Schlosser Digest',
  description: 'Curated insights on luxury living, refined tastes, and timeless sophistication. Your guide to the finer things in life.',
  url: 'https://schlosser.biz',
  language: 'en-US',
  defaultAuthor: 'Schlosser Editorial',
  organization: {
    name: 'Schlosser Digest',
    email: 'editor@schlosser.biz',
    logo: '/logo.png',
    sameAs: [],
  },
} as const;

export type LayoutVariant = 'grid' | 'list' | 'magazine' | 'minimal';
export type SidebarPosition = 'left' | 'right' | 'none';
export type HeaderStyle = 'standard' | 'centered' | 'minimal';
export type FooterStyle = 'standard' | 'compact' | 'none';

const getPrefixedClass = (className: string): string => {
  return `${LAYOUT_CONFIG.htmlStructure.prefix}-${className}`;
};

export const LAYOUT_CONFIG = {
  homeVariant: 'magazine' as LayoutVariant,
  sidebarPosition: 'none' as SidebarPosition,
  headerStyle: 'minimal' as HeaderStyle,
  footerStyle: 'compact' as FooterStyle,
  showSidebar: false,
  showTags: true,
  showAuthor: true,
  showDates: true,
  showReadingTime: true,
  showRelatedPosts: true,
  showBreadcrumbs: false,
  showSearch: true,
  postsPerPage: 9,
  postsPerRow: 3,
  relatedPostsCount: 3,
  maxTagsInCloud: 20,
  htmlStructure: {
    mainId: 'schloss-main',
    wrapperClass: 'schloss-wrapper',
    articleClass: 'schloss-card',
    headingClass: 'schloss-heading',
    prefix: 'schloss',
  },
  colors: {
    headerBg: 'bg-slate-950',
    headerBorder: 'border-b border-amber-900/30',
    sidebarBg: 'bg-slate-900',
    footerBg: 'bg-slate-950',
    footerText: 'text-slate-400',
    cardBg: 'bg-slate-900/50',
    cardBorder: 'border border-amber-900/20',
    linkColor: 'text-amber-500',
    linkHover: 'hover:text-amber-400',
  },
  getPrefixedClass,
} as const;

export const SEO_CONFIG = {
  defaultTitle: '%s | Schlosser Digest',
  titleTemplate: '%s',
  defaultOgImage: '/og-default.jpg',
  twitterHandle: '@schlosserdigest',
  twitterCardType: 'summary_large_image',
  googleSiteVerification: '',
  bingSiteVerification: '',
  yandexVerification: '',
  robotsDefault: 'index, follow',
  trailingSlash: true,
} as const;

export function getFullUrl(path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const baseUrl = SITE_CONFIG.url.endsWith('/') ? SITE_CONFIG.url.slice(0, -1) : SITE_CONFIG.url;
  return `${baseUrl}${cleanPath}`;
}

export function getPaginationPath(page: number): string {
  if (page === 1) return '/';
  return `/page/${page}/`;
}
