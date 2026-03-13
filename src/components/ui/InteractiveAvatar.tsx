'use client'

import Image from 'next/image'
import { useAccent } from '@/hooks/useAccent'
import { AVATAR_MAP } from '@/lib/accent-store'
import { cn } from '@/lib/utils'

interface Props {
  className?: string
}

export function InteractiveAvatar({ className }: Props) {
  const { active } = useAccent()
  const src = AVATAR_MAP[active] ?? AVATAR_MAP.blue

  return (
    <div className={cn('relative overflow-hidden', className)} aria-hidden="true">
      <Image
        key={src}
        src={src}
        alt="Pietro Dessotti"
        fill
        sizes="(max-width: 1024px) 160px, 200px"
        className="object-contain"
        draggable={false}
        style={{ animation: 'avatar-swap 0.3s ease both' }}
      />
    </div>
  )
}
