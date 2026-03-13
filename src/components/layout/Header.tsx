import Link from 'next/link'
import { ThemeToggle } from './ThemeToggle'
import { MobileMenu } from './MobileMenu'
import { NavLinks } from './NavLinks'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-sm">
      <div className="relative mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-sm font-semibold text-[var(--foreground)] hover:text-[var(--accent)] transition-colors duration-150"
        >
          Pietro Dessotti
        </Link>

        <NavLinks />

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
