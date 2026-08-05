export const brand = {
  name: 'Aurelis Digital',
  shortName: 'Aurelis',
  tagline: 'Architectural precision in digital form.',
  email: 'contact.aurelisdigital@gmail.com',
  phone: '+91 84210 18893',
  address: 'Aurelis Digital Studio, Bibwewadi, Pune, Maharashtra, India',
};

export const navigationItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'AI Solutions', href: '/ai-solutions' },
  { label: 'Contact', href: '/contact' },
];

export const legalItems = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms-and-conditions' },
  { label: 'Disclaimer', href: '/disclaimer' },
];

export const socialItems = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/aurelis-digital/' },
  { label: 'Instagram', href: 'https://www.instagram.com/aurelis.digital/' },
  { label: 'GitHub', href: 'https://github.com/aurelis-digital' },
  { label: 'Email', href: `mailto:${brand.email}` },
];

export const serviceHighlights = [
  {
    title: 'Strategy Systems',
    description: 'Positioning, information architecture, and stakeholder alignment for complex digital products.',
  },
  {
    title: 'Product Design',
    description: 'Premium interfaces, motion systems, design systems, and conversion-focused user journeys.',
  },
  {
    title: 'Build & Launch',
    description: 'Fast front-end execution, content integration, QA, accessibility, and production readiness.',
  },
];

export const servicePages = [
  {
    slug: 'premium-websites',
    eyebrow: 'Premium Websites',
    title: 'Premium websites that feel like a category leader on day one.',
    description:
      'We build high-end marketing sites with clear narrative structure, refined motion, and conversion-minded interactions that support enterprise sales conversations.',
    overview:
      'The goal is not just to look premium. The goal is to make the business feel more trustworthy, more modern, and more capable the moment someone lands on the homepage.',
    deliverables: ['Positioning-led IA', 'Design system direction', 'Motion and interaction polish', 'Launch QA and handoff'],
    outcomes: ['Sharper first impression', 'Higher trust signal', 'Cleaner lead generation'],
    cta: '/contact',
  },
  {
    slug: 'web-applications',
    eyebrow: 'Web Applications',
    title: 'Web applications designed for clarity, speed, and scale.',
    description:
      'We craft product surfaces for complex workflows, dashboards, internal tools, and client portals that need to be simple under pressure.',
    overview:
      'Every interaction should reduce hesitation. We focus on structure, hierarchy, and systems thinking so the product stays understandable as it grows.',
    deliverables: ['Workflow design', 'Component architecture', 'State and error handling', 'Responsive build support'],
    outcomes: ['Lower support burden', 'Faster user adoption', 'Better product confidence'],
    cta: '/contact',
  },
  {
    slug: 'ai-agents',
    eyebrow: 'AI Agents',
    title: 'AI agents that extend your team without diluting your brand.',
    description:
      'We design practical agent experiences for content, research, operations, and customer-facing orchestration with clear human oversight.',
    overview:
      'The emphasis is on usable systems, not hype. We define guardrails, prompts, workflows, and interfaces that make AI helpful, predictable, and on-brand.',
    deliverables: ['Agent workflow mapping', 'Prompt and policy design', 'Review and approval flows', 'Operational dashboards'],
    outcomes: ['Faster execution', 'Less repetitive work', 'More consistent output'],
    cta: '/contact',
  },
  {
    slug: 'business-automation',
    eyebrow: 'Business Automation',
    title: 'Automation systems that remove busywork from the operating model.',
    description:
      'From lead routing to onboarding and reporting, we connect tools and workflows so teams spend more time on high-value work.',
    overview:
      'The right automation should feel invisible. We make the process more reliable and less manual without creating a brittle maze of dependencies.',
    deliverables: ['Process audit', 'Workflow automation', 'Tool integration planning', 'Monitoring and support'],
    outcomes: ['Reduced manual tasks', 'Fewer dropped handoffs', 'More reliable operations'],
    cta: '/contact',
  },
  {
    slug: 'landing-pages',
    eyebrow: 'Landing Pages',
    title: 'Landing pages built to convert without looking generic.',
    description:
      'We create campaign pages that move quickly, stay visually sharp, and support paid media, launches, or focused product offers.',
    overview:
      'A great landing page needs more than good copy. It needs pacing, hierarchy, proof, and a clear action path that earns the click.',
    deliverables: ['Campaign narrative', 'CTA hierarchy', 'Responsive build', 'Conversion QA'],
    outcomes: ['Better campaign focus', 'Higher conversion clarity', 'Faster launch cycles'],
    cta: '/contact',
  },
] as const;

export const caseStudies = [
 
 {
  slug: 'ember-bean',
  label: 'Premium Café Experience',
  title: 'Ember & Bean',
  link: "https://ember-bean.vercel.app/",
  description:
    'A premium café website crafted to showcase artisanal coffee, handcrafted beverages, and a warm brand story through elegant visuals and immersive interactions.',
  image: '/Ember&Bean.png', // Replace with your actual image path
  overview:
    'Ember & Bean was designed as a modern digital experience for a specialty café brand. The goal was to capture the atmosphere of a premium coffee house while making the website feel refined, inviting, and visually memorable.',
  challenge:
    'The project required balancing aesthetic storytelling with usability. Every section needed to evoke the warmth of a boutique café while keeping navigation effortless and ensuring menus, locations, and ordering remained easy to access.',
  solution:
    'We created a minimalist editorial layout supported by rich photography, soft typography, subtle motion, and carefully balanced whitespace. Every interaction was designed to reinforce the handcrafted nature of the brand while maintaining exceptional performance across all devices.',
  stack: [
    'Brand Identity',
    'UI/UX Design',
    'React',
    'Vite',
    'Framer Motion',
    'Responsive Design',
  ],
  outcome:
    'The final experience positions Ember & Bean as a premium lifestyle café rather than just another coffee shop. The website strengthens brand perception, encourages exploration, and creates a memorable first impression that aligns with the café’s handcrafted identity.',
  stats: [
    'Premium Brand Experience',
    'Artisan Café Identity',
    'Immersive Visual Storytelling',
  ],
},
] as const;