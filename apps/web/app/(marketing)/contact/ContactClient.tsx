'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { EASING, DURATION } from '@/lib/theme/motion'
import { GlowminalLogo } from '@/components/ui/GlowminalLogo'
import { Copy, Mail, Calendar, ArrowRight, Globe, Share2, MessageSquare, Newspaper, MapPin, Clock } from 'lucide-react'
import { toast } from 'sonner'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const TOPICS = [
  'General Support',
  'Product Feedback',
  'Feature Request',
  'Research',
  'Enterprise',
  'Partnership',
  'Security',
  'Privacy',
  'Media',
  'Bug Report'
]

const FAQS = [
  {
    q: 'How quickly do we respond?',
    a: 'Every message is personally reviewed by our team. We typically respond within 1–2 business days.'
  },
  {
    q: 'How can researchers collaborate?',
    a: 'We actively partner with dermatologists and ML researchers. Select "Research" or contact our founders directly to discuss potential collaborations.'
  },
  {
    q: 'How do partnerships work?',
    a: 'We evaluate strategic partnerships on a case-by-case basis, prioritizing alignments that advance explainable AI in consumer health.'
  },
  {
    q: 'How do I report bugs?',
    a: 'Select "Bug Report" from the topics above. Please include your device model, browser, and steps to reproduce the issue.'
  },
  {
    q: 'Can I request new features?',
    a: 'Absolutely. Glowminal is built for its users. Select "Feature Request" and tell us what you\'d like to see next.'
  },
  {
    q: 'How do I join beta testing?',
    a: 'Beta access is currently invite-only for our waitlist members. If you represent an enterprise or clinical entity, please contact the founders.'
  }
]

