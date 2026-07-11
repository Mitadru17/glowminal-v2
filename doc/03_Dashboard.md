---
phase: Phase 1
priority: P0
project: Glowminal
status: Draft
title: Glowminal Dashboard Feature Specification
version: 1
---

# Dashboard.md

## Purpose

The Dashboard is the user's home after authentication. It should answer
three questions immediately:

1.  What is my current skin status?
2.  What should I do next?
3.  Am I improving over time?

The dashboard should feel calm, informative and action-oriented.

------------------------------------------------------------------------

# Success Criteria

-   User understands current skin health within 5 seconds.
-   Primary action (Start Scan) is immediately visible.
-   Returning users can continue their skincare journey without
    confusion.

------------------------------------------------------------------------

# Layout

## Header

-   Glowminal logo
-   Notifications (future)
-   User avatar

## Welcome Section

-   Greeting
-   Current date
-   Motivational message

## Hero Card

-   Overall Skin Score
-   Last scan date
-   Primary CTA: Start New Scan

## Quick Actions

-   Start Scan
-   View Routine
-   Timeline
-   Skin Simulation

## Skin Metrics

Cards for: - Hydration - Acne - Pigmentation - Texture - Oil Balance -
Sensitivity

Each card contains: - Score - Trend arrow - Confidence - Tap for details

## Routine Preview

-   Morning routine
-   Evening routine
-   Progress indicator
-   Continue button

## Timeline Preview

Latest scans with trend summary.

## Product Suggestions

Top three recommendations with reason.

------------------------------------------------------------------------

# User States

## First-time User

-   Empty dashboard
-   Educational onboarding
-   Large "Start First Scan" CTA

## Returning User

-   Latest score
-   Recent trends
-   Routine reminders

------------------------------------------------------------------------

# Empty States

No scans: "Start your first scan to build your Skin Memory."

No routine: "Complete a scan to receive a personalized routine."

------------------------------------------------------------------------

# Loading States

-   Skeleton cards
-   Score placeholder
-   Metric shimmer
-   Timeline skeleton

------------------------------------------------------------------------

# Error States

-   Failed to load dashboard
-   Failed to load routine
-   Failed to load timeline

Always provide Retry.

------------------------------------------------------------------------

# APIs

GET /auth/me

GET /timeline

GET /scans/history

GET /routines/latest

GET /recommendations/latest

------------------------------------------------------------------------

# Database

Reads from: - users - profiles - scans - analysis_reports - routines -
product_recommendations

------------------------------------------------------------------------

# Analytics

dashboard_view

scan_cta_clicked

routine_opened

timeline_opened

simulation_opened

------------------------------------------------------------------------

# Accessibility

-   Full keyboard support
-   Screen reader labels
-   Logical heading order
-   High contrast
-   Reduced motion

------------------------------------------------------------------------

# Acceptance Criteria

-   Dashboard loads under 2 seconds on broadband.
-   Fully responsive.
-   Accessible (WCAG AA).
-   Matches Brand, PRD, Design System and AIContext.
-   Clearly guides the user toward their next action.
