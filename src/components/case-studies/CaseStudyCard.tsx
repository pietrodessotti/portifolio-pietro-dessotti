import Link from 'next/link'
import { ArrowRight, Users, Clock } from 'lucide-react'
import { Tag } from '@/components/ui/Tag'
import { formatDate } from '@/lib/utils'
import type { CaseStudy } from '@/types/case-study'

interface CaseStudyCardProps {
  caseStudy: CaseStudy
  featured?: boolean
}

export function CaseStudyCard({ caseStudy, featured = false }: CaseStudyCardProps) {
  return (
    <Link
      href={`/case-studies/${caseStudy.slug}`}
      className="group flex flex-col rounded-xl border border-[var(--border)] bg-[var(--background)] p-6 transition-shadow duration-200 hover:shadow-md dark:hover:shadow-zinc-900/50"
    >
      <div className="mb-3 flex flex-wrap gap-1.5">
        {caseStudy.tags.slice(0, 3).map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>

      <h3 className={`flex-1 font-semibold leading-6 text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors ${featured ? 'text-xl' : 'text-base'}`}>
        {caseStudy.title}
      </h3>

      <p className="mt-2 line-clamp-2 text-sm leading-6 text-[var(--muted)]">
        {caseStudy.description}
      </p>

      {featured && caseStudy.impact.length > 0 && (
        <ul className="mt-4 space-y-1">
          {caseStudy.impact.slice(0, 3).map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-[var(--muted)]">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
              {item}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-4 flex items-center justify-between text-xs text-[var(--muted)]">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <Users className="h-3 w-3" />
            {caseStudy.teamSize}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {caseStudy.duration}
          </span>
        </div>
        <ArrowRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
    </Link>
  )
}
