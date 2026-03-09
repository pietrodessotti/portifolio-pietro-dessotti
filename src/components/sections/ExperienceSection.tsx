import Link from 'next/link'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Badge } from '@/components/ui/Badge'
import { experience } from '@/data/experience'
import { CheckCircle2 } from 'lucide-react'

export function ExperienceSection() {
  return (
    <section className="border-t border-[var(--border)]">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-32 lg:px-8">
        <SectionHeading
          label="Experience"
          title="Where I've Worked"
          description="5+ years growing from intern to senior at Zenvia, with freelance technical leadership in parallel."
          className="mb-12"
        />

        <div className="space-y-12">
          {experience.map((item, index) => (
            <div key={index} className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-full before:w-px before:bg-[var(--border)]">
              <div className="absolute left-[-5px] top-2 h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />

              <div className="mb-1 flex flex-wrap items-center gap-2">
                <h3 className="text-lg font-semibold text-[var(--foreground)]">{item.role}</h3>
                {item.companyUrl ? (
                  <Link
                    href={item.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-[var(--accent)] hover:underline"
                  >
                    @ {item.company}
                  </Link>
                ) : (
                  <span className="text-sm font-medium text-[var(--accent)]">@ {item.company}</span>
                )}
                {item.type === 'freelance' && (
                  <Badge variant="outline">Freelance</Badge>
                )}
                <span className="ml-auto text-sm text-[var(--muted)]">{item.period}</span>
              </div>

              <p className="mb-4 text-sm leading-6 text-[var(--muted)]">{item.description}</p>

              <ul className="space-y-2">
                {item.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[var(--muted)]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
