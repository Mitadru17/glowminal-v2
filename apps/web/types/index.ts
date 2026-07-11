/**
 * Domain types for Glowminal.
 *
 * These are the rich domain objects used throughout the application UI.
 * They are derived from (but not identical to) the raw database row types.
 * Use these in components, stores, and hooks.
 */

// ── User ───────────────────────────────────────────────────────────────────

export interface User {
  id: string
  email: string
  fullName: string | null
  avatarUrl: string | null
  authProvider: string
  onboardingCompleted: boolean
  createdAt: string
}

export interface UserProfile {
  userId: string
  ageRange: string | null
  skinType: SkinType | null
  primaryConcerns: SkinConcern[]
  allergies: string[]
  lifestyleNotes: string | null
}

export type SkinType = 'normal' | 'oily' | 'dry' | 'combination' | 'sensitive'

export type SkinConcern =
  | 'acne'
  | 'hyperpigmentation'
  | 'redness'
  | 'dryness'
  | 'oiliness'
  | 'pores'
  | 'wrinkles'
  | 'sensitivity'
  | 'uneven_texture'

// ── Scan ──────────────────────────────────────────────────────────────────

export type ScanStatus = 'uploaded' | 'validating' | 'processing' | 'completed' | 'failed'

export interface Scan {
  id: string
  userId: string
  originalImage: string
  processedImage: string | null
  qualityScore: number | null
  status: ScanStatus
  createdAt: string
}

// ── Analysis ──────────────────────────────────────────────────────────────

/** Each skin metric is a 0–100 score with confidence and explanation. */
export interface SkinMetric {
  score: number
  confidence: number
  label: string
  explanation: string
  suggestedImprovement: string
}

export interface AnalysisReport {
  id: string
  scanId: string
  overallScore: number
  confidence: number
  aiSummary: string
  recommendations: string
  metrics: {
    hydration: SkinMetric
    pigmentation: SkinMetric
    acne: SkinMetric
    redness: SkinMetric
    pores: SkinMetric
    elasticity: SkinMetric
    oilBalance: SkinMetric
    sensitivity: SkinMetric
    texture?: SkinMetric
  }
  createdAt: string
}

// ── Routine ───────────────────────────────────────────────────────────────

export interface RoutineStep {
  order: number
  title: string
  description: string
  duration?: string
  products?: string[]
}

export interface Routine {
  id: string
  userId: string
  reportId: string
  morningSteps: RoutineStep[]
  eveningSteps: RoutineStep[]
  weeklySteps: RoutineStep[]
  createdAt: string
}

// ── Product ───────────────────────────────────────────────────────────────

export type ProductCategory =
  | 'cleanser'
  | 'toner'
  | 'serum'
  | 'moisturizer'
  | 'sunscreen'
  | 'exfoliant'
  | 'mask'
  | 'eye_cream'
  | 'other'

export interface Product {
  id: string
  name: string
  brand: string
  category: ProductCategory
  ingredients: string[]
  description: string
  image: string | null
  purchaseUrl: string | null
}

export interface ProductRecommendation {
  product: Product
  reason: string
  confidence: number
}

// ── Simulation ────────────────────────────────────────────────────────────

export interface SimulationProjection {
  overallScore: number
  hydration: number
  acne: number
  pigmentation: number
  texture: number
  summary: string
}

export interface Simulation {
  id: string
  reportId: string
  week2: SimulationProjection
  week4: SimulationProjection
  week8: SimulationProjection
  generatedAt: string
}

// ── API Response Envelope ─────────────────────────────────────────────────

export interface ApiSuccess<T> {
  success: true
  data: T
  meta?: Record<string, unknown>
}

export interface ApiError {
  success: false
  code: string
  message: string
  details?: Record<string, unknown>
}

export type ApiResponse<T> = ApiSuccess<T> | ApiError

// ── UI State ──────────────────────────────────────────────────────────────

export type LoadingState = 'idle' | 'loading' | 'success' | 'error'

export interface AsyncState<T> {
  data: T | null
  status: LoadingState
  error: string | null
}
