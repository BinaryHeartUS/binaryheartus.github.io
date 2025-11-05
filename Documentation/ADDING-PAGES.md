# Adding New Pages

This guide explains how to add new pages to the BinaryHeart website.

## Before You Start

- **Read the [Components Guide](./COMPONENTS.md)** - Learn about reusable components and brand colors
- **Review existing pages** - Look at similar pages for patterns and styling
- **Use components** - Always use existing components instead of duplicating code

## Overview

The website uses React Router for navigation. Pages are React components located in `src/pages/` organized by chapter folders, and routes are defined in `src/App.tsx`.

## Folder Structure

Pages are organized by chapter:

```
src/pages/
├── national/      # National/501(c)(3) pages
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── FAQ.tsx
│   ├── Donate.tsx
│   ├── Request.tsx
│   └── Join.tsx
├── iu/            # Indiana University pages
├── purdue/        # Purdue University pages
├── nu/            # Northwestern University pages
├── nt/            # New Trier pages
└── rose-hulman/   # Rose-Hulman pages
```

Each chapter folder contains its own set of pages that are displayed when navigating to that chapter's routes.

## Steps to Add a New Page

### Option A: Adding a Page to an Existing Chapter

1. **Navigate to the chapter's folder** in `src/pages/`:
   ```
   src/pages/[chapter-name]/YourPageName.tsx
   ```
   Example: `src/pages/purdue/Events.tsx`

2. **Create the page component** using this template:
   ```tsx
   import BinaryHeartText from '../../components/BinaryHeartText';
   
   export default function YourPageName() {
     return (
       <main className="grow relative z-10">
         {/* Hero Section */}
         <div className="py-12 sm:py-16">
           <div className="mx-auto max-w-7xl px-6 lg:px-8">
             <div className="mx-auto max-w-2xl text-center">
               <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                 Page Title for <BinaryHeartText />
               </h1>
               <p className="mt-4 text-lg text-gray-600">
                 Page description
               </p>
             </div>
           </div>
         </div>

         {/* Content Section */}
         <div className="py-12 sm:py-16">
           <div className="mx-auto max-w-7xl px-6 lg:px-8">
             {/* Your content here */}
             {/* See Components Guide for reusable components */}
           </div>
         </div>
       </main>
     );
   }
   ```
   
   **Important:** Always use `BinaryHeartText` component when displaying the organization name. See [Components Guide](./COMPONENTS.md) for details.

3. **Add Route to App.tsx:**

   Open `src/App.tsx` and:
   
   a. **Import your new page** at the top (use appropriate chapter prefix):
   ```tsx
   // For Purdue chapter
   import PurdueEvents from './pages/purdue/Events';
   ```

   b. **Add a route** inside the appropriate chapter's routes section:
   ```tsx
   {/* Purdue Chapter routes */}
   <Route path="/purdue" element={<PurdueHome />} />
   <Route path="/purdue/about" element={<PurdueAbout />} />
   {/* Add your new route */}
   <Route path="/purdue/events" element={<PurdueEvents />} />
   ```

### Option B: Adding a Page to All Chapters

If you want to add the same page to all chapters (e.g., a new "Events" page):

1. **Create the page in each chapter folder:**
   ```
   src/pages/national/Events.tsx
   src/pages/iu/Events.tsx
   src/pages/purdue/Events.tsx
   src/pages/nu/Events.tsx
   src/pages/nt/Events.tsx
   src/pages/rose-hulman/Events.tsx
   ```

2. **Import all versions in App.tsx:**
   ```tsx
   // National
   import NationalEvents from './pages/national/Events';
   
   // IU
   import IUEvents from './pages/iu/Events';
   
   // Purdue
   import PurdueEvents from './pages/purdue/Events';
   
   // NU
   import NUEvents from './pages/nu/Events';
   
   // NT
   import NTEvents from './pages/nt/Events';
   
   // Rose-Hulman
   import RoseHulmanEvents from './pages/rose-hulman/Events';
   ```

3. **Add routes for each chapter:**
   ```tsx
   {/* National routes */}
   <Route path="/events" element={<NationalEvents />} />
   
   {/* IU Chapter routes */}
   <Route path="/iu/events" element={<IUEvents />} />
   
   {/* Purdue Chapter routes */}
   <Route path="/purdue/events" element={<PurdueEvents />} />
   
   {/* NU Chapter routes */}
   <Route path="/nu/events" element={<NUEvents />} />
   
   {/* NT Chapter routes */}
   <Route path="/nt/events" element={<NTEvents />} />
   
   {/* Rose-Hulman Chapter routes */}
   <Route path="/rose-hulman/events" element={<RoseHulmanEvents />} />
   ```

