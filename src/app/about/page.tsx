import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Senior Frontend Engineer with 5+ years building scalable B2B products. Technical reference in React, TypeScript, microfrontends and design systems at Zenvia.",
};

const facts = [
  "5+ years at Zenvia, growing from Intern to Senior Frontend Engineer",
  "Technical reference for Zenvia Customer Cloud (ZCC), serving 2,400+ clients",
  "Led migration from monorepo to microfrontend architecture",
  "Introduced testing culture: 0% → 35% coverage, 80%+ on critical flows",
  "Delivered HubCSR SaaS MVP to production in 3 months",
  "Expert in React, TypeScript, microfrontends and design systems",
  "Backend experience with Node.js, NestJS and REST APIs",
  "Mentors Junior and Mid-level engineers through onboarding and reviews",
];

const values = [
  {
    title: "Architecture that empowers teams",
    description:
      "Good architecture should help teams move faster, not slow them down. I try to design systems that reduce friction and give engineers more autonomy.",
  },
  {
    title: "Care for the craft",
    description:
      "Clear naming, well-designed APIs, and thoughtful code structure make a huge difference over time. Small details compound when systems grow.",
  },
  {
    title: "Always learning",
    description:
      "The frontend ecosystem evolves quickly. I regularly invest time in studying new ideas, tools, and patterns and sharing what I learn with others.",
  },
  {
    title: "People matter",
    description:
      "Great engineering teams are built on trust and open discussion. I value environments where people feel comfortable asking questions and challenging ideas.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
        {/* Sidebar */}
        <aside>
          <div className="sticky top-24">
            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-2xl bg-[var(--muted-bg)] text-4xl font-bold text-[var(--accent)]">
              PH
            </div>
            <h1 className="text-2xl font-bold text-[var(--foreground)]">
              Pietro Dessotti
            </h1>
            <p className="mt-1 text-[var(--muted)]">Senior Frontend Engineer</p>
            <p className="mt-1 text-sm text-[var(--muted)]">
              Brazil · Open to remote
            </p>

            <div className="mt-6 flex flex-col gap-2">
              <Button href="/contact" size="sm">
                Get in touch
              </Button>
              <Button href="/case-studies" variant="secondary" size="sm">
                View my work
              </Button>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="space-y-16">
          <section>
            <SectionHeading title="About Me" className="mb-6" />
            <div className="space-y-4 text-[var(--muted)] leading-7">
              <p>
                I&apos;m a Senior Frontend Engineer with over 5 years of
                experience building scalable digital products. Most of my career
                has been at
                <a
                  href="https://zenvia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[var(--accent)] hover:underline"
                >
                  {" "}
                  Zenvia
                </a>
                , a B2B communications SaaS platform used by thousands of
                companies.
              </p>

              <p>
                I started there as an intern and progressed through multiple
                engineering levels until becoming a Senior Frontend Engineer.
                Today I act as a technical reference for the Zenvia Customer
                Cloud (ZCC) frontend, a platform used by more than 2,400 active
                clients.
              </p>

              <p>
                My work spans frontend architecture, microfrontend platforms,
                design systems, testing strategies and BFF services built with
                Node.js and NestJS. I enjoy building systems that allow teams to
                move faster while keeping the codebase maintainable and
                scalable.
              </p>

              <p>
                In parallel, I led the development of the
                <a
                  href="https://www.hubcsr.tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[var(--accent)] hover:underline"
                >
                  {" "}
                  HubCSR platform
                </a>
                , building the entire frontend from scratch and delivering the
                MVP in three months. That experience strengthened my ability to
                balance product speed with long-term architecture.
              </p>

              <p>
                I believe great engineering is inseparable from clear
                communication, thoughtful collaboration and continuous learning.
                Mentoring engineers and helping teams improve their technical
                practices is a big part of how I like to contribute.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-6 text-xl font-semibold text-[var(--foreground)]">
              Quick Facts
            </h2>
            <ul className="space-y-3">
              {facts.map((fact, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-[var(--muted)]"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
                  {fact}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-6 text-xl font-semibold text-[var(--foreground)]">
              What I Value
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-xl border border-[var(--border)] bg-[var(--muted-bg)] p-5"
                >
                  <h3 className="mb-2 text-sm font-semibold text-[var(--foreground)]">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-6 text-[var(--muted)]">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-6 text-xl font-semibold text-[var(--foreground)]">
              Outside of Work
            </h2>
            <p className="text-sm leading-7 text-[var(--muted)]">
              When I&apos;m not building software, I still tend to stay close to
              it. I enjoy reading about architecture, writing technical
              articles, and occasionally joining code reviews outside my own
              team. I also like mentoring junior developers who are going
              through the same learning curve I experienced earlier in my
              career.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
