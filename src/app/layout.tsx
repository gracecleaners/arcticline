import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageTransition from '@/components/PageTransition'
import FloatingParticles from '@/components/FloatingParticles'
import SmoothScroll from '@/components/SmoothScroll'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Arcticline — Building Offline-First Technology for Africa',
  description: 'Arcticline is an East African technology company building offline-first digital solutions — from payment gateways and POS systems to property platforms and WiFi monetization — designed for African realities.',
  keywords: ['technology', 'offline-first', 'mobile money', 'fintech', 'POS system', 'African tech', 'Arcticline', 'Gulu', 'Uganda'],
  authors: [{ name: 'Arcticline' }],
  openGraph: {
    title: 'Arcticline — Offline-First Technology Built in East Africa',
    description: 'Building offline-first digital solutions for African businesses — payment gateways, POS systems, property platforms, and more.',
    type: 'website',
    siteName: 'Arcticline',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-midnight text-gray-200 antialiased">
        <SmoothScroll />
        <FloatingParticles />
        <div className="relative z-10">
          <Navbar />
          <PageTransition>
            <main>{children}</main>
          </PageTransition>
          <Footer />
        </div>
      </body>
    </html>
  )
}