import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about Glowminal — pricing, accuracy, privacy, compatibility, and more.',
}

const FAQ_ITEMS = [
  {
    question: 'Is Glowminal free?',
    answer: 'Phase 1 is completely free for all users during our public beta. We want to build trust before we build revenue.',
  },
  {
    question: 'Is this a medical diagnosis tool?',
    answer: 'No. Glowminal provides skin intelligence — observations, trends, and science-backed suggestions. It is not a substitute for professional dermatological advice. We always include a disclaimer alongside any analysis.',
  },
  {
    question: 'How accurate is the AI?',
    answer: 'Every metric we produce includes a confidence score between 0 and 1, so you always know how certain the model is. We never present uncertain results as definitive. If lighting conditions or image quality affect a scan, we tell you.',
  },
  {
    question: 'What devices are supported?',
    answer: 'Glowminal works on any modern browser with camera access — Chrome, Safari, Edge, and Firefox on both desktop and mobile. A native mobile app is planned for Phase 3.',
  },
  {
    question: 'How is my data stored?',
    answer: 'All facial images are encrypted at rest. We use Supabase with row-level security policies. Only you can access your data. You can export or delete it anytime.',
  },
  {
    question: 'Can I delete my data?',
    answer: 'Yes. You can permanently delete your entire account and all associated data — images, scans, routines, and progress — at any time from your settings. Deletion is irreversible.',
  },
  {
    question: 'What skin metrics are analyzed?',
    answer: 'We evaluate ten independent metrics: Overall Skin Score, Hydration, Texture, Acne, Pigmentation, Redness, Oil Balance, Sensitivity, Pores, and Elasticity. Each includes a score, confidence value, explanation, and suggested improvement.',
  },
  {
    question: 'How does Skin Memory work?',
    answer: 'Every scan you take is stored in your personal timeline. Over time, our system identifies patterns and trends that individual scans cannot reveal — like how your skin responds to seasons, stress, or specific products.',
  },
  {
    question: 'Will you sell my data?',
    answer: 'No. We do not sell, share, or monetize your personal data in any way. Your skin intelligence exists for you alone.',
  },
  {
    question: 'How long does an analysis take?',
    answer: 'The complete AI analysis finishes in under 20 seconds after a valid photo is captured.',
  },
]

export default function FAQPage() {
  return (
    <div className="flex flex-col w-full pt-32 pb-24">
      <div className="container-marketing max-w-3xl">
        <p className="font-mono text-[10px] uppercase tracking-widest text-text-secondary mb-6">Support</p>
        <h1 className="text-4xl md:text-5xl font-light tracking-tight text-text-primary mb-8 leading-[1.1]">
          Frequently asked questions.
        </h1>
        <p className="text-lg text-text-secondary font-light leading-relaxed mb-16">
          If your question is not here, reach out to us at <a href="mailto:help@glowminal.com" className="text-primary hover:opacity-80 transition-opacity">help@glowminal.com</a>.
        </p>

        <div className="flex flex-col divide-y divide-divider">
          {FAQ_ITEMS.map((item) => (
            <div key={item.question} className="py-8 first:pt-0 last:pb-0">
              <h2 className="text-lg font-medium tracking-tight text-text-primary mb-3">
                {item.question}
              </h2>
              <p className="text-base text-text-secondary font-light leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
