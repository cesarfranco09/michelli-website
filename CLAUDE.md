# Golden Slumber Sleep Consulting — Website Build Instructions

## Project Overview

Build a modern, professional, single-page website for **Golden Slumber Sleep Consulting**, a baby and toddler sleep consulting business run by **Michelli**, a certified pediatric sleep consultant. The website must feel warm, luxurious, and trustworthy — evoking calm, restful nights and professional expertise.

> **IMPORTANT**: Use the `/mnt/skills/public/frontend-design/SKILL.md` skill for all frontend work. Read it before writing any code.

---

## Brand Identity

### Logo

- The logo file is located at: `./assets/logo.jpg` (provided by the client — a golden crescent moon resting on soft clouds with stars, and the text "Golden Slumber Sleep Consulting" in elegant script + serif typography)
- Use this logo in the navbar and footer
- The logo's color palette should inform the site's design

### Brand Colors (extracted from logo)

| Token           | Hex       | Usage                                          |
| --------------- | --------- | ---------------------------------------------- |
| `--gold`        | `#D4A843` | Primary accent, CTAs, highlights, hover states |
| `--gold-light`  | `#E8C96A` | Hover states, gradients, subtle highlights     |
| `--navy`        | `#2B3A52` | Headings, navbar, footer, primary text         |
| `--navy-dark`   | `#1A2636` | Footer background, dark overlays               |
| `--cream`       | `#FFF9F0` | Page background, light sections                |
| `--cloud-white` | `#F0F4F8` | Alternating section backgrounds, cards         |
| `--cloud-blue`  | `#D6E4F0` | Subtle accents, decorative elements            |
| `--warm-white`  | `#FFFDFB` | Card backgrounds, hero overlay text areas      |
| `--text-body`   | `#4A4A4A` | Body text                                      |
| `--text-muted`  | `#7A8A9A` | Secondary/caption text                         |

### Typography

- **Display / Hero headings**: Use a refined serif like `Playfair Display` or `Cormorant Garamond` — elegant, warm, editorial
- **Section headings**: Same serif family, varied weights
- **Body text**: A clean, highly readable sans-serif like `Lato`, `Source Sans 3`, or `DM Sans`
- **Accent / Labels**: Spaced uppercase sans-serif for small labels (e.g., "CERTIFIED SLEEP CONSULTANT")
- Import from Google Fonts

### Design Tone

- **Aesthetic**: Soft luxury meets modern editorial — think a high-end parenting magazine. NOT clinical, NOT overly cutesy
- **Mood**: Calm, nurturing, trustworthy, professional, warm
- **Avoid**: Bright primary colors, cartoonish elements, generic stock-photo aesthetics, cookie-cutter templates
- **Embrace**: Generous whitespace, elegant typography hierarchy, soft gradients, subtle animations, warm photography tones, gold accents used sparingly

---

## Tech Stack

- **Next.js** (App Router) with TypeScript
- **Tailwind CSS** for styling (with CSS custom properties for brand tokens)
- **Framer Motion** for animations (scroll reveals, parallax, hover states)
- All content is hardcoded (no CMS) — this is a static marketing site
- Fully responsive (mobile-first approach)
- Accessible (semantic HTML, proper ARIA, keyboard navigation)

---

## Site Structure (Single Page with Sections)

The site is a single scrollable page with a fixed navbar. Each section scrolls into view with smooth animations.

### 1. NAVBAR (Fixed/Sticky)

- Logo on the left
- Nav links: Home | About Michelli | Services | Testimonials | FAQ | Contact
- CTA button on the right: **"Free Consultation"** (gold background, navy text)
- On scroll: navbar gets a subtle background blur/shadow
- Mobile: hamburger menu with a slide-out drawer
- Smooth scroll to sections on click

### 2. HERO SECTION

- **Full viewport height** section
- **Background**: Embedded video (looping, muted, autoplay) showing peaceful baby/nursery footage
  - Use a `<video>` tag with a poster image fallback
  - Apply a soft navy/dark overlay gradient so text is readable
  - Placeholder: use a calming gradient or still image as fallback until the client provides the video file. Add a comment in code: `{/* TODO: Replace with client's video file */}`
- **Content overlay** (centered or left-aligned):
  - Small label: "CERTIFIED PEDIATRIC SLEEP CONSULTANT"
  - Main heading: **"Restful Nights Start Here"**
  - Subheading: "Personalized, gentle sleep solutions for your baby and your family. Because everyone deserves a good night's sleep."
  - Two CTAs:
    - Primary: **"Book a Free Consultation"** (gold button)
    - Secondary: **"Explore Services"** (outlined/ghost button)
- Subtle scroll-down indicator (animated chevron or moon icon)

### 3. ABOUT Michelli

