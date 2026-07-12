'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Github, Linkedin, ArrowUpRight, Heart } from 'lucide-react'

const footerLinks = {
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Contact', href: '/contact' },
  ],
  Products: [
    { label: 'ISM — Sales Machine', href: '/services' },
    { label: 'Daraza Gateway', href: 'https://daraza.net' },
    { label: 'WiFi Manager', href: 'https://wifi.daraza.net' },
    { label: 'PayLink', href: 'https://paylink.daraza.net' },
  ],
  Resources: [
    { label: 'Case Studies', href: '/portfolio' },
    { label: 'Documentation', href: '/docs' },
    { label: 'Help Center', href: '/help' },
    { label: 'API Reference', href: '/api' },
  ],
}

const socialLinks = [
  { icon: Github, href: 'https://github.com/arcticline-platform', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/arcticline/', label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-arctic-950/20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-8">
        {/* Top section with newsletter */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-3xl font-display font-bold text-white mb-4">
              Stay ahead of the curve
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Get the latest insights on technology, innovation, and digital transformation delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <form onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing!'); }} className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full sm:w-auto flex-1 px-5 py-3 rounded-xl glass border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:border-arctic-500/50 focus:ring-2 focus:ring-arctic-500/20 transition-all"
                />
                <button type="submit" className="btn-arctic w-full sm:w-auto px-6 py-3 text-white font-semibold whitespace-nowrap">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="flex lg:justify-end items-start">
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-arctic-400 hover:border-arctic-500/30 hover:shadow-[0_0_20px_rgba(15,119,170,0.2)] transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <img src="/logo.png" alt="Arcticline Logo" width={40} height={40} className="rounded-xl" />
              <span className="text-xl font-display font-bold text-white">
                Arctic<span className="text-arctic-400">line</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              A tech startup in Gulu, Uganda building the future of African technology.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-500 hover:text-arctic-400 text-sm flex items-center gap-1 group transition-colors"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Arcticline. All rights reserved. Built in Uganda.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <Link href="/privacy" className="hover:text-arctic-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-arctic-400 transition-colors">
              Terms of Service
            </Link>
            <span className="flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-arctic-500 fill-arctic-500" /> by Arcticline
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}