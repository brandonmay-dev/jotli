# Jotli Frontend

This frontend is configured for GitHub Pages deployment from the `jotli` repo.

## Before You Deploy

GitHub Pages can only host the static React app. The Express/MongoDB backend in `/backend` must be deployed somewhere else and exposed over HTTPS.

Add a repository secret named `VITE_API_BASE_URL` in GitHub and set it to your deployed backend URL, for example `https://your-backend.example.com/api`.

## Local Development

```bash
npm install
npm run dev
```

The Vite dev server proxies `/api` requests to `http://localhost:5001`.

## GitHub Pages Deployment

GitHub Pages deployment is handled by the workflow in `.github/workflows/deploy-pages.yml`.

Once the repository secret is set, push to `main` and the workflow will:

1. Install frontend dependencies
2. Build the app with the GitHub Pages base path
3. Deploy `frontend/dist` to GitHub Pages

## Routing

The app uses `HashRouter` so note detail and create routes work on GitHub Pages without server-side rewrites.
