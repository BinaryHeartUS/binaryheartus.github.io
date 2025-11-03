# BinaryHeart React

A modern React application for BinaryHeart - a student-run 501(c)(3) nonprofit organization dedicated to bridging the digital divide through technology recycling and refurbishment.

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **React Router** for navigation

## Project Structure

```
src/
├── components/         # Reusable React components
│   ├── Header.tsx      # Main navigation header
│   ├── Footer.tsx      # Site footer
│   └── ChapterDropdown.tsx  # Dynamic chapter dropdown
├── pages/             # Page components
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── FAQ.tsx
│   ├── Donate.tsx
│   ├── Request.tsx
│   └── Join.tsx
├── data/              # JSON data files
│   └── chapters.json  # Chapter information
├── App.tsx            # Main app component with routing
├── main.tsx           # Application entry point
└── index.css          # Global styles and Tailwind imports

public/
└── assets/
    └── images/        # Static images and icons
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## Features

- ✅ Responsive design (mobile-first)
- ✅ Component-based architecture
- ✅ Dynamic chapter dropdown (loads from JSON)
- ✅ React Router for client-side navigation
- ✅ Tailwind CSS for consistent styling
- ✅ TypeScript for type safety

## Adding a New Chapter

Edit `src/data/chapters.json` and add your chapter to the appropriate section:

```json
{
  "higherEducation": [
    {
      "name": "Your University",
      "shortName": "YU",
      "url": "https://yu.binaryheart.org",
      "icon": "/assets/images/chapters/yu-icon.svg"
    }
  ]
}
```

The chapter dropdown will automatically update across all pages!

## License

© 2025 BinaryHeart™. All Rights Reserved.

