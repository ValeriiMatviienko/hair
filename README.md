# Hair by Hanna

Multilingual marketing site for the Hair by Hanna trichology and hair-care business. The application is a single Next.js App Router page with Polish, English, and Ukrainian content, service pricing, a gallery, FAQ, social links, Instagram embeds, and a Google Maps embed.

## Requirements

- Node.js 20.9 or newer
- npm

## Local development

```bash
npm install
copy .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Environment

Copy `.env.example` to `.env.local` and configure:

- `BASE_URL`: absolute public site origin used by metadata, robots, and the sitemap. It defaults to `https://hairbyhanna.eu`.
- `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID`: optional GA4 measurement ID. Analytics is disabled when it is unset and loads only after the visitor allows analytics cookies.

Do not commit `.env` or `.env.local` files.

## Commands

```bash
npm run dev        # development server
npm run typecheck  # TypeScript validation
npm run lint       # ESLint 9 / Next.js rules
npm run build      # production build
npm run start      # serve the production build
```

There is currently no automated unit or end-to-end test suite. Before merging changes, run typecheck, lint, and a production build, then manually verify desktop/mobile navigation, all locales, the gallery, the cookie banner, Maps, and Instagram embeds.

## Architecture

- `app/layout.tsx`: server root layout, metadata, request locale, and global providers.
- `app/page.tsx`: server-rendered page composition.
- `app/components/`: page sections and interactive controls.
- `app/context/`: navigation, locale, and analytics-consent state.
- `i18n/`: locale definitions plus request-scoped message loading.
- `messages/`: synchronized `pl`, `en`, and `uk` translation files.
- `components/ui/`: shared Radix/shadcn-style primitives.
- `lib/site-config.ts`: public business URLs, handles, address, and prices.
- `public/images/`: optimized local profile and gallery images.

The locale is stored in both a first-party cookie and `localStorage`. The cookie lets the server render the selected language immediately; the client storage entry preserves compatibility with older visits. The root URL is canonical, and the application does not expose locale-specific routes.

The Google Maps iframe and Instagram embeds load directly. Analytics loads when `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID` is configured and the visitor allows analytics cookies. Direct external links remain available alongside the embeds.

## Data and backend

The site has no API routes, database, authentication, contact-form backend, or remote first-party data source. Business content is held in translation JSON and colocated TypeScript configuration.

## License

See [LICENSE](LICENSE).
