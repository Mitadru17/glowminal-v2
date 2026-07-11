---
database: PostgreSQL (Supabase)
phase: Phase 1
project: Glowminal
status: Draft
title: Glowminal Database Specification
version: 0.1
---

# Database.md

> This document defines the logical database architecture for Glowminal
> Phase 1.

# Goals

-   Normalize data where practical.
-   Keep user data secure.
-   Support future expansion.
-   Enable Row Level Security (RLS).
-   Support longitudinal skin tracking.

------------------------------------------------------------------------

# Core Tables

## users

Purpose: Stores user profile information.

Fields: - id (UUID) - email - full_name - avatar_url - auth_provider -
onboarding_completed - created_at - updated_at

------------------------------------------------------------------------

## profiles

Stores user preferences.

Fields:

-   user_id
-   age_range
-   skin_type
-   primary_concerns
-   allergies
-   lifestyle_notes

------------------------------------------------------------------------

## scans

Stores every uploaded scan.

Fields:

-   id
-   user_id
-   original_image
-   processed_image
-   quality_score
-   scan_status
-   created_at

Status:

-   uploaded
-   validating
-   processing
-   completed
-   failed

------------------------------------------------------------------------

## analysis_reports

Stores AI results.

Fields:

-   scan_id
-   overall_score
-   hydration
-   pigmentation
-   acne
-   redness
-   pores
-   elasticity
-   oil_balance
-   sensitivity
-   confidence
-   ai_summary
-   recommendations

------------------------------------------------------------------------

## routines

Stores generated skincare routines.

Fields:

-   id
-   user_id
-   report_id
-   morning_steps
-   evening_steps
-   weekly_steps
-   created_at

------------------------------------------------------------------------

## products

Basic catalog.

Fields:

-   id
-   name
-   brand
-   category
-   ingredients
-   description
-   image
-   purchase_url

Phase 1 uses a manually curated product list.

------------------------------------------------------------------------

## product_recommendations

Links reports to products.

Fields:

-   report_id
-   product_id
-   reason
-   confidence

------------------------------------------------------------------------

## simulations

Stores expected improvement projections.

Fields:

-   report_id
-   week_2
-   week_4
-   week_8
-   generated_at

------------------------------------------------------------------------

# Relationships

users

↓

profiles

↓

scans

↓

analysis_reports

↓

routines

↓

product_recommendations

↓

products

------------------------------------------------------------------------

# Storage Buckets

profile-images

scan-images

processed-images

Future:

exports

reports

------------------------------------------------------------------------

# Row Level Security

Users can:

Read their own data.

Write their own data.

Delete their own data.

Admins manage product catalog only.

------------------------------------------------------------------------

# Indexing

Recommended indexes:

user_id

scan_id

created_at

overall_score

status

------------------------------------------------------------------------

# Soft Deletes

Prefer archived_at fields over permanent deletion where appropriate.

Personal data deletion must comply with user requests.

------------------------------------------------------------------------

# Data Retention

Users may export data.

Users may delete data.

Deleted scans remove associated images after grace period.

------------------------------------------------------------------------

# Future Tables

notifications

subscriptions

community_posts

comments

likes

clinics

appointments

premium_features

------------------------------------------------------------------------

# Security

Encrypted storage.

Signed image URLs.

No public scan images.

Sensitive data never exposed through public APIs.

------------------------------------------------------------------------

# Database Principles

-   Single source of truth.
-   Referential integrity.
-   Future-proof schema.
-   Minimize duplicated data.
-   AI results remain reproducible.
