import Link from 'next/link'
import type { SiteSettings } from '@/types'

interface FooterProps {
  siteSettings: SiteSettings | null
}

export default function Footer({ siteSettings }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
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
              <span className="text-xl font-bold text-white">
                {siteSettings?.metadata?.site_title || 'Deep AI OCR'}
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              {siteSettings?.metadata?.site_description || 
                'Advanced AI-powered OCR solutions that transform documents into editable digital content with cutting-edge technology.'
              }
            </p>
            
            {/* Social Links */}
            {siteSettings?.metadata?.social_links && (
              <div className="flex space-x-4">
                {siteSettings.metadata.social_links.twitter && (
                  <a 
                    href={siteSettings.metadata.social_links.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                )}
                
                {siteSettings.metadata.social_links.instagram && (
                  <a 
                    href={siteSettings.metadata.social_links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12.017 0C8.396 0 7.929.013 7.794.048 2.773.32.32 2.773.048 7.794.013 7.929 0 8.396 0 12.017c0 3.621.013 4.088.048 4.223.272 5.021 2.725 7.474 7.746 7.746.135.035.602.048 4.223.048 3.621 0 4.088-.013 4.223-.048 5.021-.272 7.474-2.725 7.746-7.746.035-.135.048-.602.048-4.223 0-3.621-.013-4.088-.048-4.223C23.68 2.773 21.227.32 16.206.048 16.071.013 15.604 0 12.017 0zm0 1.802c3.516 0 3.929.013 5.31.048 1.281.058 1.976.271 2.44.447.613.238 1.051.523 1.51.982.459.459.744.897.982 1.51.176.464.389 1.159.447 2.44.035 1.381.048 1.794.048 5.31 0 3.516-.013 3.929-.048 5.31-.058 1.281-.271 1.976-.447 2.44-.238.613-.523 1.051-.982 1.51a4.055 4.055 0 01-1.51.982c-.464.176-1.159.389-2.44.447-1.381.035-1.794.048-5.31.048-3.516 0-3.929-.013-5.31-.048-1.281-.058-1.976-.271-2.44-.447a4.055 4.055 0 01-1.51-.982 4.055 4.055 0 01-.982-1.51c-.176-.464-.389-1.159-.447-2.44-.035-1.381-.048-1.794-.048-5.31 0-3.516.013-3.929.048-5.31.058-1.281.271-1.976.447-2.44.238-.613.523-1.051.982-1.51a4.055 4.055 0 011.51-.982c.464-.176 1.159-.389 2.44-.447 1.381-.035 1.794-.048 5.31-.048z" clipRule="evenodd" />
                      <path fillRule="evenodd" d="M12.017 15.33a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm0-8.468a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm6.532-1.194a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" clipRule="evenodd" />
                    </svg>
                  </a>
                )}
                
                {siteSettings.metadata.social_links.linkedin && (
                  <a 
                    href={siteSettings.metadata.social_links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" clipRule="evenodd" />
                    </svg>
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><Link href="/showcases" className="hover:text-white transition-colors">OCR API</Link></li>
              <li><Link href="/showcases" className="hover:text-white transition-colors">Batch Processing</Link></li>
              <li><Link href="/showcases" className="hover:text-white transition-colors">Real-time OCR</Link></li>
              <li><Link href="/showcases" className="hover:text-white transition-colors">Cloud Solutions</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/showcases" className="hover:text-white transition-colors">Showcases</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Deep AI OCR. All rights reserved.
          </p>
          
          {siteSettings?.metadata?.contact_email && (
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              Contact: <a href={`mailto:${siteSettings.metadata.contact_email}`} className="hover:text-white transition-colors">
                {siteSettings.metadata.contact_email}
              </a>
            </p>
          )}
        </div>
      </div>
    </footer>
  )
}