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
import { Work } from './components/Work';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { NavigationProvider, useNavigation } from './lib/navigation';
import { sectionPadding, sectionToneClass } from './lib/rhythm';
import { brand, caseStudies, serviceHighlights, servicePages, socialItems } from './lib/site';
import { useSeo } from './lib/seo';
import { Reveal } from './components/Motion';

type ServicePageData = (typeof servicePages)[number];

const sectionLight = `${sectionToneClass.light} ${sectionPadding}`;
const sectionDark = `${sectionToneClass.dark} ${sectionPadding}`;
const cardDark = `surface-card-dark p-6 sm:p-7 lg:p-8`;
const cardLight = `surface-card p-6 sm:p-7 lg:p-8`;
const cardDarkLarge = `surface-card-dark p-6 sm:p-8 lg:p-10`;
const cardLightLarge = `surface-card-elevated p-6 sm:p-8 lg:p-10`;

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

function ArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
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
            <BrandMark variant="light" className="mb-8" imageClassName="max-h-[3.5rem] sm:max-h-[5.5rem] md:max-h-[11rem]" />
            <p className="surface-copy font-body-md">
              We partner with founders, marketing teams, and enterprise stakeholders who need a studio that can translate ambition into a premium digital presence.
            </p>
          </div>
        }
      />
      <section data-surface-tone="dark" className={`${sectionToneClass.dark} ${sectionPadding}`}>
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
      <section data-surface-tone="light" className={`${sectionToneClass.light} ${sectionPadding}`}>
        <div className="grid gap-6 md:grid-cols-3">
          <StatPill label="Creative direction" value="Strategy" />
          <StatPill label="Interface systems" value="Clarity" />
          <StatPill label="Launch posture" value="Premium" />
        </div>
      </section>

      <section
        data-surface-tone="dark"
        className={`${sectionToneClass.dark} ${sectionPadding}`}
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
          <AppLink
            href="https://soham.aurelis-digital.com/"
            target="_blank"
            className={`${cardDarkLarge} people-card-hover group relative block`}
          >
            <div className="w-14 h-[2px] bg-primary rounded-full mb-8" />

            <h3 className="font-headline-lg text-3xl text-on-primary">
              Soham Kale
            </h3>

            <p className="mt-3 font-label-mono text-[11px] uppercase tracking-[0.24em] text-on-tertiary-container">
              Founder & CTO
            </p>

            <p className="surface-copy mt-6">
              Drives AI innovation, intelligent automation, and emerging technologies,
              creating practical solutions that help businesses grow and scale.
            </p>

            <div className="mt-6 flex items-center gap-2 font-label-mono text-[11px] uppercase tracking-[0.24em] text-on-tertiary-container transition-colors duration-300 group-hover:text-on-primary">
              Visit Profile
              <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </AppLink>
          <AppLink
            href="https://aditya.aurelis-digital.com/"
            target="_blank"
            className={`${cardDarkLarge} people-card-hover group relative block`}
          >
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

            <div className="mt-6 flex items-center gap-2 font-label-mono text-[11px] uppercase tracking-[0.24em] text-on-tertiary-container transition-colors duration-300 group-hover:text-on-primary">
              Visit Profile
              <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </AppLink>


          <div className={`${cardDarkLarge} people-card-hover`}>
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
              className={`rounded-full px-8 py-4 font-label-mono text-[11px] uppercase tracking-[0.24em] ${darkHero ? 'bg-on-primary text-primary' : 'bg-primary text-on-primary'
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
  useSeo(
    'Work | Aurelis Digital',
    'Selected case studies and premium digital experiences by Aurelis Digital.',
  );

  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Selected work with business outcomes in mind."
        description="Aurelis Digital creates polished systems that balance visual distinction with clarity, conversion, and trust."
        actions={
          <AppLink
            href="/contact"
            className="rounded-full bg-primary px-8 py-4 font-label-mono text-[11px] uppercase tracking-[0.24em] text-on-primary"
          >
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
                  className={`${cardDarkLarge} grid gap-10 lg:grid-cols-12 lg:items-center`}
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{
                    duration: 0.28,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {/* Image */}
                  <div
                    className={`lg:col-span-7 ${
                      index % 2 === 1 ? 'lg:order-2' : ''
                    }`}
                  >
                    <AppLink
                      href={`/work/${item.slug}`}
                      className="group block"
                    >
                      <div className="relative aspect-[16/9] overflow-hidden rounded-[36px] border border-white/6 bg-[#0f1114]">
                        <img
                          src={item.image}
                          alt={item.title}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                        <div className="absolute left-8 top-8 rounded-full border border-[#D4AF37]/25 bg-[#191919]/90 px-5 py-2.5 font-label-mono text-[10px] uppercase tracking-[0.28em] text-[#D4AF37] backdrop-blur transition-all duration-300 group-hover:border-[#D4AF37]/60 group-hover:bg-[#222]">
                          View Case Study
                        </div>
                      </div>
                    </AppLink>
                  </div>

                  {/* Content */}
                  <div
                    className={`lg:col-span-5 ${
                      index % 2 === 1 ? 'lg:order-1' : ''
                    }`}
                  >
                    {/* Label */}
                    <p className="mt-10 font-label-mono text-[11px] uppercase tracking-[0.24em] text-[#D4AF37] tracking-[0.35em]">
                      {item.label}
                    </p>

                    {/* Title */}
                    <h2 className="mt-2 font-headline-lg text-3xl sm:text-4xl lg:text-6xl  font-light leading-[1.05] leading-tight text-on-primary">
                      {item.title}
                    </h2>

                    {/* Description */}
                    <p className="mt-2 max-w-xl text-base sm:text-lg lg:text-[1.55rem] leading-relaxed lg:leading-[2.25rem] text-[#B7B3AA]">
                      {item.description}
                    </p>

                    {/* Stats */}
                    <div className="mt-10 flex flex-wrap gap-5">
                      {item.stats.map((stat) => (
                        <span
                          key={stat}
                          className="rounded-full border flex items-center rounded-full border border-[#D4AF37]/20 bg-[#1A1A1A] px-7 py-4 font-label-mono text-[12px] tracking-[0.06em] text-[#E4C788] transition-all duration-300 hover:border-[#D4AF37]/45 hover:bg-[] px-5 py-3 font-label-mono text-[11px] uppercase tracking-[0.18em] text-on-primary transition-all duration-300 hover:border-primary/50 hover:bg-primary/12"
                        >
                          {stat}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div  className="mt-8 inline-block border-b border-[#D4AF37]/35 pb-0">
                      <AppLink
                        href={`/work/${item.slug}`}
                       className="inline-flex items-center gap-3 font-label-mono text-[11px] uppercase tracking-[0.30em] gap-4 text-[12px] tracking-[0.34em] text-[#D4AF37] transition-all duration-300 hover:gap-6"
                      >
                        Read Case Study
                        <span className="text-2xl transition-transform duration-300 group-hover:translate-x-2">
                           →
                        </span>
                      </AppLink>
                    </div>
                    <div>
                      <br>
                      </br>
                      <br>
                      </br>
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
            <AppLink href={caseStudy.link} target="_blank" rel="noopener noreferrer" className="rounded-full bg-primary px-8 py-4 font-label-mono text-[11px] uppercase tracking-[0.24em] text-on-primary">
              Visit Site
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
                  <span className="text-[#283145]">{stat}</span>
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
            <article className={cardDarkLarge}>
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
                <p className="text-[#283145] mt-4 font-body-md">{caseStudy.outcome}</p>
              </div>
            </article>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ProjectNotFoundPage() {
  useSeo('Project Not Found | Aurelis Digital', 'The case study you are looking for could not be found. Return to the work archive to explore available projects.');

  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Project not found"
        description="The case study you’re looking for is not available. Return to the work archive to view published projects."
        actions={
          <AppLink href="/work" className="rounded-full bg-primary px-8 py-4 font-label-mono text-[11px] uppercase tracking-[0.24em] text-on-primary">
            Return to work
          </AppLink>
        }
      />
      <section data-surface-tone="light" className={`${sectionToneClass.light} ${sectionPadding}`}>
        <div className="grid gap-10 text-center">
          <p className="surface-copy mx-auto max-w-3xl">
            This case study either does not exist yet or the URL is incorrect. Browse the archive to explore the projects that are currently published.
          </p>
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
                    className="rounded-2xl border border-white/12 bg-white/8 px-4 py-4 text-on-primary outline-none transition-colors focus:border-white/20 focus-visible:ring-2 focus-visible:ring-white/50"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange('name')}
                    required
                  />
                  {errors.name ? <span className="text-sm text-error">{errors.name}</span> : null}
                </label>
                <label className="grid gap-2">
                  <span className="font-label-mono text-[11px] uppercase tracking-[0.24em] text-on-tertiary-container">Email</span>
                  <input
                    className="rounded-2xl border border-white/12 bg-white/8 px-4 py-4 text-on-primary outline-none transition-colors focus:border-white/20 focus-visible:ring-2 focus-visible:ring-white/50"
                    name="email"
                    type="email"
                    placeholder="name@company.com"
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
                    className="rounded-2xl border border-white/12 bg-white/8 px-4 py-4 text-on-primary outline-none transition-colors focus:border-white/20 focus-visible:ring-2 focus-visible:ring-white/50"
                    name="company"
                    placeholder="Acme Co."
                    value={form.company}
                    onChange={handleChange('company')}
                  />
                </label>
                <label className="grid gap-2">
                  <span className="font-label-mono text-[11px] uppercase tracking-[0.24em] text-on-tertiary-container">Project type</span>
                  <select
                    className="rounded-2xl border border-white/12 bg-white/8 px-4 py-4 text-on-primary outline-none transition-colors focus:border-white/20 focus-visible:ring-2 focus-visible:ring-white/50"
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
                  className="min-h-48 rounded-3xl border border-white/12 bg-white/8 px-4 py-4 text-on-primary outline-none transition-colors focus:border-white/20 focus-visible:ring-2 focus-visible:ring-white/50"
                  name="message"
                  placeholder="Tell us what you’re building, your timeline, and what success looks like."
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
                <button className="rounded-full bg-white px-8 py-4 font-label-mono text-[11px] uppercase tracking-[0.24em] text-primary" type="submit">
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
        <div className="mx-auto max-w-3xl space-y-16">
          {sections.map((section) => (
            <article key={section.heading} className={cardLightLarge}>
              <h2 className="font-headline-lg text-3xl text-white">{section.heading}</h2>
              <div className="mt-8 space-y-6">
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="font-body-md text-[#c7cedd] leading-relaxed">{paragraph}</p>
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
      description="Aurelis Digital respects your privacy and is committed to protecting your personal information. This Privacy Policy explains what information we collect, how we use it, and the choices you have regarding your data."
      sections={[
        {
          heading: 'Effective Date',
          body: [
            'This Privacy Policy is effective as of August 4, 2026.',
          ],
        },
        {
          heading: 'Introduction',
          body: [
            'At Aurelis Digital ("Aurelis", "we", "our", or "us"), we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains what information we collect, how we use it, and the choices you have regarding your data when you visit our website or engage with our services.',
            'By accessing or using our website, you agree to the practices described in this Privacy Policy.',
          ],
        },
        {
          heading: 'Information We Collect',
          body: [
            'We may collect the following information:',
            'Personal Information: Full name, email address, phone number, company or organization, project requirements, communication preferences, and information submitted through contact forms or email.',
            'Technical Information: We may automatically collect IP address, browser type, device information, operating system, pages visited, referring website, session information, and cookies and analytics data.',
          ],
        },
        {
          heading: 'How We Use Information',
          body: [
            'We use collected information to: respond to enquiries, deliver our services, prepare project proposals, improve website performance, communicate with clients, maintain security, prevent fraud, and comply with legal obligations.',
          ],
        },
        {
          heading: 'Cookies and Tracking Technologies',
          body: [
            'We use cookies and similar technologies to improve user experience, analyze website performance, and remember user preferences. Users may disable cookies through their browser settings.',
          ],
        },
        {
          heading: 'Third-Party Services',
          body: [
            'We may use trusted third-party providers for website hosting, analytics, email communication, cloud infrastructure, payment processing, and CRM platforms. These providers only receive information necessary to perform their services.',
          ],
        },
        {
          heading: 'Data Sharing',
          body: [
            'We never sell your personal information. Information may only be shared with trusted service providers, to comply with legal obligations, to protect our legal rights, or during mergers or acquisitions.',
          ],
        },
        {
          heading: 'Data Security',
          body: [
            'We implement reasonable technical and organizational safeguards to protect your personal information. However, no internet transmission or storage system is completely secure.',
          ],
        },
        {
          heading: 'Data Retention',
          body: [
            'We retain information only as long as necessary to provide services, meet legal obligations, resolve disputes, and enforce agreements. Information is securely deleted when no longer required.',
          ],
        },
        {
          heading: 'Your Rights',
          body: [
            'Depending on applicable laws, you may have the right to: access your data, correct inaccurate information, request deletion, restrict processing, object to processing, withdraw consent, and request data portability.',
          ],
        },
        {
          heading: 'Children\'s Privacy',
          body: [
            'Our services are intended for businesses and individuals over 18 years of age. We do not knowingly collect information from children.',
          ],
        },
        {
          heading: 'Changes to This Policy',
          body: [
            'We may update this Privacy Policy periodically. The latest version will always be available on this page with the updated effective date.',
          ],
        },
        {
          heading: 'Contact Us',
          body: [
            `For privacy-related questions or concerns, please contact us at ${brand.email}.`,
          ],
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
      description="Welcome to Aurelis Digital. These Terms & Conditions govern your access to and use of our website, products, and services. By accessing our website or engaging our services, you agree to these Terms."
      sections={[
        {
          heading: 'Effective Date',
          body: [
            'These Terms & Conditions are effective as of August 4, 2026.',
          ],
        },
        {
          heading: '1. Acceptance of Terms',
          body: [
            'By using the Aurelis Digital website or purchasing our services, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions. If you do not agree, please discontinue use of our website and services.',
          ],
        },
        {
          heading: '2. Services',
          body: [
            'Aurelis Digital provides professional digital services, which may include: AI Consulting & Implementation, Brand Strategy & Identity, UI/UX Design, Website Design & Development, Web Applications, Automation Solutions, Digital Product Development, Creative Design Services, and Technical Consulting.',
            'The scope of each engagement is defined separately through proposals, quotations, statements of work, or written agreements.',
          ],
        },
        {
          heading: '3. Project Engagement',
          body: [
            'Projects begin only after: Proposal approval, Required deposit or payment (where applicable), and Receipt of necessary project information from the client.',
            'Delays in providing required assets, approvals, or feedback may affect project timelines.',
          ],
        },
        {
          heading: '4. Client Responsibilities',
          body: [
            'Clients agree to: Provide accurate information, Supply required content and assets, Review deliverables promptly, Provide approvals within agreed timelines, and Maintain communication throughout the project.',
            'Failure to do so may result in project delays.',
          ],
        },
        {
          heading: '5. Payments',
          body: [
            'Unless otherwise agreed: Payments must be made according to the agreed proposal or invoice, Late payments may delay work or project delivery, and Taxes, transaction fees, or applicable governmental charges remain the client\'s responsibility unless stated otherwise.',
          ],
        },
        {
          heading: '6. Intellectual Property',
          body: [
            'Unless otherwise specified in writing: Aurelis Digital retains ownership of all concepts, source files, methodologies, templates, and proprietary tools developed internally.',
            'Final approved deliverables become the client\'s property only after full payment has been received. Aurelis Digital may showcase completed work in its portfolio, marketing materials, and case studies unless otherwise agreed in writing.',
          ],
        },
        {
          heading: '7. Confidentiality',
          body: [
            'Both parties agree to keep confidential information private and not disclose proprietary information received during the course of a project unless required by law.',
          ],
        },
        {
          heading: '8. Revisions',
          body: [
            'Projects include the number of revisions specified in the project proposal. Additional revisions beyond the agreed scope may incur additional charges.',
          ],
        },
        {
          heading: '9. Third-Party Services',
          body: [
            'Projects may integrate third-party platforms, APIs, hosting providers, payment gateways, AI services, or software. Aurelis Digital is not responsible for: Third-party outages, API pricing changes, Platform policy changes, Service discontinuation, and Security issues originating from third-party providers.',
          ],
        },
        {
          heading: '10. Website Availability',
          body: [
            'We strive to maintain uninterrupted access to our website; however, we do not guarantee that the website will always be available or free from interruptions, errors, or technical issues.',
          ],
        },
        {
          heading: '11. Limitation of Liability',
          body: [
            'To the maximum extent permitted by law, Aurelis Digital shall not be liable for: Indirect damages, Consequential losses, Loss of profits, Loss of business opportunities, Data loss, or Business interruption.',
            'Our total liability shall not exceed the amount paid by the client for the specific service giving rise to the claim.',
          ],
        },
        {
          heading: '12. Warranties',
          body: [
            'Services are provided on an "as is" and "as available" basis. While we strive to deliver high-quality solutions, we do not guarantee: Continuous website uptime, Third-party platform availability, Search engine rankings, Future business results, or Compatibility with future software updates outside the agreed project scope.',
          ],
        },
        {
          heading: '13. Termination',
          body: [
            'Either party may terminate a project in accordance with the agreed contract. Upon termination: Completed work remains billable, Outstanding invoices become immediately due, and Deliverables may be withheld until outstanding payments are received.',
          ],
        },
        {
          heading: '14. Acceptable Use',
          body: [
            'You agree not to: Use our website for unlawful purposes, Attempt unauthorized access to our systems, Introduce malicious software, Interfere with website functionality, or Copy or reproduce website content without permission.',
          ],
        },
        {
          heading: '15. Privacy',
          body: [
            'Your use of our services is also governed by our Privacy Policy, which explains how we collect, use, and protect your information.',
          ],
        },
        {
          heading: '16. Changes to These Terms',
          body: [
            'Aurelis Digital reserves the right to update these Terms & Conditions at any time. Changes become effective immediately upon publication on this website. Continued use of the website constitutes acceptance of the updated Terms.',
          ],
        },
        {
          heading: '17. Governing Law',
          body: [
            'These Terms & Conditions shall be governed by and interpreted in accordance with the laws of India, without regard to conflict of law principles. Any disputes shall be subject to the exclusive jurisdiction of the competent courts in Pune, Maharashtra, India.',
          ],
        },
        {
          heading: '18. Contact',
          body: [
            `For questions regarding these Terms & Conditions, please contact us at ${brand.email}.`,
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
      description="At Aurelis Digital, we use cookies and similar technologies to improve your browsing experience, understand website performance, and ensure our website functions properly."
      sections={[
        {
          heading: 'Effective Date',
          body: [
            'This Cookie Policy is effective as of August 4, 2026.',
          ],
        },
        {
          heading: 'What Are Cookies?',
          body: [
            'Cookies are small text files stored on your device that help websites remember your preferences and improve functionality.',
          ],
        },
        {
          heading: 'How We Use Cookies',
          body: [
            'We use cookies to: Keep the website secure and functional, Remember your preferences, Analyze website traffic and performance, and Improve user experience.',
          ],
        },
        {
          heading: 'Types of Cookies',
          body: [
            'Essential Cookies: Necessary for website functionality, security, and navigation.',
            'Analytical Cookies: Help us understand how visitors interact with the website and improve performance.',
            'Preference Cookies: Remember your settings and choices to enhance your experience.',
          ],
        },
        {
          heading: 'Third-Party Services',
          body: [
            'We may use trusted third-party services such as analytics, hosting, and content delivery providers. These services may set their own cookies in accordance with their respective privacy policies.',
          ],
        },
        {
          heading: 'Managing Cookies',
          body: [
            'Most browsers allow you to view, block, or delete cookies. Please note that disabling cookies may affect certain features of the website.',
            'You can manage cookies through your browser settings. For more information on how to do this, please visit your browser\'s help section.',
          ],
        },
        {
          heading: 'Changes to This Policy',
          body: [
            'We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated Effective Date. Your continued use of the website constitutes acceptance of the updated policy.',
          ],
        },
        {
          heading: 'Contact',
          body: [
            `For any questions regarding this Cookie Policy, please contact us at ${brand.email}.`,
          ],
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
      description="The information provided on the Aurelis Digital website is for general informational purposes only. While we strive to keep our content accurate and up to date, we make no warranties regarding its completeness, accuracy, or reliability."
      sections={[
        {
          heading: 'Effective Date',
          body: [
            'This Disclaimer is effective as of August 4, 2026.',
          ],
        },
        {
          heading: 'General Information',
          body: [
            'The information provided on the Aurelis Digital website is for general informational purposes only. While we strive to keep our content accurate and up to date, we make no warranties regarding its completeness, accuracy, or reliability.',
          ],
        },
        {
          heading: 'Not Professional Advice',
          body: [
            'Services, recommendations, and insights shared on this website should not be considered legal, financial, or professional advice. Any decisions made based on this information are at your own discretion.',
          ],
        },
        {
          heading: 'Third-Party Content',
          body: [
            'Aurelis Digital is not responsible for the content or practices of third-party websites linked from our website.',
          ],
        },
        {
          heading: 'Changes to This Disclaimer',
          body: [
            'We reserve the right to update this Disclaimer at any time without prior notice. Your continued use of the website constitutes acceptance of any updates.',
          ],
        },
        {
          heading: 'Contact',
          body: [
            `For questions regarding this Disclaimer, please contact us at ${brand.email}.`,
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
  const workSlug = path.startsWith('/work/') ? path.slice('/work/'.length) : '';
  const workCaseStudy = workSlug ? caseStudies.find((item) => item.slug === workSlug) : undefined;

  if (service) {
    return <ServiceDetailPage service={service} />;
  }

  if (workSlug && !workCaseStudy) {
    return <ProjectNotFoundPage />;
  }

  if (workCaseStudy) {
    return <CaseStudyPage caseStudy={workCaseStudy} />;
  }

  switch (path) {
    case '/':
      return <HomePage />;
    case '/about':
      return <AboutPage />;
    case '/services':
      return <ServicesPage />;
    case '/work':
      return <WorkPage />;
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
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 z-40 h-24 lg:hidden"
        style={{ background: 'linear-gradient(to bottom, rgba(90,100,130,0.10), rgba(90,100,130,0.03) 55%, transparent)' }}
      />
      <div className="pointer-events-none fixed inset-x-0 top-0 z-40 hidden h-28 bg-gradient-to-b from-white/70 to-transparent lg:block" aria-hidden="true" />
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
