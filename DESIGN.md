# DESIGN.md

## Design Overview

This portfolio should combine three visual ideas:

1. a modern software terminal
2. a subtle interpretation of The Fool tarot card
3. an elegant editorial portfolio

The final interface should feel:

* futuristic
* intelligent
* personal
* polished
* minimal
* slightly mystical
* professional
* technically credible

The website must not feel like:

* a literal terminal emulator
* a hacker movie interface
* a neon cyberpunk dashboard
* a fantasy game menu
* a fortune-telling website
* a heavily ornamented tarot site
* a generic portfolio template

The terminal and tarot references should support the content, not overpower it.

---

## Core Concept

The homepage represents the start of a journey.

The Fool is used as a symbol of:

* new beginnings
* curiosity
* exploration
* courage
* possibility
* learning through experience

The website may use restrained references such as:

```txt
0
THE FOOL
NEW BEGINNINGS
THE JOURNEY STARTS HERE
ONE COMMIT AT A TIME
```

Do not repeatedly explain tarot meanings to visitors.

The visual identity should remain understandable even to visitors who know nothing about tarot.

---

## Primary Experience

The visitor should immediately understand:

* who Grace Karina is
* what she does
* what kind of work she creates
* where to view her projects
* how to contact her

Visual storytelling is secondary to clarity.

The homepage should feel like an elegant personal system interface rather than a decorative landing page.

---

## Visual Hierarchy

The hierarchy should be:

1. Grace Karina
2. professional role
3. concise introduction
4. primary calls to action
5. profile visual
6. portfolio navigation
7. supporting terminal and tarot details

Decorative elements must never compete with the name, role, project information, or contact actions.

---

## Theme Modes

The website must support both dark and light mode.

Both themes should feel intentionally designed.

Dark mode must not simply invert light mode.

Light mode must not look like a faded version of dark mode.

---

## Dark Theme

Dark mode should feel like an elegant night terminal.

Suggested direction:

```txt
background: deep navy-black
surface: slightly lighter navy
foreground: warm off-white
muted text: cool gray
terminal accent: muted chartreuse
tarot accent: antique gold
border: low-contrast blue-gray
```

Suggested semantic values:

```css
.dark {
  --background: 222 47% 5%;
  --foreground: 40 30% 92%;

  --card: 220 38% 7%;
  --card-foreground: 40 30% 92%;

  --popover: 220 38% 7%;
  --popover-foreground: 40 30% 92%;

  --primary: 76 45% 62%;
  --primary-foreground: 222 47% 7%;

  --secondary: 220 24% 12%;
  --secondary-foreground: 40 25% 90%;

  --muted: 220 22% 11%;
  --muted-foreground: 218 12% 65%;

  --accent: 35 54% 59%;
  --accent-foreground: 222 47% 7%;

  --border: 218 22% 18%;
  --input: 218 22% 18%;
  --ring: 76 45% 62%;
}
```

These values are starting points. Adjust them to meet contrast requirements.

Avoid fully black backgrounds.

Avoid highly saturated green.

Avoid bright yellow metallic gradients.

---

## Light Theme

Light mode should feel warm, editorial, and technical.

Suggested direction:

```txt
background: warm ivory
surface: soft cream
foreground: dark navy
muted text: warm gray
terminal accent: muted burnt orange
tarot accent: restrained antique gold
border: warm gray
```

Suggested semantic values:

```css
:root {
  --background: 40 38% 97%;
  --foreground: 222 45% 11%;

  --card: 42 35% 99%;
  --card-foreground: 222 45% 11%;

  --popover: 42 35% 99%;
  --popover-foreground: 222 45% 11%;

  --primary: 222 45% 13%;
  --primary-foreground: 40 38% 97%;

  --secondary: 38 25% 92%;
  --secondary-foreground: 222 38% 16%;

  --muted: 38 24% 93%;
  --muted-foreground: 220 10% 42%;

  --accent: 27 50% 52%;
  --accent-foreground: 40 38% 98%;

  --border: 34 22% 84%;
  --input: 34 22% 84%;
  --ring: 27 50% 52%;
}
```

Avoid pure white across the entire page.

Avoid pale gold text on white backgrounds.

---

## Accent Usage

Use two supporting accent families.

### Terminal Accent

Dark mode:

```txt
muted chartreuse
```

Light mode:

```txt
muted burnt orange
```

Use the terminal accent for:

* command prompts
* active navigation indicators
* small arrows
* terminal metadata
* focus accents
* restrained code-like labels

### Tarot Accent

Use antique gold for:

* The Fool number
* thin tarot borders
* small celestial symbols
* decorative separators
* subtle highlights

