---
phase: Phase 1
priority: P0
project: Glowminal
status: Draft
title: Glowminal Skin Scan Feature Specification
version: 1
---

# SkinScan.md

> The Skin Scan experience is the heart of Glowminal. It must feel
> trustworthy, guided, and transparent rather than magical or
> mysterious.

# Goals

-   Capture a high-quality facial image suitable for AI analysis.
-   Prevent low-quality uploads before inference.
-   Build user confidence through clear guidance.
-   Minimize failed scans.

------------------------------------------------------------------------

# User Journey

Dashboard

↓

Start Scan

↓

Education & Consent

↓

Upload Photo

↓

Image Validation

↓

Quality Feedback

↓

Upload

↓

AI Processing

↓

Analysis Results

------------------------------------------------------------------------

# Entry Points

-   Dashboard CTA
-   Empty Dashboard
-   Timeline "New Scan"
-   Hero CTA (after signup)

------------------------------------------------------------------------

# Scan Methods

## Phase 1

-   Upload image from device

## Future

-   Live camera capture
-   Multi-angle capture
-   Video capture

------------------------------------------------------------------------

# Education Screen

Before the first scan explain:

-   Good lighting improves results.
-   Remove heavy beauty filters.
-   Face the camera directly.
-   Neutral facial expression.
-   No sunglasses or masks.

Checkbox:

"I understand this is AI-assisted analysis and not a medical diagnosis."

------------------------------------------------------------------------

# Upload Requirements

Accepted formats

-   JPG
-   JPEG
-   PNG
-   WEBP

Maximum size

-   10 MB

Minimum resolution

-   1024 × 1024 preferred

------------------------------------------------------------------------

# Image Quality Validation

Run validation before AI inference.

Checks:

-   Exactly one face detected
-   Face centered
-   Eyes visible
-   Adequate lighting
-   Low blur
-   No extreme tilt
-   No heavy occlusion
-   No beauty filter detected (future)

Each failed check explains: - What failed - Why it matters - How to fix
it

------------------------------------------------------------------------

# Processing Stages

1.  Uploading
2.  Image validation
3.  Face detection
4.  Feature extraction
5.  Skin analysis
6.  Report generation

Display meaningful progress text instead of a generic spinner.

------------------------------------------------------------------------

# UI Components

-   UploadDropzone
-   ImagePreview
-   ValidationChecklist
-   ProgressStepper
-   RetryPanel
-   SuccessState

------------------------------------------------------------------------

# Error States

-   Unsupported format
-   File too large
-   No face detected
-   Multiple faces
-   Poor lighting
-   Excessive blur
-   Upload failure
-   AI timeout

Every error provides: - Explanation - Retry action - Help link (future)

------------------------------------------------------------------------

# Accessibility

-   Keyboard upload
-   Screen reader announcements
-   Focus management
-   Reduced motion
-   High contrast validation indicators

------------------------------------------------------------------------

# API Usage

POST /scans

GET /scans/{id}

GET /analysis/{scanId}

------------------------------------------------------------------------

# Database Usage

Tables

-   scans
-   analysis_reports

Storage

-   scan-images
-   processed-images

------------------------------------------------------------------------

# Analytics

scan_started

scan_uploaded

validation_failed

validation_passed

analysis_started

analysis_completed

analysis_failed

------------------------------------------------------------------------

# Privacy

-   Images encrypted at rest
-   Signed URLs only
-   User may delete scans
-   No image sharing without explicit consent

------------------------------------------------------------------------

# Acceptance Criteria

-   Guided upload experience
-   Validation before inference
-   Clear recovery for all errors
-   Responsive
-   Accessible (WCAG AA)
-   Consistent with PRD, Brand, Design System and AIContext

------------------------------------------------------------------------

# Future Enhancements

-   Live camera guidance
-   Real-time quality scoring
-   Multi-image comparison
-   Automatic lighting correction
-   On-device pre-validation
