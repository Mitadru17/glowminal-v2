---
phase: Phase 1
priority: P1
project: Glowminal
status: Draft
title: Glowminal Timeline Feature Specification
version: 1
---

# Timeline.md

> The Timeline transforms isolated scans into a long-term story of the
> user's skin. It is the foundation of Skin Memory and the primary
> retention feature.

# Objectives

-   Show measurable progress over time.
-   Help users understand trends instead of single results.
-   Reinforce consistent skincare habits.
-   Make improvements and regressions easy to interpret.

------------------------------------------------------------------------

# User Journey

Dashboard

↓

Timeline

↓

Select Scan

↓

Compare Progress

↓

View Recommendations

↓

Start New Scan

------------------------------------------------------------------------

# Layout

## Timeline Header

-   Current Skin Score
-   Change since previous scan
-   Last updated
-   Start New Scan CTA

## Progress Chart

Metrics over time:

-   Overall Score
-   Hydration
-   Acne
-   Pigmentation
-   Texture
-   Oil Balance
-   Redness

Users can toggle visible metrics.

## Scan History

Each entry displays:

-   Date
-   Thumbnail
-   Overall Score
-   Confidence
-   Quick summary

Selecting an entry opens the detailed report.

------------------------------------------------------------------------

# Comparison Mode

Compare:

-   Latest vs Previous
-   Custom Date Range (future)

Highlight:

-   Improvements
-   No Change
-   Areas needing attention

Never use alarmist language.

------------------------------------------------------------------------

# Trend Insights

Generate plain-language observations.

Examples:

-   "Hydration has steadily improved over the last month."
-   "Redness appears stable across recent scans."

Every insight should include confidence.

------------------------------------------------------------------------

# Empty State

"No scans yet. Complete your first scan to begin your Skin Memory."

------------------------------------------------------------------------

# Loading State

-   Skeleton charts
-   Placeholder scan cards
-   Progressive loading

------------------------------------------------------------------------

# Error States

-   Timeline unavailable
-   Missing scan data
-   Failed comparison

Provide retry action.

------------------------------------------------------------------------

# APIs

GET /timeline

GET /scans/history

GET /analysis/{scanId}

------------------------------------------------------------------------

# Database

Reads:

-   scans
-   analysis_reports

No writes in Phase 1.

------------------------------------------------------------------------

# Analytics

timeline_viewed

comparison_opened

scan_selected

new_scan_started

------------------------------------------------------------------------

# Accessibility

-   Keyboard accessible charts
-   Text summaries for graphs
-   High contrast
-   Reduced motion

------------------------------------------------------------------------

# Acceptance Criteria

-   Trends understandable at a glance.
-   Every graph has textual explanation.
-   Comparison view works.
-   Fully responsive.
-   WCAG AA compliant.
-   Matches PRD, Brand, Design System and AIContext.

------------------------------------------------------------------------

# Future Enhancements

-   Seasonal trends
-   Weekly reports
-   Milestones
-   Shareable progress summaries
-   AI-generated long-term insights
