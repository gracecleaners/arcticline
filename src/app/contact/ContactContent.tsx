'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Send,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  Calendar,
  Sparkles,
} from 'lucide-react'
import AnimatedSection from '@/components/AnimatedSection'
import StaggerChildren, { staggerItemVariants } from '@/components/StaggerChildren'
import GlowCard from '@/components/GlowCard'
import MagneticButton from '@/components/MagneticButton'

const contactMethods = [
  { icon: MapPin, title: 'Visit Us', details: ['Gulu, Uganda', 'East Africa'], color: 'from-arctic-400 to-blue-600' },
  { icon: Phone, title: 'Call Us', details: ['+256 789 079 301', 'Mon-Fri, 9am-6pm EAT'], color: 'from-emerald-400 to-teal-600' },
  { icon: Mail, title: 'Email Us', details: ['info@arcticline.xyz', 'We reply within 24 hours'], color: 'from-purple-400 to-pink-600' },
  { icon: Clock, title: 'Business Hours', details: ['Monday - Friday: 9am - 6pm', 'East Africa Time (EAT)'], color: 'from-amber-400 to-orange-600' },
]

const faqs = [
  { question: 'How long does a typical project take?', answer: 'Project timelines vary based on scope and complexity. A simple web application typically takes 4-8 weeks, while enterprise solutions may take 3-6 months. We provide detailed timelines during our initial consultation.' },
  { question: 'Do you work with businesses outside Uganda?', answer: 'Absolutely! While we\'re based in Gulu, Uganda, we build solutions for clients across East Africa and beyond. Our products like ISM already serve users in multiple countries.' },
  { question: 'Do you provide ongoing support?', answer: 'Yes! We offer comprehensive support and maintenance packages. From bug fixes to feature enhancements, we keep your solution running at its best.' },
  { question: 'What makes Arcticline different?', answer: 'We build for African realities — offline-first, mobile-first, low-bandwidth optimized. Our solutions like ISM prove that world-class technology can come from East Africa.' },
]

