# Deep AI OCR

![Deep AI OCR](https://imgix.cosmicjs.com/fc7477d0-8c7c-11f0-ab77-0917f6129119-photo-1633356122544-f134324a6cee-1757312879069.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A professional AI-powered OCR (Optical Character Recognition) website built with Next.js 15 and Cosmic CMS. This application showcases advanced OCR capabilities with stunning 3D animations and modern design principles, leveraging your existing content structure for seamless content management.

## Features

- **AI-Powered OCR Showcase**: Display OCR technology capabilities through interactive demonstrations
- **Dynamic Content Management**: Powered by Cosmic CMS with your existing content structure
- **3D Animation Integration**: Stunning visual effects and animations reflecting modern AI technology  
- **Responsive Design**: Mobile-optimized with smooth animations and transitions
- **Professional Service Pages**: About, Contact, and Home pages tailored for OCR services
- **Interactive Portfolio**: Showcase OCR projects through your existing showcase system
- **Modern UI/UX**: Clean, professional interface with gradient backgrounds and floating animations
- **SEO Optimized**: Built-in meta tags and structured data for better search visibility

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=68be76b6285c02bfe718e042&clone_repository=68be799d285c02bfe718e058)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a website in cosmic theme with 3D animations"

### Code Generation Prompt

> create the website with name "Deep Ai OCR", with below elements

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Cosmic CMS** - Headless content management
- **React** - Component-based UI library
- **Framer Motion** - Animation library for smooth interactions

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account and bucket

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   bun install
   ```

3. Set up environment variables:
   ```env
   COSMIC_BUCKET_SLUG=your-bucket-slug
   COSMIC_READ_KEY=your-read-key
   COSMIC_WRITE_KEY=your-write-key
   ```

4. Run the development server:
   ```bash
   bun dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Cosmic SDK Examples

### Fetching Site Settings
```typescript
const siteSettings = await cosmic.objects.findOne({
  type: 'site-settings',
  slug: 'site-configuration'
}).props(['id', 'title', 'metadata'])
```

### Getting All Pages
```typescript
const pages = await cosmic.objects.find({
  type: 'pages'
}).props(['id', 'title', 'slug', 'metadata'])
```

### Fetching Featured Showcases
```typescript
const showcases = await cosmic.objects.find({
  type: 'showcases',
  'metadata.featured': true
}).props(['id', 'title', 'slug', 'metadata'])
```

## Cosmic CMS Integration

This application integrates with your existing Cosmic content model:

- **Site Settings**: Global site configuration, branding, and contact information
- **Pages**: Dynamic page content (Home, About, Contact) with navigation control
- **3D Showcases**: Portfolio items adapted to demonstrate OCR capabilities

The content structure supports:
- Dynamic page routing based on slug
- Featured showcase highlighting
- Navigation menu generation from pages with `show_in_nav` enabled
- Responsive image optimization using imgix

## Deployment Options

### Vercel (Recommended)
1. Connect your repository to Vercel
2. Add environment variables in the Vercel dashboard
3. Deploy automatically on every push

### Netlify
1. Connect your repository to Netlify
2. Set build command: `bun run build`
3. Set publish directory: `.next`
4. Add environment variables in Netlify dashboard

### Manual Deployment
1. Build the application: `bun run build`
2. Upload the `.next` folder to your hosting provider
3. Ensure environment variables are configured

For production deployments, make sure to set the environment variables in your hosting platform's dashboard.

<!-- README_END -->