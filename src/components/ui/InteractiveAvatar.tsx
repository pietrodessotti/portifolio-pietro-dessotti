import Image from 'next/image'

const AVATAR_MAP: Record<string, string> = {
  blue:    '/avatar-blue.png',
  violet:  '/avatar-violet.png',
  emerald: '/avatar-emerald.png',
  amber:   '/avatar-amber.png',
  rose:    '/avatar-rose.png',
  cyan:    '/avatar-cyan.png',
}

interface Props {
  className?: string
  accent?: string
}

export function InteractiveAvatar({ className, accent = 'blue' }: Props) {
  const src = AVATAR_MAP[accent] ?? AVATAR_MAP.blue

  return (
    <div className={`relative overflow-hidden ${className ?? ''}`} aria-hidden="true">
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
