import { SectionHeading } from '@/components/ui/SectionHeading'
import { principles } from '@/data/principles'

export function EngineeringPrinciplesSection() {
  return (
    <section className="border-t border-[var(--border)]">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-32 lg:px-8">
        <SectionHeading
          label="Philosophy"
          title="Engineering Principles"
          description="The beliefs that shape how I write code, make decisions, and collaborate with teams."
          className="mb-12"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((principle, index) => (
            <div key={index} className="flex gap-4">
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--muted-bg)] text-sm font-bold text-[var(--accent)]">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div>
                <h3 className="text-sm font-semibold leading-6 text-[var(--foreground)]">
                  {principle.title}
                </h3>
                <p className="mt-1.5 text-sm leading-6 text-[var(--muted)]">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
