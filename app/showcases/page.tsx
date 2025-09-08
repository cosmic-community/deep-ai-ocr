import type { Metadata } from 'next'
import { getShowcases, getSiteSettings } from '@/lib/cosmic'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ShowcaseGrid from '@/components/ShowcaseGrid'

export async function generateMetadata(): Promise<Metadata> {
  const siteSettings = await getSiteSettings()
  
  return {
    title: `Showcases - ${siteSettings?.metadata?.site_title || 'Deep AI OCR'}`,
    description: 'Explore our collection of AI-powered OCR showcases and demonstrations',
    openGraph: {
      title: 'Showcases',
      description: 'Explore our collection of AI-powered OCR showcases and demonstrations'
    }
  }
}

export default async function ShowcasesPage() {
  const [showcases, siteSettings] = await Promise.all([
    getShowcases(),
    getSiteSettings()
  ])

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="cosmic-bg py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              OCR <span className="text-gradient-ocr">Showcases</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Explore our collection of AI-powered OCR demonstrations and real-world applications
            </p>
          </div>
        </section>

        {/* Showcases Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <ShowcaseGrid showcases={showcases} />
          </div>
        </section>
      </main>
      <Footer siteSettings={siteSettings} />
    </>
  )
}