'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  ArrowRight,
  Shield,
  Cpu,
  Cloud,
  MessageSquare,
  ChevronRight,
  Star,
  Quote,
  Play,
  CheckCircle2,
  Code2,
  Rocket,
  Monitor,
  Smartphone,
} from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import StaggerChildren, { staggerItemVariants } from '@/components/StaggerChildren'
import GlowCard from '@/components/GlowCard'
import MagneticButton from '@/components/MagneticButton'

const features = [
  {
    icon: Code2,
    title: 'Custom Software Development',
    description: 'We build corporate computer software tailored to your business needs — from web applications and mobile apps to embedded systems and enterprise platforms.',
    color: 'from-arctic-400 to-blue-600',
  },
  {
    icon: Smartphone,
    title: 'Mobile & Web Apps',
    description: 'Full-stack mobile and web application development for businesses, organisations, and individuals. From ride-hailing apps to e-commerce platforms.',
    color: 'from-emerald-400 to-teal-600',
  },
  {
    icon: Shield,
    title: 'Enterprise Systems',
    description: 'Secure, scalable enterprise software solutions with role-based access, audit trails, and integrations that power business operations at any scale.',
    color: 'from-purple-400 to-pink-600',
  },
  {
    icon: Cpu,
    title: 'Embedded Systems',
    description: 'Custom embedded systems development for hardware integration, IoT devices, and specialized industrial applications.',
    color: 'from-amber-400 to-orange-500',
  },
  {
    icon: Cloud,
    title: 'Payment & Fintech',
    description: 'Mobile money payment gateways, digital payment platforms, and financial technology solutions including our Daraza Payment Gateway serving Uganda.',
    color: 'from-cyan-400 to-blue-500',
  },
  {
    icon: Monitor,
    title: 'Business Operating Systems',
    description: 'Complete business management platforms like ISM — our offline-first POS and inventory system serving thousands of merchants across East Africa.',
    color: 'from-rose-400 to-red-500',
  },
]

const stats = [
  { value: '2023', label: 'Founded' },
  { value: '2-10', label: 'Team Size' },
  { value: '7+', label: 'Products Built' },
  { value: 'Uganda', label: 'Headquarters' },
]

const testimonials = [
  {
    name: 'Amara Kizza',
    role: 'Grocery Owner, Kampala',
    content: 'I run my entire grocery shop from my phone. Power cuts, no internet — doesn\'t matter. ISM just works. I\'ve never lost a single sale.',
    rating: 5,
    avatar: 'AK',
  },
  {
    name: 'Dr. Nanteza',
    role: 'Pharmacy Manager, Entebbe',
    content: 'We started with one desktop unit for our pharmacy. When we opened a second branch, we just installed the desktop version and imported our data. Zero hassle.',
    rating: 5,
    avatar: 'DN',
  },
  {
    name: 'Robert Opio',
    role: 'Restaurant Owner, Jinja',
    content: 'The inventory tracking saved us from massive losses. We know exactly what\'s in stock at any time, and the reports are incredible for a free app.',
    rating: 5,
    avatar: 'RO',
  },
]

const products = ['Daraza Payment Gateway', 'ISM Business OS', 'PayLink', 'WiFi Manager', 'My Next Home', 'Shukran Foods', 'Zyra Ride-Hailing']

