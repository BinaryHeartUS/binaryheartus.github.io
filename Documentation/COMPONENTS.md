# Components Guide

This guide covers the reusable components available in the BinaryHeart website and best practices for using them.

## Brand Identity Components

### BinaryHeartText

**Purpose:** Displays "BinaryHeart" with proper brand colors (Binary in red, Heart in blue).

**Location:** `src/components/BinaryHeartText.tsx`

**Usage:**
```tsx
import BinaryHeartText from '../../components/BinaryHeartText';

<h1>Welcome to <BinaryHeartText /></h1>
// Renders: Welcome to BinaryHeart (with proper colors)
```

**Best Practices:**
- ✅ **Always use this component** for "BinaryHeart" text instead of manually coloring
- ✅ Use in headings, paragraphs, and anywhere the organization name appears
- ❌ **Don't** manually color "Binary" and "Heart" with inline classes

**Example:**
```tsx
// ✅ GOOD
<h1>About <BinaryHeartText /></h1>

// ❌ BAD
<h1>
  About <span className="text-[#FF0040]">Binary</span>
  <span className="text-[#2F4A70]">Heart</span>
</h1>
```

---

## Brand Colors Utility

### brandColors.ts

**Purpose:** Centralized source of truth for all brand colors.

**Location:** `src/utils/brandColors.ts`

**Available Constants:**
```tsx
import { BRAND_COLORS, getBrandGradient } from '../../utils/brandColors';

BRAND_COLORS.BINARY_RED      // "#FF0040" (raw color)
BRAND_COLORS.HEART_BLUE       // "#2F4A70" (raw color)
BRAND_COLORS.BINARY_TEXT      // "text-[#FF0040]" (Tailwind class)
BRAND_COLORS.HEART_TEXT       // "text-[#2F4A70]" (Tailwind class)
BRAND_COLORS.BINARY_GRADIENT  // "from-red-600 to-rose-700" (gradient)
BRAND_COLORS.HEART_GRADIENT   // "from-blue-600 to-indigo-700" (gradient)
```

**Helper Function:**
```tsx
getBrandGradient('binary')  // Returns Binary gradient
getBrandGradient('heart')   // Returns Heart gradient
```

**Usage Examples:**
```tsx
// For text colors
<h2 className={BRAND_COLORS.BINARY_TEXT}>Donate</h2>

// For gradient backgrounds
<button className={`bg-gradient-to-r ${BRAND_COLORS.BINARY_GRADIENT}`}>
  Donate Now
</button>

// Using the helper function
<button className={`bg-gradient-to-r ${getBrandGradient('heart')}`}>
  Join Us
</button>
```

**Best Practices:**
- ✅ **Always use** BRAND_COLORS constants instead of hardcoded hex values
- ✅ Use Binary colors (red) for donate/contribution actions
- ✅ Use Heart colors (blue) for join/volunteer actions
- ❌ **Don't** use arbitrary color values like `text-[#FF0040]` directly in components

---

## Card Components

### FeatureCard

**Purpose:** Display features in a compact, vertical card layout with gradient icon backgrounds.

**Location:** `src/components/FeatureCard.tsx`

**Use Cases:**
- Feature highlights in grid layouts
- Value propositions
- Compact information displays
- 2-3 column grid sections

**Props:**
```tsx
interface FeatureCardProps {
  icon: ReactNode;           // SVG icon
  title: string;             // Card title
  description: string;       // Card description
  gradientFrom: string;      // Tailwind gradient start (e.g., "from-blue-500")
  gradientTo: string;        // Tailwind gradient end (e.g., "to-indigo-600")
}
```

**Usage:**
```tsx
import FeatureCard from '../../components/FeatureCard';

<FeatureCard
  icon={
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M..." />
    </svg>
  }
  title="Accessibility"
  description="Technology should be available to everyone, regardless of economic background."
  gradientFrom="from-blue-500"
  gradientTo="to-indigo-600"
/>
```

