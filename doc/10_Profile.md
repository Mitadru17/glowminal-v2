---
phase: Phase 1
priority: P2
project: Glowminal
status: Draft
title: Glowminal Profile Feature Specification
version: 1
---

# Profile.md

> The Profile is the user's personal skin identity within Glowminal. It
> combines account information, skin preferences, progress summary, and
> privacy controls.

# Objectives

-   Centralize user information.
-   Improve personalization.
-   Give users ownership of their data.
-   Build trust through transparency.

------------------------------------------------------------------------

# User Journey

Dashboard

↓

Profile

↓

View Personal Information

↓

Edit Preferences

↓

Review Skin Summary

↓

Export/Delete Data

------------------------------------------------------------------------

# Layout

## Header

-   Avatar
-   Name
-   Email
-   Member since

## Skin Profile

Display:

-   Skin type
-   Primary concerns
-   Allergies & sensitivities
-   Preferred routine goals

Editable at any time.

## Skin Memory Summary

-   Total scans
-   Current Skin Score
-   Best improvement
-   Last scan date

## Preferences

-   Units (future)
-   Language (future)
-   Marketing preferences

## Data Management

Actions:

-   Export account data
-   Delete scans
-   Delete account

Require confirmation before destructive actions.

------------------------------------------------------------------------

# Editing Rules

Users may update:

-   Display name
-   Avatar
-   Skin type
-   Skin concerns
-   Allergies
-   Lifestyle notes (optional)

Changes should influence future recommendations.

------------------------------------------------------------------------

# Privacy

Clearly communicate:

-   Data ownership
-   Image storage
-   Export options
-   Deletion policy

------------------------------------------------------------------------

# Empty State

First-time users:

"Complete your first scan to build your Skin Profile."

------------------------------------------------------------------------

# Error States

-   Failed profile update
-   Avatar upload failed
-   Export unavailable

Provide retry.

------------------------------------------------------------------------

# APIs

GET /auth/me

PUT /profile

GET /timeline

POST /export

DELETE /account

------------------------------------------------------------------------

# Database

Reads/Writes:

-   users
-   profiles
-   scans
-   analysis_reports

------------------------------------------------------------------------

# Analytics

profile_viewed

profile_updated

avatar_changed

export_requested

account_delete_started

------------------------------------------------------------------------

# Accessibility

-   Keyboard navigation
-   Screen-reader labels
-   Accessible forms
-   Confirmation dialogs

------------------------------------------------------------------------

# Acceptance Criteria

-   Profile editable.
-   Preferences persist.
-   Export available.
-   Account deletion protected.
-   Responsive.
-   WCAG AA compliant.
-   Consistent with PRD, Brand, Design System and AIContext.

------------------------------------------------------------------------

# Future Enhancements

-   Connected wearable devices
-   Dermatologist profile sharing
-   Multi-profile family accounts
-   Health app integrations
