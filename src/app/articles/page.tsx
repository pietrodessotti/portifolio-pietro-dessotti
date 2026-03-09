import type { Metadata } from 'next'
import { getAllArticles } from '@/lib/mdx'
import { ArticleCard } from '@/components/articles/ArticleCard'
import { SectionHeading } from '@/components/ui/SectionHeading'

export const metadata: Metadata = {
  title: 'Articles',
  description:
    'Thoughts on frontend architecture, TypeScript, microfrontends, and engineering practices.',
}

export default async function ArticlesPage() {
  const articles = await getAllArticles()

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <SectionHeading
        label="Writing"
        title="Articles"
        description="Thoughts on frontend architecture, TypeScript, microfrontends, and engineering practices."
        className="mb-12"
      />

      {articles.length === 0 ? (
        <p className="text-[var(--muted)]">No articles published yet. Check back soon.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      )}
    </div>
  )
}
