import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Glowminal Terms of Service — usage guidelines, limitations, and user responsibilities.',
}

export default function TermsPage() {
  return (
    <div className="flex flex-col w-full pt-32 pb-24">
      <div className="container-marketing max-w-3xl">
        <p className="font-mono text-[10px] uppercase tracking-widest text-text-secondary mb-6">Legal</p>
        <h1 className="text-4xl md:text-5xl font-light tracking-tight text-text-primary mb-8 leading-[1.1]">
          Terms of Service
        </h1>
        <p className="text-lg text-text-secondary font-light leading-relaxed mb-16">
          By using Glowminal, you agree to the following terms.
        </p>

        <div className="space-y-12 text-text-secondary font-light leading-relaxed">
          <section>
            <h2 className="text-2xl font-light tracking-tight text-text-primary mb-4">Use of Service</h2>
            <p>Glowminal is an AI-powered skin intelligence platform intended for informational purposes only. You must be at least 18 years old to create an account. You are responsible for maintaining the security of your account credentials.</p>
          </section>

          <section>
            <h2 className="text-2xl font-light tracking-tight text-text-primary mb-4">Not Medical Advice</h2>
            <p>Glowminal does not provide medical diagnoses, treatment recommendations, or clinical advice. All analysis results are AI-generated observations and should not replace consultation with a qualified dermatologist or healthcare provider.</p>
          </section>

          <section>
            <h2 className="text-2xl font-light tracking-tight text-text-primary mb-4">Your Content</h2>
            <p>You retain ownership of all images and data you upload. By using the service, you grant Glowminal a limited license to process your images for the purpose of generating your skin analysis. We do not use your images for any other purpose.</p>
          </section>

          <section>
            <h2 className="text-2xl font-light tracking-tight text-text-primary mb-4">Limitations</h2>
            <p>AI analysis accuracy depends on image quality, lighting conditions, and model confidence. We provide confidence scores with every metric to communicate uncertainty transparently. Results may vary between scans.</p>
          </section>

          <section>
            <h2 className="text-2xl font-light tracking-tight text-text-primary mb-4">Termination</h2>
            <p>You may delete your account at any time. Upon deletion, all your data — including images, scan history, and routines — is permanently removed from our systems.</p>
          </section>
        </div>
      </div>
    </div>
  )
}