- **Layout**: Split section — photo on one side, text on the other (alternating on mobile)
- **Photo**: Placeholder for Michelli's headshot (use a styled placeholder with a comment `{/* TODO: Add Michelli's photo */}`)
- **Content**:
  - Small label: "MEET YOUR SLEEP EXPERT"
  - Heading: **"Hi, I'm Michelli"**
  - Bio text (adapt this for Michelli's voice — warm, personal, professional):
    > "I know firsthand the joys and challenges of raising little ones — especially when sleep feels impossible. As a certified pediatric sleep consultant and a parent myself, I understand the exhaustion, the frustration, and the loneliness that comes with sleepless nights. My journey into sleep consulting was born from my own family's struggle and the life-changing relief that came when we finally found our rhythm. Now, I'm passionate about helping other families discover the same transformation. I combine evidence-based methods with a gentle, holistic approach — because every family is unique, and your sleep plan should be too."
  - CTA: **"Learn More About My Approach"** (links to services section)
- Optional: A certification badge/seal placeholder

### 4. CORE PRINCIPLES (Why Choose Golden Slumber)

- **Layout**: 4 cards in a grid (2x2 on desktop, stacked on mobile)
- Subtle entrance animations (stagger reveal on scroll)
- Each card has:
  - An icon (use elegant line icons or small SVG illustrations — moon, heart, shield, book)
  - A title
  - A short description

**Card 1 — Empathy & Understanding**

> We listen first. Every sleep plan is built with compassion and deep respect for your family's unique needs, routines, and parenting style.

**Card 2 — Empowerment & Education**

> We don't just fix sleep — we teach you how. You'll gain the knowledge and confidence to make informed decisions and nurture lasting sleep habits.

**Card 3 — Gentle & Holistic**

> We consider your child's temperament, feeding patterns, daily routines, and overall environment, ensuring a comprehensive and responsive approach.

**Card 4 — Safety First, Always**

> Every sleep plan is carefully crafted to align with the most current safe sleep guidelines, promoting both healthy sleep and your child's well-being.

### 5. SERVICES / SLEEP PACKAGES

- **Section heading**: "Sleep Packages" with subheading: "Find the right plan for you and your little one."
- **Layout**: 3 pricing cards side by side (horizontal scroll on mobile or stacked)
- The middle card (Foundations) should be visually emphasized as "Most Popular" with a gold badge/ribbon

**Package 1 — BASIC ($150)**

- Best for: Parents already sleep training who need guidance, or expecting parents wanting sleep foundation support
- Includes:
  - 1-hour phone consultation
  - Ask-me-anything format
  - 2 follow-up emails (within 2 months)

**Package 2 — FOUNDATIONS ($350) ⭐ Most Popular**

- 7-day guided program
- Includes:
  - Comprehensive intake questionnaire
  - Custom sleep plan
  - Virtual nursery evaluation
  - 1-hour kickoff phone call
  - Unlimited text/email support (8am–8pm, 7 days)
  - 30-minute graduation call

**Package 3 — SUMMIT ($499)**

- 14-day comprehensive program
- Includes:
  - Everything in Foundations
  - Extended 14-day unlimited support window
  - 30-minute graduation call

- Each card has a CTA button: **"Get Started"** or **"Select Plan"**
- Below the cards: a note: "Not sure which package is right for you? **Book a free consultation** and we'll help you decide."

### 6. HOW IT WORKS (Process Section)

- **Layout**: Horizontal timeline or numbered steps (3-4 steps)
- Subtle connecting lines or flow between steps

**Step 1 — Book Your Free Call**

> Schedule a complimentary 15-minute consultation so we can understand your family's sleep challenges.

**Step 2 — Get Your Custom Plan**

> After a thorough assessment, you'll receive a personalized sleep plan tailored to your child and your family's needs.

**Step 3 — Guided Support**

> Michelli walks alongside you every step of the way with hands-on support, daily check-ins, and real-time troubleshooting.

**Step 4 — Sweet Dreams**

> Watch your little one (and you!) transform into confident, independent sleepers. Graduation call to celebrate your wins.

### 7. TESTIMONIALS

- **Layout**: Carousel/slider or stacked testimonial cards
- Elegant quote marks, soft card backgrounds
- Each testimonial has the quote and an attribution (first name or "Parent of [age] old")

**Testimonial 1:**

> "Michelli was fantastic to work with. She was calm, encouraging, and incredibly knowledgeable. She was also very patient when we struggled with some of the more challenging nights."
> — _Parent of a 4-month-old and a 2-year-old_

**Testimonial 2:**

> "Before working with Michelli, our son was not sleeping by himself and had multiple overnight wakings with feedings. Michelli was there every step of the way — calls and texts every morning, always willing to answer questions and offer solutions. She was fantastic!"
> — _Parent of a 9-month-old_

**Testimonial 3:**

> "Michelli was kind and dedicated to helping us through some bumps in the road — reflux, sickness — she was always there to listen and give advice."
> — _Charlotte S., parent of a 5-month-old_

### 8. FREE GUIDE / LEAD MAGNET

- **Layout**: Split section with an image/mockup of the guide on one side and a signup form on the other
- **Heading**: "Free Guide: Bedtime Foundations"
- **Subheading**: "Why wait for a consult to get started? Download this free guide to learn how to make naps and bedtime routines more predictable."
- **Form**: Email input + "Send Me the Guide" button (gold)
- The form doesn't need to be functional — just styled. Add a comment: `{/* TODO: Connect to email service (e.g., Mailchimp, ConvertKit) */}`

### 9. FAQ SECTION

- **Layout**: Accordion-style expandable questions
- Smooth open/close animations
- **Heading**: "Frequently Asked Questions"

**Q: Does Golden Slumber use Cry It Out?**

> No. We do not use the extinction "cry it out" method. While we acknowledge that some crying is natural as children adjust to new habits, our approach focuses on teaching independent sleep skills through supportive and responsive methods. We prioritize parent-present techniques and tailor each plan to your family's comfort level.

**Q: At what age can I start sleep training?**

> Formal sleep training typically begins at 4 months (and 12+ lbs) with pediatrician clearance. However, you can start building healthy sleep foundations from birth — and we can guide you through that too.

**Q: Can I sleep train while breastfeeding?**

> Absolutely. Sleep training focuses on teaching independent sleep skills, not eliminating feeds. We'll work with your breastfeeding schedule and help break the feed-to-sleep association while supporting full daytime feedings and appropriate overnight nourishment.

**Q: What if my child has reflux or medical needs?**

> We work closely with families navigating medical challenges. Michelli factors in your child's health needs and collaborates with your pediatrician's guidance when creating your custom plan.

**Q: How long does it take to see results?**

> Every child is different, but most families see meaningful improvement within the first 3–5 nights. Full transformation typically occurs within the program period (7 or 14 days depending on your package).

### 10. CONTACT / CTA SECTION

- **Layout**: Full-width section with a calming background (gradient or soft image)
- **Heading**: "Ready for Restful Nights?"
- **Subheading**: "Book your free 15-minute consultation and let's talk about your family's sleep goals."
- **CTA Button**: "Schedule Your Free Call" (large, gold)
- Contact details:
  - Email: `Michelli@goldenslumbersleep.com` (placeholder)
  - Phone/Text: placeholder
  - Social media icon links (Instagram, Facebook) — use placeholder `#` hrefs

