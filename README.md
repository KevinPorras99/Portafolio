# Kevin Porras — Developer Portfolio

A portfolio for junior web and full-stack opportunities. Selected work highlights Registro Docente (Laravel), Planet Express (full-stack), and Zentrox (frontend), followed by MedControl, Muniticket, and Pokédex.

**Site:** https://kevinporras99.github.io/Portafolio/ (responded with HTTP 200 during this review).

## Stack

React 19, TypeScript, Vite 6, and local CSS. System fonts and bundled styles keep rendering independent of external font and Tailwind CDNs. No backend, environment variables, or AI keys are required.

## Installation and development

Use Node.js 22 and pnpm 10.30.3. The existing installation and current `pnpm-lock.yaml` use pnpm; `package.json` now pins that version. The older npm lockfile is retained without changes.

```sh
corepack pnpm install --frozen-lockfile
corepack pnpm dev
```

Open http://localhost:5173/Portafolio/ (use the port printed by Vite if 5173 is occupied).

## Verification commands

```sh
corepack pnpm typecheck
corepack pnpm build
corepack pnpm check
corepack pnpm preview
```

TypeScript strict mode is enabled. There is no configured ESLint or test runner; no lint result is claimed. The check command runs type checking and the production build.

Manual browser checks:
- Check 390px, 768px, and 1440px layouts for overflow and readability.
- Tab through the skip link, navigation, project details, and contact links.
- On mobile, open the menu, close it with Escape, and confirm focus returns to the button.
- Follow a mobile navigation link; confirm the menu closes and the target section receives focus.
- Open and close project details with Enter and Space.
- Enable reduced motion and confirm movement and smooth scrolling stop.
- Inspect console and network errors; verify screenshots and favicon under /Portafolio/.
- Confirm Open Gmail opens a compose page addressed to Kevin in a new tab (sign-in may be required). Check Copy email and its success message; when clipboard access is blocked, confirm the address is selected for manual copying. The email-app link uses mailto and requires a configured handler. There is no contact form or simulated submission.

## Structure

```text
App.tsx                    Page composition
components/                Existing section components and reusable icons
data/projects.ts           Typed project content, links, evidence, and limitations
data/profile.ts            Existing professional links and email
types.ts                   Project and experience types
index.css                  Responsive theme, focus states, reduced motion
index.html                 Title, description, Open Graph, favicon
img/profileimage.jpg       Portrait imported through Vite
public/img/optimized/      Compressed display copies of existing screenshots
public/img/                Original screenshots and icons
public/cv/                 Original CV supplied by Kevin, available to download
scripts/optimize-images.ps1  Rebuild JPEG display copies on Windows
docs/content-review.md     Source review and outstanding content checks
vite.config.ts             GitHub Pages base path
```

Images reserve layout space and project screenshots load lazily. Display copies are at most 960px wide. Rebuild them on Windows with `pwsh -File scripts/optimize-images.ps1`. Originals and historical duplicates are retained to avoid removing existing assets; the page requests only its optimized copies and portrait.

## GitHub Pages

Vite retains `base: '/Portafolio/'`. Public images use `import.meta.env.BASE_URL`; the favicon uses Vite's `%BASE_URL%` substitution. The build output is `dist/`. Keep the repository name and base path aligned.

The existing `deploy` script uses `gh-pages -d dist`, with `predeploy` building first. Publishing requires an explicit decision by the owner; this change does not publish anything or change remote branches. Preview the build locally before a future deployment.

## Content maintenance

Update project facts in `data/projects.ts`, professional links in `data/profile.ts`, and the original experience/education details in their components. Project details use native `details/summary`, avoiding custom modal focus handling.

Public repository documentation and selected source files were reviewed; those projects were not run or security-audited. See [content review](docs/content-review.md) for exact sources, distinctions between the two Pokédex repositories, and pending items.

The hero includes a download link to the original supplied CV at `public/cv/KevinPorras_Resume_M2026.pdf`. Its URL uses `import.meta.env.BASE_URL` for GitHub Pages. To replace it, add the new PDF and update `resumeUrl` and `resumeFilename` in `data/profile.ts`. Experience dates and education were cross-checked against this CV.
