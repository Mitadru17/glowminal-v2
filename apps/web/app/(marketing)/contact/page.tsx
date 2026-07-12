import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with the Glowminal team — support, research partnerships, and press inquiries.',
}

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full pt-32 pb-24">
      <div className="container-marketing max-w-3xl">
        <p className="font-mono text-[10px] uppercase tracking-widest text-text-secondary mb-6">Contact</p>
        <h1 className="text-4xl md:text-5xl font-light tracking-tight text-text-primary mb-8 leading-[1.1]">
          Get in touch.
        </h1>
        <p className="text-lg text-text-secondary font-light leading-relaxed mb-16">
          We are a small, focused team. Every message is read by a human.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-surface-elevated border border-divider/50">
            <h2 className="text-lg font-medium tracking-tight text-text-primary mb-3">Support</h2>
            <p className="text-sm text-text-secondary font-light leading-relaxed mb-4">Questions about your account, scans, or routines.</p>
            <a href="mailto:help@glowminal.com" className="text-sm font-medium text-primary hover:opacity-80 transition-opacity">help@glowminal.com</a>
          </div>

          <div className="p-8 rounded-3xl bg-surface-elevated border border-divider/50">
            <h2 className="text-lg font-medium tracking-tight text-text-primary mb-3">Research</h2>
            <p className="text-sm text-text-secondary font-light leading-relaxed mb-4">Partnerships, clinical studies, and academic collaboration.</p>
            <a href="mailto:science@glowminal.com" className="text-sm font-medium text-primary hover:opacity-80 transition-opacity">science@glowminal.com</a>
          </div>

          <div className="p-8 rounded-3xl bg-surface-elevated border border-divider/50">
            <h2 className="text-lg font-medium tracking-tight text-text-primary mb-3">Press</h2>
            <p className="text-sm text-text-secondary font-light leading-relaxed mb-4">Media inquiries, interviews, and brand assets.</p>
            <a href="mailto:press@glowminal.com" className="text-sm font-medium text-primary hover:opacity-80 transition-opacity">press@glowminal.com</a>
          </div>
        </div>
      </div>
    </div>
  )
}