### Step 2: Add Route to App.tsx

1. **Open** `src/App.tsx`

2. **Import your new page** at the top:
   ```tsx
   import YourPageName from './pages/national/YourPageName';
   ```

3. **Add a route** inside the `<Routes>` component:
   ```tsx
   <Routes>
     {/* Existing routes */}
     <Route path="/" element={<Home />} />
     <Route path="/about" element={<About />} />
     
     {/* Your new route */}
     <Route path="/your-page" element={<YourPageName />} />
   </Routes>
   ```

### Step 3: Add Navigation Link (Optional)

To add the page to the header navigation:

1. **Open** `src/components/Header.tsx`

2. **Add link using the `getNavLink` helper function:**
   ```tsx
   <Link 
     to={getNavLink(currentChapter, 'events')}
     className="text-sm/6 font-semibold text-gray-900"
   >
     Events
   </Link>
   ```
   
   The `getNavLink` function automatically generates the correct path for the current chapter:
   - National: `/events`
   - Purdue: `/purdue/events`
   - NU: `/nu/events`
   - etc.

3. **For mobile navigation**, add the same pattern in the mobile menu section.

**Note:** The navigation is chapter-aware, so it will automatically route to the correct chapter's version of the page.

### Step 4: Test Your Page

1. **Start the dev server:**
   ```bash
   npm run dev
   ```

2. **Navigate to your page:**
   - National: `http://localhost:5173/your-page`
   - Purdue: `http://localhost:5173/purdue/your-page`
   - NU: `http://localhost:5173/nu/your-page`
   - etc.

3. **Test:**
   - Page loads correctly for each chapter
   - Navigation works and maintains chapter context
   - Mobile responsive
   - No console errors

## Chapter-Specific vs Shared Content

### When to Create Chapter-Specific Pages

Create separate pages for each chapter when:
- Content is unique to that chapter (e.g., local events, chapter-specific contact info)
- Different chapters need different layouts or features
- You want to customize the experience per chapter

### When to Use Shared Components

Consider creating shared components in `src/components/` for:
- Repeated UI elements across multiple pages
- Common functionality used by multiple chapters
- Reusable data visualization or charts

Example:
```tsx
// src/components/EventCard.tsx
export default function EventCard({ title, date, description }) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-lg">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-600">{date}</p>
      <p>{description}</p>
    </div>
  );
}
```

Then use it in any chapter's pages:
```tsx
import EventCard from '../../components/EventCard';
```

## Page Styling Guidelines

### Layout Structure

Use consistent layout patterns from existing pages:

```tsx
export default function YourPage() {
  return (
    <main className="grow relative z-10">
      {/* Hero/Title Section */}
      <div className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Centered title */}
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Page Title
            </h1>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Content */}
        </div>
      </div>
    </main>
  );
}
```

### Responsive Design

Always use Tailwind's responsive classes:

```tsx
// Mobile-first approach
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  {/* Items */}
</div>

// Text sizing
<h2 className="text-3xl font-bold sm:text-4xl">Title</h2>
<p className="text-base sm:text-lg">Paragraph</p>

// Padding/spacing
<div className="py-8 sm:py-12 lg:py-16">
  {/* Content */}
</div>
```

### Common Components

Use existing components for consistency:

```tsx
// Card style
<div className="rounded-2xl bg-white/80 backdrop-blur-sm p-6 shadow-lg ring-1 ring-gray-900/5">
  {/* Card content */}
</div>

// Button style
<a
  href="/link"
  className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500"
>
  Button Text
</a>

// Icon with text
<div className="flex items-center gap-2">
  <svg className="h-5 w-5 text-blue-600" /* ... */>
    {/* SVG path */}
  </svg>
  <span>Text</span>
</div>
```

## Using Data Files

If your page needs data from JSON files:

```tsx
import chaptersData from '../../data/chapters.json';
import chapterStats from '../../data/chapterStats.json';

export default function YourPage() {
  // Use the data
  const stats = chapterStats;
  
  return (
    <main className="grow relative z-10">
      {/* Use data in your JSX */}
    </main>
  );
}
```

**Note:** Import paths will be relative to your page's location. From a chapter folder, use `../../data/` to access data files.

## TypeScript Types

Define interfaces for complex data:

