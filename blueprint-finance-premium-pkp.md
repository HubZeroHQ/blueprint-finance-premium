# Identity

| Field | Value |
| --- | --- |
| Blueprint name | HubZero Finance + Premium Blueprint |
| Reference brand | Aurevia Capital |
| Repository | `blueprint-finance-premium` |
| Repository URL | `https://github.com/HubZeroHQ/blueprint-finance-premium.git` |
| Version | `1.0.0` |
| Status | Complete canonical reference implementation |
| Architecture | Finance |
| Design language | Premium |
| Project type | Reusable HubZero Blueprint built from Blueprint Base |
| Primary stack | Next.js 16 App Router, React 19, TypeScript 5, Tailwind CSS 4 |
| License | MIT |

## Purpose

This blueprint is the canonical HubZero reference for combining the Finance information architecture with the Premium design language. It is a production-oriented inheritance point for future financial advisory, private wealth, investment management, family office, retirement planning, and institutional advisory projects.

The implemented company, Aurevia Capital, is fictional. The brand, people, office, contact details, services, testimonials, articles, and disclosures exist to make the reference implementation internally complete without copying or implying affiliation with a real financial institution.

The project is not a generic page template and is not a working financial product. Its purpose is to encode a trustworthy finance-specific information hierarchy, a restrained premium visual system, reusable implementation patterns, and the technical infrastructure expected of a modern public financial-services website.

# Executive Summary

The blueprint demonstrates how to build a high-trust financial institution website without relying on simulated product functionality, unverifiable performance claims, decorative financial dashboards, or excessive client-side behavior.

It represents a fictional independent advisory firm serving private clients, founders, families, foundations, endowments, and other mission-led institutions. The public experience moves from firm positioning and trust formation into service exploration, leadership credibility, educational content, practical resources, frequently asked questions, contact paths, and legal disclosures.

The implementation solves several recurring engineering problems:

- It converts a finance architecture into a coherent multi-page App Router application rather than a single campaign page.
- It keeps business identity, navigation, services, articles, leadership, testimonials, and FAQs centralized and replaceable.
- It statically generates detail pages from typed content while retaining route-level metadata and structured data.
- It establishes a reusable premium visual language with explicit design tokens, layout primitives, responsive composition rules, and reduced-motion behavior.
- It minimizes client-side JavaScript by keeping most pages and content as React Server Components.
- It provides complete public-site SEO infrastructure, including canonical URLs, Open Graph and Twitter metadata, robots, sitemap, manifest, and JSON-LD.
- It treats fictional-content disclosure as an architectural concern, not a footer-only disclaimer.
- It demonstrates accessible navigation, semantic document structure, visible focus behavior, skip navigation, keyboard-operable mobile navigation, native disclosure controls, and accessible lifecycle states.
- It keeps brand imagery local and optimized, avoiding runtime dependencies on third-party image hosts.

The resulting project is appropriate as a foundation for a premium financial institution's public website. It is not an account portal, financial-planning engine, investment platform, CRM, CMS, or regulated recordkeeping system.

# Technical Overview

## Application architecture

The application uses the Next.js App Router. The root layout owns global metadata, global CSS, the skip link, the application provider boundary, persistent header and footer, and site-wide organization schema.

Most route modules are React Server Components. Client components are isolated to behavior that requires browser state:

- `Header` uses `usePathname` and local state for active navigation and the mobile menu.
- `Reveal` uses viewport observation and reduced-motion state.
- `error.tsx` uses the App Router error reset contract and logs the captured error.
- `useInView` and `useReducedMotion` contain browser API integration.

This boundary keeps article, service, legal, leadership, resource, and homepage rendering server-first and avoids turning the site shell into a client-rendered application.

## Routing

The public route hierarchy is:

```text
/
/about
/leadership
/services
/services/wealth-management
/services/investment-advisory
/services/retirement-planning
/services/family-office-services
/services/institutional-advisory
/insights
/insights/staying-invested
/insights/planning-liquidity
/insights/family-investment-policy
/resources
/faqs
/contact
/privacy
/terms
```

The application also exposes App Router infrastructure routes:

```text
/_not-found
/manifest.webmanifest
/robots.txt
/sitemap.xml
```

The production build generates 24 route outputs when the public routes, dynamic static parameters, lifecycle page, and metadata endpoints are counted together.

The service and insight detail routes use dynamic segments with `generateStaticParams`. All known detail pages are prerendered during the production build. Unknown slugs call `notFound()`.

## Rendering model

The blueprint is optimized for static generation:

