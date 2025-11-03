# Image Folder Structure

## Overview
The image assets are organized by chapter, with each chapter having its own folder containing the chapter icon and a people subfolder for leadership photos.

## Folder Structure

```
public/assets/images/
├── favicon.ico
└── chapters/
    ├── national/
    │   ├── icon.svg
    │   └── people/
    ├── nu/
    │   ├── icon.svg
    │   └── people/
    ├── iu/
    │   ├── icon.svg
    │   └── people/
    ├── purdue/
    │   ├── icon.svg
    │   └── people/
    ├── rose-hulman/
    │   ├── icon.svg
    │   └── people/
    └── nt/
        ├── icon.svg
        └── people/
```

## Chapter Folders

Each chapter has its own folder with:
- **icon.svg** - The chapter's logo/icon
- **people/** - Subfolder for leadership team photos

### Chapter Folder Names
- `national` - National/501(c)(3) organization
- `nu` - Northwestern University
- `iu` - Indiana University
- `purdue` - Purdue University
- `rose-hulman` - Rose-Hulman Institute of Technology
- `nt` - New Trier High School

## Adding Leadership Photos

To add leadership photos for a chapter:

1. Navigate to the chapter's people folder:
   ```
   public/assets/images/chapters/{chapter-name}/people/
   ```

2. Add images with descriptive names:
   ```
   john-doe.jpg
   jane-smith.jpg
   ```

3. Reference in code:
   ```tsx
   <img src="/assets/images/chapters/{chapter-name}/people/john-doe.jpg" alt="John Doe" />
   ```

## Icon Path References

The icon paths in `src/data/chapters.json` have been updated to:

```json
{
  "national": {
    "icon": "/assets/images/chapters/national/icon.svg"
  },
  "higherEducation": [
    {
      "shortName": "NU",
      "icon": "/assets/images/chapters/nu/icon.svg"
    },
    {
      "shortName": "IU",
      "icon": "/assets/images/chapters/iu/icon.svg"
    },
    {
      "shortName": "Purdue",
      "icon": "/assets/images/chapters/purdue/icon.svg"
    },
    {
      "shortName": "Rose-Hulman",
      "icon": "/assets/images/chapters/rose-hulman/icon.svg"
    }
  ],
  "highSchool": [
    {
      "shortName": "NT",
      "icon": "/assets/images/chapters/nt/icon.svg"
    }
  ]
}
```

## Best Practices

1. **Image Formats**: 
   - Use `.svg` for icons (scalable, smaller file size)
   - Use `.jpg` or `.webp` for photos (better compression)

2. **Naming Convention**:
   - Icons: `icon.svg`
   - People: `firstname-lastname.jpg` or `role-name.jpg`

3. **Image Sizes**:
   - Leadership photos: 400x400px or larger (square ratio)
   - Icons: Any size (SVG scales)

4. **File Organization**:
   - Keep all chapter-specific assets in the chapter's folder
   - Don't mix chapters - each chapter's assets stay in their own folder
