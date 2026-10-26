# Adarsh Raj — Developer Portfolio

A single-page editorial portfolio for Adarsh Raj, an Information Technology student at Narula Institute of Technology, built with React, Vite, Tailwind CSS, Motion, Lucide, and a React Three Fiber hero scene.

## Commands

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview  # preview the production build
```

## 3D hero

The hero's “Fig. 01 — Core” panel is a procedural Three.js scene (`src/components/hero/`): a faceted chrome core, three orbital rings, lime marker nodes, and sparse particles, lit by a locally generated studio environment. Pointer position drives a damped parallax rotation while the rings rotate slowly on their own.

- The scene is lazy-loaded as a separate chunk; the static technical diagram renders immediately and is also the fallback when WebGL is unavailable or `prefers-reduced-motion: reduce` is set.
- Rendering pauses (via `frameloop="demand"`) when the hero leaves the viewport.
- Mobile uses a lower DPR, fewer particles, and disables antialiasing; no external models, textures, or HDR files are loaded.
- The canvas is decorative (`aria-hidden`) and does not block page scrolling on touch devices.

Project previews also use a pointer-driven 3D tilt on fine-pointer devices (`TiltFrame.jsx`); tilt is disabled for touch and reduced-motion users. A thin lime scroll-progress line sits under the header.

## Personalize

Everything editable lives in `src/data/content.js`.

| What | Field |
| --- | --- |
| Name, initials, role | `profile.name`, `profile.initials`, `profile.role` |
| Email | `profile.email` |
| GitHub / LinkedIn | `profile.socials` |
| Location | `profile.location` |
| Availability line | `profile.availability` |
| Résumé | `profile.resumeUrl` and replace `public/Resume.pdf` |
| Projects | `projects` (titles, copy, stack, `repoUrl`, `liveUrl`, `liveLabel`, `demoHost`) |
| Education | `education` |
| Experience | `experience` — currently empty, with a commented example |
| Contact copy | `contact` |

### Résumé state

`profile.resumeUrl` is set to `/Resume.pdf`, served from `public/Resume.pdf`. Replace that file with an updated PDF while keeping the file name, or update the URL if you rename it.

If `profile.resumeUrl` is ever empty, the hero falls back to “View GitHub” and the contact section omits the Résumé card.

## Projects

The showcase renders three project-specific previews:

- **Applyzen** — résumé workspace with an A4 document, job-match panel, and tracker (`previews/ResumePreview.jsx`).
- **Talksy** — one-to-one chat with presence, read receipts, and an image message (`previews/ChatPreview.jsx`).
- **Ymusix** — terminal music player with library, queue, and player bar (`previews/TerminalPreview.jsx`).

These are hand-built UI compositions based on each repository, not screenshots, so there are no external image dependencies or layout shifts. To use a real screenshot later, add the image to `public/projects/` and replace the preview component’s body with an `<img>` while keeping the existing `role="img"` frame and alt text.

Preview keys live in `src/components/ProjectPreview.jsx`; live links are only rendered when `liveUrl` is set, and Ymusix uses `liveLabel: "npm package"`.

## Design notes

- Semantic color tokens are defined in `src/index.css` under `@theme`.
- Section content is separated from presentation in `src/data/content.js`.
- Motion is disabled for users with `prefers-reduced-motion: reduce`, and the fallback is fully readable.
- The mobile menu traps focus, closes on Escape, and restores focus to its trigger.

## Deploy

Any static host works. Build with `npm run build` and publish the `dist/` directory (Vercel, Netlify, GitHub Pages, Cloudflare Pages).