- Static routes render at build time.
- Service and insight detail routes are statically expanded from local content arrays.
- Metadata is generated at build time from the same content records used by the page.
- No route depends on a request-time database, session, CMS, or remote API.
- No content is fetched in the browser.

The architecture remains compatible with later SSR or CMS integration, but version 1.0.0 intentionally uses deterministic local content so it can operate as a self-contained blueprint.

## Data flow

Business data follows a compile-time flow:

```text
src/config/site.ts
  -> root metadata
  -> footer and contact surfaces
  -> manifest and JSON-LD

src/config/navigation.ts
  -> desktop navigation
  -> mobile navigation
  -> footer navigation

src/content/content.ts
  -> index pages
  -> static route generation
  -> detail pages
  -> related-content links
  -> route metadata
  -> sitemap entries
  -> FAQ and article schema
```

`src/content/content.ts` defines explicit `Service` and `Insight` interfaces. Services contain identity, audience, image, capabilities, process stages, and a related insight slug. Insights contain editorial metadata, a lead paragraph, and structured article sections.

Lookup helpers return services and insights by slug. Detail routes validate the lookup and invoke `notFound()` when a slug does not exist.

There is no runtime content store. Updating content requires changing the local TypeScript records and rebuilding the application.

## Component organization

The component structure separates infrastructure from blueprint-specific composition:

```text
src/components/brand/    Aurevia mark and wordmark
src/components/layout/   Header, footer, page, section, and container primitives
src/components/shared/   Reusable CTA, intro, link, reveal, JSON-LD, and skip-link patterns
src/app/                 Route-specific compositions and lifecycle states
```

Routes compose shared primitives directly. Finance-specific content structures are kept in the route modules unless the same structure is reused across multiple routes. This avoids creating abstraction layers for one-off page sections.

## Styling

The styling system combines Tailwind CSS infrastructure with a custom global CSS design language:

- Tailwind utilities are used by low-level layout primitives and accessibility helpers.
- `src/styles/tokens.css` defines color, radius, container, duration, easing, and z-index tokens.
- `src/app/globals.css` defines the Aurevia-specific component language and responsive compositions.
- `cn`, backed by `clsx` and `tailwind-merge`, safely composes primitive utility classes.
- No component-scoped CSS modules or CSS-in-JS runtime are used.
- No third-party component library controls the visual language.

Special lifecycle selectors are explicitly included in Tailwind's source set with an inline source declaration. This prevents classes used only by App Router lifecycle files from being omitted during CSS processing.

## Accessibility

Accessibility is built into the site shell and component contracts:

- One semantic `main` landmark per route.
- A skip link targets `#main-content`.
- Main landmarks use `tabIndex={-1}` so skip navigation can move focus reliably.
- Header and footer use semantic landmarks and labeled navigation.
- Active navigation uses `aria-current="page"` and supports nested routes.
- Mobile navigation exposes `aria-expanded`, `aria-controls`, an accessible open/close label, Escape-key dismissal, and closes after navigation.
- Focus-visible styles are global and high contrast.
- FAQ accordions use native `details` and `summary`.
- Decorative brand geometry and arrows are hidden from assistive technology.
- Images use contextual alternative text.
- Loading content uses `role="status"` and `aria-live="polite"`.
- Error content uses `role="alert"`.
- The 404 page is marked non-indexable while remaining followable.
- Contact behavior clearly states that email links open the local email application and do not submit data to the site.

The mobile menu is a compact navigation disclosure, not a modal dialog. It therefore does not implement a focus trap or body scroll lock.

## Animation philosophy

Motion is intentionally subordinate to content:

- Reveal behavior uses opacity and a small vertical transform only.
- Standard reveal duration is 560 ms with a non-bouncy ease-out curve.
- Header disclosure motion uses opacity, visibility, and a short vertical transform.
- Image hover scaling is approximately 1.012 and is restricted to devices with hover capability and a fine pointer.
- Button movement is limited to a one-pixel lift.
- No looping, parallax, scroll-jacking, spring, bounce, or decorative timeline animation is present.

`Reveal` exposes `data-reveal` and `data-state` rather than embedding visual timing into JavaScript. The hook determines state; CSS owns the visual language.

Above-the-fold hero and page-introduction selectors remain visible during the initial hidden state. This prevents a blank first render while hydration and intersection observation start.

Reduced-motion support exists in both JavaScript and CSS:

- `useReducedMotion` uses `useSyncExternalStore` with an SSR snapshot.
- Reduced-motion users are treated as already revealed.
- A CSS media query collapses animation and transition durations and removes hidden reveal transforms.
- Reduced-transparency preferences remove header backdrop filtering.

## Responsive strategy

