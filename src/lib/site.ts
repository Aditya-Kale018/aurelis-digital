export const brand = {
  name: 'Aurelis Digital',
  shortName: 'Aurelis',
  tagline: 'Architectural precision in digital form.',
  email: 'hello@aurelis.digital',
  phone: '+91 98765 43210',
  address: 'Aurelis Digital Studio, Bandra Kurla Complex, Mumbai, Maharashtra, India',
};

export const navigationItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'AI Solutions', href: '/ai-solutions' },
  { label: 'Contact', href: '/contact' },
];

export const legalItems = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms-and-conditions' },
  { label: 'Cookies Policy', href: '/cookies-policy' },
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
    slug: 'velvet-and-stone',
    label: 'Enterprise Retail Platform',
    title: 'Velvet & Stone',
    description: 'A luxury commerce system reworked for mobile-first storytelling, deeper merchandising, and frictionless checkout.',
    image: '/AURELIS_OverDark-Photoroom.png',
    overview:
      'Velvet & Stone needed to feel more like a high-end retail studio than a standard commerce template. The redesign focused on editorial pacing, brand confidence, and a cleaner path to purchase.',
    challenge:
      'The existing experience was functional but visually flat. It struggled to communicate premium value quickly and created too many moments of uncertainty on smaller screens.',
    solution:
      'We rebuilt the information hierarchy, introduced richer product storytelling, and used motion and spacing to make the catalog feel curated rather than crowded.',
    stack: ['Strategy', 'Design System', 'React', 'Motion', 'Content Ops'],
    outcome:
      'The new experience presents the brand with more authority, makes the product story easier to scan, and gives sales teams a more credible digital surface for enterprise conversations.',
    stats: ['38% faster navigation', '2.1x stronger product visibility', 'Mobile-first storytelling'],
  },
  {
    slug: 'lumina-capital',
    label: 'Wealth Management',
    title: 'Lumina Capital',
    description: 'A trust-first experience for high-value financial clients with refined navigation and data clarity.',
    image: '/AURELIS_OverLight-Photoroom.png',
    overview:
      'Lumina Capital needed a digital presence that could support high-trust discussions while staying approachable for prospective clients.',
    challenge:
      'The old structure buried proof points and made it hard for visitors to understand the firm’s positioning, process, and service depth at a glance.',
    solution:
      'We created a calmer interface with stronger narrative order, more visible social proof, and a premium motion language that respects the seriousness of the category.',
    stack: ['UI/UX', 'Content Strategy', 'Accessibility', 'React', 'QA'],
    outcome:
      'The revised flow helps stakeholders move from curiosity to confidence more quickly, while the polished visual system supports a stronger perception of expertise.',
    stats: ['Clearer positioning', 'Reduced bounce risk', 'More confident sales flow'],
  },
  {
    slug: 'signal-forge',
    label: 'AI Operations Suite',
    title: 'Signal Forge',
    description: 'A modular AI assistant stack that helps teams brief, generate, review, and ship content at speed.',
    image: '/AURELIS_OverLight_Icon_bg.png',
    overview:
      'Signal Forge was designed as a practical AI operations layer for teams that needed speed without giving up editorial control.',
    challenge:
      'The team wanted automation, but not at the cost of quality. The system needed to support many tasks while staying easy to understand and govern.',
    solution:
      'We mapped the core workflows, introduced approval guardrails, and designed an interface that makes each step explicit so the system feels trustworthy.',
    stack: ['AI', 'Automation', 'Workflow Design', 'Prompting', 'Analytics'],
    outcome:
      'The result is a more capable operating model that saves time, keeps quality visible, and gives the team a consistent way to scale output.',
    stats: ['Faster briefing', 'Less repetitive work', 'Human review built in'],
  },
] as const;
