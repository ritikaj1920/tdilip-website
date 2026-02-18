# T. Dilip — Official Website

Personal website for **T. Dilip**, India's fielding coach, showcasing his journey, philosophy, achievements, and media presence in international cricket.

## Tech Stack

- **React 19** with TypeScript
- **Vite 7** for build tooling
- **Framer Motion** for animations
- **React Router v7** with lazy-loaded routes
- **CSS Modules** for scoped styling

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## Project Structure

The project follows **Atomic Design** with kebab-case naming. Each component uses `index.tsx` as its entry point for clean folder imports.

```
src/
  components/
    atoms/              # Smallest UI units
      loader/           # Full-screen loading spinner
      scroll-to-top/    # Scroll-to-top on route change
    molecules/          # Composed atoms
      page-hero/        # Reusable page hero banner
    organisms/          # Complex, self-contained sections
      header/           # Site navigation
      footer/           # Site footer with social links
      hero/             # Landing hero with video background
      about/            # About section
      stats/            # Key statistics counter
      achievement-ticker/ # Scrolling achievement ribbon
      medal-section/    # Medal/trophy showcase
      instagram-feed/   # Instagram profile + posts grid
      twitter-feed/     # Twitter/X feed embed
      gallery/          # Photo gallery with lightbox
      testimonials/     # Testimonial slider
      partners/         # Partner logos grid
      journey-section/  # Interactive timeline
  pages/
    home/               # Landing page
    coach/              # Detailed coaching journey + philosophy
    about/              # Biography + mission & vision
    gallery/            # Full gallery with masonry + videos
    partners/           # Partners showcase
    qna/                # FAQ accordion + social CTA
    helping-hands/      # Community initiatives
    submit-video/       # Fan video submission
    blog-detail/        # Individual blog article
  data/                 # Static data (timeline, achievements, quotes, etc.)
  hooks/                # Custom hooks (useCountUp, useScrollAnimation)
  styles/               # Global CSS + design tokens
```

## Design Tokens

All design tokens are defined in `src/styles/variables.css` — colors, typography, spacing, shadows, and transitions. The site uses a dark cinematic theme with gold accent tones.

## Responsive Breakpoints

| Breakpoint | Target          |
|------------|-----------------|
| 1024px     | Tablet landscape |
| 968px      | Hero layout     |
| 768px      | Tablet portrait  |
| 480px      | Mobile           |
