export interface ExperienceItem {
  role: string
  company: string
  companyUrl?: string
  period: string
  type?: 'fulltime' | 'freelance'
  description: string
  highlights: string[]
}

export const experience: ExperienceItem[] = [
  {
    role: 'Senior Frontend Engineer',
    company: 'Zenvia',
    companyUrl: 'https://zenvia.com',
    period: '2021 — Present',
    type: 'fulltime',
    description:
      'Senior Frontend Engineer at Zenvia Customer Cloud (ZCC), a B2B communications platform used by 2,400+ active clients. Promoted across multiple engineering levels (Intern → Trainee → Junior → Mid → Senior) while contributing to architecture decisions, code governance and team mentorship.',
    highlights: [
      'Technical reference for the ZCC frontend platform',
      'Mentoring Junior and Mid-level engineers through onboarding and code reviews',
      'Defined frontend architecture standards and led strategic MR reviews',
      'Led migration from monorepo to microfrontend architecture',
      'Developed production features such as message scheduling and media sending',
      'Built BFF services with Node.js (NestJS) integrated with Kafka',
      'Introduced testing culture with Jest (0% → 35% coverage)',
    ],
  },
  {
    role: 'Senior Frontend Engineer',
    company: 'HubCSR',
    companyUrl: 'https://www.hubcsr.tech',
    period: '2023 — 2025',
    type: 'freelance',
    description:
      'Technical lead for a social impact SaaS platform focused on corporate volunteering and ESG initiatives. Built the frontend platform from scratch and delivered the MVP to production.',
    highlights: [
      'Designed the entire frontend architecture from scratch',
      'Implemented Atomic Design component system',
      'Delivered the MVP to production in 3 months',
      'Built dashboards and data visualizations with React',
      'Implemented E2E testing with Cypress',
      'Collaborated on Node.js / NestJS backend services',
    ],
  },
]
