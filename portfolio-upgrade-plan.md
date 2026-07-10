# Portfolio Upgrade Plan

A plan to upgrade the React + Vite + TypeScript + Tailwind portfolio at
`pixiiidust.github.io/portfolio`. Hand this to a coding agent (Claude Code or
Cursor) run from the repo root. All copy is final, so there is nothing to fill in.

**Read this first.** An earlier pass on this site regressed the design: it
replaced the real profile photo with a generated pixel-art character, dropped the
Hobbies section, stacked the sections in the wrong order, and turned the layout
into a wall of boxes. This plan restores the original look and content, then makes
a small set of deliberate improvements on top. When in doubt, the pre-upgrade
commit is the source of truth for styling and assets. Do not invent new visuals.

Two kinds of work sit on the site, and they are different:
- **Case studies** are past professional work (Product Lead roles).
- **AI projects** are personal side projects.

Keep that separation in the layout. Do not blur them into one list.

---

## 1. Objective

1. Restore the original neo-brutalist look and its content (real photo, ticker,
   status bar, Hobbies).
2. Give every case study and every AI project its own URL and page, and give the
   bio its own page. Remove the modal pattern.
3. Replace the boxed card grid with a cleaner **editorial index** layout that is
   scannable and not cluttered.
4. Apply the final written copy (intro, bio, case studies, projects).
5. Make the detail pages read well: a centered reading column, lighter section
   headers, and semi-bold weight instead of heavy bold everywhere.

## 2. What changes, in short

- **Restore** the original profile photo, the top ticker, the footer status bar,
  and the Hobbies content from the pre-upgrade commit. Do not regenerate any
  image.
- **Add routing.** Each case study, each project, and the bio become shareable
  pages. Remove all modals.
- **Home becomes an editorial index:** the intro block (keep its original
  layout), then AI Projects, then Case Studies, each as a clean list of rows, not
  boxed cards.
- **Bio moves to its own `/about` page** with the photo, the two first
  principles, Highlights, Current Focus, Education, and Hobbies.
- **Detail pages** get a centered reading column, light section headers, and
  semi-bold type.

---

## 3. Architecture

### Routing and URLs (GitHub Pages safe)

- Add `react-router-dom`. Wrap the app in `BrowserRouter` with
  `basename="/portfolio"`.
- GitHub Pages has no SPA server routing, so add the spa-github-pages fix: a
  `404.html` that redirects to `index.html` with the path preserved, and the
  matching redirect snippet in `index.html`. This makes clean URLs survive a
  direct visit and a hard refresh.
- Routes:
  - `/` index
  - `/about` bio page
  - `/work/:slug` case studies
  - `/projects/:slug` AI projects
- Use descriptive slugs, not numbers. For example `ecommerce-inventory`,
  `mobile-transformation`, `twelve-hour-launch`, `lky-brain`, `pixi-wiki`,
  `j-space-replay`, `planned-program-intel`.

### Navigation

- Keep the header minimal, like the original: the "JAMIE SIM" wordmark links
  home. Do not add a heavy horizontal nav bar of five items.
- Provide a small, quiet nav with three links only: HOME, ABOUT, CONTACT. On
  desktop show it inline in the header. On mobile collapse it behind a hamburger
  toggle that opens a full-width panel in the same brutalist language (thick
  border, hard shadow). Keyboard accessible: visible focus states, and Escape
  closes it.
- Detail pages and `/about` have a "BACK TO INDEX" link at the top.

### Data model

Replace the arrays in `constants.ts` with typed content. Update `types.ts`.
Case studies and projects have slightly different shapes.

```ts
type Link = { label: string; href: string };

type CaseStudy = {
  slug: string;
  kind: 'work';
  title: string;
  tagline: string;      // one line for the index row
  role: string;         // e.g. "Product Lead, Bluewater Media"
  status: string;       // e.g. "Shipped & Scaled"
  tech: string[];
  links: Link[];
  insight: string;      // the spotlight line, shown first on the detail page
  context: string;
  goal: string;
  hypothesis: string;
  problem: string[];
  solution: string;     // markdown; may contain a list or a timeline
  metrics: string[];    // "north star", "result", "impact" lines
  risks?: string[];     // risk / mitigation / counter-metric lines
  reflection?: string;
};

type Project = {
  slug: string;
  kind: 'project';
  title: string;
  tagline: string;
  tech: string[];
  links: Link[];
  insight: string;
  problem: string;
  approach: string;
  result: string;
  reflection?: string;
};
```

