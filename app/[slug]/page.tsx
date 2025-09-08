// app/[slug]/page.tsx
import { getPageBySlug, getSiteSettings } from '@/lib/cosmic'
import Header from '@/components/Header'
import PageContent from '@/components/PageContent'
import Footer from '@/components/Footer'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next/metadata'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const page = await getPageBySlug(slug)
  
  if (!page) {
    return {
      title: 'Page Not Found'
    }
  }

  return {
    title: `${page.metadata?.title || page.title} - Deep AI OCR`,
    description: page.metadata?.content?.replace(/<[^>]*>/g, '').slice(0, 160) || 'Deep AI OCR - Advanced AI-powered OCR solutions',
  }
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params
  
  try {
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
        <main className="min-h-screen">
          <PageContent page={page} />
        </main>
        <Footer siteSettings={siteSettings} />
      </>
    )
  } catch (error) {
    console.error(`Error loading page ${slug}:`, error)
    notFound()
  }
}