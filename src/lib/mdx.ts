import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import type { Article, ArticleFrontmatter } from '@/types/article'
import type { CaseStudy, CaseStudyFrontmatter } from '@/types/case-study'

const CONTENT_DIR = path.join(process.cwd(), 'content')
const ARTICLES_DIR = path.join(CONTENT_DIR, 'articles')
const CASE_STUDIES_DIR = path.join(CONTENT_DIR, 'case-studies')

function getSlugFromFilename(filename: string): string {
  return filename.replace(/\.mdx$/, '')
}

// ─── Articles ────────────────────────────────────────────────────────────────

export async function getAllArticles(): Promise<Article[]> {
  if (!fs.existsSync(ARTICLES_DIR)) return []

  const filenames = fs.readdirSync(ARTICLES_DIR).filter((f) => f.endsWith('.mdx'))

  const articles = filenames
    .map((filename) => {
      const filePath = path.join(ARTICLES_DIR, filename)
      const raw = fs.readFileSync(filePath, 'utf-8')
      const { data, content } = matter(raw)
      const frontmatter = data as ArticleFrontmatter

      if (frontmatter.draft) return null

      return {
        ...frontmatter,
        slug: getSlugFromFilename(filename),
        content,
        readingTime: readingTime(content).text,
      } satisfies Article
    })
    .filter((a): a is Article => a !== null)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())

  return articles
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const filePath = path.join(ARTICLES_DIR, `${slug}.mdx`)

  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  const frontmatter = data as ArticleFrontmatter

  if (frontmatter.draft) return null

  return {
    ...frontmatter,
    slug,
    content,
    readingTime: readingTime(content).text,
  }
}

export async function getFeaturedArticles(limit = 3): Promise<Article[]> {
  const articles = await getAllArticles()
  const featured = articles.filter((a) => a.featured)
  return featured.length >= limit ? featured.slice(0, limit) : articles.slice(0, limit)
}

// ─── Case Studies ─────────────────────────────────────────────────────────────

export async function getAllCaseStudies(): Promise<CaseStudy[]> {
  if (!fs.existsSync(CASE_STUDIES_DIR)) return []

  const filenames = fs.readdirSync(CASE_STUDIES_DIR).filter((f) => f.endsWith('.mdx'))

  const caseStudies = filenames
    .map((filename) => {
      const filePath = path.join(CASE_STUDIES_DIR, filename)
      const raw = fs.readFileSync(filePath, 'utf-8')
      const { data, content } = matter(raw)
      const frontmatter = data as CaseStudyFrontmatter

      if (frontmatter.draft) return null

      return {
        ...frontmatter,
        slug: getSlugFromFilename(filename),
        content,
        readingTime: readingTime(content).text,
      } satisfies CaseStudy
    })
    .filter((c): c is CaseStudy => c !== null)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())

  return caseStudies
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  const filePath = path.join(CASE_STUDIES_DIR, `${slug}.mdx`)

  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  const frontmatter = data as CaseStudyFrontmatter

  if (frontmatter.draft) return null

  return {
    ...frontmatter,
    slug,
    content,
    readingTime: readingTime(content).text,
  }
}

export async function getFeaturedCaseStudy(): Promise<CaseStudy | null> {
  const caseStudies = await getAllCaseStudies()
  return caseStudies.find((c) => c.featured) ?? caseStudies[0] ?? null
}