export default function HomePage() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.9])

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Background effects */}
        <div className="absolute inset-0 bg-mesh" />
        <div className="hidden md:block absolute top-1/4 left-1/4 w-96 h-96 bg-arctic-500/10 rounded-full blur-[120px] animate-float" />
        <div className="hidden md:block absolute bottom-1/4 right-1/4 w-80 h-80 bg-arctic-600/10 rounded-full blur-[100px] animate-float-delayed" />
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] lg:w-[600px] h-[300px] lg:h-[600px] bg-arctic-500/5 rounded-full blur-[150px]" />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
          className="relative z-10 max-w-7xl mx-auto px-6 text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-arctic-500/20 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-arctic-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-arctic-500" />
            </span>
            <span className="text-sm text-arctic-300 font-medium">🇺🇬 IT System Custom Software Development — Gulu, Uganda</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-tight mb-6"
          >
            You Dream It,
            <br />
            <span className="text-gradient">We Build It</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Arcticline Technologies builds corporate computer software for businesses, organisations and individuals across East Africa.
            With a team of experienced programmers and developers, if you can dream the idea, we can build it for you.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <MagneticButton>
              <Link
                href="/portfolio"
                className="btn-arctic px-8 py-4 text-white font-semibold text-lg flex items-center gap-3 group"
              >
                View Our Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link
                href="/contact"
                className="btn-outline px-8 py-4 text-lg flex items-center gap-3 group"
              >
                <Play className="w-5 h-5 text-arctic-400" />
                Get in Touch
              </Link>
            </MagneticButton>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-6 md:gap-8 text-sm text-gray-500"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-arctic-400" />
              <span>Founded 2023</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-arctic-400" />
              <span>2-10 Employees</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-arctic-400" />
              <span>Custom Software</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-arctic-400" />
              <span>7+ Products Built</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2"
          >
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5], height: [6, 12, 6] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 bg-arctic-400 rounded-full"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Products Section */}
      <section className="py-20 border-t border-white/5">
        <AnimatedSection>
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-center text-sm text-gray-500 mb-4 uppercase tracking-widest">
              Products Built by Arcticline Technologies
            </p>
            <p className="text-center text-gray-400 text-sm max-w-xl mx-auto mb-10">
              From payment gateways to ride-hailing — we turn ideas into real-world software
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
              {products.map((product, i) => (
                <motion.div
                  key={product}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-gray-600 font-display text-xl md:text-2xl font-bold hover:text-arctic-400 transition-colors duration-300 cursor-default"
                >
                  {product}
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Features Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-radial opacity-50" />
        <div className="relative max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium text-arctic-400 bg-arctic-500/10 border border-arctic-500/20 mb-6">
              What We Build
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              What <span className="text-gradient">We Build</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              We understand the unique challenges of doing business in Africa — and we build technology that solves them.
            </p>
          </AnimatedSection>

          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <motion.div key={feature.title} variants={staggerItemVariants}>
                <GlowCard className="h-full">
                  <div className="p-8 glass rounded-2xl h-full min-h-[280px] flex flex-col group hover:bg-white/[0.03] transition-all duration-500">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-lg transition-all duration-500`}>
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed flex-1">
                      {feature.description}
                    </p>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-arctic-950/50 via-arctic-900/30 to-arctic-950/50" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto px-6">
          <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={staggerItemVariants} className="text-center">
                <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium text-arctic-400 bg-arctic-500/10 border border-arctic-500/20 mb-6">
              Our Process
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              From Idea to{' '}
              <span className="text-gradient">Reality</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              You bring the vision. We bring the technical expertise. Together, we build software that works.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-24 left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-transparent via-arctic-500/30 to-transparent" />

            {[
              {
                step: '01',
                title: 'Share Your Vision',
                description: 'Tell us your idea. Whether it\'s a payment platform, a business system, or a mobile app — we listen, ask the right questions, and understand your needs.',
                icon: MessageSquare,
              },
              {
                step: '02',
                title: 'We Design & Build',
                description: 'Our team of experienced programmers and developers designs and builds your software. From architecture to deployment, we handle it all.',
                icon: Code2,
              },
              {
                step: '03',
                title: 'Launch & Grow',
                description: 'We deploy your solution, provide ongoing support, and help you scale. From a single user to thousands — your software grows with you.',
                icon: Rocket,
              },
            ].map((item, i) => (
              <AnimatedSection key={item.step} delay={i * 0.2}>
                <div className="relative text-center group">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-arctic-500/20 to-arctic-600/20 border border-arctic-500/20 flex items-center justify-center mx-auto mb-6 relative z-10 group-hover:border-arctic-500/40 group-hover:shadow-[0_0_30px_rgba(15,119,170,0.2)] transition-all duration-500">
                    <item.icon className="w-8 h-8 text-arctic-400" />
                  </div>
                  <div className="text-sm font-mono text-arctic-500 mb-2">Step {item.step}</div>
                  <h3 className="text-2xl font-display font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed max-w-xs mx-auto">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial opacity-30" />
        <div className="relative max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium text-arctic-400 bg-arctic-500/10 border border-arctic-500/20 mb-6">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Real People. <span className="text-gradient">Real Results.</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              From street vendors to growing chains — ISM is helping real businesses run smarter, every day.
            </p>
          </AnimatedSection>

          <StaggerChildren className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <motion.div key={testimonial.name} variants={staggerItemVariants}>
                <GlowCard className="h-full">
                  <div className="p-8 glass rounded-2xl h-full min-h-[280px] flex flex-col">
                    <Quote className="w-8 h-8 text-arctic-500/30 mb-4" />
                    <p className="text-gray-300 leading-relaxed mb-6 flex-1">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-arctic-400 to-arctic-600 flex items-center justify-center text-white font-bold">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="text-white font-semibold">{testimonial.name}</div>
                        <div className="text-gray-500 text-sm">{testimonial.role}</div>
                      </div>
                    </div>
                    <div className="flex gap-1 mt-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-arctic-400 fill-arctic-400" />
                      ))}
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh" />
        <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] lg:w-[800px] h-[200px] lg:h-[400px] bg-arctic-500/10 rounded-full blur-[150px]" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6">
              Have an Idea?{' '}
              <span className="text-gradient">Let's Build It</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Whether it's a custom software solution, a payment platform, or a business operating system —
              Arcticline Technologies turns your vision into reality. If you can dream it, we can build it.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <MagneticButton>
                <Link
                  href="/contact"
                  className="btn-arctic px-10 py-5 text-white font-semibold text-lg flex items-center gap-3 group"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link
                  href="/portfolio"
                  className="btn-outline px-10 py-5 text-lg flex items-center gap-3 group"
                >
                  View Our Products
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </MagneticButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}