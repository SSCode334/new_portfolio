# Gen-Z Dark Rave Portfolio - Design Guidelines

## Design Approach
**Reference-Based**: Drawing inspiration from futuristic rave culture, cyberpunk aesthetics, and modern developer portfolios with experimental UI (similar to CodePen creative showcases, Awwwards nominees, and Bruno Simon's portfolio style).

## Core Visual Identity

### Color Palette
- **Background**: Near-black (#0a0a0a to #121212) with subtle noise texture overlay
- **Neon Accents**: Electric purple (#a855f7), magenta (#ec4899), cyan (#06b6d4), acid green (#84cc16)
- **Use**: Glowing outlines, gradients, chromatic aberration-inspired effects on interactive elements
- **Contrast**: Maintain readability - white/light gray text on dark backgrounds

### Typography
- **Headlines**: Bold, geometric font (e.g., Space Grotesk, Clash Display) for impact
- **Body**: Clean sans-serif (e.g., Inter, DM Sans) for readability
- **Hierarchy**: 
  - Hero name: 4xl-6xl, bold weight
  - Section headings: 3xl-4xl with neon gradient or glow effect
  - Body text: base-lg with increased line-height for readability
  - Tech badges: sm-base, uppercase or semi-bold

### Layout System
**Spacing**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32 for consistent rhythm

## Component Library

### Navigation
- **Fixed top navbar**: Semi-transparent dark background with blur effect, neon bottom border
- **Layout**: Logo/monogram left, centered nav links, "Let's Talk" CTA button right
- **Hover states**: Neon glow on links, scale + enhanced glow on CTA

### Buttons
- **Primary (Neon)**: Dark background with neon border, glowing effect on hover with slight scale (1.05)
- **Secondary**: Ghost style with neon text, border appears on hover
- **CTA**: Larger size with gradient background and pulsing glow animation

### Cards
- **Project/Experience Cards**: Dark background with subtle neon border, rounded corners
- **Hover**: Scale (1.02), increased border glow, slight lift shadow in neon color
- **Content**: Title, description, tech stack pills at bottom

### Tech Badges/Pills
- Small rounded pills with dark background, neon border in accent color
- Hover: Background fills with semi-transparent accent color, subtle glow

### Section Wrappers
- Large vertical padding (py-20 to py-32)
- Animated section headings with underline or glow effect
- Staggered entrance animations for child elements

## Page-Specific Designs

### Hero Landing (/)
- **Layout**: Split screen - left content, right 3D scene
- **Left**: Name (massive), tagline, 1-2 line pitch, dual CTAs stacked or side-by-side
- **Right**: Full-height 3D canvas with rotating neon object (sphere/torus/abstract shape)
- **3D Scene**: Emissive materials, subtle camera orbit, dark environment with accent lighting
- **Animation**: Staggered text reveals (0.1s delay between elements)

### About & Skills (/about)
- **About Section**: Centered or left-aligned text block, max-width for readability
- **Skills**: Tab filters or section headers for categories (Frontend/Backend/Tools)
- **Display**: Grid of glowing pills OR horizontal skill bars with neon fill animation
- **Layout**: 2-3 columns on desktop, single column mobile

### Experience Timeline (/experience)
- **Layout**: Vertical timeline with neon connecting line down center
- **Cards**: Alternating left/right attached to timeline, or all left-aligned
- **Filters**: Toggle buttons for Work vs Education at top
- **Card Content**: Role/degree (bold), company/school, dates, description, tech pills
- **Animation**: Cards fade+slide in as user scrolls (IntersectionObserver triggers)

### Projects Gallery (/projects)
- **Grid**: 2 columns mobile, 3-4 columns desktop with equal height cards
- **Card Hover**: Scale, glow intensifies, action buttons appear (View Details, GitHub, Live)
- **Thumbnail**: Top of card with gradient overlay if needed for text contrast
- **Tech Stack**: Pills row at card bottom
- **Optional Detail Page**: Large hero image, full description, tech stack, external links as neon buttons

### Playground (/playground)
- **Layout**: 2-3 interactive canvas/demo sections stacked vertically
- **Examples**: Pointer-reactive particle field, shader-like animated gradient, simple 3D toy
- **Frame**: Each demo in bordered container with title/description

### Contact (/contact)
- **Form**: Centered, max-width 600px, dark inputs with neon focus borders
- **Fields**: Name, Email, Message (textarea) - all required with validation
- **Submit Button**: Large neon CTA, success state shows glowing message
- **Social Links**: Row of neon-bordered icon buttons with labels, glow on hover

### Footer
- Minimal centered text: copyright, small tagline
- Subtle neon top border
- Links to social profiles (small icons)

## Animations

### Framer Motion
- **Page Entrances**: Fade + slide up (y: 20 to 0), opacity 0 to 1, 0.6s duration
- **Stagger**: 0.1s delay between sibling elements
- **Scroll Reveals**: Trigger at 20% visibility, same fade+slide effect
- **Hover States**: Scale 1.05, increase glow, 0.2s duration with spring

### Barba.js Transitions
- **Out**: Full-screen overlay slides in from top/bottom, content fades (0.4s)
- **In**: Overlay slides away, new content fades+slides up (0.5s)
- **Overlay**: Dark with neon gradient edge, high z-index

## Images
- **Hero Section**: No traditional hero image - replaced by 3D canvas scene
- **Project Thumbnails**: Placeholder rectangles with gradient or screenshot mockups
- **Profile Image**: Optional circular avatar on About page with neon border glow
- All images on dark backgrounds should have subtle glow/border treatment

## Responsive Behavior
- **Mobile (<768px)**: Stack all sections, full-width cards, hide 3D or show simplified version
- **Tablet (768-1024px)**: 2-column grids, maintain most desktop features
- **Desktop (>1024px)**: Full multi-column layouts, split screens, enhanced 3D scenes