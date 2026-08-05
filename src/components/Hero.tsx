import { useEffect, useState } from 'react';
import { AppLink } from './AppLink';

export function Hero() {
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setVideoReady(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section
      data-surface-tone="light"
      className="section-light relative flex min-h-screen items-center overflow-hidden px-margin-desktop pt-28"
    >
      <div aria-hidden="true" className="absolute inset-0 z-[-4] bg-[linear-gradient(180deg,#fcfbff_0%,#f5f0ff_48%,#ece4ff_100%)]" />

      <video
        aria-hidden="true"
        autoPlay
        className={`absolute left-0 right-0 top-0 z-[-3] w-full object-cover transition-opacity duration-[1800ms] ease-out ${videoReady ? 'opacity-100' : 'opacity-0'}`}
        loop
        muted
        playsInline
        preload="auto"
        src="/video.mp4"
        style={{
          top: 0,
          bottom: '1.5cm',
          objectPosition: '50% 56%',
          filter: 'saturate(0.9) contrast(0.94) brightness(1.06)',
          transform: 'scale(1.06)',
          transformOrigin: 'top center',
        }}
      />

      <div className="relative z-10 grid w-full grid-cols-12 items-center gap-gutter">
        <div className="relative col-span-12 lg:col-span-7">
          <div
            aria-hidden="true"
            className="absolute -left-10 top-1/2 h-[72vh] w-[78vw] -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.72),rgba(255,255,255,0.42)_28%,rgba(255,255,255,0.16)_56%,transparent_74%)] blur-[72px] opacity-85"
          />
          <div
            aria-hidden="true"
            className="absolute left-[-4%] top-1/2 h-[58vh] w-[56vw] -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.42),rgba(255,255,255,0.14)_42%,transparent_76%)] blur-[28px] opacity-70"
          />
          <div className="relative z-10">
            <h1 className="surface-title max-w-4xl font-display-hero text-[clamp(3.75rem,8vw,8rem)] leading-[0.94] tracking-[-0.05em]">
              We don't build websites. We design <span className="italic text-secondary">digital companies.</span>
            </h1>
            <p className="surface-copy mt-8 max-w-2xl font-body-lg text-body-lg">
              Aurelis Digital builds premium brand and product experiences for companies that want sharper positioning, stronger conversion, and a more modern perception.
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <AppLink href="/contact" className="button-primary px-8 py-4 font-label-mono text-[11px] uppercase tracking-[0.24em]">
                Book Discovery Call
              </AppLink>
            </div>
            <div className="mt-12 flex items-center gap-6">
              <div className="h-px w-24 bg-primary/20" />
              <p className="surface-copy font-label-mono text-label-mono uppercase tracking-[0.28em]">
                Architectural precision in digital form
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-12 mt-6 lg:col-span-5 lg:mt-0">
          <div className="pointer-events-none min-h-[420px] sm:min-h-[500px] lg:min-h-[620px]" />
        </div>
      </div>
    </section>
  );
}
