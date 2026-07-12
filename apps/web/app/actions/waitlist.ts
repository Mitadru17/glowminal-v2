'use server'

import { z } from 'zod'
import { createAdminClient } from '@/lib/supabase/admin'
import { Resend } from 'resend'
import WaitlistWelcome from '@/emails/WaitlistWelcome'
import FounderNotification from '@/emails/FounderNotification'
import React from 'react'

const resend = new Resend(process.env.RESEND_API_KEY)
const EMAIL_FROM = process.env.EMAIL_FROM || 'Glowminal <hello@glowminal.tech>'
const FOUNDERS_EMAIL = 'founders@glowminal.tech'

const joinWaitlistSchema = z.object({
  email: z.string().email('Please enter a valid email address.').trim().toLowerCase(),
  source: z.string().default('website'),
  hp: z.string().optional(), // honeypot
})

export type WaitlistState = {
  status: 'idle' | 'success' | 'error'
  message?: string
}

export async function joinWaitlist(prevState: WaitlistState, formData: FormData): Promise<WaitlistState> {
  try {
    // 1. Validation & Sanitization
    const rawEmail = formData.get('email')
    const rawSource = formData.get('source') || 'website'
    const rawHp = formData.get('hp')

    const validatedData = joinWaitlistSchema.safeParse({
      email: rawEmail,
      source: rawSource,
      hp: rawHp,
    })

    if (!validatedData.success) {
      return {
        status: 'error',
        message: validatedData.error.issues[0]?.message || 'Invalid input.',
      }
    }

    const { email, source, hp } = validatedData.data

    // 2. Abuse Protection (Honeypot)
    if (hp) {
      // If honeypot is filled, it's a bot. Silently succeed to trick the bot.
      return { status: 'success' }
    }

    // 3. Duplicate Detection & Database Storage
    const supabaseAdmin = createAdminClient()
    
    // Check if already exists
    const { data: existingUser, error: checkError } = await supabaseAdmin
      .from('waitlist')
      .select('id')
      .eq('email', email)
      .single()

    if (checkError && checkError.code !== 'PGRST116') { // PGRST116 is "no rows returned"
      console.error('Supabase check error:', checkError)
      return { status: 'error', message: 'Failed to verify email. Please try again.' }
    }

    if (existingUser) {
      return { status: 'error', message: 'This email is already on the waitlist.' }
    }

    // Insert into DB
    const { error: insertError } = await supabaseAdmin
      .from('waitlist')
      .insert([{ email, source }])

    if (insertError) {
      console.error('Supabase insert error:', insertError)
      return { status: 'error', message: 'Failed to join waitlist. Please try again.' }
    }

    // 4. Send Emails (Wrap in try-catch so it doesn't fail the signup)
    try {
      if (process.env.RESEND_API_KEY) {
        // Send Welcome Email to User
        await resend.emails.send({
          from: EMAIL_FROM,
          to: email,
          subject: "✨ You're officially on the Glowminal waitlist",
          react: React.createElement(WaitlistWelcome, { email }),
        })

        // Send Notification to Founders
        const timestamp = new Date().toISOString()
        await resend.emails.send({
          from: EMAIL_FROM,
          to: FOUNDERS_EMAIL,
          subject: "New Waitlist Signup 🎉",
          react: React.createElement(FounderNotification, { email, source, timestamp }),
        })
      } else {
        console.warn('RESEND_API_KEY not configured. Emails were not sent.')
      }
    } catch (emailError) {
      // Log the failure but don't fail the signup since the user is stored
      console.error('Email delivery failed:', emailError)
    }

    return { status: 'success' }
    
  } catch (error) {
    console.error('Waitlist error:', error)
    return { status: 'error', message: 'An unexpected error occurred. Please try again.' }
  }
}