The application uses content-led desktop composition with explicit tablet and mobile adaptations:

- Maximum page width is `82rem`.
- Primary responsive thresholds are 1023 px and 767 px.
- Desktop compositions use asymmetric grids, editorial image-to-copy ratios, and deliberate empty space.
- Tablet layouts simplify navigation and rebalance grid ratios.
- Mobile layouts become single-column, reorder media where necessary, remove redundant borders, and convert multi-column CTA and footer structures into vertical flows.
- Heading sizes use `clamp()` to scale fluidly.
- Images use `next/image`, intrinsic dimensions, responsive `sizes`, and aspect-ratio constraints.
- Priority loading is reserved for route hero images and lead editorial imagery.
- The layout prevents horizontal overflow at tested desktop and 390 px mobile widths.

# Design System

## Typography

The primary type stack is:

```css
"Avenir Next", Avenir, "Helvetica Neue", Helvetica, Arial, sans-serif
```

No web font is downloaded. The typography depends on a refined system grotesk stack to avoid blocking font requests and reduce layout shift.

The hierarchy uses:

- Large, tightly tracked display headings with fluid `clamp()` sizing.
- Sentence-case headings rather than ubiquitous uppercase display text.
- Small uppercase eyebrow labels with increased tracking for section context.
- Comfortable long-form line height and a prose container for articles and legal pages.
- Moderate body contrast using a dedicated muted color rather than opacity on the whole element.
- Limited font-weight variation to maintain restraint.

Typography is the primary decorative system. The interface avoids ornamental icons, excessive badges, or display-serif imitation.

## Color system

The palette is a cool mineral system:

| Token | Value | Role |
| --- | --- | --- |
| `--color-canvas` | `#f3f5f2` | Primary page background |
| `--color-surface` | `#fafbf9` | Elevated navigation and light surfaces |
| `--color-ink` | `#17201d` | Primary text |
| `--color-muted` | `#5d6763` | Secondary text |
| `--color-forest` | `#173b32` | Primary brand and action color |
| `--color-forest-deep` | `#0e2a24` | Dark sections and contact surface |
| `--color-accent` | `#5e8678` | Restrained emphasis |
| `--color-line` | `#d8ded9` | Standard dividers |
| `--color-line-strong` | `#bac5be` | Strong structural dividers |
| `--color-soft` | `#e8eeea` | Quiet alternate section background |

The palette avoids pure black, pure white, bright financial blue, metallic gold gradients, and saturated status colors. Trust is communicated through calm contrast and consistency rather than conventional banking clichés.

## Spacing and rhythm

The layout uses generous vertical section padding and a limited family of recurring gaps. Section rhythm is primarily controlled with fluid values rather than many one-off breakpoints.

Key principles:

- Large separation between page-level ideas.
- Tight spacing within related heading and body groups.
- Borders used to articulate lists and sequences without introducing card containers.
- Editorial image scale used as a hierarchy tool.
- Mobile spacing is reduced selectively, not uniformly compressed.

## Layout language

The blueprint deliberately avoids a grid of interchangeable cards. Primary patterns include:

- Split hero compositions.
- Asymmetric service and insight features.
- Alternating image and copy rows.
- Bordered value and capability matrices.
- Editorial article layouts.
- Full-width tonal sections.
- A dark, structured conversion section and footer.

The floating header uses a light surface, fine border, moderate corner radius, and soft green-tinted shadow. Corner radii are restrained:

```text
small: 0.5rem
medium: 0.75rem
large: 0.875rem
```

## Component language

Components favor structural clarity:

- Buttons are solid, compact, and text-led.
- Arrow links communicate secondary navigation with minimal iconography.
- Service capabilities use bordered cells instead of cards.
- Process steps use ordered semantic markup and dividers.
- Testimonials use large quotations without avatar decorations or ratings.
- FAQs rely on native disclosure controls.
- Contact methods are presented as semantic links and addresses.
- The footer carries the strongest tonal shift and consolidates navigation, contact data, legal links, attribution, and fictional disclosure.

## Interaction patterns

Primary interactions are:

- Standard Next.js route links.
- Mail and telephone protocol links.
- Native FAQ disclosure controls.
- A responsive navigation disclosure.
- Subtle button and image hover feedback.
- Viewport reveal on selected section content.

There are no custom pointer effects, draggable interfaces, carousels, autoplay media, hover-dependent information, or gesture-only controls.

# Features

## Global site shell

**Purpose:** Establish persistent identity, navigation, accessibility, metadata, and trust disclosures.

**Implementation:** `RootLayout` renders the skip link, `Header`, route content, and `Footer`. Site-wide Organization, FinancialService, and WebSite JSON-LD are injected in the document head.

