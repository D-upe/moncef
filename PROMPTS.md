# Project Prompts & Requirements — Moncef Benouniche Site

## 1. Initial Brief (from user’s first message)
> “i am designing a web page and i gave a few descriptions and guides and i expected the agent to design the site to be perfect in both the mobile and desktop views, and the UI was also supposed to have a few animations, motions and basically an out of this world web page but the agent dissapointed greatly. Look at what has been done, review it and make any changes you feel like to ensure the end product is superb.”

- Review existing implementation
- Ensure perfect mobile + desktop views
- Add animations and motion
- Deliver a premium, polished result

---

## 2. Light Theme + Brighter Gold
> “Make it light themed, use a little bit more bight golden.”

- Switch entire site to light theme
- Use brighter, warmer gold accents
- Keep all animations and interactions

---

## 3. Live Site Looks Broken / Styling Missing
> “Then i have a concern, your demo was perfect, I do not know if the problem is with cloudflare or what exactly but if you check the live site it is nothing like that, it is almost like the styling is gone or only bits of it remain.”

- Investigate why live site is unstyled
- Fix cache / build / hosting issues
- Rebuild and redeploy correctly

---

## 4. Domain: Use `ohala.qd.je` (Apex) Instead of `www`
> “Then i also wanted to disable that hosting for ohala.qd.je so that the page renders on the ohala.qd.je domain itself”
> “when i try to add the domain to cloudflare this happens:Please ensure you are providing the root domain and not any subdomains (e.g., example.com, not subdomain.example.com)”

- Stop using `www.ohala.qd.je`
- Serve directly on `ohala.qd.je`
- Handle Cloudflare Pages root-domain restriction
- Update canonical URLs, sitemap, robots.txt, JSON-LD breadcrumbs

---

## 5. Media Integration
> “now i have added a few media, like a video, its very huge i was looking for a way to compress it while still keeping its quality, and a picture that i have named landbackground, which should be the landing page background. add them to the site”

- Add `landbackground.jpg` / `background.jpg` as landing background
- Compress large video (`VIDEO PRESENTATION.MOV` → `presentation.mp4`)
- Replace placeholder videos/images with real media
- Remove oversized raw `.MOV` from git history

---

## 6. Cloudflare Pages Live Site Still Broken
> “for example if you check this page it looks totally broken:https://moncef.pages.dev/acteur/, compared to the local preview that i ran on my browser”

- Debug live vs local mismatch
- Force fresh Cloudflare deployment
- Purge cache
- Check CSS/asset loading on live site

---

## 7. Full-Width Hero Background Image
> “is there a way to resize that landing image background to fit the entire pc web screen”

- Make landing background fill entire viewport width on desktop
- Remove white space/borders around hero image
- Ensure text sits on top of image cleanly

---

## 8. Final Homepage Structure Request
> “so first of all, i want you to ensure the background image literally fits the entire landing page, i dont want to see any white space behind or next to it, the texts and the rest should lie on the image, then replace the appele and the instagram with their icons and make them link to the specific pages and mobile. and i want a page that first introduces Moncef himself not straight into weddings, i want it to show his love for the violin first thus the first background, then the rest should maybe classically display his image with some brief description like his name, what he does, how long he has been doing it basicaly similar to the cv. then for this second image use the Violinist.png file”

### Exact requirements:
1. **Hero background:** `background.jpg` must be full-bleed, no borders, no white space, full canvas
2. **Text overlay:** All hero text must sit on top of the background image
3. **CTAs:** Replace text “Appeler” and “Instagram” with actual phone/Instagram SVG icons, link correctly
4. **Homepage flow change:**
   - First: landing intro with `background.jpg` (love for violin)
   - Second: Moncef’s own image (`Violinist.png`) + CV-style brief description
   - Then: rest of the site (weddings, events, etc.)
5. **About section:** Classical layout with his image + name + roles + years of experience + credentials

---

## 9. Bug Reports
> “the image is not fully background i can still see a white boarder and it being limited in a way. I expect it to literally be the canvas, then i do not see a page that desscribes what i had instructed, the landing goes directly into the marriages page which should not be the case”

> “the instragram and phone icons are not there i still see the initial hard coded format”

- Fix white border/limiting on hero background
- Ensure À propos section appears immediately after hero
- Ensure SVG icons render in CTAs, not fallback text

---

## 10. DNS / Hosting Decision
> “actually, lets just focus on the development of the page and we'll work on the domain later”
> “should i manage the dns through cloudflare or jsut through the digitalplat”

- Pause DNS/domain configuration work
- Focus on site development first
- Recommend Cloudflare DNS later if needed

---

## What Has Been Done — Detailed Implementation Notes

