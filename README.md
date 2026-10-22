# Abdul-Samad Owoseni — Portfolio

Personal portfolio site: a single-page site for a data analyst & data engineering
enthusiast, with a typewriter hero, scroll-reveal sections (experience, projects,
skills, certifications), and a downloadable CV.

**Live:** https://abdul-samad-portfolio-lilac.vercel.app

## Stack

- [React 19](https://react.dev) + [Vite 8](https://vitejs.dev), plain JavaScript
- No backend and no runtime dependencies beyond React
- Deployed on [Vercel](https://vercel.com) (project `abdul-samad-portfolio`)

## Development

```sh
npm install
npm run dev      # start dev server with HMR
npm run lint     # oxlint
npm run build    # production build to dist/
npm run preview  # serve the production build locally
```

## Editing content

All site content lives in [`src/data.js`](src/data.js) — profile, highlights,
stats, experience, projects, skills and certifications. To update the CV,
replace `public/Abdul-Samad_Owoseni_CV.pdf` (keep the filename).

Social/SEO metadata (Open Graph, Twitter card, JSON-LD) is in `index.html`;
the social share image is `public/og.jpg`.

## Deploying

From the project root:

```sh
npx vercel --prod
```

The directory is linked to the Vercel project via `.vercel/project.json`.
