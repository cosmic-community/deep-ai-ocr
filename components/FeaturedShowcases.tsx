import Link from 'next/link'
import type { Showcase } from '@/types'

interface FeaturedShowcasesProps {
  showcases: Showcase[]
}

export default function FeaturedShowcases({ showcases }: FeaturedShowcasesProps) {
  if (!showcases || showcases.length === 0) {
    return null
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured <span className="text-gradient-ai">OCR</span> Demonstrations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See our AI-powered OCR technology in action through real-world applications and use cases
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcases.map((showcase) => (
            <Link 
              key={showcase.id} 
              href={`/showcases/${showcase.slug}`}
              className="group block"
            >
              <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 card-hover">
                {showcase.metadata?.preview_image && (
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={`${showcase.metadata.preview_image.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
                      alt={showcase.metadata?.title || showcase.title}
                      width="400"
                      height="225"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                <div className="p-6">
                  {showcase.metadata?.category && (
                    <span className="inline-block px-3 py-1 text-sm font-medium ocr-bg text-white rounded-full mb-3">
                      {showcase.metadata.category.value}
                    </span>
                  )}
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {showcase.metadata?.title || showcase.title}
                  </h3>
                  
                  {showcase.metadata?.description && (
                    <p className="text-gray-600 line-clamp-3">
                      {showcase.metadata.description}
                    </p>
                  )}

                  <div className="mt-4 flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                    View Demo
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/showcases"
            className="inline-flex items-center px-8 py-4 cosmic-bg text-white rounded-xl font-semibold hover:opacity-90 transition-opacity duration-200 card-hover"
          >
            View All Showcases
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}