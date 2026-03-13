'use client'

import { useCallback, useMemo, useState } from 'react'
import { ArticleCard } from './ArticleCard'
import { cn } from '@/lib/utils'
import type { Article } from '@/types/article'

interface TagCount {
  tag: string
  count: number
}

interface Props {
  articles: Article[]
  tags: TagCount[]
}

export function ArticlesWithFilter({ articles, tags }: Props) {
  const [active, setActive] = useState<string | null>(null)

  const filtered = useMemo(
    () => (active ? articles.filter((a) => a.tags.includes(active)) : articles),
    [active, articles]
  )

  const handleTagClick = useCallback(
    (tag: string) => setActive((prev) => (prev === tag ? null : tag)),
    []
  )

  return (
    <>
      <div className="mb-12">
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
          Key Concepts
        </p>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActive(null)}
            className={cn(
              'rounded-full border px-4 py-1.5 text-sm font-medium transition-colors duration-150',
              active === null
                ? 'border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-foreground)]'
                : 'border-[var(--border)] text-[var(--muted)] hover:border-[var(--foreground)] hover:text-[var(--foreground)]'
            )}
          >
            All
            <span className="ml-1.5 text-xs opacity-60">{articles.length}</span>
          </button>

          {tags.map(({ tag, count }) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className={cn(
                'rounded-full border px-4 py-1.5 text-sm font-medium transition-colors duration-150',
                active === tag
                  ? 'border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-foreground)]'
                  : 'border-[var(--border)] text-[var(--muted)] hover:border-[var(--foreground)] hover:text-[var(--foreground)]'
              )}
            >
              {tag}
              <span className="ml-1.5 text-xs opacity-60">{count}</span>
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="text-[var(--muted)]">No articles found for this topic.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      )}
    </>
  )
}