### 11. FOOTER

- Logo (smaller version)
- Navigation links
- Contact info
- Social media icons
- Copyright: "© 2026 Golden Slumber Sleep Consulting. All rights reserved."
- Small legal links: Privacy Policy | Terms of Service

---

## Animation & Interaction Guidelines

- **Page load**: Navbar slides in from top, hero content fades up with stagger
- **Scroll reveals**: Each section fades in + translates up slightly (use Framer Motion's `whileInView`)
- **Pricing cards**: Subtle hover lift with shadow deepening
- **Testimonial carousel**: Smooth slide or fade transitions
- **FAQ accordion**: Smooth height animation on expand/collapse
- **CTA buttons**: Gentle scale on hover (1.02-1.05), color transition
- **Navbar**: Background opacity / blur transition on scroll
- **Keep all animations subtle and elegant** — nothing bouncy, flashy, or distracting. This is a calming, trust-building site.

---

## Responsive Design Notes

- **Desktop** (1200px+): Full layouts as described, generous whitespace
- **Tablet** (768px–1199px): 2-column grids become stacked or 2-col, reduced padding
- **Mobile** (< 768px): Single column, hamburger nav, stacked cards, touch-friendly tap targets (min 44px), no horizontal scroll except intentional carousels
- Test all sections at 375px (iPhone SE) and 390px (iPhone 14)

---

## File & Folder Structure

```
golden-slumber/
├── public/
│   ├── assets/
│   │   ├── logo.jpg            # Client-provided logo
│   │   ├── hero-poster.jpg     # Hero section poster/fallback image
│   │   ├── hero-video.mp4      # TODO: Client to provide
│   │   ├── Michelli-photo.jpg    # TODO: Client to provide
│   │   └── guide-mockup.png    # Free guide mockup image
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   └── components/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Principles.tsx
│       ├── Services.tsx
│       ├── HowItWorks.tsx
│       ├── Testimonials.tsx
│       ├── FreeGuide.tsx
│       ├── FAQ.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
├── tailwind.config.ts
├── package.json
└── tsconfig.json
```

---

## Critical Reminders for Claude Code

1. **Read `/mnt/skills/public/frontend-design/SKILL.md` FIRST** before writing any code
2. **Do NOT use generic fonts** like Inter, Roboto, or Arial. Use distinctive serif + sans-serif pairings from Google Fonts
3. **Do NOT use purple gradients**, blue-purple schemes, or any generic AI-looking design patterns
4. The color palette is **gold, navy, cream, and cloud-white** — warm and luxurious
5. **Every section needs scroll-triggered animations** via Framer Motion
6. **The hero must have a video background** (with poster fallback and overlay)
7. **Mobile-first responsive design** — test at 375px
8. All placeholder images/media should have clear TODO comments for the client
9. The site should feel like it was designed by a boutique branding studio, not generated by AI
10. **Performance**: Optimize images, lazy-load below-fold content, use next/image where appropriate
