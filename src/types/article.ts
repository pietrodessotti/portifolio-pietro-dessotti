export interface ArticleFrontmatter {
  title: string
  description: string
  publishedAt: string
  updatedAt?: string
  tags: string[]
  featured?: boolean
  draft?: boolean
  ogImage?: string
}

export interface Article extends ArticleFrontmatter {
  slug: string
  content: string
  readingTime: string
}