const SOCIAL_LINKS = [
  { name: 'Instagram', url: 'https://www.instagram.com/glowminal.tech/' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/company/glowminal.tech' },
]

export function ContactClient() {
  const [selectedTopic, setSelectedTopic] = useState('General Support')

  const handleCopy = (email: string) => {
    navigator.clipboard.writeText(email)
    toast.custom((t) => (
      <div className="flex items-center gap-3 rounded-xl bg-surface p-4 shadow-xl border border-divider">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <GlowminalLogo variant="symbol" size={16} />
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-semibold text-text-primary">Email copied</p>
          <p className="text-xs text-text-secondary">{email} copied to clipboard.</p>
        </div>
      </div>
    ))
  }

  const getMailto = (email: string) => {
    return `mailto:${email}?subject=${encodeURIComponent(selectedTopic)}`
  }

  return (
    <div className="relative w-full overflow-hidden bg-[#FAFAF9]">
      
      {/* Subtle Ambient Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[radial-gradient(circle,rgba(4,120,87,0.03)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute top-[40%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[radial-gradient(circle,rgba(167,243,208,0.04)_0%,transparent_70%)] blur-3xl" />
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.015] mix-blend-overlay" />
      </div>

      <div className="container-page relative z-10 mx-auto max-w-5xl px-6 pb-32 pt-40">
        
        {/* 1. Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION.hero, ease: EASING.expensive }}
          className="flex flex-col items-center text-center mb-24"
        >
          <div className="mb-6 inline-flex h-8 items-center rounded-full border border-primary/10 bg-primary/5 px-4 text-xs font-medium tracking-wide text-primary">
            Let's Talk
          </div>
          <h1 className="font-editorial text-5xl md:text-7xl font-light tracking-tight text-text-primary max-w-4xl leading-[1.1] mb-6">
            Let's build the future of <br className="hidden md:block" />
            <span className="italic text-primary">skin intelligence.</span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary font-light max-w-2xl leading-relaxed">
            Whether you're exploring Glowminal, interested in research, or looking to collaborate, we'd love to hear from you.
          </p>
        </motion.div>

        {/* 2. Interactive Chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION.hero, delay: 0.1, ease: EASING.expensive }}
          className="mb-16 flex flex-col items-center"
        >
          <h3 className="text-sm font-medium tracking-wide text-text-secondary uppercase mb-6">What can we help with?</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl">
            {TOPICS.map((topic) => (
              <button
                key={topic}
                onClick={() => setSelectedTopic(topic)}
                className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedTopic === topic 
                    ? 'text-white shadow-md' 
                    : 'bg-surface border border-divider text-text-secondary hover:border-primary/30 hover:text-text-primary'
                }`}
              >
                {selectedTopic === topic && (
                  <motion.div
                    layoutId="activeChip"
                    className="absolute inset-0 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{topic}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* 3. Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-24">
          
          {/* General Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.hero, delay: 0.2, ease: EASING.expensive }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-divider bg-surface/60 p-8 backdrop-blur-xl shadow-sm transition-all duration-500 hover:shadow-xl hover:border-primary/20"
          >
            <div className="absolute -right-20 -top-20 text-primary/5 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12">
              <GlowminalLogo variant="symbol" size={240} />
            </div>
            
            <div className="relative z-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-6">
                <Mail className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-semibold text-text-primary mb-2">General Contact</h2>
              <p className="text-text-secondary leading-relaxed mb-8 h-20">
                For general questions, product feedback, support, early access, and press inquiries.
              </p>
            </div>
            
            <div className="relative z-10 flex flex-col gap-3">
              <a 
                href={getMailto('hello@glowminal.tech')}
                className="flex w-full items-center justify-center rounded-xl bg-primary px-6 py-3.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-primary-dark hover:shadow-md active:scale-[0.98]"
              >
                Email Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <button 
                onClick={() => handleCopy('hello@glowminal.tech')}
                className="flex w-full items-center justify-center rounded-xl bg-surface px-6 py-3.5 text-sm font-medium text-text-primary border border-divider transition-colors hover:bg-surface-hover active:scale-[0.98]"
              >
                <Copy className="mr-2 h-4 w-4 text-text-secondary" />
                Copy Address
              </button>
            </div>
          </motion.div>

          {/* Founders Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.hero, delay: 0.3, ease: EASING.expensive }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-divider bg-surface/60 p-8 backdrop-blur-xl shadow-sm transition-all duration-500 hover:shadow-xl hover:border-primary/20"
          >
            <div className="absolute -right-20 -top-20 text-primary/5 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12">
              <GlowminalLogo variant="symbol" size={240} />
            </div>
            
            <div className="relative z-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-6">
                <GlowminalLogo variant="symbol" size={24} />
              </div>
              <h2 className="text-2xl font-semibold text-text-primary mb-2">Founders</h2>
              <p className="text-text-secondary leading-relaxed mb-8 h-20">
                For partnerships, enterprise solutions, investors, and strategic research collaborations.
              </p>
            </div>
            
            <div className="relative z-10 flex flex-col gap-3">
              <a 
                href={getMailto('founders@glowminal.tech')}
                className="flex w-full items-center justify-center rounded-xl bg-text-primary px-6 py-3.5 text-sm font-medium text-surface shadow-sm transition-all hover:opacity-90 hover:shadow-md active:scale-[0.98]"
              >
                Email Founders
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <button 
                onClick={() => handleCopy('founders@glowminal.tech')}
                className="flex w-full items-center justify-center rounded-xl bg-surface px-6 py-3.5 text-sm font-medium text-text-primary border border-divider transition-colors hover:bg-surface-hover active:scale-[0.98]"
              >
                <Copy className="mr-2 h-4 w-4 text-text-secondary" />
                Copy Address
              </button>
            </div>
          </motion.div>

        </div>

        {/* 4. Availability & Trust */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: DURATION.hero, ease: EASING.expensive }}
          className="grid md:grid-cols-2 gap-6 mb-24"
        >
          <div className="rounded-3xl border border-divider bg-surface p-8 flex flex-col justify-center">
            <h3 className="text-lg font-semibold text-text-primary mb-6">Availability</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-sm">
                <Clock className="h-5 w-5 text-primary" />
                <div className="flex flex-col">
                  <span className="font-medium text-text-primary">Response Time</span>
                  <span className="text-text-secondary">Typically within 1–2 business days</span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <MapPin className="h-5 w-5 text-primary" />
                <div className="flex flex-col">
                  <span className="font-medium text-text-primary">Timezone & Hours</span>
                  <span className="text-text-secondary">IST (UTC +5:30) • Monday–Friday</span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-primary/10 bg-primary/5 p-8 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute -bottom-10 -right-10 text-primary/10">
              <GlowminalLogo variant="symbol" size={160} />
            </div>
            <h3 className="text-lg font-semibold text-text-primary mb-4 relative z-10">Our Commitment</h3>
            <p className="text-text-secondary leading-relaxed relative z-10">
              Every message is personally reviewed by a member of the Glowminal team. We do not use automated customer service bots. We believe in building trust through authentic, human communication.
            </p>
          </div>
        </motion.div>

        {/* 5. FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: DURATION.hero, ease: EASING.expensive }}
          className="max-w-3xl mx-auto mb-24"
        >
          <h2 className="text-2xl font-semibold text-text-primary mb-8 text-center">Frequently Asked Questions</h2>
          <Accordion className="w-full">
            {FAQS.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-divider">
                <AccordionTrigger className="text-left font-medium text-text-primary hover:text-primary hover:no-underline data-[state=open]:text-primary transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-text-secondary leading-relaxed pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* 6. Socials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: DURATION.hero, ease: EASING.expensive }}
          className="text-center"
        >
          <h3 className="text-sm font-medium tracking-wide text-text-secondary uppercase mb-8">Follow Our Journey</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {SOCIAL_LINKS.map((link) => (
              <a 
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-divider bg-surface px-5 py-2.5 text-sm font-medium text-text-secondary hover:text-text-primary hover:border-primary/30 transition-all active:scale-[0.98]"
              >
                {link.name}
                <ArrowRight className="h-3 w-3 -rotate-45 opacity-50" />
              </a>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  )
}
