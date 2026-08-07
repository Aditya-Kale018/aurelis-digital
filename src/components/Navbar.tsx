import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { AppLink } from './AppLink';
import { BrandMark } from './BrandMark';
import { brand, navigationItems } from '../lib/site';
import { useNavigation } from '../lib/navigation';
import { getSurfaceTone, type SurfaceTone } from '../lib/surface';

const EASE = [0.22, 1, 0.36, 1] as const;

export function Navbar() {
  const { pathname } = useNavigation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [surfaceTone, setSurfaceTone] = useState<SurfaceTone>('light');
  const navRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

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

  // Escape to close, and keep Tab focus cycling between the toggle and the panel.
  useEffect(() => {
    if (!mobileOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setMobileOpen(false);
        return;
      }

      if (event.key !== 'Tab') return;

      const panel = panelRef.current;
      const toggle = toggleRef.current;
      if (!panel || !toggle) return;

      const focusable = [toggle, ...Array.from(panel.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'))];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const current = document.activeElement;

      if (event.shiftKey && (current === first || !focusable.includes(current as HTMLElement))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && current === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  // Move focus into the dialog on open, and back to the toggle on close.
  const wasOpenRef = useRef(false);
  useEffect(() => {
    if (mobileOpen) {
      panelRef.current?.focus();
    } else if (wasOpenRef.current) {
      toggleRef.current?.focus();
    }
    wasOpenRef.current = mobileOpen;
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
  // While the menu is open the bar always sits on the navy curtain, so it locks
  // to the light treatment for predictable contrast.
  const barIsDark = mobileOpen ? false : isDarkSurface;

  // Mobile and desktop styles are scoped to disjoint media queries (`max-lg:` vs
  // `lg:`) so neither can bleed into the other's range through the cascade.

  // Mobile: the bar is always near-solid so the logo, menu button, and text stay
  // fully legible over hero video, imagery, and dark sections alike.
  const navbarMobileClass = barIsDark
    ? 'max-lg:border-white/12 max-lg:bg-[#0d1b35]/96 max-lg:text-on-primary max-lg:shadow-[0_16px_44px_-20px_rgba(3,8,20,0.65)] max-lg:backdrop-blur-[20px]'
    : 'max-lg:border-[#0d1b35]/10 max-lg:bg-white/96 max-lg:text-primary max-lg:shadow-[0_16px_44px_-20px_rgba(13,27,53,0.3)] max-lg:backdrop-blur-[20px]';

  // Desktop (lg+): unchanged — transparent until scrolled, then the original glass bar.
  const navbarDesktopClass = scrolled
    ? isDarkSurface
      ? 'lg:border-white/10 lg:bg-primary-container/75 lg:text-on-primary lg:shadow-[0_24px_80px_-28px_rgba(3,8,20,0.28)] lg:backdrop-blur-[24px]'
      : 'lg:border-white/24 lg:bg-white/72 lg:text-primary lg:shadow-[0_24px_80px_-28px_rgba(13,27,53,0.18)] lg:backdrop-blur-[24px]'
    : isDarkSurface
      ? 'lg:border-white/12 lg:bg-transparent lg:text-on-primary lg:shadow-none lg:backdrop-blur-0'
      : 'lg:border-transparent lg:bg-transparent lg:text-primary lg:shadow-none lg:backdrop-blur-0';

  const navbarClass = `${navbarMobileClass} ${navbarDesktopClass}`;

  const brandVariant = isDarkSurface ? 'light' : 'dark';
  const mobileBrandVariant = barIsDark ? 'light' : 'dark';
  const navbarLogoClass = 'max-h-[3.25rem] w-auto md:max-h-[3.5rem]';
  const activeClass = isDarkSurface ? 'bg-white text-primary shadow-[0_14px_34px_-18px_rgba(255,255,255,0.3)]' : 'bg-primary text-on-primary shadow-[0_14px_34px_-18px_rgba(13,27,53,0.5)]';
  const inactiveClass = isDarkSurface ? 'text-on-primary/80 hover:bg-white/10 hover:text-white' : 'text-on-surface-variant hover:bg-white/50 hover:text-primary';
  const ctaClass = isDarkSurface
    ? 'border border-white/20 bg-white/10 text-white hover:border-white/30 hover:bg-white/18'
    : 'border border-outline-variant/70 bg-white/50 text-primary hover:border-primary hover:bg-white/80';

  const barLineClass = barIsDark ? 'bg-on-primary' : 'bg-primary';

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-4 left-1/2 z-50 w-[calc(100%-20px)] max-w-[1440px] -translate-x-1/2 rounded-full border px-5 py-4 transition-[background-color,border-color,color,box-shadow,transform,backdrop-filter] duration-500 md:px-8 ${navbarClass}`}
        style={{ transformOrigin: 'center top', willChange: 'background-color, border-color, color, box-shadow, backdrop-filter' }}
      >
        <div className="flex items-center justify-between gap-4">
          {/* Logo swaps to the light mark only on mobile while the curtain is open. */}
          <AppLink href="/" className="shrink-0">
            <span className="lg:hidden">
              <BrandMark
                variant={mobileBrandVariant}
                className="max-h-14 md:max-h-16"
                imageClassName={navbarLogoClass}
              />
            </span>
            <span className="hidden lg:block">
              <BrandMark
                variant={brandVariant}
                className="max-h-14 md:max-h-16"
                imageClassName={navbarLogoClass}
              />
            </span>
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

          {/* Mobile toggle — two rules that morph into a cross in place. */}
          <motion.button
            ref={toggleRef}
            aria-controls="mobile-navigation"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            whileTap={reduceMotion ? undefined : { scale: 0.92 }}
            className={`relative inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 lg:hidden ${
              barIsDark ? 'border-white/25 bg-white/14' : 'border-[#0d1b35]/18 bg-[#0d1b35]/[0.06]'
            }`}
            onClick={() => setMobileOpen((value) => !value)}
            type="button"
          >
            <span className="relative flex h-[14px] w-[22px] flex-col justify-between">
              <motion.span
                className={`block h-[2px] w-full rounded-full ${barLineClass}`}
                animate={reduceMotion ? undefined : { rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 6 : 0 }}
                transition={{ duration: 0.28, ease: EASE }}
              />
              <motion.span
                className={`block h-[2px] w-full rounded-full ${barLineClass}`}
                animate={reduceMotion ? undefined : { opacity: mobileOpen ? 0 : 1 }}
                transition={{ duration: 0.18, ease: EASE }}
              />
              <motion.span
                className={`block h-[2px] w-full rounded-full ${barLineClass}`}
                animate={reduceMotion ? undefined : { rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -6 : 0 }}
                transition={{ duration: 0.28, ease: EASE }}
              />
            </span>
          </motion.button>
        </div>
      </nav>

      {/* Full-height navy curtain. Sits below the bar (z-50) but above the page
          scrims (z-40) so the bar keeps its close control in place. */}
      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            key="mobile-navigation"
            id="mobile-navigation"
            ref={panelRef}
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            data-surface-tone="dark"
            className="fixed inset-0 z-[45] flex flex-col overflow-hidden bg-[#0d1b35] text-on-primary outline-none lg:hidden"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: reduceMotion ? 0.15 : 0.32, ease: EASE }}
          >
            <motion.div
              className="flex min-h-0 flex-1 flex-col px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-32 sm:px-10"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.05, delayChildren: reduceMotion ? 0 : 0.1 } },
              }}
              initial="hidden"
              animate="visible"
            >
              <motion.p
                className="mb-2 shrink-0 font-label-mono text-[10px] uppercase tracking-[0.3em] text-on-tertiary-container"
                variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: EASE } } }}
              >
                Menu
              </motion.p>

              <nav aria-label="Mobile" className="-mx-1 min-h-0 flex-1 overflow-y-auto overscroll-contain px-1">
                {navigationItems.map((item, index) => {
                  const active = isActive(item.href);
                  return (
                    <motion.div
                      key={item.href}
                      variants={{ hidden: { opacity: 0, x: -16 }, visible: { opacity: 1, x: 0, transition: { duration: 0.35, ease: EASE } } }}
                    >
                      <AppLink
                        href={item.href}
                        aria-current={active ? 'page' : undefined}
                        onClick={() => setMobileOpen(false)}
                        className={`group flex items-baseline gap-4 border-b border-white/12 py-4 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 ${
                          active ? 'text-on-primary' : 'text-on-primary/60'
                        }`}
                      >
                        <span className="font-label-mono text-[10px] tracking-[0.24em] text-on-tertiary-container/70">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="font-headline-lg text-[clamp(2rem,9vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.02em]">
                          {item.label}
                        </span>
                        {active ? <span aria-hidden="true" className="ml-auto h-1.5 w-1.5 shrink-0 self-center rounded-full bg-primary-fixed-dim" /> : null}
                      </AppLink>
                    </motion.div>
                  );
                })}
              </nav>

              <motion.div
                className="mt-6 grid shrink-0 gap-3"
                variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: EASE } } }}
              >
                <AppLink
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex min-h-14 items-center justify-center rounded-full bg-white px-6 py-4 font-label-mono text-[11px] uppercase tracking-[0.24em] text-primary transition-transform duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                >
                  Book Discovery Call
                </AppLink>
                <AppLink
                  href={`mailto:${brand.email}`}
                  onClick={() => setMobileOpen(false)}
                  className="flex min-h-14 items-center justify-center rounded-full border border-white/15 bg-white/8 px-6 py-4 text-center font-label-mono text-[11px] tracking-[0.12em] text-on-primary transition-colors duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                >
                  {brand.email}
                </AppLink>
              </motion.div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
