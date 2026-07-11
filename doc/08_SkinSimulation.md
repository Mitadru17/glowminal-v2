---
phase: Phase 1
priority: P1
project: Glowminal
status: Draft
title: Glowminal Skin Simulation Feature Specification
version: 1
---

# SkinSimulation.md

> Skin Simulation helps users visualize the expected direction of
> improvement from following a personalized routine. It is an
> educational projection, not a prediction or medical guarantee.

# Objectives

-   Increase user motivation through progress visualization.
-   Set realistic expectations.
-   Explain that improvement depends on consistency.
-   Reinforce long-term Skin Memory.

------------------------------------------------------------------------

# Core Principles

-   Never fabricate certainty.
-   Clearly distinguish projections from actual results.
-   Explain assumptions behind every projection.
-   Encourage regular rescans to compare projections with reality.

------------------------------------------------------------------------

# User Journey

AI Analysis

↓

Open Skin Simulation

↓

Select Time Horizon

↓

Review Projected Changes

↓

Read Assumptions

↓

Continue Routine

↓

Return for Future Scan

------------------------------------------------------------------------

# Projection Periods

Available views:

-   2 Weeks
-   4 Weeks
-   8 Weeks

Future:

-   3 Months
-   6 Months
-   12 Months

------------------------------------------------------------------------

# Inputs

Projection considers:

-   Latest skin analysis
-   Confidence score
-   Skin type
-   Primary concerns
-   Recommended routine
-   User preferences

Future: - Lifestyle adherence - Weather - Existing product usage

------------------------------------------------------------------------

# Projection Cards

Each card contains:

-   Metric name
-   Current value
-   Expected direction
-   Confidence
-   Explanation
-   Recommended action

Example metrics:

-   Hydration
-   Texture
-   Pigmentation
-   Redness
-   Oil Balance

------------------------------------------------------------------------

# Visual Philosophy

Use subtle overlays and comparison sliders.

Avoid unrealistic "perfect skin" renders.

Represent changes as educational illustrations rather than guaranteed
outcomes.

------------------------------------------------------------------------

# Explainability

Every projection answers:

-   Why is this expected?
-   What assumptions were made?
-   What may change the outcome?

------------------------------------------------------------------------

# Disclaimers

Display throughout:

-   Educational AI projection.
-   Results vary between individuals.
-   Not medical advice.
-   Regular rescans provide more reliable progress tracking.

------------------------------------------------------------------------

# Empty State

"Complete your first analysis to unlock Skin Simulation."

------------------------------------------------------------------------

# Error States

-   Simulation unavailable
-   Insufficient data
-   Low confidence
-   AI service unavailable

Provide retry and guidance.

------------------------------------------------------------------------

# APIs

POST /simulation

GET /analysis/{scanId}

GET /timeline

------------------------------------------------------------------------

# Database

Reads: - analysis_reports - routines - scans

Writes: - simulations

------------------------------------------------------------------------

# Analytics

simulation_opened

projection_changed

timeframe_selected

simulation_closed

------------------------------------------------------------------------

# Accessibility

-   Keyboard navigation
-   Screen-reader summaries
-   Color-independent indicators
-   Reduced motion

------------------------------------------------------------------------

# Acceptance Criteria

-   Projection available after analysis.
-   Every projection explains assumptions.
-   Confidence displayed.
-   Educational disclaimers visible.
-   Responsive and WCAG AA compliant.
-   Consistent with PRD, Brand, Design System and AIContext.

------------------------------------------------------------------------

# Future Enhancements

-   AR cosmetic try-on
-   Seasonal forecasting
-   Habit-aware projections
-   Dermatologist-reviewed simulation models
-   Before/after comparison against actual progress
