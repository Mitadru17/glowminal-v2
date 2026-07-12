'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { EASING, DURATION } from '@/lib/theme/motion'
import { GlowminalLogo } from '@/components/ui/GlowminalLogo'
import { ArrowRight, Check } from 'lucide-react'
import { joinWaitlist } from '@/app/actions/waitlist'

type UIState = 'idle' | 'securing' | 'sending' | 'success' | 'error'

export function WaitlistForm({ theme = 'light' }: { theme?: 'light' | 'dark' }) {
  const [email, setEmail] = useState('')
  const [uiState, setUiState] = useState<UIState>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || uiState !== 'idle' && uiState !== 'error') return

    setUiState('securing')
    setErrorMessage('')

    const hp = (document.getElementById('hp') as HTMLInputElement)?.value

    // Artificial delay to show "Securing your place..."
    await new Promise((resolve) => setTimeout(resolve, 800))
    setUiState('sending')
    
    // Artificial delay to show "Sending confirmation..."
    await new Promise((resolve) => setTimeout(resolve, 800))

    const result = await joinWaitlist({ email, source: 'website', hp })

    if (result.status === 'success') {
      setUiState('success')
    } else {
      setErrorMessage(result.message || 'Something went wrong.')
      setUiState('error')
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <AnimatePresence mode="wait">
        {uiState === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`flex flex-col items-center text-center p-8 rounded-3xl border shadow-lg ${
              theme === 'dark' 
                ? 'bg-[#011C15]/80 border-white/10 text-white backdrop-blur-md' 
                : 'bg-surface border-primary/20 text-text-primary'
            }`}
          >
            <div className={`flex h-16 w-16 items-center justify-center rounded-full mb-6 ${theme === 'dark' ? 'bg-primary/20 text-primary' : 'bg-primary/10 text-primary'}`}>
              <Check className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-medium mb-2">You're officially on the list.</h3>
            <p className={theme === 'dark' ? 'text-white/60' : 'text-text-secondary'}>
              We've sent a confirmation email to {email}. Check your inbox.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative flex flex-col items-center"
          >
            {/* Honeypot */}
            <input type="text" name="hp" id="hp" className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="relative w-full flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={uiState !== 'idle' && uiState !== 'error'}
                required
                autoComplete="email"
                autoCapitalize="none"
                autoCorrect="off"
                spellCheck="false"
                className={`w-full rounded-2xl border px-6 py-4 text-base placeholder:text-text-secondary focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50 transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-white/[0.03] border-white/10 text-white placeholder-white/30 focus:border-primary focus:bg-white/[0.08]'
                    : 'bg-surface border-divider text-text-primary focus:border-primary'
                }`}
              />
              <button
                type="submit"
                disabled={uiState !== 'idle' && uiState !== 'error'}
                className={`group relative flex h-[58px] min-w-[160px] flex-shrink-0 items-center justify-center overflow-hidden rounded-2xl px-8 font-medium shadow-sm transition-all hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-90 whitespace-nowrap active:scale-[0.98] touch-manipulation ${
                  theme === 'dark'
                    ? 'bg-white text-[#011C15]'
                    : 'bg-text-primary text-surface'
                }`}
              >
                <AnimatePresence mode="wait">
                  {uiState === 'idle' || uiState === 'error' ? (
                    <motion.div
                      key="idle"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2 whitespace-nowrap"
                    >
                      <span className="whitespace-nowrap">Join Waitlist</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 flex-shrink-0" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="flex items-center gap-2"
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                        className="text-surface flex items-center justify-center"
                      >
                        <GlowminalLogo variant="symbol" size={20} />
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>

            {/* Error Message */}
            <AnimatePresence>
              {uiState === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: 'auto' }}
                  exit={{ opacity: 0, y: -10, height: 0 }}
                  className="w-full text-left mt-3 px-2 text-sm text-red-500"
                >
                  {errorMessage}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Loading Status Text */}
            <AnimatePresence>
              {(uiState === 'securing' || uiState === 'sending') && (
                <motion.div
                  initial={{ opacity: 0, y: -10, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: 'auto' }}
                  exit={{ opacity: 0, y: -10, height: 0 }}
                  className="w-full text-center mt-4 text-sm font-medium text-primary flex items-center justify-center gap-2"
                >
                  <motion.span
                    key={uiState}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                  >
                    {uiState === 'securing' ? 'Securing your place...' : 'Sending confirmation...'}
                  </motion.span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}
