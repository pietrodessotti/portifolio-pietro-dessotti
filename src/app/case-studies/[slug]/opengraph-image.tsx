import { ImageResponse } from 'next/og'
import { getCaseStudyBySlug } from '@/lib/mdx'

export const runtime = 'nodejs'
export const alt = 'Case Study OG Image'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

interface Props {
  params: Promise<{ slug: string }>
}

export default async function CaseStudyOGImage({ params }: Props) {
  const { slug } = await params
  const cs = await getCaseStudyBySlug(slug)

  const title = cs?.title ?? 'Case Study'
  const role = cs?.role ?? ''
  const company = cs?.company ?? ''
  const duration = cs?.duration ?? ''
  const technologies = cs?.technologies?.slice(0, 4) ?? []
  const firstImpact = cs?.impact?.[0] ?? ''

  const meta = [role, company, duration].filter(Boolean).join('  ·  ')

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
          Case Study · pietrodessotti.dev
        </p>

        {/* Title */}
        <h1
          style={{
            fontSize: '48px',
            fontWeight: 800,
            color: '#fafafa',
            margin: '0 0 16px',
            lineHeight: 1.15,
            maxWidth: '960px',
          }}
        >
          {title}
        </h1>

        {/* Role / company / duration */}
        {meta && (
          <p style={{ fontSize: '20px', color: '#71717a', margin: '0 0 24px' }}>{meta}</p>
        )}

        {/* First impact bullet */}
        {firstImpact && (
          <p
            style={{
              fontSize: '20px',
              color: '#3291ff',
              fontStyle: 'italic',
              margin: '0 0 28px',
              maxWidth: '880px',
            }}
          >
            &ldquo;{firstImpact}&rdquo;
          </p>
        )}

        {/* Tech pills */}
        {technologies.length > 0 && (
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {technologies.map((tech) => (
              <span
                key={tech}
                style={{
                  backgroundColor: '#18181b',
                  border: '1px solid #27272a',
                  borderRadius: '8px',
                  padding: '6px 14px',
                  fontSize: '16px',
                  color: '#a1a1aa',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    ),
    { ...size }
  )
}
