import { Metadata } from 'next'
import ContactContent from './ContactContent'

export const metadata: Metadata = {
  title: 'Contact Us — Arcticline',
  description: 'Get in touch with Arcticline. Schedule a consultation, request a quote, or learn how our technology solutions can transform your business.',
  keywords: ['contact Arcticline', 'tech company contact', 'schedule consultation', 'get a quote', 'software company'],
  openGraph: {
    title: 'Contact Arcticline — Let\'s Build Something Amazing',
    description: 'Have a project in mind? Reach out and let\'s start a conversation about how Arcticline can bring your vision to life.',
    type: 'website',
    siteName: 'Arcticline',
  },
}

export default function ContactPage() {
  return <ContactContent />
}