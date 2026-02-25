import { lazy, Suspense, type ComponentType } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import chaptersData from '../data/chapters.json';
import type { ChaptersData } from '../types/chapters';

// Eagerly load all chapter page modules using Vite's import.meta.glob
// This creates a mapping of paths to their lazy-loaded components
// Exclude national pages since they're statically imported in App.tsx
const pageModules = import.meta.glob(['../pages/*/*.tsx', '!../pages/national/*.tsx']);

/**
 * Dynamic router component that loads chapter pages based on URL parameters
 * Supports routes like /:chapter/:page where chapter is the slug (e.g., "iu", "nu")
 * and page is one of: home, about, contact, donate, join
 */
export default function ChapterRouter() {
  const { chapter: chapterSlug, page } = useParams<{ chapter: string; page?: string }>();
  
  // Validate that the chapter exists in chapters.json
  const chapters = chaptersData as ChaptersData;
  const allChapters = [...chapters.higherEducation, ...chapters.highSchool];
  
  const chapterExists = allChapters.some(ch => {
    const slug = new URL(ch.url).pathname.split('/').filter(Boolean)[0];
    return slug === chapterSlug;
  });
  
  if (!chapterExists) {
    // Chapter doesn't exist, redirect to national home
    return <Navigate to="/" replace />;
  }
  
  // Determine which page to load (default to Home if none specified)
  const pageName = page || 'home';
  
  // Validate page name against allowlist to prevent path traversal
  const ALLOWED_PAGES = ['home', 'about', 'contact', 'donate', 'join'] as const;
  if (!ALLOWED_PAGES.includes(pageName.toLowerCase() as typeof ALLOWED_PAGES[number])) {
    // Invalid page name, redirect to chapter home
    return <Navigate to={`/${chapterSlug}`} replace />;
  }
  
  // Capitalize first letter for component filename
  const componentName = pageName.charAt(0).toUpperCase() + pageName.slice(1);
  
  // Construct the module path
  const modulePath = `../pages/${chapterSlug}/${componentName}.tsx`;
  
  // Check if the module exists in our glob
  const moduleLoader = pageModules[modulePath];
  
  if (!moduleLoader || typeof moduleLoader !== 'function') {
    // Page doesn't exist or invalid module, redirect to chapter home
    console.error(`Page not found: ${chapterSlug}/${componentName}`);
    return <Navigate to={`/${chapterSlug}`} replace />;
  }
  
  // Create a lazy component from the module loader
  const ChapterPage = lazy(() => 
    moduleLoader().then((module: unknown) => {
      const typedModule = module as { default: ComponentType };
      return { default: typedModule.default };
    })
  );
  
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
          </div>
          <p className="mt-4 text-gray-600">Loading page...</p>
        </div>
      </div>
    }>
      <ChapterPage />
    </Suspense>
  );
}
