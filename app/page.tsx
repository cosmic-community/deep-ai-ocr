import { getPageBySlug, getFeaturedShowcases, getSiteSettings } from '@/lib/cosmic'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import FeaturedShowcases from '@/components/FeaturedShowcases'
import Footer from '@/components/Footer'
import { notFound } from 'next/navigation'

export default async function Home() {
  try {
    const [homePage, featuredShowcases, siteSettings] = await Promise.all([
      getPageBySlug('home'),
      getFeaturedShowcases(),
      getSiteSettings()
    ])

    if (!homePage) {
      notFound()
    }

    return (
      <>
        <Header />
        <main className="min-h-screen">
          <Hero page={homePage} />
          
          {/* AI OCR Features Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Advanced <span className="text-gradient-ai">AI-Powered</span> OCR Technology
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Transform any document, image, or handwritten text into editable digital content with our cutting-edge AI technology
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 card-hover">
                  <div className="w-16 h-16 ai-bg rounded-2xl flex items-center justify-center mx-auto mb-6 floating-animation">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Document Processing</h3>
                  <p className="text-gray-600">Extract text from PDFs, images, and scanned documents with 99.9% accuracy</p>
                </div>

                <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 card-hover">
                  <div className="w-16 h-16 cosmic-bg rounded-2xl flex items-center justify-center mx-auto mb-6 floating-animation" style={{animationDelay: '2s'}}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-time Processing</h3>
                  <p className="text-gray-600">Lightning-fast text recognition powered by advanced neural networks</p>
                </div>

                <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 card-hover">
                  <div className="w-16 h-16 ocr-bg rounded-2xl flex items-center justify-center mx-auto mb-6 floating-animation" style={{animationDelay: '4s'}}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Multi-Language Support</h3>
                  <p className="text-gray-600">Support for 50+ languages with automatic language detection</p>
                </div>
              </div>
            </div>
          </section>

          {featuredShowcases.length > 0 && (
            <FeaturedShowcases showcases={featuredShowcases} />
          )}

          {/* CTA Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 cosmic-bg">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Documents?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join thousands of users who trust Deep AI OCR for their text recognition needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-200 card-hover">
                  Try Free Demo
                </button>
                <button className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 card-hover">
                  View Pricing
                </button>
              </div>
            </div>
          </section>
        </main>
        <Footer siteSettings={siteSettings} />
      </>
    )
  } catch (error) {
    console.error('Error loading home page:', error)
    notFound()
  }
}