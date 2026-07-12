import { Metadata } from 'next'
import PortfolioContent from './PortfolioContent'

export const metadata: Metadata = {
  title: 'Portfolio — Arcticline',
  description: 'Explore Arcticline\'s portfolio of successful projects including Daraza Payment Gateway, ISM Business OS, PayLink, WiFi Manager, My Next Home, and Shukran Foods — showcasing our expertise in fintech, offline-first platforms, and e-commerce across East Africa.',
  keywords: ['portfolio', 'case studies', 'fintech', 'payment gateway', 'offline-first', 'business OS', 'e-commerce', 'mobile money', 'POS system'],
  openGraph: {
    title: 'Arcticline Portfolio — Projects That Inspire',
    description: 'A showcase of our finest work — from payment gateways to offline-first business systems that transform how companies operate across East Africa.',
    type: 'website',
    siteName: 'Arcticline',
  },
}

export default function PortfolioPage() {
  return <PortfolioContent />
}