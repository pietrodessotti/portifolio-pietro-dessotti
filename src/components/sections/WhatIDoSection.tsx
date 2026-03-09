import { Monitor, Server, Users, Zap } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { services } from '@/data/services'

const iconMap: Record<string, React.ElementType> = {
  Monitor,
  Server,
  Users,
  Zap,
}

export function WhatIDoSection() {
  return (
    <section className="border-t border-[var(--border)] bg-[var(--muted-bg)]">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-32 lg:px-8">
        <SectionHeading
          label="Expertise"
          title="What I Do"
          description="Core areas where I design scalable systems and help teams deliver better software."
          className="mb-12"
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service) => {
            const Icon = iconMap[service.icon] ?? Monitor
            return (
              <Card key={service.title} hover>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--accent)]/10 text-[var(--accent)]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--foreground)]">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{service.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-[var(--background)] px-2 py-0.5 text-xs text-[var(--muted)] border border-[var(--border)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
