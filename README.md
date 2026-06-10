# Leegality Frontend Assessment

This repository is a frontend assessment built with React and Vite. The app demonstrates a product listing and product detail views (including an image carousel, reviews, and basic state handling).

## Setup

- Install dependencies:

```bash
npm install
```

- Run development server:

```bash
npm run dev
```

- Build for production:

```bash
npm run build
```

The project uses Vite for development and bundling (see `package.json`).

## Assumptions

- Product data is fetched from `https://dummyjson.com` (used in `src/pages/ProductDetail.jsx`).
- This assessment targets modern browsers with ES module support.
- Basic global state tooling (`@reduxjs/toolkit`) is included but local state is used where appropriate for simplicity.

## Architectural decisions

- React + Vite: chosen for a fast developer experience and modern bundling.
- Routing: `react-router-dom` is used for navigation and route-based pages.
- State: `@reduxjs/toolkit` is available for global state; components use local state for fetch lifecycle and UI details like image index.
- Styling: SCSS files (in `src/components` and `src/pages`) for component-scoped styles.
- Components: small, focused components (e.g., `StarRating`, `ProductCard`, `FilterSidebar`) to keep the UI composable and testable.

## What I implemented (high level)

- Project scaffold with Vite, Redux and router.
- Product listing and `ProductDetail` page (fetches product by id). The detail page includes loading/error states, image pagination/carousel, and reviews rendering.
- Basic UI components and SCSS-based styling.

## Improvements if given more time

- Add unit and integration tests (Jest + React Testing Library).
- Add data caching / global fetching layer (RTK Query or React Query) to prevent redundant requests.
- Enhance accessibility (ARIA labels, keyboard carousel controls, focus management).
- Add image lazy-loading and responsive sources for performance.
- Add CI pipeline with linting, tests, and build checks.

## Quick verification

1. Start dev server:

```bash
npm run dev
```

2. Open the app in the browser and navigate the listing and product detail pages. The detail page is implemented in `src/pages/ProductDetail.jsx`.

## Commit notes

- Recent commits touching the product detail page:
  - `70bce1d` — app routing setup done of 2 pages
  - `fc36cfb` — project setup with vite + redux + router

---

If you want, I can: run the app locally, add tests, or expand the README with screenshots and more setup details.
README file containing:
Setup instructions
Assumptions made
Architectural decisions
Improvements if given more time

## Architectural Decisions

### Why Redux over local state?
Filters are stored in Redux store instead of component useState.
This means when I navigate to a product detail page and hits 
Back the filters are exactly as I left them, because Redux 
state survives navigation and Local useState would reset on unmount.

