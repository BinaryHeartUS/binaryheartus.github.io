# BinaryHeart Website

This repository contains the files and assets for the BinaryHeart website. Each chapter along with the national 501c3 has its own sections. Below are some instructions on how to start developing. Members, please reach out to your chapter leader on more info regarding contributions along with our pipeline.

## 🚀 Quick Start

```
First things first, create your branch with the format ----> file or section + subject + your name
For example, this file would be "readme-update-luke". Some other subjects are create or delete

You can then edit your code in that branch.
```

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

```
Ready to deploy to production?
Commit your code and create a PR. You can then request a review.
Once review is approved, you will be able to merge your PR which will update the production site with your changes.
Ask your chapter coordinator if you have any questions.
```


## 📚 Documentation

Comprehensive documentation is available in the [`Documentation/`](./Documentation) folder:

- **[Getting Started](./Documentation/GETTING-STARTED.md)** - Development setup and project overview
- **[Managing Chapters](./Documentation/MANAGING-CHAPTERS.md)** - Adding/updating chapter information and statistics.
- **[Image Management](./Documentation/IMAGE-MANAGEMENT.md)** - Image organization and best practices.
- **[Adding Pages](./Documentation/ADDING-PAGES.md)** - How to create new pages and routes
- **[Deployment](./Documentation/DEPLOYMENT.md)** - Deploying to GitHub Pages
- **[Contributing](./Documentation/CONTRIBUTING.md)** - Guidelines for contributing to the project and editing pages

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **React Router** for navigation

## 📁 High-Level Structure

```
├── Documentation/        # Project documentation <------ Instructions for editing various properties
├── public/              # Static assets (images, icons)
├── src/                 # Source code
│   ├── components/      # Reusable React components <------- One stop shop for developing pages from the ground up if you are new to this type of thing.
│   ├── pages/          # Page components
│   └── data/           # JSON data files
└── .github/            # GitHub Actions workflows <------ Do not touch this section unless instructed to do so.  
```

## 🌐 Live Site

Visit [binaryheart.org](binaryheartus.github.io) to see the live site. 

## 📄 License

© 2025 BinaryHeart™. All Rights Reserved.
