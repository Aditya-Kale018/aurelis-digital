import { motion, useReducedMotion } from 'motion/react';
import { AppLink } from './AppLink';

const easeOut = [0.22, 1, 0.36, 1] as const;

/* ─── Icons ────────────────────────────────────────────── */
const IconCompass = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4}
    strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]">
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>
);

const IconLayers = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4}
    strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

const IconRocket = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4}
    strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
);

const IconArrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}
    strokeLinecap="round" strokeLinejoin="round" className="h-[15px] w-[15px]">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

/* ─── Card data ─────────────────────────────────────────── */
const services = [
  {
    id: 'strategy',
    icon: <IconCompass />,
    title: 'Strategy Systems',
    description:
      'Positioning, information architecture, and stakeholder alignment for complex digital products.',
    illustration: '/illus-strategy.png',
    illustrationAlt: 'Glass compass on a blueprint platform with floating orbit spheres',
  },
  {
    id: 'design',
    icon: <IconLayers />,
    title: 'Product Design',
    description:
      'Premium interfaces, motion systems, design systems, and conversion-focused user journeys.',
    illustration: '/illus-product.png',
    illustrationAlt: 'Glass browser window and floating mobile phone with UI panels',
  },
  {
    id: 'launch',
    icon: <IconRocket />,
    title: 'Build & Launch',
    description:
      'Fast front-end execution, content integration, QA, accessibility, and production readiness.',
    illustration: '/illus-launch.png',
    illustrationAlt: 'Glass rocket launching with analytics chart and deployment platform',
  },
];

/* ─── Floating particles (CSS-driven) ──────────────────── */
function BackgroundParticles() {
  return (
    <div aria-hidden className="svc-particles pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: 22 }).map((_, i) => (
        <span
          key={i}
          className="svc-particle"
          style={{ '--pi': i } as React.CSSProperties}
        />
      ))}
    </div>
  );
}

/* ─── Individual card ───────────────────────────────────── */
function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className="svc-card group relative flex flex-col overflow-hidden"
      initial={reduceMotion ? false : { opacity: 0, y: 48 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.75, ease: easeOut, delay: index * 0.12 }}
      whileHover="hovered"
    >
      {/* ── Content (left zone) ── */}
      <div className="relative z-30 flex h-full flex-col p-8 lg:p-10">
        {/* Icon badge */}
        <motion.div
          className="svc-icon-badge mb-auto flex h-[38px] w-[38px] items-center justify-center rounded-[9px]"
          variants={{ hovered: { rotate: 10, scale: 1.08 } }}
          transition={{ duration: 0.4, ease: easeOut }}
        >
          {service.icon}
        </motion.div>

        {/* Text — pinned to bottom left, illustration-safe zone */}
        <div className="mt-auto w-[43%]">
          <h3 className="svc-card-title mb-3 font-headline-lg text-[clamp(17px,1.45vw,20px)] font-semibold leading-[1.2] tracking-[-0.025em]">
            {service.title}
          </h3>
          <p className="svc-card-copy font-body-md text-[12.5px] leading-[1.65]">
            {service.description}
          </p>
        </div>
      </div>

      {/* ── Illustration (lower-right zone only, never overlaps text) ── */}
      <div className="svc-illus pointer-events-none absolute bottom-0 right-0 z-20 h-[85%] w-[65%]">
        <motion.img
          src={service.illustration}
          alt={service.illustrationAlt}
          className="absolute bottom-0 right-0 h-full w-full object-contain"
          style={{ objectPosition: 'right bottom', mixBlendMode: 'multiply', opacity: 0.9 }}
          variants={{ hovered: { y: -8 } }}
          transition={{ duration: 0.4, ease: easeOut }}
          loading="lazy"
          decoding="async"
        />
      </div>
    </motion.article>
  );
}

/* ─── Main Capabilities section ─────────────────────────── */
export function Capabilities({ tone = 'dark' }: { tone?: 'light' | 'dark' }) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="capabilities"
      data-surface-tone="dark"
      className="svc-section relative isolate overflow-hidden"
    >
      {/* ── Inner container — wide ── */}
      <div className="svc-inner relative z-10 mx-auto px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-40 xl:px-16">

        {/* ── Header row ── */}
        <div className="mb-14 flex items-start justify-between gap-10 md:mb-16 lg:mb-20">

          {/* Left block */}
          <motion.div
            className="min-w-0 flex-1"
            initial={reduceMotion ? false : { opacity: 0, y: 32 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.72, ease: easeOut }}
          >
            <span className="svc-eyebrow mb-5 block font-label-mono text-[11px] uppercase tracking-[0.28em]">
              Our Services
            </span>

            <h2 className="svc-headline mb-5 font-headline-lg text-[clamp(38px,4.2vw,64px)] font-semibold leading-[1.07] tracking-[-0.03em]">
              Digital systems,{' '}
              <br className="hidden sm:block" />
              delivered{' '}
              <span className="svc-gradient-text">with taste.</span>
            </h2>

            <p className="svc-copy max-w-[480px] font-body-md text-[15px] leading-[1.74] surface-copy mb-12 font-body-lg text-body-lg">
              We don't provide generic packages. We build the exact design, content,
              and launch system your business needs to look and perform at a premium level.
            </p>
          </motion.div>

          {/* Right — CTA */}
          <motion.div
            className="hidden shrink-0 items-center gap-4 self-start pt-2 md:flex"
            initial={reduceMotion ? false : { opacity: 0, x: 24 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.72, ease: easeOut, delay: 0.18 }}
          >
            <span className="svc-explore-label font-label-mono text-[11px] uppercase tracking-[0.22em]">
              Explore our process
            </span>
            <AppLink
              href="/services"
              id="services-explore-process-btn"
              aria-label="Explore our process"
              className="svc-explore-btn flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
            >
              <IconArrow />
            </AppLink>
          </motion.div>
        </div>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 gap-[26px] sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* ── Footer link ── */}
        <motion.div
          className="mt-12 flex items-center gap-5"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: easeOut, delay: 0.4 }}
        >
          <span className="svc-footer-rule block h-px w-10" />
          <AppLink
            href="/services"
            id="services-footer-explore-link"
            className="svc-footer-link flex items-center gap-3 font-label-mono text-[11px] uppercase tracking-[0.26em]"
          >
            Explore Services
            <span className="svc-footer-arrow transition-transform duration-300 group-hover:translate-x-1">→</span>
          </AppLink>
        </motion.div>

      </div>
    </section>
  );
}
