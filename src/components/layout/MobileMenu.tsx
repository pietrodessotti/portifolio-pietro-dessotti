'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { navLinks } from '@/data/navigation'
import { cn, isActiveLink } from '@/lib/utils'

export function MobileMenu() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex h-9 w-9 items-center justify-center rounded-md text-[var(--muted)] hover:bg-[var(--muted-bg)] hover:text-[var(--foreground)] transition-colors duration-150"
        aria-label="Toggle navigation menu"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full border-b border-[var(--border)] bg-[var(--background)] px-4 py-4 shadow-sm">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = isActiveLink(pathname, link.href)

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'rounded-md px-3 py-2 text-sm font-medium transition-colors duration-150',
                    isActive
                      ? 'bg-[var(--muted-bg)] text-[var(--foreground)]'
                      : 'text-[var(--muted)] hover:bg-[var(--muted-bg)] hover:text-[var(--foreground)]'
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>
        </div>
      )}
    </div>
  )
}
