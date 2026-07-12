import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy & Security',
  description: 'How Glowminal protects your data — encryption, ownership, deletion rights, and our commitment to privacy by design.',
}

export default function PrivacyPage() {
  return (
    <div className="flex flex-col w-full pt-32 pb-24">
      <div className="container-marketing max-w-3xl">
        <p className="font-mono text-[10px] uppercase tracking-widest text-text-secondary mb-6">Legal</p>
        <h1 className="text-4xl md:text-5xl font-light tracking-tight text-text-primary mb-8 leading-[1.1]">
          Privacy & Security
        </h1>
        <p className="text-lg text-text-secondary font-light leading-relaxed mb-16">
          Your skin data is personal. We treat it that way.
        </p>

        <div className="prose prose-stone max-w-none space-y-12 text-text-secondary font-light leading-relaxed">
          <section>
            <h2 className="text-2xl font-light tracking-tight text-text-primary mb-4">Data Ownership</h2>
            <p>You retain full ownership of every image you upload and every scan result we generate. Glowminal does not claim any rights to your data. You can export or permanently delete everything at any time from your account settings.</p>
          </section>

          <section>
            <h2 className="text-2xl font-light tracking-tight text-text-primary mb-4">Encryption</h2>
            <p>All facial images are encrypted at rest using industry-standard encryption. Data in transit is protected via TLS. We use Supabase Storage with row-level security policies to ensure that only you can access your data.</p>
          </section>

          <section>
            <h2 className="text-2xl font-light tracking-tight text-text-primary mb-4">No Selling. No Sharing.</h2>
            <p>We do not sell user data. We do not share your images or analysis results with third parties, advertisers, or data brokers. Your skin intelligence exists for you alone.</p>
          </section>

          <section>
            <h2 className="text-2xl font-light tracking-tight text-text-primary mb-4">Deletion</h2>
            <p>You can permanently delete your account and all associated data at any time. Deletion is irreversible and removes all images, scan history, routines, and progress data from our systems.</p>
          </section>

          <section>
            <h2 className="text-2xl font-light tracking-tight text-text-primary mb-4">Medical Disclaimer</h2>
            <p>Glowminal is not a medical device and does not provide medical diagnoses. Our AI provides skin intelligence — observations, trends, and suggestions — not clinical prescriptions. Always consult a dermatologist for medical skin concerns.</p>
          </section>
        </div>
      </div>
    </div>
  )
}
