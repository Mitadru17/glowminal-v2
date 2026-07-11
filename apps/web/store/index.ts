'use client'

import { create } from 'zustand'
import type { User, Scan, AnalysisReport, Routine } from '@/types'

// ── Auth State ─────────────────────────────────────────────────────────────

interface AuthState {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
  setUser: (user: User | null) => void
  setLoading: (loading: boolean) => void
  clearAuth: () => void
}

export const useAuthStore = create<AuthState>()((set) => ({
  user: null,
  isLoading: true,
  isAuthenticated: false,

  setUser: (user) =>
    set({
      user,
      isAuthenticated: user !== null,
      isLoading: false,
    }),

  setLoading: (isLoading) => set({ isLoading }),

  clearAuth: () =>
    set({
      user: null,
      isAuthenticated: false,
      isLoading: false,
    }),
}))

// ── Scan State ─────────────────────────────────────────────────────────────

type ScanUploadStatus = 'idle' | 'uploading' | 'validating' | 'processing' | 'complete' | 'error'

interface ScanState {
  currentScan: Scan | null
  uploadStatus: ScanUploadStatus
  uploadProgress: number
  uploadError: string | null
  setCurrentScan: (scan: Scan | null) => void
  setUploadStatus: (status: ScanUploadStatus) => void
  setUploadProgress: (progress: number) => void
  setUploadError: (error: string | null) => void
  resetScan: () => void
}

export const useScanStore = create<ScanState>()((set) => ({
  currentScan: null,
  uploadStatus: 'idle',
  uploadProgress: 0,
  uploadError: null,

  setCurrentScan: (currentScan) => set({ currentScan }),
  setUploadStatus: (uploadStatus) => set({ uploadStatus }),
  setUploadProgress: (uploadProgress) => set({ uploadProgress }),
  setUploadError: (uploadError) => set({ uploadError }),

  resetScan: () =>
    set({
      currentScan: null,
      uploadStatus: 'idle',
      uploadProgress: 0,
      uploadError: null,
    }),
}))

// ── Analysis State ─────────────────────────────────────────────────────────

interface AnalysisState {
  currentReport: AnalysisReport | null
  setCurrentReport: (report: AnalysisReport | null) => void
  clearReport: () => void
}

export const useAnalysisStore = create<AnalysisState>()((set) => ({
  currentReport: null,
  setCurrentReport: (currentReport) => set({ currentReport }),
  clearReport: () => set({ currentReport: null }),
}))

// ── Routine State ──────────────────────────────────────────────────────────

interface RoutineState {
  currentRoutine: Routine | null
  setCurrentRoutine: (routine: Routine | null) => void
  clearRoutine: () => void
}

export const useRoutineStore = create<RoutineState>()((set) => ({
  currentRoutine: null,
  setCurrentRoutine: (currentRoutine) => set({ currentRoutine }),
  clearRoutine: () => set({ currentRoutine: null }),
}))
