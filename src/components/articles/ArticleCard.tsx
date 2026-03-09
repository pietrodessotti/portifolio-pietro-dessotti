import Link from 'next/link'
import { Clock, ArrowRight } from 'lucide-react'
import { Tag } from '@/components/ui/Tag'
import { formatDate } from '@/lib/utils'
import type { Article } from '@/types/article'

interface ArticleCardProps {
  article: Article
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group flex flex-col rounded-xl border border-[var(--border)] bg-[var(--background)] p-6 transition-shadow duration-200 hover:shadow-md dark:hover:shadow-zinc-900/50"
    >
      <div className="mb-3 flex flex-wrap gap-1.5">
        {article.tags.slice(0, 3).map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>

      <h3 className="flex-1 text-base font-semibold leading-6 text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
        {article.title}
      </h3>

      <p className="mt-2 line-clamp-2 text-sm leading-6 text-[var(--muted)]">
        {article.description}
      </p>

      <div className="mt-4 flex items-center justify-between text-xs text-[var(--muted)]">
        <div className="flex items-center gap-3">
          <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {article.readingTime}
          </span>
        </div>
        <ArrowRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
    </Link>
  )
}
