import type { Metadata } from 'next'
import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ContactForm } from '@/components/contact/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Pietro Dessotti — open to new opportunities, collaborations, and conversations about frontend architecture.',
}

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/pietrodessotti',
    icon: Github,
    description: 'See my open source work',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/pietro-dessotti',
    icon: Linkedin,
    description: 'Connect professionally',
  },
  {
    label: 'Email',
    href: 'mailto:pietrohdessotti@gmail.com',
    icon: Mail,
    description: 'Send me an email directly',
  },
]

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <SectionHeading
        label="Contact"
        title="Get in Touch"
        description="Open to new opportunities, collaborations, or just a conversation about frontend architecture."
        className="mb-12"
      />

      <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
        <ContactForm />

        <aside className="space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-[var(--accent)]">
            Other Ways to Connect
          </h2>
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-3 rounded-lg border border-[var(--border)] bg-[var(--background)] p-4 text-sm transition-colors hover:border-[var(--accent)]"
            >
              <link.icon className="h-5 w-5 shrink-0 text-[var(--accent)]" />
              <div>
                <p className="font-medium text-[var(--foreground)]">{link.label}</p>
                <p className="text-xs text-[var(--muted)]">{link.description}</p>
              </div>
            </Link>
          ))}
        </aside>
      </div>
    </div>
  )
}
