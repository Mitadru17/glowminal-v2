import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy — Glowminal',
}

export default function PrivacyPage() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="container-marketing max-w-2xl">
        <h1 className="text-text-primary">Privacy Policy</h1>
        <p className="mt-6 text-lg leading-relaxed text-text-secondary">
          Our full privacy policy is being finalized alongside legal review. In the meantime,
          the commitments we hold ourselves to are simple: your scans are encrypted, you own your
          data, you can delete it at any time, and we never sell your personal images to third
          parties.
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