Long fields are markdown strings. Render them with a small markdown component
(for example `react-markdown`) or pre-structured JSX. Either is fine.

### Page structure

**Index page (`/`)**, top to bottom:
1. Top ticker (restored from the original).
2. Hero: the real black-and-white profile photo, then "JAMIE SIM".
3. Introduction block. Keep the original two-column layout exactly: the
   "INTRODUCTION" label on the left, the intro line and the "ABOUT ME >>>" button
   on the right.
4. **AI Projects** section (this comes first).
5. **Case Studies** section.
6. Contact section (restored, with the existing icons).
7. Footer status bar (restored from the original).

**Editorial index layout (this replaces the card grid).** For both the AI
Projects and Case Studies sections:
- Keep the original full-width black section-header bar ("AI PROJECTS",
  "CASE STUDIES").
- Below it, render the items as a vertical list of rows in a single centered
  column, not as a grid of bordered boxes. Separate rows with a single thin
  horizontal rule. No box, border, or drop shadow around each item.
- Each row has: the title (semi-bold), a one-line tagline under it, the tech tags
  as small quiet text, and an action link on the right (READ for case studies;
  MODEL / CODE / LAUNCH for projects, using each item's `links`). Clicking the
  row title opens its detail page; external links open in a new tab.
- Give each row generous vertical padding so the list breathes. The whole section
  should read like a clean, considered index, not a dense wall.

**`/about` page**, top to bottom:
1. "BACK TO INDEX" link.
2. The real profile photo and "JAMIE SIM".
3. The bio (two first principles as a bulleted list; see 5.2).
4. Highlights, Current Focus, Education as clean sections with light semi-bold
   labels (not filled black chips).
5. Hobbies (restored content; music and lyrics, with the YouTube link).

**Case study detail page** (`/work/:slug`), in this order:
1. "BACK TO INDEX" link.
2. Title, with `role` and `status` as small meta chips.
3. Tech tags and external links.
4. **The insight** (spotlighted; this is the hook, see styling below).
5. Context.
6. Goal.
7. Hypothesis.
8. The problem (bulleted).
9. The solution.
10. Measuring success (metrics).
11. Risks and mitigation (if present).
12. What I'd do differently (if present).

**AI project detail page** (`/projects/:slug`), lighter, in this order:
1. "BACK TO INDEX" link.
2. Title, tech tags, external links.
3. The insight (spotlighted).
4. The problem.
5. The approach.
6. The result.
7. What I'd do differently (if present).

### Detail page styling (fixes the current clutter)

The current detail pages render a narrow column pushed to one side, every section
wrapped in its own filled black label box, and heavy bold everywhere. Fix all
three:

- **Center the reading column.** `margin: 0 auto`, `max-width` about 720px
  (roughly 65 characters per line). The column sits in the middle of the page;
  text is left-aligned inside it. It must not float to one side with empty space
  beside it.
- **Light section headers, not boxes.** Render each section heading (Context,
  Goal, Hypothesis, and so on) as a simple uppercase accent-colour label with
  letter-spacing, followed by a thin rule or just spacing. Do not wrap each
  section in a filled black chip.
- **Keep only two distinct blocks.** The Insight spotlight at the top and the
  Metrics block may keep a subtle background or frame. Everything else flows as
  clean text sections separated by whitespace.
- **Spacing.** Consistent vertical rhythm between sections, about 32 to 40px.

---

## 4. Design system: keep the original, apply these rules

Do not redesign the visual style. Reuse the existing components, colours, borders,
hard offset drop shadows, uppercase tracking, and corner-triangle accents. The
ticker and the footer status bar are original; keep them. The following are the
only global adjustments.

### Typography: semi-bold, not heavy bold

The current build uses heavy bold (700) for almost everything, which flattens the
hierarchy so nothing stands out. Fix it site-wide:
- Body text: normal weight.
- Section labels, tech tags, and emphasis: semi-bold (font-weight 600).
- Reserve the heaviest weight for the main page or section title only.
- Keep the existing typefaces. Only change the weights.

### Assets: restore, do not generate

- Restore the original black-and-white profile photo from the pre-upgrade commit.
  The generated pixel-art character is the regression. Do not create or
  substitute any image.
- Restore the Hobbies content from the pre-upgrade commit.

### Mobile and responsive

The site must work well on phones. Neo-brutalism gets heavy on small screens, so
scale the frame down rather than dropping it.

- **Collapsible navigation.** The three-link nav collapses behind a hamburger on
  small screens (see Navigation above). Keyboard accessible; Escape closes it.
- **Stacking layout.** The index rows are already a single column, so they stack
  naturally. Any two-column arrangement on desktop collapses to one column on
  mobile. Use responsive grid or flex, not fixed widths.
- **Touch targets.** Rows, links, and the menu toggle are at least 44px tall,
  with enough spacing to tap easily.
- **Scale the brutalist details down.** The heavy borders and offset shadows
  crowd a phone. Reduce them at small breakpoints (for example a 3px border and
  5px shadow) so content fits and still reads.
- **Type and spacing.** Reduce display sizes on mobile so headings do not wrap
  awkwardly. Keep body text at 16px minimum with comfortable line height. On
  detail pages the reading column goes full width with sensible padding.
- **No horizontal scroll.** Nothing overflows the viewport. Wide elements (code
  blocks, tables) get their own horizontal scroll container, not the page.
- **Responsive media.** Images and embeds use `max-width: 100%`.
- **Test at two widths.** Check the index, `/about`, and a detail page at 375px
  and 768px. The menu opens and closes, the rows stack, nothing overflows, and
  text reads well.

---

## 5. Content

All copy below is final. Use it verbatim. No em dashes.

### 5.1 Introduction

Intro line:

> I enjoy building AI products for problems that are still taking shape.

Call-to-action button: rename the existing "MEET THE PM >>>" button to
"ABOUT ME >>>". It links to the `/about` page. Keep its current styling.

### 5.2 Bio (the `/about` page)

Render the two first principles as a bulleted list. Keep the other lines as
paragraphs. Below the bio, render Highlights, Current Focus, and Education as
clean sections with light semi-bold labels.

Bio:

> From product strategy down to the details, I love every part of building
> products people actually enjoy using.
>
> I work from these first principles:
> - I look for latent demand and build on behaviours people already have, rather
>   than inventing needs.
> - I favour products where usage itself is the distribution. If the growth loop
>   isn't structural, I prioritize it less.
>
> Right now that means AI-native applications, where the challenge is delivering
> a tasteful experience without shipping slop. The bar is taste, and the test is
> whether people keep coming back.

**HIGHLIGHTS**

> For 9+ years, I have led product growth for agency and in-house roles, driving
> impact for 50+ B2B and B2C firms (up to $150M in revenue). I have led revenue
> turnarounds for companies and helped startups survive by turning monthly
> roadmaps into weekly releases. I co-founded and exited a product agency before
> returning to academia (2019-2024) to deepen my technical foundation.

**CURRENT FOCUS**

> I am currently advising startups seeking to turn AI research into market-ready
> products.

**EDUCATION**

> University of Waterloo: Bachelor's Degree (Honours) in Geomatics (Distinction,
> 3.8 GPA). My background in spatial analysis and statistics drives my data-first
> approach to product.