**Engineering considerations:** The header is the only persistent interactive client component. The footer remains server-rendered. The shell uses a single source of truth for navigation and contact information.

## Responsive primary navigation

**Purpose:** Expose the primary trust journey across desktop and mobile.

**Implementation:** Desktop links and a CTA are shown above 1023 px. Below that threshold, a menu button controls a positioned navigation panel. `isActivePath` recognizes both exact routes and nested service or insight routes.

**Engineering considerations:** The menu closes on route selection and Escape. Accessible state is reflected in `aria-expanded` and the button's screen-reader label. The implementation avoids a dependency for a small disclosure interaction.

## Homepage trust journey

**Purpose:** Introduce the firm, establish positioning, explain the advisory philosophy, expose services, add social proof, surface editorial expertise, and provide a contact path.

**Implementation:** The page composes a split hero, fiduciary proof strip, values, asymmetric service index, testimonials, insight feature, resources strip, and shared conversation CTA.

**Engineering considerations:** The hero image is prioritized. Secondary content is server-rendered and progressively revealed. Services, testimonials, values, and insights all originate in centralized content records.

## Firm and leadership pages

**Purpose:** Establish institutional credibility without relying on fabricated awards, regulatory registrations, assets under management, or performance figures.

**Implementation:** The About page describes the fictional firm's founding rationale, mission, vision, operating values, leadership route, and demonstration disclosure. Leadership renders four typed fictional biographies with locally stored portraits.

**Engineering considerations:** The first leader receives a featured grid treatment without requiring a separate component or duplicate content model.

## Service architecture

**Purpose:** Model a realistic finance service hierarchy and give each discipline enough depth to support search, navigation, and client qualification.

**Implementation:** A service index links to five statically generated detail pages:

1. Private Wealth Management
2. Investment Advisory
3. Retirement Planning
4. Family Office Services
5. Institutional Advisory

Each detail route includes:

- Route-specific metadata.
- Breadcrumb JSON-LD.
- Hero positioning and audience.
- Four capabilities.
- A three-stage process.
- A related editorial insight.
- Shared contact CTA.

**Engineering considerations:** The typed service record is intentionally rich enough to support both index and detail compositions. Related content uses slugs instead of duplicated content objects. Invalid slugs return the App Router 404.

## Editorial insights

**Purpose:** Demonstrate finance-specific expertise content and an SEO-capable publishing pattern.

**Implementation:** The insights index has one featured article and a secondary article grid. Three detail routes are generated from typed records. Each article includes category, date, read time, introduction, structured sections, educational disclosure, related navigation, Article JSON-LD, and breadcrumbs.

**Engineering considerations:** Article content is structured rather than stored as raw HTML or MDX. This keeps the reference implementation dependency-free and strongly typed, but limits authoring flexibility.

## Resources hub

**Purpose:** Demonstrate a pre-conversion educational layer between editorial content and direct contact.

**Implementation:** Resource groups link to FAQs and existing insight content. The section models planning guides, governance checklists, and investment decision resources without pretending downloadable files exist.

**Engineering considerations:** Version 1.0.0 does not ship actual PDF downloads. Resource labels describe conceptual content while links resolve to implemented routes.

## FAQ system

**Purpose:** Answer qualification, independence, engagement, scope, fee, location, and demonstration questions.

**Implementation:** FAQ content is centralized and rendered through native `details` and `summary` elements. The same records generate FAQPage JSON-LD.

**Engineering considerations:** Native disclosure semantics provide keyboard and accessibility behavior without a client component.

## Contact path

**Purpose:** Demonstrate a credible conversion endpoint while honoring the rule against simulated functionality.

**Implementation:** The contact page exposes `mailto:` and `tel:` links, a fictional office address, availability context, and a three-stage first-conversation process.

**Engineering considerations:** There is no nonfunctional contact form. The page explicitly states that the site does not collect or submit personal information.

## Legal and fictional-content controls

**Purpose:** Make the demonstration boundary explicit and prevent fictional content from being mistaken for a real advisory firm.

**Implementation:** Privacy and Terms routes describe the static demonstration, absence of data collection, absence of an advisory relationship, absence of performance representations, and production adaptation requirements. Disclosures also appear on About, articles, FAQs, contact, and the global footer.

**Engineering considerations:** These pages are examples, not production legal advice. An adopting organization must replace them before launch.

## Lifecycle states

**Purpose:** Keep errors, loading, and unknown routes consistent with the visual and accessibility system.

**Implementation:**

