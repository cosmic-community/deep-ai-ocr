// app/showcases/[slug]/page.tsx
import { getShowcaseBySlug, getSiteSettings } from '@/lib/cosmic'
import Header from '@/components/Header'
import ShowcaseDetail from '@/components/ShowcaseDetail'
import Footer from '@/components/Footer'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next/metadata'

interface ShowcasePageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: ShowcasePageProps): Promise<Metadata> {
  const { slug } = await params
  const showcase = await getShowcaseBySlug(slug)
  
  if (!showcase) {
    return {
      title: 'Showcase Not Found'
    }
  }

  return {
    title: `${showcase.metadata?.title || showcase.title} - Deep AI OCR`,
    description: showcase.metadata?.description || 'Advanced OCR technology demonstration',
  }
}

export default async function ShowcasePage({ params }: ShowcasePageProps) {
  const { slug } = await params
  
  try {
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
        <main className="min-h-screen">
          <ShowcaseDetail showcase={showcase} />
        </main>
        <Footer siteSettings={siteSettings} />
      </>
    )
  } catch (error) {
    console.error(`Error loading showcase ${slug}:`, error)
    notFound()
  }
}