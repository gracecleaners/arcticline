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
  title: 'Arcticline — Engineering the Future of Technology',
  description: 'Arcticline is a cutting-edge technology company building the next generation of digital experiences. We craft innovative solutions that transform businesses and delight users worldwide.',
  keywords: ['technology', 'innovation', 'software', 'digital transformation', 'AI', 'cloud', 'Arcticline'],
  authors: [{ name: 'Arcticline' }],
  openGraph: {
    title: 'Arcticline — Engineering the Future of Technology',
    description: 'Building the next generation of digital experiences.',
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