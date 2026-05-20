# Context & Role
You are an expert Frontend Developer specializing in Nuxt 3, Vue 3 (Composition API), and Tailwind CSS. Your task is to build a responsive, single-page Web CV based on a specific UI reference.

# Project Requirements
- **Framework:** Nuxt 3
- **Styling:** Tailwind CSS
- **Icons:** Nuxt Icon (or Lucide Icons)
- **Animations:** Use `@vueuse/motion` or Tailwind CSS transitions with Intersection Observer (e.g., AOS or custom Vue directives) for scroll-triggered animations.
- **Data Architecture:** Do NOT hardcode the content in the Vue templates. Create a composable (e.g., `composables/useCvData.ts`) or a `data/cv.json` file to store all CV data (Experience, Education, Skills). 

# Visual & Layout Specifications

## Global Theme & Typography
- **Background:** Soft, off-white/light gray (e.g., `bg-slate-50` or `#F9FAFB`).
- **Text Color:** High contrast dark gray for primary text (`text-slate-900`), medium gray for secondary text (`text-slate-500`).
- **Typography:** Clean, modern Sans-Serif (e.g., Inter or Roboto).
- **Spacing:** Generous padding and margins to prevent a cluttered look. Use max-width containers (e.g., `max-w-6xl mx-auto`).

## Section Details & Animation Requirements

### 1. Navigation Bar (Header)
- **Layout:** Sticky top, flex container separating the Logo/Title (left) and Navigation links + "Download CV" button (right).
- **Styling:** Add a subtle glassmorphism effect (`backdrop-blur`) when scrolling down.
- **Animation:** Slide down from the top on initial page load.

### 2. Hero Section
- **Layout:** 2-column grid on desktop, stacking on mobile.
- **Left Column (Text):** - Status badge (e.g., "Available for Opportunities" with a pulsing dot indicator).
  - Main Heading: "Chairul Umam Pelayati" (Name)
  - Subheading: "Quality Control Specialist - F&B" (Role)
  - Paragraph: Brief professional summary.
  - Action Buttons: "Contact Me" (Solid dark) and "View Experience" (Outline).
- **Right Column (Visual):** A gray placeholder box for an image/illustration, with a small floating badge (e.g., "ISO 22000") overlapping the bottom right corner.
- **Animation:** - Staggered fade-in-up for the text elements (Badge -> Name -> Title -> Paragraph -> Buttons).
  - The right column image should softly fade in, and the floating badge should have a continuous, gentle "levitate" or floating animation (`translate-y` up and down).

### 3. Experience Section (Timeline)
- **Layout:** A vertical timeline down the center of the section.
- **Cards:** Experience cards alternate left and right on desktop (left aligned for one job, right aligned for the next). On mobile, stack them on one side.
- **Card Content:** Job Title, Date (badge), Company Name, and bullet points.
- **Bullet Points:** Use ample `line-height` and spacing. Prefix each point with a checkmark icon.
- **Animation:** - Scroll-triggered: Cards should fade in and slide slightly inward from their respective sides (left cards slide from left, right cards slide from right) as they enter the viewport.
  - Hover: Subtle scale-up (`scale-105`) and shadow enhancement on the cards.

### 4. Education & Training Section
- **Layout:** 2-column grid on desktop.
- **Left Column (Academic):** Vertical list with a connecting left border line (timeline style).
- **Right Column (Certifications):** A vertical stack of bordered, rectangular cards with a checkmark icon, certification title, and issuer/date.
- **Animation:** Staggered fade-in-up when scrolled into view. Cards should have a slight border-color transition on hover.

### 5. Core Competencies (Skills) Section
- **Layout:** 2-column layout. Left for "Technical Proficiency" and Right for "Professional Skills".
- **Styling (Tags/Pills):**
  - Technical: Dark blue background, white text (`bg-blue-900 text-white`).
  - Professional: Light gray/transparent background, dark text with a border (`bg-gray-100 border text-gray-700`).
  - Include small relevant icons inside the pills if possible.
- **Animation:** - Use a "pop-in" or staggered spring animation for the skill pills when they appear on the screen.
  - Hover: Pills should slightly scale up and shift background colors.

# Development Steps
1. Initialize Nuxt 3 project and install Tailwind CSS.
2. Set up the static data structure (JSON/TS).
3. Build the base layout and components without animations first.
4. Implement the scroll and load animations using the chosen library/method.
5. Ensure 100% responsiveness on mobile devices.

Please provide the code structure, the data file (`useCvData.ts`), and the Vue components starting with the Hero section.