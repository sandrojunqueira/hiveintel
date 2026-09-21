# The Hive Intel — Design System

**The Hive** is the dedicated Nestlé media team inside UM Worldwide. **The Hive Intel** is its intelligence
product: a recurring briefing (and the surfaces around it) that reconciles platform, category, culture and
competitor signals into one read for Nestlé planners and marketers.

This design system covers the **Hive Intel landing page** — the marketing surface that explains the product
and gates access — plus the small set of primitives the briefing view itself needs.

## Sources supplied

Everything here derives from a brand-asset drop. No codebase, Figma file or existing production UI was
provided, so there was **no component inventory and no live UI to recreate**.

| Source | What it gave us |
| --- | --- |
| `Hive Intel White and Color (1).png` | Primary stacked lockup → `assets/logo-hive-intel-lockup.png` |
| `Hive Intel White and Color Horizontal.png` | Horizontal wordmark → `assets/logo-hive-intel-wordmark.png` |
| `nestle_hive_white.png` / `nestle_hive_color.png` | Nestlé × Hive co-brand lockups |
| `hexagon_hive.png`, `glow_hex.png`, `hal_hex.png` | Hex motif art → `hex-outline`, `hex-glow`, `hex-arc` |
| `hex_bg.png` (1920×1080) | Full-bleed hex texture backdrop |
| `hex_anim.mp4` (1920×1080, 6.0s) | Seamless hex motion loop for hero backgrounds |
| Gotham `.otf` × 14 | Complete Gotham family, Thin → Ultra with italics |
| Colour list (9 hex values) | The brand palette, tokenised verbatim in `tokens/colors.css` |

**Read this before extending the system:** the landing page and briefing view in `ui_kits/` are *original
compositions built from these foundations*, not recreations of an existing Hive Intel design. Where you have
real page designs, treat them as the truth and correct the kit.

## Index

