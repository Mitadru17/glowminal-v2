---
owner: Mitadru Roy
phase: Phase 1
project: Glowminal
status: Active
title: Glowminal AI Context
version: 0.1
---

# AIContext.md

> This document is the primary operating manual for AI coding agents
> working on Glowminal. Every coding session should begin by reading:
>
> 1.  PRD.md
> 2.  Brand.md
> 3.  AIContext.md

# Purpose

Maintain consistency across all AI-generated code, design, architecture,
documentation and planning.

------------------------------------------------------------------------

# Product Summary

Glowminal is an AI-powered Skin Intelligence Platform focused on
understanding, tracking and improving skin over time through explainable
AI.

Phase 1 is a web application.

Primary flow:

Landing → Authentication → Skin Scan → AI Analysis → Personalized
Routine → Skin Memory → Progress Timeline → Skin Simulation (preview).

------------------------------------------------------------------------

# Engineering Philosophy

-   Build for production, not demos.
-   Prioritize maintainability over speed.
-   Prefer composition over inheritance.
-   Keep modules small.
-   Every feature should be independently testable.
-   Accessibility and performance are first-class requirements.

------------------------------------------------------------------------

# Preferred Technology Stack

Frontend - Next.js (App Router) - React - TypeScript - Tailwind CSS -
shadcn/ui - Motion library - TanStack Query - Zustand

Backend - Supabase - PostgreSQL - Storage - Edge Functions

Deployment - Vercel

------------------------------------------------------------------------

# Coding Standards

-   TypeScript strict mode.
-   Functional React components.
-   Avoid unnecessary client components.
-   Prefer server components where appropriate.
-   Strong typing everywhere.
-   Never use `any` unless justified.
-   Reusable components before page-specific implementations.

------------------------------------------------------------------------

# UI Principles

Every interface should feel:

-   Calm
-   Premium
-   Scientific
-   Spacious
-   Human

Avoid: - Heavy gradients - Visual clutter - Excessive animations - Dark
patterns

------------------------------------------------------------------------

# Component Guidelines

Components should be:

-   Atomic
-   Reusable
-   Accessible
-   Documented

Folder example:

components/ ui/ shared/ features/ layouts/

------------------------------------------------------------------------

# Accessibility

Meet WCAG AA.

Checklist:

-   Keyboard navigation
-   Screen reader labels
-   Visible focus states
-   Proper semantic HTML
-   Color contrast
-   Touch targets \>=44px

------------------------------------------------------------------------

# Performance Targets

-   Lighthouse Performance \>95
-   Accessibility \>95
-   SEO \>95
-   Initial load \<2 seconds on broadband
-   Lazy-load heavy features
-   Optimize images

------------------------------------------------------------------------

# Animation Rules

Animations communicate state.

Duration: 180--250 ms.

Use: - Fade - Scale - Slide

Avoid decorative motion.

------------------------------------------------------------------------

# AI Analysis Principles

Every AI result must include:

-   Confidence score
-   Human explanation
-   Suggested action

Never present analysis as a medical diagnosis.

------------------------------------------------------------------------

# Documentation Rules

Every feature should include:

-   Purpose
-   Requirements
-   Edge cases
-   Acceptance criteria

Update documentation whenever architecture changes.

------------------------------------------------------------------------

# Testing Expectations

-   Unit tests
-   Component tests
-   End-to-end tests for critical flows

Critical flow:

Login → Scan → Analysis → Routine → Timeline.

------------------------------------------------------------------------

# Git Workflow

Small focused commits.

Meaningful commit messages.

Feature branches for major work.

------------------------------------------------------------------------

# Preferred AI Workflow

Planning: ChatGPT / GPT-5.5

Research: Gemini

Implementation: Claude Code + Cline

Refactoring: Claude Code

UI polishing: Claude Code using React Bits and project design system.

------------------------------------------------------------------------

# AI Tooling Context

Preferred ecosystem includes:

-   Official Cline Skills
-   React Bits
-   Ponytail
-   Impeccable
-   Taste
-   Claude Code
-   Cline

These should be leveraged where appropriate rather than reinventing
existing patterns.

------------------------------------------------------------------------

# Prompting Rules

Before implementing any feature:

1.  Read PRD.md
2.  Read Brand.md
3.  Read AIContext.md
4.  Read any feature-specific specification.

Do not assume missing requirements. Ask for clarification if
requirements conflict.

------------------------------------------------------------------------

# Definition of Done

A task is complete only if:

-   Requirements satisfied
-   Responsive
-   Accessible
-   Typed
-   Tested
-   Documented
-   Consistent with Brand.md
-   Consistent with PRD.md
