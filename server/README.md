# Server

Express + TypeScript API backing the portfolio client, using MongoDB Atlas for data and Cloudinary for images.

## Running locally

```bash
npm install
npm run dev
```

Requires a `.env` file — see `.env.example` for required variables.

## Scripts

- `npm run dev` — start the dev server with hot reload (tsx watch)
- `npm run build` — compile TypeScript to `dist/`
- `npm start` — run the compiled build (used in production/Render)

## Routes

### Public

- `GET /api/projects` — returns all projects

### Admin (require authentication)

- `POST /api/admin/login` — verify password, returns a signed JWT
- `POST /api/projects` — create a new project
- `PUT /api/projects/:id` — update an existing project
- `DELETE /api/projects/:id` — delete a project

Admin routes require an `Authorization: Bearer <token>` header, using a JWT obtained from `/api/admin/login`. Tokens expire after 2 hours.

## Data

Project data is seeded/migrated via `src/scripts/populateDb.ts`, which connects directly to Atlas and replaces all existing project documents with the contents of `src/scripts/seedData.ts` (or wherever your seed data currently lives). This is a manual step — there's currently no way to bulk-import data through the API itself.

## Notes

- Images are stored on Cloudinary; MongoDB only holds a URL reference. This avoids relying on Render's ephemeral filesystem for anything that needs to persist.
- The `Project` TypeScript type is duplicated between `client/src/types/Project.ts` and `server/src/types/Project.ts` rather than shared, to avoid cross-folder import complexity at this project's scale. Keep both in sync manually if the shape changes.