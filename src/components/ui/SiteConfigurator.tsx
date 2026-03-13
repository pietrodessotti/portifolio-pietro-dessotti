'use client'

import { InteractiveAvatar } from './InteractiveAvatar'
import { useAccent } from '@/hooks/useAccent'
import { usePointerOpen } from '@/hooks/usePointerOpen'
import { ACCENTS } from '@/lib/accent-store'

interface Props {
  className?: string
}

export function SiteConfigurator({ className }: Props) {
  const { open, setOpen, panelRef } = usePointerOpen()
  const { active, setAccent } = useAccent()

  return (
    <div ref={panelRef} className="inline-flex justify-center">
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
          <InteractiveAvatar className={className} />
        </button>

        {open && (
          <div
            role="dialog"
            aria-label="Accent color configurator"
            className="absolute bottom-full left-1/2 mb-10 -translate-x-0/2 z-50"
            style={{ animation: 'configurator-in 0.15s ease-out both' }}
          >
            <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4 shadow-lg min-w-[200px]">
              <div className="absolute left-1/2 -bottom-[7px] -translate-x-1/2 h-3 w-3 rotate-45 border-r border-b border-[var(--border)] bg-[var(--background)]" />

              <p className="mb-3 text-center text-[10px] font-semibold uppercase tracking-widest text-[var(--muted)]">
                Accent Color
              </p>

              <div className="flex items-center justify-center gap-2">
                {ACCENTS.map((accent) => (
                  <button
                    key={accent.id}
                    onClick={() => setAccent(accent.id)}
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
