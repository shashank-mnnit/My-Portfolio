# Shashank's Portfolio

This is a modern UI/UX portfolio website built with React, Vite, and Tailwind CSS.

## Getting Started

1.  **Install Dependencies:**
    \\\ash
    npm install
    \\\`n
2.  **Run Development Server:**
    \\\ash
    npm run dev
    \\\`n
3.  **Build for Production:**
    \\\ash
    npm run build
    \\\`n
## Project Structure

-   \src/components\: Reusable UI components (Navbar, Hero, ProjectCard, etc.)
-   \src/pages\: Page components (Home)
-   \src/data\: Contains \projects.js\ where you can edit project details and profile information.
-   \src/index.css\: Global styles and Tailwind directives.

## Adding Images

Images have been added to the `src/assets` folder and are imported in `src/data/projects.js`.

To add more images:
1.  Place your project images in the `src/assets` folder.
2.  Import them in `src/data/projects.js`.
3.  Add the imported variable to the `image` property of the corresponding project.

## Customization

You can customize the colors and fonts in \	ailwind.config.js\.
The current theme uses:
-   Primary: Electric Blue (#5B84FF)
-   Secondary: Midnight Black (#0D0D0F)
-   Accent: Soft White (#F7F7F7)
