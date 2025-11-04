# Contributing Guidelines

Thank you for your interest in contributing to the BinaryHeart website! This document provides guidelines for contributing to the project.

## Getting Started

1. **Read the documentation:**
   - [Getting Started](./GETTING-STARTED.md) - Set up the development environment
   - [Components Guide](./COMPONENTS.md) - Learn about reusable components and brand colors
   - [Managing Chapters](./MANAGING-CHAPTERS.md) - Update chapter data
   - [Image Management](./IMAGE-MANAGEMENT.md) - Add/update images
   - [Adding Pages](./ADDING-PAGES.md) - Create new pages

2. **Set up your environment:**
   ```bash
   git clone https://github.com/BinaryHeartUS/binaryheartus.github.io.git
   cd binaryheartus.github.io
   npm install
   npm run dev
   ```

3. **Create a branch for your changes:**
   ```bash
   git checkout -b your-feature-name
   ```

## Development Workflow

### Making Changes

1. **Make your changes** in a feature branch
2. **Test locally** to ensure everything works
3. **Run the linter:**
   ```bash
   npm run lint
   ```
4. **Build and preview:**
   ```bash
   npm run build
   npm run preview
   ```

### Commit Messages

Use clear, descriptive commit messages:

**Good examples:**
```
Add Northwestern University chapter
Update chapter statistics for Q1 2025
Fix mobile navigation dropdown bug
Add FAQ page with common questions
Optimize images for faster loading
```

**Bad examples:**
```
Update
Fixed stuff
Changes
WIP
```

### Pull Requests

1. **Push your branch:**
   ```bash
   git push origin your-feature-name
   ```

2. **Create a pull request** on GitHub with:
   - Clear title describing the change
   - Description of what was changed and why
   - Screenshots (if applicable)
   - Testing steps

3. **Wait for review** and address any feedback

## Code Style

### TypeScript/React

- Use **functional components** with hooks
- Use **TypeScript** for type safety
- Follow **existing code patterns** in the project
- Keep components **focused and reusable**

**Example:**
```tsx
interface MyComponentProps {
  title: string;
  count: number;
}

export default function MyComponent({ title, count }: MyComponentProps) {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">{title}</h2>
      <p>Count: {count}</p>
    </div>
  );
}
```

### Styling with Tailwind

- Use **Tailwind utility classes**
- Follow **mobile-first** responsive design
- Use **consistent spacing** (multiples of 4: 4, 8, 12, 16)
- Reference **existing components** for patterns
- Use **BinaryHeart brand colors** via the `brandColors.ts` utility
- Always use **BinaryHeartText component** for the organization name

**Brand Colors Example:**
```tsx
import BinaryHeartText from '../../components/BinaryHeartText';
import { BRAND_COLORS, getBrandGradient } from '../../utils/brandColors';

// For organization name
<h1>Welcome to <BinaryHeartText /></h1>

// For brand-colored buttons
<button className={`bg-gradient-to-r ${BRAND_COLORS.BINARY_GRADIENT}`}>
  Donate Now
</button>
```

**Component Example:**
```tsx
<div className="rounded-2xl bg-white/80 backdrop-blur-sm p-6 shadow-lg ring-1 ring-gray-900/5">
  <h3 className="text-xl font-semibold text-gray-900 mb-4">Title</h3>
  <p className="text-gray-600">Content</p>
</div>
```

**See [Components Guide](./COMPONENTS.md) for detailed component documentation.**

### File Organization

```
src/
├── components/      # Reusable components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── BinaryHeartText.tsx    # Brand identity component
│   ├── FeatureCard.tsx        # Card for features/values
│   ├── InfoCard.tsx           # Card for detailed info
│   ├── PictureCard.tsx        # Card for team profiles
│   └── ...
├── pages/          # Page components (routes)
│   ├── Home.tsx
│   ├── About.tsx
│   └── ...
├── data/           # JSON data files
│   ├── chapters.json
│   └── chapterStats.json
└── utils/          # Utility functions
    ├── brandColors.ts         # Brand color constants
    └── ...
```

**See [Components Guide](./COMPONENTS.md) for component usage details.**

## Common Contribution Types

### 1. Updating Chapter Data

See [Managing Chapters](./MANAGING-CHAPTERS.md) for detailed instructions.

**Quick steps:**
1. Update `src/data/chapters.json` and/or `src/data/chapterStats.json`
2. Test locally
3. Commit and create a pull request

### 2. Adding Images

See [Image Management](./IMAGE-MANAGEMENT.md) for detailed instructions.

**Quick steps:**
1. Add images to appropriate folder in `public/assets/images/chapters/`
2. Update references in code or JSON files
3. Test that images load correctly
4. Commit and create a pull request

### 3. Fixing Bugs

1. **Identify the issue** - Describe the bug clearly
2. **Create a branch** - `git checkout -b fix-bug-description`
3. **Make the fix** - Change the minimum code necessary
4. **Test thoroughly** - Ensure the bug is fixed and nothing else broke
5. **Document** - Add comments if the fix is not obvious
6. **Create a pull request** - Describe the bug and how you fixed it

### 4. Adding Features

1. **Discuss first** - For significant features, open an issue to discuss
2. **Follow existing patterns** - Look at similar features in the codebase
3. **Keep it simple** - Don't over-engineer
4. **Document** - Update documentation as needed
5. **Test thoroughly** - Test on different screen sizes and browsers

## Testing

### Manual Testing

Test your changes on:
- ✅ **Desktop browsers** - Chrome, Firefox, Safari
- ✅ **Mobile devices** - iOS Safari, Android Chrome
- ✅ **Different screen sizes** - Mobile (375px), Tablet (768px), Desktop (1280px)

### Automated Testing

Run the linter before committing:
```bash
npm run lint
```

Build the project to catch any errors:
```bash
npm run build
```

## Documentation

If your changes require documentation updates:

1. **Update relevant documentation files** in `Documentation/`
2. **Keep documentation clear and concise**
3. **Include examples** where helpful
4. **Update the main README** if adding major features

## What NOT to Do

❌ **Don't commit directly to main** - Always use feature branches
❌ **Don't commit node_modules** - This is in `.gitignore`
❌ **Don't commit build files** - `dist/` is generated automatically
❌ **Don't hardcode sensitive data** - Use environment variables if needed
❌ **Don't ignore TypeScript errors** - Fix them or ask for help
❌ **Don't skip testing** - Always test your changes locally first

## Getting Help

If you need help:

1. **Check existing documentation** in the `Documentation/` folder
2. **Review similar code** in the project
3. **Open an issue** on GitHub with your question
4. **Contact the development team**

## Code Review Process

When you submit a pull request:

1. **Automatic checks** will run (linting, build)
2. **A team member will review** your code
3. **You may receive feedback** - This is normal and helpful!
4. **Make requested changes** if needed
5. **Your PR will be merged** once approved

## Recognition

Contributors will be:
- Listed in pull request history
- Mentioned in release notes (for significant contributions)
- Appreciated by the BinaryHeart community!

## Questions?

If you have questions about contributing:
- Open an issue on GitHub
- Contact the BinaryHeart development team
- Review the [Getting Started](./GETTING-STARTED.md) guide

Thank you for contributing to BinaryHeart! 💙
