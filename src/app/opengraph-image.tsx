import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Pietro Dessotti — Senior Frontend Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const tags = ['React', 'TypeScript', 'Microfrontends', 'Design Systems']

export default function OGImage() {
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
            fontSize: '20px',
            color: '#3291ff',
            fontFamily: 'monospace',
            margin: '0 0 24px',
            letterSpacing: '0.05em',
          }}
        >
          pietrodessotti.dev
        </p>

        {/* Name */}
        <h1
          style={{
            fontSize: '64px',
            fontWeight: 800,
            color: '#fafafa',
            margin: '0 0 16px',
            lineHeight: 1.1,
          }}
        >
          Pietro Dessotti
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: '28px',
            color: '#71717a',
            margin: '0 0 40px',
          }}
        >
          Senior Frontend Engineer at Zenvia
        </p>

        {/* Tech pills */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {tags.map((tag) => (
            <span
              key={tag}
              style={{
                backgroundColor: '#18181b',
                border: '1px solid #27272a',
                borderRadius: '8px',
                padding: '8px 16px',
                fontSize: '18px',
                color: '#a1a1aa',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    ),
    { ...size }
  )
}
