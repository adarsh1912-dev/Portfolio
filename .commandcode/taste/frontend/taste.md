# Frontend Taste

## Stack
- Default stack: React with Vite, Tailwind CSS (version matching what the project already has), Motion for React via `motion/react`, and Lucide React for icons. Confidence: 0.8
- Adds React Router only when multiple routes are genuinely needed. Confidence: 0.7
- For 3D in a React project, expects Three.js through React Three Fiber (with `@react-three/drei` helpers when they earn their place), GLSL shaders only when they meaningfully improve the result, and GSAP or the project's already-installed animation library for coordinated motion. Confidence: 0.7
- Avoids adding a UI component library/kit unless it solves a real problem; prefers hand-built components on the project's own Tailwind setup. Confidence: 0.7

## Design system
- Wants an explicit design system established before individual components are styled: a distinctive display typeface paired with a highly readable body face (plus a mono for labels), a consistent type scale/line-height/tracking, deliberate spacing, and semantic color tokens exposed as reusable CSS variables so sections and dark panels can re-theme cleanly. Confidence: 0.8

## Visual direction
- Prefers dark charcoal/near-black backgrounds with warm off-white typography and a single restrained accent (electric lime), large expressive type, strong hierarchy, generous whitespace, subtle borders, and tight alignment. Confidence: 0.7
- Dislikes generic AI-generated design clichés: excessive purple/blue gradients, glowing borders and blobs, glassmorphism everywhere, endless pill-shaped cards, excessive rounded corners, random floating decorative shapes, huge headings without composition, unnecessary badges/pills/labels, and repetitive three-column card grids. Wants deliberate decisions and a distinct visual identity where every visual element has a purpose. Confidence: 0.85
- Likes editorial layouts that break uniformity — e.g., at least one project in a larger, non-card editorial treatment instead of every item looking identical. Confidence: 0.65

## Motion & interaction
- Wants restrained, purposeful animation (subtle entrances, staggered section reveals, refined hover states), with no scroll hijacking, heavy parallax, long intros, or motion that interferes with reading. Confidence: 0.8
- Expects `prefers-reduced-motion` support and interactions that work on touchscreens as well as desktop. Confidence: 0.8

## Accessibility & responsiveness
- Treats desktop and mobile as distinct design contexts rather than one layout scaled down; expects verification at several widths (narrow mobile, tablet, laptop, large desktop). Confidence: 0.8
- Mobile-first responsive work with no horizontal overflow on small screens; semantic HTML, accessible nav, sufficient contrast, visible keyboard focus states, meaningful alt text, and appropriately sized interactive targets. Confidence: 0.8
- Also cares about page metadata, favicon, optimized images, and minimizing layout shift. Confidence: 0.6

## Design review workflow
- Expects design work grounded in actually rendered pixels: capture the current site first, then the redesigned result, in a real browser at desktop and mobile widths (full-page plus per-section shots), and only claim visual verification that was truly inspected. When a requested browser tool isn't installed, fall back to available headless-browser tooling and say so. Confidence: 0.75
- Wants an explicit diagnosis of what makes the current design look generic/AI-generated before the redesign is implemented. Confidence: 0.7

## Project imagery
- Expects visuals in the projects/work section to be genuinely relevant to each individual project — an accurate, project-specific representation beats generic or stock imagery that could belong to anything. Confidence: 0.65
- Prefers hand-built, self-contained previews (no external image dependencies, no layout shift) over placeholder photos when real screenshots are unavailable. Confidence: 0.5

## Data presentation
- Prefers qualitative, honest representations of skill (grouped categories) over meaningless progress bars or arbitrary percentage ratings. Confidence: 0.7

## Enhancing existing projects
- When upgrading an existing site, treats it as an enhancement, not a rewrite: preserve existing content, real project data, links, routing, working components, styling system, and architecture, and reuse installed dependencies rather than swapping the stack for convenience. Confidence: 0.85
- Keeps the project's existing conventions (JavaScript vs TypeScript, Tailwind version, existing animation library) instead of introducing a parallel system. Confidence: 0.8

## Effects performance and restraint
- Wants heavy visuals (3D/WebGL) to stay practical: lazy-loaded as a separate chunk, no large external assets, procedural geometry over downloads, proper cleanup of listeners/loops/GPU resources, no React re-render on every pointer move, and no post-processing/shadows that aren't earning their cost. Confidence: 0.8
- Expects a graceful static/CSS fallback when the effect can't run (WebGL unavailable, scene error) rather than a blank or broken panel. Confidence: 0.8
- Prefers a small number of exceptionally executed details over many mediocre effects; every animation must have a clear purpose. Confidence: 0.8
- Does not want 3D added just because Three.js is available: if a simpler CSS/SVG solution achieves the intent better, use that; when 3D is used, one cohesive composition beats several unrelated objects, and animation libraries shouldn't be stacked without a clear need. Confidence: 0.8
- Never lets an effect hurt usability: no custom cursor that replaces normal pointer behavior or makes links harder to click, no canvas that blocks scrolling or important content/controls. Confidence: 0.75
- Degrades intensity by device rather than shipping one heavy configuration everywhere — lower DPR/fewer particles/effects off on mobile and touch, hover-dependent interactions disabled where hover doesn't exist. Confidence: 0.75
