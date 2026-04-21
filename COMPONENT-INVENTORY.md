# Component Inventory

## Custom Components (Already Built)

### Motion Components
- `page-transition.tsx` - Route transition animations
- `reveal.tsx` - Scroll-triggered reveal wrapper
- `stagger-container.tsx` - Staggered children animations

### Visual Effects
- `animated-background.tsx` - Floating orbs + particles
- `click-spark.tsx` - Click particle bursts
- `custom-cursor.tsx` - Custom cursor with magnetic hover
- `glow-button.tsx` - Magnetic buttons with glow
- `noise-overlay.tsx` - Film grain texture

### Page Sections
- `hero-section.tsx` - Full-screen hero with animations
- `about-preview.tsx` - About section preview
- `expertise-preview.tsx` - Skills grid preview
- `projects-preview.tsx` - Projects grid preview
- `testimonials-preview.tsx` - Reviews carousel
- `contact-cta.tsx` - Contact call-to-action

### Navigation
- `navigation.tsx` - Responsive nav with animations

## Available Registries

### @aceternity
Install with: `npx shadcn@latest add @aceternity/[component]`

| Component | Usage |
|-----------|-------|
| typewriter-effect | Hero text animations |
| sparkles | Background particles |
| wavy-background | Animated waves |
| parallax-hero-images | Parallax scrolling |
| resizable-navbar | Mobile/desktop nav |
| timeline | Journey timeline |
| tracing-beam | Scroll line animations |
| glowing-effect | Hover glows |
| 3d-pin | Project cards |
| world-map | Contact background |
| canvas-reveal-effect | Image reveals |

### @react-bits
Install with: `npx shadcn@latest add @react-bits/[component]-TS-TW`

| Component | Usage |
|-----------|-------|
| SplashCursor | Custom liquid cursor |
| ClickSpark | Click particles |
| CurvedLoop | Curved text marquee |
| GradualBlur | Scroll blur reveal |
| LogoLoop | Logo marquee |
| FlowingMenu | Animated nav menu |
| Magnet | Magnetic hover elements |
| DecryptedText | Text decryption |
| ShinyText | Shimmer effect |

### Magic UI
Install with: `npx shadcn@latest add [component]`

| Component | Usage |
|-----------|-------|
| particles | Interactive particles |
| animated-grid-pattern | Background grid |
| flickering-grid | Flicker effect |
| blur-fade | Blur transitions |

### @shadcn
Already available for layout needs:
- button
- card
- dialog
- input
- tabs
- tooltip

## Installation Commands

### Install Aceternity Components
```bash
npx shadcn@latest add @aceternity/typewriter-effect
npx shadcn@latest add @aceternity/sparkles
npx shadcn@latest add @aceternity/wavy-background
npx shadcn@latest add @aceternity/resizable-navbar
npx shadcn@latest add @aceternity/timeline
npx shadcn@latest add @aceternity/3d-pin
```

### Install React Bits Components
```bash
npx shadcn@latest add @react-bits/SplashCursor-TS-TW
npx shadcn@latest add @react-bits/ClickSpark-TS-TW
npx shadcn@latest add @react-bits/CurvedLoop-TS-TW
npx shadcn@latest add @react-bits/GradualBlur-TS-TW
npx shadcn@latest add @react-bits/Magnet-TS-TW
npx shadcn@latest add @react-bits/DecryptedText-TS-TW
```

### Install Magic UI Components
```bash
npx shadcn@latest add particles
npx shadcn@latest add animated-grid-pattern
npx shadcn@latest add flickering-grid
```

## Recommended Additions

For the most premium experience, consider adding:

1. **@aceternity/sparkles** - Add to hero background
2. **@aceternity/3d-pin** - Replace project cards
3. **@react-bits/SplashCursor** - Replace custom cursor
4. **@react-bits/ClickSpark** - Replace click effect
5. **particles** - Enhanced particle system

## Usage Examples

### Adding Sparkles Background
```tsx
import { SparklesCore } from "@/components/ui/sparkles";

<SparklesCore
  background="transparent"
  minSize={0.4}
  maxSize={1}
  particleDensity={100}
  className="w-full h-full"
  particleColor="#00F0FF"
/>
```

### Adding 3D Pin Card
```tsx
import { PinContainer } from "@/components/ui/3d-pin";

<PinContainer title="Project Name" href="/projects">
  <div className="p-4">
    {/* Card content */}
  </div>
</PinContainer>
```

### Adding Splash Cursor
```tsx
import SplashCursor from "@/components/SplashCursor";

<SplashCursor />
```
