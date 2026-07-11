/**
 * Supabase Database type scaffold.
 *
 * This is a placeholder type that will be replaced with the auto-generated
 * type from `supabase gen types typescript` once the Supabase project is
 * connected. Shape mirrors Database.md exactly.
 *
 * Run: npx supabase gen types typescript --project-id <id> > types/database.ts
 */
export interface Database {
  public: {
    Tables: {
      users: {
        Row: UserRow
        Insert: Omit<UserRow, 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Omit<UserRow, 'id'>>
      }
      profiles: {
        Row: ProfileRow
        Insert: Omit<ProfileRow, 'id'>
        Update: Partial<Omit<ProfileRow, 'id' | 'user_id'>>
      }
      scans: {
        Row: ScanRow
        Insert: Omit<ScanRow, 'id' | 'created_at'>
        Update: Partial<Omit<ScanRow, 'id' | 'user_id'>>
      }
      analysis_reports: {
        Row: AnalysisReportRow
        Insert: Omit<AnalysisReportRow, 'id' | 'created_at'>
        Update: Partial<Omit<AnalysisReportRow, 'id' | 'scan_id'>>
      }
      routines: {
        Row: RoutineRow
        Insert: Omit<RoutineRow, 'id' | 'created_at'>
        Update: Partial<Omit<RoutineRow, 'id' | 'user_id'>>
      }
      products: {
        Row: ProductRow
        Insert: Omit<ProductRow, 'id'>
        Update: Partial<Omit<ProductRow, 'id'>>
      }
      product_recommendations: {
        Row: ProductRecommendationRow
        Insert: ProductRecommendationRow
        Update: Partial<ProductRecommendationRow>
      }
      simulations: {
        Row: SimulationRow
        Insert: Omit<SimulationRow, 'id' | 'generated_at'>
        Update: Partial<Omit<SimulationRow, 'id' | 'report_id'>>
      }
    }
    Views: Record<string, never>
    Functions: Record<string, never>
    Enums: {
      scan_status: ScanStatus
    }
  }
}

// ── Row Types ──────────────────────────────────────────────────────────────

interface UserRow {
  id: string
  email: string
  full_name: string | null
  avatar_url: string | null
  auth_provider: string
  onboarding_completed: boolean
  created_at: string
  updated_at: string
}

interface ProfileRow {
  id: string
  user_id: string
  age_range: string | null
  skin_type: string | null
  primary_concerns: string[] | null
  allergies: string[] | null
  lifestyle_notes: string | null
}

type ScanStatus = 'uploaded' | 'validating' | 'processing' | 'completed' | 'failed'

interface ScanRow {
  id: string
  user_id: string
  original_image: string
  processed_image: string | null
  quality_score: number | null
  scan_status: ScanStatus
  created_at: string
}

interface AnalysisReportRow {
  id: string
  scan_id: string
  overall_score: number
  hydration: number
  pigmentation: number
  acne: number
  redness: number
  pores: number
  elasticity: number
  oil_balance: number
  sensitivity: number
  confidence: number
  ai_summary: string
  recommendations: string
  created_at: string
}

interface RoutineRow {
  id: string
  user_id: string
  report_id: string
  morning_steps: RoutineStep[]
  evening_steps: RoutineStep[]
  weekly_steps: RoutineStep[]
  created_at: string
}

interface RoutineStep {
  order: number
  title: string
  description: string
  duration?: string
  products?: string[]
}

interface ProductRow {
  id: string
  name: string
  brand: string
  category: string
  ingredients: string[]
  description: string
  image: string | null
  purchase_url: string | null
}

interface ProductRecommendationRow {
  report_id: string
  product_id: string
  reason: string
  confidence: number
}

interface SimulationRow {
  id: string
  report_id: string
  week_2: SimulationProjection
  week_4: SimulationProjection
  week_8: SimulationProjection
  generated_at: string
}

interface SimulationProjection {
  overall_score: number
  hydration: number
  acne: number
  pigmentation: number
  texture: number
  summary: string
}
