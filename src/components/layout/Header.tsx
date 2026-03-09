import Link from 'next/link'
import { navLinks } from '@/data/navigation'
import { ThemeToggle } from './ThemeToggle'
import { MobileMenu } from './MobileMenu'
import { cn } from '@/lib/utils'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-sm">
      <div className="relative mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-sm font-semibold text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
        >
          Pietro Dessotti
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'rounded-md px-3 py-2 text-sm font-medium text-[var(--muted)]',
                'hover:bg-[var(--muted-bg)] hover:text-[var(--foreground)]',
                'transition-colors duration-200'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
