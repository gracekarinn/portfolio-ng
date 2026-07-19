
# AGENTS.md

## Project Overview

This repository contains Grace Karina’s personal portfolio website.

The portfolio is built with:

* Next.js 16.2.10
* App Router
* TypeScript
* Tailwind CSS
* shadcn/ui
* npm

The website presents:

* personal introduction
* selected projects
* professional experience
* achievements
* blog articles
* contact information
* an email contact form

The visual direction is defined in `DESIGN.md`.

Always read both `AGENTS.md` and `DESIGN.md` before making changes.

---

## General Working Rules

Before editing files:

1. Inspect the existing repository.
2. Read `package.json`, `src/app`, `src/components`, and `src/modules`.
3. Check the current dependencies and configuration.
4. Do not assume a package is installed.
5. Briefly state the files and dependencies that will be changed.

After editing:

1. Run the appropriate lint command.
2. Run the production build.
3. Fix errors introduced by the implementation.
4. Report the final files created or modified.
5. Mention any environment variables or manual steps required.

Do not rewrite unrelated files.

Do not remove existing functionality unless explicitly requested.

Do not replace working configuration without a clear reason.

---

## Architecture

Use a feature-based modular architecture.

The main source structure should follow this direction:

```txt
src/
├── app/
├── components/
│   ├── ui/
│   ├── layout/
│   └── shared/
├── modules/
├── hooks/
├── lib/
└── types/
```

Not every folder must be created immediately. Create folders only when they are needed.

---

## App Router Rules

The `src/app` directory is responsible for:

* routing
* route layouts
* metadata
* loading states
* error states
* route handlers
* page composition

Route files must remain thin.

Do not place full page implementations directly inside `page.tsx`.

Example:

```tsx
import { HomepageModule } from "@/modules/homepage-module";

export default function HomePage() {
  return <HomepageModule />;
}
```

A route may fetch route-level data when appropriate, but its visual implementation should be delegated to a module.

Use Next.js conventions for:

* `page.tsx`
* `layout.tsx`
* `loading.tsx`
* `error.tsx`
* `not-found.tsx`
* `route.ts`
* `generateMetadata`
* `generateStaticParams`

---

## Module Structure

Each page-level feature should live under:

```txt
src/modules/<feature-name>-module/
```

Example:

```txt
src/modules/homepage-module/
├── components/
├── sections/
├── constants.ts
├── interfaces.ts
├── homepage-module.tsx
└── index.ts
```

A larger module may additionally contain:

```txt
hooks/
lib/
utils.ts
schemas.ts
actions.ts
```

Only create these files when their responsibilities are needed.

Do not create empty placeholder files.

---

## Module Responsibilities

### `homepage-module.tsx`

Composes the sections that make up the homepage.

It should not contain large amounts of section-specific markup.

Example:

```tsx
import { HeroSection } from "./sections/hero-section";

export function HomepageModule() {
  return (
    <main>
      <HeroSection />
    </main>
  );
}
```

### `sections/`

Contains major page sections.

Examples:

```txt
hero-section.tsx
projects-section.tsx
experience-section.tsx
achievements-section.tsx
blog-section.tsx
contact-section.tsx
```

A section represents a large semantic block of a page.

Each section should normally render a semantic `<section>` element and have an accessible heading.

### `components/`

Contains components used only by that module.

Examples:

```txt
project-card.tsx
experience-item.tsx
terminal-command.tsx
tarot-profile-card.tsx
```

Do not move feature-specific components into the global `components` folder.

### `constants.ts`

Contains static content and configuration owned by the module.

Examples:

* navigation items
* featured project data
* experience data
* social links
* terminal labels
* section metadata

Do not place JSX inside constants unless there is a strong reason.

Prefer icon references or identifiers instead of storing rendered elements in data.

### `interfaces.ts`

Contains interfaces and types owned by the module.

Examples:

```ts
export interface Project {
  title: string;
  description: string;
  technologies: string[];
  href?: string;
}
```

Do not duplicate types that already exist globally.

### `index.ts`

Provides the public exports of the module.

Example:

```ts
export { HomepageModule } from "./homepage-module";
```

Avoid exporting every internal component unless another module genuinely needs it.

---

## Global Components

Use `src/components/ui` for shadcn/ui primitives.

Examples:

```txt
button.tsx
card.tsx
dialog.tsx
sheet.tsx
input.tsx
textarea.tsx
```

