export type LinkItem = {
  href: string;
  label: string;
};

export type MetricItem = {
  label: string;
  value: string;
};

export type CardItem = {
  body: string;
  cta?: string;
  href?: string;
  title: string;
};

export type TimelineItem = {
  body: string;
  title: string;
  year: string;
};

export type Section =
  | {
      body: string;
      eyebrow?: string;
      title: string;
      type: 'intro';
    }
  | {
      body?: string;
      eyebrow?: string;
      items: CardItem[];
      title: string;
      type: 'cards';
    }
  | {
      body?: string;
      eyebrow?: string;
      items: TimelineItem[];
      title: string;
      type: 'timeline';
    }
  | {
      body?: string;
      eyebrow?: string;
      items: string[];
      title: string;
      type: 'bullets';
    }
  | {
      body?: string;
      eyebrow?: string;
      metrics: MetricItem[];
      title: string;
      type: 'metrics';
    };

export type PageData = {
  cta: LinkItem;
  heroBody: string;
  heroEyebrow: string;
  heroNote?: string;
  heroTitle: string;
  metaDescription: string;
  path: string;
  sections: Section[];
  slug: string;
  title: string;
};

export const contactProfile = {
  email: 'cabell@worklabs.com',
  mailto: 'mailto:cabell@worklabs.com',
  name: 'Cabell Harris',
  phone: '(804) 363-1719',
  phoneHref: 'tel:+18043631719',
  role: 'Founder & Creative Director, WORK LABS',
  signoff: 'Always Thinking',
};

export const operatingFormula = 'Home of Collaborative Intelligence™ · (AI²) + (HI²) = (CI²)';

