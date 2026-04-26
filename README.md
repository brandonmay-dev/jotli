# Jotli

Jotli is a full-stack notes application built with React, Express, and MongoDB. It lets users create, browse, edit, and delete notes through a clean single-page interface backed by a REST API.

## Stack

- Frontend: React 19, Vite, React Router, Axios, Tailwind CSS, DaisyUI, Lucide icons
- Backend: Node.js, Express 5, Mongoose
- Database: MongoDB Atlas
- Optional infrastructure: Upstash Redis for rate limiting
- Deployment: GitHub Pages for the frontend, Render for the backend

## Features

- Create notes with a title and content
- View all notes sorted by newest first
- Open a note detail page for editing
- Update or delete existing notes
- Handle missing notes and failed network requests gracefully
- Support optional request rate limiting in production

## Project Structure

```text
Jotli/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── lib/
│   │   └── pages/
│   └── package.json
└── .github/workflows/
```

## Local Development

### 1. Install dependencies

```bash
cd backend && npm install
cd ../frontend && npm install
```

### 2. Configure environment variables

Create `backend/.env` with:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5001
```

Optional backend environment variables:

```env
UPSTASH_REDIS_REST_URL=your_upstash_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_token
ENABLE_RATE_LIMITING=true
```

Notes:

- Rate limiting is disabled by default in local development
- If `ENABLE_RATE_LIMITING=true` is set without valid Upstash credentials, the API will continue without rate limiting

### 3. Start the backend

```bash
cd backend
npm run dev
```

The API runs on `http://localhost:5001`.

### 4. Start the frontend

Open a second terminal:

```bash
cd frontend
npm run dev
```

The Vite dev server proxies `/api` to `http://localhost:5001`, so the frontend can call the API without changing local URLs.

## API

Base URL in local development:

```text
http://localhost:5001/api
```

Available endpoints:

- `GET /notes` returns all notes
- `GET /notes/:id` returns one note by MongoDB id
- `POST /notes` creates a note
- `PUT /notes/:id` updates a note
- `DELETE /notes/:id` deletes a note
- `GET /` returns `{ "status": "ok" }` for backend health checks

## Frontend Configuration

The frontend API client uses:

- `VITE_API_BASE_URL` when it is defined
- `/api` as the fallback value

That means:

- local development works through the Vite proxy
- production can point to a hosted backend such as Render

## Deployment

### Frontend

The frontend is configured for GitHub Pages deployment through:

- `.github/workflows/deploy-pages.yml`
- `frontend/vite.config.js`

GitHub Actions builds `frontend/dist` and publishes it to Pages. The app uses hash-based routing so note routes work without server rewrites.

Set a repository variable in GitHub Actions before deploying:

```text
VITE_API_BASE_URL=https://your-backend-host/api
```

### Backend

The backend is designed to run as a separate web service on Render.

Recommended Render settings:

- Root Directory: `backend`
- Build Command: `npm install`
- Start Command: `npm start`

Required Render environment variables:

- `MONGO_URI`

Optional Render environment variables:

- `UPSTASH_REDIS_REST_URL`
- `UPSTASH_REDIS_REST_TOKEN`
- `ENABLE_RATE_LIMITING=true`

If you use MongoDB Atlas, make sure the Render service is allowed through Atlas network access.

## Scripts

### Backend

- `npm run dev` starts the API with `nodemon`
- `npm start` starts the API with Node

### Frontend

- `npm run dev` starts Vite
- `npm run build` creates a production build
- `npm run preview` previews the build locally
- `npm run lint` runs ESLint

## Current Architecture

Jotli is deployed as two separate apps:

- a static frontend on GitHub Pages
- a backend API on Render

That split keeps the frontend inexpensive to host while letting the backend manage MongoDB connections and optional Redis-backed rate limiting.
