import { AppLink } from './AppLink';
import { BrandMark } from './BrandMark';
import { Reveal } from './Motion';
import { brand } from '../lib/site';
import { sectionToneClass } from '../lib/rhythm';

export function Contact({ tone = 'dark' }: { tone?: 'light' | 'dark' }) {
  const sectionClass = sectionToneClass[tone];

  return (
    <section data-surface-tone={tone} className={`${sectionClass} rhythm-divider px-margin-desktop py-section-gap text-center`} id="contact">
      <Reveal className="mx-auto max-w-5xl">
        <BrandMark variant="light" className="mx-auto mb-10" imageClassName="max-h-[12rem] md:max-h-[15rem]" />
        <h2 className="surface-title mb-8 font-display-hero text-6xl md:text-headline-lg">Ready to evolve?</h2>
        <p className="surface-copy mx-auto mb-14 max-w-2xl font-body-lg text-body-lg">
          The future is not a destination. It is a design choice. Let’s build the architecture of your next decade.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <AppLink
            href="/contact"
            className="button-primary group relative inline-flex items-center gap-6 overflow-hidden px-12 py-6 border-none transition-all duration-500 hover:pr-20"
          >
            <span className="relative z-10 font-editorial-caps text-lg tracking-[0.2em]">Initialize Project</span>
            <span className="material-symbols-outlined relative z-10 text-[1.05rem] text-[#2c41e6] transition-all duration-500 translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
              arrow_forward
            </span>
            <div className="absolute inset-0 -translate-x-6 bg-[linear-gradient(90deg,#3c2d8f_0%,#3c2d8f_35%,#ffffff_100%)] opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0" />
          </AppLink>
          <AppLink
            href={`mailto:${brand.email}`}
            className="button-secondary px-12 py-6 font-label-mono text-[11px] uppercase tracking-[0.24em]"
          >
          {brand.email}
          </AppLink>
        </div>
      </Reveal>
    </section>
  );
}