export const navItems: LinkItem[] = [
  { href: '/about', label: 'About' },
  { href: '/ci2', label: 'CI²' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/brand-foundry', label: 'Brand Foundry' },
  { href: '/consulting', label: 'Consulting' },
  { href: '/contact', label: 'Contact' },
];

const sharedTimeline: TimelineItem[] = [
  {
    year: '1993',
    title: 'WORK LABS begins',
    body: 'The studio starts with a positioning instinct that sits between brand strategy, creative systems, and market timing.',
  },
  {
    year: '1990s',
    title: 'First agency for agencies',
    body: 'A model emerges around helping sophisticated clients and peer firms see what is next before it is obvious.',
  },
  {
    year: '2013',
    title: 'Hybrid educational thinking',
    body: 'The studio expands its systems mindset into learning, collaboration, and new operating models.',
  },
  {
    year: '2023',
    title: 'Collaborative Intelligence™',
    body: '(AI²) + (HI²) = (CI²) becomes the language for how the work is built and why it creates different outcomes.',
  },
  {
    year: '2025',
    title: 'WORK Brand Foundry™',
    body: 'The studio begins shaping investment-grade brand platforms as assets, not just assignments.',
  },
];

export const homePage: PageData = {
  slug: 'home',
  path: '/',
  title: 'WORK LABS',
  metaDescription:
    'WORK LABS is a brand strategy and creative studio building enduring systems across Collaborative Intelligence, Brand Foundry, Consulting, and Portfolio.',
  heroEyebrow: 'Brand strategy and creative systems',
  heroTitle: 'Branding, strategy, identity, packaging, and consulting built inside one operating philosophy.',
  heroBody:
    'WORK LABS is a brand strategy and creative studio where Collaborative Intelligence runs through everything. It shapes how brands are built, how decisions are made, how consulting gets applied, and how the next chapter of WORK grows beyond any one project or offering.',
  heroNote:
    'CI² is not a side idea. It is the operating philosophy WORK LABS needs to own across every path into the business.',
  cta: { href: '/contact', label: 'Request a call' },
  sections: [
    {
      type: 'cards',
      eyebrow: 'The paths in',
      title: 'One philosophy. Several ways to work together.',
      body: 'The site should feel open to different types of buyers while still making it obvious that every engagement is shaped by the same intelligence underneath.',
      items: [
        {
          title: 'CI² is the spine',
          body: 'Collaborative Intelligence is the operating philosophy beneath every project, offer, and decision. It is how WORK LABS should frame its difference.',
          cta: 'Explore CI²',
          href: '/ci2',
        },
        {
          title: 'Portfolio proves the standard',
          body: 'The work should impress, qualify, and convert by showing the level of strategic clarity and creative control clients can expect.',
          cta: 'View Portfolio',
          href: '/portfolio',
        },
        {
          title: 'Consulting connects brand to decisions',
          body: 'For companies looking for strategic clarity, consulting should feel like an applied operating layer, not just advisory language.',
          cta: 'See Consulting',
          href: '/consulting',
        },
        {
          title: 'Foundry signals what comes next',
          body: 'Five public hero brands can preview a larger inventory available by request, helping the Foundry feel selective and future-facing.',
          cta: 'View Brand Foundry',
          href: '/brand-foundry',
        },
      ],
    },
    {
      type: 'metrics',
      eyebrow: 'The signals',
      title: 'What the site needs to communicate quickly',
      metrics: [
        { value: '30+ years', label: 'of forward-looking lineage' },
        { value: '1 philosophy', label: 'running through every offer' },
        { value: '5 hero brands', label: 'publicly previewing the Foundry' },
      ],
    },
    {
      type: 'cards',
      eyebrow: 'The audience',
      title: 'Broad enough for the market. Clear enough to convert.',
      body: 'The site should welcome different buyer types without losing its voice. The common thread is that each visitor is looking for clearer thinking, stronger brand expression, or better strategic direction.',
      items: [
        {
          title: 'Founders and owner-operators',
          body: 'For brand creation, repositioning, identity systems, packaging, launches, and the moments when the brand has to catch up to the ambition.',
        },
        {
          title: 'Companies seeking consulting',
          body: 'For teams that need help with sequencing, positioning, strategy, or the commercial consequences of brand decisions.',
        },
        {
          title: 'Partners and acquirers',
          body: 'For people looking at Foundry opportunities, strategic collaboration, or the larger ideas forming around CI².',
        },
      ],
    },
    {
      type: 'timeline',
      eyebrow: 'The lineage',
      title: 'The story of firsts should support the argument',
      body: 'The strongest use of the studio history is to show a long pattern of invention, category-making, and thinking ahead of the market.',
      items: sharedTimeline,
    },
  ],
};

export const aboutPage: PageData = {
  slug: 'about',
  path: '/about',
  title: 'About | WORK LABS',
  metaDescription: 'About WORK LABS, its lineage, firsts, philosophy, and founder-led but future-built direction.',
  heroEyebrow: 'About WORK LABS',
  heroTitle: 'Founded by Cabell Harris. Built to become larger than any single biography.',
  heroBody:
    'WORK LABS is built on a long pattern of invention, positioning, and brand thinking that has consistently moved ahead of the market. It is founder-led in taste and philosophy, but designed to grow as a durable institution with its own voice, standards, and future.',
  heroNote: 'A founder-led studio with a long view and a living operating philosophy.',
  cta: { href: '/ci2', label: 'See the operating thesis' },
  sections: [
    {
      type: 'intro',
      eyebrow: 'The studio',
      title: 'A brand strategy and creative practice built around clarity, conviction, and timing.',
      body: 'WORK LABS brings brand, culture, systems, and commercial thinking into the same conversation. The work has always been about seeing what matters early, naming it clearly, and building it with enough rigor to last. That means helping clients find a more defensible position, a stronger expression, and a clearer path from idea to action.',
    },
    {
      type: 'timeline',
      eyebrow: 'Lineage',
      title: 'A pattern of seeing around corners',
      body: 'Long before today’s language around systems, IP, collaborative models, and intelligence frameworks became common, WORK LABS was already building in that direction. The story matters not as nostalgia, but as proof of pattern.',
      items: sharedTimeline,
    },
    {
      type: 'cards',
      eyebrow: 'What defines WORK LABS',
      title: 'Built around three enduring ideas',
      items: [
        {
          title: 'Build ahead of the market',
          body: 'WORK LABS has consistently developed ideas, systems, and brand frameworks before categories fully formed around them.',
        },
        {
          title: 'Strategy and creativity belong together',
          body: 'The work is never only visual. Brand, systems, culture, and commercial logic are treated as part of the same structure.',
        },
        {
          title: 'Founder-led, future-built',
          body: 'Cabell Harris sets the tone and the standard, while WORK LABS continues to grow as a larger platform for enduring ideas and meaningful work.',
        },
      ],
    },
    {
      type: 'intro',
      eyebrow: 'The founder',
      title: 'Cabell Harris brings the eye of a conceptual artist to the discipline of brand.',
      body: 'For more than three decades, Cabell has built a body of work rooted in ideas, contradiction, cultural fluency, and strategic instinct. That background shaped a studio that does not separate taste from thinking or creativity from commercial value. The result is a practice that can move from identity to packaging, from strategy to systems, from positioning to growth, without losing its center.',
    },
    {
      type: 'bullets',
      eyebrow: 'What clients come for',
      title: 'WORK LABS is built for companies that need more than surface change',
      items: [
        'A stronger position in the market',
        'A clearer identity, system, or expression',
        'A better sequence for brand and business decisions',
        'A partner who can connect vision, execution, and commercial logic',
      ],
    },
  ],
};

export const ci2Page: PageData = {
  slug: 'ci2',
  path: '/ci2',
  title: 'CI² | WORK LABS',
  metaDescription: 'Collaborative Intelligence at WORK LABS: the operating thesis beneath Foundry, Consulting, and future growth.',
  heroEyebrow: 'Collaborative Intelligence™',
  heroTitle: 'Collaborative Intelligence is the operating philosophy of WORK LABS.',
  heroBody:
    'CI² is how WORK LABS thinks about the future of brand and business building. It is not just about using AI. It is about combining artificial and human intelligence in a way that produces stronger judgment, sharper direction, and more valuable outcomes.',
  heroNote: 'This page should help WORK LABS own the language, not borrow the trend.',
  cta: { href: '/contact', label: 'Talk about CI²' },
  sections: [
    {
      type: 'cards',
      eyebrow: 'Page purpose',
      title: 'Questions this page should answer',
      items: [
        {
          title: 'What is it?',
          body: 'An operating philosophy for combining artificial and human intelligence in ways that increase conviction, direction, and strategic quality.',
        },
        {
          title: 'Why now?',
          body: 'Because content is abundant, but judgment, sequence, and conviction are scarce.',
        },
        {
          title: 'Why should clients care?',
          body: 'Because brands and decisions built through CI² should move faster, hold together better, and carry more defensible intelligence.',
        },
      ],
    },
    {
      type: 'bullets',
      eyebrow: 'Commercial logic',
      title: 'How CI² shows up in the business',
      items: [
        'As the operating system beneath Brand Foundry assets.',
        'As the decision framework inside consulting engagements.',
        'As a future platform for thought leadership, partnership, and broader market ownership.',
      ],
    },
    {
      type: 'intro',
      eyebrow: 'Messaging note',
      title: 'What to avoid',
      body: 'Avoid making CI² sound like generic “AI consulting.” The page works best when it sounds selective, directional, and human-led.',
    },
  ],
};

export const portfolioPage: PageData = {
  slug: 'portfolio',
  path: '/portfolio',
  title: 'Portfolio | WORK LABS',
  metaDescription: 'Selected portfolio work from WORK LABS as proof of standards, taste, and strategic range.',
  heroEyebrow: 'Portfolio',
  heroTitle: 'The work is still the argument.',
  heroBody:
    'The portfolio shows how WORK LABS moves across categories without losing its point of view. Identity, packaging, naming, and brand systems all carry the same core discipline: strategic clarity expressed with taste and precision.',
  heroNote: 'Selected work that proves both range and point of view.',
  cta: { href: '/contact', label: 'Discuss your project' },
  sections: [
    {
      type: 'cards',
      eyebrow: 'What the work proves',
      title: 'The portfolio is curated around three strengths',
      items: [
        {
          title: 'Proof of judgment',
          body: 'Every project is selected to show taste, structure, and strategic clarity, not simply surface polish.',
        },
        {
          title: 'Proof of category range',
          body: 'The work moves across industries and formats while still feeling unmistakably directed by a clear and consistent point of view.',
        },
        {
          title: 'Proof of relevance',
          body: 'The portfolio is focused on work that supports where WORK LABS is going, not just where it has been.',
        },
      ],
    },
    {
      type: 'bullets',
      eyebrow: 'Capabilities',
      title: 'A portfolio built for modern brand demands',
      items: [
        'Brand identity systems and visual direction',
        'Packaging, naming, and launch thinking',
        'Strategic repositioning and brand architecture',
      ],
    },
  ],
};

export const foundryPage: PageData = {
  slug: 'brand-foundry',
  path: '/brand-foundry',
  title: 'Brand Foundry | WORK LABS',
  metaDescription: 'WORK Brand Foundry: investment-grade brand platforms built inside Collaborative Intelligence.',
  heroEyebrow: 'WORK Brand Foundry™',
  heroTitle: 'Brands built as assets, not assembled as decks.',
  heroBody:
    'The WORK Brand Foundry is where strategic brand platforms are developed with the same discipline, rigor, and conceptual depth that defines the rest of the studio. A select public preview introduces the model, while deeper inventory remains available by request.',
  heroNote: 'Public preview. Private depth. Strategic ownership potential.',
  cta: { href: '/contact', label: 'Begin a Foundry inquiry' },
  sections: [
    {
      type: 'intro',
      eyebrow: 'What it is',
      title: 'The Foundry is a curated inventory of strategically developed brand platforms.',
      body: 'Some brands begin with a client brief. Foundry brands begin earlier than that, inside a system of positioning, category insight, conceptual development, and commercial imagination. They are shaped as platforms with enough strategic depth to support ownership, activation, and long-term growth.',
    },
    {
      type: 'cards',
      eyebrow: 'Why it matters',
      title: 'The Foundry expands what a studio can be',
      items: [
        {
          title: 'Brand platforms with strategic value',
          body: 'The Foundry creates brands with embedded logic, positioning, and conceptual strength before the market asks for them.',
        },
        {
          title: 'CI² in action',
          body: 'Each concept reflects what happens when strategic intelligence is built into the brand from the beginning, not layered on later.',
        },
        {
          title: 'Selective by design',
          body: 'Public hero concepts create visibility, while deeper access stays reserved for qualified conversations and serious interest.',
        },
      ],
    },
    {
      type: 'cards',
      eyebrow: 'What is available',
      title: 'Two ways to engage the Foundry',
      items: [
        {
          title: 'Public hero brands',
          body: 'A small number of brands are visible as an introduction to the Foundry model. These serve as the front door for conversation and give buyers a sense of category, quality, and point of view.',
        },
        {
          title: 'Private inventory by request',
          body: 'A broader range of concepts can be shared privately based on category interest, timing, ownership goals, and fit. Access is selective by design.',
        },
        {
          title: 'Commissioned development',
          body: 'For the right opportunity, WORK LABS can also develop a new platform through the same Collaborative Intelligence framework that shapes inventory brands.',
        },
      ],
    },
    {
      type: 'bullets',
      eyebrow: 'How access works',
      title: 'A deliberate model for inquiry and review',
      items: [
        'Five hero brands are visible publicly as the front door to the Foundry.',
        'Additional concepts can be shared by category and by request.',
        'Inquiry conversations focus on timing, ownership goals, and category fit.',
      ],
    },
    {
      type: 'cards',
      eyebrow: 'Who it is for',
      title: 'Best suited for buyers who understand the value of a head start',
      items: [
        {
          title: 'Operators',
          body: 'For operators who want to acquire a better starting position rather than build from zero.',
        },
        {
          title: 'Acquirers and investors',
          body: 'For buyers looking at brand platforms as strategic assets with built-in differentiation and conceptual strength.',
        },
        {
          title: 'Founders with a specific category in mind',
          body: 'For founders who suspect the right brand may already exist, or who want a commissioned platform built through the Foundry process.',
        },
      ],
    },
    {
      type: 'bullets',
      eyebrow: 'What to include',
      title: 'The strongest Foundry inquiries usually answer a few key questions',
      items: [
        'What category are you interested in?',
        'Are you looking at public hero brands or broader inventory?',
        'What is your timing and stage of readiness?',
        'Are you looking to acquire, activate, or commission?',
      ],
    },
  ],
};

export const consultingPage: PageData = {
  slug: 'consulting',
  path: '/consulting',
  title: 'Consulting | WORK LABS',
  metaDescription: 'WORK LABS consulting built around Collaborative Intelligence, strategic sequencing, and better decisions.',
  heroEyebrow: 'Consulting',
  heroTitle: 'Decisions, not just deliverables.',
  heroBody:
    'WORK LABS consulting is built for moments when brand, business, and timing all matter at once. Positioning, sequencing, growth, repositioning, and brand clarity are treated as connected decisions rather than isolated tasks.',
  heroNote: 'Applied intelligence for high-consequence brand and business decisions.',
  cta: { href: '/contact', label: 'Request a consulting call' },
  sections: [
    {
      type: 'intro',
      eyebrow: 'What consulting means here',
      title: 'This is strategic partnership built to create movement.',
      body: 'Some clients need a single conversation that changes the direction of a decision. Others need a longer relationship that helps leadership navigate growth, repositioning, launches, internal complexity, or the gap between what the company is and how it is showing up. WORK LABS is structured for both.',
    },
    {
      type: 'cards',
      eyebrow: 'How consulting works',
      title: 'Built around three core advantages',
      items: [
        {
          title: 'For real inflection points',
          body: 'The work is designed for consequential moments: launches, repositioning, succession, growth, and the strategic decisions that shape the next chapter of a business.',
        },
        {
          title: 'Human-led, AI-aware',
          body: 'Collaborative Intelligence shows up here as disciplined judgment, sharper direction, and better decision-making rather than automation theater.',
        },
        {
          title: 'Structured offers',
          body: 'From focused sessions to longer strategic partnerships, each engagement is structured to bring clarity, movement, and measurable value.',
        },
      ],
    },
    {
      type: 'cards',
      eyebrow: 'Ways to engage',
      title: 'Four practical consulting formats',
      items: [
        {
          title: 'WORK Session',
          body: 'A focused strategic session for founders or leadership teams who need clarity on a decision, opportunity, or challenge right now.',
        },
        {
          title: 'Brand Exploratory',
          body: 'A short engagement for companies assessing their position, expression, audience, or readiness for a larger brand move.',
        },
        {
          title: 'Strategic Framework Engagement',
          body: 'A deeper consulting engagement built around positioning, brand architecture, sequencing, decision logic, and organizational alignment.',
        },
        {
          title: 'Ongoing Strategic Partnership',
          body: 'A retained relationship for leaders who need an experienced brand and strategy partner inside the rhythm of the business.',
        },
      ],
    },
    {
      type: 'bullets',
      eyebrow: 'Who it serves',
      title: 'Best suited for organizations at meaningful turning points',
      items: [
        'Founder-led companies entering a growth or repositioning phase.',
        'Capital-backed teams making decisions under time pressure.',
        'Established organizations whose brand and business decisions have drifted apart.',
      ],
    },
    {
      type: 'bullets',
      eyebrow: 'What clients often need',
      title: 'Common consulting conversations include',
      items: [
        'Brand positioning and repositioning',
        'Naming, identity, or packaging direction',
        'Launch sequencing and strategic prioritization',
        'Leadership-level guidance when brand decisions affect business value',
      ],
    },
  ],
};

export const contactPage: PageData = {
  slug: 'contact',
  path: '/contact',
  title: 'Contact | WORK LABS',
  metaDescription: 'Contact WORK LABS for Foundry, Consulting, CI², or general inquiries.',
  heroEyebrow: 'Contact',
  heroTitle: 'Different questions need different doors.',
  heroBody:
    'Every inquiry begins with clarity. Whether the conversation is about branding, consulting, Foundry access, or Collaborative Intelligence, the best place to start is with the right context and the right question.',
  heroNote: 'The fastest path forward is a thoughtful request for a call.',
  cta: { href: contactProfile.mailto, label: 'cabell@worklabs.com' },
  sections: [
    {
      type: 'cards',
      eyebrow: 'Inquiry paths',
      title: 'Choose the conversation that fits',
      items: [
        {
          title: 'Foundry inquiry',
          body: 'For operators, acquirers, and qualified buyers interested in the five public hero brands or deeper category inventory by request.',
        },
        {
          title: 'Consulting inquiry',
          body: 'For leadership teams navigating a decision, repositioning, launch, packaging challenge, identity need, or organizational inflection point.',
        },
        {
          title: 'CI² inquiry',
          body: 'For speaking, partnership, press, or broader strategic opportunities tied to Collaborative Intelligence.',
        },
      ],
    },
    {
      type: 'bullets',
      eyebrow: 'Before you reach out',
      title: 'The most useful context to include',
      items: [
        'Why now?',
        'What decision or opportunity is in front of you?',
        'What kind of engagement are you looking for?',
        'What is the timeline and context?',
      ],
    },
  ],
};

export const allPages: PageData[] = [
  homePage,
  aboutPage,
  ci2Page,
  portfolioPage,
  foundryPage,
  consultingPage,
  contactPage,
];

export const homePathways = [
  {
    body: 'Brand strategy, naming, identity systems, packaging, and project-specific creative work built with strategic clarity from the start.',
    href: '/portfolio',
    label: 'Portfolio',
    number: '01',
    title: 'Brand work',
  },
  {
    body: 'Applied Collaborative Intelligence for companies navigating positioning, growth, repositioning, leadership change, or commercial inflection points.',
    href: '/consulting',
    label: 'Consulting',
    number: '02',
    title: 'Consulting',
  },
  {
    body: 'Investment-grade brand platforms built inside the WORK LABS system, with five public hero concepts and deeper inventory available by request.',
    href: '/brand-foundry',
    label: 'Brand Foundry',
    number: '03',
    title: 'The Foundry',
  },
  {
    body: 'The operating philosophy underneath the whole studio and the thinking WORK LABS needs to own in the market.',
    href: '/ci2',
    label: 'CI²',
    number: '04',
    title: 'Collaborative Intelligence',
  },
] as const;

export const foundryHeroBrands = [
  { category: 'Cause-commerce', image: '/images/brand-foundry-examples/save-the-world.jpeg', status: 'Public hero', title: 'Save The World' },
  { category: 'Experiential', image: '/images/brand-foundry-examples/wine-hunters.jpeg', status: 'Public hero', title: 'Wine Hunters' },
  { category: 'Retail concept', image: '/images/brand-foundry-examples/poshabilities.jpeg', status: 'Public hero', title: 'Poshabilities' },
  { category: 'Edutainment', image: '/images/brand-foundry-examples/family-inc.jpeg', status: 'Public hero', title: 'Family Inc.' },
  { category: 'Consumer brand', image: '/images/brand-foundry-examples/queen-bee.jpeg', status: 'Public hero', title: 'Queen Bee' },
] as const;

export const homeFirsts = [
  {
    tag: 'Founded',
    title: 'WORK, Inc.',
    year: '1993',
    body: 'The first agency for agencies. The smallest largest agency in the world.',
  },
  {
    tag: 'Methodology',
    title: 'WORK Branding Kit™',
    year: '1995',
    body: 'Proprietary tools and services that treated brand thinking like a living system, not a one-off exercise.',
  },
  {
    tag: 'Product',
    title: 'WORK-branded products',
    year: '1998',
    body: 'An early move into self-authored products across beer, coffee, apparel, books, and more.',
  },
  {
    tag: 'IP',
    title: "The Big Thinker's Brainstorming & Idea Co.™",
    year: '2009',
    body: 'A private IP source engine built around strategically developed concepts before that language was common.',
  },
  {
    tag: 'Methodology',
    title: 'Trivergent Thinking™',
    year: '2018',
    body: 'A proprietary framework for balancing time, cost, and impact rather than optimizing one at the expense of the others.',
  },
  {
    tag: 'Thesis',
    title: 'Collaborative Intelligence™',
    year: '2023',
    body: '(AI²) + (HI²) = (CI²) became the clearest expression of how the studio thinks and builds.',
  },
  {
    tag: 'Asset',
    title: 'WORK Brand Foundry™',
    year: '2025',
    body: 'An in-house incubator for investment-grade brand platforms shaped as assets, not just assignments.',
  },
] as const;

export const ciComponents = [
  {
    body: 'Speed, scale, iteration, and the ability to generate and model possibilities at a pace humans cannot match alone.',
    label: 'AI²',
    title: 'Artificial Intelligence',
  },
  {
    body: 'Judgment, taste, context, restraint, and the ability to know what matters, what to remove, and what something should mean.',
    label: 'HI²',
    title: 'Human Intelligence',
  },
  {
    body: 'The advantage that emerges when both are directed together by someone who understands the distinction between noise and meaning.',
    label: 'CI²',
    title: 'Collaborative Intelligence',
  },
] as const;

export const ciFirsts = [
  { title: 'The first agency for agencies.', year: '1993' },
  { title: 'The first agency-owned IP source engine.', year: '2009' },
  { title: 'The first agency to formulate Collaborative Intelligence.', year: '2023' },
] as const;

export const portfolioStudies = [
  {
    category: 'Packaging',
    image: '/images/portfolio/packaging-work-beer-1.jpg',
    summary:
      'Brand-led packaging work that shows how an identity system can move into product expression without losing clarity or edge.',
    title: 'WORK Beer',
  },
  {
    category: 'Identity / Packaging',
    image: '/images/portfolio/packaging-verdiva.jpg',
    summary:
      'A case in how visual refinement, market positioning, and product presentation come together as one commercial decision.',
    title: 'Verdiva',
  },
  {
    category: 'Digital',
    image: '/images/portfolio/web-truth-reels.jpg',
    summary:
      'Digital brand expression shaped to carry message, tone, and clarity across a more fluid media environment.',
    title: 'Truth Reels',
  },
  {
    category: 'Identity Systems',
    image: '/images/portfolio/logos-va-tourism.jpg',
    summary:
      'Identity work designed to hold together across multiple applications while still feeling distinctive at a glance.',
    title: 'Virginia Tourism',
  },
  {
    category: 'Collateral',
    image: '/images/portfolio/collateral-richmond-rising-5.jpg',
    summary:
      'Campaign and collateral work built to make brand thinking visible in the real world, not just in a presentation.',
    title: 'Richmond Rising',
  },
  {
    category: 'Brand Expression',
    image: '/images/portfolio/stationery-big-thinkers.jpg',
    summary:
      'A study in how even smaller brand touchpoints can reinforce a larger strategic point of view.',
    title: 'Big Thinkers',
  },
] as const;
