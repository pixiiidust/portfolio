import { CaseStudy, Project, SocialLink } from './types';

export const HERO_DATA = {
  name: "JAMIE SIM",
  role: "PRODUCT MANAGER",
  subHeadline: "Building AI-powered products that solve tomorrow's problems today.\nMy motto is to anticipate what users want and ship quickly.",
  tickerText: "PRODUCT STRATEGY /// GEN-AI OPS /// GROWTH",
  bioHeadline: "Meet the PM",
  bioText: `From product strategy to the nitty gritty details, I love all parts of building delightful tech products. I thrive in the messy middle where data is scarce and timelines are tight. 
I don't just manage backlogs; I deploy end-to-end frameworks (from heuristics to Generative AI) that creates clarity and drives velocity.`,
  currentFocus: "I am currently advising startups seeking to turn AI research into market-ready products.",
  numbers: "For 9+ years, I have led product growth for agency and in-house roles, driving impact for 50+ B2B and B2C firms (up to $150M in revenue). I have led revenue turnarounds for companies and helped startups survive by turning monthly roadmaps into weekly releases. I co-founded and exited a product agency before returning to academia (2019-2024) to deepen my technical foundation.",
  education: "University of Waterloo: Bachelor's Degree (Honours) in Geomatics (Distinction, 3.8 GPA). My background in spatial analysis and statistics drives my data-first approach to product."
};

export const TICKER_TEXT = "PRODUCT STRATEGY /// GEN-AI OPS /// GROWTH";

export const SYSTEM_MESSAGE = "[ SYSTEM: Public GitHub Pages builds. Live links open in a new tab. ]";

export const FOOTER_TAGLINE = "Building something cool? Let's talk.\nCurrently based in GTA, Ontario.";

