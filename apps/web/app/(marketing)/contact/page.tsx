import type { Metadata } from 'next'
import { ContactClient } from './ContactClient'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with the Glowminal team — support, research partnerships, and press inquiries.',
}

export default function ContactPage() {
  return <ContactClient />
}
