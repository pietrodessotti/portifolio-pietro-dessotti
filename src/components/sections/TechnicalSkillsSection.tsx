import { Monitor, Layers, Server, FlaskConical } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Badge } from '@/components/ui/Badge'
import { skillCategories } from '@/data/skills'

const iconMap: Record<string, React.ElementType> = {
  Monitor,
  Layers,
  Server,
  FlaskConical,
}

export function TechnicalSkillsSection() {
  return (
    <section className="border-t border-[var(--border)] bg-[var(--muted-bg)]">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-32 lg:px-8">
        <SectionHeading
          label="Skills"
          title="Technical Skills"
          description="Technologies I work with daily and areas where I'm actively growing."
          className="mb-12"
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category) => {
            const Icon = iconMap[category.icon] ?? Monitor
            return (
              <div key={category.category}>
                <div className="mb-4 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[var(--accent)]/10 text-[var(--accent)]">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="text-sm font-semibold text-[var(--foreground)]">
                    {category.category}
                  </h3>
                </div>

                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill.name} className="flex items-center justify-between">
                      <span className="text-sm text-[var(--muted)]">{skill.name}</span>
                      {skill.level === 'learning' && (
                        <Badge variant="learning" className="text-[10px]">
                          learning
                        </Badge>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
