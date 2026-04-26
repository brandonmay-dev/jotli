# Jotli

Jotli is a full-stack notes application built with the MERN stack. It allows users to create, view, update, and delete notes through a single-page interface powered by a REST API.

---

## Tech Stack

**Frontend**

- React 19 (Vite)
- React Router
- Axios
- Tailwind CSS
- DaisyUI
- Lucide Icons

**Backend**

- Node.js
- Express 5
- Mongoose

**Database**

- MongoDB Atlas

**Optional Infrastructure**

- Upstash Redis (rate limiting)

**Deployment**

- GitHub Pages (frontend)
- Render (backend)

---

## Features

- Create notes with title and content
- View all notes sorted by newest first
- Open a note detail page for editing
- Update and delete notes
- Graceful handling of missing data and network errors
- Optional API rate limiting

---

## Project Structure

```
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

---

## Local Development

### 1. Install dependencies

```bash
cd backend && npm install
cd ../frontend && npm install
```

---

### 2. Configure environment variables

Create `backend/.env`:

```
MONGO_URI=your_mongodb_connection_string
PORT=5001
```

Optional:

```
UPSTASH_REDIS_REST_URL=your_upstash_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_token
ENABLE_RATE_LIMITING=true
```

---

### 3. Start backend

```bash
cd backend
npm run dev
```

Runs on:
http://localhost:5001

---

### 4. Start frontend

```bash
cd frontend
npm run dev
```

The Vite dev server proxies `/api` to `http://localhost:5001`.

---

## API

Base URL:
http://localhost:5001/api

| Method | Endpoint   | Description    |
| ------ | ---------- | -------------- |
| GET    | /notes     | Get all notes  |
| GET    | /notes/:id | Get note by ID |
| POST   | /notes     | Create note    |
| PUT    | /notes/:id | Update note    |
| DELETE | /notes/:id | Delete note    |
| GET    | /          | Health check   |

---

## Frontend Configuration

- Uses `VITE_API_BASE_URL` if defined
- Falls back to `/api` during local development

---

## Deployment

### Frontend (GitHub Pages)

- Built using GitHub Actions
- Outputs to `frontend/dist`
- Deployed automatically

Set repository variable:

```
VITE_API_BASE_URL=https://your-backend-host/api
```

---

### Backend (Render)

Recommended settings:

- Root Directory: backend
- Build Command: npm install
- Start Command: npm start

Environment variables:

Required:

```
MONGO_URI
```

Optional:

```
UPSTASH_REDIS_REST_URL
UPSTASH_REDIS_REST_TOKEN
ENABLE_RATE_LIMITING=true
```

Ensure your MongoDB Atlas cluster allows connections from Render.

---

## Architecture

Jotli is deployed as two separate services:

- Static frontend hosted on GitHub Pages
- Backend API hosted on Render

This separation reduces frontend hosting costs while allowing scalable backend logic and optional Redis-based rate limiting.

---

## Future Improvements

- Authentication (JWT)
- User-specific notes
- Theme switching
- Rich text editor
- Search and pagination
