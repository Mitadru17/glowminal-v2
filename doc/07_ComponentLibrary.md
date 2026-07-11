---
phase: Phase 1
project: Glowminal
status: Draft
title: Glowminal Component Library
version: 0.1
---

# ComponentLibrary.md

> Canonical UI component specification for Glowminal.

# Principles

-   Reusable before custom
-   Accessible by default
-   Mobile-first
-   Consistent spacing
-   Token-driven styling

------------------------------------------------------------------------

# Component Hierarchy

Primitives ↓ Shared Components ↓ Feature Components ↓ Page Layouts

------------------------------------------------------------------------

# Buttons

Variants: - Primary - Secondary - Ghost - Danger

States: - Default - Hover - Focus - Active - Loading - Disabled

------------------------------------------------------------------------

# Inputs

Supported:

-   Text
-   Email
-   Password
-   Search
-   Textarea
-   Select
-   File Upload

All inputs require: - Label - Helper text - Error state - Success state

------------------------------------------------------------------------

# Cards

-   AnalysisCard
-   MetricCard
-   RoutineCard
-   ProductCard
-   TimelineCard
-   FeatureCard

Shared rules: - 12px radius - Consistent padding - Soft elevation

------------------------------------------------------------------------

# Navigation

Desktop: Top navigation

Mobile: Drawer navigation

Persistent user profile menu.

------------------------------------------------------------------------

# Hero Section

Contains: - Headline - Supporting copy - Primary CTA - Secondary CTA -
Illustration

------------------------------------------------------------------------

# Scan Components

-   UploadDropzone
-   CameraPlaceholder
-   ImagePreview
-   ValidationChecklist
-   ProgressIndicator

------------------------------------------------------------------------

# Analysis Components

-   SkinScoreRing
-   MetricGrid
-   MetricCard
-   ConfidenceBadge
-   RecommendationPanel

------------------------------------------------------------------------

# Timeline Components

-   TrendChart
-   ScanHistoryCard
-   ComparisonView
-   EmptyTimeline

------------------------------------------------------------------------

# Routine Components

-   RoutineStep
-   RoutineSection
-   LifestyleCard
-   SaveRoutineButton

------------------------------------------------------------------------

# Product Components

-   ProductGrid
-   ProductCard
-   IngredientTag
-   RecommendationReason

------------------------------------------------------------------------

# Simulation Components

-   ProjectionCard
-   ProgressComparison
-   ImprovementTimeline
-   DisclaimerPanel

------------------------------------------------------------------------

# Feedback Components

-   Toast
-   Alert
-   Modal
-   Dialog
-   Skeleton
-   Spinner
-   EmptyState

------------------------------------------------------------------------

# Layout Components

-   PageContainer
-   Section
-   Grid
-   Sidebar (future)
-   Footer

------------------------------------------------------------------------

# Accessibility

Every interactive component must support: - Keyboard navigation -
Visible focus - Screen readers - Reduced motion - Proper ARIA where
required

------------------------------------------------------------------------

# Definition of Done

A component is complete when: - Responsive - Accessible - Typed -
Reusable - Documented - Uses design tokens only - Matches Brand.md and
DesignSystem.md
