'use client'

import { useState, useRef, useEffect } from 'react'

/**
 * Returns { current, prev } where `prev` holds the outgoing src for
 * the duration of the transition, then resets to null.
 */
export function useCrossFade(src: string, duration = 400) {
  const [current, setCurrent] = useState(src)
  const [prev, setPrev] = useState<string | null>(null)
  const currentRef = useRef(src)

  useEffect(() => {
    if (src === currentRef.current) return
    setPrev(currentRef.current)
    setCurrent(src)
    currentRef.current = src
    const t = setTimeout(() => setPrev(null), duration)
    return () => clearTimeout(t)
  }, [src, duration])

  return { current, prev }
}
