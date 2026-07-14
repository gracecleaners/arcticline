import { Metadata } from 'next'
import ServicesContent from './ServicesContent'

export const metadata: Metadata = {
  title: 'Arcticline Services — Custom Software & Fintech for East Africa',
  description: "Explore Arcticline's technology services including offline-first POS systems (ISM), non-custodial mobile money payment agents (Daraza), custom software development, cloud infrastructure, and data engineering for African businesses.",
  keywords: ['offline-first POS', 'mobile money', 'payment agent', 'non-custodial', 'software development', 'fintech', 'ISM', 'Daraza', 'cloud infrastructure'],
  openGraph: {
    title: 'Arcticline Services — Custom Software & Fintech for East Africa',
    description: "Comprehensive technology solutions purpose-built for African realities — from offline-first business systems to non-custodial mobile money payment agents.",
    type: 'website',
    siteName: 'Arcticline',
  },
}

export default function ServicesPage() {
  return <ServicesContent />
}
