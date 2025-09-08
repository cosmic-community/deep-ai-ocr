import { createBucketClient } from '@cosmicjs/sdk'
import type { SiteSettings, Page, Showcase, CosmicResponse } from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

// Helper function for error handling
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

// Get site settings
export async function getSiteSettings(): Promise<SiteSettings | null> {
  try {
    const response = await cosmic.objects.findOne({
      type: 'site-settings',
      slug: 'site-configuration'
    }).props(['id', 'title', 'slug', 'metadata']).depth(1);
    
    const settings = response.object as SiteSettings;
    
    if (!settings || !settings.metadata) {
      return null;
    }
    
    return settings;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch site settings');
  }
}

// Get all pages
export async function getPages(): Promise<Page[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'pages' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as Page[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch pages');
  }
}

// Get navigation pages
export async function getNavigationPages(): Promise<Page[]> {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'pages',
        'metadata.show_in_nav': true
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as Page[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch navigation pages');
  }
}

// Get page by slug
export async function getPageBySlug(slug: string): Promise<Page | null> {
  try {
    const response = await cosmic.objects.findOne({
      type: 'pages',
      slug
    }).props(['id', 'title', 'slug', 'metadata']).depth(1);
    
    const page = response.object as Page;
    
    if (!page || !page.metadata) {
      return null;
    }
    
    return page;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error(`Failed to fetch page: ${slug}`);
  }
}

// Get all showcases
export async function getShowcases(): Promise<Showcase[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'showcases' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as Showcase[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch showcases');
  }
}

// Get featured showcases
export async function getFeaturedShowcases(): Promise<Showcase[]> {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'showcases',
        'metadata.featured': true
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as Showcase[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch featured showcases');
  }
}

// Get showcase by slug
export async function getShowcaseBySlug(slug: string): Promise<Showcase | null> {
  try {
    const response = await cosmic.objects.findOne({
      type: 'showcases',
      slug
    }).props(['id', 'title', 'slug', 'metadata']).depth(1);
    
    const showcase = response.object as Showcase;
    
    if (!showcase || !showcase.metadata) {
      return null;
    }
    
    return showcase;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error(`Failed to fetch showcase: ${slug}`);
  }
}

// Get showcases by category
export async function getShowcasesByCategory(category: string): Promise<Showcase[]> {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'showcases',
        'metadata.category.key': category
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as Showcase[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error(`Failed to fetch showcases for category: ${category}`);
  }
}