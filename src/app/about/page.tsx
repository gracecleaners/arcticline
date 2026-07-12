import { Metadata } from 'next'
import AboutContent from './AboutContent'

export const metadata: Metadata = {
  title: 'About Us — Arcticline',
  description: 'Learn about Arcticline\'s mission, values, team, and journey to becoming a global technology leader in digital transformation and innovation.',
  keywords: ['about Arcticline', 'tech company', 'digital transformation', 'innovation', 'team', 'mission', 'values'],
  openGraph: {
    title: 'About Arcticline — Engineering the Future',
    description: 'Learn about our mission, values, team, and journey to becoming a global technology leader.',
    type: 'website',
    siteName: 'Arcticline',
  },
}

export default function AboutPage() {
  return <AboutContent />
}