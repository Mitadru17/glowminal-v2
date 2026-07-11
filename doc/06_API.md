---
api_style: REST
authentication: JWT (Supabase Auth)
phase: Phase 1
project: Glowminal
status: Draft
title: Glowminal API Specification
version: 0.1
---

# API.md

> Defines the frontend/backend contract for the Phase 1 web application.

# API Principles

-   Version all endpoints.
-   JSON request/response bodies.
-   Consistent error format.
-   Idempotent where appropriate.
-   Never expose internal implementation details.

Base Path:

/api/v1

------------------------------------------------------------------------

# Authentication

## POST /auth/signup

Creates a new account.

Request: - email - password - full_name

Response: - user - session - access_token - refresh_token

------------------------------------------------------------------------

## POST /auth/login

Authenticates a user.

------------------------------------------------------------------------

## POST /auth/logout

Invalidates session.

------------------------------------------------------------------------

## GET /auth/me

Returns authenticated profile.

------------------------------------------------------------------------

# Scan Endpoints

## POST /scans

Uploads a new skin scan.

Request: - image - metadata

Returns: - scan_id - upload_status

------------------------------------------------------------------------

## GET /scans/{id}

Returns:

-   scan
-   processing_status
-   timestamps

------------------------------------------------------------------------

## GET /scans/history

Returns paginated scan history.

Supports:

-   page
-   limit
-   sort

------------------------------------------------------------------------

# Analysis

## GET /analysis/{scanId}

Returns:

-   overall_score
-   metrics
-   confidence
-   explanations
-   recommendations

------------------------------------------------------------------------

# Routine

## POST /routines/generate

Body:

-   scan_id
-   preferences

Returns:

-   morning
-   evening
-   weekly
-   lifestyle

------------------------------------------------------------------------

## GET /routines/latest

Returns latest saved routine.

------------------------------------------------------------------------

# Products

## GET /products

Supports filters:

-   concern
-   category
-   ingredients
-   search

------------------------------------------------------------------------

## GET /products/{id}

Returns detailed product information.

------------------------------------------------------------------------

# Recommendations

## GET /recommendations/{scanId}

Returns:

-   recommended_products
-   reasons
-   confidence

------------------------------------------------------------------------

# Timeline

## GET /timeline

Returns historical metrics.

Includes:

-   scan_dates
-   overall_scores
-   trend_data

------------------------------------------------------------------------

# Skin Simulation

## POST /simulation

Body:

-   report_id

Returns projected improvements for:

-   Week 2
-   Week 4
-   Week 8

Must include disclaimer stating results are AI-generated estimates.

------------------------------------------------------------------------

# Error Format

Every error returns:

{ "success": false, "code": "...", "message": "...", "details": {} }

------------------------------------------------------------------------

# Success Format

{ "success": true, "data": {}, "meta": {} }

------------------------------------------------------------------------

# Validation

Validate:

-   Authentication
-   Image type
-   Image size
-   Face detection
-   Rate limits

Reject invalid requests before AI processing.

------------------------------------------------------------------------

# Rate Limits

Guest: 5 scans/day

Free: 20 scans/day

Premium: Future phase.

------------------------------------------------------------------------

# Security

-   JWT authentication
-   HTTPS only
-   Signed URLs
-   RLS enforced
-   Input validation
-   File type validation

------------------------------------------------------------------------

# Versioning

Current:

v1

Future breaking changes require:

/api/v2

------------------------------------------------------------------------

# Observability

Log:

-   request_id
-   user_id
-   endpoint
-   latency
-   status_code

Exclude sensitive personal data from logs.

------------------------------------------------------------------------

# API Goals

The API should remain stable, predictable, and easily consumable by web
and future mobile clients while supporting explainable AI workflows.
