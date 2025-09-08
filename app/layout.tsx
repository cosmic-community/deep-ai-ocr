import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { getSiteSettings } from '@/lib/cosmic'
import CosmicBadge from '@/components/CosmicBadge'

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata(): Promise<Metadata> {
  const siteSettings = await getSiteSettings()
  
  return {
    title: siteSettings?.metadata?.site_title || 'Deep AI OCR',
    description: siteSettings?.metadata?.site_description || 'Advanced AI-powered OCR solutions with cutting-edge technology',
    keywords: 'AI, OCR, Optical Character Recognition, Machine Learning, Text Recognition',
    authors: [{ name: 'Deep AI OCR Team' }],
    creator: 'Deep AI OCR',
    publisher: 'Deep AI OCR',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://deepaiocr.com'),
    alternates: {
      canonical: '/',
    },
    openGraph: {
      title: siteSettings?.metadata?.site_title || 'Deep AI OCR',
      description: siteSettings?.metadata?.site_description || 'Advanced AI-powered OCR solutions',
      type: 'website',
      locale: 'en_US',
      url: 'https://deepaiocr.com',
      siteName: 'Deep AI OCR',
    },
    twitter: {
      card: 'summary_large_image',
      title: siteSettings?.metadata?.site_title || 'Deep AI OCR',
      description: siteSettings?.metadata?.site_description || 'Advanced AI-powered OCR solutions',
      creator: '@deepaiocr',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
    },
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string

  return (
    <html lang="en">
      <head>
        <script src="/dashboard-console-capture.js" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
          {children}
        </div>
        <CosmicBadge bucketSlug={bucketSlug} />
      </body>
    </html>
  )
}