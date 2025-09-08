// app/[slug]/page.tsx
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getPageBySlug, getSiteSettings } from '@/lib/cosmic'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import PageContent from '@/components/PageContent'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const [page, siteSettings] = await Promise.all([
    getPageBySlug(slug),
    getSiteSettings()
  ])

  if (!page) {
    return {
      title: 'Page Not Found',
      description: 'The requested page could not be found.'
    }
  }

  return {
    title: `${page.metadata?.title || page.title} - ${siteSettings?.metadata?.site_title || 'Deep AI OCR'}`,
    description: page.metadata?.content?.replace(/<[^>]*>/g, '').substring(0, 160) || siteSettings?.metadata?.site_description,
    openGraph: {
      title: page.metadata?.title || page.title,
      description: page.metadata?.content?.replace(/<[^>]*>/g, '').substring(0, 160) || '',
      images: page.metadata?.hero_image ? [{
        url: `${page.metadata.hero_image.imgix_url}?w=1200&h=630&fit=crop&auto=format,compress`,
        width: 1200,
        height: 630,
        alt: page.metadata?.title || page.title
      }] : undefined
    }
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const [page, siteSettings] = await Promise.all([
    getPageBySlug(slug),
    getSiteSettings()
  ])

  if (!page) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero page={page} />
        <PageContent page={page} />
      </main>
      <Footer siteSettings={siteSettings} />
    </>
  )
}