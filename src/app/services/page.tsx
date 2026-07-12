import { Metadata } from 'next'
import ServicesContent from './ServicesContent'

export const metadata: Metadata = {
  title: 'Services — Arcticline',
  description: 'Explore Arcticline\'s comprehensive technology services including cloud infrastructure, AI & machine learning, custom software development, cybersecurity, and data engineering.',
  keywords: ['cloud services', 'AI solutions', 'software development', 'cybersecurity', 'data engineering', 'tech services'],
  openGraph: {
    title: 'Arcticline Services — Cloud, AI, Development & Security',
    description: 'Comprehensive technology solutions that transform businesses and create competitive advantages.',
    type: 'website',
    siteName: 'Arcticline',
  },
}

export default function ServicesPage() {
  return <ServicesContent />
}