Do not apply gold to every heading or border.

The tarot accent should appear less frequently than the terminal accent.

---

## Typography

Use an editorial serif for identity and major headings.

Use a clean sans-serif for body text and interface labels.

Use a monospaced font for terminal commands and metadata.

Suggested categories:

```txt
display serif:
- Cormorant Garamond
- Instrument Serif
- DM Serif Display

interface sans:
- Geist
- Inter
- Manrope

monospace:
- Geist Mono
- IBM Plex Mono
- JetBrains Mono
```

Preferred direction:

```txt
display: Instrument Serif or Cormorant Garamond
body: Geist
terminal: Geist Mono
```

Do not use more than three font families.

---

## Type Scale

Suggested responsive scale:

```txt
hero name:
mobile: 3rem–4rem
desktop: 5rem–7rem

section heading:
mobile: 2rem–2.5rem
desktop: 3rem–4rem

card heading:
mobile: 1.25rem–1.5rem
desktop: 1.25rem–1.75rem

body:
mobile: 1rem
desktop: 1rem–1.125rem

terminal label:
0.75rem–0.875rem
```

Use fluid sizing where appropriate.

Avoid excessively small text for aesthetic reasons.

Terminal text must remain readable.

---

## Layout System

Use a centered fluid container.

Suggested direction:

```txt
maximum content width: 1280px–1440px
page padding:
mobile: 20px–24px
tablet: 32px
desktop: 48px–64px
```

Use generous vertical spacing.

Suggested section spacing:

```txt
mobile: 80px–112px
desktop: 120px–176px
```

Borders and dividers should be thin and low contrast.

Avoid placing every section inside a boxed card.

---

## Header

The desktop header should contain:

* Grace Karina wordmark
* Home
* Projects
* Experience
* Achievements
* Blog
* Contact
* theme toggle

The header may use a terminal-window-inspired top bar, but it must still behave like a normal website header.

Suggested desktop behavior:

* horizontally aligned
* restrained height
* subtle bottom border
* sticky or static
* active section indicator
* theme toggle on the right

The active link may use:

```txt
_home
```

or:

```txt
/home
```

Choose one system and use it consistently.

Do not make every navigation label look like a command.

---

## Mobile Header

The mobile header should contain:

* Grace Karina
* theme toggle or theme control
* menu trigger

The mobile menu should open as an accessible sheet or dialog.

Menu items should have comfortable touch targets.

Do not compress all desktop navigation links into one small horizontal row.

The menu must remain usable with keyboard navigation.

---

## Hero Section

The hero is the visual identity of the website.

Desktop direction:

```txt
left:
- terminal command
- name
- role
- introduction
- call-to-action buttons

right:
- profile visual
- terminal-window frame
- subtle tarot structure
- The Fool number and label
```

A reversed arrangement is acceptable if balance improves.

Suggested terminal label:

```txt
grace@portfolio:~$ cat intro.txt
```

Suggested identity:

```txt
Grace Karina
```

Suggested role:

```txt
Software Engineer, Data Enthusiast, and Builder
```

Suggested introduction:

```txt
I build thoughtful digital products at the intersection of
software engineering, data, and human experience.
```

Suggested primary actions:

```txt
View Projects
Get in Touch
```

Suggested tarot metadata:

```txt
0
THE FOOL
NEW BEGINNINGS
```

---

## Hero Profile Visual

The profile image should remain separate from decorative framing.

Do not place important text permanently inside a raster image.

The profile visual may combine:

* a portrait
* thin tarot-card border geometry
* terminal window controls
* restrained radial lines
* one path or horizon motif
* the number `0`
* a small `THE FOOL` label

The frame should not resemble a traditional ornate tarot card too literally.

Use technical geometry:

* thin corner marks
* alignment points
* small crosshairs
* terminal title bar
* restrained line illustrations

The profile image should remain the focal point.

---

## Hero Mobile Layout

The mobile hero must be intentionally redesigned, not merely scaled down.

Preferred order:

1. terminal command
2. name
3. role
4. introduction
5. call-to-action buttons
6. profile visual

An alternate compact layout may place the portrait beside the name on wider mobile screens, but readability takes priority.

On small mobile screens:

* stack the layout
* use full-width or near-full-width buttons
* reduce decorative line density
* reduce celestial details
* avoid fixed viewport height
* prevent the portrait from becoming too narrow
* maintain readable line lengths

The profile card should not consume the entire first viewport.

The visitor should see the identity and at least one action without excessive scrolling.

---

## Terminal Visual Language

Terminal styling should appear through:

* monospaced commands
* small prompt indicators
* technical labels
* subtle window chrome
* understated grid texture
* command-inspired section captions

