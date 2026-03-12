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
      'Approaches for structuring React applications that remain understandable as they grow. I focus on patterns like compound components, state colocation, clear context boundaries, and component composition.',
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
      'Strategies for breaking large frontend applications into smaller, independently deployable parts. This allows multiple teams to work in parallel while keeping clear ownership boundaries.',
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
      'An API layer tailored specifically for frontend needs. It helps avoid unnecessary data fetching, simplifies integration with backend services, and allows frontend teams to own their data access logic.',
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
      'Design systems help product teams build consistent interfaces while moving faster. They combine shared design tokens, reusable components, documentation, and governance to keep multiple products aligned.',
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