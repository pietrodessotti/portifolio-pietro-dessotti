export interface CaseStudyFrontmatter {
  title: string
  description: string
  publishedAt: string
  tags: string[]
  role: string
  company: string
  duration: string
  teamSize: string
  impact: string[]
  technologies: string[]
  featured?: boolean
  draft?: boolean
  ogImage?: string
}

export interface CaseStudy extends CaseStudyFrontmatter {
  slug: string
  content: string
  readingTime: string
}
