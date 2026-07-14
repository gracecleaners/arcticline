'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Target,
  Eye,
  Heart,
  Rocket,
  Lightbulb,
  Handshake,
  ArrowRight,
} from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import StaggerChildren, { staggerItemVariants } from '@/components/StaggerChildren'
import GlowCard from '@/components/GlowCard'
import MagneticButton from '@/components/MagneticButton'

const values = [
  {
    icon: Target,
    title: 'Mission-Driven',
    description: 'We exist to democratize access to world-class technology for African businesses, making enterprise-grade solutions accessible to organizations of all sizes.',
  },
  {
    icon: Eye,
    title: 'Visionary',
    description: 'We look beyond the horizon, anticipating technological shifts and building solutions tailored to the unique needs of the African market.',
  },
  {
    icon: Heart,
    title: 'Human-Centered',
    description: 'Technology serves people, not the other way around. We build for low-bandwidth, offline-first, and mobile-first realities.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'We challenge conventions and push boundaries, proving that world-class technology can come from East Africa.',
  },
  {
    icon: Handshake,
    title: 'Partnership',
    description: 'We succeed when our clients succeed. We build lasting relationships based on trust, transparency, and mutual growth across Uganda and beyond.',
  },
  {
    icon: Rocket,
    title: 'Excellence',
    description: 'Good enough is never enough. We hold ourselves to the highest standards in every line of code, every design, every interaction.',
  },
]

const timeline = [
  { year: '2023', title: 'The Spark', description: 'Arcticline was founded in Gulu, Uganda with a mission to build technology that solves real African problems.' },
  { year: '2023', title: 'Daraza Partnership', description: 'Partnered with Daraza to build and scale their payment agent and digital infrastructure across Uganda.' },
  { year: '2024', title: 'ISM Launch', description: 'Launched ISM (International Sales Machine) — an offline-first Business OS serving thousands of merchants across Uganda.' },
  { year: '2024', title: 'Platform Expansion', description: 'Expanded the Daraza ecosystem with PayLink, WiFi Manager, My Next Home, and Shukran Foods.' },
  { year: '2025', title: 'Growing Impact', description: 'Continuing to build solutions that transform how businesses operate across East Africa and beyond.' },
]

const team = [
  { name: 'The Team', role: 'Engineering & Design', bio: 'A passionate team of engineers, designers, and strategists building the future of African technology from Gulu, Uganda.', initials: 'AL' },
]

