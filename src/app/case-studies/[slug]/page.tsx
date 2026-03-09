import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Users, Clock, Building2, Briefcase } from 'lucide-react'
import { getAllCaseStudies, getCaseStudyBySlug } from '@/lib/mdx'
import { MDXRenderer } from '@/components/mdx/MDXRenderer'
import { Tag } from '@/components/ui/Tag'
import { Badge } from '@/components/ui/Badge'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const caseStudies = await getAllCaseStudies()
  return caseStudies.map((cs) => ({ slug: cs.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const cs = await getCaseStudyBySlug(slug)

  if (!cs) return {}

  return {
    title: cs.title,
    description: cs.description,
    openGraph: {
      title: cs.title,
      description: cs.description,
      type: 'article',
    },
  }
}

const BASE_URL = 'https://pietrodessotti.dev'

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const cs = await getCaseStudyBySlug(slug)

  if (!cs) notFound()

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    articleSection: 'Case Study',
    headline: cs.title,
    description: cs.description,
    datePublished: cs.publishedAt,
    author: {
      '@type': 'Person',
      name: 'Pietro Henrique Mello Dessotti',
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Person',
      name: 'Pietro Henrique Mello Dessotti',
    },
    url: `${BASE_URL}/case-studies/${slug}`,
    keywords: cs.technologies.join(', '),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Case Studies',
        item: `${BASE_URL}/case-studies`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: cs.title,
        item: `${BASE_URL}/case-studies/${slug}`,
      },
    ],
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Link
        href="/case-studies"
        className="mb-8 inline-flex items-center gap-1.5 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to case studies
      </Link>

      <header className="mb-12">
        <div className="mb-4 flex flex-wrap gap-1.5">
          {cs.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
          {cs.title}
        </h1>

        <p className="mt-4 text-lg leading-8 text-[var(--muted)]">{cs.description}</p>

        <div className="mt-8 grid gap-4 rounded-xl border border-[var(--border)] bg-[var(--muted-bg)] p-6 sm:grid-cols-2">
          <div className="flex items-center gap-2 text-sm">
            <Briefcase className="h-4 w-4 text-[var(--accent)]" />
            <span className="text-[var(--muted)]">Role:</span>
            <span className="font-medium text-[var(--foreground)]">{cs.role}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Building2 className="h-4 w-4 text-[var(--accent)]" />
            <span className="text-[var(--muted)]">Company:</span>
            <span className="font-medium text-[var(--foreground)]">{cs.company}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4 text-[var(--accent)]" />
            <span className="text-[var(--muted)]">Duration:</span>
            <span className="font-medium text-[var(--foreground)]">{cs.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Users className="h-4 w-4 text-[var(--accent)]" />
            <span className="text-[var(--muted)]">Team:</span>
            <span className="font-medium text-[var(--foreground)]">{cs.teamSize}</span>
          </div>
        </div>

        {cs.impact.length > 0 && (
          <div className="mt-6">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-widest text-[var(--accent)]">
              Key Impact
            </h2>
            <ul className="space-y-2">
              {cs.impact.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[var(--muted)]">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {cs.technologies.length > 0 && (
          <div className="mt-6">
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-widest text-[var(--accent)]">
              Technologies
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {cs.technologies.map((tech) => (
                <Badge key={tech} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </header>

      <MDXRenderer source={cs.content} />

      <div className="mt-16 border-t border-[var(--border)] pt-8">
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-1.5 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to case studies
        </Link>
      </div>
    </div>
  )
}
