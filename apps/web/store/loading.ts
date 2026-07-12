import { create } from 'zustand'

interface LoadingState {
  isLoaded: boolean
  setLoaded: () => void
}

export const useLoadingStore = create<LoadingState>((set) => ({
  isLoaded: false,
  setLoaded: () => set({ isLoaded: true }),
}))
