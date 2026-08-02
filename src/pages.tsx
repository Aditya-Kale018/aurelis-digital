import { useState, type ChangeEvent, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { AppLink } from './components/AppLink';
import { BrandMark } from './components/BrandMark';
import { PageHero } from './components/PageHero';
import { AISection } from './components/AISection';
import { Capabilities } from './components/Capabilities';
import { Contact as ContactCta } from './components/Contact';
import { GrainOverlay } from './components/GrainOverlay';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { NavigationProvider, useNavigation } from './lib/navigation';
import { sectionToneClass } from './lib/rhythm';
import { brand, caseStudies, serviceHighlights, servicePages, socialItems } from './lib/site';
import { useSeo } from './lib/seo';
import { Reveal } from './components/Motion';

type ServicePageData = (typeof servicePages)[number];

const sectionLight = `${sectionToneClass.light} px-margin-desktop py-section-gap`;
const sectionDark = `${sectionToneClass.dark} px-margin-desktop py-section-gap`;
const cardDark = `surface-card-dark p-8`;
const cardLight = `surface-card p-8`;
const cardDarkLarge = `surface-card-dark p-10`;
const cardLightLarge = `surface-card-elevated p-10`;

function SectionCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <article className={cardDarkLarge}>
      <p className="font-label-mono text-[11px] uppercase tracking-[0.24em] text-on-tertiary-container">{title}</p>
      <p className="surface-copy mt-5 font-body-md">{description}</p>
      <div className="mt-8">
        <AppLink href={href} className="font-label-mono text-[11px] uppercase tracking-[0.24em] text-on-tertiary-container transition-colors hover:text-on-primary">
          Read More
        </AppLink>
      </div>
    </article>
  );
}

function StatPill({ label, value }: { label: string; value: string }) {
  return (
    <div className={cardDark}>
      <p className="font-label-mono text-[10px] uppercase tracking-[0.3em] text-on-tertiary-container">{label}</p>
      <p className="mt-4 font-headline-lg text-3xl text-on-primary">{value}</p>
    </div>
  );
}

function HomePage() {
  useSeo(
    'Aurelis Digital | Premium Websites, Brand Systems & AI Solutions',
    'Aurelis Digital builds premium websites, brand systems, and AI-enabled experiences for ambitious businesses.',
  );

  return (
    <>
      <Hero />
      
      <Capabilities tone="dark" />
      
      <AISection tone="light" />
      <ContactCta tone="dark" />
    </>
  );
}