**Visual Characteristics:**
- Vertical layout (icon above text)
- Gradient icon background (12x12 size)
- Centered alignment
- Best for 2-3 column grids

---

### InfoCard

**Purpose:** Display detailed information in a horizontal card layout with solid icon backgrounds.

**Location:** `src/components/InfoCard.tsx`

**Use Cases:**
- Detailed process steps
- Service descriptions
- Text-heavy content
- Stacked vertical lists

**Props:**
```tsx
interface InfoCardProps {
  icon: ReactNode;           // SVG icon
  title: string;             // Card title
  description: string;       // Card description
  bgColorClass: string;      // Background color (e.g., "bg-blue-100")
  iconColorClass: string;    // Icon color (e.g., "text-blue-600")
}
```

**Usage:**
```tsx
import InfoCard from '../../components/InfoCard';

<InfoCard
  icon={
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M..." />
    </svg>
  }
  title="Device Collection & Assessment"
  description="We accept donations of laptops, desktops, tablets, and other electronics..."
  bgColorClass="bg-blue-100"
  iconColorClass="text-blue-600"
/>
```

**Visual Characteristics:**
- Horizontal layout (icon left, text right)
- Solid color icon background (10x10 size)
- Left-aligned content
- Best for stacked vertical lists

---

### PictureCard

**Purpose:** Display team member profiles with circular photos.

**Location:** `src/components/PictureCard.tsx`

**Use Cases:**
- Leadership team sections
- Team member profiles
- Staff directories

**Props:**
```tsx
interface PictureCardProps {
  imageSrc: string;          // Path to profile image
  name: string;              // Person's name
  role: string;              // Their role/title
  subtitle?: string;         // Optional additional info
}
```

**Usage:**
```tsx
import PictureCard from '../../components/PictureCard';

<PictureCard
  imageSrc="/assets/images/chapters/national/people/JackWilber.jpg"
  name="Jack Wilber"
  role="Executive Director"
  subtitle="Optional additional title"  // Optional
/>
```

**Visual Characteristics:**
- Centered layout
- Circular profile image (32x32 size)
- Name, role, and optional subtitle
- White card with subtle shadow

**Best Practices:**
- Use in grid layouts (typically 2-5 columns)
- Profile images should be square (will be cropped to circle)
- Keep role titles concise
- Use subtitle only when necessary for additional context

---

## Layout Components

### Header

**Purpose:** Site-wide navigation header.

**Location:** `src/components/Header.tsx`

**Features:**
- Responsive navigation menu
- Chapter dropdown
- Mobile-friendly hamburger menu
- Consistent across all pages

---

### Footer

**Purpose:** Site-wide footer with links and information.

**Location:** `src/components/Footer.tsx`

**Features:**
- Social media links
- Navigation links
- Copyright information
- Consistent across all pages

---

### PhotoCarousel

**Purpose:** Display image galleries with automatic rotation.

**Location:** `src/components/PhotoCarousel.tsx`

**Props:**
```tsx
interface PhotoCarouselProps {
  images: string[];              // Array of image paths
  title?: string;                // Optional title
  subtitle?: string;             // Optional subtitle
  autoPlayInterval?: number;     // Milliseconds between slides (default: 5000)
}
```

**Usage:**
```tsx
import PhotoCarousel from '../../components/PhotoCarousel';

const galleryImages = [
  '/assets/images/chapters/rose-hulman/photos/gallery-1.jpg',
  '/assets/images/chapters/rose-hulman/photos/gallery-2.jpg',
  '/assets/images/chapters/rose-hulman/photos/gallery-3.jpg',
];

<PhotoCarousel
  images={galleryImages}
  title="Our Chapter in Action"
  subtitle="See our team making an impact"
  autoPlayInterval={5000}
/>
```

---

### ChapterDropdown

**Purpose:** Navigation dropdown for switching between chapters.