| Path | What it is |
| --- | --- |
| `styles.css` | The single entry point consumers link. `@import` list only. |
| `tokens/` | `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `motion.css`, `base.css` |
| `assets/` | Logos, hex motifs, hex texture + motion loop, `assets/fonts/` (Gotham) |
| `components/core/` | Button, IconButton, Icon, Badge, Tag, Card, Divider, Eyebrow, GradientText, HexTile, Stat, Logo |
| `components/forms/` | Input, Textarea, Select, Checkbox, Radio, Switch |
| `components/navigation/` | NavBar, Tabs, Footer |
| `components/feedback/` | Dialog, Toast, Tooltip, ProgressBar |
| `components/marketing/` | HexBackdrop, SectionHeader, FeatureCard, QuoteBlock |
| `ui_kits/hive-intel-landing/` | The landing page + weekly-briefing view, click-through |
| `guidelines/` | 28 foundation specimen cards (Colors, Type, Spacing, Brand) |
| `SKILL.md` | Agent-Skills wrapper so this folder works inside Claude Code |

### Components

Every component is `<Name>.jsx` + `<Name>.d.ts` + `<Name>.prompt.md` in its directory, with one
`@dsCard` HTML per directory.

**core** — `Button`, `IconButton`, `Icon`, `Badge`, `Tag`, `Card`, `Divider`, `Eyebrow`, `GradientText`,
`HexTile`, `Stat`, `Logo`
**forms** — `Input`, `Textarea`, `Select`, `Checkbox`, `Radio`, `Switch`
**navigation** — `NavBar`, `Tabs`, `Footer`
**feedback** — `Dialog`, `Toast`, `Tooltip`, `ProgressBar`
**marketing** — `HexBackdrop`, `SectionHeader`, `FeatureCard`, `QuoteBlock`

#### Intentional additions

No source defined a component inventory, so this is an authored standard set. Four entries go beyond the
usual primitives because the brand demands them:

- **`HexTile`** — the hexagon is the brand's only shape motif; without a container for it every consumer
  would hand-roll a clip-path.
- **`HexBackdrop`** — the supplied texture and motion loop are unusable without a veil; this enforces it.
- **`GradientText`** — the gradient-in-type device appears in the logo itself and needs one governed home.
- **`Icon`** — a wrapper over the substituted Lucide set (see Iconography), so the substitution can be
  swapped in one file when a real icon set arrives.

---

## CONTENT FUNDAMENTALS

**Vibe.** Intelligence-agency calm. The product's promise is that someone already did the thinking, so the
copy never sounds excited. Confident, clipped, evidence-first. It is closer to a defence briefing than to a
SaaS landing page — and deliberately not "AI-powered platform" boilerplate.

**Person.** Second person for the reader, first-person plural for the team. *"Every signal Nestlé needs"* /
*"We stopped arguing about what happened."* Never *"I"*. Never anthropomorphise the product — Hive Intel
does not "think", analysts do. The distinction is a load-bearing brand claim: *"Machines find it. Analysts
prove it."*

**Casing.**
- Headlines and titles: **sentence case, with a full stop.** *"Four signals, one read."* The full stop is
  the house tic — it makes a headline read as a finding rather than a slogan.
- Eyebrows, labels, table headers, nav links, badges: **UPPERCASE with wide tracking** (0.22em eyebrows,
  0.06em labels). Two to four words, no punctuation.
- Buttons: sentence case, verb first, no full stop. *"Request access"*, *"Read this week"*, *"Open the working"*.
- Never Title Case Anything Like This.

**Length.** Headline ≤ 8 words. Section description = exactly one sentence. Body paragraph ≤ 3 sentences.
A card description is one sentence that says what the thing tells you, not what it is:
*"What actually changed on every platform Nestlé buys — ranked by what it costs or saves."*

**Numbers.** Always specific and always sourced. Tabular figures. Percentages get a sign (`+41%`, `−9%`).
Time is 24-hour with a zone (`07:00 GMT`). Weeks are `W33 2026`. Where a figure is illustrative, say so in
the caption — *"Sample data · last ingest 04:12 GMT"* — never let a placeholder pass as a fact.

**Punctuation.** Em dashes for the aside that carries the payoff. `·` (middle dot) separates metadata
fragments: *"Confectionery · UK & Ireland"*. No exclamation marks, ever. Oxford comma off.

**No emoji.** Not in UI, not in copy, not in decks. The brand's warmth comes from the gradient, not from
glyphs. Unicode symbols are limited to `·`, `—`, `×` (co-brand lockups), `&`, `−` (true minus in figures).

**Words we use:** signal, read, briefing, reconcile, interrogate, working (as a noun — "open the working"),
pulse, coverage, anomaly, market, category, plan delivery.
**Words we avoid:** insights (overused, means nothing), unlock, leverage, seamless, revolutionary,
game-changing, dashboard (we say *view* or *briefing*), data-driven, supercharge.

**Empty and error states** state the fact, then the recovery, in that order, with no apology:
*"Feed unavailable. TikTok ingest retrying."*

---

## VISUAL FOUNDATIONS

**The one-line summary.** Near-black surfaces, one gradient, hexagons, and a lot of restraint. Colour is
scarce so that when the electric→magenta gradient appears it means something.

**Colour.** Dark-first and non-negotiably so: `--surface-page` is pure `#000`. Panels step up through a
violet-biased neutral ramp (`#08060C` → `#191624`) — the blacks are never neutral grey, they carry a trace
of the brand violet. Text runs white `#FCFCFC` → `#B6B2C8` → `#8A85A8` → `#60598C`; the last is the
supplied *slate* and doubles as the disabled tone. `--hive-orchid` `#9F4DB0` is the link and accent-text
colour (electric `#9716F6` is too dark for small type on black); `--hive-electric` is for borders, fills and
focus. Only one saturated element per view. A light scope exists (`[data-hive-theme="light"]`) for print
and OOH; the product itself is never light.

**The gradient.** `linear-gradient(135deg, #9716F6 → #9F4DB0 → #DE3E7B)` — lifted from the logo's hexagon.
Rules: 135° default, 90° for wide bars and progress tracks, 180° for vertical rails; never rotate past 180°,
never add a fourth stop, never gradient a large area. Legitimate uses: primary button fills, hex tile
strokes, progress tracks, the 2px rule on a dialog's top edge, one clipped phrase in a headline, one hero
stat. That's the whole list.

