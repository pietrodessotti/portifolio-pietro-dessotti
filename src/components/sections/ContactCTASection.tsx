import { Mail, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { SiteConfigurator } from '@/components/ui/SiteConfigurator'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function ContactCTASection() {
  return (
    <section className="border-t border-[var(--border)] bg-[var(--muted-bg)]">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <ScrollReveal className="flex justify-center mb-8">
            <SiteConfigurator className="h-32 w-32" />
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <SectionHeading
              label="Get in touch"
              title="Let's work together"
              description="Open to technical conversations, consulting inquiries, and interesting frontend engineering challenges."
              centered
              className="mb-10"
            />
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="flex flex-wrap justify-center gap-3">
              <Button href="/contact" size="lg">
                Send a message
                <Mail className="h-4 w-4" />
              </Button>
              <Button
                href="https://linkedin.com/in/pietro-dessotti"
                variant="secondary"
                size="lg"
                external
              >
                Connect on LinkedIn
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
