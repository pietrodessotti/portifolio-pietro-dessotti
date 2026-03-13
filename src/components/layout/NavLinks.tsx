'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navLinks } from '@/data/navigation'
import { cn } from '@/lib/utils'

export function NavLinks() {
  const pathname = usePathname()

  return (
    <nav className="hidden md:flex items-center gap-1">
      {navLinks.slice(1).map((link) => {
        const isActive =
          pathname === link.href ||
          (link.href !== '/' && pathname.startsWith(link.href))

        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              'relative rounded-md px-3 py-2 text-sm font-medium transition-colors duration-150',
              isActive
                ? 'text-[var(--foreground)]'
                : 'text-[var(--muted)] hover:bg-[var(--muted-bg)] hover:text-[var(--foreground)]'
            )}
          >
            {link.label}
            {isActive && (
              <span className="absolute inset-x-3 -bottom-px h-px bg-[var(--accent)]" />
            )}
          </Link>
        )
      })}
    </nav>
  )
}
