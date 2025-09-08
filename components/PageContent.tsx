import type { Page } from '@/types'

interface PageContentProps {
  page: Page
}

export default function PageContent({ page }: PageContentProps) {
  return (
    <>
      {/* Hero Section */}
      {page.metadata?.hero_image && (
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={`${page.metadata.hero_image.imgix_url}?w=1920&h=1080&fit=crop&auto=format,compress&overlay64=MDAwMDAwODA&blend=multiply`}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 cosmic-bg opacity-80"></div>
          </div>

          <div className="relative z-20 max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              {page.metadata?.title || page.title}
            </h1>
          </div>
        </section>
      )}

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {!page.metadata?.hero_image && (
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 text-center">
              {page.metadata?.title || page.title}
            </h1>
          )}

          {page.metadata?.content ? (
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: page.metadata.content }}
            />
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No content available for this page.</p>
            </div>
          )}

          {/* Contact Form for Contact Page */}
          {page.slug === 'contact' && (
            <div className="mt-16 max-w-2xl mx-auto">
              <div className="cosmic-bg rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">Get In Touch</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                      placeholder="Tell us more about your project or question..."
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-200 card-hover"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}