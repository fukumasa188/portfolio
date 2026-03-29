'use client';

import dynamic from 'next/dynamic';

const PortfolioSection = dynamic(
  () => import('@/components/portfolio-section'),
  { ssr: false }
);

export default function PortfolioLoader() {
  return <PortfolioSection />;
}
