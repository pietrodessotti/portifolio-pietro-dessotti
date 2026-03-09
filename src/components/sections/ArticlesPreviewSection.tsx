import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ArticleCard } from '@/components/articles/ArticleCard'
import { getFeaturedArticles } from '@/lib/mdx'

export async function ArticlesPreviewSection() {
  const articles = await getFeaturedArticles(3)

  if (articles.length === 0) return null

  return (
    <section className="border-t border-[var(--border)]">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-32 lg:px-8">
        <div className="mb-12 flex items-end justify-between">
          <SectionHeading
            label="Writing"
            title="Latest Articles"
            description="Thoughts on frontend architecture, team practices, and software craft."
          />
          <Link
            href="/articles"
            className="hidden shrink-0 items-center gap-1 text-sm font-medium text-[var(--accent)] hover:underline sm:flex"
          >
            View all <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>

        <div className="mt-8 sm:hidden">
          <Link
            href="/articles"
            className="flex items-center gap-1 text-sm font-medium text-[var(--accent)] hover:underline"
          >
            View all articles <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
