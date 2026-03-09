import { cn } from '@/lib/utils'

interface CardProps {
  className?: string
  children: React.ReactNode
  hover?: boolean
}

export function Card({ className, children, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl border border-[var(--border)] bg-[var(--background)] p-6',
        hover &&
          'transition-shadow duration-200 hover:shadow-md dark:hover:shadow-zinc-900/50',
        className
      )}
    >
      {children}
    </div>
  )
}
