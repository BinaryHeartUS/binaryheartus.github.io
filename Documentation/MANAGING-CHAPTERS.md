# Managing Chapters

This guide explains how to add, update, and manage chapter information and statistics.

## Overview

Chapter data is stored in two JSON files located in `src/data/`:
- **`chapters.json`** - Chapter names, URLs, and icons
- **`chapterStats.json`** - Chapter statistics (device values, volunteers, hours)

## Adding a New Chapter

### Step 1: Create Chapter Page Folder

Create a new folder for the chapter's pages in `src/pages/`:

```
src/pages/
└── your-chapter/
    ├── Home.tsx
    ├── About.tsx
    ├── Contact.tsx
    ├── FAQ.tsx
    ├── Donate.tsx
    ├── Request.tsx
    └── Join.tsx
```

You can start with placeholder pages or create custom content immediately.

### Step 2: Add Chapter to `chapters.json`

Open `src/data/chapters.json` and add your chapter to the appropriate section:

**For Higher Education:**
```json
{
  "higherEducation": [
    {
      "name": "Your University",
      "shortName": "YU",
      "url": "https://yu.binaryheart.org",
      "icon": "/assets/images/chapters/yu/icon.svg"
    }
  ]
}
```

**For High School:**
```json
{
  "highSchool": [
    {
      "name": "Your High School",
      "shortName": "YHS",
      "url": "https://yhs.binaryheart.org",
      "icon": "/assets/images/chapters/yhs/icon.svg"
    }
  ]
}
```

### Step 2: Add Chapter Statistics

Open `src/data/chapterStats.json` and add an entry for your chapter:

```json
{
  "yu": {
    "chapterId": "yu",
    "name": "Your University",
    "devicesValue": 0,
    "volunteerCount": 0,
    "volunteerHours": 0
  }
}
```

**Important:** Use the same chapter ID (lowercase, hyphenated) in both files and as the folder name.

### Step 3: Add Chapter Statistics

Open `src/data/chapterStats.json` and add an entry for your chapter:

```json
{
  "yu": {
    "chapterId": "yu",
    "name": "Your University",
    "devicesValue": 0,
    "volunteerCount": 0,
    "volunteerHours": 0
  }
}
```

### Step 4: Add Routes to App.tsx

Open `src/App.tsx` and add imports and routes for your new chapter:

1. **Add imports** at the top:
```tsx
// YU pages
import YUHome from './pages/yu/Home';
import YUAbout from './pages/yu/About';
import YUContact from './pages/yu/Contact';
import YUFAQ from './pages/yu/FAQ';
import YUDonate from './pages/yu/Donate';
import YURequest from './pages/yu/Request';
import YUJoin from './pages/yu/Join';
```

2. **Add routes** in the Routes section:
```tsx
{/* YU Chapter routes */}
<Route path="/yu" element={<YUHome />} />
<Route path="/yu/about" element={<YUAbout />} />
<Route path="/yu/contact" element={<YUContact />} />
<Route path="/yu/faq" element={<YUFAQ />} />
<Route path="/yu/donate" element={<YUDonate />} />
<Route path="/yu/request" element={<YURequest />} />
<Route path="/yu/join" element={<YUJoin />} />
```

### Step 5: Create Image Folder

Create a folder for your chapter's images:

```
public/assets/images/chapters/
└── yu/
    ├── icon.svg
    └── people/
```

See [Image Management](./IMAGE-MANAGEMENT.md) for details on image requirements.

### Step 6: Test Locally

1. Start the development server: `npm run dev`
2. Check that the chapter appears in the dropdown menu
3. Navigate to the chapter's pages (e.g., `/yu`, `/yu/about`, etc.)
4. Verify the chapter statistics display correctly on the homepage
5. Test navigation between pages within the chapter

## Updating Chapter Information

### Updating Chapter Details

To update a chapter's name, URL, or icon path:

1. Open `src/data/chapters.json`
2. Find the chapter entry
3. Update the relevant fields
4. Save the file

**Example:**
```json
{
  "name": "Updated University Name",
  "shortName": "UUN",
  "url": "https://uun.binaryheart.org",
  "icon": "/assets/images/chapters/uun/icon.svg"
}
```

