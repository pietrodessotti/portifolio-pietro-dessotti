export type SkillLevel = 'expert' | 'advanced' | 'learning'

export interface Skill {
  name: string
  level: SkillLevel
}

export interface SkillCategory {
  category: string
  icon: string
  skills: Skill[]
}
export const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend',
    icon: 'Monitor',
    skills: [
      { name: 'React', level: 'expert' },
      { name: 'Next.js', level: 'expert' },
      { name: 'TypeScript', level: 'expert' },
      { name: 'Vite', level: 'advanced' },
      { name: 'Vue.js', level: 'advanced' },
      { name: 'Tailwind CSS', level: 'advanced' },
    ],
  },
  {
    category: 'Architecture',
    icon: 'Layers',
    skills: [
      { name: 'Frontend Architecture', level: 'expert' },
      { name: 'Microfrontends', level: 'expert' },
      { name: 'Design Systems', level: 'expert' },
      { name: 'Component Libraries', level: 'expert' },
      { name: 'Atomic Design', level: 'expert' },
      { name: 'BFF Pattern', level: 'advanced' },
      { name: 'Monorepos', level: 'advanced' },
    ],
  },
  {
    category: 'Testing & State',
    icon: 'FlaskConical',
    skills: [
      { name: 'Redux', level: 'advanced' },
      { name: 'Zustand', level: 'advanced' },
      { name: 'React Context', level: 'advanced' },
      { name: 'Jest', level: 'advanced' },
      { name: 'React Testing Library', level: 'advanced' },
      { name: 'Cypress', level: 'advanced' },
      { name: 'Storybook', level: 'expert' },
    ],
  },
  {
    category: 'Backend & Tools',
    icon: 'Server',
    skills: [
      { name: 'Node.js', level: 'advanced' },
      { name: 'NestJS', level: 'advanced' },
      { name: 'REST APIs', level: 'advanced' },
      { name: 'Kafka', level: 'learning' },
      { name: 'Git / GitHub / GitLab', level: 'expert' },
      { name: 'Figma', level: 'advanced' },
      { name: 'CI/CD', level: 'learning' },
      { name: 'Docker', level: 'learning' },
    ],
  },
]
