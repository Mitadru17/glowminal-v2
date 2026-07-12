import { create } from 'zustand'

export type NavTheme = 'hero' | 'editorial' | 'scientific' | 'botanical' | 'footer'

interface NavThemeState {
  theme: NavTheme
  setTheme: (theme: NavTheme) => void
}

export const useNavThemeStore = create<NavThemeState>((set) => ({
  theme: 'hero',
  setTheme: (theme) => set({ theme }),
}))
