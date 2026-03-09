import { ImageResponse } from 'next/og'
import { getArticleBySlug } from '@/lib/mdx'

export const runtime = 'nodejs'
export const alt = 'Article OG Image'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

interface Props {
  params: Promise<{ slug: string }>
}

export default async function ArticleOGImage({ params }: Props) {
  const { slug } = await params
  const article = await getArticleBySlug(slug)

  const title = article?.title ?? 'Article'
  const tags = article?.tags?.slice(0, 4) ?? []
  const readingTime = article?.readingTime ?? ''
  const date = article?.publishedAt
    ? new Date(article.publishedAt).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })
    : ''

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          backgroundColor: '#09090b',
          padding: '80px',
        }}
      >
        {/* Accent bar */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '6px',
            backgroundColor: '#3291ff',
          }}
        />

        {/* Label */}
        <p
          style={{
            fontSize: '18px',
            color: '#3291ff',
            fontFamily: 'monospace',
            margin: '0 0 20px',
            letterSpacing: '0.05em',
          }}
        >
          Article · pietrodessotti.dev
        </p>

        {/* Title */}
        <h1
          style={{
            fontSize: '52px',
            fontWeight: 800,
            color: '#fafafa',
            margin: '0 0 32px',
            lineHeight: 1.15,
            maxWidth: '960px',
          }}
        >
          {title}
        </h1>

        {/* Tags */}
        {tags.length > 0 && (
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '32px' }}>
            {tags.map((tag) => (
              <span
                key={tag}
                style={{
                  backgroundColor: '#18181b',
                  border: '1px solid #27272a',
                  borderRadius: '8px',
                  padding: '6px 14px',
                  fontSize: '16px',
                  color: '#a1a1aa',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Meta row */}
        <p style={{ fontSize: '18px', color: '#52525b', margin: 0 }}>
          {[readingTime, date].filter(Boolean).join('  ·  ')}
        </p>
      </div>
    ),
    { ...size }
  )
}