- `loading.tsx` renders an accessible three-dot status.
- `error.tsx` logs the error, presents a live alert, and calls the App Router reset callback.
- `not-found.tsx` provides useful recovery links and no-index metadata.

**Engineering considerations:** Lifecycle selectors are explicitly included in Tailwind's source scan because these special files can otherwise be missed by candidate detection.

## Brand asset package

**Purpose:** Make the blueprint visually complete and portable.

**Implementation:**

- Aurevia mark and wordmark components.
- Standalone SVG logo and mark.
- SVG favicon.
- 180 px Apple touch icon.
- 1200 × 630 Open Graph image.
- Fourteen local WebP editorial and portrait images.

**Engineering considerations:** Images are served locally and rendered through `next/image`. The runtime wordmark is text plus CSS geometry; public SVG assets support metadata and external brand uses.

## SEO infrastructure

**Purpose:** Make every public route discoverable and correctly represented by crawlers and social platforms.

**Implementation:**

- Global metadata base and title template.
- Per-route metadata from `createMetadata`.
- Canonical URLs.
- Open Graph and Twitter cards.
- Dynamic sitemap entries for all services and articles.
- Robots endpoint.
- Web app manifest.
- Organization, FinancialService, WebSite, BreadcrumbList, FAQPage, and Article schema.

**Engineering considerations:** JSON-LD serialization escapes `<` to reduce script-injection risk. Sitemap timestamps are deterministic: static pages use July 28, 2026, while articles derive timestamps from their published fields.

# Engineering Decisions

## Local typed content instead of a CMS

The blueprint uses TypeScript records because it must be self-contained, deterministic, and understandable without external services.

**Advantages:**

- Static type checking.
- Predictable build output.
- No network dependency.
- One content source for routes, metadata, schema, and sitemap.
- Easy inheritance for small sites.

**Tradeoff:** Editorial teams cannot update content without a code change and deployment. A production project with frequent publishing should replace the content module with a CMS adapter while preserving the record shapes or mapping into equivalent view models.

## Server Components by default

Pages remain server components unless browser behavior is essential.

**Advantages:**

- Low client JavaScript.
- Direct static generation.
- No client-side content fetching.
- Reduced hydration risk.

**Tradeoff:** Highly interactive future features require explicit client boundaries rather than being added casually inside route modules.

## Static generation for dynamic detail routes

Service and article routes use dynamic path syntax but are fully generated at build time.

**Advantages:**

- Reusable routing pattern.
- Fast delivery.
- Deterministic SEO.
- No production database requirement.

**Tradeoff:** New service or article slugs require a rebuild. On-demand revalidation is not configured.

## Global design-language CSS instead of a component library

The visual system is implemented in global CSS backed by tokens.

**Advantages:**

- Direct control over the Premium design language.
- No third-party visual defaults.
- Easy auditing of responsive and motion behavior.
- No runtime styling dependency.

**Tradeoff:** The stylesheet is large and selector discipline matters. Future maintainers should split it only when a clear ownership boundary emerges, not merely by file size.

## System typography instead of hosted fonts

The design uses Avenir Next when available and falls back through common grotesk system fonts.

**Advantages:**

- No external font request.
- No font licensing or hosting dependency.
- Minimal layout shift.

**Tradeoff:** Exact typography varies by operating system. A client adaptation requiring cross-platform typographic fidelity should self-host licensed font files and preserve metric compatibility.

## No simulated form

Contact actions use email and telephone links.

**Advantages:**

- Behavior is honest.
- No fake success state.
- No accidental collection of sensitive information.
- No backend or spam-control dependency.

**Tradeoff:** The blueprint does not demonstrate form validation, consent capture, CRM integration, secure submission, or server actions.

## Native elements before custom widgets

FAQ disclosure uses `details` and `summary`; navigation uses links and a button; process structures use ordered lists.

**Advantages:**

- Better default semantics.
- Lower JavaScript cost.
- Reliable keyboard behavior.

**Tradeoff:** Native disclosure rendering has some browser-specific details and offers less animation control than a custom accordion.

## Restrained motion

Motion is treated as state communication and pacing rather than decoration.

**Advantages:**

- Fits the financial trust context.
- Low performance cost.
- Easier reduced-motion support.
- Lower risk of distracting from long-form content.

**Tradeoff:** The experience intentionally avoids high-impact motion techniques that might be appropriate in entertainment or experimental portfolio work.

## Original generated imagery

The blueprint uses locally stored, original fictional imagery rather than stock-provider URLs.

**Advantages:**

- Stable assets.
- Internal visual consistency.
- No third-party runtime dependency.
- No accidental imitation of a real organization.

