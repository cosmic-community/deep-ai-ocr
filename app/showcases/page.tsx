import { getShowcases, getSiteSettings } from '@/lib/cosmic'
import Header from '@/components/Header'
import ShowcaseGrid from '@/components/ShowcaseGrid'
import Footer from '@/components/Footer'
import type { Metadata } from 'next/metadata'

export const metadata: Metadata = {
  title: 'OCR Technology Showcases - Deep AI OCR',
  description: 'Explore our advanced OCR technology demonstrations and real-world applications',
}

export default async function ShowcasesPage() {
  try {
    const [showcases, siteSettings] = await Promise.all([
      getShowcases(),
      getSiteSettings()
    ])

    return (
      <>
        <Header />
        <main className="min-h-screen">
          {/* Page Header */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 cosmic-bg">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                OCR Technology <span className="text-gradient-ocr">Showcases</span>
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Discover the power of our AI-driven OCR technology through real-world applications and demonstrations
              </p>
            </div>
          </section>

          {/* Showcases Grid */}
          {showcases.length > 0 ? (
            <ShowcaseGrid showcases={showcases} />
          ) : (
            <section className="py-16 px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">No showcases available</h2>
                <p className="text-gray-600">Check back soon for exciting OCR technology demonstrations!</p>
              </div>
            </section>
          )}
        </main>
        <Footer siteSettings={siteSettings} />
      </>
    )
  } catch (error) {
    console.error('Error loading showcases page:', error)
    return (
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-gray-900 mb-4">Error Loading Showcases</h1>
            <p className="text-gray-600">Please try again later.</p>
          </div>
        </main>
        <Footer siteSettings={null} />
      </>
    )
  }
}