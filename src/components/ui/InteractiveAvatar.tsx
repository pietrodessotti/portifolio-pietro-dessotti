'use client'

import Image from 'next/image'
import { useAccent } from '@/hooks/useAccent'
import { AVATAR_MAP } from '@/lib/accent-store'
import { useCrossFade } from '@/hooks/useCrossFade'
import { cn } from '@/lib/utils'

interface Props {
  className?: string
}

export function InteractiveAvatar({ className }: Props) {
  const { active } = useAccent()
  const src = AVATAR_MAP[active] ?? AVATAR_MAP.blue
  const { current, prev } = useCrossFade(src, 400)

  return (
    <div className={cn('relative overflow-hidden', className)} aria-hidden="true">
      {prev && (
        <Image
          key={prev}
          src={prev}
          alt=""
          fill
          sizes="(max-width: 1024px) 160px, 200px"
          className="object-contain"
          draggable={false}
          style={{ animation: 'avatar-fade-out 0.4s ease forwards' }}
        />
      )}
      <Image
        key={current}
        src={current}
        alt="Pietro Dessotti"
        fill
        sizes="(max-width: 1024px) 160px, 200px"
        className="object-contain"
        draggable={false}
        style={{ animation: 'avatar-swap 0.4s ease both' }}
      />
    </div>
  )
}