export default function ContactContent() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', service: '', budget: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setSubmitMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      setSubmitStatus('success')
      setSubmitMessage(data.message || "Message sent successfully! We'll get back to you within 24 hours.")
      setFormData({ name: '', email: '', company: '', service: '', budget: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
      setSubmitMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => {
        setSubmitStatus('idle')
        setSubmitMessage('')
      }, 6000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-mesh" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-arctic-500/10 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] animate-float-delayed" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium text-arctic-400 bg-arctic-500/10 border border-arctic-500/20 mb-6">Get in Touch</span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
              Let&apos;s Build Something <span className="text-gradient">Amazing</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Have a project in mind? We&apos;d love to hear about it. Reach out from anywhere in East Africa and let&apos;s start a conversation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method) => (
              <motion.div key={method.title} variants={staggerItemVariants}>
                <GlowCard className="h-full">
                  <div className="p-6 glass rounded-2xl text-center h-full min-h-[280px] flex flex-col items-center justify-center group hover:bg-white/[0.03] transition-all duration-500">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500`}>
                      <method.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-display font-bold text-white mb-2">{method.title}</h3>
                    {method.details.map((detail, i) => (<p key={i} className="text-gray-400 text-sm">{detail}</p>))}
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <AnimatedSection direction="left">
              <div className="glass rounded-3xl p-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-arctic-500/20 flex items-center justify-center"><MessageSquare className="w-6 h-6 text-arctic-400" /></div>
                  <div>
                    <h2 className="text-2xl font-display font-bold text-white">Send a Message</h2>
                    <p className="text-gray-500 text-sm">We&apos;ll get back to you within 24 hours</p>
                  </div>
                </div>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Your Name *</label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" className="w-full px-5 py-3.5 rounded-xl glass border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:border-arctic-500/50 focus:ring-2 focus:ring-arctic-500/20 transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Email Address *</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@company.com" className="w-full px-5 py-3.5 rounded-xl glass border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:border-arctic-500/50 focus:ring-2 focus:ring-arctic-500/20 transition-all" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Company</label>
                      <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Your Company Ltd." className="w-full px-5 py-3.5 rounded-xl glass border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:border-arctic-500/50 focus:ring-2 focus:ring-arctic-500/20 transition-all" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Service Interest *</label>
                      <select name="service" value={formData.service} onChange={handleChange} required className="w-full px-5 py-3.5 rounded-xl glass border border-white/10 bg-white/5 text-gray-400 focus:outline-none focus:border-arctic-500/50 focus:ring-2 focus:ring-arctic-500/20 transition-all">
                        <option value="">Select a service</option>
                        <option value="ism">ISM — International Sales Machine</option>
                        <option value="daraza">Daraza Payment Gateway</option>
                        <option value="wifi">WiFi Manager</option>
                        <option value="custom">Custom Development</option>
                        <option value="consulting">Technical Consulting</option>
                        <option value="support">Support & Maintenance</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Budget Range</label>
                    <select name="budget" value={formData.budget} onChange={handleChange} className="w-full px-5 py-3.5 rounded-xl glass border border-white/10 bg-white/5 text-gray-400 focus:outline-none focus:border-arctic-500/50 focus:ring-2 focus:ring-arctic-500/20 transition-all">
                      <option value="">Select budget range</option>
                      <option value="5m-15m">UGX 5M - 15M</option>
                      <option value="15m-50m">UGX 15M - 50M</option>
                      <option value="50m-100m">UGX 50M - 100M</option>
                      <option value="100m+">UGX 100M+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Project Details *</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} placeholder="Tell us about your project, goals, and how we can help..." className="w-full px-5 py-3.5 rounded-xl glass border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:border-arctic-500/50 focus:ring-2 focus:ring-arctic-500/20 transition-all resize-none" />
                  </div>
                  {submitStatus === 'success' && (
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                      <p className="text-sm">{submitMessage}</p>
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300">
                      <span className="w-5 h-5 flex-shrink-0 flex items-center justify-center rounded-full bg-red-500/20 text-xs font-bold">!</span>
                      <p className="text-sm">{submitMessage}</p>
                    </div>
                  )}
                  <MagneticButton className="w-full">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-arctic w-full py-4 text-white font-semibold text-lg flex items-center justify-center gap-3 group disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </MagneticButton>
                </form>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="space-y-8">
                <div className="glass rounded-3xl overflow-hidden h-64 relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-arctic-500/20 to-arctic-600/10 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-arctic-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                      <p className="text-white font-display font-bold">Gulu, Uganda</p>
                      <p className="text-gray-400 text-sm">East Africa</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 grid-pattern opacity-30" />
                </div>
                <div className="glass rounded-3xl p-8 min-h-[280px]">
                  <h3 className="text-xl font-display font-bold text-white mb-6">Quick Actions</h3>
                  <div className="space-y-4">
                    <a href="#" className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 group">
                      <div className="w-12 h-12 rounded-xl bg-arctic-500/10 flex items-center justify-center group-hover:bg-arctic-500/20 transition-colors"><Calendar className="w-6 h-6 text-arctic-400" /></div>
                      <div className="flex-1"><div className="text-white font-semibold">Schedule a Call</div><div className="text-gray-500 text-sm">Book a 30-min consultation</div></div>
                      <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-arctic-400 group-hover:translate-x-1 transition-all" />
                    </a>
                    <a href="#" className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 group">
                      <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors"><Sparkles className="w-6 h-6 text-emerald-400" /></div>
                      <div className="flex-1"><div className="text-white font-semibold">Request a Quote</div><div className="text-gray-500 text-sm">Get a detailed estimate</div></div>
                      <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
                    </a>
                  </div>
                </div>
                <div className="glass rounded-3xl p-8 min-h-[280px]">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-arctic-400 fill-arctic-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>
                  <p className="text-gray-300 italic mb-4">&ldquo;I run my entire grocery shop using ISM. Power cuts, no internet — doesn&apos;t matter. Arcticline&apos;s technology just works.&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-arctic-400 to-arctic-600 flex items-center justify-center text-white text-sm font-bold">AK</div>
                    <div><div className="text-white text-sm font-semibold">Amara Kizza</div><div className="text-gray-500 text-xs">Business Owner, Kampala</div></div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial opacity-30" />
        <div className="relative max-w-4xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium text-arctic-400 bg-arctic-500/10 border border-arctic-500/20 mb-6">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
          </AnimatedSection>
          <StaggerChildren className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div key={faq.question} variants={staggerItemVariants}>
                <div className="glass rounded-2xl overflow-hidden">
                  <button onClick={() => setExpandedFaq(expandedFaq === i ? null : i)} className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors">
                    <span className="text-lg font-semibold text-white">{faq.question}</span>
                    <motion.div animate={{ rotate: expandedFaq === i ? 180 : 0 }} transition={{ duration: 0.3 }}>
                      <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </motion.div>
                  </button>
                  <motion.div initial={false} animate={{ height: expandedFaq === i ? 'auto' : 0, opacity: expandedFaq === i ? 1 : 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                    <p className="px-6 pb-6 text-gray-400 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </div>
  )
}