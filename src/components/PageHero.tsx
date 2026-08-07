import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { sectionPaddingX } from '../lib/rhythm';

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: ReactNode;
  aside?: ReactNode;
  dark?: boolean;
};

export function PageHero({ eyebrow, title, description, actions, aside, dark = false }: PageHeroProps) {
  const reduceMotion = useReducedMotion();
  const eyebrowClass = dark ? 'text-on-tertiary-container' : 'text-secondary';
  const sectionClass = dark ? 'section-dark' : 'section-light';

  return (
    <section
      data-surface-tone={dark ? 'dark' : 'light'}
      className={`${sectionClass} rhythm-divider ${sectionPaddingX} pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28`}
    >
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <motion.div
          className={`absolute -left-28 top-20 h-80 w-80 rounded-full blur-[48px] lg:blur-[110px] ${dark ? 'bg-secondary/12' : 'bg-secondary/10'}`}
          animate={reduceMotion ? undefined : { x: [0, 18, 0], y: [0, -10, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className={`absolute right-0 top-32 h-96 w-96 rounded-full blur-[52px] lg:blur-[120px] ${dark ? 'bg-white/8' : 'bg-tertiary-fixed/28'}`}
          animate={reduceMotion ? undefined : { x: [0, -18, 0], y: [0, 14, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
      <div className="relative z-10 grid grid-cols-12 items-end gap-gutter">
        <motion.div
          className="col-span-12 max-w-5xl lg:col-span-8"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className={`font-label-mono text-label-mono uppercase tracking-[0.35em] ${eyebrowClass}`}>
            {eyebrow}
          </span>
          <motion.h1
            className="surface-title mt-6 font-display-hero text-[clamp(2.25rem,10vw,3.5rem)] sm:text-[clamp(3.5rem,8vw,7.25rem)] leading-[1.02] sm:leading-[0.95] tracking-[-0.03em] sm:tracking-[-0.05em]"
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.04, ease: [0.22, 1, 0.36, 1] }}
          >
            {title}
          </motion.h1>
          <motion.p
            className="surface-copy mt-8 max-w-3xl font-body-lg text-body-lg"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            {description}
          </motion.p>
          {actions ? <motion.div className="mt-10 flex flex-wrap gap-4" initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.14 }}>{actions}</motion.div> : null}
        </motion.div>
        {aside ? (
          <motion.div
            className="col-span-12 lg:col-span-4"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {aside}
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}
