import Link from 'next/link'
import { getSiteSettings, getNavigationPages } from '@/lib/cosmic'

export default async function Header() {
  const [siteSettings, navigationPages] = await Promise.all([
    getSiteSettings(),
    getNavigationPages()
  ])

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            {siteSettings?.metadata?.logo ? (
              <img
                src={`${siteSettings.metadata.logo.imgix_url}?w=64&h=64&fit=crop&auto=format,compress`}
                alt={siteSettings?.metadata?.site_title || 'Deep AI OCR'}
                width="32"
                height="32"
                className="w-8 h-8 rounded-lg"
              />
            ) : (
              <div className="w-8 h-8 ocr-bg rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            )}
            <span className="text-xl font-bold text-gradient-ocr">
              {siteSettings?.metadata?.site_title || 'Deep AI OCR'}
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationPages.map((page) => (
              <Link
                key={page.id}
                href={page.slug === 'home' ? '/' : `/${page.slug}`}
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                {page.metadata?.title || page.title}
              </Link>
            ))}
            <Link
              href="/showcases"
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Showcases
            </Link>
            <button className="px-6 py-2 ocr-bg text-white rounded-lg font-medium hover:opacity-90 transition-opacity duration-200">
              Try Demo
            </button>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}