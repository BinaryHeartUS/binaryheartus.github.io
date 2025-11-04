# GitHub Copilot Instructions for BinaryHeart Website

## Project Overview
This is a React + TypeScript + Vite website for Binary Heart, a student-run nonprofit organization that refurbishes and distributes computers. The site uses React Router for navigation and Tailwind CSS for styling.

## Code Style & Architecture

### Component Reusability
**IMPORTANT**: Always create or reuse modular components when building new pages. Do not duplicate code across pages.

- Before creating new UI elements, check if a similar component already exists in `src/components/`
- If a pattern appears more than once across pages, extract it into a reusable component
- Examples of reusable components in this project:
  - `PhotoCarousel` - Used for image galleries across chapter pages
  - `Header` - Navigation header used site-wide
  - `Footer` - Footer used site-wide
  - `ChapterDropdown` - Dropdown menu for chapter navigation

### When Creating New Chapter Pages
- Follow the existing structure in `src/pages/[chapter-name]/`
- Each chapter should have consistent pages: `About.tsx`, `Join.tsx`, etc.
- Reuse existing components like `PhotoCarousel` for photo galleries
- Use the same layout patterns and spacing as existing chapter pages
- Follow the chapter's branding colors (defined as Tailwind arbitrary values like `text-[#2F4A70]`)

## Branding Guidelines

### BinaryHeart Brand Colors
Binary Heart has official brand colors defined in `src/utils/brandColors.ts`:
- **Binary Red**: `#FF0040` - Used for "Binary" text and Donate buttons
- **Heart Blue**: `#2F4A70` - Used for "Heart" text and Join buttons

**Always use the brand constants**:
```tsx
import BinaryHeartText from '../../components/BinaryHeartText';
import { BRAND_COLORS, getBrandGradient } from '../../utils/brandColors';

// For "BinaryHeart" text
<h1>Welcome to <BinaryHeartText /></h1>

// For manual color application
<span className={BRAND_COLORS.BINARY_TEXT}>Binary</span>
<span className={BRAND_COLORS.HEART_TEXT}>Heart</span>

// For buttons and gradients
<button className={`bg-gradient-to-r ${BRAND_COLORS.BINARY_GRADIENT}`}>
  Donate
</button>

// Or use the helper function
<button className={`bg-gradient-to-r ${getBrandGradient('heart')}`}>
  Join Us
</button>
```

## Styling Conventions

### Section Structure
- Hero sections: Large headings with colored BinaryHeart branding
- Content sections: `max-w-7xl` or `max-w-3xl` containers centered with `mx-auto`
- Cards: Use `rounded-2xl bg-white/80 backdrop-blur-sm p-6 shadow-lg ring-1 ring-gray-900/5`

## Routing & Navigation

### GitHub Pages SPA Support
- Direct URL navigation is handled by `public/404.html` redirect
- Never hardcode absolute URLs - use React Router's `Link` component
- For chapter navigation, use the `getRelativePath()` helper from `src/utils/urlHelpers.ts`

### Chapter Structure
- National pages: `/about`, `/join`, `/contact`, etc.
- Chapter pages: `/[chapter-name]/about`, `/[chapter-name]/join`, etc.
- Chapters are defined in `src/data/chapters.json`

## Data Management

### Chapter Data
- Chapter information is stored in `src/data/chapters.json`
- Chapter statistics are in `src/data/chapterStats.json`
- Use TypeScript types from `src/types/chapters.ts` for type safety

### Images
- Chapter images go in `public/assets/images/chapters/[chapter-name]/`
- Use consistent naming: `icon.svg`, `photos/gallery-1.jpg`, etc.
- Reference images with absolute paths from public: `/assets/images/...`

## Component Patterns

### Photo Galleries
Use the `PhotoCarousel` component:
```tsx
<PhotoCarousel
  images={['/path/to/image1.jpg', '/path/to/image2.jpg']}
  title="Optional Title"
  subtitle="Optional Subtitle"
  autoPlayInterval={5000}
/>
```

### External Links
For external links (Campus Groups, social media, etc.):
```tsx
<a
  href="https://example.com"
  target="_blank"
  rel="noopener noreferrer"
  className="..."
>
  Link Text
</a>
```

### Icon SVGs
- Use Heroicons (outline style) for consistency
- Maintain `strokeWidth="2"` for uniformity
- Use appropriate sizing: `h-6 w-6` for cards, `h-7 w-7` for larger sections

## Best Practices

1. **TypeScript**: Always use proper types, avoid `any`
2. **Accessibility**: Include proper ARIA labels and semantic HTML
3. **Performance**: Lazy load images when appropriate
4. **Consistency**: Match existing patterns in layout, spacing, and styling
5. **Modularity**: Extract reusable logic and UI into components
6. **Documentation**: Add comments for complex logic or non-obvious decisions

## Before Making Changes

1. Check existing pages for similar patterns or components
2. Review `src/components/` for reusable components
3. Ensure chapter-specific data comes from JSON files
4. Test that builds succeed with `npm run build`
5. Verify routing works with React Router's `Link` component
