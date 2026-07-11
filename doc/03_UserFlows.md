---
phase: Phase 1
project: Glowminal
status: Draft
title: Glowminal User Flows
version: 0.1
---

# UserFlows.md

> This document defines every primary user journey for the Phase 1 web
> application.

# Design Goals

Every flow should be:

-   Clear
-   Explainable
-   Low-friction
-   Accessible
-   Recoverable from errors

------------------------------------------------------------------------

# Primary Journey

Landing

↓

Sign Up / Continue as Guest

↓

Consent

↓

Dashboard

↓

Start Scan

↓

Image Validation

↓

AI Processing

↓

Skin Report

↓

Routine

↓

Timeline

↓

Skin Simulation

------------------------------------------------------------------------

# Flow 1 --- Landing

Purpose: Introduce Glowminal and establish trust.

Sections:

-   Hero
-   Features
-   How it Works
-   Science & Privacy
-   Testimonials (future)
-   CTA

Primary CTA: Start Free Scan

Secondary CTA: Learn More

------------------------------------------------------------------------

# Flow 2 --- Authentication

Options:

-   Email
-   Google
-   Guest

Errors:

-   Invalid credentials
-   OAuth failure
-   Network unavailable

Recovery: Clear guidance and retry.

------------------------------------------------------------------------

# Flow 3 --- Consent

Before first scan users must acknowledge:

-   AI assistance only
-   Not a medical diagnosis
-   Image processing consent
-   Privacy policy

Cannot proceed without consent.

------------------------------------------------------------------------

# Flow 4 --- Dashboard

Displays:

-   Welcome
-   Last scan
-   Skin score
-   Start Scan
-   Routine shortcut
-   Timeline preview

Empty state: Prompt first scan.

------------------------------------------------------------------------

# Flow 5 --- Scan

User uploads photo.

Validation checks:

-   Face detected
-   One face only
-   Good lighting
-   Sharp image
-   Face centered

Failures explain why and suggest fixes.

------------------------------------------------------------------------

# Flow 6 --- Processing

Stages:

1.  Upload
2.  Validation
3.  Feature extraction
4.  AI analysis
5.  Report generation

Show progress messages rather than a spinning loader.

------------------------------------------------------------------------

# Flow 7 --- Skin Report

Sections:

-   Overall score
-   Individual metrics
-   Confidence
-   Explanations
-   Suggested actions

Each metric expands for details.

------------------------------------------------------------------------

# Flow 8 --- Routine Builder

Morning

Evening

Weekly

Lifestyle tips

Users may edit and save.

------------------------------------------------------------------------

# Flow 9 --- Timeline

Display historical scans.

Compare:

-   Score
-   Hydration
-   Acne
-   Pigmentation
-   Texture

Highlight trends rather than isolated values.

------------------------------------------------------------------------

# Flow 10 --- Skin Simulation

Purpose: Help users understand expected improvement after consistent
routine use.

Inputs:

-   Latest scan
-   Selected routine

Outputs:

Estimated improvement at:

-   2 weeks
-   4 weeks
-   8 weeks

Clearly label as AI projection, not guaranteed outcome.

------------------------------------------------------------------------

# Error States

Examples:

No internet

Upload failed

Poor image quality

Processing timeout

Analysis unavailable

Each error includes:

-   Cause
-   Next step
-   Retry option

------------------------------------------------------------------------

# Empty States

Timeline: "No scans yet."

Routine: "Complete your first scan."

Simulation: "Available after analysis."

------------------------------------------------------------------------

# Success States

Successful upload

Analysis complete

Routine saved

Profile updated

Use subtle confirmations.

------------------------------------------------------------------------

# Accessibility

Keyboard operable

Screen-reader friendly

Visible focus

Reduced motion respected

------------------------------------------------------------------------

# Acceptance Criteria

A flow is complete when:

-   Happy path works
-   Edge cases handled
-   Errors recoverable
-   Mobile responsive
-   Accessible
-   Matches PRD, Brand and Design System
