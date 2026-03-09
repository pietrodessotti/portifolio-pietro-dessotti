import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/pietrodessotti',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/pietro-dessotti',
    icon: Linkedin,
  },
  {
    label: 'Email',
    href: 'mailto:pietrohdessotti@gmail.com',
    icon: Mail,
  },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)]">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-[var(--foreground)]">Pietro Dessotti</p>
            <p className="mt-1 text-sm text-[var(--muted)]">Senior Frontend Engineer</p>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex h-9 w-9 items-center justify-center rounded-md text-[var(--muted)] hover:bg-[var(--muted-bg)] hover:text-[var(--foreground)] transition-colors"
                aria-label={link.label}
              >
                <link.icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-[var(--border)] pt-8">
          <p className="text-center text-xs text-[var(--muted)]">
            © {year} Pietro Dessotti. Built with Next.js, TypeScript & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  )
}
