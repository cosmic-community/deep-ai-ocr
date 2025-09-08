import Link from 'next/link'
import type { Showcase } from '@/types'

interface ShowcaseDetailProps {
  showcase: Showcase
}

export default function ShowcaseDetail({ showcase }: ShowcaseDetailProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {showcase.metadata?.preview_image ? (
          <div className="absolute inset-0 z-0">
            <img
              src={`${showcase.metadata.preview_image.imgix_url}?w=1920&h=1080&fit=crop&auto=format,compress&overlay64=MDAwMDAwODA&blend=multiply`}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 cosmic-bg opacity-80"></div>
          </div>
        ) : (
          <div className="absolute inset-0 cosmic-bg"></div>
        )}

        <div className="relative z-20 max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <Link 
              href="/showcases"
              className="inline-flex items-center text-white hover:text-blue-200 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Showcases
            </Link>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            {showcase.metadata?.title || showcase.title}
          </h1>

          {showcase.metadata?.category && (
            <span className="inline-block px-4 py-2 bg-white/20 text-white rounded-full font-medium mb-6">
              {showcase.metadata.category.value}
            </span>
          )}
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {showcase.metadata?.description && (
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Overview</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {showcase.metadata.description}
              </p>
            </div>
          )}

          {/* Main Image */}
          {showcase.metadata?.preview_image && (
            <div className="mb-12">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={`${showcase.metadata.preview_image.imgix_url}?w=1200&h=675&fit=crop&auto=format,compress`}
                  alt={showcase.metadata?.title || showcase.title}
                  width="600"
                  height="338"
                  className="w-full h-auto"
                />
              </div>
            </div>
          )}

          {/* Key Features Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Key OCR Features Demonstrated</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl">
                <div className="w-12 h-12 ocr-bg rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">High Accuracy</h3>
                <p className="text-gray-600">Advanced neural networks ensure 99.9% text recognition accuracy</p>
              </div>

              <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
                <div className="w-12 h-12 ai-bg rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-time Processing</h3>
                <p className="text-gray-600">Instant text extraction with minimal processing time</p>
              </div>

              <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
                <div className="w-12 h-12 cosmic-bg rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Multi-Language Support</h3>
                <p className="text-gray-600">Support for 50+ languages with automatic detection</p>
              </div>

              <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl">
                <div className="w-12 h-12 ai-bg rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Format Recognition</h3>
                <p className="text-gray-600">Maintains document structure and formatting</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center cosmic-bg rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Try This Technology?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Experience the power of AI-driven OCR technology for your own documents and images
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-200 card-hover">
                Try Free Demo
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 card-hover">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}