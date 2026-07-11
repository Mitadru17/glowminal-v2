---
phase: Phase 1
priority: P1
project: Glowminal
status: Draft
title: Glowminal Routine Builder Feature Specification
version: 1
---

# RoutineBuilder.md

> The Routine Builder converts AI insights into a simple, personalized
> skincare plan that users can realistically follow.

# Goals

-   Turn analysis into action.
-   Keep routines simple and sustainable.
-   Explain why each step exists.
-   Adapt over time as Skin Memory evolves.

------------------------------------------------------------------------

# User Journey

AI Analysis

↓

Generate Routine

↓

Review Steps

↓

Customize

↓

Save Routine

↓

Track Progress

------------------------------------------------------------------------

# Routine Structure

Morning

-   Cleanser
-   Treatment (if needed)
-   Moisturizer
-   Sunscreen

Evening

-   Cleanser
-   Treatment
-   Moisturizer

Weekly

-   Exfoliation (if appropriate)
-   Mask (optional)

Lifestyle

-   Hydration
-   Sleep
-   Diet
-   Sun protection

------------------------------------------------------------------------

# Routine Cards

Each card displays:

-   Step number
-   Product type
-   Why it matters
-   Estimated time
-   Optional product recommendation

Expandable details explain the science behind the step.

------------------------------------------------------------------------

# Personalization

Routine generation considers:

-   Skin metrics
-   Skin type
-   User concerns
-   Allergies
-   Existing products (future)
-   Previous scan history

------------------------------------------------------------------------

# Editing

Users may:

-   Reorder steps
-   Skip optional steps
-   Replace recommended products
-   Save updated routine

Core educational guidance cannot be removed.

------------------------------------------------------------------------

# Progress Tracking

Display:

-   Routine completion status (future)
-   Last updated date
-   Linked analysis report

------------------------------------------------------------------------

# Empty State

"No routine yet. Complete a skin analysis to generate your first
personalized routine."

------------------------------------------------------------------------

# Error States

-   Routine generation failed
-   AI unavailable
-   Missing analysis

Provide retry and fallback guidance.

------------------------------------------------------------------------

# APIs

POST /routines/generate

GET /routines/latest

PUT /routines/{id}

------------------------------------------------------------------------

# Database

Reads: - analysis_reports - profiles

Writes: - routines

------------------------------------------------------------------------

# Analytics

routine_generated

routine_saved

routine_edited

routine_viewed

product_swapped

------------------------------------------------------------------------

# Accessibility

-   Keyboard operable
-   Semantic step lists
-   Screen-reader friendly
-   Reduced motion support

------------------------------------------------------------------------

# Acceptance Criteria

-   Routine generated from analysis.
-   Every step includes a clear explanation.
-   Editable without breaking recommendations.
-   Responsive and WCAG AA compliant.
-   Consistent with PRD, Brand, Design System, and AIContext.

------------------------------------------------------------------------

# Future Enhancements

-   Routine reminders
-   Habit tracking
-   Smart routine adaptation
-   Weather-aware recommendations
-   Product inventory integration
