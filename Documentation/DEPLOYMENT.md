# Deploying to GitHub Pages

This site is configured to automatically deploy to GitHub Pages using GitHub Actions.

## Automatic Deployment (Recommended)

The site will automatically deploy when you push to the `main` branch.

### How It Works

1. **Push changes to main branch:**
   ```bash
   git add .
   git commit -m "Your descriptive commit message"
   git push origin main
   ```

2. **GitHub Actions automatically:**
   - Runs the build process
   - Runs linting and checks
   - Deploys to GitHub Pages

3. **Monitor deployment:**
   - Go to the **Actions** tab in your repository
   - Watch the deployment workflow run
   - Once complete, your site will be live at: `https://binaryheart.org`

### First Time Setup

If deploying for the first time:

1. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under "Build and deployment":
     - **Source:** Select **GitHub Actions**

2. **Push your code:**
   ```bash
   git push origin main
   ```

## Manual Deployment (Alternative)

If you need to deploy manually:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build and deploy:**
   ```bash
   npm run deploy
   ```

This will build the site and push it to the `gh-pages` branch.

**Note:** Manual deployment is rarely needed since automatic deployment is configured.

## Deployment Configuration

The deployment is configured in:
- **`.github/workflows/deploy.yml`** - GitHub Actions workflow
- **`vite.config.ts`** - Build configuration
- **`package.json`** - Project scripts and homepage URL

## Troubleshooting

### Direct URL Navigation (404 errors)
This site uses React Router for client-side routing. To handle direct URL navigation on GitHub Pages:
- **`public/404.html`** - Redirects 404s back to index.html with the route preserved
- **`index.html`** - Contains script to restore the correct route from the redirect

This allows users to directly visit routes like `/about` or `/purdue/donate` without getting a 404.

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
