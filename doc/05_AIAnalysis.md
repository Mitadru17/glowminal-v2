---
phase: Phase 1
priority: P0
project: Glowminal
status: Draft
title: Glowminal AI Analysis Feature Specification
version: 1
---

# AIAnalysis.md

> The AI Analysis experience transforms a validated facial image into
> understandable, actionable skin insights. The experience must build
> trust through transparency rather than claiming certainty.

# Objectives

-   Explain the user's current skin condition.
-   Present insights in plain language.
-   Recommend practical next steps.
-   Establish a baseline for Skin Memory.

------------------------------------------------------------------------

# Guiding Principles

-   Explain before recommending.
-   Show confidence, not certainty.
-   Never present medical diagnoses.
-   Encourage progress over perfection.

------------------------------------------------------------------------

# Analysis Pipeline

Validated Image

↓

Face Alignment

↓

Feature Extraction

↓

Skin Metric Evaluation

↓

Confidence Calculation

↓

Recommendation Engine

↓

Routine Generation

↓

Skin Memory Update

------------------------------------------------------------------------

# Overall Skin Score

Display a single headline score.

Requirements:

-   Easy to understand
-   Consistent between scans
-   Never fluctuate due to UI changes
-   Show confidence indicator

Accompany with:

-   Summary paragraph
-   Positive observation
-   Highest-priority improvement

------------------------------------------------------------------------

# Individual Metrics

Each metric card contains:

-   Score
-   Confidence
-   Trend (if available)
-   Plain-language explanation
-   Suggested action

Phase 1 Metrics:

-   Hydration
-   Acne
-   Pigmentation
-   Texture
-   Pores
-   Oil Balance
-   Sensitivity
-   Redness
-   Elasticity

------------------------------------------------------------------------

# Explainability

Every metric answers:

1.  What did we observe?
2.  Why do we think this?
3.  What can improve it?

Expandable "Why?" section required.

------------------------------------------------------------------------

# Confidence System

Levels:

-   High
-   Medium
-   Low

Explain low confidence when:

-   Poor lighting
-   Partial face
-   Low resolution
-   Occlusion

Recommend re-scan when confidence is insufficient.

------------------------------------------------------------------------

# Recommendation Engine

Output categories:

-   Daily habits
-   Morning routine
-   Evening routine
-   Lifestyle
-   Product suggestions

Products are optional and should never dominate the experience.

------------------------------------------------------------------------

# Result Layout

1.  Overall Skin Score
2.  Summary
3.  Metric Grid
4.  Detailed Explanations
5.  Personalized Routine
6.  Product Recommendations
7.  Skin Simulation CTA
8.  Save & Timeline

------------------------------------------------------------------------

# Loading Experience

Show meaningful progress:

-   Preparing image
-   Evaluating skin
-   Building report
-   Personalizing recommendations

Avoid fake percentages.

------------------------------------------------------------------------

# Error Handling

Possible failures:

-   Analysis unavailable
-   Low confidence
-   Timeout
-   Incomplete processing

Provide:

-   Explanation
-   Retry
-   Contact support (future)

------------------------------------------------------------------------

# APIs

GET /analysis/{scanId}

GET /recommendations/{scanId}

POST /routines/generate

------------------------------------------------------------------------

# Database

Reads: - analysis_reports - scans

Writes: - routines - simulations (future)

------------------------------------------------------------------------

# Analytics

analysis_viewed

metric_expanded

routine_generated

recommendation_clicked

analysis_shared (future)

------------------------------------------------------------------------

# Accessibility

-   Semantic headings
-   Screen-reader friendly charts
-   Keyboard navigation
-   Color-independent indicators
-   Reduced motion

------------------------------------------------------------------------

# Medical Disclaimer

Glowminal provides educational AI-assisted insights.

It is not a medical diagnosis or a substitute for professional
dermatological care.

------------------------------------------------------------------------

# Acceptance Criteria

-   Analysis understandable in under 2 minutes.
-   Every metric explained.
-   Confidence shown.
-   Recommendations personalized.
-   Fully responsive.
-   WCAG AA compliant.
-   Matches PRD, Brand, Design System and AIContext.

------------------------------------------------------------------------

# Future Enhancements

-   Heatmaps
-   Explainable visual overlays
-   Seasonal comparisons
-   Multi-scan reasoning
-   Personalized confidence calibration
-   Clinical model integrations
