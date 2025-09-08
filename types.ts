// Base Cosmic object interface
interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Site Settings interface
interface SiteSettings extends CosmicObject {
  type: 'site-settings';
  metadata: {
    site_title?: string;
    site_description?: string;
    logo?: {
      url: string;
      imgix_url: string;
    };
    contact_email?: string;
    social_links?: {
      twitter?: string;
      instagram?: string;
      linkedin?: string;
    };
  };
}

// Page interface
interface Page extends CosmicObject {
  type: 'pages';
  metadata: {
    title?: string;
    content?: string;
    hero_image?: {
      url: string;
      imgix_url: string;
    };
    show_in_nav?: boolean;
  };
}

// Showcase interface
interface Showcase extends CosmicObject {
  type: 'showcases';
  metadata: {
    title?: string;
    description?: string;
    preview_image?: {
      url: string;
      imgix_url: string;
    };
    animation_file?: {
      url: string;
    };
    category?: {
      key: string;
      value: string;
    };
    featured?: boolean;
  };
}

// Category type literal
type ShowcaseCategory = 'product' | 'character' | 'environment' | 'motion';

// API response types
interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit?: number;
  skip?: number;
}

// Type guards
function isSiteSettings(obj: CosmicObject): obj is SiteSettings {
  return obj.type === 'site-settings';
}

function isPage(obj: CosmicObject): obj is Page {
  return obj.type === 'pages';
}

function isShowcase(obj: CosmicObject): obj is Showcase {
  return obj.type === 'showcases';
}

// Utility types
type OptionalMetadata<T> = Partial<T['metadata']>;
type CreatePageData = Omit<Page, 'id' | 'created_at' | 'modified_at'>;

// Component prop types
interface ShowcaseCardProps {
  showcase: Showcase;
  featured?: boolean;
  className?: string;
}

interface PageHeroProps {
  page: Page;
  className?: string;
}

interface NavigationProps {
  pages: Page[];
  currentPage?: string;
}

export type {
  CosmicObject,
  SiteSettings,
  Page,
  Showcase,
  ShowcaseCategory,
  CosmicResponse,
  OptionalMetadata,
  CreatePageData,
  ShowcaseCardProps,
  PageHeroProps,
  NavigationProps
};

export {
  isSiteSettings,
  isPage,
  isShowcase
};