Hobbies: restore the original content (music and lyrics, with the YouTube link)
from the pre-upgrade commit and place it at the bottom of `/about`.

### 5.3 Case studies (all three, final)

---

**twelve-hour-launch**

- **title:** The 12-Hour Launch Framework
- **tagline:** Cut the idea-to-validation loop from 4 weeks to under 12 hours.
- **role:** Product Lead, Open Research Institute
- **status:** Shipped & Operational
- **tech:** Rapid Validation, Agentic Prototyping + Subagent Orchestration
- **insight:** The bottleneck was never engineering speed. It was feedback
  latency. Once you can watch real users struggle in hours instead of weeks, you
  stop shipping features that were going to fail anyway.
- **context:** We were building an AI text-summary app with a map-like
  stretching UI for scanning long-form content. The teams were stuck on a
  monthly release cycle, because interpreting user feedback was slow. We only
  learned whether a feature had product-market fit once every 30 days, which put
  the startup's runway at risk.
- **goal:** Compress the idea-to-validation loop from 4 weeks to under 12 hours,
  so we learn faster.
- **hypothesis:** If we replace slow, manual work with a high-velocity loop built
  on agentic AI (Claude and Hermes agent harnesses for prototyping, with subagent
  orchestration to synthesise feedback), we can validate a feature concept in a
  single day with real users and stop wasting engineering on low-value features.