**Type.** Gotham, all of it, no second family. Display and body are the same typeface — hierarchy comes from
weight and tracking, not contrast. Bold (700) for display with −3% tracking; Medium (500) for headings and
all UI labels; Book (400) for body at 1.45 line-height; Light (300) for lead paragraphs and pull quotes at
1.65 — the light weight at large size is the brand's most distinctive typographic move. Ultra (900) is
reserved for standalone numerals. Eyebrows are 12px Medium uppercase at 0.22em tracking, and they open every
section. The logo's wordmark is a bespoke wide face, not Gotham — never set "HIVE INTEL" in type, always use
the supplied art.

**Spacing.** 4px base grid, 8px working rhythm. Sections are 128px tall vertically (`--section-y`), 80px
when tight. Page max 1280px with 40px gutters; prose caps at 660px. Cards are padded 28px (20px dense,
36–40px featured). Grids use `display:grid` + `gap:var(--space-5)` — never margins between siblings.

**Corners.** Squarer than the category default: cards 16px, controls and inputs 6px, small squares 3px,
chips and progress tracks fully pill. Nothing between 16 and 24px. The hexagon does the shape-personality
work, so rectangles stay quiet.

**Cards.** `--surface-card` `#12101B`, a 1px `rgba(252,252,252,.08)` border, 16px radius, and a 1px
white-8% inset line along the top edge that reads as a light catch. Four variants: *default*; *glass*
(72%-opaque `#0D0A14` + `blur(14px) saturate(140%)`) — the only variant allowed over the hex texture or
video; *gradient* (default card + a 10%-electric `--grad-panel` wash) for the single featured item in a
grid; *outline* (transparent, 12% border) for quiet grids.

**Shadows.** On near-black, a grey drop shadow is invisible, so elevation is expressed two ways: an
*inset top highlight* (the 1px white line) for lift, and a *coloured bloom* for state. `--shadow-card`
combines the highlight with a deep `rgba(0,0,0,.9)` spread; `--glow-accent` is a 1px electric ring plus a
28px electric bloom. Glow means "this is active/hovered/focused" — one glowing thing per view. There is no
"shadow scale" used decoratively; unhovered cards get `--shadow-card` and nothing more.

**Backgrounds.** Three treatments, in order of frequency: (1) flat black — most sections; (2) `hex-bg.png`
full-bleed under a veil — for the coverage and closing bands; (3) `hex-anim.mp4` full-bleed under a veil —
the hero, once per page. **The veil is mandatory**: `--grad-veil-up` (transparent → black, bottom-heavy) is
the default, `--grad-veil` inverts it, `--black-a64` is the flat option. Type never sits on raw texture.
Repeating CSS-drawn hex patterns are not a thing here — use the supplied art. No noise/grain overlay
(`--grain-opacity` exists at 5% but is unused on the landing page).

**Imagery.** The supplied art is cool, dark and synthetic — extruded hex geometry lit from behind in violet
and magenta, deep black shadows, no warmth, no people, no grain. Any added photography must match: cool
cast, near-black shadows, high contrast, and it must be veiled. Never warm, never bright, never stock-office.

**Transparency and blur.** Blur is a *layering* signal, never decoration. It appears in exactly three
places: the nav bar once scrolled, `glass` cards over media, and the dialog scrim (`black 64%` +
`blur(6px)`). Everything else is opaque. Borders are always white at 8/12/24% — never a solid grey line.

**Motion.** Purposeful and short. 140ms for controls, 220ms for surfaces, 380ms for entrances, all on
`--ease-standard` `cubic-bezier(.2,.6,.2,1)` or `--ease-out` for entrances. **No bounce, no overshoot, no
spring, no scale-in.** Entrances are a fade plus a small upward translate. The only continuous motion on a
page is the 6-second hex loop; nothing else animates ambiently. Respects
`prefers-reduced-motion` — durations collapse to 0ms.

