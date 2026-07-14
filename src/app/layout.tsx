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
  title: 'Arcticline — Custom Software & Fintech for East Africa',
  description: 'Arcticline builds custom software and fintech solutions for East African businesses — payment gateways, POS systems, property platforms, and enterprise tools designed for African realities.',
  keywords: ['technology', 'offline-first', 'mobile money', 'fintech', 'software', 'POS system', 'African tech', 'Arcticline', 'Gulu', 'Uganda'],
  authors: [{ name: 'Arcticline' }],
  openGraph: {
    title: 'Arcticline — Custom Software & Fintech for East Africa',
    description: 'Custom software and fintech solutions for East African businesses — payment gateways, POS systems, property platforms, and enterprise tools.',
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