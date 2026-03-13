'use client'

import { create } from 'zustand'

export interface Accent {
  id: string
  label: string
  light: string
  dark: string
  preview: string
}

export const ACCENTS: Accent[] = [
  { id: 'blue',    label: 'Blue',    light: '#0070f3', dark: '#3291ff', preview: '#5486b7' },
  // { id: 'violet',  label: 'Violet',  light: '#7c3aed', dark: '#a78bfa', preview: '#8b5cf6' },  // avatar WIP
  // { id: 'emerald', label: 'Emerald', light: '#059669', dark: '#34d399', preview: '#10b981' },  // avatar WIP
  { id: 'amber',   label: 'Amber',   light: '#d97706', dark: '#fbbf24', preview: '#f59e0b' },
  { id: 'rose',    label: 'Rose',    light: '#e11d48', dark: '#fb7185', preview: '#f43f5e' },
  { id: 'cyan',    label: 'Cyan',    light: '#0891b2', dark: '#22d3ee', preview: '#06b6d4' },
]

export const AVATAR_MAP: Record<string, string> = {
  blue:    '/avatar-blue.png',
  violet:  '/avatar-violet.png',
  emerald: '/avatar-emerald.png',
  amber:   '/avatar-amber.png',
  rose:    '/avatar-rose.png',
  cyan:    '/avatar-cyan.png',
}

interface AccentState {
  active: string
  setAccent: (id: string) => void
}

function applyAccentToDOM(id: string) {
  const el = document.documentElement
  if (id === 'blue') {
    delete el.dataset.accent
  } else {
    el.dataset.accent = id
  }
  try { localStorage.setItem('accent-color', id === 'blue' ? '' : id) } catch {}
}

export const useAccentStore = create<AccentState>((set) => ({
  active: typeof window !== 'undefined'
    ? (document.documentElement.dataset.accent || 'blue')
    : 'blue',
  setAccent: (id) => {
    applyAccentToDOM(id)
    set({ active: id })
  },
}))