**Hover.** Interactive surfaces lift `translateY(-3px)` and gain `--glow-accent`; the background steps one
level lighter (`--surface-card` → `--surface-card-hover`) and the border goes 8% → 12%. Buttons lift 1px;
the primary gains `brightness(1.06)` plus a stronger bloom rather than changing colour. Ghost items go
from muted to white text. Nothing scales, nothing changes radius.

**Press.** No separate press colour. The lift simply releases — `transform` returns to 0 — which reads as a
physical press against the bloom. Do not darken or shrink.

**Focus.** `--ring`: a 2px page-coloured spacer then a 4px `rgba(151,22,246,.56)` halo. Applied via
`:focus-visible` only. Inputs additionally turn their border electric and gain `--glow-accent`.

**Layout rules.** The nav is sticky and transparent over the hero, becoming a glass bar with a hairline once
the page scrolls past 40px. The footer sits on `--neutral-950` — one step off black — so the page reads as
ending. Toasts stack bottom-right at 32px inset. Dialogs are centred, max 520px, with a 2px gradient rule
across the top edge. Nothing else is fixed.

**Charting.** No chart library. Share and proportion are shown as `ProgressBar`s on a white-8% rail with a
90° gradient fill — the same device at 3px, 6px or 10px height. Deltas are text plus a Lucide
`trending-up`/`trending-down`, green for up and brand magenta for down.

---

## ICONOGRAPHY

**⚠️ SUBSTITUTION — needs your input.** The asset drop contained **no icon set**: no icon font, no SVG
sprite, no individual glyph files. The only vector-adjacent brand art is the hexagon family
(`hex-outline`, `hex-glow`, `hex-arc`), which are raster PNGs.

We substituted **[Lucide](https://lucide.dev) 0.544.0**, loaded from CDN
(`unpkg.com/lucide@0.544.0/dist/umd/lucide.min.js`) and wrapped in `components/core/Icon.jsx`. Lucide was
chosen because it is stroke-only on a 24px grid with round caps and joins — the same construction logic as
the hexagon mark's rounded-corner outline. It is the closest available match to the brand's line quality.
**If Hive Intel has a real icon set, send it and we will swap it inside `Icon.jsx` alone.**

**How icons are used here**
- **Stroke only.** No filled glyphs, no duotone, no icon backgrounds other than `HexTile`.
- **Weight:** `strokeWidth` 1.5 is the default; 2 only at 14px and below, where 1.5 disappears.
- **Sizes:** 12–13px inside badges and metadata, 16–17px inside buttons and inputs, 20px in nav and
  toolbars, 24px standalone, 26–40px inside a `HexTile`.
- **Colour:** always `currentColor`. Colour the parent element, never the icon. Icons are never gradient —
  the gradient belongs to the hex container around them, not the glyph.
- **The hexagon is the icon frame.** Feature, capability and step icons go inside `HexTile`
  (`--hex-clip-pointy`, flats left/right, matching the logo). Never place a plain circle behind an icon.
- **Never** hand-draw an SVG icon, never use emoji as an icon, never use a unicode dingbat as an icon.
  If a glyph is missing from Lucide, ask rather than draw.

**Glyphs the product leans on:** `radar`, `brain`, `target`, `line-chart`, `activity`, `zap`,
`trending-up`, `trending-down`, `arrow-right`, `arrow-left`, `chevron-right`, `chevron-down`, `search`,
`mail`, `bell`, `download`, `share-2`, `file-text`, `message-square`, `info`, `check`, `check-circle`,
`alert-triangle`, `alert-circle`, `x`, `play`.

**Brand marks are never icons.** The logo hexagon is supplied art — use `Logo` / the PNGs in `assets/`.
Do not redraw, recolour, outline, or reconstruct any Hive or Nestlé mark.

---

## FONTS

The full Gotham family shipped with the brief and is included in `assets/fonts/` (14 files, Thin → Ultra
with matching italics), declared in `tokens/fonts.css`. **No font substitution was necessary.** Gotham is a
licensed Hoefler&Co typeface — confirm the licence covers web embedding before shipping the `.otf` files on
a public domain. The logo wordmark uses a separate bespoke wide face which was *not* supplied; the supplied
logo art is the only correct way to set the brand name.
