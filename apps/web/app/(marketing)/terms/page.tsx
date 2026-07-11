import Link from 'next/link'

export const metadata = {
  title: 'Terms of Service — Glowminal',
}

export default function TermsPage() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="container-marketing max-w-2xl">
        <h1 className="text-text-primary">Terms of Service</h1>
        <p className="mt-6 text-lg leading-relaxed text-text-secondary">
          Our full terms of service are being finalized alongside legal review. Glowminal
          provides AI-assisted skincare analysis for informational and tracking purposes only —
          it is not a substitute for professional dermatological or medical advice.
        </p>
        <p className="mt-4 text-text-secondary">
          Questions in the meantime? Reach us at{' '}
          <a href="mailto:hello@glowminal.com" className="font-medium text-primary hover:underline">
            hello@glowminal.com
          </a>
          .
        </p>
        <Link href="/" className="mt-10 inline-block text-sm font-medium text-primary hover:underline">
          ← Back to home
        </Link>
      </div>
    </section>
  )
}
