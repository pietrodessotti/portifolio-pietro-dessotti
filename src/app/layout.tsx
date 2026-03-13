import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/layout/ThemeProvider'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { PageTransition } from '@/components/layout/PageTransition'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://pietrodessotti.dev'),
  title: {
    default: 'Pietro Dessotti — Senior Frontend Engineer',
    template: '%s | Pietro Dessotti',
  },
  description:
    'Senior Frontend Engineer with 5+ years at Zenvia building scalable B2B products. Technical reference in React, TypeScript, microfrontends, design systems and BFF architecture.',
  keywords: [
    'Senior Frontend Engineer',
    'React',
    'TypeScript',
    'Next.js',
    'Microfrontends',
    'Design Systems',
    'BFF Architecture',
    'NestJS',
    'Kafka'
  ],
  authors: [{ name: 'Pietro Henrique Mello Dessotti' }],
  creator: 'Pietro Henrique Mello Dessotti',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Pietro Dessotti — Senior Frontend Engineer',
    description:
      'Senior Frontend Engineer with 5+ years at Zenvia. Technical reference in React, TypeScript, microfrontends and design systems.',
    siteName: 'Pietro Dessotti',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pietro Dessotti — Senior Frontend Engineer',
    description:
      'Senior Frontend Engineer with 5+ years at Zenvia. Technical reference in React, TypeScript, microfrontends and design systems.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1"><PageTransition>{children}</PageTransition></main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
