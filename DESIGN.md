---
name: Indigo Precision
colors:
  surface: '#fcf8ff'
  surface-dim: '#dcd9df'
  surface-bright: '#fcf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f2f9'
  surface-container: '#f0ecf3'
  surface-container-high: '#ebe7ee'
  surface-container-highest: '#e5e1e8'
  on-surface: '#1c1b20'
  on-surface-variant: '#464650'
  inverse-surface: '#313035'
  inverse-on-surface: '#f3eff6'
  outline: '#777682'
  outline-variant: '#c7c5d2'
  surface-tint: '#5656a0'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#110c5a'
  on-primary-container: '#7c7cc9'
  inverse-primary: '#c2c1ff'
  secondary: '#5c5b7a'
  on-secondary: '#ffffff'
  secondary-container: '#dcd9fe'
  on-secondary-container: '#5f5e7d'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#3d0601'
  on-tertiary-container: '#c36c5a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2dfff'
  primary-fixed-dim: '#c2c1ff'
  on-primary-fixed: '#110c5a'
  on-primary-fixed-variant: '#3e3e87'
  secondary-fixed: '#e2dfff'
  secondary-fixed-dim: '#c5c3e7'
  on-secondary-fixed: '#191933'
  on-secondary-fixed-variant: '#444461'
  tertiary-fixed: '#ffdad3'
  tertiary-fixed-dim: '#ffb4a5'
  on-tertiary-fixed: '#3d0601'
  on-tertiary-fixed-variant: '#773123'
  background: '#fcf8ff'
  on-background: '#1c1b20'
  surface-variant: '#e5e1e8'
typography:
  display-lg:
    fontFamily: Work Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Work Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Work Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Work Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  data-mono:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: -0.01em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 40px
  xl: 64px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  max-width: 1280px
---

## Brand & Style
The design system is engineered for the high-stakes environment of Food & Beverage Quality Control, evolving from botanical themes into a more tech-forward aesthetic of **Digital Precision**. It embodies a philosophy of **Clinical Minimalism**: an approach that prioritizes structural clarity and data integrity. The UI evokes a sense of deep technical expertise and industrial reliability, ensuring that critical data points are never obscured by decorative elements.

The target audience consists of QC managers and floor inspectors who require high scannability and "at-a-glance" status reporting. By utilizing expansive whitespace and a structured typographic hierarchy, the design system transforms complex safety audits and laboratory results into a calm, organized, and focused digital workspace.

## Colors
The palette is rooted in a **Muted Violet and Deep Indigo** spectrum, moving away from organic greens toward a more sophisticated, high-tech instrument feel. This palette suggests ultraviolet sanitation and digital accuracy.

- **Primary (Muted Violet):** Used for primary actions, active states, and brand reinforcement.
- **Secondary (Cool Gray-Purple):** Reserved for metadata, secondary iconography, and auxiliary buttons.
- **Neutral/Background:** A crisp "Pure Surface" (#F9F9FF) for the primary workspace to emphasize cleanliness, with neutral grays used for structural differentiation.
- **Status Tones:** Highly calibrated tones are used exclusively for compliance status (Pass/Caution/Fail), ensuring they stand out against the cool brand palette.

## Typography
The typography system prioritizes legibility in low-light laboratory settings or high-glare factory floors. 

**Work Sans** is utilized for headings to provide a grounded, professional structure. Its slightly wider apertures ensure that titles remain readable even at a distance. **Inter** is the workhorse for all UI elements and data entry, chosen for its neutral tone and exceptional performance in data-heavy tables.

A strict vertical rhythm is maintained with a 4px baseline grid. **Labels** utilize a slightly heavier weight and increased letter spacing to distinguish them from user-generated data. For technical values (batch numbers, timestamps), a medium weight of Inter is used to mimic the clarity of monospaced fonts while maintaining the system's modern aesthetic.

## Layout & Spacing
The layout follows a **Hybrid Grid System**. For data-entry and inspection forms, a single-column centered fluid layout is used to minimize eye fatigue. For dashboards and reporting, a 12-column fixed grid (max 1280px) is employed to organize disparate data modules.

- **Desktop:** 12 columns, 24px gutters, 48px side margins.
- **Tablet:** 8 columns, 16px gutters, 24px side margins.
- **Mobile:** 4 columns, 16px gutters, 16px side margins.

The spacing rhythm is strictly even-numbered, based on an 8px unit. Generous padding (24px+) is applied to container elements to create "breathing room," reinforcing the brand's minimalist and organized personality.

## Elevation & Depth
This design system uses **Tonal Layering** combined with **Ambient Shadows** to define hierarchy. 

The base workspace is a light tinted canvas (#F9F9FF). Elements that require user interaction, such as cards or modals, are elevated using a "Soft Lift" shadow: a dual-layered shadow with a very low-opacity indigo tint (#0B0657 at 4% and 8% opacity) to keep the depth feeling natural and integrated.

Surface tiers:
1.  **Level 0 (Base):** Light Surface Tint (#F9F9FF) - The primary canvas.
2.  **Level 1 (Cards/Sections):** White with a 1px border (#757494 at low opacity) and a subtle shadow.
3.  **Level 2 (Dropdowns/Popovers):** Higher elevation with a more pronounced 12px blur shadow to indicate immediate priority.

Avoid heavy dark shadows; the goal is a "paper-on-table" effect rather than high-contrast floating elements.

## Shapes
The shape language balances the clinical nature of QC with modern software friendliness. A **Level 2 (Rounded)** approach is applied across the system.

Standard components like buttons, input fields, and cards utilize a **0.5rem (8px)** corner radius. This provides a soft, approachable feel while maintaining enough structural rigidity to look professional and "instrument-like." For status tags and decorative chips, a fully pill-shaped (rounded-full) radius is used to distinguish them from interactive buttons.

## Components

### Buttons
Primary buttons use the Muted Violet background with White text. Hover states shift the background to a deeper indigo shade. Secondary buttons use a 1px border with a transparent background. All buttons have a minimum height of 44px to ensure compliance during mobile inspections.

### Input Fields
Inputs are defined by a 1px Neutral border. On focus, the border thickens and changes to Muted Violet, accompanied by a soft lavender-tinted outer glow. Labels are always positioned above the input, never as placeholders, to maintain scannability during data entry.

### Cards
Cards are the primary container for QC tests. They feature a white background, 1px border, and the Level 1 elevation shadow. When a test within a card fails, the left border of the card increases to 4px and changes to the Status Error color.

### Status Chips
Small, non-interactive indicators used for "Pass," "Fail," or "Pending." These use a desaturated version of the status colors for the background with high-contrast text for maximum readability.

### Data Tables
Tables should use alternating row highlights (Zebra striping) in a very subtle violet tint to help inspectors track data across wide screens. Header rows are pinned and use a subtle secondary background with uppercase Work Sans labels.