**Location:** `src/components/ChapterDropdown.tsx`

**Features:**
- Lists all active chapters
- Automatic navigation
- Mobile-friendly

---

### StatsGrid

**Purpose:** Display chapter statistics in a grid layout.

**Location:** `src/components/StatsGrid.tsx`

**Props:**
```tsx
interface StatsGridProps {
  chapterId: string;         // Chapter identifier (e.g., "national", "rose-hulman")
  colorClass: string;        // Color for stat numbers (use BRAND_COLORS)
  columns?: number;          // Number of columns (2, 3, or 4)
}
```

**Usage:**
```tsx
import StatsGrid from '../../components/StatsGrid';
import { BRAND_COLORS } from '../../utils/brandColors';

<StatsGrid
  chapterId="national"
  colorClass="text-blue-600"  // Or use BRAND_COLORS constant
  columns={4}
/>
```

**Best Practices:**
- Use consistent colors per chapter
- Typically use 3-4 columns on desktop
- Data comes from `src/data/chapterStats.json`

---

## Component Selection Guide

### When to Use FeatureCard vs InfoCard

**Use FeatureCard when:**
- ✅ Displaying 3-6 items in a grid
- ✅ Content is concise (1-2 sentences)
- ✅ Visual hierarchy emphasizes icons
- ✅ Space is limited
- ✅ Examples: Values, features, benefits

**Use InfoCard when:**
- ✅ Displaying detailed processes or steps
- ✅ Content is longer (2-4 sentences)
- ✅ Reading flow is important
- ✅ Items are stacked vertically
- ✅ Examples: How it works, services, detailed explanations

### Card Component Decision Tree

```
Do you need to display information in cards?
│
├─ Is it a person with a photo?
│  └─ Use PictureCard
│
├─ Is it features/values in a grid?
│  └─ Use FeatureCard
│
└─ Is it detailed steps/processes in a list?
   └─ Use InfoCard
```

---

## Best Practices Summary

### Brand Colors
- ✅ Always use `BinaryHeartText` component for organization name
- ✅ Always use `BRAND_COLORS` constants for colors
- ✅ Use Binary colors (red) for donate/contribution CTAs
- ✅ Use Heart colors (blue) for join/volunteer CTAs
- ❌ Never hardcode hex values like `#FF0040` directly

### Component Usage
- ✅ Reuse existing components whenever possible
- ✅ Follow existing patterns for consistency
- ✅ Use the right component for the use case
- ❌ Don't duplicate component code across pages

### Code Organization
- ✅ Import components at the top of files
- ✅ Use TypeScript interfaces for props
- ✅ Keep components focused and single-purpose
- ✅ Document complex components

### Styling
- ✅ Use Tailwind utility classes
- ✅ Follow mobile-first responsive design
- ✅ Maintain consistent spacing (multiples of 4)
- ✅ Use the project's established design patterns

---

## Creating New Components

When creating a new reusable component:

1. **Check if similar component exists** - Don't duplicate functionality
2. **Create TypeScript interface** - Define clear prop types
3. **Use consistent naming** - Follow existing component names (e.g., *Card, *Grid)
4. **Document the component** - Add it to this guide
5. **Test thoroughly** - Ensure it works in all use cases
6. **Update copilot instructions** - Add patterns to `.github/copilot-instructions.md`

**Example Component Template:**
```tsx
interface MyComponentProps {
  title: string;
  description: string;
  // ... other props
}

export default function MyComponent({ title, description }: MyComponentProps) {
  return (
    <div className="rounded-2xl bg-white/80 backdrop-blur-sm p-6 shadow-lg ring-1 ring-gray-900/5">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
```

---

## Questions?

If you need help with components:
- Review existing usage in `src/pages/` directories
- Check the [Contributing Guide](./CONTRIBUTING.md)
- Open an issue on GitHub
- Contact the development team

---

© 2025 BinaryHeart™. All Rights Reserved.
