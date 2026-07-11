---
phase: Phase 1
priority: P0
project: Glowminal
status: Draft
title: Glowminal Authentication Feature Specification
version: 1
---

# Authentication.md

## Purpose

Provide a secure, low-friction onboarding experience while maximizing
trust and minimizing barriers to trying Glowminal.

## Supported Authentication

-   Email & Password
-   Google OAuth
-   Guest Mode (limited functionality)

Future: - Apple Sign In - Passkeys - MFA

------------------------------------------------------------------------

# User Goals

-   Create an account in under 60 seconds.
-   Continue as guest without commitment.
-   Understand why an account is beneficial.
-   Recover access easily.

------------------------------------------------------------------------

# Screens

1.  Sign Up
2.  Sign In
3.  Forgot Password
4.  Reset Password
5.  Verify Email
6.  Guest Welcome

------------------------------------------------------------------------

# Sign Up Layout

-   Brand logo
-   Headline
-   Benefits list
-   Email
-   Password
-   Confirm Password
-   Google button
-   Guest option
-   Terms & Privacy links

Primary CTA: Create Account

------------------------------------------------------------------------

# Sign In Layout

-   Email
-   Password
-   Remember Me
-   Forgot Password
-   Google Sign In
-   Continue as Guest

------------------------------------------------------------------------

# Validation Rules

Email: - Valid format - Unique account

Password: - Minimum 8 characters - Uppercase - Lowercase - Number

Display validation in real time.

------------------------------------------------------------------------

# Guest Mode

Guest users can:

-   Explore landing page
-   Upload limited scans
-   View temporary analysis

Guest users cannot:

-   Save history
-   Build long-term Skin Memory
-   Sync across devices

Prompt upgrade after first analysis.

------------------------------------------------------------------------

# Session Management

-   Secure JWT
-   Refresh tokens
-   Automatic renewal
-   Logout everywhere (future)

------------------------------------------------------------------------

# Route Protection

Public: - Landing - Login - Signup

Protected: - Dashboard - Timeline - Profile - Scan History

Redirect unauthenticated users to Sign In.

------------------------------------------------------------------------

# Error States

-   Invalid email
-   Incorrect password
-   Existing account
-   Network unavailable
-   OAuth cancelled
-   Session expired

Provide actionable recovery.

------------------------------------------------------------------------

# Loading States

-   Creating account
-   Authenticating
-   Redirecting
-   Refreshing session

------------------------------------------------------------------------

# Accessibility

-   Keyboard navigation
-   Screen-reader labels
-   Focus management
-   Visible errors
-   Reduced motion support

------------------------------------------------------------------------

# Security

-   Supabase Auth
-   HTTPS only
-   CSRF protection where applicable
-   Rate limiting
-   Passwords never stored client-side

------------------------------------------------------------------------

# API Usage

POST /auth/signup

POST /auth/login

POST /auth/logout

GET /auth/me

------------------------------------------------------------------------

# Database

Tables:

users

profiles

Audit fields: - created_at - updated_at

------------------------------------------------------------------------

# Analytics

Events:

signup_started

signup_completed

login_completed

google_login

guest_login

password_reset

------------------------------------------------------------------------

# Acceptance Criteria

-   Sign up succeeds.
-   Google login works.
-   Guest mode works.
-   Validation messages are clear.
-   Protected routes enforced.
-   Responsive.
-   Accessible.
-   Consistent with PRD, Brand, Design System and AIContext.
