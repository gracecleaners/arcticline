import { Metadata } from 'next'
import PortfolioContent from './PortfolioContent'

export const metadata: Metadata = {
  title: 'Portfolio — Arcticline',
  description: 'Explore Arcticline\'s portfolio of successful projects including FinVault, HealthPulse, CloudScale, SmartAssist, and DataFlow — showcasing our expertise across web, mobile, cloud, AI, and data.',
  keywords: ['portfolio', 'case studies', 'web development', 'mobile apps', 'cloud migration', 'AI platform', 'analytics'],
  openGraph: {
    title: 'Arcticline Portfolio — Projects That Inspire',
    description: 'A showcase of our finest work — from disruptive startups to enterprise transformations.',
    type: 'website',
    siteName: 'Arcticline',
  },
}

export default function PortfolioPage() {
  return <PortfolioContent />
}