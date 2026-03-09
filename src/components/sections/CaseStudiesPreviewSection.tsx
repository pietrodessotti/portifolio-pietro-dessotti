import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { CaseStudyCard } from '@/components/case-studies/CaseStudyCard'
import { getFeaturedCaseStudy } from '@/lib/mdx'

export async function CaseStudiesPreviewSection() {
  const featured = await getFeaturedCaseStudy()

  if (!featured) return null

  return (
    <section className="border-t border-[var(--border)] bg-[var(--muted-bg)]">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-32 lg:px-8">
        <div className="mb-12 flex items-end justify-between">
          <SectionHeading
            label="Case Studies"
            title="Real Engineering Work"
            description="Detailed breakdowns of challenges, decisions, and outcomes from production systems."
          />
          <Link
            href="/case-studies"
            className="hidden shrink-0 items-center gap-1 text-sm font-medium text-[var(--accent)] hover:underline sm:flex"
          >
            View all <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <CaseStudyCard caseStudy={featured} featured />

        <div className="mt-8 sm:hidden">
          <Link
            href="/case-studies"
            className="flex items-center gap-1 text-sm font-medium text-[var(--accent)] hover:underline"
          >
            View all case studies <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
