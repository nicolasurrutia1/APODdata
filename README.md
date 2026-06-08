# Astronomy Picture of the Day (APOD)

A React + Vite web app that displays NASA Astronomy Picture of the Day content.  
Browse random space media, view detailed information, and save your favorite items — persisted in the browser.

## Technologies Used

### Core

- React 19
- React DOM 19
- React Router DOM 7
- Zustand 5 (global state)
- Axios (NASA API client)
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

- `npm run dev` — Start development server
- `npm run build` — Build production files
- `npm run preview` — Preview production build locally
- `npm run lint` — Run ESLint

## App Usage

| Route | Page | Description |
| --- | --- | --- |
| `/` | Gallery | Browse 9 random APOD items. Use **Explore** to fetch a new batch. |
| `/favorites` | Favorites | View liked photos. Remove individual items or clear all. |
| `/info/:index` | Details | Full info for a photo from the current gallery batch. |
| `/favorites/info/:index` | Details | Full info for a photo from your favorites list. |

### Features

- **Random gallery** — Fetches 9 random APOD entries on load and on demand.
- **Like / Unlike** — Toggle favorites from any gallery card; duplicate URLs are ignored.
- **Toast feedback** — A brief notification confirms when a photo is added or removed.
- **Persistent favorites** — Liked photos are saved to `localStorage` and survive page reloads.
- **Video support** — Uses `thumbnail_url` when available (e.g. YouTube APOD entries).
- **Request cancellation** — In-flight API requests are aborted when a new fetch starts.
- **Error handling** — Failed requests show an error message with a **Retry** button.

## Architecture

### Folder Structure

```
src/
├── api/
│   └── axiosClient.js       # Pre-configured Axios instance for NASA APOD
├── components/
│   ├── ApodInitializer.jsx  # Triggers initial APOD fetch on app mount
│   ├── CardComponent.jsx    # Gallery card with Like/Info actions
│   ├── GalleryGrid.jsx      # Responsive grid of gallery items
│   ├── GalleryItem.jsx      # Resolves a single item from the APOD store
│   ├── LikeEffectComponent.jsx  # Toast notification for like/unlike
│   ├── LoadingComponent.jsx # Bouncing dots loading state
│   ├── Navbar.jsx           # Fixed top navigation
│   └── Photo.jsx            # Image display (thumbnail fallback for videos)
├── pages/
│   ├── GalleryPage.jsx      # Home — gallery + Explore button
│   ├── FavoritesPage.jsx    # Liked photos grid
│   └── InfoPage.jsx         # Detail view (gallery or favorites source)
├── stores/
│   ├── useApodStore.js      # APOD data, loading, error, refetch
│   └── useLikeStore.js      # Favorites with localStorage persistence
├── App.jsx                  # Router and layout
├── main.jsx                 # Entry point
└── index.css                # Tailwind imports + active nav styles
```

### State Management (Zustand)

Two Zustand stores replace the previous React Context setup:

#### `useApodStore`

- **State:** `data`, `loading`, `error`, `isRefetching`
- **Actions:** `fetchApod(isRefetching?)`, `reloadData()`
- Fetches from the NASA APOD API with `count=9` and `thumbs=true`
- Uses `AbortController` to cancel previous requests on refetch

#### `useLikeStore`

- **State:** `likedPhotos`
- **Actions:** `addLikedPhoto(photo)`, `removeLikedPhoto(photoUrl)`, `clearLikedPhotos()`
- Persisted to `localStorage` under the key `apod-likes` via Zustand's `persist` middleware
- Prevents duplicate entries by comparing photo URLs

### API Layer

`src/api/axiosClient.js` exports a pre-configured Axios instance:

- **Base URL:** `https://api.nasa.gov/planetary/apod`
- **Timeout:** 15 seconds
- **Query params** (set in the store): `api_key`, `count=9`, `thumbs=true`

### Component Hierarchy

```
main.jsx
└── ApodInitializer          # calls fetchApod() on mount
    └── App
        ├── Navbar
        └── Routes
            ├── GalleryPage
            │   └── GalleryGrid
            │       └── GalleryItem
            │           └── CardComponent
            │               ├── Photo
            │               └── LikeEffectComponent
            ├── FavoritesPage
            │   └── Photo (per liked item)
            └── InfoPage
```

### Routing Notes

- `InfoPage` detects its data source from the URL: gallery items use `useApodStore`, favorites use `useLikeStore`.
- Active nav links use Tailwind's `.active` class (underline) via React Router's `NavLink`.
- `FavoritesPage` is wrapped with `memo()` to reduce unnecessary re-renders.

## Data Source

- NASA APOD API: [https://api.nasa.gov/planetary/apod](https://api.nasa.gov/planetary/apod)
