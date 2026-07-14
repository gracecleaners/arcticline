'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Cloud,
  Brain,
  Code2,
  Shield,
  Database,
  Smartphone,
  ArrowRight,
  ChevronRight,
  Zap,
  Globe,
  Lock,
  Cpu,
  Server,
  Layers,
  BarChart3,
  Workflow,
  Wifi,
  CreditCard,
  Building,
} from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import StaggerChildren, { staggerItemVariants } from '@/components/StaggerChildren'
import GlowCard from '@/components/GlowCard'
import MagneticButton from '@/components/MagneticButton'

const categories = ['All', 'Products', 'Development', 'Cloud', 'Data']

const services = [
  {
    id: 1,
    category: 'Products',
    icon: Smartphone,
    title: 'ISM — Business Operating System',
    description: 'A complete offline-first POS and business management system. Run sales, inventory, customers & reports on a single phone — zero internet required.',
    features: ['Offline-First', 'POS System', '5 Platforms', 'Free Tier'],
    color: 'from-emerald-400 to-teal-600',
  },
  {
    id: 2,
    category: 'Products',
    icon: CreditCard,
    title: 'Daraza Payment Agent',
    description: 'A non-custodial mobile money payment agent connecting developers and businesses to mobile money networks. Facilitate collections, disburse funds, and build custom financial integrations — without holding customer funds.',
    features: ['Non-Custodial', 'MTN MoMo', 'REST API', 'Sandbox'],
    color: 'from-blue-400 to-indigo-600',
  },
  {
    id: 3,
    category: 'Development',
    icon: Code2,
    title: 'Custom Software Development',
    description: 'End-to-end software solutions tailored to African business needs. From payment systems to property platforms.',
    features: ['Full-Stack', 'API Design', 'Agile', 'DevOps'],
    color: 'from-emerald-400 to-teal-600',
  },
  {
    id: 4,
    category: 'Cloud',
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: 'Design, deploy, and manage cloud architectures. Optional cloud backup for offline-first applications.',
    features: ['AWS', 'Azure', 'GCP', 'Cost Optimization'],
    color: 'from-sky-400 to-blue-600',
  },
  {
    id: 5,
    category: 'Data',
    icon: Database,
    title: 'Data Engineering & Analytics',
    description: 'Build robust data pipelines and dashboards. Real-time insights for businesses that need to make fast decisions.',
    features: ['ETL Pipelines', 'Dashboards', 'Real-time', 'BI'],
    color: 'from-amber-400 to-yellow-600',
  },
  {
    id: 6,
    category: 'Development',
    icon: Wifi,
    title: 'WiFi Monetization Platform',
    description: 'Enable hotels, cafés, and ISPs to monetize public WiFi through mobile money payments. Captive portal management included.',
    features: ['Hotspot', 'Mobile Money', 'Analytics', 'Automation'],
    color: 'from-purple-400 to-violet-600',
  },
]

const processSteps = [
  { step: '01', title: 'Discovery', description: 'We understand your business, your users, and the African market challenges you face.', icon: BarChart3 },
  { step: '02', title: 'Design', description: 'We design mobile-first, offline-capable solutions that work for your reality.', icon: Layers },
  { step: '03', title: 'Build', description: 'Agile development with continuous testing ensures quality at every stage.', icon: Workflow },
  { step: '04', title: 'Launch & Support', description: 'Seamless deployment with ongoing support and 24/7 monitoring.', icon: Server },
]

const whyUs = [
  { icon: Zap, title: 'Built for Africa', description: 'We understand low-bandwidth, offline-first, and mobile-first realities.' },
  { icon: Globe, title: 'Proven Products', description: 'ISM serves thousands of merchants across Uganda and East Africa.' },
  { icon: Lock, title: 'Secure by Default', description: 'Security baked into every layer — role-based access, audit trails, encryption.' },
  { icon: Cpu, title: 'AI-Enhanced', description: 'Smart automation powered by cutting-edge AI for better business decisions.' },
]

