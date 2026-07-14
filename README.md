# Portfolio

A full-stack personal portfolio: a React/TypeScript client backed by an Express/MongoDB API, with images hosted on Cloudinary.

**Live site:** https://dtcoops.github.io/portfolio/
## Note on load times

The API is hosted on Render's free tier, which spins down after inactivity. The first request after idle time can take 20–30 seconds to respond — the client shows a loading state to cover this gap.

## Running locally

**Server:**
```bash
cd server
npm install
npm run dev
```
Requires a `.env` file — see `server/.env.example` for required variables.

**Client:**
```bash
cd client
npm install
npm run dev
```

The client expects the server running locally (default `http://localhost:4000`) via the `VITE_API_URL` environment variable — see `client/.env.example`.


## Structure

This is a monorepo with two independently deployed parts:

```
portfolio/
├── client/   → React + TypeScript + Vite SPA — deployed to GitHub Pages
└── server/   → Express + MongoDB API — deployed to Render
```

## Stack

- **Client:** React, TypeScript, Vite, CSS Modules
- **Server:** Node.js, Express, TypeScript
- **Database:** MongoDB Atlas (Mongoose)
- **Images:** Cloudinary
- **Deployment:** GitHub Pages (client), Render (server)

## Notes

- This project started as a static, frontend-only site (data bundled directly into the client) and was later rebuilt into this client/server architecture as a way to practice backend development.
- Project data is seeded into MongoDB via `server/src/scripts/populateDb.ts`, rather than being edited directly in the client.