**Tradeoff:** Adopters must replace the fictional people and brand photography with properly licensed and reviewed production material.

# Reusable Patterns

1. **Typed content-to-route pipeline:** A single record drives index display, detail route generation, metadata, sitemap inclusion, and structured data.
2. **Server-first route composition:** Route modules remain simple compositions of data and presentation primitives.
3. **Nested-route active navigation:** `isActivePath` recognizes child routes without false matches such as `/services-old`.
4. **Token-owned motion:** JavaScript exposes state while CSS owns duration, easing, transform, and opacity.
5. **SSR-safe media preference:** `useSyncExternalStore` supplies deterministic server and client snapshots for reduced motion.
6. **SSR-safe viewport observation:** The initial state matches on server and first client render; observation begins after mount.
7. **Above-fold reveal safeguard:** Critical introductory content is never visually absent during initial hydration.
8. **Schema co-location with route data:** FAQ and Article schema derive from the content rendered to users.
9. **Escaped JSON-LD serialization:** `<` characters are escaped before insertion into a script element.
10. **Honest conversion path:** Protocol links replace simulated submission where no backend exists.
11. **Centralized fictional identity:** Domain, legal name, contact data, icons, and social assets are controlled from one site object.
12. **Shared contact CTA:** A single section maintains consistent conversion language and contact data across routes.
13. **Native disclosure pattern:** FAQs require no custom state management.
14. **Deterministic lifecycle styling:** Loading, error, and not-found states share the same visual grammar as normal pages.
15. **Local asset portability:** All imagery and brand files ship with the repository.

# Lessons Learned

- Financial credibility is better established through information hierarchy, disclosure quality, restraint, and clear scope than through invented statistics or ornamental dashboards.
- A content model should be designed around all of its consumers. Services and insights work well because the same typed records support navigation, detail pages, SEO, schema, and related content.
- Premium design does not require heavy animation, complex component libraries, or remote fonts. Typography, spacing, image direction, and controlled contrast carry most of the result.
- Lifecycle routes need the same design attention as primary pages. They also require explicit source inclusion when utility CSS tooling does not discover special route classes reliably.
- Above-the-fold reveal effects can create blank or unstable initial renders. Critical content needs a server-visible state even when below-the-fold content uses intersection-driven motion.
- Native HTML often produces the best accessibility-to-complexity ratio.
- A fictional reference implementation must disclose its status repeatedly at the points where a visitor might otherwise infer a real claim.
- A contact surface without a backend should not imitate a working form.
- Mobile review must change composition, not only reduce dimensions. Borders, order, navigation behavior, CTA layout, footer density, and image ratios all require explicit decisions.
- Production testing is materially different from development-server testing. Hot reload can introduce transient states that are absent from the optimized build, so both should be exercised.

# Notable Components

## `RootLayout`

Owns global CSS, document language, smooth-scroll declaration, root metadata, skip navigation, providers, persistent shell, and global structured data.

## `Header`

The primary client-side navigation component. It renders desktop and mobile navigation from one configuration, handles active paths, exposes accessible disclosure state, supports Escape dismissal, and closes the menu after navigation.

## `Footer`

Consolidates brand context, grouped navigation, contact channels, office address, legal links, HubZero attribution, and fictional disclosure.

## `Page`

Creates the semantic `main` landmark, standard `main-content` target, programmatic focus target, and minimum viewport-height contract.

## `Container`

Provides the standard 82 rem page shell and a prose-width variant. It centralizes horizontal padding and prevents route-specific width drift.

## `Section`

Provides the default responsive vertical rhythm for semantic page sections.

## `PageIntro`

Standardizes interior-page eyebrow, H1, description, container alignment, and reveal behavior.

## `ConversationCta`

Provides the shared conversion section. It reads contact information from site configuration and exposes email, telephone, and office channels without collecting data.

## `ArrowLink`

Standardizes secondary navigation with a text label and decorative arrow.

## `Reveal`

Bridges reusable observation behavior and blueprint-specific CSS. It emits data attributes and delegates all visual motion to the design language.

## `JsonLd`

Serializes an object or array of schema objects into JSON-LD and escapes `<` before inserting the script payload.

## `SkipLink`

Provides a keyboard-first path to the route's main landmark and uses the shared z-index vocabulary when focused.

## `BrandMark` and `Wordmark`

Render the accessible home link and decorative Aurevia symbol. Inverted variants support the dark footer.

## `useInView`

Wraps `IntersectionObserver`, supports root, root margin, threshold, and one-time observation, and falls back to visible when the API is unavailable.

## `useReducedMotion`

