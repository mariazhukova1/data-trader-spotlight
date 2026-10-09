import { createFileRoute } from '@tanstack/react-router';
import { TradingDashboard } from '@/components/trading-dashboard';
export const Route = createFileRoute('/portfolio')({
  head: () => ({ meta: [{ title: 'Portfolio — Apex' }, { name: 'description', content: 'Explore your portfolio with stock charts and market insights in Apex.' }, { property: 'og:title', content: 'Portfolio — Apex' }, { property: 'og:description', content: 'Your portfolio and stock insights in the Apex trading workspace.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
  component: () => <TradingDashboard view="Portfolio" />,
});
