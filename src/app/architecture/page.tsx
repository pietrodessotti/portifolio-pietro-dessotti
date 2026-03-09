import type { Metadata } from 'next'
import Link from 'next/link'
import { Layers, Network, Server, PenTool, BookOpen, Briefcase, ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { architectureTopics } from '@/data/architecture'

export const metadata: Metadata = {
  title: 'Architecture',
  description:
    'Deep dives into React Architecture, Microfrontends, BFF Pattern, and Design Systems — the engineering approaches behind scalable frontend systems.',
}

const iconMap: Record<string, React.ElementType> = {
  Layers,
  Network,
  Server,
  PenTool,
}

export default function ArchitecturePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <SectionHeading
        label="Deep Dives"
        title="Architecture"
        description="The engineering approaches behind scalable frontend systems — patterns, decisions, and trade-offs I apply daily across teams and products."
        className="mb-16"
      />

      <div className="grid gap-8 lg:grid-cols-2">
        {architectureTopics.map((topic) => {
          const Icon = iconMap[topic.icon] ?? Layers
          const hasLinks =
            topic.relatedArticles.length > 0 || topic.relatedCaseStudies.length > 0

          return (
            <Card key={topic.id} hover className="group flex flex-col">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--accent)]/10 text-[var(--accent)]">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="text-xl font-semibold text-[var(--foreground)]">{topic.title}</h2>
              </div>

              <p className="text-sm leading-7 text-[var(--muted)]">{topic.summary}</p>

              <div className="mt-5">
                <p className="mb-2.5 text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
                  Key Concepts
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {topic.concepts.map((concept) => (
                    <span
                      key={concept}
                      className="rounded-md border border-[var(--border)] bg-[var(--background)] px-2 py-0.5 text-xs text-[var(--muted)]"
                    >
                      {concept}
                    </span>
                  ))}
                </div>
              </div>

              {hasLinks && (
                <div className="mt-6 border-t border-[var(--border)] pt-5 space-y-2.5">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
                    Related
                  </p>
                  {topic.relatedArticles.map((article) => (
                    <Link
                      key={article.slug}
                      href={`/articles/${article.slug}`}
                      className="flex items-center gap-2 text-sm text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
                    >
                      <BookOpen className="h-3.5 w-3.5 shrink-0" />
                      <span className="flex-1 truncate">{article.title}</span>
                      <ArrowRight className="h-3 w-3 shrink-0 opacity-0 transition-opacity group-hover:opacity-60" />
                    </Link>
                  ))}
                  {topic.relatedCaseStudies.map((cs) => (
                    <Link
                      key={cs.slug}
                      href={`/case-studies/${cs.slug}`}
                      className="flex items-center gap-2 text-sm text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
                    >
                      <Briefcase className="h-3.5 w-3.5 shrink-0" />
                      <span className="flex-1 truncate">{cs.title}</span>
                      <ArrowRight className="h-3 w-3 shrink-0 opacity-0 transition-opacity group-hover:opacity-60" />
                    </Link>
                  ))}
                </div>
              )}
            </Card>
          )
        })}
      </div>
    </div>
  )
}
