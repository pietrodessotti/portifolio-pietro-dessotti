import type { Metadata } from 'next'
import { Download, ExternalLink, RefreshCw } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'

const LAST_UPDATED = 'March 10, 2026'

export const metadata: Metadata = {
  title: 'Resume',
  description:
    'Download or view the professional resume of Pietro Dessotti, Senior Frontend Engineer specialized in React, TypeScript and scalable frontend architecture.',
}

const PDF = '/resume/Pietro_Dessotti_Senior_Frontend_Engineer.pdf'

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <SectionHeading
        label="Resume"
        title="Pietro Dessotti"
        description="Download or view my professional resume."
        className="mb-10"
      />

      <p className="mb-8 inline-flex items-center gap-2 text-sm text-[var(--muted)]">
        <RefreshCw className="h-3.5 w-3.5" />
        Last updated: {LAST_UPDATED}
      </p>

      <div className="flex flex-wrap gap-3">
        <Button href={PDF} external size="lg">
          View Resume
          <ExternalLink className="h-4 w-4" />
        </Button>
        <Button
          href={PDF}
          download="Pietro_Dessotti_Senior_Frontend_Engineer.pdf"
          variant="secondary"
          size="lg"
        >
          Download Resume
          <Download className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