### Updating Chapter Statistics

To update chapter statistics:

1. Open `src/data/chapterStats.json`
2. Find the chapter by its ID
3. Update the fields:
   - `devicesValue` - Total dollar value of devices donated (as a number)
   - `volunteerCount` - Number of active volunteers
   - `volunteerHours` - Total volunteer hours contributed

**Example:**
```json
"nu": {
  "chapterId": "nu",
  "name": "Northwestern University",
  "devicesValue": 12000,
  "volunteerCount": 20,
  "volunteerHours": 450
}
```

**Note:** Don't use commas in numbers. Enter values as plain integers.

## Chapter Statistics on Homepage

The homepage automatically:
- Aggregates total device value across all chapters
- Counts total volunteers
- Calculates total volunteer hours
- Counts the number of active chapters
- Formats large numbers (e.g., 27000 → "27K")

**Important:** Do not include a "national" entry in `chapterStats.json`. The national statistics are automatically calculated from all chapter data.

## Chapter Naming Conventions

### Chapter ID (chapterId)
- **Format:** Lowercase, hyphenated
- **Examples:** `nu`, `purdue`, `rose-hulman`, `nt`
- Must be consistent across both JSON files

### Chapter Name
- **Format:** Full official name
- **Examples:** 
  - "Northwestern University"
  - "Rose-Hulman Institute of Technology"
  - "New Trier"

### Short Name
- **Format:** Abbreviation or short form
- **Examples:** "NU", "Purdue", "Rose-Hulman", "NT"
- Used in display where space is limited

## Removing a Chapter

To remove a chapter:

1. Remove the chapter's page folder from `src/pages/[chapter-id]/`
2. Remove the entry from `src/data/chapters.json`
3. Remove the entry from `src/data/chapterStats.json`
4. Remove the chapter's routes from `src/App.tsx` (both imports and Route elements)
5. (Optional) Delete the chapter's image folder from `public/assets/images/chapters/`

**Warning:** Ensure you're removing the correct chapter from all locations to avoid inconsistencies and broken routes.

## Common Issues

### Chapter not appearing in dropdown
- Verify the entry exists in `chapters.json`
- Check that the JSON syntax is valid (no missing commas/brackets)
- Ensure the icon path is correct

### Chapter pages showing 404 or wrong content
- Verify the page folder exists in `src/pages/[chapter-id]/`
- Check that routes are added to `src/App.tsx`
- Ensure component imports match the file names and paths
- Verify the URL path matches the chapter ID (e.g., `/purdue` for Purdue)

### Statistics not displaying
- Verify the entry exists in `chapterStats.json`
- Check that the `chapterId` matches between both files
- Ensure all values are numbers (not strings)

### Icon not loading
- Verify the icon file exists at the specified path
- Check that the path starts with `/assets/images/chapters/`
- Ensure the file extension matches (`.svg` recommended)

### Navigation not working between chapter pages
- Verify all routes are defined in `src/App.tsx`
- Check that the Header component uses `getNavLink` helper
- Ensure React Router `Link` components are used (not `<a>` tags)

## Testing Changes

After making changes:

1. **Local Testing:**
   ```bash
   npm run dev
   ```
   - Check the chapter dropdown in the header
   - Navigate to all chapter pages (Home, About, Contact, etc.)
   - Verify statistics on the homepage
   - Test navigation between pages within the chapter
   - Test chapter switching via dropdown
   - Test on mobile and desktop views

2. **Build Test:**
   ```bash
   npm run build
   npm run preview
   ```
   - Ensure no build errors
   - Test the production build
   - Verify all routes work correctly

3. **Deploy:**
   - Push changes to the appropriate branch
   - GitHub Actions will automatically deploy
   - Verify changes on the live site

## Need Help?

If you encounter issues:
- Check that both JSON files have valid syntax
- Verify all file paths are correct
- Ensure page folders and routes are properly set up in `src/App.tsx`
- Review the [Image Management](./IMAGE-MANAGEMENT.md) guide
- See [Adding Pages](./ADDING-PAGES.md) for page creation details
- Contact the development team
