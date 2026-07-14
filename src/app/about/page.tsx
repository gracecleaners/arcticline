import { Metadata } from 'next'
import AboutContent from './AboutContent'

export const metadata: Metadata = {
  title: 'About Arcticline — Custom Software & Fintech for East Africa',
  description: "Learn about Arcticline's mission, values, team, and journey — from our founding in Gulu, Uganda to building offline-first technology solutions that power businesses across East Africa.",
  keywords: ['about Arcticline', 'African tech startup', 'offline-first', 'Gulu Uganda', 'fintech', 'mission', 'values'],
  openGraph: {
    title: 'About Arcticline — Custom Software & Fintech for East Africa',
    description: "Learn about our mission, values, team, and journey to build world-class technology that works for African businesses.",
    type: 'website',
    siteName: 'Arcticline',
  },
}

export default function AboutPage() {
  return <AboutContent />
}
