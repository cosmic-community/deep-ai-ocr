import Link from 'next/link'
import type { Showcase } from '@/types'

interface ShowcaseGridProps {
  showcases: Showcase[]
}

export default function ShowcaseGrid({ showcases }: ShowcaseGridProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
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
                  <div className="flex items-center justify-between mb-3">
                    {showcase.metadata?.category && (
                      <span className="inline-block px-3 py-1 text-sm font-medium ocr-bg text-white rounded-full">
                        {showcase.metadata.category.value}
                      </span>
                    )}
                    
                    {showcase.metadata?.featured && (
                      <span className="inline-block px-3 py-1 text-sm font-medium ai-bg text-white rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {showcase.metadata?.title || showcase.title}
                  </h3>
                  
                  {showcase.metadata?.description && (
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {showcase.metadata.description}
                    </p>
                  )}

                  <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                    View Details
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}