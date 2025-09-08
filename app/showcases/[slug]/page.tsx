// app/showcases/[slug]/page.tsx
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getShowcaseBySlug, getSiteSettings } from '@/lib/cosmic'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ShowcaseDetail from '@/components/ShowcaseDetail'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const [showcase, siteSettings] = await Promise.all([
    getShowcaseBySlug(slug),
    getSiteSettings()
  ])

  if (!showcase) {
    return {
      title: 'Showcase Not Found',
      description: 'The requested showcase could not be found.'
    }
  }

  return {
    title: `${showcase.metadata?.title || showcase.title} - ${siteSettings?.metadata?.site_title || 'Deep AI OCR'}`,
    description: showcase.metadata?.description || siteSettings?.metadata?.site_description,
    openGraph: {
      title: showcase.metadata?.title || showcase.title,
      description: showcase.metadata?.description || '',
      images: showcase.metadata?.preview_image ? [{
        url: `${showcase.metadata.preview_image.imgix_url}?w=1200&h=630&fit=crop&auto=format,compress`,
        width: 1200,
        height: 630,
        alt: showcase.metadata?.title || showcase.title
      }] : undefined
    }
  }
}

export default async function ShowcasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const [showcase, siteSettings] = await Promise.all([
    getShowcaseBySlug(slug),
    getSiteSettings()
  ])

  if (!showcase) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="flex-1">
        <ShowcaseDetail showcase={showcase} />
      </main>
      <Footer siteSettings={siteSettings} />
    </>
  )
}