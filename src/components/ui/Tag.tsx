import { cn } from '@/lib/utils'

interface TagProps {
  className?: string
  children: React.ReactNode
}

export function Tag({ className, children }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md bg-[var(--muted-bg)] px-2 py-1 text-xs font-medium text-[var(--muted)]',
        className
      )}
    >
      {children}
    </span>
  )
}
