import { AppLink } from './AppLink';
import { LiftOnHover, Reveal } from './Motion';
import { ShaderBackground } from './ShaderBackground';
import { panelToneClass, sectionToneClass } from '../lib/rhythm';

export function AISection({ tone = 'dark' }: { tone?: 'light' | 'dark' }) {
  const sectionClass = sectionToneClass[tone];
  const cardClass = panelToneClass[tone === 'light' ? 'dark' : 'light'];
  const accentText = tone === 'light' ? 'text-secondary' : 'text-on-tertiary-container';

  return (
    <section data-surface-tone={tone} className={`${sectionClass} rhythm-divider px-margin-desktop py-section-gap`} id="ai">
      <div className="absolute inset-0 opacity-20">
        <div className="block h-full w-full">
          <ShaderBackground />
        </div>
      </div>
      <div className="relative z-10 grid grid-cols-12 gap-gutter">
        <Reveal className="col-span-12 lg:col-span-5">
          <span className={`mb-6 block font-label-mono text-label-mono uppercase tracking-[0.3em] ${accentText}`}>
            Intelligence Integration
          </span>
          <h2 className="surface-title mb-12 font-headline-lg text-headline-lg">Beyond human speed.</h2>
          <p className="surface-copy mb-12 font-body-lg text-body-lg">
            We design AI systems that help teams brief, generate, review, and ship faster without losing editorial control or brand consistency.
          </p>
          <div className="space-y-6">
            <LiftOnHover className="rounded-2xl">
              <div className={`${cardClass} flex items-center gap-6 p-6`}>
                <div className={`flex h-10 w-10 items-center justify-center rounded-full ${tone === 'light' ? 'bg-primary' : 'bg-secondary'}`}>
                  <span className="material-symbols-outlined text-sm text-white">smart_toy</span>
                </div>
                <div>
                  <p className="surface-title font-label-mono text-sm uppercase">Agent Aurelis-01</p>
                  <p className="surface-copy text-xs">Autonomous Content Orchestration</p>
                </div>
                <div className="ml-auto h-2 w-2 animate-pulse rounded-full bg-emerald-400"></div>
              </div>
            </LiftOnHover>
            <LiftOnHover className="rounded-2xl opacity-70">
              <div className={`${cardClass} flex items-center gap-6 p-6`}>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/12">
                  <span className="material-symbols-outlined text-sm text-primary">psychology</span>
                </div>
                <div>
                  <p className="surface-title font-label-mono text-sm uppercase">Predictive Engine</p>
                  <p className="surface-copy text-xs">User Behavior Anticipation</p>
                </div>
              </div>
            </LiftOnHover>
          </div>
        </Reveal>
        <Reveal className="relative col-span-12 flex min-h-[500px] items-center justify-center lg:col-span-7">
          <div className="relative h-full w-full">
            <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-on-primary-container/10 animate-[spin_60s_linear_infinite]" />
            <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-on-primary-container/20 animate-[spin_40s_linear_infinite_reverse]" />
            <div className={`${cardClass} absolute left-1/2 top-1/2 flex h-64 w-64 -translate-x-1/2 -translate-y-1/2 items-center justify-center shadow-2xl`}>
              <span className={`material-symbols-outlined text-7xl ${tone === 'light' ? 'text-secondary' : 'text-on-tertiary-container'} animate-pulse`}>hub</span>
            </div>
          </div>
        </Reveal>
      </div>
      <div className="mt-16">
        <AppLink href="/ai-solutions" className="surface-copy font-label-mono text-[11px] uppercase tracking-[0.24em] transition-colors hover:text-primary">
          Explore AI solutions
        </AppLink>
      </div>
    </section>
  );
}
