# Mobile Responsiveness Guidelines

## Overview
This document outlines best practices for ensuring all pages in the Binary Heart website are mobile-ready and display correctly on devices of all sizes.

## Key Principles

### 1. Mobile-First Text Sizing
Always use responsive text classes that scale from mobile to desktop:

```tsx
// ❌ Bad - Fixed large text
<h1 className="text-5xl font-bold">

// ✅ Good - Responsive text
<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
```

### 2. Responsive Padding & Spacing
Use responsive padding that reduces on mobile:

```tsx
// ❌ Bad - Fixed large padding
<div className="p-8">

// ✅ Good - Responsive padding
<div className="p-4 sm:p-6 md:p-8">
```

### 3. Prevent Text Overflow
Always add word-breaking utilities to text elements:

```tsx
// ❌ Bad - Text can overflow
<h3 className="text-2xl font-semibold">Finance & Marketing Teams</h3>

// ✅ Good - Text wraps properly
<h3 className="text-lg sm:text-xl md:text-2xl font-semibold break-words">
  Finance & Marketing Teams
</h3>
```

### 4. Flexible Layouts
Use `min-w-0` and `flex-1` to prevent flex items from causing overflow:

```tsx
// ❌ Bad - Can cause overflow
<div className="flex items-start gap-6">
  <div className="flex-1">
    <h3>Long Title That Might Overflow</h3>
  </div>
</div>

// ✅ Good - Prevents overflow
<div className="flex items-start gap-3 sm:gap-4 md:gap-6">
  <div className="flex-1 min-w-0">
    <h3 className="break-words">Long Title That Might Overflow</h3>
  </div>
</div>
```

### 5. Responsive Icon Sizes
Scale icons from mobile to desktop:

```tsx
// ❌ Bad - Fixed icon size
<svg className="h-7 w-7">

// ✅ Good - Responsive icon size
<svg className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7">
```

### 6. Handle Long URLs & Social Media Handles
Use `break-all` for URLs that shouldn't break naturally:

```tsx
// ❌ Bad - Instagram handle can overflow
<a href="..." className="inline-flex items-center gap-2">
  <span>@binaryheartatiu</span>
</a>

// ✅ Good - Handle wraps properly
<a href="..." className="inline-flex items-center gap-2 break-all">
  <span className="break-all">@binaryheartatiu</span>
</a>
```

### 7. Stack Buttons on Mobile
Buttons should stack vertically on mobile:

```tsx
// ❌ Bad - Buttons might overflow
<div className="flex gap-4">
  <button>Long Button Text</button>
  <button>Another Long Button</button>
</div>

// ✅ Good - Stacks on mobile
<div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
  <button className="whitespace-nowrap">Long Button Text</button>
  <button className="whitespace-nowrap">Another Long Button</button>
</div>
```

## Common Components

### Cards
```tsx
<div className="relative rounded-2xl bg-white/80 backdrop-blur-sm p-4 sm:p-6 md:p-8 shadow-lg ring-1 ring-gray-900/5">
  <div className="flex items-start gap-3 sm:gap-4 md:gap-6">
    <div className="flex-shrink-0">
      <div className="flex h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 items-center justify-center rounded-xl bg-gradient-to-br ...">
        {/* Icon */}
      </div>
    </div>
    <div className="flex-1 min-w-0">
      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 break-words">
        Title
      </h3>
      <p className="text-sm sm:text-base text-gray-600 break-words">
        Description
      </p>
    </div>
  </div>
</div>
```

### Hero Sections
```tsx
<div className="mx-auto max-w-7xl px-4 sm:px-6 pb-8 sm:pb-12 pt-8 sm:pt-10 lg:px-8">
  <div className="mx-auto max-w-4xl text-center">
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6">
      Page Title
    </h1>
    <p className="text-base sm:text-lg md:text-xl leading-7 sm:leading-8 text-gray-700 mb-6 sm:mb-8 px-2">
      Description text
    </p>
  </div>
</div>
```

### Section Headers
```tsx
<div className="text-center mb-8 sm:mb-12">
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
    Section Title
  </h2>
  <p className="text-base sm:text-lg text-gray-600">
    Section description
  </p>
</div>
```

## Checklist for New Pages

When creating or updating pages, verify:

- [ ] All headings use responsive text classes (`text-3xl sm:text-4xl md:text-5xl`)
- [ ] All padding/margins are responsive (`p-4 sm:p-6 md:p-8`)
- [ ] Long text has `break-words` utility
- [ ] URLs/handles have `break-all` utility
- [ ] Icons scale responsively (`h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7`)
- [ ] Buttons stack on mobile (`flex-col sm:flex-row`)
- [ ] Flex containers use `gap-3 sm:gap-4 md:gap-6`
- [ ] Flex children that contain text use `min-w-0`
- [ ] Badges/pills use `whitespace-nowrap` and `flex-shrink-0`
- [ ] Container padding starts at `px-4 sm:px-6`

## Testing

Always test pages at these breakpoints:
- **Mobile**: 375px (iPhone SE)
- **Small Mobile**: 320px (older devices)
- **Tablet**: 768px (iPad)
- **Desktop**: 1024px+

Use browser DevTools responsive mode to verify text doesn't overflow at any breakpoint.

## Fixed Issues

The following components/pages have been updated for mobile responsiveness:
- ✅ `src/components/DepartmentCard.tsx`
- ✅ `src/components/FeatureCard.tsx`
- ✅ `src/pages/iu/Join.tsx`
- ✅ `src/index.css` (added overflow-x prevention)

## Remaining Work

Similar fixes should be applied to:
- All other chapter Join pages (nt, nu, purdue, rose-hulman, wp)
- About pages across all chapters
- Contact pages
- Donate pages
- Home pages
- National pages

Use the IU Join page as a reference implementation for proper mobile responsiveness.
