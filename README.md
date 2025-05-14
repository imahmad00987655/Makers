# IonSite - Beautiful Animated React Website

A stunning, modern, and highly interactive website built with React, featuring beautiful animations and a responsive design.

## Features

- 💅 **Beautiful UI/UX Design**: Modern, clean design with attention to detail
- ✨ **Smooth Animations**: Using Framer Motion for fluid transitions and effects
- 📱 **Fully Responsive**: Looks great on all devices from mobile to desktop
- 🌗 **Dark & Light Sections**: Visually appealing contrasting sections
- 🔗 **React Router**: Client-side routing for smooth page transitions
- 🎨 **Styled Components**: Modular and maintainable CSS-in-JS styling
- 🧩 **Reusable Components**: Well-structured component architecture

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd react-animated-site
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   ├── layout/       # Layout components (Header, Footer, Layout)
│   └── ui/           # UI components (Button, Card, Section)
├── pages/            # Page components
├── styles/           # Global styles
├── hooks/            # Custom hooks
├── assets/           # Images, fonts, etc.
├── App.tsx           # Main App component
└── main.tsx          # Entry point
```

## Dependencies

- React & React DOM
- React Router DOM
- Framer Motion
- Styled Components
- React Icons

## License

This project is licensed under the MIT License - see the LICENSE file for details.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
