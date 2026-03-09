import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { ArrowRight, BookOpen, Download, Mail } from 'lucide-react'

const highlights = [
  '5+ years building production systems',
  '2,400+ clients impacted in production',
  'React · TypeScript · Microfrontends',
]

export function HeroSection() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
      <div className="max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[var(--accent)]">
          Senior Frontend Engineer · São José dos Campos, Brazil
        </p>

        <h1 className="text-5xl font-bold tracking-tight text-[var(--foreground)] sm:text-6xl lg:text-7xl">
          Pietro Dessotti
        </h1>

        <p className="mt-3 text-xl font-medium text-[var(--muted)] sm:text-2xl">
          Senior Frontend Engineer at Zenvia
        </p>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
          Building scalable B2B products with React, TypeScript and Microfrontends.
          Technical reference in design systems, BFF architecture and frontend governance at Zenvia.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {highlights.map((h) => (
            <Badge key={h} variant="outline">
              {h}
            </Badge>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="/case-studies" size="lg">
            View my work
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button href="/articles" variant="secondary" size="lg">
            Read my blog
            <BookOpen className="h-4 w-4" />
          </Button>
          <Button href="/contact" variant="ghost" size="lg">
            Contact
            <Mail className="h-4 w-4" />
          </Button>
          <Button
            href="/resume/pietro-dessotti-resume.pdf"
            download="pietro-dessotti-resume.pdf"
            variant="ghost"
            size="lg"
          >
            Download Resume
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
