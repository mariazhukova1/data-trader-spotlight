import { createFileRoute } from '@tanstack/react-router';
import { TradingDashboard } from '@/components/trading-dashboard';
export const Route = createFileRoute('/analytics')({
  head: () => ({ meta: [{ title: 'Analytics — Apex' }, { name: 'description', content: 'Explore your analytics with stock charts and market insights in Apex.' }, { property: 'og:title', content: 'Analytics — Apex' }, { property: 'og:description', content: 'Your analytics and stock insights in the Apex trading workspace.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
  component: () => <TradingDashboard view="Analytics" />,
});
