---
phase: Phase 1
priority: P1
project: Glowminal
status: Draft
title: Glowminal Product Recommendations Feature Specification
version: 1
---

# ProductRecommendations.md

> Product recommendations support the user's skincare journey by
> explaining *why* a product is suggested. Recommendations should always
> remain secondary to education and routine guidance.

# Objectives

-   Recommend relevant products without overwhelming users.
-   Explain every recommendation.
-   Build trust through transparency.
-   Never optimize for sales over user benefit.

------------------------------------------------------------------------

# Guiding Principles

-   Education before commerce.
-   Ingredients over marketing claims.
-   Explain why a product matches the user's skin.
-   Show alternatives whenever appropriate.
-   Avoid fear-based messaging.

------------------------------------------------------------------------

# User Journey

AI Analysis

↓

Personalized Routine

↓

Recommended Products

↓

Product Details

↓

Save / Dismiss

↓

Continue Routine

------------------------------------------------------------------------

# Recommendation Categories

-   Cleanser
-   Moisturizer
-   Sunscreen
-   Serum
-   Treatment
-   Exfoliant
-   Optional products

------------------------------------------------------------------------

# Product Card

Display:

-   Product image
-   Brand
-   Product name
-   Category
-   Key ingredients
-   Why it is recommended
-   Suitable skin types
-   Confidence indicator

Actions:

-   Learn More
-   Save
-   Replace
-   Dismiss

------------------------------------------------------------------------

# Recommendation Logic

Inputs:

-   Latest analysis
-   Skin type
-   Primary concerns
-   Allergies
-   Existing routine
-   Recommendation confidence

Future:

-   Budget
-   Country availability
-   Ingredient preferences

------------------------------------------------------------------------

# Ingredient Explanation

Each ingredient includes:

-   Purpose
-   Expected benefit
-   Common usage
-   Cautions

Use plain language.

------------------------------------------------------------------------

# Alternatives

Whenever possible show:

-   Primary recommendation
-   Budget option
-   Sensitive skin alternative

------------------------------------------------------------------------

# Empty State

"No product recommendations yet. Complete a skin analysis first."

------------------------------------------------------------------------

# Error States

-   Catalog unavailable
-   Recommendation service unavailable
-   Product removed

Provide retry and continue without blocking routine.

------------------------------------------------------------------------

# APIs

GET /products

GET /products/{id}

GET /recommendations/{scanId}

------------------------------------------------------------------------

# Database

Reads:

-   products
-   product_recommendations
-   analysis_reports

No writes except saved products (future).

------------------------------------------------------------------------

# Analytics

recommendations_viewed

product_opened

product_saved

recommendation_dismissed

------------------------------------------------------------------------

# Accessibility

-   Keyboard accessible cards
-   Screen-reader labels
-   Accessible ingredient lists
-   High contrast

------------------------------------------------------------------------

# Acceptance Criteria

-   Recommendations personalized.
-   Every recommendation includes a reason.
-   Alternatives displayed when available.
-   Responsive.
-   WCAG AA compliant.
-   Consistent with PRD, Brand, Design System and AIContext.

------------------------------------------------------------------------

# Future Enhancements

-   Affiliate integrations
-   Regional product catalogs
-   Stock availability
-   Price tracking
-   User reviews
-   Dermatologist-approved collections