```tsx
interface YourDataType {
  id: string;
  name: string;
  value: number;
}

export default function YourPage() {
  const data: YourDataType[] = [
    { id: '1', name: 'Item 1', value: 100 },
    { id: '2', name: 'Item 2', value: 200 },
  ];

  return (
    <main className="grow relative z-10">
      {data.map((item) => (
        <div key={item.id}>
          {item.name}: {item.value}
        </div>
      ))}
    </main>
  );
}
```

## SEO Considerations

For better SEO, consider adding:

1. **Descriptive titles** - Use semantic heading hierarchy (h1, h2, h3)
2. **Meta descriptions** - Add to `index.html` or use a library like `react-helmet`
3. **Semantic HTML** - Use proper HTML5 elements (`<main>`, `<section>`, `<article>`)
4. **Alt text for images** - Always include descriptive alt attributes

## Common Patterns

### Grid Layout
```tsx
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  {items.map((item) => (
    <div key={item.id} className="rounded-lg bg-white p-6 shadow-lg">
      {/* Item content */}
    </div>
  ))}
</div>
```

### Hero Section
```tsx
<div className="py-12 sm:py-16">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl text-center">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Title
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Description
      </p>
    </div>
  </div>
</div>
```

### Call to Action
```tsx
<div className="rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 p-8 text-white shadow-xl">
  <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
  <p className="mb-6">Join us in making a difference.</p>
  <a
    href="/join"
    className="inline-block rounded-md bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-gray-100"
  >
    Get Started
  </a>
</div>
```

## Testing Checklist

Before deploying your new page:

- ✅ Page loads without errors
- ✅ All content displays correctly
- ✅ Navigation links work
- ✅ Mobile responsive (test on small screens)
- ✅ Images load correctly
- ✅ No TypeScript errors
- ✅ No ESLint warnings
- ✅ Consistent styling with other pages
- ✅ Accessible (proper heading hierarchy, alt text)
- ✅ **Brand colors used correctly** (via `BRAND_COLORS` utility)
- ✅ **BinaryHeartText component used** for organization name
- ✅ **Reusable components used** instead of duplicated code

## Component Usage Guidelines

When building your page content, use these reusable components:

### For Organization Name
✅ **Always use:** `<BinaryHeartText />`  
❌ **Never use:** Manual coloring with `text-[#FF0040]` or `text-[#2F4A70]`

### For Features/Values in Grids
Use `FeatureCard` component:
```tsx
import FeatureCard from '../../components/FeatureCard';

<FeatureCard
  icon={<svg>...</svg>}
  title="Feature Title"
  description="Feature description"
  gradientFrom="from-blue-500"
  gradientTo="to-indigo-600"
/>
```

### For Detailed Information Lists
Use `InfoCard` component:
```tsx
import InfoCard from '../../components/InfoCard';

<InfoCard
  icon={<svg>...</svg>}
  title="Info Title"
  description="Detailed description"
  bgColorClass="bg-blue-100"
  iconColorClass="text-blue-600"
/>
```

### For Team Member Profiles
Use `PictureCard` component:
```tsx
import PictureCard from '../../components/PictureCard';

<PictureCard
  imageSrc="/assets/images/chapters/chapter-name/people/PersonName.jpg"
  name="Person Name"
  role="Their Role"
  subtitle="Optional additional info"
/>
```

### For Brand Colors
```tsx
import { BRAND_COLORS, getBrandGradient } from '../../utils/brandColors';

// For text colors
<h2 className={BRAND_COLORS.BINARY_TEXT}>Donate</h2>

// For gradient backgrounds
<button className={`bg-gradient-to-r ${getBrandGradient('binary')}`}>
  Donate Now
</button>
```

**See [Components Guide](./COMPONENTS.md) for complete documentation.**

## Need Help?

Examples to reference:
- **Simple page:** `src/pages/national/Contact.tsx`
- **Complex layout:** `src/pages/national/Home.tsx`
- **Data integration:** `src/pages/national/About.tsx`
- **Multiple sections:** `src/pages/national/Join.tsx`
- **Chapter placeholder:** `src/pages/purdue/Home.tsx`
- **Component usage:** `src/pages/rose-hulman/About.tsx`

Documentation to review:
- **[Components Guide](./COMPONENTS.md)** - Component usage and brand colors
- **[Managing Chapters](./MANAGING-CHAPTERS.md)** - Adding new chapters
- **[Contributing](./CONTRIBUTING.md)** - Development guidelines

If you have questions:
- Review existing page components in chapter folders
- Check the [Components Guide](./COMPONENTS.md)
- Review the React Router documentation
- Review the `src/utils/urlHelpers.ts` for navigation utilities
- Contact the development team
