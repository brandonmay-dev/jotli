# Jotli Frontend

This frontend is configured for GitHub Pages deployment from the `jotli` repo.

## Before You Deploy

GitHub Pages can only host the static React app. The Express/MongoDB backend in `/backend` must be deployed somewhere else and exposed over HTTPS.

Create a production env file before building for Pages:

```bash
cp .env.production.example .env.production
```

Then update `VITE_API_BASE_URL` to your deployed backend URL, for example:

```env
VITE_API_BASE_URL=https://your-backend.example.com/api
```

## Local Development

```bash
npm install
npm run dev
```

The Vite dev server proxies `/api` requests to `http://localhost:5001`.

## GitHub Pages Deployment

```bash
npm install
npm run deploy
```

That builds the app with the GitHub Pages base path and publishes `dist/` to the `gh-pages` branch.

## Routing

The app uses `HashRouter` so note detail and create routes work on GitHub Pages without server-side rewrites.
