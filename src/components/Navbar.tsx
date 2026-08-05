import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { AppLink } from './AppLink';
import { BrandMark } from './BrandMark';
import { navigationItems } from '../lib/site';
import { useNavigation } from '../lib/navigation';
import { getSurfaceTone, type SurfaceTone } from '../lib/surface';

export function Navbar() {
  const { pathname } = useNavigation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [surfaceTone, setSurfaceTone] = useState<SurfaceTone>('light');
  const navRef = useRef<HTMLElement>(null);

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`));

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const original = document.body.style.overflow;
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = original;
    };
  }, [mobileOpen]);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  useEffect(() => {
    const updateTone = () => {
      const navRect = navRef.current?.getBoundingClientRect();
      const probeY = Math.min(window.innerHeight - 1, (navRect?.bottom ?? 72) + 12);
      const probeX = Math.min(window.innerWidth - 1, window.innerWidth / 2);
      const element = document.elementFromPoint(probeX, probeY);
      const tone = getSurfaceTone(element);
      setSurfaceTone(tone ?? 'light');
    };

    updateTone();
    window.addEventListener('scroll', updateTone, { passive: true });
    window.addEventListener('resize', updateTone);
    return () => {
      window.removeEventListener('scroll', updateTone);
      window.removeEventListener('resize', updateTone);
    };
  }, [pathname]);

  const isDarkSurface = surfaceTone === 'dark';
  const navbarClass = scrolled
    ? isDarkSurface
      ? 'border-white/10 bg-primary-container/75 text-on-primary shadow-[0_24px_80px_-28px_rgba(3,8,20,0.28)] backdrop-blur-[24px]'
      : 'border-white/24 bg-white/72 text-primary shadow-[0_24px_80px_-28px_rgba(13,27,53,0.18)] backdrop-blur-[24px]'
    : isDarkSurface
      ? 'border-white/12 bg-transparent text-on-primary shadow-none backdrop-blur-0'
      : 'border-transparent bg-transparent text-primary shadow-none backdrop-blur-0';

  const brandVariant = isDarkSurface ? 'light' : 'dark';
  const navbarLogoClass = 'h-[3.25rem] w-auto md:h-[3.5rem]';
  const panelClass = isDarkSurface
    ? 'border-white/10 bg-primary-container/94 text-on-primary shadow-[0_40px_100px_-24px_rgba(3,8,20,0.32)] backdrop-blur-[24px]'
    : 'border-white/20 bg-white/92 text-primary shadow-[0_40px_100px_-24px_rgba(13,27,53,0.24)] backdrop-blur-[24px]';
  const activeClass = isDarkSurface ? 'bg-white text-primary shadow-[0_14px_34px_-18px_rgba(255,255,255,0.3)]' : 'bg-primary text-on-primary shadow-[0_14px_34px_-18px_rgba(13,27,53,0.5)]';
  const inactiveClass = isDarkSurface ? 'text-on-primary/80 hover:bg-white/10 hover:text-white' : 'text-on-surface-variant hover:bg-white/50 hover:text-primary';
  const ctaClass = isDarkSurface
    ? 'border border-white/20 bg-white/10 text-white hover:border-white/30 hover:bg-white/18'
    : 'border border-outline-variant/70 bg-white/50 text-primary hover:border-primary hover:bg-white/80';

  return (
    <nav
      ref={navRef}
      className={`fixed top-4 left-1/2 z-50 w-[calc(100%-20px)] max-w-[1440px] -translate-x-1/2 rounded-full border px-5 py-4 transition-[background-color,border-color,color,box-shadow,transform,backdrop-filter] duration-500 md:px-8 ${navbarClass}`}
      style={{ transformOrigin: 'center top', willChange: 'background-color, border-color, color, box-shadow, backdrop-filter' }}
    >
      <div className="flex items-center justify-between gap-4">
        <AppLink href="/" className="shrink-0">
          <BrandMark
            variant={brandVariant}
            className="max-h-14 md:max-h-16"
            imageClassName={navbarLogoClass}
          />
        </AppLink>

        <div className="hidden items-center gap-2 lg:flex">
          {navigationItems.map((item) => {
            const active = isActive(item.href);
            return (
              <AppLink
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={`rounded-full px-4 py-2 font-label-mono text-[11px] uppercase tracking-[0.24em] transition-all duration-300 hover:-translate-y-0.5 ${active ? activeClass : inactiveClass}`}
              >
                {item.label}
              </AppLink>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <AppLink
            href="/contact"
            className={`rounded-full px-5 py-2.5 font-label-mono text-[11px] uppercase tracking-[0.24em] transition-all hover:-translate-y-0.5 ${ctaClass}`}
          >
            Book Discovery Call
          </AppLink>
        </div>

        <button
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation menu"
          className={`inline-flex h-12 w-12 items-center justify-center rounded-full border transition-transform duration-300 hover:-translate-y-0.5 lg:hidden ${isDarkSurface ? 'border-white/20 bg-white/10 text-on-primary' : 'border-outline-variant/70 bg-white/70 text-primary'}`}
          onClick={() => setMobileOpen((value) => !value)}
          type="button"
        >
          <span className="material-symbols-outlined text-2xl">
            {mobileOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            className="fixed inset-0 z-[60] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="absolute inset-0 bg-primary/25 backdrop-blur-md" onClick={() => setMobileOpen(false)} />
            <motion.div
              data-surface-tone={surfaceTone}
              className={`absolute inset-3 rounded-[32px] border p-5 backdrop-blur-[24px] ${panelClass}`}
              initial={{ y: 18, opacity: 0, scale: 0.985 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 18, opacity: 0, scale: 0.985 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between">
                <BrandMark
                  variant={brandVariant}
                  className="max-h-12 md:max-h-14"
                  imageClassName={navbarLogoClass}
                />
                <button
                  aria-label="Close navigation"
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-full border ${isDarkSurface ? 'border-white/15 text-on-primary' : 'border-outline-variant/70 text-primary'}`}
                  onClick={() => setMobileOpen(false)}
                  type="button"
                >
                  <span className="material-symbols-outlined text-2xl">close</span>
                </button>
              </div>
              <div className="mt-8 grid gap-3">
                {navigationItems.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <AppLink
                      key={item.href}
                      href={item.href}
                      aria-current={active ? 'page' : undefined}
                      className={`flex items-center justify-between rounded-[22px] border px-5 py-4 font-label-mono text-[11px] uppercase tracking-[0.24em] transition-all duration-300 ${
                        active
                          ? isDarkSurface
                            ? 'border-white bg-white text-primary'
                            : 'border-primary bg-primary text-on-primary'
                          : isDarkSurface
                            ? 'border-white/10 text-on-primary/85 hover:border-white/20 hover:bg-white/10 hover:text-white'
                            : 'border-outline-variant/60 text-primary hover:border-primary hover:bg-primary/5'
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      <span>{item.label}</span>
                      <span className="material-symbols-outlined text-lg">arrow_forward</span>
                    </AppLink>
                  );
                })}
              </div>
              <div className="mt-8 grid gap-3">
                <AppLink
                  href="/contact"
                  className={`flex min-h-14 items-center justify-center rounded-full px-6 py-4 font-label-mono text-[11px] uppercase tracking-[0.24em] ${isDarkSurface ? 'bg-white text-primary' : 'bg-primary text-on-primary'}`}
                  onClick={() => setMobileOpen(false)}
                >
                  Book Discovery Call
                </AppLink>
                <AppLink
                  href={`mailto:hello@aurelis.digital`}
                  className={`flex min-h-14 items-center justify-center rounded-full border px-6 py-4 font-label-mono text-[11px] uppercase tracking-[0.24em] ${isDarkSurface ? 'border-white/15 bg-white/10 text-white' : 'border-outline-variant/70 bg-white text-primary'}`}
                  onClick={() => setMobileOpen(false)}
                >
                  hello@aurelis.digital
                </AppLink>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
        </AnimatePresence>
    </nav>
  );
}
