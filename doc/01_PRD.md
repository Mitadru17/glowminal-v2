---
owner: Mitadru Roy
phase: Phase 1 (Web MVP)
project: Glowminal
status: Draft
title: Glowminal Product Requirements Document
version: 0.1
---

# Glowminal --- Product Requirements Document (PRD)

> **Vision:** Build the most trusted AI-powered skin intelligence
> platform that helps people understand, track, and improve their skin
> through science, explainable AI, and long-term progress---not generic
> beauty advice.

## 1. Executive Summary

Glowminal is an AI-first web platform that analyzes facial skin from
user-provided photos, produces explainable skin insights, recommends
personalized routines, tracks long-term progress, and lays the
foundation for future features such as skin simulation, AR cosmetic
try-on, and dermatologist integrations.

Phase 1 focuses on one core promise:

> **Upload a face photo → Receive trustworthy skin intelligence → Build
> a personalized routine → Track improvements over time.**

The application is intentionally **not** positioned as an online store
or beauty marketplace during Phase 1. Trust, clarity, and scientific
communication are prioritized over feature count.

------------------------------------------------------------------------

# 2. Problem Statement

Most skincare apps today suffer from one or more of these issues:

-   Generic recommendations.
-   Black-box AI with little explanation.
-   Product-first instead of user-first.
-   No meaningful long-term tracking.
-   Overwhelming interfaces.
-   Limited personalization.

Glowminal addresses these by creating a persistent "Skin Memory" that
evolves as users continue scanning over time.

------------------------------------------------------------------------

# 3. Product Vision

Glowminal becomes the "Apple Health for Skin."

Instead of isolated scans, it builds an evolving understanding of the
user's skin, detecting trends and explaining changes.

------------------------------------------------------------------------

# 4. Mission

Empower everyone to understand their skin through accessible,
explainable AI while maintaining privacy, transparency, and scientific
credibility.

------------------------------------------------------------------------

# 5. Target Audience

Primary: - Ages 18--35 - Interested in skincare - Comfortable using AI
tools - Wants guidance without visiting a dermatologist for every
concern

Secondary: - Content creators - Beauty enthusiasts - Professionals
seeking routine optimization

------------------------------------------------------------------------

# 6. Product Principles

1.  Explain every AI conclusion.
2.  Track progress over time.
3.  Keep the interface calm and minimal.
4.  Never overwhelm users.
5.  Recommend products only when appropriate.
6.  Privacy by design.
7.  Accessibility first.

------------------------------------------------------------------------

# 7. Phase 1 Goals

## Included

-   Landing page
-   Authentication
-   User profile
-   AI skin scan
-   Quality validation
-   Skin analysis report
-   Overall Skin Score
-   Individual skin metrics
-   Personalized routine
-   Scan history
-   Progress timeline
-   Product recommendations
-   Product explanation
-   Skin Memory
-   Basic Skin Simulation (expected improvements)
-   Responsive web application

## Explicitly Excluded

-   Community
-   Marketplace
-   Affiliate system
-   Dermatologist booking
-   Subscription billing
-   Mobile apps
-   Social features

------------------------------------------------------------------------

# 8. Phase 1 Core Features

## Landing

Professional brand introduction.

## Authentication

-   Email
-   Google
-   Guest Mode

## AI Scan

Requirements:

-   Face validation
-   Lighting detection
-   Blur detection
-   Face alignment
-   Multiple-face detection

## Analysis

Metrics include:

-   Overall Skin Score
-   Hydration
-   Texture
-   Acne
-   Pigmentation
-   Redness
-   Oil Balance
-   Sensitivity
-   Pores
-   Elasticity

Each metric contains:

-   Score
-   Confidence
-   Explanation
-   Suggested improvement

## Routine Builder

Morning routine.

Night routine.

Lifestyle suggestions.

Product recommendations remain optional.

## Skin Memory

Stores historical scans and allows comparison over time.

## Skin Simulation (Phase 1 MVP)

Users can preview the **expected direction of improvement** after
following a recommended routine.

This is not medical prediction and must be clearly labeled as an AI
estimate.

Future phases may include AR try-on for makeup and tinted products.

------------------------------------------------------------------------

# 9. User Flow

Landing

↓

Sign Up

↓

Consent

↓

Upload Scan

↓

Validation

↓

AI Processing

↓

Results

↓

Routine

↓

Timeline

↓

Simulation

------------------------------------------------------------------------

# 10. Success Metrics

Launch goals:

-   100 beta users
-   500 completed scans
-   Average analysis time \<20 seconds
-   40% weekly retention
-   70% routine completion
-   4.5/5 average satisfaction

------------------------------------------------------------------------

# 11. Technical Constraints

Frontend: - Next.js - React - TypeScript - Tailwind CSS

Backend: - Supabase - PostgreSQL - Storage - Edge Functions

Deployment: - Vercel

AI: - Vision-capable models - Explainable pipeline - Modular
architecture

------------------------------------------------------------------------

# 12. Privacy

Users retain ownership of uploaded images.

Images must be encrypted in storage.

Users can export or delete their data.

Glowminal is **not** a medical diagnosis tool.

------------------------------------------------------------------------

# 13. Risks

-   False AI confidence
-   Poor lighting affecting results
-   User trust
-   Medical misunderstandings

Mitigation:

-   Confidence scores
-   Clear disclaimers
-   Explainable outputs
-   Re-scan guidance

------------------------------------------------------------------------

# 14. Roadmap

Phase 1 - Web MVP

Phase 2 - Notifications - Advanced progress tracking - Better AI

Phase 3 - Mobile apps - Premium

Phase 4 - AR cosmetic try-on - Marketplace - Dermatologist integrations

------------------------------------------------------------------------

# 15. Definition of Success

Glowminal succeeds when users return regularly because they trust its
ability to explain changes in their skin over time---not because it
pushes products.

------------------------------------------------------------------------

## Open Questions

-   Which vision model should power the first release?
-   Should guest scans persist locally?
-   How should confidence scores be presented?
-   Which skin conditions are supported in the MVP?
