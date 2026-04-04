# DermaQ Website

Dermatology website built with React + Vite.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Cloudflare Pages deploy

- Framework preset: `Vite`
- Build command: `npm run build`
- Build output directory: `dist`

This project includes `public/_redirects`:

```txt
/* /index.html 200
```

This ensures SPA routes work on refresh (for paths like `/about-us`, `/shop`, etc.).