function AboutPage() {
  useSeo(
    'About Aurelis Digital | Strategy, Design & Build',
    'Learn how Aurelis Digital blends strategy, design, motion, and engineering into premium digital experiences.',
  );

  return (
    <>
      <PageHero
        eyebrow="About Aurelis"
        title="Designing digital companies, not just marketing sites."
        description="Aurelis Digital is a boutique studio built for businesses that want a sharper brand presence, stronger product storytelling, and a more disciplined digital system."
        actions={
          <>
            <AppLink href="/services" className="rounded-full bg-primary px-8 py-4 font-label-mono text-[11px] uppercase tracking-[0.24em] text-on-primary">
              Explore Services
            </AppLink>
            <AppLink href="/contact" className="rounded-full border border-outline-variant/80 px-8 py-4 font-label-mono text-[11px] uppercase tracking-[0.24em] text-primary">
              Contact Us
            </AppLink>
          </>
        }
        aside={
          <div className={cardDarkLarge}>
            <BrandMark variant="light" className="mb-8" imageClassName="max-h-[9rem] md:max-h-[11rem]" />
            <p className="surface-copy font-body-md">
              We partner with founders, marketing teams, and enterprise stakeholders who need a studio that can translate ambition into a premium digital presence.
            </p>
          </div>
        }
      />
      <section data-surface-tone="dark" className={`${sectionToneClass.dark} px-margin-desktop py-section-gap`}>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className={cardDarkLarge}>
            <h2 className="surface-title font-headline-lg text-4xl">What we believe</h2>
            <div className="surface-copy mt-8 space-y-6">
              <p>Great digital work is not loud by default. It is clear, confident, and deeply considered.</p>
              <p>Brand and product should not fight each other. The best systems make strategy, visuals, and motion feel like one language.</p>
              <p>Premium is not decoration. It is the removal of friction, confusion, and generic decisions.</p>
            </div>
          </div>
          <div className={cardDarkLarge}>
            <h2 className="surface-title font-headline-lg text-4xl">Our approach</h2>
            <div className="mt-8 grid gap-5">
              {['Discovery and positioning', 'Design systems and motion language', 'Front-end build and QA', 'Launch support and iteration'].map((item, index) => (
                <div key={item} className="flex items-center gap-4 rounded-2xl border border-white/12 bg-white/10 p-4 text-on-primary backdrop-blur">
                  <span className="font-label-mono text-[11px] uppercase tracking-[0.24em] text-on-tertiary-container">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="surface-copy">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section data-surface-tone="light" className={`${sectionToneClass.light} px-margin-desktop py-section-gap`}>
        <div className="grid gap-6 md:grid-cols-3">
          <StatPill label="Creative direction" value="Strategy" />
          <StatPill label="Interface systems" value="Clarity" />
          <StatPill label="Launch posture" value="Premium" />
        </div>
      </section>

      <section
  data-surface-tone="dark"
  className={`${sectionToneClass.dark} px-margin-desktop py-section-gap`}
>
  <div className="text-center mb-16">
    <p className="font-label-mono text-[11px] uppercase tracking-[0.28em] text-on-tertiary-container">
      Leadership
    </p>

    <h2 className="mt-4 font-headline-lg text-5xl text-on-primary">
      The People Behind Aurelis
    </h2>

    <p className="surface-copy mt-6 max-w-2xl mx-auto">
      Aurelis Digital is led by a small founding team passionate about building
      premium digital experiences, modern web products, and AI-powered
      solutions.
    </p>
  </div>

  <div className="grid gap-8 md:grid-cols-3">

    <div className={cardDarkLarge}>
      <div className="w-14 h-[2px] bg-primary rounded-full mb-8" />

      <h3 className="font-headline-lg text-3xl text-on-primary">
        Soham Kale
      </h3>

      <p className="mt-3 font-label-mono text-[11px] uppercase tracking-[0.24em] text-on-tertiary-container">
        Co-Founder
      </p>

      <p className="surface-copy mt-6">
        Drives AI innovation, intelligent automation, and emerging technologies,
        creating practical solutions that help businesses grow and scale.
      </p>
    </div>
        <div className={cardDarkLarge}>
      <div className="w-14 h-[2px] bg-primary rounded-full mb-8" />

      <h3 className="font-headline-lg text-3xl text-on-primary">
        Aditya Kale
      </h3>

      <p className="mt-3 font-label-mono text-[11px] uppercase tracking-[0.24em] text-on-tertiary-container">
        Founder & CEO
      </p>

      <p className="surface-copy mt-6">
        Leads strategy, software architecture, and design systems, UI/UX design,
        building scalable digital products with a strong focus on innovation and technical excellence.
      </p>
    </div>
    

    <div className={cardDarkLarge}>
      <div className="w-14 h-[2px] bg-primary rounded-full mb-8" />

      <h3 className="font-headline-lg text-3xl text-on-primary">
        Mayur Kaithwas
      </h3>

      <p className="mt-3 font-label-mono text-[11px] uppercase tracking-[0.24em] text-on-tertiary-container">
        Co-Founder
      </p>

      <p className="surface-copy mt-6">
        Specializes in full-stack engineering, building modern frontend experiences
        and scalable backend systems with performance and reliability at the core.
      </p>
    </div>

  </div>
</section>
    </>
  );
}

function ServicesPage() {
  useSeo(
    'Services | Aurelis Digital',
    'Strategy systems, product design, motion direction, and launch execution from Aurelis Digital.',
  );

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything you need to launch like a premium brand."
        description="Aurelis Digital designs and builds the digital layer your business needs to compete at enterprise level."
        actions={
          <>
            <AppLink href="/contact" className="rounded-full bg-primary px-8 py-4 font-label-mono text-[11px] uppercase tracking-[0.24em] text-on-primary">
              Schedule Consultation
            </AppLink>
          </>
        }
      />
      <section data-surface-tone="dark" className={sectionDark}>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {servicePages.map((service) => (
            <div key={service.slug}>
              <SectionCard
                title={service.eyebrow}
                description={service.description}
                href={`/services/${service.slug}`}
              />
            </div>
          ))}
        </div>
      </section>
      <section data-surface-tone="light" className={sectionLight}>
        <div className="grid gap-6 md:grid-cols-3">
          {serviceHighlights.map((service) => (
            <div key={service.title} className={cardDarkLarge}>
              <span className="font-label-mono text-[11px] uppercase tracking-[0.24em] text-on-tertiary-container">{service.title}</span>
              <p className="surface-copy mt-6 font-body-md">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function ServiceDetailPage({ service }: { service: ServicePageData }) {
  useSeo(
    `${service.eyebrow} | Aurelis Digital`,
    `${service.title} from Aurelis Digital. Premium strategy, design, and production support for ambitious teams.`,
  );

  const darkHero = service.slug === 'ai-agents' || service.slug === 'business-automation';

  return (
    <>
      <PageHero
        dark={darkHero}
        eyebrow={service.eyebrow}
        title={service.title}
        description={service.description}
        actions={
          <>
            <AppLink
              href="/contact"
              className={`rounded-full px-8 py-4 font-label-mono text-[11px] uppercase tracking-[0.24em] ${
                darkHero ? 'bg-on-primary text-primary' : 'bg-primary text-on-primary'
              }`}
            >
              Book Discovery Call
            </AppLink>
          </>
        }
        aside={
          <div className={darkHero ? cardLightLarge : cardDarkLarge}>
            <p className="font-label-mono text-[10px] uppercase tracking-[0.3em] text-secondary">Engagement focus</p>
            <div className="surface-copy mt-6 space-y-4 text-sm">
              {service.deliverables.map((item) => (
                <div key={item} className={`rounded-2xl border px-4 py-3 ${darkHero ? 'border-outline-variant/40 bg-white/72' : 'border-white/12 bg-white/8 text-on-primary'}`}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        }
      />
      <section data-surface-tone="dark" className={sectionDark}>
        <div className="grid gap-8 lg:grid-cols-12">
          <div className={`lg:col-span-7 ${cardLightLarge}`}>
            <h2 className="surface-title font-headline-lg text-4xl">What this service covers</h2>
            <p className="surface-copy mt-6 max-w-3xl font-body-lg text-body-lg">{service.overview}</p>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {service.deliverables.map((item) => (
                <div key={item} className="rounded-3xl border border-outline-variant/40 bg-white/72 p-6">
                  <p className="font-label-mono text-[10px] uppercase tracking-[0.28em] text-secondary">Deliverable</p>
                  <p className="surface-copy mt-4 font-body-md">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={`lg:col-span-5 ${cardLightLarge}`}>
            <h2 className="surface-title font-headline-lg text-4xl">Expected outcomes</h2>
            <div className="mt-8 space-y-4">
              {service.outcomes.map((item) => (
                <div key={item} className="rounded-2xl border border-outline-variant/40 bg-white/72 p-5">
                  <p className="surface-copy">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 rounded-[28px] border border-outline-variant/40 bg-white/72 p-6">
              <p className="font-label-mono text-[10px] uppercase tracking-[0.28em] text-secondary">Next step</p>
              <p className="surface-copy mt-4">
                Share the scope and timeline in the contact form. We’ll respond with the cleanest next move.
              </p>
              <AppLink
                href={service.cta}
                className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 font-label-mono text-[11px] uppercase tracking-[0.24em] text-on-primary"
              >
                Start the conversation
              </AppLink>
            </div>
          </div>
        </div>
      </section>
      <section data-surface-tone="light" className={sectionLight}>
        <div className="grid gap-6 md:grid-cols-4">
          {[
            'Discovery and framing',
            'Information architecture and system design',
            'Build, content integration, and QA',
            'Launch support and refinement',
          ].map((step, index) => (
            <div key={step} className={cardDark}>
              <p className="font-label-mono text-[10px] uppercase tracking-[0.28em] text-secondary">
                {String(index + 1).padStart(2, '0')}
              </p>
              <p className="surface-copy mt-4 font-body-md">{step}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function WorkPage() {
  useSeo('Work | Aurelis Digital', 'Selected case studies and premium digital experiences by Aurelis Digital.');

  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Selected work with business outcomes in mind."
        description="Aurelis Digital creates polished systems that balance visual distinction with clarity, conversion, and trust."
        actions={
          <AppLink href="/contact" className="rounded-full bg-primary px-8 py-4 font-label-mono text-[11px] uppercase tracking-[0.24em] text-on-primary">
            Book Discovery Call
          </AppLink>
        }
      />
      <section data-surface-tone="dark" className={sectionDark}>
        <div className="space-y-16">
          {caseStudies.map((item, index) => (
            <div key={item.slug}>
              <Reveal delay={index * 0.06}>
                <motion.div
                  className={`${cardLightLarge} grid gap-8 lg:grid-cols-12 lg:items-center`}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <AppLink href={`/work/${item.slug}`} className="group block">
                      <div className="relative aspect-[16/9] overflow-hidden rounded-[32px] border border-outline-variant/30 bg-white/60">
                        <img alt={item.title} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" loading="lazy" src={item.image} />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/35 via-primary/12 to-transparent" />
                        <div className="absolute left-8 top-8 rounded-full border border-white/20 bg-white/72 px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-primary backdrop-blur">
                          View case study
                        </div>
                      </div>
                    </AppLink>
                  </div>
                  <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <p className="font-label-mono text-[11px] uppercase tracking-[0.24em] text-secondary">{item.label}</p>
                    <h2 className="surface-title mt-4 font-headline-lg text-4xl">{item.title}</h2>
                    <p className="surface-copy mt-6 font-body-lg text-body-lg">{item.description}</p>
                    <div className="mt-8 flex flex-wrap gap-3">
                      {item.stats.map((stat) => (
                        <span key={stat} className="rounded-full border border-outline-variant/40 bg-white/72 px-4 py-2 text-xs font-label-mono text-secondary">
                          {stat}
                        </span>
                      ))}
                    </div>
                    <div className="mt-10">
                      <AppLink href={`/work/${item.slug}`} className="font-label-mono text-[11px] uppercase tracking-[0.24em] text-secondary transition-colors hover:text-primary">
                        Read Case Study
                      </AppLink>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function CaseStudyPage({ caseStudy }: { caseStudy: (typeof caseStudies)[number] }) {
  useSeo(
    `${caseStudy.title} | Aurelis Digital Case Study`,
    `${caseStudy.title} case study by Aurelis Digital. Project overview, challenge, solution, technology stack, and outcomes.`,
  );

  return (
    <>
      <PageHero
        eyebrow={caseStudy.label}
        title={caseStudy.title}
        description={caseStudy.overview}
        actions={
          <>
            <AppLink href="/contact" className="rounded-full bg-primary px-8 py-4 font-label-mono text-[11px] uppercase tracking-[0.24em] text-on-primary">
              Book Discovery Call
            </AppLink>
          </>
        }
        aside={
            <div className={cardDarkLarge}>
              <div className="overflow-hidden rounded-[24px] border border-outline-variant/30 bg-white/72">
                <img alt={caseStudy.title} className="h-full w-full object-cover" loading="lazy" src={caseStudy.image} />
              </div>
              <div className="mt-6 grid gap-3">
                {caseStudy.stats.map((stat) => (
                  <div key={stat} className="rounded-2xl border border-outline-variant/40 bg-white/72 px-4 py-3 font-body-md">
                    <span className="surface-copy">{stat}</span>
                  </div>
                ))}
              </div>
            </div>
        }
      />
      <section data-surface-tone="light" className={sectionLight}>
        <div className="grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <article className={cardDarkLarge}>
              <h2 className="surface-title font-headline-lg text-3xl">Project Overview</h2>
              <p className="surface-copy mt-6 font-body-lg text-body-lg">{caseStudy.overview}</p>
            </article>
          </Reveal>
          <Reveal className="lg:col-span-5">
            <article className={cardDarkLarge}>
              <h2 className="surface-title font-headline-lg text-3xl">Outcome</h2>
              <p className="surface-copy mt-6">{caseStudy.outcome}</p>
            </article>
          </Reveal>
          <Reveal className="lg:col-span-6">
            <article className={cardDarkLarge}>
              <h2 className="surface-title font-headline-lg text-3xl">Challenge</h2>
              <p className="surface-copy mt-6 font-body-lg text-body-lg">{caseStudy.challenge}</p>
            </article>
          </Reveal>
          <Reveal className="lg:col-span-6">
            <article className={cardDarkLarge}>
              <h2 className="surface-title font-headline-lg text-3xl">Solution</h2>
              <p className="surface-copy mt-6 font-body-lg text-body-lg">{caseStudy.solution}</p>
            </article>
          </Reveal>
        </div>
      </section>
      <section data-surface-tone="dark" className={sectionDark}>
        <div className="grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <article className={cardLight}>
              <div className="rounded-[26px] border border-outline-variant/30 bg-white/72 p-4">
                <img alt={`${caseStudy.title} mockup`} className="h-full w-full rounded-[20px] object-cover" loading="lazy" src={caseStudy.image} />
              </div>
            </article>
          </Reveal>
          <Reveal className="lg:col-span-5">
            <article className={cardLightLarge}>
              <h2 className="surface-title font-headline-lg text-3xl">Technology Stack</h2>
              <div className="mt-6 flex flex-wrap gap-3">
                {caseStudy.stack.map((item) => (
                  <span key={item} className="rounded-full border border-outline-variant/40 bg-white/72 px-4 py-2 text-xs font-label-mono text-secondary">
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-10 rounded-[24px] border border-dashed border-outline-variant/50 bg-white/65 p-6">
                <p className="font-label-mono text-[10px] uppercase tracking-[0.28em] text-secondary">Outcome</p>
                <p className="surface-copy mt-4 font-body-md">{caseStudy.outcome}</p>
              </div>
            </article>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function AISolutionsPage() {
  useSeo(
    'AI Solutions | Aurelis Digital',
    'AI strategy, content orchestration, and automation systems tailored for premium digital teams.',
  );

  return (
    <>
      <PageHero
        dark
        eyebrow="AI Solutions"
        title="AI systems that help teams move faster with more control."
        description="We design practical AI layers that support content operations, creative review, and workflow automation without making your brand feel generic."
        actions={
          <AppLink href="/contact" className="rounded-full bg-on-primary px-8 py-4 font-label-mono text-[11px] uppercase tracking-[0.24em] text-primary">
            Discuss a Build
          </AppLink>
        }
      />
      <section data-surface-tone="light" className={sectionLight}>
        <div className="grid gap-8 lg:grid-cols-3">
          {[
            ['Workflow automation', 'Reduce repetitive work across briefing, approvals, and delivery.'],
            ['Content systems', 'Generate on-brand content with guardrails and human review.'],
            ['Insight layers', 'Turn operational data into decisions the team can act on quickly.'],
          ].map(([title, description]) => (
            <div key={title} className={cardDarkLarge}>
              <h3 className="surface-title font-headline-lg text-2xl">{title}</h3>
              <p className="surface-copy mt-4">{description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function ContactPage() {
  useSeo(
    'Contact | Aurelis Digital',
    'Contact Aurelis Digital for websites, design systems, and AI-enabled product work.',
  );

  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (field: keyof typeof form) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));
  };

  const validate = () => {
    const nextErrors: Record<string, string> = {};

    if (!form.name.trim()) nextErrors.name = 'Please enter your name.';
    if (!form.email.trim()) {
      nextErrors.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!form.projectType.trim()) nextErrors.projectType = 'Please choose a project type.';
    if (form.message.trim().length < 20) nextErrors.message = 'Please add a little more detail about the project.';

    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    setSubmitted(true);
    setForm({
      name: '',
      email: '',
      company: '',
      projectType: '',
      message: '',
    });
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you’re building."
        description="Share the context, your timeline, and what a successful outcome looks like. We’ll respond with the next best step."
        actions={
          <AppLink href={`mailto:${brand.email}`} className="rounded-full bg-primary px-8 py-4 font-label-mono text-[11px] uppercase tracking-[0.24em] text-on-primary">
            Email us directly
          </AppLink>
        }
      />
      <section data-surface-tone="dark" className={sectionDark}>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className={cardDarkLarge}>
              <h2 className="surface-title font-headline-lg text-3xl">Contact details</h2>
              <div className="surface-copy mt-8 space-y-6">
                <div>
                  <p className="font-label-mono text-[10px] uppercase tracking-[0.28em] text-on-tertiary-container">Address</p>
                  <p className="mt-2">{brand.address}</p>
                </div>
                <div>
                  <p className="font-label-mono text-[10px] uppercase tracking-[0.28em] text-on-tertiary-container">Email</p>
                  <AppLink href={`mailto:${brand.email}`} className="mt-2 inline-block text-on-tertiary-container transition-colors hover:text-on-primary">
                    {brand.email}
                  </AppLink>
                </div>
                <div>
                  <p className="font-label-mono text-[10px] uppercase tracking-[0.28em] text-on-tertiary-container">Phone</p>
                  <AppLink href={`tel:${brand.phone.replace(/\s/g, '')}`} className="mt-2 inline-block text-on-tertiary-container transition-colors hover:text-on-primary">
                    {brand.phone}
                  </AppLink>
                </div>
              </div>
              <div className="mt-8 rounded-3xl border border-white/12 bg-white/8 p-6 text-left">
                <p className="font-label-mono text-[11px] uppercase tracking-[0.24em] text-on-tertiary-container">Google Maps placeholder</p>
                <p className="surface-copy mt-4 text-sm">
                  A polished map embed can sit here in production, anchored to the studio address above.
                </p>
              </div>
              <div className="mt-8">
                <p className="font-label-mono text-[11px] uppercase tracking-[0.24em] text-on-tertiary-container">Social links</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {socialItems.map((item) => (
                    <AppLink
                      key={item.href}
                      href={item.href}
                      className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm text-on-primary transition-colors hover:border-white/20 hover:bg-white/12"
                    >
                      {item.label}
                    </AppLink>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <form className={`${cardDarkLarge} text-left`} onSubmit={handleSubmit} noValidate>
              {submitted ? (
                <div className="mb-8 rounded-[28px] border border-white/12 bg-white/8 p-6 text-on-primary">
                  <p className="font-label-mono text-[11px] uppercase tracking-[0.24em] text-on-tertiary-container">Success</p>
                  <p className="mt-3">
                    Thanks. Your enquiry is ready for our team to review. If you need to reach us immediately, you can still email {brand.email}.
                  </p>
                </div>
              ) : null}
              <div className="grid gap-6 md:grid-cols-2">
                <label className="grid gap-2">
                  <span className="font-label-mono text-[11px] uppercase tracking-[0.24em] text-on-tertiary-container">Name</span>
                  <input
                    className="rounded-2xl border border-white/12 bg-white/8 px-4 py-4 text-on-primary outline-none transition-colors focus:border-white/20"
                    name="name"
                    value={form.name}
                    onChange={handleChange('name')}
                    required
                  />
                  {errors.name ? <span className="text-sm text-error">{errors.name}</span> : null}
                </label>
                <label className="grid gap-2">
                  <span className="font-label-mono text-[11px] uppercase tracking-[0.24em] text-on-tertiary-container">Email</span>
                  <input
                    className="rounded-2xl border border-white/12 bg-white/8 px-4 py-4 text-on-primary outline-none transition-colors focus:border-white/20"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange('email')}
                    required
                  />
                  {errors.email ? <span className="text-sm text-error">{errors.email}</span> : null}
                </label>
              </div>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <label className="grid gap-2">
                  <span className="font-label-mono text-[11px] uppercase tracking-[0.24em] text-on-tertiary-container">Company</span>
                  <input
                    className="rounded-2xl border border-white/12 bg-white/8 px-4 py-4 text-on-primary outline-none transition-colors focus:border-white/20"
                    name="company"
                    value={form.company}
                    onChange={handleChange('company')}
                  />
                </label>
                <label className="grid gap-2">
                  <span className="font-label-mono text-[11px] uppercase tracking-[0.24em] text-on-tertiary-container">Project type</span>
                  <select
                    className="rounded-2xl border border-white/12 bg-white/8 px-4 py-4 text-on-primary outline-none transition-colors focus:border-white/20"
                    name="projectType"
                    value={form.projectType}
                    onChange={handleChange('projectType')}
                    required
                  >
                    <option value="">Select a service</option>
                    <option>Premium Website</option>
                    <option>Web Application</option>
                    <option>AI Agent</option>
                    <option>Business Automation</option>
                    <option>Landing Page</option>
                  </select>
                  {errors.projectType ? <span className="text-sm text-error">{errors.projectType}</span> : null}
                </label>
              </div>
              <label className="mt-6 grid gap-2">
                <span className="font-label-mono text-[11px] uppercase tracking-[0.24em] text-on-tertiary-container">Project details</span>
                <textarea
                  className="min-h-48 rounded-3xl border border-white/12 bg-white/8 px-4 py-4 text-on-primary outline-none transition-colors focus:border-white/20"
                  name="message"
                  value={form.message}
                  onChange={handleChange('message')}
                  required
                />
                {errors.message ? <span className="text-sm text-error">{errors.message}</span> : null}
              </label>
              <div className="mt-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                <p className="max-w-2xl text-sm text-on-primary/70">
                  {submitted ? 'The form passed validation and a success state is now showing.' : 'This form validates locally and shows a success state when the details are complete.'}
                </p>
                <button className="rounded-full bg-primary px-8 py-4 font-label-mono text-[11px] uppercase tracking-[0.24em] text-on-primary" type="submit">
                  Send enquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

function LegalPage({
  title,
  description,
  sections,
}: {
  title: string;
  description: string;
  sections: { heading: string; body: string[] }[];
}) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} description={description} />
      <section data-surface-tone="dark" className={sectionDark}>
        <div className="mx-auto max-w-4xl space-y-12">
          {sections.map((section) => (
            <article key={section.heading} className={cardLightLarge}>
              <h2 className="surface-title font-headline-lg text-3xl">{section.heading}</h2>
              <div className="surface-copy mt-6 space-y-4">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function PrivacyPolicyPage() {
  useSeo('Privacy Policy | Aurelis Digital', 'Privacy policy for Aurelis Digital.');
  return (
    <LegalPage
      title="Privacy Policy"
      description="This policy explains how Aurelis Digital collects, uses, and protects information shared through our website and contact channels."
      sections={[
        {
          heading: 'Information we collect',
          body: [
            'We may collect information you submit through forms, email, phone, or direct correspondence, including your name, email address, company name, and project details.',
            'We may also collect basic technical information such as browser type, device type, pages visited, and time spent on the site to help us improve the experience.',
          ],
        },
        {
          heading: 'How we use information',
          body: [
            'We use your information to respond to enquiries, prepare proposals, deliver services, and maintain records of client communication.',
            'We may also use aggregated analytics to understand how visitors engage with the site and to improve performance, accessibility, and content relevance.',
          ],
        },
        {
          heading: 'Contact',
          body: [`If you have questions about this policy, contact ${brand.email}.`],
        },
      ]}
    />
  );
}

function TermsPage() {
  useSeo('Terms & Conditions | Aurelis Digital', 'Terms and conditions for using the Aurelis Digital website and services.');
  return (
    <LegalPage
      title="Terms & Conditions"
      description="These terms govern the use of the Aurelis Digital website and outline the baseline expectations for engagement and communication."
      sections={[
        {
          heading: 'Website use',
          body: [
            'The website is provided for informational and promotional purposes. You agree not to misuse the site, disrupt its operation, or attempt to access systems without permission.',
            'All content, design, and brand elements displayed on the site are the property of Aurelis Digital unless otherwise noted.',
          ],
        },
        {
          heading: 'Projects and delivery',
          body: [
            'Any project work, pricing, milestones, and deliverables are defined in a written proposal or statement of work. Estimates are subject to scope, timeline, and client responsiveness.',
            'We reserve the right to decline work that does not align with our standards, capacity, or ethical guidelines.',
          ],
        },
        {
          heading: 'Limitation',
          body: [
            'While we work carefully to deliver reliable outcomes, the website and its materials are provided without warranties of any kind to the fullest extent permitted by applicable law.',
          ],
        },
      ]}
    />
  );
}

function CookiesPolicyPage() {
  useSeo('Cookies Policy | Aurelis Digital', 'Cookies policy for Aurelis Digital.');
  return (
    <LegalPage
      title="Cookies Policy"
      description="This page explains the cookie usage and similar tracking technologies used on the Aurelis Digital website."
      sections={[
        {
          heading: 'What cookies do',
          body: [
            'Cookies help the site remember preferences, understand traffic patterns, and improve overall performance.',
            'We may use essential cookies to support navigation and functionality, and analytical cookies to understand how the site is used.',
          ],
        },
        {
          heading: 'Your choices',
          body: ['You can manage cookies through your browser settings. Disabling some cookies may affect the performance or appearance of parts of the website.'],
        },
      ]}
    />
  );
}

function DisclaimerPage() {
  useSeo('Disclaimer | Aurelis Digital', 'Disclaimer for Aurelis Digital.');
  return (
    <LegalPage
      title="Disclaimer"
      description="This disclaimer clarifies the limits of the information presented on the Aurelis Digital website."
      sections={[
        {
          heading: 'Informational content',
          body: [
            'The content on this website is provided for general informational purposes and should not be treated as legal, financial, or technical advice.',
            'Project examples and descriptions may summarize work, process, or intent in a compact form and are not guarantees of future outcomes.',
          ],
        },
        {
          heading: 'Professional review',
          body: [
            'If you plan to rely on any policy, contract, or engagement text for a live business use case, it should be reviewed by qualified professionals before publication.',
          ],
        },
      ]}
    />
  );
}

function NotFoundPage() {
  useSeo('Page Not Found | Aurelis Digital', 'The requested page could not be found on Aurelis Digital.');
  return (
    <>
      <PageHero
        eyebrow="404"
        title="We couldn’t find that page."
        description="The link may be outdated or the page may have moved. Use the navigation below to get back to the studio."
        actions={
          <>
            <AppLink href="/" className="rounded-full bg-primary px-8 py-4 font-label-mono text-[11px] uppercase tracking-[0.24em] text-on-primary">
              Go Home
            </AppLink>
            <AppLink href="/contact" className="rounded-full border border-outline-variant/80 px-8 py-4 font-label-mono text-[11px] uppercase tracking-[0.24em] text-primary">
              Contact Us
            </AppLink>
          </>
        }
      />
      <section data-surface-tone="dark" className={sectionDark}>
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {[
            ['Home', '/'],
            ['Services', '/services'],
            ['Contact', '/contact'],
          ].map(([label, href]) => (
            <AppLink key={href} href={href} className={`${cardLightLarge} block`}>
              <p className="font-label-mono text-[11px] uppercase tracking-[0.28em] text-secondary">{label}</p>
              <p className="surface-copy mt-4 font-body-md">Return to a live part of the site.</p>
            </AppLink>
          ))}
        </div>
      </section>
    </>
  );
}

function RouteSwitch() {
  const { pathname } = useNavigation();
  const path = pathname.replace(/\/+$/, '') || '/';
  const service = servicePages.find((item) => path === `/services/${item.slug}`);

  if (service) {
    return <ServiceDetailPage service={service} />;
  }

  switch (path) {
    case '/':
      return <HomePage />;
    case '/about':
      return <AboutPage />;
    case '/services':
      return <ServicesPage />;
    case '/ai-solutions':
      return <AISolutionsPage />;
    case '/contact':
      return <ContactPage />;
    case '/privacy-policy':
      return <PrivacyPolicyPage />;
    case '/terms':
    case '/terms-and-conditions':
      return <TermsPage />;
    case '/cookies-policy':
      return <CookiesPolicyPage />;
    case '/disclaimer':
      return <DisclaimerPage />;
    default:
      return <NotFoundPage />;
  }
}

function RoutedApp() {
  const { pathname } = useNavigation();

  return (
    <div className="relative min-h-screen">
      <GrainOverlay />
      <div className="pointer-events-none fixed inset-x-0 top-0 z-40 h-28 bg-gradient-to-b from-white/70 to-transparent" aria-hidden="true" />
      <div className="relative z-10">
        <AnimatePresence mode="sync" initial={false}>
          <motion.main
            key={pathname}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -2 }}
            transition={{ duration: 0.14, ease: [0.25, 1, 0.5, 1] }}
          >
            <RouteSwitch />
          </motion.main>
        </AnimatePresence>
      </div>
    </div>
  );
}

export function AppPages() {
  return (
    <NavigationProvider>
      <Navbar />
      <RoutedApp />
      <Footer />
    </NavigationProvider>
  );
}
