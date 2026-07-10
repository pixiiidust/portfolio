import { CaseStudy, Project } from './types';

export const PROFILE_PHOTO_URL = "https://github.com/user-attachments/assets/1e9799d3-59e1-46d3-87d3-0a94e8454172";

export const HERO_DATA = {
  name: "JAMIE SIM",
  introLine: "I enjoy building AI products for problems that are still taking shape.",
};

export const TICKER_TEXT = "PRODUCT STRATEGY /// GEN-AI OPS /// GROWTH";

export const FOOTER_TAGLINE = "Building something cool? Let's talk.\nCurrently based in GTA, Ontario.";

export const BIO_DATA = {
  intro: "From product strategy down to the details, I love every part of building products people actually enjoy using.",
  principles: [
    "I look for latent demand and build on behaviours people already have, rather than inventing needs.",
    "I favour products where usage itself is the distribution. If the growth loop isn't structural, I prioritize it less.",
  ],
  closing: "Right now that means AI-native applications, where the challenge is delivering a tasteful experience without shipping slop. The bar is taste, and the test is whether people keep coming back.",
  highlights: "For 9+ years, I have led product growth for agency and in-house roles, driving impact for 50+ B2B and B2C firms (up to $150M in revenue). I have led revenue turnarounds for companies and helped startups survive by turning monthly roadmaps into weekly releases. I co-founded and exited a product agency before returning to academia (2019-2024) to deepen my technical foundation.",
  currentFocus: "I am currently advising startups seeking to turn AI research into market-ready products.",
  education: "University of Waterloo: Bachelor's Degree (Honours) in Geomatics (Distinction, 3.8 GPA). My background in spatial analysis and statistics drives my data-first approach to product.",
};

