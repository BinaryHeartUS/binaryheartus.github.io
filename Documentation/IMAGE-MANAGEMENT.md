# Image Management

This guide explains how images are organized in the project and best practices for managing them.

## Image Organization

All images are stored in `public/assets/images/` and organized by chapter:

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
    └── [chapter-id]/
        ├── icon.svg
        └── people/
```

Each chapter folder contains:
- **`icon.svg`** - The chapter's logo/icon
- **`people/`** - Subfolder for leadership team photos

## Adding Chapter Images

### Adding a Chapter Icon

1. **Create the chapter folder** (if it doesn't exist):
   ```
   public/assets/images/chapters/[chapter-id]/
   ```

2. **Add the icon file:**
   - File name: `icon.svg`
   - Format: SVG (preferred) or PNG
   - Location: `public/assets/images/chapters/[chapter-id]/icon.svg`

3. **Update chapters.json:**
   ```json
   {
     "icon": "/assets/images/chapters/[chapter-id]/icon.svg"
   }
   ```

### Adding Leadership Photos

1. **Navigate to the chapter's people folder:**
   ```
   public/assets/images/chapters/[chapter-id]/people/
   ```

2. **Add images with descriptive names:**
   - Format: `firstname-lastname.jpg` or `role-name.jpg`
   - Examples:
     - `john-doe.jpg`
     - `jane-smith.jpg`
     - `president-name.jpg`

3. **Reference in code:**
   ```tsx
   <img 
     src="/assets/images/chapters/[chapter-id]/people/john-doe.jpg" 
     alt="John Doe" 
   />
   ```

## Image Specifications

### Chapter Icons
- **Format:** SVG (preferred for scalability)
- **Alternative:** PNG with transparent background
- **Dimensions:** Any size (SVG scales infinitely)
- **Size:** Keep under 50KB
- **Colors:** Should work on light backgrounds

### Leadership Photos
- **Format:** JPG or WebP (for better compression)
- **Dimensions:** 400x400px minimum (square ratio)
- **Size:** Keep under 200KB per image
- **Quality:** High resolution, professional appearance
- **Background:** Ideally consistent across team members

### General Guidelines
- **Optimization:** Compress images before adding them
- **Naming:** Use lowercase, hyphenated names (e.g., `john-doe.jpg`)
- **Accessibility:** Always provide descriptive alt text in code

## Image Path Structure

All image paths in the code should:
- **Start with `/`** to reference from the root: `/assets/images/...`
- **Use forward slashes** even on Windows: `/` not `\`
- **Be lowercase** for consistency

**Examples:**
```tsx
// Correct
src="/assets/images/chapters/nu/icon.svg"
src="/assets/images/chapters/nu/people/john-doe.jpg"

// Incorrect
src="assets/images/chapters/nu/icon.svg"    // Missing leading /
src="\assets\images\chapters\nu\icon.svg"   // Using backslashes
src="/assets/images/Chapters/NU/Icon.svg"  // Inconsistent casing
```

## Tools for Image Optimization

### For SVG Files
- [SVGOMG](https://jakearchibald.github.io/svgomg/) - Online SVG optimizer
- Remove unnecessary metadata and comments
- Simplify paths when possible

### For JPG/PNG Files
- [TinyPNG](https://tinypng.com/) - Online image compressor
- [ImageOptim](https://imageoptim.com/) - Mac application
- [Squoosh](https://squoosh.app/) - Web-based image optimizer

## Adding a New Chapter's Images

**Complete checklist:**

1. ✅ Create chapter folder: `public/assets/images/chapters/[chapter-id]/`
2. ✅ Add chapter icon: `icon.svg` (or `icon.png`)
3. ✅ Create people folder: `public/assets/images/chapters/[chapter-id]/people/`
4. ✅ Add leadership photos (if available)
5. ✅ Update `chapters.json` with correct icon path
6. ✅ Test locally to ensure images load correctly
7. ✅ Verify images on mobile and desktop views

## Common Issues

### Image not displaying
- ✅ Check that the file exists at the specified path
- ✅ Verify the path starts with `/` in the code
- ✅ Ensure file name matches exactly (case-sensitive)
- ✅ Check file extension matches (`.svg`, `.jpg`, `.png`)

### Images too large / slow loading
- ✅ Compress images before adding them
- ✅ Use appropriate formats (SVG for icons, JPG/WebP for photos)
- ✅ Resize photos to appropriate dimensions
- ✅ Target under 200KB per image

### Blurry images
- ✅ Use higher resolution source images
- ✅ Ensure minimum dimensions are met
- ✅ For icons, use SVG format for perfect scaling

## Updating Images

To replace an image:

1. **Keep the same filename** (or update references in code)
2. **Maintain the same dimensions/aspect ratio**
3. **Test locally** before deploying
4. **Clear browser cache** to see changes

## Best Practices

1. **Organize by chapter** - Keep all chapter assets in their respective folders
2. **Use descriptive names** - `john-doe.jpg` not `img1.jpg`
3. **Optimize before adding** - Compress images to reduce load times
4. **Test on multiple devices** - Verify images look good on mobile and desktop
5. **Provide alt text** - Always include descriptive alt attributes in code
6. **Version control** - Commit images with descriptive commit messages
7. **Consistent sizing** - Try to keep similar image types the same size

## Need Help?

If you encounter issues with images:
- Verify file paths match exactly
- Check file permissions
- Review browser console for error messages
- Contact the development team for assistance