Examples:

```txt
grace@portfolio:~$ cat intro.txt
grace@portfolio:~$ ls ./projects
grace@portfolio:~$ git log --experience
grace@portfolio:~$ find ./achievements
grace@portfolio:~$ ls ./blog
grace@portfolio:~$ send-message
```

Use no more than one prominent command per section.

Do not force users to type commands.

Do not hide content behind terminal interactions.

Do not simulate a boot sequence.

Do not use fake loading delays.

---

## The Fool Visual Language

The Fool should appear mainly in the hero.

Supporting motifs may include:

* `0`
* a path moving toward a horizon
* one sun or star
* a small companion symbol
* an open landscape
* a sense of forward movement

Keep the illustration abstract and geometric.

Do not use:

* dense zodiac wheels
* multiple tarot characters
* crystal-ball imagery
* fortune-telling copy
* repeated card borders on every section

Other sections do not need separate tarot card identities.

---

## Project Section

Projects should emphasize actual work.

Suggested section command:

```txt
grace@portfolio:~$ ls ./projects
```

Each project card should contain:

* project title
* concise description
* role or category
* technologies
* project image
* relevant links

Cards may use a restrained technical window style.

They should not all look like tarot cards.

Suggested visual treatment:

* rectangular preview area
* subtle border
* project number
* small terminal metadata
* strong readable title
* technology badges
* clear hover and focus states

Desktop:

* two or three columns depending on content width

Mobile:

* one column
* full-width project cards
* no hover-dependent information

---

## Experience Section

Suggested section command:

```txt
grace@portfolio:~$ git log --experience
```

Use a clean timeline or chronological list.

Each item should show:

* company
* role
* period
* short description
* selected impact
* technologies where relevant

The timeline may borrow from a Git history graph, but it should remain readable.

Avoid complicated branching diagrams.

Desktop may use a vertical line with content beside it.

Mobile should use a simple stacked list.

---

## Achievements Section

Suggested section command:

```txt
grace@portfolio:~$ find ./achievements
```

Achievements may use a compact grid.

Each item should include:

* achievement name
* organization or context
* year
* optional short description

Use small symbolic line icons where appropriate.

Do not assign a different tarot card to every achievement.

Avoid making achievements look like collectible game cards.

---

## Blog Section

Suggested section command:

```txt
grace@portfolio:~$ ls ./blog
```

The blog should feel more editorial than terminal-like.

Each article preview should show:

* date
* category
* title
* description
* reading time

Use serif article titles and restrained metadata.

The blog detail page should prioritize reading comfort.

Suggested article content width:

```txt
680px–760px
```

Use clear spacing for:

* headings
* paragraphs
* lists
* code blocks
* images
* quotes

---

## Contact Section

Suggested section command:

```txt
grace@portfolio:~$ send-message
```

The contact section should feel inviting.

Suggested heading:

```txt
Let’s build something meaningful.
```

The form should contain:

* name
* email
* subject
* message
* submit button

Use standard form labels.

Do not style the form like a command-line input.

Terminal language may appear in the section caption or submit feedback only.

Success example:

```txt
message sent successfully
```

Error messages must remain human-readable.

---

## Footer

The footer may contain:

* short personal statement
* GitHub
* LinkedIn
* email
* copyright

Suggested terminal-style statement:

```txt
grace@portfolio:~$ whoami
Grace Karina — building things that matter.
```

Keep the footer visually quiet.

---

## Buttons

Primary buttons should be visually clear.

Dark mode primary:

* muted chartreuse or warm pale accent
* dark text
* restrained border
* no neon glow

Light mode primary:

* dark navy background
* warm light text

Secondary buttons:

* transparent or subtle surface
* visible border
* strong focus state

Buttons may include a small arrow or command prompt marker.

Do not use large rounded pill buttons everywhere.

Suggested radius:

```txt
6px–10px
```

---

## Cards

Card radius should remain restrained.

Suggested radius:

```txt
8px–16px
```

Avoid extremely rounded cards.

Use subtle surface contrast rather than heavy shadows.

Dark mode cards may use:

* thin blue-gray border
* slightly raised navy surface

Light mode cards may use:

* warm off-white surface
* subtle warm-gray border
* very soft shadow

---

## Icons

Use Lucide icons for functional UI.

Examples:

* menu
* close
* sun
* moon
* arrow
* mail
* GitHub
* external link
* briefcase
* code

Use custom SVG only for decorative tarot or celestial motifs.

Functional icons must not be baked into background images.

---

## Background Treatments

Suitable background details:

* low-opacity grid
* subtle noise
* sparse stars
* thin horizon line
* soft radial glow
* small technical markings