Provides an SSR-safe subscription to `prefers-reduced-motion`.

## `createMetadata`

Builds route metadata with the shared title convention, description, keywords, canonical URL, Open Graph object, and Twitter card.

## JSON-LD helpers

Generate Organization, FinancialService, WebSite, and BreadcrumbList objects from centralized configuration. Article and FAQ schema are assembled where their route-specific content is available.

# Developer Notes

## Primary adaptation points

When inheriting this blueprint, replace data in this order:

1. `src/config/site.ts`
2. `src/config/navigation.ts`
3. `src/content/content.ts`
4. `src/styles/tokens.css`
5. `public/brand/`
6. `public/images/`
7. Legal and regulatory copy

The `.hubzero` directory is managed by Blueprint Core and must not be modified by inheriting projects unless explicitly directed by HubZero maintainers.

## Content integrity

Service and insight slugs are route identifiers. Changing a slug changes the generated URL and requires updating any references to that slug.

Every service has a `relatedInsight` slug. Keep this reference valid or the related section will not render.

Article publication strings are converted to JavaScript dates for Article schema and sitemap entries. Use unambiguous English date strings or replace the field with ISO dates before introducing localization.

## SEO asset alignment

The actual social asset is:

```text
/brand/aurevia-og.png
```

Global metadata uses that asset. In version 1.0.0, `createMetadata` retains the Blueprint Base fallback `"/og.png"` when a route does not supply an image. Detail insight routes provide their own image, but other route-level calls rely on that fallback. An inheriting implementation should change the helper default to the configured `site.openGraphImage` or add a root-level `/og.png` asset so route-specific social metadata always resolves.

## Domain and contact policy

The configured domain uses the reserved `.example` namespace:

```text
https://aurevia-capital.example
```

Email addresses use the same fictional domain. Replace the domain, metadata base, canonical URLs, sitemap host, email, phone, and office address together.

## Imagery

Images have explicit intrinsic dimensions and responsive `sizes`. Preserve that practice when replacing files. Hero images are marked `priority`; lower-page images are left to normal Next.js loading behavior.

Alternative text describes the visible fictional scene or identifies the fictional leader. Do not reuse the existing text after replacing an image.

## Styling

The global stylesheet is organized by design-system foundation, shared components, page families, footer, motion, and responsive queries. Keep new selectors near the component or route family they extend.

Do not remove:

```css
@source inline("lifecycle-page loading-page text-link");
```

unless the Tailwind source-detection behavior has been replaced and lifecycle styles are verified in a production build.

## Validation commands

The canonical local gates are:

```bash
npm install
npm run lint
npm run typecheck
npm run build
```

Version 1.0.0 passes all three quality scripts and produces a successful Next.js production build.

## Dependency notes

- `next` is pinned through the `^16.2.12` range.
- React and React DOM are `19.2.4`.
- ESLint remains on major version 9 for compatibility with the current Next.js ESLint plugins.
- `postcss` and `sharp` are constrained through package overrides.
- The production dependency audit is clean at the time of version 1.0.0 verification.

## Providers

`AppProvider` is currently a pass-through fragment retained from Blueprint Base. It provides a stable integration point for future shared providers without forcing one into the current implementation.

`ThemeProvider` exists in the inherited infrastructure but is not mounted by the Aurevia experience. The blueprint has one fixed visual theme and does not expose a theme switcher.

# Interesting Engineering

## One record, multiple build products

The service and insight records are more than display content. At build time, they become:

- Static route parameters.
- Page titles and descriptions.
- Canonical URLs.
- Sitemap rows.
- Article and breadcrumb schema.
- Related-content relationships.
- Index-page content.
- Detail-page content.

This reduces divergence between what crawlers see, what navigation exposes, and what users read.

## Motion as a protocol

`Reveal` does not know what a Premium reveal looks like. It knows only whether content is hidden or visible. The CSS design language interprets that protocol. This makes the behavior reusable across future design languages without forcing them to share Aurevia's timing or transform values.

## Honest functionality as an architectural constraint

The absence of a contact backend is not concealed. It changes the component model: there is no form component, server action, validation library, fake loading state, or fake success screen. The interface exposes actions the implementation can actually complete.

## CSS-rendered identity plus portable assets

The on-page mark is lightweight CSS geometry inside semantic brand components, while external use cases receive standalone SVG and raster assets. This separates runtime identity rendering from metadata and export requirements.

## Progressive structured data

Global entity schema is emitted once by the root layout. Route modules add only the schema that belongs to their content:

- Services add breadcrumbs.
- FAQs add FAQPage.
- Articles add breadcrumbs and Article.

