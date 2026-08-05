import { AppLink } from './AppLink';
import { LiftOnHover, Reveal } from './Motion';
import { caseStudies } from '../lib/site';
import { sectionToneClass } from '../lib/rhythm';

export function Work({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  const sectionClass = sectionToneClass[tone];
  const accentText = tone === 'light' ? 'text-secondary' : 'text-on-tertiary-container';

  return (
    <section data-surface-tone={tone} className={`${sectionClass} px-margin-desktop py-section-gap`} id="work">
      <Reveal>
        <div className="mb-24 flex items-end justify-between gap-6">
          <div>
            <span className={`mb-4 block font-label-mono text-label-mono uppercase ${accentText}`}>Portfolio 2024</span>
            <h2 className="surface-title font-headline-lg text-headline-lg">Selected Work</h2>
          </div>
          <AppLink href="/work" className="surface-copy font-label-mono text-[11px] uppercase tracking-[0.24em] transition-colors hover:text-primary">
            Explore the full archive
          </AppLink>
        </div>
      </Reveal>

      <div className="space-y-24">
        {caseStudies.map((item, index) => (
          <div key={item.slug}>
            <Reveal delay={index * 0.05}>
              <LiftOnHover>
                <AppLink className="block" href={`/work/${item.slug}`}>
                  <div className="group grid cursor-pointer grid-cols-12 gap-gutter">
                  <div
                      className={`relative col-span-12 aspect-[16/9] overflow-hidden rounded-[32px] border ${tone === 'light' ? 'border-outline-variant/40 bg-white/40' : 'border-white/12 bg-white/8'} lg:col-span-7 ${
                        index % 2 === 1 ? 'lg:order-2' : ''
                      }`}
                  >
                    <img
                      alt={item.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      loading="lazy"
                      src={item.image}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/35 via-primary/10 to-transparent" />
                    <div className={`absolute bottom-8 left-8 flex items-center gap-3 rounded-full border px-4 py-2 text-[12px] font-label-mono uppercase tracking-[0.24em] backdrop-blur ${tone === 'light' ? 'border-white/25 bg-white/75 text-primary' : 'border-white/12 bg-primary-container/75 text-on-primary'}`}>
                      <span className="h-2 w-2 rounded-full bg-secondary" />
                      {item.label}
                    </div>
                    <div className={`absolute right-6 top-6 rounded-full border px-4 py-2 text-[10px] uppercase tracking-[0.28em] backdrop-blur ${tone === 'light' ? 'border-white/20 bg-white/10 text-white/80' : 'border-outline-variant/30 bg-white/78 text-primary'}`}>
                      Case study
                    </div>
                  </div>
                  <div className={`col-span-12 flex flex-col justify-center lg:col-span-5 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <p className="surface-copy mb-4 font-label-mono text-label-mono text-on-primary/70">{String(index + 1).padStart(2, '0')}</p>
                    <h3 className="surface-title mb-6 font-headline-lg text-4xl text-on-primary">{item.title}</h3>
                    <p className="surface-copy mb-8 font-body-lg text-body-lg text-on-primary/70">{item.description}</p>
                    <div className="flex flex-wrap gap-3">
                      {item.stats.map((stat) => (
                        <span key={stat} className={`rounded-full border px-4 py-2 text-xs font-label-mono ${tone === 'light' ? 'border-outline-variant bg-white/70 text-primary' : 'border-white/12 bg-white/10 text-on-primary'}`}>
                          {stat}
                        </span>
                      ))}
                    </div>
                    <div className="mt-10">
                      <span className="font-label-mono text-[12px] uppercase tracking-[0.24em] text-on-primary/80 transition-colors hover:text-on-primary">
                        Read Case Study
                      </span>
                    </div>
                  </div>
                  </div>
                </AppLink>
              </LiftOnHover>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}
