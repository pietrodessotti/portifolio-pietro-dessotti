import Image from 'next/image'

interface Props {
  className?: string
}

export function InteractiveAvatar({ className }: Props) {
  return (
    <div className={`relative overflow-hidden ${className ?? ''}`} aria-hidden="true">
      <Image
        src="/avatar3.png"
        alt="Pietro Dessotti"
        fill
        sizes="(max-width: 1024px) 80px, 112px"
        className="object-contain"
        draggable={false}
      />
    </div>
  )
}
