import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Clock, Calendar } from 'lucide-react'
import { getAllArticles, getArticleBySlug } from '@/lib/mdx'
import { SITE_URL } from '@/lib/site'
import { MDXRenderer } from '@/components/mdx/MDXRenderer'
import { Tag } from '@/components/ui/Tag'
import { formatDate } from '@/lib/utils'
import { InteractiveAvatar } from '@/components/ui/InteractiveAvatar'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const articles = await getAllArticles()
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = await getArticleBySlug(slug)

  if (!article) return {}

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      publishedTime: article.publishedAt,
      tags: article.tags,
    },
  }
}

const BASE_URL = SITE_URL

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = await getArticleBySlug(slug)

  if (!article) notFound()

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt ?? article.publishedAt,
    author: {
      '@type': 'Person',
      name: 'Pietro Henrique Mello Dessotti',
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Person',
      name: 'Pietro Henrique Mello Dessotti',
    },
    url: `${BASE_URL}/articles/${slug}`,
    keywords: article.tags.join(', '),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Articles', item: `${BASE_URL}/articles` },
      {
        '@type': 'ListItem',
        position: 3,
        name: article.title,
        item: `${BASE_URL}/articles/${slug}`,
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
        href="/articles"
        className="mb-8 inline-flex items-center gap-1.5 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to articles
      </Link>

      <header className="mb-12">
        <div className="mb-4 flex flex-wrap gap-1.5">
          {article.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
          {article.title}
        </h1>

        <p className="mt-4 text-lg leading-8 text-[var(--muted)]">{article.description}</p>

        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-[var(--muted)]">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            {article.readingTime}
          </span>
        </div>

        {/* Author */}
        <div className="mt-8 flex items-center gap-3 border-t border-[var(--border)] pt-6">
          <InteractiveAvatar className="h-14 w-14 shrink-0" />
          <div>
            <p className="text-sm font-semibold text-[var(--foreground)]">Pietro Dessotti</p>
            <p className="text-xs text-[var(--muted)]">Senior Frontend Engineer at Zenvia</p>
          </div>
        </div>
      </header>

      <MDXRenderer source={article.content} />

      <div className="mt-16 border-t border-[var(--border)] pt-8">
        <Link
          href="/articles"
          className="inline-flex items-center gap-1.5 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to articles
        </Link>
      </div>
    </div>
  )
}
