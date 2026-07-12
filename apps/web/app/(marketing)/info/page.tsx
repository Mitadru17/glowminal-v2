import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Shield, Brain, Sparkles, FlaskConical, Mail, HelpCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Info',
  description: 'Learn about Glowminal — our mission, the science behind our AI, privacy practices, and how we build trust through transparency.',
}

const SECTIONS = [
  {
    icon: Sparkles,
    title: 'About Glowminal',
    description: 'Our mission, vision, and the reason we exist.',
    href: '#about',
    items: [
      'Glowminal is a Skin Intelligence Platform — not a beauty app, not a marketplace.',
      'Our mission is to democratize science-backed skincare through explainable artificial intelligence.',
      'We believe understanding your skin should feel as trustworthy, calm, and intuitive as checking your health.',
      'Our long-term vision: become the most trusted platform for long-term skin intelligence. The Apple Health for skin.',
    ],
  },
  {
    icon: FlaskConical,
    title: 'The Science',
    description: 'How our AI actually works — explained clearly.',
    href: '#science',
    items: [
      'Computer vision models analyze facial images across ten independent skin metrics.',
      'Every AI conclusion includes a confidence score, a plain-language explanation, and a suggested action.',
      'We use lighting-normalized comparison to ensure consistent results across different environments.',
      'Glowminal is explicitly not a medical diagnosis tool. We provide intelligence, not prescriptions.',
    ],
  },
  {
    icon: Shield,
    title: 'Privacy & Security',
    description: 'Your data belongs to you. Period.',
    href: '#privacy',
    items: [
      'All facial images are encrypted in storage.',
      'Users retain full ownership of their uploaded images and scan data.',
      'You can export or permanently delete all your data at any time.',
      'We do not sell user data. We do not share images with third parties.',
      'Processing happens securely on our infrastructure — never on third-party advertising networks.',
    ],
  },
  {
    icon: Brain,
    title: 'AI Transparency',
    description: 'How scores are calculated and why they change.',
    href: '#transparency',
    items: [
      'Each of the ten skin metrics is scored independently with its own confidence value.',
      'Scores may change between scans due to genuine skin changes, lighting differences, or model uncertainty.',
      'We never hide uncertainty. If the model is not confident, we say so explicitly.',
      'Skin Memory builds longitudinal understanding — individual scans are snapshots, trends are insight.',
      'Recommendations change because your skin changes. Static advice is not intelligence.',
    ],
  },
  {
    icon: HelpCircle,
    title: 'FAQ',
    description: 'Answers to common questions.',
    href: '/faq',
    items: [
      'Is Glowminal free? — Phase 1 is free for all users during the beta period.',
      'Is this a medical tool? — No. Glowminal provides skin intelligence, not medical diagnoses.',
      'What devices are supported? — Any modern browser with camera access.',
      'How accurate is the AI? — Every metric includes a confidence score so you know exactly how certain we are.',
    ],
  },
  {
    icon: Mail,
    title: 'Contact',
    description: 'Reach out for support, research partnerships, or press.',
    href: '/contact',
    items: [
      'Support — help@glowminal.com',
      'Research partnerships — science@glowminal.com',
      'Press — press@glowminal.com',
    ],
  },
]

export default function InfoPage() {
  return (
    <div className="flex flex-col w-full pt-32 pb-24">
      {/* Header */}
      <div className="container-marketing text-center mb-24">
        <p className="font-mono text-[10px] uppercase tracking-widest text-text-secondary mb-6">Knowledge Hub</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-text-primary mb-8 max-w-3xl mx-auto leading-[1.05]">
          Everything you need to <span className="font-editorial italic">know.</span>
        </h1>
        <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto font-light leading-relaxed">
          Trust is built through transparency. Here is everything about how Glowminal works, how we protect your data, and why our AI makes the decisions it does.
        </p>
      </div>

      {/* Sections */}
      <div className="container-marketing">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SECTIONS.map((section) => (
            <article
              key={section.title}
              id={section.href.startsWith('#') ? section.href.slice(1) : undefined}
              className="group p-8 md:p-10 rounded-3xl bg-surface-elevated border border-divider/50 transition-all duration-500 hover:shadow-glass-elevated hover:border-divider"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center text-primary">
                  <section.icon className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-medium tracking-tight text-text-primary">{section.title}</h2>
                  <p className="text-sm text-text-secondary font-light">{section.description}</p>
                </div>
              </div>

              <ul className="space-y-4">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-text-secondary font-light leading-relaxed">
                    <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {section.href.startsWith('/') && (
                <Link
                  href={section.href}
                  className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-primary hover:opacity-80 transition-opacity"
                >
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              )}
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
