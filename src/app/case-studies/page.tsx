import type { Metadata } from 'next'
import { getAllCaseStudies } from '@/lib/mdx'
import { CaseStudyCard } from '@/components/case-studies/CaseStudyCard'
import { SectionHeading } from '@/components/ui/SectionHeading'

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'Detailed breakdowns of real engineering challenges, architectural decisions, and measurable outcomes.',
}

export default async function CaseStudiesPage() {
  const caseStudies = await getAllCaseStudies()

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <SectionHeading
        label="Case Studies"
        title="Real Engineering Work"
        description="Detailed breakdowns of real challenges, architectural decisions, and measurable outcomes from production systems."
        className="mb-12"
      />

      {caseStudies.length === 0 ? (
        <p className="text-[var(--muted)]">No case studies published yet. Check back soon.</p>
      ) : (
        <div className="grid gap-8">
          {caseStudies.map((cs) => (
            <CaseStudyCard key={cs.slug} caseStudy={cs} featured />
          ))}
        </div>
      )}
    </div>
  )
}
