import { createFileRoute } from '@tanstack/react-router';
import { TradingDashboard } from '@/components/trading-dashboard';
export const Route = createFileRoute('/watchlist')({
  head: () => ({ meta: [{ title: 'Watchlist — Apex' }, { name: 'description', content: 'Explore your watchlist with stock charts and market insights in Apex.' }, { property: 'og:title', content: 'Watchlist — Apex' }, { property: 'og:description', content: 'Your watchlist and stock insights in the Apex trading workspace.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
  component: () => <TradingDashboard view="Watchlist" />,
});
