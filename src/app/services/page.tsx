import { Metadata } from 'next'
import ServicesContent from './ServicesContent'

export const metadata: Metadata = {
  title: 'Arcticline Services — Custom Software & Fintech for East Africa',
  description: "Explore Arcticline's technology services including offline-first POS systems (ISM), mobile money payment gateways (Daraza), custom software development, cloud infrastructure, and data engineering for African businesses.",
  keywords: ['offline-first POS', 'mobile money', 'payment gateway', 'software development', 'fintech', 'ISM', 'Daraza', 'cloud infrastructure'],
  openGraph: {
    title: 'Arcticline Services — Custom Software & Fintech for East Africa',
    description: "Comprehensive technology solutions purpose-built for African realities — from offline-first business systems to mobile money payment gateways.",
    type: 'website',
    siteName: 'Arcticline',
  },
}

export default function ServicesPage() {
  return <ServicesContent />
}
