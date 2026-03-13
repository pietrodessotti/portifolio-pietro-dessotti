'use client'

import { useEffect } from 'react'
import { useAccentStore, initAccentStore } from '@/lib/accent-store'

/**
 * Returns the active accent id and a setter that syncs DOM + localStorage.
 * Safe to call in multiple components — the store is a singleton.
 */
export function useAccent() {
  const active = useAccentStore((s) => s.active)
  const setAccent = useAccentStore((s) => s.setAccent)

  // Hydrate from DOM on first mount (handles localStorage restore via layout script)
  useEffect(() => {
    initAccentStore()
  }, [])

  return { active, setAccent }
}