### 1. Theme & Visual Identity
- **Palette:** Moved from dark `#0a0a0b` to light `#faf9f6` with bright gold `#c8943e` as primary accent.
- **Typography:** Introduced Playfair Display for headings and Inter for body text, loaded via Google Fonts.
- **Token system:** Defined CSS custom properties for background, surface, ink levels, gold variants, and easing curves.

### 2. Hero Section (Full-Bleed Background)
- Replaced the bounded `.hero-img` card with a true full-bleed background using `.hero-bg` as an absolutely positioned layer.
- The hero now spans `min-height: 100vh` with no padding collapse.
- Added a dark gradient overlay (`rgba(10,10,11,0.55)` → `rgba(10,10,11,0.75)`) to keep text readable over the image.
- All hero content (eyebrow, h1, lede, CTAs, proof badges) is wrapped in `.hero-content` and centered with flexbox, so it sits on top of the image rather than below it.
- On desktop the background image breaks out of the container and becomes edge-to-edge.

### 3. À propos / About Section
- Added immediately after the hero on `index.astro`.
- Two-column responsive grid: `Vionist.png` on one side, CV-style copy on the other.
- Copy covers: name, roles (Violoniste · Professeur · Acteur), Conservatoire d’El Biar tenure, YAMAHA Algérie & MELTIN ART teaching, acting credits (FATMA), UGC brands, and 13+ years experience.
- BookingCTA is included inside the About section for immediate conversion.

### 4. Component Updates
- **BookingCTA.astro:** Added inline SVG icons for phone and Instagram. Links point to `tel:+213556728933` and the Instagram profile.
- **ImageCard.astro:** Kept light-theme hover lift, border glow, and zoom.
- **VideoPlayer.astro:** Kept light-theme styling and hover shadow.
- **All pages:** Switched hero images from placeholder SVGs to `background.jpg`.

### 5. Animations & Motion
- Preloader with spinner that fades out on `window.load`.
- Scroll progress bar fixed at top.
- Film-grain overlay for texture.
- Hero floating particles (6 randomized particles with staggered delays).
- Staggered reveal animations using IntersectionObserver.
- Hover micro-interactions on cards, buttons, proof badges, and gallery items.
- All animations respect `prefers-reduced-motion`.

### 6. Mobile Navigation
- Hamburger button with animated open/close transition.
- Full-screen mobile menu with blur backdrop.
- ARIA attributes for accessibility.
- Auto-close on link click and body scroll lock when open.

### 7. SEO & Structured Data
- JSON-LD for Musician/LocalBusiness on every page.
- FAQPage JSON-LD on money pages.
- BreadcrumbList JSON-LD on inner pages.
- Canonical URLs, OG tags, and Twitter cards updated to `ohala.qd.je`.

### 8. Cloudflare / Deploy Configuration
- `public/_redirects`: 301 redirect from `www.ohala.qd.je/*` → `ohala.qd.je/:splat`.
- `public/_headers`: Aggressive caching for `/_astro/*` assets, no-cache for HTML, 1h default for everything else.
- Removed large raw `VIDEO PRESENTATION.MOV` from git history to comply with GitHub’s 100 MB limit.
- Compressed video to `presentation.mp4` (~19 MB, H.264/AAC, web-optimized).
- Added `.gitignore` rules for large raw video files.

### 9. Known Issues / Next Steps
- Live site may still show stale styles due to Cloudflare cache; requires manual purge or new deployment trigger.
- Some pages (galerie, inner service pages) still use generic placeholders for non-hero images; replace with real photography as it becomes available.
- `Vionist.png` is used as a temporary universal image; swap in specific event/acting photos later.
- DNS for `ohala.qd.je` is not yet configured; development is continuing on `moncef.pages.dev` for now.

---

## Summary of Key Design Decisions Made
- **Framework:** Astro 5 + static output
- **Hosting target:** Cloudflare Pages
- **Domain:** `ohala.qd.je` (apex)
- **Theme:** Light + bright gold (`#c8943e`)
- **Fonts:** Playfair Display + Inter
- **Hero:** Full-bleed background image with dark overlay
- **About section:** `Vionist.png` + CV-style bio, placed immediately after hero
- **Video:** Compressed `presentation.mp4` (~19 MB, H.264/AAC)
- **Icons:** SVG phone + Instagram in CTA buttons
- **Animations:** Preloader, scroll progress, reveal-on-scroll, particles, hover effects
- **Mobile:** Hamburger menu, responsive grids, reduced-motion respected
- **SEO:** JSON-LD musician/FAQ/breadcrumbs, sitemap, canonical URLs
- **Cloudflare config:** `_redirects` for www→apex, `_headers` for caching
