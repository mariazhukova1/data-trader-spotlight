import { createFileRoute } from '@tanstack/react-router';
import { TradingDashboard } from '@/components/trading-dashboard';
export const Route = createFileRoute('/')({
  head: () => ({ meta: [{ title: 'Market Overview — Apex' }, { name: 'description', content: 'Follow stock performance, market movers, and your portfolio in the Apex trading workspace.' }, { property: 'og:title', content: 'Market Overview — Apex' }, { property: 'og:description', content: 'Stock charts, portfolio insights, and market movers in one trading workspace.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
  component: () => <TradingDashboard />,
});
