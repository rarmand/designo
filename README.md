# Frontend Mentor - Designo agency website solution

This is a solution to the [Designo agency website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/designo-multipage-website-G48K6rfUT). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Tech stack

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

### Built with

- Semantic HTML5 markup
- CSS custom properties
- SASS with BEM
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Development Roadmap

This project follows a mobile-first approach for building a responsive and scalable web application. The development process is planned with the following key steps:

### What is done?

1. Font **Jost** added via Google Fonts.
2. Internationalization.
3. App Routing.
4. Prepared project structure of files and folders.
5. SASS with CSS Modules and BEM.
6. Prettier.
7. Separated **notes** folder to save observations and conclusions.
8. Components divided to client-side group and server-side group.

#### Components ready-to-use:

All in version for mobile.

- HomePage
- Header
- Footer
- Overlay
- BlockLink
- ButtonLink

### Next Steps

1. Component Modularization

The current Home Page has been developed as a single view and will be refactored into smaller, reusable React components. This modularization improves code readability, maintainability, and enables easier feature additions or modifications in the future.

2. Testing

Once components are split, unit and integration tests will be added using Jest and React Testing Library to ensure component stability and regression prevention. Writing tests early ensures higher confidence when refactoring or extending the project.

3. Responsive Design Implementation

After having modular and tested components, responsive styles will be developed to support tablet and desktop screen sizes in addition to mobile. The project uses a mobile-first CSS approach to progressively enhance layouts for larger devices.

4. Styling Approach Considerations

Currently using BEM methodology with CSS Modules for styles, but exploring the option to migrate to Tailwind CSS for faster styling and utility-first approach. This migration would be considered only after stabilizing the existing codebase and test coverage.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
