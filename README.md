# Somewhere Website

A multi-page marketing website for **Somewhere** — a global talent sourcing and recruitment platform. Built with React, TypeScript, Tailwind CSS, and React Router.

## Pages

| Route                  | Page                        |
|------------------------|-----------------------------|
| `/`                    | Landing Page                |
| `/direct-hire`         | Direct Hire Service         |
| `/talent-on-demand`    | Talent On-Demand Service    |
| `/roles`               | Roles We Source (filterable)|
| `/pricing`             | Pricing                     |
| `/blog`                | Blog                        |
| `/hiring-philippines`  | Hiring in the Philippines   |
| `/savings`             | How Much You Can Save       |
| `/find-a-job`          | Find a Job (searchable)     |

## Tech Stack

- **React 18** + **TypeScript**
- **React Router v6** — client-side routing
- **Tailwind CSS v3** — utility-first styling
- **Vite** — fast dev server and bundler

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── CTABanner.tsx        # Reusable CTA button + subtext
│   ├── Footer.tsx           # Site footer with link columns
│   ├── Icons.tsx            # SVG icon components
│   ├── Layout.tsx           # Root layout with Navbar + Footer
│   ├── Navbar.tsx           # Top navigation with dropdowns
│   ├── ProcessSteps.tsx     # Numbered step cards (dark bg)
│   └── RoleCarousel.tsx     # Horizontal scrolling role cards
├── pages/
│   ├── LandingPage.tsx
│   ├── DirectHirePage.tsx
│   ├── TalentOnDemandPage.tsx
│   ├── RolesPage.tsx
│   ├── PricingPage.tsx
│   ├── BlogPage.tsx
│   ├── HiringPHPage.tsx
│   ├── SavingsPage.tsx
│   └── FindJobPage.tsx
├── App.tsx                  # Route definitions
├── main.tsx                 # Entry point with BrowserRouter
└── index.css                # Tailwind directives + global styles
```

## Design

- **Color palette:** Deep teal `#0c3c2d` primary, teal-600 accents, amber badges
- **Typography:** Playfair Display (display/headings), DM Sans (body)
- **Style:** Professional, clean, serif+sans pairing with generous whitespace
