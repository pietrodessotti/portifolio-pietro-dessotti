'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const AVATAR_MAP: Record<string, string> = {
  blue:    '/avatar-blue.png',
  violet:  '/avatar-violet.png',
  emerald: '/avatar-emerald.png',
  amber:   '/avatar-amber.png',
  rose:    '/avatar-rose.png',
  cyan:    '/avatar-cyan.png',
}

const ACCENTS = [
  { id: 'blue',    label: 'Blue',    preview: '#5486b7' },
  // { id: 'violet',  label: 'Violet',  preview: '#8b5cf6' },  // avatar WIP
  // { id: 'emerald', label: 'Emerald', preview: '#10b981' },  // avatar WIP
  { id: 'amber',   label: 'Amber',   preview: '#f59e0b' },
  { id: 'rose',    label: 'Rose',    preview: '#f43f5e' },
  { id: 'cyan',    label: 'Cyan',    preview: '#06b6d4' },
]

function applyAccent(id: string) {
  const el = document.documentElement
  if (id === 'blue') {
    delete el.dataset.accent
  } else {
    el.dataset.accent = id
  }
  try { localStorage.setItem('accent-color', id === 'blue' ? '' : id) } catch {}
}

export function HeroAvatar() {
  const [accent, setAccent] = useState('blue')
  const [open, setOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const initial = document.documentElement.dataset.accent || 'blue'
    setAccent(initial)

    const observer = new MutationObserver(() => {
      setAccent(document.documentElement.dataset.accent || 'blue')
    })
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-accent'],
    })
    return () => observer.disconnect()
  }, [])

  // Close on outside click
  useEffect(() => {
    if (!open) return
    function handleClick(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [open])

  // Close on Escape
  useEffect(() => {
    if (!open) return
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [open])

  function select(id: string) {
    setAccent(id)
    applyAccent(id)
    setOpen(false)
  }

  const src = AVATAR_MAP[accent] ?? AVATAR_MAP.blue

  return (
    <div ref={panelRef} className="absolute inset-0">
      {/* Wrapper with key — triggers animation on src change without touching Image directly */}
      <div
        key={src}
        className="absolute inset-0"
        style={{ animation: 'avatar-swap 0.4s ease both' }}
      >
        <Image
          src={src}
          alt=""
          fill
          priority
          sizes="420px"
          className="object-cover object-top"
          style={{
            maskImage:
              'linear-gradient(to left, transparent 0%, rgba(0,0,0,0.15) 20%, rgba(0,0,0,0.55) 45%, transparent 100%), linear-gradient(to bottom, rgba(0,0,0,0.8) 50%, transparent 100%)',
            maskComposite: 'intersect',
            WebkitMaskImage:
              'linear-gradient(to left, transparent 0%, rgba(0,0,0,0.15) 20%, rgba(0,0,0,0.55) 45%, transparent 100%), linear-gradient(to bottom, rgba(0,0,0,0.8) 50%, transparent 100%)',
            WebkitMaskComposite: 'source-in',
            opacity: 0.35,
            mixBlendMode: 'luminosity',
          }}
        />
      </div>

      {/* Clickable overlay on avatar body area */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Customize accent color"
        aria-expanded={open}
        className="pointer-events-auto absolute bottom-0 right-[15%] w-[55%] h-[85%] cursor-pointer focus-visible:outline-none"
        style={{ background: 'transparent' }}
      />

      {/* Color picker popup */}
      {open && (
        <div
          role="dialog"
          aria-label="Accent color configurator"
          className="pointer-events-auto absolute bottom-[88%] right-[10%] z-50"
          style={{ animation: 'configurator-in 0.15s ease-out both' }}
        >
          <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4 shadow-lg min-w-[200px]">
            <div className="absolute right-8 -bottom-[7px] h-3 w-3 rotate-45 border-r border-b border-[var(--border)] bg-[var(--background)]" />
            <p className="mb-3 text-center text-[10px] font-semibold uppercase tracking-widest text-[var(--muted)]">
              Accent Color
            </p>
            <div className="flex items-center justify-center gap-2">
              {ACCENTS.map((a) => (
                <button
                  key={a.id}
                  onClick={() => select(a.id)}
                  title={a.label}
                  aria-label={`Set accent to ${a.label}`}
                  aria-pressed={accent === a.id}
                  style={{ backgroundColor: a.preview }}
                  className="h-7 w-7 rounded-full transition-transform duration-100 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                >
                  {accent === a.id && (
                    <span className="flex h-full w-full items-center justify-center">
                      <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