export default function ServicesContent() {
  const [activeCategory, setActiveCategory] = useState('All')
  const filteredServices = activeCategory === 'All' ? services : services.filter(s => s.category === activeCategory)

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-mesh" />
        <div className="hidden md:block absolute top-1/3 left-1/3 w-96 h-96 bg-arctic-500/10 rounded-full blur-[120px] animate-float" />
        <div className="hidden md:block absolute bottom-1/3 right-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] animate-float-delayed" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium text-arctic-400 bg-arctic-500/10 border border-arctic-500/20 mb-6">Our Services</span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
              Solutions That <span className="text-gradient">Drive Growth</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              From offline-first business systems to non-custodial payment agents, we build technology that solves real African problems.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="mb-16">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-arctic-500 text-white shadow-[0_0_20px_rgba(15,119,170,0.3)]'
                      : 'glass text-gray-400 hover:text-white hover:border-arctic-500/30'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </AnimatedSection>

          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service) => (
                <motion.div key={service.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.4 }}>
                  <GlowCard className="h-full">
                    <div className="p-8 glass rounded-2xl h-full min-h-[280px] flex flex-col group hover:bg-white/[0.03] transition-all duration-500">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-lg transition-all duration-500`}>
                        <service.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-display font-bold text-white mb-3">{service.title}</h3>
                      <p className="text-gray-400 leading-relaxed mb-6 flex-1">{service.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature) => (
                          <span key={feature} className="px-3 py-1 rounded-lg text-xs font-medium text-arctic-300 bg-arctic-500/10 border border-arctic-500/20">{feature}</span>
                        ))}
                      </div>
                    </div>
                  </GlowCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial opacity-30" />
        <div className="relative max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium text-arctic-400 bg-arctic-500/10 border border-arctic-500/20 mb-6">Our Process</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              How We <span className="text-gradient">Deliver</span>
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 0.15}>
                <div className="text-center group">
                  <div className="w-20 h-20 rounded-2xl bg-arctic-500/10 border border-arctic-500/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-arctic-500/20 group-hover:border-arctic-500/30 group-hover:shadow-[0_0_30px_rgba(15,119,170,0.2)] transition-all duration-500">
                    <step.icon className="w-8 h-8 text-arctic-400" />
                  </div>
                  <span className="text-sm font-mono text-arctic-500">Step {step.step}</span>
                  <h3 className="text-xl font-display font-bold text-white mt-2 mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium text-arctic-400 bg-arctic-500/10 border border-arctic-500/20 mb-6">Why Choose Us</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                The Arcticline <span className="text-gradient">Advantage</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                We don&apos;t just build software — we build solutions for African realities. Offline-first, mobile-first, and designed for businesses that can&apos;t afford downtime.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {whyUs.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-arctic-500/10 border border-arctic-500/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-arctic-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="glass rounded-3xl p-10">
                <h3 className="text-2xl font-display font-bold text-white mb-6">Ready to Transform Your Business?</h3>
                <p className="text-gray-400 mb-8">Let&apos;s discuss how our solutions can help you grow.</p>
                <form className="space-y-4">
                  <input type="text" placeholder="Your Name" className="w-full px-5 py-3 rounded-xl glass border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:border-arctic-500/50 focus:ring-2 focus:ring-arctic-500/20 transition-all" />
                  <input type="email" placeholder="Email Address" className="w-full px-5 py-3 rounded-xl glass border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:border-arctic-500/50 focus:ring-2 focus:ring-arctic-500/20 transition-all" />
                  <select className="w-full px-5 py-3 rounded-xl glass border border-white/10 bg-white/5 text-gray-400 focus:outline-none focus:border-arctic-500/50 focus:ring-2 focus:ring-arctic-500/20 transition-all">
                    <option value="">Select a Service</option>
                    {categories.slice(1).map(cat => (<option key={cat} value={cat}>{cat}</option>))}
                  </select>
                  <textarea placeholder="Tell us about your project..." rows={4} className="w-full px-5 py-3 rounded-xl glass border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:border-arctic-500/50 focus:ring-2 focus:ring-arctic-500/20 transition-all resize-none" />
                  <MagneticButton className="w-full">
                    <button className="btn-arctic w-full py-4 text-white font-semibold flex items-center justify-center gap-2 group">
                      Schedule Consultation
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </MagneticButton>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  )
}