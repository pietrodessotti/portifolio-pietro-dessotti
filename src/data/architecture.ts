export interface ArchitectureTopic {
  id: string
  icon: string
  title: string
  summary: string
  concepts: string[]
  relatedArticles: { slug: string; title: string }[]
  relatedCaseStudies: { slug: string; title: string }[]
}

export const architectureTopics: ArchitectureTopic[] = [
  {
    id: 'react-architecture',
    icon: 'Layers',
    title: 'React Architecture',
    summary:
      'Patterns for building component hierarchies that scale — compound components, render props, composition over configuration, and co-locating state as close to its consumer as possible.',
    concepts: [
      'Compound Components',
      'State Colocation',
      'Render Props',
      'Context Boundaries',
      'Performance Memoization',
      'Code Splitting',
    ],
    relatedArticles: [],
    relatedCaseStudies: [],
  },
  {
    id: 'microfrontends',
    icon: 'Network',
    title: 'Microfrontends',
    summary:
      'Decomposing frontend monoliths so independent teams can own, build, and deploy their slices of the UI without coordination overhead. Module Federation is the key enabler.',
    concepts: [
      'Module Federation',
      'Shell App',
      'Shared Dependencies',
      'Independent Deploys',
      'Team Autonomy',
      'Routing Strategy',
    ],
    relatedArticles: [
      {
        slug: 'microfrontend-architecture-lessons',
        title: 'Micro-Frontend Architecture: Lessons from 20+ Product Initiatives',
      },
    ],
    relatedCaseStudies: [
      {
        slug: 'microfrontend-platform',
        title: 'Migrating to Microfrontends: Enabling 3 Teams to Ship Independently',
      },
    ],
  },
  {
    id: 'bff-pattern',
    icon: 'Server',
    title: 'Backend for Frontend (BFF)',
    summary:
      'A dedicated API layer shaped for exactly what the frontend needs — no over-fetching, no coupling to mobile contracts, and full ownership of the data-fetching logic sitting with the frontend team.',
    concepts: [
      'API Aggregation',
      'Payload Shaping',
      'NestJS',
      'GraphQL / REST',
      'Auth Delegation',
      'Frontend Ownership',
    ],
    relatedArticles: [
      {
        slug: 'bff-pattern-react-teams',
        title: 'The BFF Pattern: How Frontend Teams Can Own Their API Layer',
      },
    ],
    relatedCaseStudies: [],
  },
  {
    id: 'design-systems',
    icon: 'PenTool',
    title: 'Design Systems',
    summary:
      'Building the shared visual language and component library that let multiple product teams move fast without drifting apart — tokens, governance, versioning, and Storybook-driven development.',
    concepts: [
      'Design Tokens',
      'Component API Design',
      'Storybook',
      'Versioning & Changesets',
      'Governance',
      'Adoption Strategy',
    ],
    relatedArticles: [],
    relatedCaseStudies: [
      {
        slug: 'design-system-migration',
        title: 'Building a Cross-Team Design System from Scratch',
      },
    ],
  },
]
