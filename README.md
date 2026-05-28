# Astronomy Picture of the Day (APOD)

A React + Vite web app that displays NASA Astronomy Picture of the Day content.  
You can browse random space media, view detailed information, and save your favorite items.

## Technologies Used

### Core

- React 19
- React DOM 19
- React Router DOM 7
- PropTypes

### Build & Tooling

- Vite 6
- `@vitejs/plugin-react-swc`
- ES Modules (`"type": "module"`)

### Styling

- Tailwind CSS 4
- `@tailwindcss/vite`
- PostCSS
- Autoprefixer

### Code Quality

- ESLint 9
- `eslint-plugin-react`
- `eslint-plugin-react-hooks`
- `eslint-plugin-react-refresh`

## Prerequisites

- Node.js 18+ (recommended: latest LTS)
- npm 9+

## Getting Started

1. Clone the repository:

   ```bash
   git clone <your-repository-url>
   cd APODdata
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the project root and add your NASA API key:

   ```env
   VITE_API_KEY=your_nasa_api_key_here
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

## How to Use Your Own API Key

1. Get a NASA API key from [api.nasa.gov](https://api.nasa.gov/).
2. Create (or update) `.env` in the root folder.
3. Add your key using this exact variable name:

   ```env
   VITE_API_KEY=your_nasa_api_key_here
   ```

4. Restart the dev server after editing `.env`.

> Note: Variables exposed to the browser in Vite must start with `VITE_`.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production files
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## App Usage

- Home (`/`): Browse random APOD items.
- Favorites (`/favorites`): View the items you liked.
- Details (`/info/:index`): Read full information for a selected item.

## Data Source

- NASA APOD API: [https://api.nasa.gov/planetary/apod](https://api.nasa.gov/planetary/apod)
