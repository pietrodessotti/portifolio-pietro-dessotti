import { cn } from '@/lib/utils'
import Link from 'next/link'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  external?: boolean
  download?: string
  className?: string
  children: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const variants = {
  primary:
    'bg-[var(--accent)] text-[var(--accent-foreground)] hover:opacity-90',
  secondary:
    'border border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--muted-bg)]',
  ghost:
    'text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--muted-bg)]',
}

const sizes = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-5 text-sm',
  lg: 'h-12 px-6 text-base',
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  external,
  download,
  className,
  children,
  onClick,
  type = 'button',
  disabled,
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-md font-medium',
    'transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[var(--accent)]',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    variants[variant],
    sizes[size],
    className
  )

  if (href && download) {
    return (
      <a href={href} download={download} className={classes}>
        {children}
      </a>
    )
  }

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} onClick={onClick} type={type} disabled={disabled}>
      {children}
    </button>
  )
}
