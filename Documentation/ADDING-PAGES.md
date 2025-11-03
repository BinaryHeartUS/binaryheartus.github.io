# Adding New Pages

This guide explains how to add new pages to the BinaryHeart website.

## Overview

The website uses React Router for navigation. Pages are React components located in `src/pages/` and routes are defined in `src/App.tsx`.

## Steps to Add a New Page

### Step 1: Create the Page Component

1. **Create a new file** in `src/pages/`:
   ```
   src/pages/YourPageName.tsx
   ```

2. **Basic page template:**
   ```tsx
   export default function YourPageName() {
     return (
       <main className="grow relative z-10">
         {/* Hero Section */}
         <div className="py-12 sm:py-16">
           <div className="mx-auto max-w-7xl px-6 lg:px-8">
             <div className="mx-auto max-w-2xl text-center">
               <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                 Page Title
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
           </div>
         </div>
       </main>
     );
   }
   ```

### Step 2: Add Route to App.tsx

1. **Open** `src/App.tsx`

2. **Import your new page** at the top:
   ```tsx
   import YourPageName from './pages/YourPageName';
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

2. **Add link to desktop navigation:**
   ```tsx
   <a href="/your-page" className="text-sm/6 font-semibold text-gray-900">
     Your Page
   </a>
   ```

3. **Add link to mobile navigation:**
   ```tsx
   <a
     href="/your-page"
     className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
     onClick={() => setMobileMenuOpen(false)}
   >
     Your Page
   </a>
   ```

### Step 4: Test Your Page

1. **Start the dev server:**
   ```bash
   npm run dev
   ```

2. **Navigate to your page:**
   ```
   http://localhost:5173/your-page
   ```

3. **Test:**
   - Page loads correctly
   - Navigation works
   - Mobile responsive
   - No console errors

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
import chaptersData from '../data/chapters.json';
import chapterStats from '../data/chapterStats.json';

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

## Need Help?

Examples to reference:
- **Simple page:** `src/pages/Contact.tsx`
- **Complex layout:** `src/pages/Home.tsx`
- **Data integration:** `src/pages/About.tsx`
- **Multiple sections:** `src/pages/Join.tsx`

If you have questions:
- Review existing page components
- Check the React Router documentation
- Contact the development team
