'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { SiteConfigurator } from './SiteConfigurator'

interface Props {
  message?: string
  avatarSize?: string
}

export function CharacterReveal({
  message = 'Plot twist: you can customize this site.\nClick me to change the accent color! ✨',
  avatarSize = 'h-40 w-40',
}: Props) {
  const [arrived, setArrived] = useState(false)
  const [talking, setTalking] = useState(false)
  const triggerRef = useRef<HTMLDivElement>(null)

  const lines = useMemo(() => message.split('\n'), [message])

  useEffect(() => {
    const el = triggerRef.current
    if (!el) return

    let talkingTimer: ReturnType<typeof setTimeout>

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setArrived(true)
          talkingTimer = setTimeout(() => setTalking(true), 550)
        } else {
          clearTimeout(talkingTimer)
          setArrived(false)
          setTalking(false)
        }
      },
      { threshold: 0.35 }
    )

    observer.observe(el)
    return () => {
      clearTimeout(talkingTimer)
      observer.disconnect()
    }
  }, [])

  return (
    <div
      ref={triggerRef}
      className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="flex items-end gap-5">
        <div
          className="shrink-0"
          style={{
            opacity: arrived ? 1 : 0,
            transform: arrived ? 'translateY(0)' : 'translateY(60px)',
            transition:
              'opacity 0.55s cubic-bezier(0.16, 1, 0.3, 1), transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <SiteConfigurator className={avatarSize} />
        </div>

        {talking && (
          <div
            className="relative mb-6 max-w-xs rounded-2xl border border-[var(--border)] bg-[var(--background)] px-5 py-4 shadow-lg"
            style={{ animation: 'bubble-in 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) both' }}
          >
            <div className="absolute -left-[7px] bottom-6 h-3 w-3 rotate-45 border-b border-l border-[var(--border)] bg-[var(--background)]" />

            {lines.map((line, i) => (
              <p
                key={i}
                className={`text-sm leading-6 ${
                  i === 0
                    ? 'font-semibold text-[var(--foreground)]'
                    : 'text-[var(--muted)]'
                }`}
              >
                {line.includes('accent color') ? (
                  <>
                    Click me to change the{' '}
                    <span className="font-semibold text-[var(--accent)]">accent color</span>! ✨
                  </>
                ) : (
                  line
                )}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
