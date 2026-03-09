export interface Principle {
  title: string
  description: string
}

export const principles: Principle[] = [
  {
    title: 'Code should be easy to read before being clever',
    description:
      'A simple solution a junior can understand and maintain beats a clever one only seniors can debug. Clarity compounds across team size and time.',
  },
  {
    title: 'Architecture must scale with teams, not only with code',
    description:
      'Technical decisions should protect team autonomy. The best architecture is one that lets teams ship independently without constant coordination.',
  },
  {
    title: 'Clear communication is part of engineering',
    description:
      'Writing a clear pull request description, a useful comment, or a well-structured RFC is as valuable as writing the code itself.',
  },
  {
    title: 'Performance and bundle size always matter',
    description:
      'Every kilobyte has a cost. Every render has a cost. Respecting these constraints from the start avoids painful rewrites later.',
  },
  {
    title: 'Consistency reduces cognitive load',
    description:
      'Conventions, patterns and shared standards free engineers from decision fatigue and let them focus on solving actual business problems.',
  },
]
