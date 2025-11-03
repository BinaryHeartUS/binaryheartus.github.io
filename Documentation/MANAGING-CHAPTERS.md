# Managing Chapters

This guide explains how to add, update, and manage chapter information and statistics.

## Overview

Chapter data is stored in two JSON files located in `src/data/`:
- **`chapters.json`** - Chapter names, URLs, and icons
- **`chapterStats.json`** - Chapter statistics (device values, volunteers, hours)

## Adding a New Chapter

### Step 1: Add Chapter to `chapters.json`

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

**Important:** Use the same chapter ID (lowercase, hyphenated) in both files.

### Step 3: Create Image Folder

Create a folder for your chapter's images:

```
public/assets/images/chapters/
└── yu/
    ├── icon.svg
    └── people/
```

See [Image Management](./IMAGE-MANAGEMENT.md) for details on image requirements.

### Step 4: Test Locally

1. Start the development server: `npm run dev`
2. Check that the chapter appears in the dropdown menu
3. Verify the chapter statistics display correctly on the homepage

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

1. Remove the entry from `src/data/chapters.json`
2. Remove the entry from `src/data/chapterStats.json`
3. (Optional) Delete the chapter's image folder from `public/assets/images/chapters/`

**Warning:** Ensure you're removing the correct chapter from both files to avoid inconsistencies.

## Common Issues

### Chapter not appearing in dropdown
- Verify the entry exists in `chapters.json`
- Check that the JSON syntax is valid (no missing commas/brackets)
- Ensure the icon path is correct

### Statistics not displaying
- Verify the entry exists in `chapterStats.json`
- Check that the `chapterId` matches between both files
- Ensure all values are numbers (not strings)

### Icon not loading
- Verify the icon file exists at the specified path
- Check that the path starts with `/assets/images/chapters/`
- Ensure the file extension matches (`.svg` recommended)

## Testing Changes

After making changes:

1. **Local Testing:**
   ```bash
   npm run dev
   ```
   - Check the chapter dropdown in the header
   - Verify statistics on the homepage
   - Test on mobile and desktop views

2. **Build Test:**
   ```bash
   npm run build
   npm run preview
   ```
   - Ensure no build errors
   - Test the production build

3. **Deploy:**
   - Push changes to the `main` branch
   - GitHub Actions will automatically deploy
   - Verify changes on the live site

## Need Help?

If you encounter issues:
- Check that both JSON files have valid syntax
- Verify all file paths are correct
- Review the [Image Management](./IMAGE-MANAGEMENT.md) guide
- Contact the development team