export default function AboutContent() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-mesh" />
        <div className="hidden md:block absolute top-1/3 left-1/4 w-96 h-96 bg-arctic-500/10 rounded-full blur-[120px] animate-float" />
        <div className="hidden md:block absolute bottom-1/3 right-1/4 w-80 h-80 bg-arctic-600/10 rounded-full blur-[100px] animate-float-delayed" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium text-arctic-400 bg-arctic-500/10 border border-arctic-500/20 mb-6">
              About Arcticline
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
              Building the Future of
              <br /><span className="text-gradient">African Technology</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Born in Gulu, Uganda, Arcticline is a tech startup building world-class digital solutions
              for businesses across Africa. From payment agents to offline-first business systems,
              we make technology work for everyone.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 border-y border-white/5 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-arctic-500/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6">
          <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '7+', label: 'Products Built' },
              { value: 'Uganda', label: 'Headquarters' },
              { value: '5', label: 'Platforms Supported' },
              { value: '100%', label: 'Offline-First' },
            ].map((stat) => (
              <motion.div key={stat.label} variants={staggerItemVariants} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-gradient mb-1">{stat.value}</div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            <AnimatedSection direction="left">
              <div className="glass rounded-3xl p-10 h-full group hover:bg-white/[0.03] transition-all duration-500 min-h-[280px] flex flex-col">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-arctic-400 to-arctic-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-display font-bold text-white mb-6">Our Mission</h2>
                <p className="text-gray-400 leading-relaxed text-lg flex-1">
                  To build technology solutions that solve real African problems — from mobile money
                  integration to offline-first business systems. We make enterprise-grade technology
                  accessible to every business, regardless of size or location.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="glass rounded-3xl p-10 h-full group hover:bg-white/[0.03] transition-all duration-500 min-h-[280px] flex flex-col">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-display font-bold text-white mb-6">Our Vision</h2>
                <p className="text-gray-400 leading-relaxed text-lg flex-1">
                  To be East Africa&apos;s most trusted technology partner — building products that
                  work without internet, scale across borders, and empower businesses to compete
                  on a global stage. We envision a future where African-built tech powers the world.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial opacity-30" />
        <div className="relative max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium text-arctic-400 bg-arctic-500/10 border border-arctic-500/20 mb-6">
              Our Values
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              What We <span className="text-gradient">Stand For</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Our core values guide every decision we make, every product we build, and every relationship we nurture.
            </p>
          </AnimatedSection>

          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <motion.div key={value.title} variants={staggerItemVariants}>
                <GlowCard className="h-full">
                  <div className="p-8 glass rounded-2xl h-full group hover:bg-white/[0.03] transition-all duration-500 min-h-[280px] flex flex-col">
                    <div className="w-14 h-14 rounded-xl bg-arctic-500/10 border border-arctic-500/20 flex items-center justify-center mb-6 group-hover:bg-arctic-500/20 group-hover:border-arctic-500/30 transition-all duration-500">
                      <value.icon className="w-7 h-7 text-arctic-400" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-white mb-3">{value.title}</h3>
                    <p className="text-gray-400 leading-relaxed flex-1">{value.description}</p>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-32 relative">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium text-arctic-400 bg-arctic-500/10 border border-arctic-500/20 mb-6">
              Our Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
              The Arcticline <span className="text-gradient">Story</span>
            </h2>
          </AnimatedSection>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-arctic-500/50 via-arctic-500/30 to-transparent" />

            {timeline.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className={`relative flex items-center mb-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-arctic-500 border-4 border-midnight z-10 shadow-[0_0_20px_rgba(15,119,170,0.5)]" />
                  <div className={`ml-20 md:ml-0 md:w-[calc(50%-40px)] ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <span className="text-arctic-400 font-mono text-sm">{item.year}</span>
                    <h3 className="text-xl font-display font-bold text-white mt-1 mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial opacity-30" />
        <div className="relative max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium text-arctic-400 bg-arctic-500/10 border border-arctic-500/20 mb-6">
              Our Team
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Meet the <span className="text-gradient">Minds</span> Behind Arcticline
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A passionate team of engineers, designers, and strategists building the future
              of African technology from Gulu, Uganda.
            </p>
          </AnimatedSection>

          <StaggerChildren className="flex justify-center">
            {team.map((member) => (
              <motion.div key={member.name} variants={staggerItemVariants}>
                <GlowCard>
                  <div className="p-10 glass rounded-2xl text-center group hover:bg-white/[0.03] transition-all duration-500 max-w-lg min-h-[280px] flex flex-col items-center justify-center">
                    <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-arctic-400 to-arctic-600 flex items-center justify-center mx-auto mb-6 text-white text-3xl font-display font-bold group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(15,119,170,0.3)] transition-all duration-500">
                      {member.initials}
                    </div>
                    <h3 className="text-2xl font-display font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-arctic-400 text-sm font-medium mb-4">{member.role}</p>
                    <p className="text-gray-400 leading-relaxed flex-1">{member.bio}</p>
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
        <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] lg:w-[600px] h-[150px] lg:h-[300px] bg-arctic-500/10 rounded-full blur-[150px]" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Join Our <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
              We&apos;re always looking for exceptional talent to join our mission.
              If you&apos;re passionate about technology and want to make a real impact in Africa, we want to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <MagneticButton>
                <Link
                  href="/contact"
                  className="btn-arctic px-8 py-4 text-white font-semibold text-lg flex items-center gap-3 group"
                >
                  Get in Touch
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </MagneticButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}