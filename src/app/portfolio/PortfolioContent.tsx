'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import {
  ArrowRight,
  ExternalLink,
  ChevronRight,
} from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import StaggerChildren, { staggerItemVariants } from '@/components/StaggerChildren'
import GlowCard from '@/components/GlowCard'
import MagneticButton from '@/components/MagneticButton'

const categories = ['All', 'Platform', 'E-Commerce', 'FinTech', 'SaaS', 'Coming Soon']

const projects = [
  {
    id: 1,
    category: 'Platform',
    title: 'Daraza Payment Agent',
    client: 'Daraza',
    description: 'A non-custodial mobile money payment agent connecting developers and businesses to mobile money networks. Access MTN MoMo and Airtel Money APIs to facilitate collections and disbursements without holding customer funds.',
    tags: ['Non-Custodial', 'REST API', 'Mobile Money', 'MTN MoMo', 'Fintech'],
    image: '/images/daraza-payment.svg',
    url: 'https://daraza.net',
    metrics: { uptime: '99.99%', partners: '50+', transactions: '100K+' },
  },
  {
    id: 2,
    category: 'FinTech',
    title: 'PayLink Payment Agent',
    client: 'Daraza',
    description: 'A non-custodial, no-code payment link generation service enabling freelancers and small businesses to create and share customizable payment links for instant mobile money collections — without holding customer funds.',
    tags: ['Non-Custodial', 'No-Code', 'Payment Links', 'Mobile Money', 'Real-time'],
    image: '/images/paylink.svg',
    url: 'https://paylink.daraza.net',
    metrics: { users: '5K+', links: '20K+', uptime: '99.9%' },
  },
  {
    id: 3,
    category: 'Platform',
    title: 'My Next Home',
    client: 'Daraza',
    description: 'An open-source property management and search platform connecting landlords with tenants in Uganda. Features searchable listings, high-res imagery, and location-based filtering.',
    tags: ['Real Estate', 'Search', 'Listings', 'Marketplace'],
    image: '/images/my-next-home.svg',
    url: 'https://mynexthome.daraza.net',
    metrics: { listings: '1K+', landlords: '200+', cities: '10+' },
  },
  {
    id: 4,
    category: 'SaaS',
    title: 'WiFi Manager',
    client: 'Daraza',
    description: 'A hotspot monetization platform enabling hotels, cafés, and ISPs to automate WiFi access through mobile money payments. Includes captive portal management and revenue analytics.',
    tags: ['Hotspot', 'Captive Portal', 'Revenue', 'Automation'],
    image: '/images/wifi-manager.svg',
    url: 'https://wifi.daraza.net',
    metrics: { hotspots: '100+', revenue: 'UGX 50M+', uptime: '99.9%' },
  },
  {
    id: 5,
    category: 'E-Commerce',
    title: 'Shukran Foods',
    client: 'Shukran Foods',
    description: 'A full-featured e-commerce platform for a food and grocery business, with mobile money checkout integration and a seamless shopping experience.',
    tags: ['E-Commerce', 'Shop', 'Mobile Money', 'Checkout'],
    image: '/images/shukran-foods.svg',
    url: 'https://www.shukranifoods.shop',
    metrics: { products: '200+', orders: '1K+', satisfaction: '4.8★' },
  },
  {
    id: 6,
    category: 'Platform',
    title: 'ISM — International Sales Machine',
    client: 'Daraza',
    description: 'A complete offline-first Business Operating System. Run sales, inventory, customers & reports on a single phone — zero internet required. Scales from mobile to desktop enterprise with cloud backup, multi-branch support, and POS hardware integration.',
    tags: ['Offline-First', 'POS', 'Inventory', 'Cross-Platform', '5 Platforms'],
    image: '/images/ism.svg',
    url: 'https://ism.daraza.net',
    metrics: { platforms: '5', offline: '100%', pricing: 'Free Tier' },
  },
  {
    id: 7,
    category: 'Coming Soon',
    title: 'Zyra',
    client: 'Daraza',
    description: 'A ride-hailing application currently in development. Designed to connect passengers with drivers, providing safe, reliable, and affordable transportation across Uganda. Coming 2026.',
    tags: ['Ride-Hailing', 'Transportation', 'Mobile App', 'Coming 2026'],
    image: '/images/zyra.svg',
    url: '#',
    metrics: { status: 'Coming Soon', type: 'Ride-Hailing', launch: '2026' },
  },
]