- **problem:**
  - Slow feedback: traditional recruitment and moderated testing took 5 to 10
    days per cycle.
  - High opportunity cost: engineering spent weeks on features that failed on
    release, because we could not see users struggle until it was too late.
  - Subjective analysis: feedback was read differently by different
    stakeholders ("I think users will like this"), which caused roadmap conflict.
- **solution:** I built a 12-hour validation pipeline to watch real customers
  struggle through the product before we committed code.
  - 10:00 Synthesis. A user insight triggers a feature idea.
  - 12:00 Prototype. An agent harness (Claude, Hermes) builds a working prototype
    in hours, not days.
  - 16:00 Test. Put it in front of real users and capture their responses in
    minutes.
  - 18:00 Analyse. Subagents cluster the responses and flag where people got
    confused, then I reviewed those moments. We listened for confusion, not
    likes. If a user narrating their experience got stuck, we looked closer. If
    they lit up, we knew we had something.
  - 20:00 Decide. Launch, refine, or kill, the same day.
- **metrics:**
  - North star: release cadence, from concept to production.
  - Result: releases moved from monthly to weekly.
  - Impact: extended the startup's runway by 3+ months, by preventing four
    low-value features that failed the 6pm test.
- **reflection:** The tools were not the point. The point was making a "kill"
  decision cheap and same-day. Killing four features early was worth more than
  shipping them.

---

**mobile-transformation**

- **title:** Mobile Transformation (>100k Users)
- **tagline:** Moved bookings from phone to app. ~80% retention in 3 months.
- **role:** Product Lead, Bluewater Media
- **status:** Shipped & Scaled
- **tech:** Habit-Forming Onboarding, Time-to-First-Booking + Power-User Migration
- **insight:** Downloads are a vanity metric. The habit forms at the first
  booking, so I optimized for Time to First Booking and moved the highest-value
  regulars over first.
- **context:** A beauty chain with 12 outlets and over 100k customers ran on a
  legacy phone-booking system. The manual process capped growth, hid behavioural
  data, and cost a lot to staff.
- **goal:** Move customers from phone to a mobile app, without alienating a
  non-technical base.
- **hypothesis:** If we cut booking friction by moving from synchronous calls to
  an asynchronous app, and optimize for Time to First Booking, we create a
  habit-forming loop that retains better than the phone channel.
- **problem:**
  - Scaling bottleneck: booking volume was capped by the number of
    receptionists.
  - Data black hole: phone bookings gave no behavioural data, so we could not
    tell a one-time visitor from a regular.
  - Friction: customers had to call during business hours, so evenings and
    weekends were missed revenue.
- **solution:**
  - North star: we ignored app downloads and focused on Time to First Booking.
  - Flow: onboarding was streamlined to reach a booked appointment in the fewest
    taps.
  - Data-driven migration: I analysed history to handle multi-booking edge
    cases, and migrated the power users (more than 3 bookings a month) first
    across the 12 outlets, since they were the highest value.
- **metrics:**
  - Primary: onboarding completion and retention.
  - Definition: I defined retention on unique active users, deduplicated by user
    ID, not total booking volume, so a small cohort of frequent bookers could
    not skew it.
  - Result: about 80% retention and onboarding completion within 3 months.
  - Operational: call-center volume dropped sharply, which freed staff for the
    in-store experience.
- **risks:**
  - Risk: digital exclusion. Older customers might struggle with the app and
    stop booking.
  - Mitigation: we kept the phone line open and incentivized app use with
    loyalty points.
  - Counter-metric: phone booking volume, tracked to fall at a healthy rate
    rather than crash to zero.

---

**ecommerce-inventory**

- **title:** E-commerce Inventory Intelligence
- **tagline:** Reframed "low sales" as unmet demand. Lifted ROAS 25x.
- **role:** Product Lead, Bluewater Media
- **status:** Shipped & Operational
- **tech:** Intent Capture, Funnel Analysis + Lookalike Targeting
- **insight:** Low sales on the large sizes were not low demand. They were unmet
  demand. The UI blocked the add-to-cart, so "zero interest" was a false
  negative the interface created.
