# Deploying to GitHub Pages

This site is configured to automatically deploy to GitHub Pages.

## Automatic Deployment (Recommended)

The site will automatically deploy when you push to the `main` branch using GitHub Actions.

### Setup Steps:

1. **Enable GitHub Pages in your repository:**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under "Build and deployment":
     - Source: Select **GitHub Actions**

2. **Push your code:**
   ```bash
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git push origin main
   ```

3. **Wait for deployment:**
   - Go to the **Actions** tab in your repository
   - Watch the deployment workflow run
   - Once complete, your site will be live at:
     `https://binaryheartus.github.io/BinaryHeartBetaSites/`

## Manual Deployment (Alternative)

If you prefer to deploy manually:

1. **Install the gh-pages package:**
   ```bash
   npm install
   ```

2. **Deploy:**
   ```bash
   npm run deploy
   ```

This will build the site and push it to the `gh-pages` branch.

## Configuration Files

The following files have been configured for GitHub Pages:

- **`vite.config.ts`**: Sets the base URL to `/BinaryHeartBetaSites/`
- **`package.json`**: Includes homepage URL and deploy scripts
- **`.github/workflows/deploy.yml`**: GitHub Actions workflow for automatic deployment

## Troubleshooting

### Blank page or 404 errors
- Make sure GitHub Pages is enabled in repository settings
- Verify the base URL matches your repository name
- Check that the source is set to "GitHub Actions"

### Assets not loading
- Ensure all asset paths start with `/` (e.g., `/assets/images/...`)
- The base URL in `vite.config.ts` should match your repo name

### Changes not appearing
- Check the Actions tab for deployment status
- Clear your browser cache
- Wait a few minutes for CDN propagation

## Local Development

To run locally:
```bash
npm install
npm run dev
```

The site will be available at `http://localhost:5173`