Use `src/components/layout` for application-wide layout components.

Examples:

```txt
site-header.tsx
site-footer.tsx
mobile-navigation.tsx
theme-provider.tsx
```

Use `src/components/shared` for reusable components that are not low-level UI primitives.

Examples:

```txt
section-heading.tsx
social-links.tsx
theme-toggle.tsx
```

A component belongs in `shared` only when it is genuinely reused across multiple modules.

Do not turn every small component into a global abstraction.

---

## shadcn/ui Rules

Use the latest stable shadcn/ui setup compatible with the repository.

Before installing or adding components:

1. Inspect the existing shadcn configuration.
2. Check whether `components.json` already exists.
3. Check existing Tailwind and CSS configuration.
4. Avoid reinitializing shadcn when it is already configured.
5. Add only the primitives required by the current task.

shadcn/ui components should remain editable source code inside:

```txt
src/components/ui
```

Do not wrap every shadcn component unnecessarily.

Create wrappers only when the project needs reusable behavior or styling that should be consistent across multiple usages.

Prefer shadcn primitives over recreating common components such as:

* buttons
* inputs
* textareas
* sheets
* dialogs
* dropdown menus
* badges
* cards
* tooltips

---

## React and Next.js Rules

Use Server Components by default.

Only add `"use client"` when a component requires:

* state
* effects
* event handlers
* browser APIs
* client-side context
* interactive animation
* client-only libraries

Keep client component boundaries as small as possible.

Do not mark an entire page or module as a Client Component just because one nested element is interactive.

Do not use `useEffect` for values that can be calculated during render.

Do not use client-side data fetching when server-side fetching is appropriate.

Use `next/image` for content images.

Use `next/link` for internal navigation.

Use Next.js metadata APIs for page metadata.

---

## TypeScript Rules

Use strict TypeScript.

Do not use `any` unless there is no practical alternative and the reason is documented.

Prefer explicit reusable interfaces for structured data.

Use `unknown` instead of `any` for uncertain external input.

Validate external and form data before using it.

Avoid unsafe type assertions.

Prefer named exports for modules and components.

Component props should use named interfaces when they contain multiple fields.

Example:

```tsx
interface ProjectCardProps {
  title: string;
  description: string;
}

export function ProjectCard({
  title,
  description,
}: ProjectCardProps) {
  return null;
}
```

---

## Naming Conventions

Use kebab-case for filenames:

```txt
hero-section.tsx
theme-toggle.tsx
project-card.tsx
```

Use PascalCase for React components:

```tsx
HeroSection
ThemeToggle
ProjectCard
```

Use camelCase for variables and functions:

```ts
featuredProjects
formatPublishedDate
```

Use uppercase snake case only for true immutable constants:

```ts
const MAX_MESSAGE_LENGTH = 2_000;
```

Use plural folder names when they contain multiple items:

```txt
components/
sections/
hooks/
```

Use:

```txt
constants.ts
interfaces.ts
```

Do not use:

```txt
constant.ts
interface.ts
```

unless a file contains exactly one intentionally isolated declaration.

---

## Import Rules

Use the configured `@/` alias for imports from `src`.

Example:

```tsx
import { Button } from "@/components/ui/button";
```

Use relative imports within the same module when they remain clear.

Example:

```tsx
import { HeroSection } from "./sections/hero-section";
```

Avoid deeply nested imports such as:

```tsx
../../../../components
```

Do not create circular dependencies.

---

## Styling Rules

Use Tailwind CSS and semantic theme variables.

Do not repeatedly hardcode raw colors across components.

Prefer classes based on semantic tokens such as:

```txt
bg-background
text-foreground
bg-card
text-card-foreground
text-muted-foreground
border-border
bg-primary
text-primary-foreground
```

Custom colors should first be defined as theme variables.

Do not use inline styles unless a value is truly dynamic.

Do not add arbitrary pixel values when an existing spacing or size token is suitable.

Keep class lists readable.

Use a utility such as `cn` when conditional class composition is needed.

---

## Theme Rules

The website must support light and dark mode.

Theme switching must:

* work without reloading the page
* persist the user preference
* respect the system preference when no explicit selection exists
* avoid a noticeable theme flash
* use an accessible control
* include a meaningful accessible label

Do not build separate component trees for light and dark mode.

Use semantic tokens so both themes share the same markup.

Decorative assets may have theme-specific variants when CSS coloring is insufficient.

