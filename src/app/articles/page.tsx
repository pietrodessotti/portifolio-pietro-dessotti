import type { Metadata } from 'next'
import { getAllArticles, getAllTags } from '@/lib/mdx'
import { ArticlesWithFilter } from '@/components/articles/ArticlesWithFilter'
import { SectionHeading } from '@/components/ui/SectionHeading'

export const metadata: Metadata = {
  title: 'Articles',
  description:
    'Thoughts on frontend architecture, TypeScript, microfrontends, and engineering practices.',
}

export default async function ArticlesPage() {
  const [articles, tags] = await Promise.all([getAllArticles(), getAllTags()])

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
        <ArticlesWithFilter articles={articles} tags={tags} />
      )}
    </div>
  )
}
