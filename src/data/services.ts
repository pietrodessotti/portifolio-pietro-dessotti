export interface Service {
  icon: string
  title: string
  description: string
  technologies: string[]
}

export const services: Service[] = [
  {
    icon: 'Monitor',
    title: 'Frontend Architecture',
    description:
      'Designing scalable applications using React, TypeScript, Microfrontends and design systems that allow teams to ship independently and confidently.',
    technologies: ['React', 'TypeScript', 'Microfrontends', 'Design Systems'],
  },
  {
    icon: 'Server',
    title: 'Backend for Frontend (BFF)',
    description:
      'Building APIs and microservices using Node.js and NestJS specifically shaped to support modern frontend applications and reduce coupling.',
    technologies: ['Node.js', 'NestJS', 'REST APIs', 'GraphQL'],
  },
  {
    icon: 'Users',
    title: 'Technical Leadership',
    description:
      'Supporting teams through code reviews, architecture discussions, sprint planning and technical refinements that elevate everyone around me.',
    technologies: ['Code Review', 'Architecture', 'Mentoring', 'Agile'],
  },
  {
    icon: 'Zap',
    title: 'Developer Experience',
    description:
      'Defining best practices, development standards and scalable project structures that help teams move faster with less cognitive overhead.',
    technologies: ['DX', 'Tooling', 'Best Practices', 'Documentation'],
  },
]
