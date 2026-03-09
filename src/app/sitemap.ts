import type { MetadataRoute } from 'next'
import { getAllArticles, getAllCaseStudies } from '@/lib/mdx'

const BASE_URL = 'https://pietrodessotti.dev'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getAllArticles()
  const caseStudies = await getAllCaseStudies()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/architecture`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/articles`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/case-studies`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
  ]

  const articleRoutes: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${BASE_URL}/articles/${a.slug}`,
    lastModified: new Date(a.updatedAt ?? a.publishedAt),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((cs) => ({
    url: `${BASE_URL}/case-studies/${cs.slug}`,
    lastModified: new Date(cs.publishedAt),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticRoutes, ...articleRoutes, ...caseStudyRoutes]
}