- **context:** A client was six months into a loss streak. The firm stocked
  cash-cow small sizes by historical volume, and larger sizes were listed but
  usually out of stock. Analytics showed low sales and low LTV on the large
  sizes, so stakeholders concluded there was no demand.
- **goal:** Find the real cause of the revenue bleed, and prove that low sales
  did not mean low demand.
- **hypothesis:** Conceived through a Return on Customer lens. If we capture user
  intent at the size-selection step, specifically for out-of-stock variants, we
  can show the low LTV on large sizes is actually unmet demand, which justifies a
  change in inventory strategy.
- **problem:**
  - Cash-cow bias: the inventory algorithm over-indexed on high-volume small
    sizes, leaving high-margin large sizes always out of stock.
  - Funnel blockage: the drop-off was at "select size," not the landing page.
    Users picked a size, found it unavailable, and could not add to cart.
  - False-negative analytics: the business read "zero adds to cart" on large
    sizes as "zero interest," blind to the fact that the UI prevented the action.
- **solution:**
  - MVP: we replaced the out-of-stock dead-end with an "Availability Request."
    Instead of a greyed-out button, users saw "Notify me when available."
  - Strategic shift: we showed the large-size segment had very high intent, which
    debunked the low-LTV myth.
  - Data loop: we fed the waitlist emails into the ad platforms as lookalike
    audiences, and targeted people who resembled the high-value waitlisters
    instead of generic shoppers.
- **metrics:**
  - North star: Return on Ad Spend.
  - Result: ROAS up 25x, by retargeting high-intent users.
  - Secondary: CAC down 20 to 30%, conversion up 20%.
- **risks:**
  - Risk: user trust. Notifying users but not restocking quickly would hurt the
    brand.
  - Mitigation: we used the waitlist data to justify a specific purchase order
    for the larger inventory right away.
  - Counter-metric: unsubscribe rate from availability emails, target under 2%.

### 5.4 AI projects

**lky-brain** (full)

- **title:** LKY Brain: a reasoning-style LoRA for Qwen3-14B
- **tagline:** Gave a small local model a domain expert's way of reasoning.
- **tech:** LoRA Fine-Tuning, Dataset Engineering + Held-Out Evaluation
- **links:** LAUNCH (report), CODE (GitHub), HuggingFace (model)
- **insight:** A reasoning style can be defined and measured. I turned "reason
  like him" into six observable moves (reframe the question, argue from first
  principles, use a concrete analogy, weigh interests over sentiment, bound
  uncertainty, be direct), so a fuzzy goal became a scored eval.
- **problem:** Small open-source models are cheap and private, but can one take
  on a domain expert's way of reasoning, not just their facts? Lee Kuan Yew was
  the test case, chosen for a distinctive method and a large public record.
- **approach:** Scraped public transcripts, built a two-part dataset (interview
  exchanges, plus speeches paired with generated questions), and LoRA fine-tuned
  Qwen3-14B on one consumer GPU. Judged blind against a held-out set of
  interviews.
- **result:** The tuned model beat the untuned base on nearly every move, with
  the voice score rising from 2.04 to 2.88.
- **reflection:** Two calls mattered more than the training. I shipped the
  less-overfit checkpoint over the one with the better training loss, because it
  generalised better on unseen questions. And I published the dataset as a
  reproducible recipe with pointers to the source, rather than redistributing the
  archive itself.

**pixi-wiki**

- **title:** Pixi Wiki
- **tagline:** One source of notes and docs for both people and AI agents.
- **tech:** Human Wiki + Agent Retrieval (llms.txt, index.json, read-only MCP)
- **links:** LAUNCH
- **insight:** Publish the content as structured, agent-readable Markdown with an
  index, and agents retrieve exactly what they need instead of scraping HTML.
- **problem:** My notes and docs needed to serve two audiences at once. People
  browsing, and AI agents that read and cite them. Agents normally scrape a
  website, which is slow, noisy, and token-heavy.
- **approach:** One Markdown corpus, published as a clean human wiki, and exposed
  to agents through llms.txt, a read-only MCP server (list, search, read), and an
  index.json registry.
- **result:** Agents retrieve source-backed answers from the same maintained
  pages people browse, instead of scraping raw dumps, which cuts hallucinations
  and token waste.

