# Practice Next.js

A small practice project built with Next.js App Router to explore nested routes, dynamic routes, metadata, shared layouts, and simple API-driven pages.

This repo is mainly a hands-on playground for learning how route segments work in modern Next.js while keeping the UI clean with Tailwind CSS and daisyUI.

## Highlights

- App Router based project using `src/app`
- Shared top navigation through the root layout
- Nested route example with `/about/about2`
- Dashboard section with its own layout and sidebar
- Dynamic blog details route with route-based metadata
- Dynamic user details page powered by the JSONPlaceholder API
- Custom `not-found` page for missing routes
- Tailwind CSS v4 with daisyUI components
- React Compiler enabled in `next.config.mjs`

## Tech Stack

- Next.js `16.2.4`
- React `19.2.4`
- Tailwind CSS `4`
- daisyUI `5`
- ESLint `9`

## Pages and Routes

| Route | Description |
| --- | --- |
| `/` | Home page |
| `/about` | Basic about page |
| `/about/about2` | Nested about page |
| `/contact` | Contact page |
| `/blogs` | Blog listing page with local mock data |
| `/blogs/[blogId]` | Dynamic blog details page |
| `/users` | User listing page from external API |
| `/users/[userId]` | Dynamic user details page |
| `/dashboard` | Dashboard landing page |
| `/dashboard/profile` | Dashboard profile page |
| `/dashboard/revenue` | Dashboard revenue page |

## Project Structure

```text
src/
  app/
    about/
    blogs/
    contact/
    dashboard/
    users/
    error/
    not-found.js
    globals.css
    layout.js
    page.js
  component/
    navbar/
      Navbar.jsx
public/
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## What This Project Demonstrates

### Routing

The project shows how to work with:

- static routes
- nested routes
- dynamic routes
- route-specific metadata
- shared layouts

### Data Fetching

The `/users` and `/users/[userId]` pages fetch data from:

```text
https://jsonplaceholder.typicode.com/users
```

That makes this repo a useful starter for practicing server components and async page rendering.

## UI Notes

- Global styling lives in `src/app/globals.css`
- Navigation is handled by `src/component/navbar/Navbar.jsx`
- daisyUI is used for navbar, drawer, and button styling
- Blog and user pages use card-based layouts for practice with responsive design

## Learning Focus

This project is a good fit if you want to practice:

- Next.js file-based routing
- App Router layouts
- metadata APIs
- dynamic params
- simple API fetching
- Tailwind utility styling

## Notes

- Blog data is currently hardcoded for demo purposes
- User data depends on the JSONPlaceholder public API
- There are no automated tests configured yet

## License

This project is for learning and practice.
