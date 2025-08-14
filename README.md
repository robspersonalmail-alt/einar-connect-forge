# White‑Label Author Template

A minimal, production‑ready starter for white‑label author sites (React + Vite + Tailwind).

This template is recreated from the original EinarCore project and now integrated with Lovable for enhanced development and deployment.

## Features

- **🎨 Dynamic Branding System** - Per‑tenant JSON configuration with runtime CSS tokens
- **🔄 Multi-Tenant Routing** - Home / Books / About pages with tenant-specific content
- **🌍 i18n Support** - English/Swedish internationalization helper
- **📱 SEO Optimized** - Meta helper for SEO and Open Graph tags
- **🎯 Per‑Tenant Assets** - Brand assets under `public/brands/<tenant>/`
- **⚡ Modern Stack** - React 18, Vite, TypeScript, Tailwind CSS, shadcn/ui

## Quick Start

```bash
npm i
cp .env.example .env
# Optionally set VITE_DEFAULT_TENANT in .env
npm run dev
```

## Tenants & Branding

- **Default brand config**: `src/brands/default.json`
- **Example brand**: `src/brands/acme.json`
- **Domain mapping**: Configure in `src/lib/tenant.ts` (`hostToTenant`)
- **Brand assets**: Store per tenant under `public/brands/<tenant>/`

### Creating a New Brand

1. Create a new JSON file in `src/brands/` (e.g., `myauthor.json`)
2. Add brand configuration:
```json
{
  "id": "myauthor",
  "siteName": "My Author Site",
  "primaryColor": "#0ea5e9",
  "foreground": "#ffffff",
  "fontSans": "Inter, ui-sans-serif, system-ui",
  "logo": "/brands/myauthor/logo.svg",
  "ogImage": "/brands/myauthor/og.svg",
  "links": {
    "store": "https://store.example.com",
    "newsletter": "https://newsletter.example.com",
    "instagram": "https://instagram.com/myauthor",
    "x": "https://x.com/myauthor"
  }
}
```
3. Create brand assets in `public/brands/myauthor/`
4. Set `VITE_DEFAULT_TENANT=myauthor` in `.env` or map domain in `tenant.ts`

## Technologies Used

- **Frontend**: React 18, TypeScript, Vite
- **UI**: Tailwind CSS, shadcn/ui components
- **Routing**: React Router DOM
- **State Management**: React Query
- **Build Tool**: Vite with SWC
- **Development**: Lovable integration for rapid iteration

## Deployment & White‑Label

- **Lovable**: Click Share → Publish for instant deployment
- **Custom Domain**: Connect via Project > Settings > Domains
- **GitHub Integration**: Auto-sync with your repository
- **Self-Hosting**: Standard React build - deploy anywhere

## Development with Lovable

This project is optimized for Lovable's AI-powered development environment:

1. **Real-time Updates**: Changes appear instantly in preview
2. **AI Assistance**: Prompt for features, bug fixes, and improvements  
3. **Component Library**: Leverage shadcn/ui components
4. **Design System**: Consistent theming with CSS variables

## Project Structure

```
src/
├── brands/           # Tenant brand configurations
├── components/       # Reusable UI components
├── layouts/          # Page layouts
├── lib/              # Utilities (tenant, i18n, meta)
├── routes/           # Page components
├── types/            # TypeScript definitions
└── App.tsx          # Main application with tenant resolution

public/
└── brands/           # Per-tenant static assets
    ├── default/
    └── acme/
```

## Notes

- Replace placeholder assets in `/public/brands/*` with real logos and images
- Add analytics (GA4/Plausible) via environment variables
- Expand data models (books, series, events, posts) as needed
- Consider adding a CMS integration for dynamic content management

## Contributing

This template is designed to be easily customizable. Feel free to:
- Add new page routes and components
- Extend the branding system with additional properties
- Integrate with headless CMS or external APIs
- Add authentication and user management features