**j-space-replay**

- **title:** J-Space-Replay
- **tagline:** A look under the hood at how a vision-language model reasons.
- **tech:** VLM Interpretability, Logit + Jacobian Lens Decoding + Precomputed Trace Gallery
- **links:** LAUNCH, CODE, paper (Anthropic J-space)
- **insight:** An interpretability lens can surface a model's internal state
  frame by frame, including reasoning that never reaches its answer.
- **problem:** You can read a vision-language model's answer, but not what it was
  reasoning about internally, including what it "thinks" but never says.
- **approach:** Qwen2.5-VL with logit-lens and Jacobian (J-lens) decoding, and
  per-layer residual capture, replayed over preset video clips in the browser,
  or run on your own clips with a local pipeline.
- **result:** Visitors browse a layer-by-layer grid of the top word the model
  "read" for each output token, and can spot reasoning it computed but never
  said. Explore preset clips instantly, or upload your own.

**planned-program-intel**

- **title:** Planned Program Intel
- **tagline:** An inbox of decisions, each with its justification and a memory of past calls.
- **tech:** AI-Native App UX, Decision Routing + Precedent Memory
- **links:** LAUNCH
- **insight:** The best version is not a chatbot. It is an inbox of decisions,
  where each one routes to the right owner with its justification, and every
  human choice becomes evidence the next decision cites.
- **problem:** In AI-native tools, decisions pile up on users as a queue of
  alerts to chase and triage, and the reasoning behind past calls is lost.
- **approach:** A UX concept reimagining planned.com's program workflow. Each
  decision arrives with what needs attention, who should decide, the track record
  of similar past cases, what is different this time, and a recommended action.
  Resolving one (accept, change, override, escalate) records the reasoning and
  distills it into a reusable precedent that later decisions cite.
- **result:** A 60-second demo that shows the pattern. Decisions route to the
  right owner with their justification attached, and every human resolution
  becomes institutional memory the next decision cites. No autonomous execution.

---

## 6. Implementation phases

1. **Restore first.** From the pre-upgrade commit, bring back the real profile
   photo, the ticker, the footer status bar, and the Hobbies content. Confirm the
   generated pixel-art image is gone.
2. **Routing.** Add react-router, basename, and the 404.html SPA fix. Confirm a
   hard refresh on `/work/ecommerce-inventory` and `/about` works.
3. **Data model.** Update `types.ts` and `constants.ts` with the two types and
   all the content above.
4. **Index page.** Intro block (original layout), then AI Projects, then Case
   Studies, both as editorial-index lists of rows (not boxed cards). Contact and
   footer restored.
5. **About page.** Bio, Highlights, Current Focus, Education, Hobbies, with the
   photo. Wire the "ABOUT ME >>>" button to it.
6. **Detail pages.** One template for case studies, one for projects, in the
   orders listed. Centered reading column, insight spotlighted, light section
   headers, semi-bold type.
7. **Remove modals.** Delete the old modal path once pages work.
8. **Typography pass.** Apply semi-bold (600) site-wide in place of heavy bold;
   body normal weight; heaviest reserved for main titles.
9. **Mobile pass.** Collapsible three-link menu and the responsive rules. Test at
   375px and 768px.

## 7. Acceptance criteria

- The original photo, ticker, footer status bar, and Hobbies are back. No
  generated placeholder image remains.
- Every case study, project, and the bio has its own URL and is shareable. No
  modals remain.
- Home reads as an editorial index: intro block in its original layout, AI
  Projects before Case Studies, items as clean rows divided by thin rules, not
  boxed cards.
- Detail pages show the insight first, then the sections in order. The reading
  column is centered with a comfortable width; sections use light headers, not
  filled chips; type is semi-bold, not heavy bold.
- The neo-brutalist look is intact and the long-form text is easy to read.
- On mobile (375px), the collapsible menu opens and closes, rows stack, nothing
  overflows sideways, and text reads well. The frame scales down rather than
  breaking.
- The build works on GitHub Pages, including a hard refresh on a detail URL and
  on `/about`.

## 8. Status of the content

All copy is final. There are no `TODO:` markers left. The result lines for the
three AI projects were written from their repositories, so they are accurate, not
placeholders. Read through the reflections and tech tags once and swap any wording
that does not sound like you, but nothing needs research or invention.