export default function PortfolioContent() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const filteredProjects = activeCategory === 'All' ? projects : projects.filter(p => p.category === activeCategory)

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-mesh" />
        <div className="hidden md:block absolute top-1/3 right-1/4 w-96 h-96 bg-arctic-500/10 rounded-full blur-[120px] animate-float" />
        <div className="hidden md:block absolute bottom-1/3 left-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] animate-float-delayed" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium text-arctic-400 bg-arctic-500/10 border border-arctic-500/20 mb-6">Our Work</span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
              Projects That <span className="text-gradient">Inspire</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              From non-custodial payment agents to property platforms, we build solutions that transform businesses across Africa.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="mb-16">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button key={category} onClick={() => setActiveCategory(category)} className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${activeCategory === category ? 'bg-arctic-500 text-white shadow-[0_0_20px_rgba(15,119,170,0.3)]' : 'glass text-gray-400 hover:text-white hover:border-arctic-500/30'}`}>
                  {category}
                </button>
              ))}
            </div>
          </AnimatedSection>

          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div key={project.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.4 }} onMouseEnter={() => setHoveredId(project.id)} onMouseLeave={() => setHoveredId(null)}>
                  <GlowCard glowColor={`rgba(15, 119, 170, ${hoveredId === project.id ? 0.2 : 0.05})`} className="h-full">
                    <div className="glass rounded-2xl group hover:bg-white/[0.02] transition-all duration-500 h-full flex flex-col">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <a href={project.url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                        <div className="absolute bottom-4 left-4">
                          <span className="px-3 py-1 rounded-lg text-xs font-medium bg-black/50 text-white backdrop-blur-sm">{project.category}</span>
                        </div>
                      </div>
                      <div className="p-8 flex-1 flex flex-col min-h-[280px]">
                        <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-arctic-300 transition-colors">{project.title}</h3>
                        <p className="text-arctic-400 text-sm font-medium mb-4">{project.client}</p>
                        <p className="text-gray-400 leading-relaxed mb-6 flex-1">{project.description}</p>
                        <div className="grid grid-cols-3 gap-4 mb-6">
                          {Object.entries(project.metrics).map(([key, value]) => (
                            <div key={key} className="text-center">
                              <div className="text-lg font-bold text-white">{value}</div>
                              <div className="text-xs text-gray-500 capitalize">{key}</div>
                            </div>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tags.map((tag) => (
                            <span key={tag} className="px-3 py-1 rounded-lg text-xs font-medium text-arctic-300 bg-arctic-500/10 border border-arctic-500/20">{tag}</span>
                          ))}
                        </div>
                        {project.url === '#' ? (
                          <span className="inline-flex items-center gap-2 text-gray-500 font-medium">
                            Coming Soon
                          </span>
                        ) : (
                          <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-arctic-400 font-medium group/link">
                            Visit Live Site
                            <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                          </a>
                        )}
                      </div>
                    </div>
                  </GlowCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh" />
        <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] lg:w-[600px] h-[150px] lg:h-[300px] bg-arctic-500/10 rounded-full blur-[150px]" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Want to Be Our Next <span className="text-gradient">Success Story</span>?
            </h2>
            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
              Let&apos;s create something extraordinary together. Share your vision, and we&apos;ll bring it to life.
            </p>
            <MagneticButton>
              <Link href="/contact" className="btn-arctic px-10 py-5 text-white font-semibold text-lg flex items-center gap-3 group">
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </MagneticButton>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}