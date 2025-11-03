# Chapter Data Files

## chapterStats.json

This file contains statistical data for each BinaryHeart chapter. The data is automatically aggregated on the national homepage.

### Structure

Each chapter entry contains:
- `chapterId`: Unique identifier for the chapter
- `name`: Full chapter name
- `devicesValue`: Total dollar value of devices donated (in USD)
- `volunteerCount`: Number of active volunteers
- `volunteerHours`: Total volunteer hours contributed

### Example Entry

```json
"nu": {
  "chapterId": "nu",
  "name": "Northwestern University",
  "devicesValue": 8000,
  "volunteerCount": 15,
  "volunteerHours": 350
}
```

### Updating Stats

To update chapter statistics:

1. Open `chapterStats.json`
2. Find the chapter by its ID (e.g., "nu", "iu", "purdue", etc.)
3. Update the relevant fields:
   - `devicesValue`: Enter the dollar value as a number (no commas)
   - `volunteerCount`: Enter the total number of volunteers
   - `volunteerHours`: Enter the total hours contributed
4. Save the file

The homepage will automatically calculate and display:
- Total value of all devices donated
- Total number of volunteers across all chapters
- Number of active chapters (excludes "national")
- Total volunteer hours

### Adding a New Chapter

To add statistics for a new chapter:

1. Add a new entry to `chapterStats.json`:
```json
"chapter-id": {
  "chapterId": "chapter-id",
  "name": "Chapter Name",
  "devicesValue": 0,
  "volunteerCount": 0,
  "volunteerHours": 0
}
```

2. Make sure the chapter is also listed in `chapters.json`

### Notes

- All numbers are automatically formatted on the homepage (e.g., 27000 displays as "27K")
- Changes to this file will be reflected immediately on the homepage after a rebuild
- Do not include a "national" entry - the national stats are automatically aggregated from all chapter data
