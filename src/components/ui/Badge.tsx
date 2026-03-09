import { cn } from '@/lib/utils'

interface BadgeProps {
  variant?: 'default' | 'accent' | 'learning' | 'outline'
  className?: string
  children: React.ReactNode
}

const variants = {
  default:
    'bg-[var(--muted-bg)] text-[var(--foreground)]',
  accent:
    'bg-[var(--accent)] text-[var(--accent-foreground)]',
  learning:
    'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
  outline:
    'border border-[var(--border)] text-[var(--muted)]',
}

export function Badge({ variant = 'default', className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
