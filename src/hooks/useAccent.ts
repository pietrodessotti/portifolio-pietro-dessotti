'use client'

import { useAccentStore } from '@/lib/accent-store'

export function useAccent() {
  const active = useAccentStore((s) => s.active)
  const setAccent = useAccentStore((s) => s.setAccent)
  return { active, setAccent }
}