This avoids repeating the organization object in every route module.

## Responsive composition without component duplication

Desktop and mobile use the same semantic markup. CSS changes grid structure, ordering, borders, and spacing. There are no separate mobile page components or duplicated content trees.

# Limitations

The blueprint intentionally does not solve the following:

- Client authentication or authorization.
- Account opening, onboarding, know-your-customer, or anti-money-laundering workflows.
- Client portals, document vaults, dashboards, or account aggregation.
- Portfolio reporting, market data, performance calculations, or trading.
- Financial planning calculators or personalized recommendations.
- Regulatory filing management or jurisdiction-specific compliance.
- Secure contact-form processing, CRM integration, spam prevention, or consent storage.
- Analytics, tag management, advertising, or marketing automation.
- Cookie consent or preference management.
- Newsletter subscription or email publishing workflows.
- A content management system, editorial preview, draft state, or author permissions.
- Search, filtering, pagination, RSS, or content taxonomy beyond the fixed insight categories.
- Internationalization, localization, multi-currency behavior, or regional legal variants.
- On-demand revalidation or runtime content updates.
- Dark mode or user-selectable themes.
- Downloadable planning guides; the resources page links to implemented HTML content.
- Real legal, privacy, investment, tax, regulatory, or accessibility certification.
- Cross-platform font identity; the system stack varies by device.
- A comprehensive automated test suite. Verification is based on linting, strict type checking, production build, browser smoke testing, responsive inspection, and manual review.

The privacy policy and terms are demonstration content and must not be published for a real organization without qualified review.

# Suggested Tags

- HubZero
- Blueprint
- Blueprint Base
- Finance
- Financial services
- Wealth management
- Investment advisory
- Retirement planning
- Family office
- Institutional advisory
- Premium design
- Trust-first architecture
- Next.js
- App Router
- React Server Components
- TypeScript
- Tailwind CSS
- Static generation
- Structured data
- Technical SEO
- Accessibility
- Responsive design
- Reduced motion
- Content architecture
- Fictional reference implementation

# Structured Summary

```yaml
name: HubZero Finance + Premium Blueprint
type: reusable_public_website_blueprint
status: complete_canonical_reference
repository: blueprint-finance-premium
technologies:
  - Next.js 16.2.12
  - React 19.2.4
  - TypeScript 5
  - Tailwind CSS 4
  - CSS custom properties
  - Next.js Metadata API
  - JSON-LD
architecture:
  application: Next.js App Router
  rendering: server_components_with_static_generation
  content: local_typed_typescript_records
  routing: static_routes_and_prerendered_dynamic_segments
  client_boundaries:
    - responsive_navigation
    - viewport_reveal
    - reduced_motion_subscription
    - error_reset
design_language: premium
domains:
  - finance
  - financial_services
  - private_wealth_management
  - investment_advisory
  - retirement_planning
  - family_office
  - institutional_advisory
  - financial_editorial_content
primary_language: TypeScript
platforms:
  - responsive_web
  - desktop_browser
  - mobile_browser
  - Node.js_hosting
  - static_prerendering
difficulty: advanced
maturity: production_ready_reference_implementation
key_features:
  - complete_finance_information_architecture
  - fictional_aurevia_capital_brand
  - five_static_service_detail_routes
  - three_static_editorial_article_routes
  - leadership_resources_faq_contact_and_legal_pages
  - centralized_typed_content
  - responsive_premium_design_system
  - accessible_desktop_and_mobile_navigation
  - reduced_motion_aware_reveal_system
  - local_optimized_brand_and_photography_assets
  - canonical_metadata_open_graph_twitter_robots_sitemap_manifest
  - organization_financial_service_website_breadcrumb_faq_and_article_schema
  - explicit_fictional_and_non_advisory_disclosures
engineering_highlights:
  - server_components_by_default
  - build_time_content_to_route_pipeline
  - deterministic_static_generation
  - token_owned_motion_and_layout
  - ssr_safe_intersection_observer
  - ssr_safe_reduced_motion_subscription
  - escaped_json_ld_serialization
  - honest_conversion_without_simulated_forms
  - native_html_disclosure_controls
  - shared_content_for_ui_seo_schema_and_sitemap
related_projects:
  - HubZero Blueprint Base
  - HubZero Blueprint Core
  - future HubZero Finance client implementations
keywords:
  - hubzero
  - blueprint
  - finance
  - premium
  - wealth-management
  - investment-advisory
  - family-office
  - nextjs
  - react-server-components
  - typescript
  - static-generation
  - seo
  - json-ld
  - accessibility
  - reduced-motion
  - responsive-design
```
