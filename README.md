# My First GitHub App

A modern, multi-page React application deployed on GitHub Pages.

## Features

- ✨ Modern, responsive UI design
- 📱 Multi-page navigation with React Router
- 🎯 Interactive click counter
- 📝 Contact form with validation
- 💾 Local storage persistence
- 🍔 Mobile-friendly hamburger menu
- 🚀 Automated deployment via GitHub Actions

## How to Deploy

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Update the base path** (if your repository name is different)

   Edit `vite.config.js` and change the `base` property to match your repository name:

   ```js
   base: '/your-repo-name/',
   ```

   Also update `src/App.jsx`:

   ```jsx
   <Router basename="/your-repo-name">
   ```

3. **Push your code to GitHub**

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

4. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - The workflow will automatically build and deploy your app

5. **Access your app**
   - After deployment, your app will be available at:
     `https://<your-username>.github.io/<repository-name>/`

## Local Development

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start the development server**

   ```bash
   npm run dev
   ```

3. **Build for production**

   ```bash
   npm run build
   ```

4. **Preview production build**
   ```bash
   npm run preview
   ```

## Project Structure

```
my-first-app/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/         # React components
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/              # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Features.jsx
│   │   └── Contact.jsx
│   ├── App.jsx             # Main App component
│   ├── main.jsx            # React entry point
│   └── index.css           # Global styles
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions workflow
├── vite.config.js          # Vite configuration
├── package.json            # Dependencies and scripts
└── README.md               # This file
```

## Pages

- **Home**: Interactive counter feature
- **About**: Information about the app and technologies used
- **Features**: Showcase of app capabilities
- **Contact**: Contact form and information

## Technologies Used

- React 18
- React Router DOM
- Vite
- GitHub Pages
- GitHub Actions

## License

MIT License - feel free to use this project as a starting point for your own!
