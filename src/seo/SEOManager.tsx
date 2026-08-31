import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { PAGE_SEO, ORGANIZATION_SCHEMA, SITE, type PageKey } from './seo.config';

// Map routes to page keys
const ROUTE_MAP: Record<string, PageKey> = {
  '/': 'home',
  '/about': 'about',
  '/framework': 'framework',
  '/rehearse': 'rehearse',
  '/content-orchestrator': 'content-orchestrator',
  '/try-it': 'try-it',
  '/try/live-presenter': 'try-it',
  '/try/simulation': 'try-it',
  '/powertalks': 'powertalks',
  '/contact': 'contact',
  '/solutions/leadership': 'solutions-leadership',
  '/solutions/sales': 'solutions-sales',
  '/solutions/onboarding': 'solutions-onboarding',
  '/solutions/compliance': 'solutions-compliance',
  '/privacy': 'privacy',
  '/privacy-policy': 'privacy',
  '/terms': 'terms',
  '/terms-of-service': 'terms',
  '/cookies': 'cookies',
  '/cookie-policy': 'cookies',
};

export const SEOManager: React.FC = () => {
  const { pathname } = useLocation();
  const pageKey = ROUTE_MAP[pathname] ?? 'home';
  const seo = PAGE_SEO[pageKey];
  const ogImage = seo.ogImage ?? SITE.ogImage;

  // Render schema(s) as JSON-LD
  const schemas = Array.isArray(seo.schema) ? seo.schema : [seo.schema];

  return (
    <Helmet>
      {/* ── Primary Meta ── */}
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="author" content={SITE.company} />
      <link rel="canonical" href={seo.canonical} />

      {/* ── Open Graph ── */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${SITE.name} — AI-Powered Practice & Readiness Platform`} />
      <meta property="og:locale" content={SITE.locale} />

      {/* ── Twitter Card ── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={`${SITE.name} — AI-Powered Practice & Readiness Platform`} />

      {/* ── JSON-LD: Page-specific schemas ── */}
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}

      {/* ── JSON-LD: Global Organization schema (GEO) ── */}
      <script type="application/ld+json">
        {JSON.stringify(ORGANIZATION_SCHEMA)}
      </script>
    </Helmet>
  );
};