export const HOBBIES_DATA = {
  text: "Outside tech, I enjoy creating music and writing poetic lyrics. Check out my music here:",
  link: "https://youtube.com/playlist?list=PLhva_VkhY9NFZkWLyw7PseOJRrHTKeWAn&si=M4fzUojei3rfBR3Z"
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "01",
    title: "The 12-Hour Launch Framework",
    tagline: "Accelerated release cycles from Monthly to Weekly using AI tool stack",
    role: "Product Lead, Open Research Institute",
    status: "Shipped & Operational",
    context: "We were building an AI text summary application with a novel \"map-like stretching\" UI to help readers scan long-form content. However, the engineering and product teams were stuck in a \"Monthly Release Cycle\" due to the complexities of interpreting user feedback. This latency meant we only learned if a feature achieved product-market fit once every 30 days, threatening the startup's runway.",
    goal: "Compress the \"Idea-to-Validation\" loop from 4 weeks to <12 hours to accelerate learning.",
    hypothesis: "If we replace slow, manual user recruitment with a high-velocity feedback loop using modern AI tools (Create.xyz for prototyping + VoicePanel for instant testing), then we can validate feature concepts in a single day with real users, reducing engineering waste on low-value features.",
    problem: [
      "Slow Feedback: Traditional user recruitment and moderated testing took 5-10 days per cycle.",
      "High Opportunity Cost: Engineering spent weeks building features that often failed upon release because we couldn't \"see\" users struggling until it was too late.",
      "Subjective Analysis: Feedback was often interpreted subjectively by different stakeholders (\"I think users will like this\"), leading to roadmap conflicts."
    ],
    solution: [
      "The Hyper-Loop: I architected a 12-hour validation pipeline to watch real customers struggle through our product before we committed code.",
      "10:00 AM (Synthesis): New feature idea triggered by user insight.",
      "12:00 PM (Prototype): Designers use Create.xyz to code a working prototype in hours, not days.",
      "4:00 PM (Testing): Deployed to VoicePanel to capture hundreds of video responses from real users in minutes.",
      "6:00 PM (Analysis): We watched the recordings. We didn't just look for \"likes\"; we listened for confusion. Insight: If a user narrating their experience got stuck, we double-clicked there. If they lit up, we knew we hit gold.",
      "8:00 PM (Decision): We knew immediately if we should Launch, Refine, or Kill."
    ],
    metrics: [
      "North Star Metric: Release Cadence (Time from Concept to Production).",
      "Result: Accelerated releases from Monthly to Weekly.",
      "Business Impact: Extended the startup's runway by 3+ months by preventing the development of 4 low-value features that failed the 6:00 PM test."
    ],
    risks: [
      "Risk: \"Prototype Bias.\" Users might react differently to a Create.xyz prototype than a full production app.",
      "Mitigation: We focused on usability friction (can they use it?) rather than aesthetic preference (do they like the colors?).",
      "Counter-Metric: False Positive Rate. We tracked how many features passed the 8:00 PM check but failed once fully shipped (Target: <10%)."
    ]
  },
  {
    id: "02",
    title: "E-commerce Inventory Intelligence",
    tagline: "Lifted ROAS 25x and reduced CAC by 30%.",
    role: "Product Lead, Bluewater Media",
    status: "Shipped & Operational",
    context: "A key e-commerce client was suffering from a 6-month loss streak. The firm prioritized stocking \"cash cow\" products (smaller sizes) based on historical sales volume. Larger sizes were listed on the app but frequently out of stock. Analytics showed low sales volume and low LTV for these larger sizes, leading stakeholders to believe there was no market demand.",
    goal: "Identify the root cause of the revenue bleed and prove that \"low sales\" did not mean \"low demand.\"",
    hypothesis: "(Conceived via Return on Customer metrics) If we capture user intent at the \"Size Selection\" funnel stage, specifically for out-of-stock variations, then we can prove that the low LTV on larger sizes is actually a signal of unmet demand, justifying a shift in inventory strategy.",
    problem: [
      "The \"Cash Cow\" Bias: The inventory algorithm over-indexed on high-volume small sizes, leaving high-margin large sizes perpetually out of stock.",
      "Funnel Blockage: The drop-off wasn't at the landing page; it was at the \"Select Size\" step. Users selected a size, found it unavailable, and couldn't \"Add to Cart.\"",
      "False Negative Analytics: The business interpreted \"Zero Adds to Cart\" for large sizes as \"Zero Interest,\" blind to the fact that the UI prevented the action entirely."
    ],
    solution: [
      "The MVP (UI Fix): We replaced the \"Out of Stock\" dead-end with an \"Availability Request\" feature. Instead of a grayed-out button, users saw \"Notify Me When Available\".",
      "Strategic Shift: We proved that the \"Large Size\" customer segment had extremely high intent, debunking the low LTV myth.",
      "The Data Loop: We fed these \"Waitlist\" emails back into the ad platforms to create Lookalike Audiences. We started targeting people who looked like the high value \"Wait-listers,\" not just generic shoppers."
    ],
    metrics: [
      "North Star Metric: Return on Ad Spend (ROAS).",
      "Result: Lifted ROAS by 25x by retargeting high-intent users.",
      "Secondary Metrics: Reduced Customer Acquisition Cost (CAC) by 20-30% and lifted overall conversion rates by 20%."
    ],
    risks: [
      "Risk: User Trust. If we notify users but don't restock the large sizes quickly, we damage brand trust.",
      "Mitigation: We used the initial waitlist data to immediately justify a specific purchase order for the larger inventory.",
      "Counter-Metric: Unsubscribe Rate from availability emails (Target: <2%)."
    ]
  },
  {
    id: "03",
    title: "Mobile Transformation (>100k Users)",
    tagline: "Migration from Phone to App bookings. 80% Retention.",
    role: "Product Lead, Bluewater Media",
    status: "Shipped & Scaled",
    context: "A major beauty chain with 12 outlets and over 100k customers was reliant on a legacy phone-based booking system. This manual process created a bottleneck for growth, data opacity, and high operational costs for the call center.",
    goal: "Direct the digital transformation from analog (phone) to digital (mobile app) without alienating a non-technical customer base.",
    hypothesis: "If we reduce the friction of booking by moving from synchronous calls to an asynchronous mobile app, and we optimize for \"Time-to-First Booking,\" then we will create a habit-forming loop that drives higher long-term retention than the phone channel.",
    problem: [
      "Scaling Bottleneck: Booking volume was capped by the number of receptionists available.",
      "Data Black Hole: Phone bookings provided no behavioral data; we couldn't distinguish between a one-time visitor and a high-frequency regular.",
      "Friction: Customers had to call during business hours, leading to missed revenue opportunities during evenings/weekends."
    ],
    solution: [
      "The North Star: We ignored \"App Downloads\" (vanity metric) and focused entirely on \"Time to First Booking\".",
      "The Flow: We streamlined onboarding to get the user to a \"Booked Appointment\" state in the fewest possible taps.",
      "Data-Driven Migration: I analyzed historical data to handle multi-booking edge cases (customers with >3 bookings/month). We prioritized migrating these \"Power Users\" first across the 12 outlets, as they represented the highest value."
    ],
    metrics: [
      "Primary Metric: Onboarding Completion & Retention Rate.",
      "Metric Definition: To ensure accuracy, I defined \"Retention\" based on Unique Active Users (deduplicated by User ID) rather than Total Booking Volume. This prevented the data from being skewed by a small cohort of customers with multiple bookings in the same window.",
      "Result: Reached ~80% retention and onboarding completion rates within 3 months of launch.",
      "Operational Impact: Drastically reduced call center volume, freeing up staff to focus on in-store customer experience."
    ],
    risks: [
      "Risk: \"Digital Exclusion.\" Older demographics might struggle with the app and stop booking entirely.",
      "Mitigation: We kept the phone line active but incentivized app usage (loyalty points).",
      "Counter-Metric: Booking Volume via Phone. We tracked this to ensure it was decreasing at a healthy rate, not hitting zero immediately."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Planned Program Intel",
    description: "Turns scattered public program information into traceable intelligence briefs so teams can spot eligibility, constraints, deadlines, and next actions without manually chasing sources.",
    techFocus: "Public Signal Monitoring, Source Traceability + Time-to-Brief Reduction",
    link: "https://pixiiidust.github.io/planned-program-intel/"
  },
  {
    id: "p2",
    title: "Pixi Wiki",
    description: "Publishes Jamie's notes, project docs, and research as maintained knowledge bases so humans can browse a clean wiki and agents can read, search, and cite the same Markdown corpus.",
    techFocus: "Static Knowledge Bases, llms.txt, index.json + Read-Only MCP",
    link: "https://pixiiidust.github.io/pixi-wiki/"
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "sjsim@uwaterloo.ca", url: "mailto:sjsim@uwaterloo.ca", type: "email" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/jamie-s-6083b6203/", type: "link" },
  { label: "GitHub", url: "https://github.com/pixiiidust", type: "link" }
];