Background effects must remain subtle.

Suggested opacity:

```txt
2%–10%
```

Avoid large visible patterns behind body text.

Do not use intense gradients across every section.

---

## Borders and Lines

Use thin borders.

Suggested width:

```txt
1px
```

Use thicker borders only for active or focused elements.

Decorative lines may use:

* corner markers
* short horizontal rules
* technical alignment ticks
* small stars

Do not frame the entire page with a highly ornate border.

---

## Animation

Animations should feel precise, not magical.

Suitable effects:

* 150–250ms hover transitions
* subtle opacity reveal
* 8–16px vertical movement
* gentle border emphasis
* small arrow translation
* restrained cursor blink
* slow decorative drift

A terminal cursor may blink near a command label, but only one prominent blinking cursor should exist at a time.

Avoid:

* typing the entire hero text on every load
* long intro sequences
* repeated card flips
* sparkling across the page
* heavy parallax
* cursor trails
* large 3D tilts

Respect reduced-motion preferences.

---

## Responsive Behavior

### Mobile

```txt
single-column content
compact header
accessible mobile menu
stacked hero
one-column project cards
stacked experience
two-column achievement grid when space permits
single-column contact form
reduced decoration
```

### Tablet

```txt
hero may remain stacked or use a balanced split
two-column project grid
two-column achievement grid
moderate page padding
```

### Desktop

```txt
two-column hero
multi-column project layouts
timeline or structured experience layout
larger editorial typography
more visible but restrained decoration
```

Do not make desktop content excessively wide.

---

## Image Direction

The profile image should be:

* professional but personal
* clearly lit
* high resolution
* framed from approximately waist or chest upward
* visually compatible with both themes

The dark and light themes may use:

* the same transparent portrait
* theme-specific background framing
* theme-specific decorative line colors

Do not create separate altered identities for each theme.

Project images should show real interfaces whenever possible.

Use WebP or AVIF for raster assets.

Use SVG for line illustrations.

---

## Asset Structure

Suggested asset organization:

```txt
public/
└── assets/
    ├── profile/
    │   └── grace-profile.webp
    ├── tarot/
    │   ├── fool-frame.svg
    │   ├── fool-landscape.svg
    │   └── fool-symbol.svg
    ├── backgrounds/
    │   ├── terminal-grid.svg
    │   └── noise.webp
    └── projects/
```

Do not create separate raster screenshots containing the complete hero.

The profile, frame, text, and decorative illustration should remain separate layers.

This allows:

* responsive positioning
* accessible text
* theme-aware colors
* easier future editing
* better image quality

---

## Content Tone

Copy should be:

* confident
* thoughtful
* warm
* concise
* professional
* technically informed

Avoid generic phrases such as:

```txt
passionate developer
coding enthusiast
turning coffee into code
```

Prefer specific language about:

* products
* engineering
* data
* meaningful impact
* curiosity
* continuous learning

Tarot-related copy should remain subtle.

---

## Design Do

* prioritize Grace’s identity
* support light and dark mode equally
* use terminal details sparingly
* keep The Fool primarily in the hero
* make all content readable
* preserve professional credibility
* use consistent spacing
* use semantic theme tokens
* design mobile intentionally
* keep decorative assets separate from content
* maintain clear calls to action

---

## Design Do Not

* do not use neon cyberpunk colors
* do not simulate a real command-line interface
* do not require command input
* do not use ornate tarot frames everywhere
* do not cover the page in celestial symbols
* do not place text inside raster artwork
* do not use tiny monospaced text
* do not create excessive glow
* do not use large animations
* do not hide navigation for aesthetic reasons
* do not sacrifice accessibility
* do not build the full page as one giant component

---

## First Implementation Scope

The first implementation should include only:

* global typography
* semantic theme tokens
* light and dark mode
* responsive site header
* accessible mobile navigation
* theme toggle
* homepage module foundation
* hero section
* profile placeholder or supplied portrait
* terminal-inspired hero details
* restrained The Fool framing

Do not implement the full:

* projects section
* experience section
* achievements section
* blog
* contact form

Navbar links may point to future section IDs temporarily.

The first implementation should establish a strong reusable foundation before additional content is added.

---

## Design Acceptance Criteria

The initial hero is successful when:

* Grace’s name is immediately visible
* the professional role is immediately understandable
* the primary actions are obvious
* dark and light mode both look intentional
* the terminal influence is visible but restrained
* The Fool reference is clear but subtle
* mobile does not feel like a compressed desktop layout
* there is no horizontal overflow
* text contrast is accessible
* decorative elements do not interfere with interaction
* the interface still feels professional without the decoration
