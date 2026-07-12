# Glowminal Design System & Philosophy

This document outlines the final, production-ready visual language and design system for the Glowminal ecosystem (Landing, Dashboard, Core App). 

Our North Star is "A premium consumer technology company dedicated to understanding human skin." We combine the precise, clinical feel of a luxury science brand (like Aesop or Nothing) with the fluid, intelligent software experience of Apple Health and Arc Browser.

## 1. Core Atmosphere & Lighting

The Glowminal environment should never feel like a flat website. It must feel like an architecturally lit, physical space. 
- **Lighting:** We use very soft, premium environmental lighting. We introduce natural highlights, glass reflections, and subtle vignettes.
- **Bounce Light:** Deep emerald glows from the edges of dark containers, mimicking physical light bouncing off a colored surface. 
- **Noise/Grain:** A microscopic, high-frequency fractal noise layer (opacity: `0.03 - 0.05`) is blended using `mix-blend-screen` or `mix-blend-multiply` to remove digital banding and provide tactile texture.

## 2. Cinematic Color Grading 

We do not abruptly switch background colors. We treat scrolling as traversing physical environments, gradually grading the light.

### The Journey Palette:
1. **Hero (Warm Ivory):** `#FAFAF9` — Clinical, yet human and warm.
2. **Editorial White:** `#F2F5F3` (Light Sage) — Used as the user descends into content.
3. **Botanical Cream:** `#E8F0EA` — Prepares the eye for deeper tones.
4. **Cinematic Bridge:** `#184133` — The ambient transition state before entering dark mode.
5. **Deep Emerald (Conclusion):** `#022C22` — Deep, architectural, emotional.

## 3. One Adaptive Material (Glass)

We use ONE unified glass material system rather than dozens of different navbar or card styles. The material dynamically adapts its properties based on the environment underneath.

### Environmental Glass Themes
- **Hero:** `blur(16px) saturate(1.2)`, warm ivory tint `rgba(250, 250, 249, 0.4)`.
- **Editorial:** `blur(24px) saturate(1.4)`, frosted white `rgba(255, 255, 255, 0.7)`.
- **Scientific:** `blur(12px) saturate(1)`, botanical sage `rgba(230, 235, 231, 0.55)`.
- **Botanical:** `blur(32px) saturate(1.5)`, emerald frost `rgba(4, 120, 87, 0.15)`.
- **Footer:** `blur(48px) saturate(1.2)`, deep emerald glass `rgba(2, 44, 34, 0.7)`.

## 4. Typography Hierarchy

We project absolute editorial confidence through rigorous typographic restraint.

- **Typefaces:** We mix a Modern Grotesk (sans-serif) for utility, with a Luxury Serif (`font-editorial`, usually italicized) for emotion and signature.
- **Kerning & Tracking:**
  - `tracking-tight` (`-0.04em`): Large statements and modern headings.
  - `tracking-editorial` (`-0.02em`): Standard body paragraphs.
  - `tracking-mono` (`0.1em`): Tiny, uppercase scientific/utility captions.
- **Leading:**
  - `leading-[0.8] - leading-none`: Large editorial lockups (like the GLOWMINAL signature).
  - `leading-[1.7]`: Body text for maximum readability and breathability.

## 5. Motion Language

There is only **one** motion language across the entire product. 
- **Easing:** `cubic-bezier(0.22, 1, 0.36, 1)` (EXPENSIVE_EASING). 
- **Philosophy:** Motion should disappear into the experience. No bouncing, no rubber-banding, no snappy linear translations. Everything moves with cinematic weight and gradual deceleration.
- **Reveals:** Staggered, slow-fade reveals. Upward translations should rarely exceed `30px`.
- **Interactions:** Hover states increase luminosity and subtly scale down `scale-[0.98]` to feel like physical pressure.

## 6. The Ecosystem Standard

This design system must be strictly adhered to across:
- **Landing Page** (Foundation)
- **Dashboard** (Inherits Editorial / Scientific themes)
- **Skin Scan AI** (Inherits Botanical / Deep Emerald themes)
- **Timeline & Routine Builder** (Inherits Warm Ivory / Editorial themes)
- **Settings & Profile** (Inherits Editorial themes)

Do not introduce new colors. Do not introduce new easing curves. Do not create new button styles. Reuse the Adaptive Material and the Semantic Themes.
