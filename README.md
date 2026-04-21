# Awwwards Portfolio

A premium, multi-page developer portfolio featuring extremely dark UI, heavy motion graphics, and an immersive interactive experience.

## Features

### Design
- **Dark Theme**: Deep void backgrounds (#030303 to #0B0B10)
- **Neon Accents**: Cyan, blue, purple, magenta gradients
- **Glassmorphism**: Frosted glass effects throughout
- **Volumetric Lighting**: Animated glows and spotlights
- **Noise Texture**: Subtle grain overlay
- **Smooth Animations**: Framer Motion + GSAP ScrollTrigger

### Pages
1. **Home**: Cinematic hero with animated particles, gradient orbs, floating elements
2. **About**: Scrolling story with timeline, stats, and journey milestones
3. **Expertise**: Interactive skills showcase with animated progress bars
4. **Projects**: Filterable portfolio with featured projects grid
5. **Testimonials**: Auto-advancing carousel + grid of client reviews
6. **Current Projects**: Live progress tracking with circular indicators
7. **Blog**: Searchable/filterable articles with featured post
8. **Contact**: Animated form with social links

### Motion Effects
- Custom cursor with magnetic hover effects
- Click spark particle effects
- Page transition animations
- Scroll-triggered reveals
- Parallax backgrounds
- Floating animations
- Staggered content reveals

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

### Build

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Component Sources

### From Aceternity UI
Available components that can be installed:
- `typewriter-effect` - For hero text animations
- `sparkles` - Background particle effects
- `wavy-background` - Animated wave patterns
- `parallax-hero-images` - Parallax image effects
- `resizable-navbar` - Responsive navigation
- `timeline` - Journey timeline component
- `tracing-beam` - Scroll-linked line animations
- `glowing-effect` - Hover glow effects
- `3d-pin` - Project card 3D effects
- `world-map` - Contact page visualization
- `canvas-reveal-effect` - Image reveal animations

### From React Bits
Available components that can be installed:
- `SplashCursor-TS-TW` - Liquid splash cursor
- `ClickSpark-TS-TW` - Click spark particles
- `CurvedLoop-TS-TW` - Curved text animations
- `GradualBlur-TS-TW` - Scroll blur reveals
- `LogoLoop-TS-TW` - Logo marquee
- `FlowingMenu-TS-TW` - Animated menu
- `Magnet-TS-TW` - Magnetic hover elements
- `DecryptedText-TS-TW` - Text decryption effect
- `ShinyText-TS-TW` - Shimmer text

### From Magic UI
- `particles` - Interactive particle system
- `animated-grid-pattern` - Animated background grid
- `flickering-grid` - Flickering grid effect
- `blur-fade` - Blur transition animations

### From shadcn/ui
Built-in components:
- `button` - Form actions
- `card` - Content containers
- `dialog` - Modal windows
- `input` - Form inputs
- `tabs` - Tab navigation
- `tooltip` - Hover hints

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── about/
│   │   └── page.tsx        # About page
│   ├── expertise/
│   │   └── page.tsx        # Skills page
│   ├── projects/
│   │   └── page.tsx        # Portfolio page
│   ├── testimonials/
│   │   └── page.tsx        # Reviews page
│   ├── current-projects/
│   │   └── page.tsx        # Active work page
│   ├── blog/
│   │   └── page.tsx        # Articles page
│   └── contact/
│       └── page.tsx        # Contact page
├── components/
│   ├── effects/            # Visual effects
│   │   ├── animated-background.tsx
│   │   ├── click-spark.tsx
│   │   ├── custom-cursor.tsx
│   │   ├── glow-button.tsx
│   │   └── noise-overlay.tsx
│   ├── motion/             # Animation components
│   │   ├── page-transition.tsx
│   │   ├── reveal.tsx
│   │   └── stagger-container.tsx
│   ├── sections/           # Page sections
│   │   ├── hero-section.tsx
│   │   ├── about-preview.tsx
│   │   ├── expertise-preview.tsx
│   │   ├── projects-preview.tsx
│   │   ├── testimonials-preview.tsx
│   │   └── contact-cta.tsx
│   ├── navigation.tsx      # Site navigation
│   └── theme-provider.tsx  # Theme context
├── hooks/                  # Custom React hooks
│   ├── useMousePosition.ts
│   └── useScrollProgress.ts
├── lib/
│   └── utils.ts            # Utility functions
├── public/
│   └── images/             # Static images
├── tailwind.config.ts      # Tailwind configuration
└── next.config.js          # Next.js configuration
```

## Customization

### Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  void: "#030303",
  abyss: "#0B0B10",
  neon: {
    blue: "#00F0FF",
    cyan: "#00E5FF",
    purple: "#B829DD",
    magenta: "#FF0080",
  },
}
```

### Fonts
Update in `app/layout.tsx`:
```typescript
import { Space_Grotesk, Inter } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});
```

### Animations
Modify in component files using Framer Motion variants and transition properties.

## Performance

- Images are optimized with Next.js Image component
- Animations use GPU-accelerated transforms
- Reduced motion support for accessibility
- Lazy loading for below-fold content

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers with modern JavaScript support

## License

MIT
