'use client'

import { useEffect, useRef, useState } from 'react'
import { InteractiveAvatar } from './InteractiveAvatar'

interface Accent {
  id: string
  label: string
  light: string
  dark: string
  preview: string // always visible color for swatch
}

const ACCENTS: Accent[] = [
  { id: 'blue',    label: 'Blue',    light: '#0070f3', dark: '#3291ff', preview: '#5486b7' },
  // { id: 'violet',  label: 'Violet',  light: '#7c3aed', dark: '#a78bfa', preview: '#8b5cf6' },  // avatar WIP
  // { id: 'emerald', label: 'Emerald', light: '#059669', dark: '#34d399', preview: '#10b981' },  // avatar WIP
  { id: 'amber',   label: 'Amber',   light: '#d97706', dark: '#fbbf24', preview: '#f59e0b' },
  { id: 'rose',    label: 'Rose',    light: '#e11d48', dark: '#fb7185', preview: '#f43f5e' },
  { id: 'cyan',    label: 'Cyan',    light: '#0891b2', dark: '#22d3ee', preview: '#06b6d4' },
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

interface Props {
  className?: string
}

export function SiteConfigurator({ className }: Props) {
  const [open, setOpen] = useState(false)
  // Read initial accent directly from <html> data-accent (set by layout.tsx script before hydration)
  const [active, setActive] = useState<string>(() => {
    if (typeof window === 'undefined') return 'blue'
    return document.documentElement.dataset.accent || 'blue'
  })
  const panelRef = useRef<HTMLDivElement>(null)

  // Sync with changes from any other SiteConfigurator or HeroAvatar instance
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setActive(document.documentElement.dataset.accent || 'blue')
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
    setActive(id)
    applyAccent(id)
  }

  return (
    // Outer div: only for click-outside ref, no positioning role
    <div ref={panelRef} className="inline-flex justify-center">
      {/* Inner wrapper: relative anchor sized exactly to the avatar */}
      <div className="relative">
        {/* Hint arrow — pulsing chevron above head when closed */}
        {!open && (
          <span
            className="pointer-events-none absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-0.5"
            style={{ bottom: '100%', marginLeft: '6px', marginBottom: '5px', animation: 'hint-bounce 1.8s ease-in-out infinite' }}
            aria-hidden="true"
          >
            <svg viewBox="0 0 14 8" className="h-2.5 w-2.5 text-[var(--accent)]" fill="none">
              <path d="M1 7l6-6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <svg viewBox="0 0 14 8" className="h-2.5 w-2.5 text-[var(--accent)] opacity-50" fill="none">
              <path d="M1 7l6-6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        )}

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Customize accent color"
          aria-expanded={open}
          className="block cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-full"
        >
          <InteractiveAvatar className={className} accent={active} />
        </button>

        {open && (
          <div
            role="dialog"
            aria-label="Accent color configurator"
            className="absolute bottom-full left-1/2 mb-10 -translate-x-0/2 z-50"
            style={{ animation: 'configurator-in 0.15s ease-out both' }}
          >
            <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4 shadow-lg min-w-[200px]">
              {/* Arrow pointing down toward avatar head */}
              <div className="absolute left-1/2 -bottom-[7px] -translate-x-1/2 h-3 w-3 rotate-45 border-r border-b border-[var(--border)] bg-[var(--background)]" />

              <p className="mb-3 text-center text-[10px] font-semibold uppercase tracking-widest text-[var(--muted)]">
                Accent Color
              </p>

              <div className="flex items-center justify-center gap-2">
                {ACCENTS.map((accent) => (
                  <button
                    key={accent.id}
                    onClick={() => select(accent.id)}
                    title={accent.label}
                    aria-label={`Set accent to ${accent.label}`}
                    aria-pressed={active === accent.id}
                    style={{ backgroundColor: accent.preview }}
                    className="h-7 w-7 rounded-full transition-transform duration-100 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                  >
                    {active === accent.id && (
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
    </div>
  )
}
