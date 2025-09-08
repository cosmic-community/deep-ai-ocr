import type { Page } from '@/types'

interface HeroProps {
  page: Page
}

export default function Hero({ page }: HeroProps) {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image */}
      {page.metadata?.hero_image && (
        <div className="absolute inset-0 z-0">
          <img
            src={`${page.metadata.hero_image.imgix_url}?w=1920&h=1080&fit=crop&auto=format,compress&overlay64=MDAwMDAwODA&blend=multiply`}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 cosmic-bg opacity-80"></div>
        </div>
      )}

      {/* Background Pattern */}
      {!page.metadata?.hero_image && (
        <div className="absolute inset-0 cosmic-bg">
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>
        </div>
      )}

      {/* Floating Elements */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-white/20 rounded-full floating-animation"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-white/30 rounded-full floating-animation" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-20 w-4 h-4 bg-white/20 rounded-full floating-animation" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-white/30 rounded-full floating-animation" style={{animationDelay: '3s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          {page.metadata?.content ? (
            <div 
              className="text-white prose prose-lg prose-invert mx-auto"
              dangerouslySetInnerHTML={{ __html: page.metadata.content }}
            />
          ) : (
            <>
              <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
                Welcome to <span className="text-gradient-ocr">Deep AI OCR</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Transform any document, image, or handwritten text into editable digital content with our cutting-edge AI technology
              </p>
            </>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-200 card-hover">
              Start Free Trial
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 card-hover">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Feature Icons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-12 h-12 ai-bg rounded-xl flex items-center justify-center mx-auto mb-3 floating-animation">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <p className="text-white font-medium">Fast Processing</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 ocr-bg rounded-xl flex items-center justify-center mx-auto mb-3 floating-animation" style={{animationDelay: '1s'}}>
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-white font-medium">99.9% Accuracy</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 ai-bg rounded-xl flex items-center justify-center mx-auto mb-3 floating-animation" style={{animationDelay: '2s'}}>
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
              </svg>
            </div>
            <p className="text-white font-medium">50+ Languages</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 ocr-bg rounded-xl flex items-center justify-center mx-auto mb-3 floating-animation" style={{animationDelay: '3s'}}>
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <p className="text-white font-medium">Secure & Private</p>
          </div>
        </div>
      </div>
    </section>
  )
}