export const HOBBIES_DATA = {
  text: "Outside tech, I enjoy creating music and writing poetic lyrics. Check out my music here:",
  link: "https://youtube.com/playlist?list=PLhva_VkhY9NFZkWLyw7PseOJRrHTKeWAn&si=M4fzUojei3rfBR3Z"
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'twelve-hour-launch',
    kind: 'work',
    title: 'The 12-Hour Launch Framework',
    tagline: 'Cut the idea-to-validation loop from 4 weeks to under 12 hours.',
    role: 'Product Lead, Open Research Institute',
    status: 'Shipped & Operational',
    tech: ['Rapid Validation', 'Agentic Prototyping + Subagent Orchestration'],
    links: [],
    insight: 'The bottleneck was never engineering speed. It was feedback latency. Once you can watch real users struggle in hours instead of weeks, you stop shipping features that were going to fail anyway.',
    context: 'We were building an AI text-summary app with a map-like stretching UI for scanning long-form content. The teams were stuck on a monthly release cycle, because interpreting user feedback was slow. We only learned whether a feature had product-market fit once every 30 days, which put the startup\'s runway at risk.',
    goal: 'Compress the idea-to-validation loop from 4 weeks to under 12 hours, so we learn faster.',
    hypothesis: 'If we replace slow, manual work with a high-velocity loop built on agentic AI (Claude and Hermes agent harnesses for prototyping, with subagent orchestration to synthesise feedback), we can validate a feature concept in a single day with real users and stop wasting engineering on low-value features.',
    problem: [
      'Slow feedback: traditional recruitment and moderated testing took 5 to 10 days per cycle.',
      'High opportunity cost: engineering spent weeks on features that failed on release, because we could not see users struggle until it was too late.',
      'Subjective analysis: feedback was read differently by different stakeholders ("I think users will like this"), which caused roadmap conflict.',
    ],
    solution: `I built a 12-hour validation pipeline to watch real customers struggle through the product before we committed code.

- 10:00 Synthesis. A user insight triggers a feature idea.
- 12:00 Prototype. An agent harness (Claude, Hermes) builds a working prototype in hours, not days.
- 16:00 Test. Put it in front of real users and capture their responses in minutes.
- 18:00 Analyse. Subagents cluster the responses and flag where people got confused, then I reviewed those moments. We listened for confusion, not likes. If a user narrating their experience got stuck, we looked closer. If they lit up, we knew we had something.
- 20:00 Decide. Launch, refine, or kill, the same day.`,
    metrics: [
      'North star: release cadence, from concept to production.',
      'Result: releases moved from monthly to weekly.',
      'Impact: extended the startup\'s runway by 3+ months, by preventing four low-value features that failed the 6pm test.',
    ],
    reflection: 'The tools were not the point. The point was making a "kill" decision cheap and same-day. Killing four features early was worth more than shipping them.',
  },
  {
    slug: 'mobile-transformation',
    kind: 'work',
    title: 'Mobile Transformation (>100k Users)',
    tagline: 'Moved bookings from phone to app. ~80% retention in 3 months.',
    role: 'Product Lead, Bluewater Media',
    status: 'Shipped & Scaled',
    tech: ['Habit-Forming Onboarding', 'Time-to-First-Booking + Power-User Migration'],
    links: [],
    insight: 'Downloads are a vanity metric. The habit forms at the first booking, so I optimized for Time to First Booking and moved the highest-value regulars over first.',
    context: 'A beauty chain with 12 outlets and over 100k customers ran on a legacy phone-booking system. The manual process capped growth, hid behavioural data, and cost a lot to staff.',
    goal: 'Move customers from phone to a mobile app, without alienating a non-technical base.',
    hypothesis: 'If we cut booking friction by moving from synchronous calls to an asynchronous app, and optimize for Time to First Booking, we create a habit-forming loop that retains better than the phone channel.',
    problem: [
      'Scaling bottleneck: booking volume was capped by the number of receptionists.',
      'Data black hole: phone bookings gave no behavioural data, so we could not tell a one-time visitor from a regular.',
      'Friction: customers had to call during business hours, so evenings and weekends were missed revenue.',
    ],
    solution: `- North star: we ignored app downloads and focused on Time to First Booking.
- Flow: onboarding was streamlined to reach a booked appointment in the fewest taps.
- Data-driven migration: I analysed history to handle multi-booking edge cases, and migrated the power users (more than 3 bookings a month) first across the 12 outlets, since they were the highest value.`,
    metrics: [
      'Primary: onboarding completion and retention.',
      'Definition: I defined retention on unique active users, deduplicated by user ID, not total booking volume, so a small cohort of frequent bookers could not skew it.',
      'Result: about 80% retention and onboarding completion within 3 months.',
      'Operational: call-center volume dropped sharply, which freed staff for the in-store experience.',
    ],
    risks: [
      'Risk: digital exclusion. Older customers might struggle with the app and stop booking.',
      'Mitigation: we kept the phone line open and incentivized app use with loyalty points.',
      'Counter-metric: phone booking volume, tracked to fall at a healthy rate rather than crash to zero.',
    ],
  },
  {
    slug: 'ecommerce-inventory',
    kind: 'work',
    title: 'E-commerce Inventory Intelligence',
    tagline: 'Reframed "low sales" as unmet demand. Lifted ROAS 25x.',
    role: 'Product Lead, Bluewater Media',
    status: 'Shipped & Operational',
    tech: ['Intent Capture', 'Funnel Analysis + Lookalike Targeting'],
    links: [],
    insight: 'Low sales on the large sizes were not low demand. They were unmet demand. The UI blocked the add-to-cart, so "zero interest" was a false negative the interface created.',
    context: 'A client was six months into a loss streak. The firm stocked cash-cow small sizes by historical volume, and larger sizes were listed but usually out of stock. Analytics showed low sales and low LTV on the large sizes, so stakeholders concluded there was no demand.',
    goal: 'Find the real cause of the revenue bleed, and prove that low sales did not mean low demand.',
    hypothesis: 'Conceived through a Return on Customer lens. If we capture user intent at the size-selection step, specifically for out-of-stock variants, we can show the low LTV on large sizes is actually unmet demand, which justifies a change in inventory strategy.',
    problem: [
      'Cash-cow bias: the inventory algorithm over-indexed on high-volume small sizes, leaving high-margin large sizes always out of stock.',
      'Funnel blockage: the drop-off was at "select size," not the landing page. Users picked a size, found it unavailable, and could not add to cart.',
      'False-negative analytics: the business read "zero adds to cart" on large sizes as "zero interest," blind to the fact that the UI prevented the action.',
    ],
    solution: `- MVP: we replaced the out-of-stock dead-end with an "Availability Request." Instead of a greyed-out button, users saw "Notify me when available."
- Strategic shift: we showed the large-size segment had very high intent, which debunked the low-LTV myth.
- Data loop: we fed the waitlist emails into the ad platforms as lookalike audiences, and targeted people who resembled the high-value waitlisters instead of generic shoppers.`,
    metrics: [
      'North star: Return on Ad Spend.',
      'Result: ROAS up 25x, by retargeting high-intent users.',
      'Secondary: CAC down 20 to 30%, conversion up 20%.',
    ],
    risks: [
      'Risk: user trust. Notifying users but not restocking quickly would hurt the brand.',
      'Mitigation: we used the waitlist data to justify a specific purchase order for the larger inventory right away.',
      'Counter-metric: unsubscribe rate from availability emails, target under 2%.',
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    slug: 'lky-brain',
    kind: 'project',
    title: 'LKY Brain: a reasoning-style LoRA for Qwen3-14B',
    tagline: 'Gave a small, local model a domain expert\'s way of reasoning, and measured that it worked.',
    tech: ['LoRA Fine-Tuning', 'Dataset Engineering + Held-Out Evaluation'],
    links: [
      { label: 'LAUNCH', href: 'https://pixiiidust.github.io/lora-LKY-report/' },
      { label: 'CODE', href: 'https://github.com/pixiiidust/lky-brain' },
      { label: 'HuggingFace', href: 'https://huggingface.co/sjsim/lky-qlora' },
    ],
    insight: 'A reasoning style can be defined and measured. I turned "reason like him" into six observable moves: reframe the question, argue from first principles, use a concrete analogy, weigh interests over sentiment, bound uncertainty, and be direct. A fuzzy goal became a scored eval.',
    problem: 'Small open-source models are cheap and private. But can one take on a domain expert\'s way of reasoning, not just recite their facts? I used Lee Kuan Yew as the test case, for his distinctive method and large public record.',
    approach: 'I scraped public transcripts and built a two-part dataset: real interview exchanges, plus speeches paired with generated questions. Then I LoRA fine-tuned Qwen3-14B on a single consumer GPU, and judged it blind against a held-out set of interviews.',
    result: 'The tuned model beat the untuned base on nearly every move. Its voice score rose from 2.04 to 2.88 on held-out questions.',
    reflection: 'Two calls mattered more than the training. I shipped the less-overfit checkpoint over the one with the lower training loss, because it generalised better on unseen questions. And I published the dataset as a reproducible recipe that points back to the original archive, rather than redistributing the source.',
  },
  {
    slug: 'pixi-wiki',
    kind: 'project',
    title: 'Pixi Wiki',
    tagline: 'One set of notes that serves people and AI agents from the same knowledge base.',
    tech: ['Human Wiki + Agent Retrieval (llms.txt, index.json, read-only MCP)'],
    links: [
      { label: 'LAUNCH', href: 'https://pixiiidust.github.io/pixi-wiki/' },
    ],
    insight: 'Publish the content as structured, agent-readable Markdown with an index, and agents retrieve exactly what they need instead of scraping HTML.',
    problem: 'My notes and docs had to serve two audiences at once: people browsing them, and AI agents that read and cite them. Agents normally scrape a website, which is slow, noisy, and token-heavy.',
    approach: 'I keep one Markdown corpus, published as a clean human wiki, and expose it to agents through llms.txt, a read-only MCP server (list, search, read), and an index.json registry.',
    result: 'Agents pull source-backed answers from the same maintained pages people browse, instead of scraping raw dumps. That cuts hallucinations and token waste, and there is only one thing to keep updated.',
  },
  {
    slug: 'j-space-replay',
    kind: 'project',
    title: 'J-Space-Replay',
    tagline: 'A look under the hood at what a vision-language model is reasoning about, frame by frame.',
    tech: ['VLM Interpretability', 'Logit + Jacobian Lens Decoding + Precomputed Trace Gallery'],
    links: [
      { label: 'LAUNCH', href: 'https://pixiiidust.github.io/j-space-replay/' },
      { label: 'CODE', href: 'https://github.com/pixiiidust/j-space-replay' },
      { label: 'paper', href: 'https://transformer-circuits.pub/2026/workspace/index.html' },
    ],
    insight: 'An interpretability lens can surface a model\'s internal state frame by frame, including reasoning that never reaches its answer.',
    problem: 'You can read a vision-language model\'s answer, but not what it was working out internally, including what it "thinks" but never says.',
    approach: 'I run Qwen2.5-VL with logit-lens and Jacobian (J-lens) decoding, capturing the residual stream per layer, and replay it over preset video clips in the browser. You can also run it on your own clips with a local pipeline.',
    result: 'Visitors browse a layer-by-layer grid of the top word the model "read" for each output token, and can spot reasoning it computed but never said. Preset clips load instantly; your own clips run locally. Inspired by Anthropic\'s J-space work.',
  },
  {
    slug: 'planned-program-intel',
    kind: 'project',
    title: 'Planned Program Intel',
    tagline: 'A reimagining of an AI-native workflow as an inbox of decisions, each with its reasoning attached.',
    tech: ['AI-Native App UX', 'Decision Routing + Precedent Memory'],
    links: [
      { label: 'LAUNCH', href: 'https://pixiiidust.github.io/planned-program-intel/' },
    ],
    insight: 'The best version is not a chatbot. It is an inbox of decisions, where each one routes to the right owner with its justification, and every human choice becomes evidence the next decision cites.',
    problem: 'In many AI-native tools, decisions pile up on the user as a queue of alerts to chase and triage, and the reasoning behind past calls is lost.',
    approach: 'A UX concept that reimagines planned.com\'s program workflow. Each decision arrives with what needs attention, who should decide, the track record of similar past cases, what is different this time, and a recommended action. Resolving one (accept, change, override, or escalate) records the reasoning and distills it into a reusable precedent that later decisions cite.',
    result: 'A 60-second demo of the pattern. Decisions route to the right owner with their justification attached, and every human resolution becomes institutional memory the next decision cites. No autonomous execution.',
  },
];
