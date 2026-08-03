---
name: AXT Executive
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#38393a'
  surface-container-lowest: '#0c0f0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#282a2b'
  surface-container-highest: '#333535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#c4c7c7'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c9c6c5'
  primary: '#c9c6c5'
  on-primary: '#313030'
  primary-container: '#0a0a0a'
  on-primary-container: '#7b7979'
  inverse-primary: '#5f5e5e'
  secondary: '#e9c176'
  on-secondary: '#412d00'
  secondary-container: '#604403'
  on-secondary-container: '#dab36a'
  tertiary: '#dec1af'
  on-tertiary: '#3f2c20'
  tertiary-container: '#140702'
  on-tertiary-container: '#8d7565'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c9c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#ffdea5'
  secondary-fixed-dim: '#e9c176'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4201'
  tertiary-fixed: '#fbddca'
  tertiary-fixed-dim: '#dec1af'
  on-tertiary-fixed: '#28180d'
  on-tertiary-fixed-variant: '#574335'
  background: '#121414'
  on-background: '#e2e2e2'
  surface-variant: '#333535'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 72px
    fontWeight: '700'
    lineHeight: 84px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 30px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1440px
  gutter: 32px
  margin-desktop: 80px
  margin-mobile: 24px
  section-gap: 160px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style
The design system embodies an authoritative, strategic, and sophisticated personality tailored for high-level consulting. The visual direction is a fusion of **Modern Minimalism** and **Luxury Editorial**, utilizing heavy whitespace and a restricted, high-contrast palette to evoke a sense of wisdom and precision. 

The UI should feel "quietly powerful"—avoiding loud decorative elements in favor of perfect alignment, structural integrity, and premium material metaphors. Interactions are deliberate and smooth, reinforcing the brand's commitment to strategic clarity.

## Colors
The palette is rooted in a deep, monochromatic foundation with metallic accents. 
- **Primary (#0A0A0A):** The "Absolute Black" serves as the primary canvas, providing a high-end, void-like backdrop that makes content pop.
- **Secondary (#C5A059):** "Bronze Gold" is used exclusively for calls to action, active states, and key highlights to convey prestige.
- **Tertiary (#3D2B1F):** "Deep Umber" provides a sophisticated layer for containers and subtle depth, softer than pure black.
- **Neutral (#F5F5F5):** Used for primary body text and high-legibility labels against the dark backgrounds.

## Typography
The typography strategy relies on a high-contrast pairing between an authoritative serif and a utilitarian sans-serif.
- **Headlines:** Playfair Display is used for all major headings. Tighten letter-spacing slightly for larger display sizes to maintain a bespoke, editorial feel.
- **Body:** Inter provides a systematic, neutral counterpoint to the serif, ensuring multi-paragraph strategic reports remain highly readable.
- **Labels:** Use Inter in All Caps with generous letter spacing for utility text, navigation items, and section overlines to provide a modern, architectural rhythm.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy on desktop to maintain a controlled, high-end editorial composition. 
- **Grid:** Use a 12-column grid with a generous 32px gutter. 
- **Rhythm:** Embrace "aggressive" whitespace. Vertical gaps between major sections should be significant (120px to 160px) to force focus on one strategic insight at a time.
- **Mobile:** Transition to a 4-column grid with reduced margins (24px) but maintain high internal padding within cards to preserve the "breathable" aesthetic.

## Elevation & Depth
In this design system, depth is achieved through material density rather than traditional drop shadows.
- **Tonal Layers:** Use the Deep Umber (#3D2B1F) at 40-60% opacity for surface containers to create a "stealth" stacking effect.
- **Glassmorphism:** Reserve for persistent navigation bars and overlay modals. Use a heavy backdrop blur (20px+) with a 1px border in a low-opacity Neutral to simulate frosted obsidian.
- **Shadows:** When necessary for functional elevation, use extremely diffused, low-opacity black shadows (e.g., `0 20px 40px rgba(0,0,0,0.5)`) to avoid a "cheap" UI feel.

## Shapes
The shape language is disciplined and professional. 
- **Base:** Use "Soft" (0.25rem) corner radii for most components (buttons, inputs) to keep the aesthetic sharp and architectural.
- **Cards:** Larger containers may use `rounded-lg` (0.5rem) to provide a subtle hint of modern approachability without losing the brand's edge.
- **Avoid:** Rounding exceeding 8px or pill-shaped buttons, as they detract from the authoritative, "square" nature of executive consulting.

## Components
- **Buttons:** Primary buttons use a solid Bronze Gold (#C5A059) background with Black text. Secondary buttons are ghost-style with a 1px Bronze border. Hover states should feature a subtle 1.02x scale and a slight glow effect.
- **Input Fields:** Minimalist design with only a bottom border (1px) in a muted neutral. Upon focus, the border transitions to Bronze Gold with a smooth 200ms ease.
- **Cards:** Use the Deep Umber color for backgrounds with a 1px stroke of Neutral at 10% opacity. 
- **Chips/Tags:** Small, capitalized Inter text within a subtle dark-grey frame. No background fill unless active.
- **Iconography:** Use 1.5pt thin-line icons. Icons should be monochromatic (Neutral) or accented in Bronze Gold for interactive elements.
- **Micro-animations:** All transitions (hover, page load, modal) must use a "Cubic Bezier (0.16, 1, 0.3, 1)" easing profile to ensure a high-end, responsive feel.