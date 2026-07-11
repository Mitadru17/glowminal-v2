---
phase: Phase 1
project: Glowminal
status: Draft
title: Glowminal System Architecture
version: 0.1
---

# Architecture.md

> Defines the technical architecture for the Phase 1 Glowminal web
> application.

# Architecture Principles

-   AI-first
-   Modular
-   Scalable
-   Secure by default
-   Explainable AI
-   Production-ready
-   Mobile-ready architecture

------------------------------------------------------------------------

# Monorepo Structure

``` text
glowminal/
├── apps/
│   └── web/
├── packages/
│   ├── ui/
│   ├── config/
│   ├── types/
│   └── utils/
├── docs/
├── public/
└── package.json
```

------------------------------------------------------------------------

# Frontend

Framework: - Next.js (App Router) - React - TypeScript - Tailwind CSS -
shadcn/ui - Motion - TanStack Query - Zustand

Responsibilities:

-   Authentication
-   Upload flow
-   Dashboard
-   Analysis UI
-   Timeline
-   Simulation
-   Product recommendations

------------------------------------------------------------------------

# Backend

Platform: - Supabase

Services:

-   Authentication
-   PostgreSQL
-   Storage
-   Edge Functions
-   Realtime (future)

------------------------------------------------------------------------

# AI Pipeline

Upload Image

↓

Validation

↓

Face Detection

↓

Image Quality

↓

Feature Extraction

↓

Skin Analysis

↓

Reasoning Engine

↓

Confidence Generation

↓

Result Storage

↓

Dashboard

------------------------------------------------------------------------

# Storage

Buckets:

-   profile-images
-   scan-images
-   processed-images

Future:

-   reports
-   exports

------------------------------------------------------------------------

# Authentication

Supported:

-   Email
-   Google
-   Guest Mode

Future:

-   Apple
-   Passkeys

------------------------------------------------------------------------

# Security

-   HTTPS only
-   JWT authentication
-   Row Level Security
-   Encrypted storage
-   Signed URLs
-   Rate limiting

------------------------------------------------------------------------

# Performance

Targets:

-   Initial load \<2 seconds
-   Image optimization
-   Code splitting
-   Lazy loading
-   Server Components where possible

------------------------------------------------------------------------

# State Management

Remote: TanStack Query

Local: Zustand

Forms: React Hook Form (recommended)

------------------------------------------------------------------------

# Error Handling

Client:

-   Validation
-   Retry
-   Friendly messaging

Server:

-   Structured errors
-   Logging
-   Monitoring

------------------------------------------------------------------------

# Monitoring

Recommended:

-   Sentry
-   Vercel Analytics
-   Supabase logs

Future:

-   PostHog
-   OpenTelemetry

------------------------------------------------------------------------

# Deployment

Frontend: Vercel

Backend: Supabase

Domain: Custom domain

CI/CD: GitHub Actions (future)

------------------------------------------------------------------------

# Scalability

Phase 1: Single web application

Phase 2: Dedicated AI services

Phase 3: Mobile applications

Phase 4: Microservices if required

------------------------------------------------------------------------

# Definition of Success

The architecture should allow new features to be added without major
rewrites while maintaining performance, accessibility, and a consistent
developer experience.
