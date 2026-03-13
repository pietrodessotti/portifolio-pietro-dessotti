'use client'

import { useEffect } from 'react'
import { useAccentStore } from '@/lib/accent-store'

let hydrated = false

export function useAccent() {
  const active = useAccentStore((s) => s.active)
  const setAccent = useAccentStore((s) => s.setAccent)

  useEffect(() => {
    if (hydrated) return
    hydrated = true
    const id = document.documentElement.dataset.accent || 'blue'
    if (id !== 'blue') useAccentStore.setState({ active: id })
  }, [])

  return { active, setAccent }
}
