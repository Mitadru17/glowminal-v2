---
phase: Phase 1
project: Glowminal
status: Draft
title: Glowminal Coding Standards
version: 0.1
---

# CodingStandards.md

> This document defines the engineering standards that every contributor
> and AI coding agent must follow.

# Core Principles

-   Readability over cleverness.
-   Consistency over personal preference.
-   Performance by default.
-   Accessibility is mandatory.
-   Security is never optional.
-   Keep features modular.

------------------------------------------------------------------------

# Project Structure

apps/ packages/ docs/ public/

Do not create arbitrary top-level folders.

------------------------------------------------------------------------

# Naming Conventions

Components: PascalCase

Hooks: useCamelCase

Utilities: camelCase

Types: PascalCase

Constants: UPPER_SNAKE_CASE

Files:

Component.tsx

hook.ts

utility.ts

------------------------------------------------------------------------

# React

-   Functional components only.
-   Prefer Server Components.
-   Client Components only when necessary.
-   Keep components small.
-   Prefer composition.

------------------------------------------------------------------------

# TypeScript

-   Strict mode enabled.
-   Avoid any.
-   Prefer interfaces for object contracts.
-   Export shared types.

------------------------------------------------------------------------

# Styling

-   Tailwind CSS only.
-   Use design tokens.
-   No inline styles except dynamic values.
-   Prefer reusable utility classes.

------------------------------------------------------------------------

# State Management

Remote: TanStack Query

Local: Zustand

Forms: React Hook Form

------------------------------------------------------------------------

# Accessibility

Every feature must include:

-   Keyboard support
-   Focus management
-   Semantic HTML
-   ARIA labels where required
-   Reduced motion support

------------------------------------------------------------------------

# Performance

-   Lazy load large components.
-   Optimize images.
-   Minimize client JavaScript.
-   Avoid unnecessary re-renders.

------------------------------------------------------------------------

# Error Handling

Never silently fail.

Display helpful messages.

Log unexpected errors.

------------------------------------------------------------------------

# Testing

Unit tests for utilities.

Component tests for reusable UI.

End-to-end tests for critical user journeys.

------------------------------------------------------------------------

# Git

Commit format:

feat: fix: refactor: docs: test: chore:

Small focused commits.

------------------------------------------------------------------------

# Documentation

Every significant feature requires:

-   Purpose
-   API usage
-   Edge cases
-   Acceptance criteria

Update docs alongside code.

------------------------------------------------------------------------

# Pull Request Checklist

-   Builds successfully
-   No TypeScript errors
-   Responsive
-   Accessible
-   Tests pass
-   Documentation updated
-   Matches PRD
-   Matches Brand
-   Matches Design System

------------------------------------------------------------------------

# Definition of Done

A task is complete only if:

✓ Production ready ✓ Accessible ✓ Responsive ✓ Typed ✓ Tested ✓
Documented ✓ Consistent with project architecture
