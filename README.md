# Zeiko Pokerfolio

A modern, poker-themed full-stack developer portfolio built with Astro.js. This portfolio showcases development skills through an engaging poker-inspired design, featuring smooth animations, interactive elements, and a responsive layout.

## Features

- 🎮 Poker-themed design elements and animations
- 🌙 Dark mode optimized with deep blue gradients
- 📱 Fully responsive layout
- ⚡ Built with Astro.js for optimal performance
- 🎨 Modern UI with glass morphism effects
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
├── public/              # Static assets
│   ├── poker-chip.svg
│   ├── github.svg
│   ├── linkedin.svg
│   └── noise.svg
├── src/
│   ├── components/      # Astro components
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Skills.astro
│   │   ├── Projects.astro
│   │   └── Contact.astro
│   ├── layouts/         # Layout components
│   │   └── Layout.astro
│   └── pages/          # Page components
│       └── index.astro
├── astro.config.mjs    # Astro configuration
├── tailwind.config.mjs # Tailwind configuration
└── package.json
```

## Customization

### Colors

The color scheme can be customized in `tailwind.config.mjs`. The current theme uses:

- Deep navy backgrounds
- Electric blue accents
- Gold poker chip elements
- White/light gray text

### Content

Update the content in the respective component files:

- `Hero.astro` - Main headline and tagline
- `About.astro` - Personal information and skills
- `Skills.astro` - Technical skills and expertise
- `Projects.astro` - Portfolio projects
- `Contact.astro` - Contact information and form

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Poker theme inspiration from various poker websites and games
- Design elements inspired by modern web trends
- Icons from various open-source icon sets

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
