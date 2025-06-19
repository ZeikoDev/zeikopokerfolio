<img width="1800" alt="Screenshot 2025-06-16 at 01 38 18" src="https://github.com/user-attachments/assets/0c733ac7-a4b3-448b-9cb8-486e26fead7d" />

# Zeiko Pokerfolio

A modern, poker-themed full-stack developer portfolio built with Astro.js. This portfolio showcases development skills through an engaging poker-inspired design, featuring smooth animations, interactive elements, and a responsive layout.

## Features

- 🌐 **Multilanguage support (i18n)**: English and Spanish, with easy extensibility for more languages
- 🗂️ **Dynamic routing per language**: All main pages and project details are available under `/en/` and `/es/` paths
- 🎮 Poker-themed design elements and animations
- 📱 Fully responsive layout
- ⚡ Built with Astro.js for optimal performance
- 🎯 Smooth scroll navigation
- 🎴 Interactive poker card components
- 📊 Skills visualization with poker hands
- 📝 Contact form with poker-themed elements

## Tech Stack

- [Astro.js](https://astro.build) - Static site generation
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS
- [TypeScript](https://www.typescriptlang.org) - Type safety
- [View Transitions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API) - Smooth page transitions

## Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/zeiko-pokerfolio.git
   cd zeiko-pokerfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:4321](http://localhost:4321) in your browser.

### Building for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

## Project Structure

```
zeiko-pokerfolio/
├── public/                      # Static assets (images, SVGs, etc.)
│   └── assets/projects/         # Project screenshots and images
├── src/
│   ├── components/              # UI and section components
│   │   ├── layout/              # Layout components (Navbar, etc.)
│   │   ├── sections/            # Main page sections (Hero, About, Projects, etc.)
│   │   └── ui/buttons/          # Reusable button components
│   ├── data/                    # Project and personal project data sources
│   │   ├── projects.ts
│   │   └── personalProjects.ts
│   ├── i18n/                    # Internationalization (i18n) utilities and translations
│   │   ├── ui.json              # UI text translations
│   │   ├── utils.ts             # i18n helper functions
│   │   └── types.ts             # Type definitions for i18n
│   ├── layouts/                 # Page layout wrappers
│   │   └── Layout.astro
│   └── pages/                   # Page routes (multilanguage)
│       ├── index.astro          # Root: client-side language redirect
│       └── [lang]/              # Dynamic language folder (en, es, ...)
│           ├── index.astro      # Home page per language
│           └── proyectos/       # Project detail pages per language
│               ├── itm.astro
│               ├── discotek.astro
│               ├── easylife.astro
│               ├── inventory-dashboard.astro
│               └── patient-management-system.astro
├── astro.config.mjs             # Astro configuration
├── tailwind.config.mjs          # Tailwind configuration
└── package.json
```

## Internationalization (i18n)

- The site supports multiple languages using a dynamic `[lang]` route in `src/pages/[lang]/`.
- All main pages and project details are available under `/en/` and `/es/` (e.g., `/en/proyectos/itm`, `/es/proyectos/itm`).
- UI text is managed in `src/i18n/ui.json` and accessed via helper functions in `src/i18n/utils.ts`.
- The root `index.astro` performs a client-side redirect to the user's preferred language based on their browser settings.
- To add a new language, add translations to `ui.json` and create the corresponding `[lang]` folder structure.

### Example Routes

- `/en` - Home page in English
- `/es` - Home page in Spanish
- `/en/proyectos/itm` - ITM project detail in English
- `/es/proyectos/itm` - ITM project detail in Spanish

## Customization

### Colors

The color scheme can be customized in `tailwind.config.mjs`. The current theme uses:

- Deep navy backgrounds
- Electric blue accents
- White/light gray text

### Content

Update the content in the respective component files:

- `Hero.astro` - Main headline and tagline
- `About.astro` - Personal information and skills
- `Skills.astro` - Technical skills and expertise
- `Projects.astro` - Portfolio projects
- `PersonalProjects.astro` - Personal projects
- `Contact.astro` - Contact information and form

## Development

### Available Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Design elements inspired by modern web trends
- Icons from various open-source icon sets
