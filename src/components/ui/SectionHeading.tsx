import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  label?: string
  title: string
  description?: string
  centered?: boolean
  className?: string
}

export function SectionHeading({
  label,
  title,
  description,
  centered = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(centered && 'text-center', className)}>
      {label && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[var(--accent)]">
          {label}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-8 text-[var(--muted)]">{description}</p>
      )}
    </div>
  )
}
