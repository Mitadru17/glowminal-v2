---
owner: Engineering
project: Glowminal
status: Approved
title: AI Development Workflow & Technology Stack
version: 1
---

# AI Development Workflow & Technology Stack

> This document is the single source of truth for all technical
> decisions, development workflow, AI-assisted engineering practices,
> and quality standards for Glowminal.

------------------------------------------------------------------------

# Vision

Glowminal is a production-grade AI Skin Intelligence Platform designed
to be built with AI coding agents while maintaining the standards of a
senior engineering team.

Every implementation should prioritize:

-   Maintainability
-   Accessibility
-   Performance
-   Explainability
-   Scalability
-   Clean architecture

------------------------------------------------------------------------

# Core Technology Stack

## Frontend

-   Next.js 15 (App Router)
-   React 19
-   TypeScript
-   Tailwind CSS v4
-   shadcn/ui
-   Framer Motion
-   React Bits (inspiration only; customize components)

## Backend

-   Supabase
-   PostgreSQL
-   Supabase Auth
-   Supabase Storage
-   Supabase Edge Functions (where appropriate)

## AI Layer

-   OpenRouter
-   Vision-capable AI models
-   Modular AI provider architecture
-   Explainable AI pipeline
-   Confidence scoring
-   AI abstraction layer (no vendor lock-in)

## State Management

-   Zustand
-   TanStack Query

## Forms & Validation

-   React Hook Form
-   Zod

## Charts & Data Visualization

-   Recharts
-   Tremor

## Deployment

-   Vercel
-   Supabase Cloud

## Analytics

-   PostHog
-   Vercel Analytics

## Testing

-   Playwright
-   Vitest

------------------------------------------------------------------------

# AI Development Workflow

## Primary Coding Agent

-   Cline

## Secondary Coding Agents

-   Claude Code
-   GitHub Copilot

## Design Workflow

-   Figma
-   React Bits (reference only)
-   Custom component implementation

## Every Feature Must Reference

-   PRD.md
-   Brand.md
-   DesignSystem.md
-   AIContext.md
-   Feature Specification
-   Approved Figma Design
-   CodingStandards.md
-   Architecture.md

Never implement features without consulting these documents.

------------------------------------------------------------------------

# Development Principles

-   Mobile-first
-   Accessibility-first (WCAG AA)
-   Server Components by default
-   Type-safe everywhere
-   No `any`
-   Reusable components
-   Production-quality code
-   Explainable AI over opaque AI
-   Optimistic UI where appropriate
-   Progressive enhancement
-   Secure by default

------------------------------------------------------------------------

# Performance Targets

-   Lighthouse ≥ 95
-   LCP \< 2.5s
-   CLS \< 0.1
-   Fast initial load
-   Optimized images
-   Code splitting
-   Lazy loading where appropriate

------------------------------------------------------------------------

# Code Quality

-   Strict TypeScript
-   ESLint
-   Prettier
-   Consistent naming
-   Small reusable components
-   Clear folder structure
-   Document complex logic

------------------------------------------------------------------------

# Security

-   Authentication via Supabase Auth
-   Row Level Security (RLS)
-   HTTPS only
-   Signed URLs for images
-   Secrets stored securely
-   Input validation everywhere

------------------------------------------------------------------------

# Accessibility

-   WCAG AA compliance
-   Semantic HTML
-   Keyboard navigation
-   Screen reader support
-   Visible focus states
-   Color-independent status indicators

------------------------------------------------------------------------

# Git Workflow

-   Feature branches
-   Pull Requests
-   Code review before merge
-   Conventional commits
-   CI checks before deployment

------------------------------------------------------------------------

# Folder Structure (High Level)

docs/ app/ components/ features/ hooks/ lib/ services/ store/ types/
public/

------------------------------------------------------------------------

# Definition of Done

A feature is complete only if it:

-   Matches the PRD
-   Matches approved Figma designs
-   Matches feature specification
-   Passes accessibility checks
-   Passes tests
-   Meets performance targets
-   Has responsive layouts
-   Uses reusable components
-   Is production ready

------------------------------------------------------------------------

# Design DNA

Glowminal should always feel:

-   Calm before impressive
-   Transparent before intelligent
-   Scientific before futuristic
-   Human before artificial
-   Confident before persuasive
-   Educational before commercial
-   Minimal before decorative
-   Explainable before magical

------------------------------------------------------------------------

# Guiding Principle

Every engineering and design decision should answer:

> Does this increase user trust, improve understanding, and make
> Glowminal feel like a premium, explainable AI product?