---

## Accessibility

Accessibility is required, not optional.

Use semantic HTML.

Every page should have:

* one clear primary heading
* logical heading order
* keyboard-accessible controls
* visible focus states
* readable contrast
* descriptive links
* meaningful alternative text

Icon-only buttons must have accessible labels.

Decorative images must use empty alternative text or be hidden from assistive technology.

Forms must use:

* visible labels
* accessible validation messages
* clear success and error states
* appropriate autocomplete attributes

Respect `prefers-reduced-motion`.

Do not rely only on color to communicate meaning.

Do not place important text inside images.

---

## Responsive Design

Build mobile-first.

The website must work at minimum across:

* small mobile screens
* standard mobile screens
* tablets
* laptops
* wide desktop screens

Avoid fixed widths that cause horizontal overflow.

Use fluid containers and sensible maximum widths.

Touch targets should be comfortably usable.

Do not require hover to access essential information.

On mobile:

* prioritize content over decoration
* reduce or hide nonessential ornamentation
* use an accessible navigation menu
* preserve readable typography
* avoid excessively tall fixed hero sections

Test common viewport widths such as:

```txt
375px
430px
768px
1024px
1440px
```

---

## Motion Rules

Motion must be subtle and purposeful.

Suitable motion includes:

* short opacity transitions
* small vertical reveals
* restrained hover movement
* smooth theme transitions
* subtle decorative drift

Avoid:

* aggressive parallax
* excessive glowing effects
* continuous large animations
* large card rotations
* animations that delay navigation
* motion that harms readability

Respect reduced-motion preferences.

Do not install an animation library unless native CSS is insufficient for the requested interaction.

---

## Content Rules

Portfolio content should remain easy to update.

Repeated content such as projects, experience, achievements, and social links should normally be data-driven.

Do not duplicate the same project information across several components.

Use clear professional language.

Terminal language is a visual motif, not a replacement for understandable navigation and content.

Tarot references must remain subtle and should not make professional content difficult to understand.

---

## Blog Rules

The first blog implementation should use local content unless a CMS is explicitly requested.

Preferred content direction:

```txt
content/
└── blog/
    └── article-slug.mdx
```

A blog article should support metadata such as:

```yaml
title:
description:
publishedAt:
updatedAt:
category:
tags:
featured:
draft:
```

Blog functionality should support:

* article listing
* article detail pages
* draft exclusion in production
* metadata generation
* readable typography
* code blocks
* responsive images
* stable slugs

Do not introduce a CMS unless requested.

---

## Contact Form Rules

The contact form should eventually support:

* name
* email
* subject
* message

Use server-side validation.

Preferred implementation direction:

* Server Actions or a route handler
* Zod validation
* Resend for email delivery
* environment variables for secrets
* accessible pending, success, and error states
* honeypot protection
* reasonable rate limiting

Never expose email provider secrets in client-side code.

Do not commit `.env` files.

Update `.env.example` when new environment variables are introduced.

---

## Performance

Avoid unnecessary dependencies.

Use optimized images.

Load decorative assets efficiently.

Do not ship large JavaScript bundles for static visual effects.

Prefer Server Components for static sections.

Lazy-load heavy client-side components when appropriate.

Avoid layout shifts by reserving image dimensions.

Keep decorative visual layers from harming scrolling performance.

---

## Testing and Verification

For every meaningful implementation:

1. Run lint.
2. Run the production build.
3. Fix introduced errors.
4. Verify light and dark mode.
5. Verify desktop and mobile layouts.
6. Verify keyboard navigation.
7. Check for horizontal overflow.
8. Check the browser console for avoidable errors.

Use the commands defined by `package.json`.

Do not invent command names without inspecting the available scripts.

---

## Implementation Scope

Implement features incrementally.

Do not build the complete website in one unreviewable change unless explicitly requested.

Preferred sequence:

1. project architecture
2. theme tokens
3. navigation
4. hero section
5. projects
6. experience
7. achievements
8. blog
9. contact form
10. final accessibility and performance review

Each stage should remain functional before moving to the next.

---

## Definition of Done

A task is complete when:

* the requested feature works
* the architecture follows this document
* the visual implementation follows `DESIGN.md`
* TypeScript remains strict
* lint passes
* the production build passes
* desktop and mobile layouts are usable
* light and dark mode work
* accessibility basics are satisfied
* changes are summarized clearly
