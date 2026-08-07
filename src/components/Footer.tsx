import { AppLink } from './AppLink';
import { BrandMark } from './BrandMark';
import { brand, legalItems, navigationItems, socialItems } from '../lib/site';
import { sectionPaddingX } from '../lib/rhythm';

export function Footer() {
  const year = new Date().getFullYear();
  const legalLinks = legalItems.slice(0, 3);

  return (
    <footer data-surface-tone="light" className={`section-light rhythm-divider border-t border-white/50 ${sectionPaddingX} py-10`}>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <AppLink href="/" className="inline-flex self-start py-10 mb-8 lg:mb-0 lg:py-8 lg:-translate-x-4">
            <BrandMark variant="dark" imageClassName="max-h-[4.5rem] md:max-h-[6rem]" />
          </AppLink>
          <br className="block lg:hidden" />
          <p className="surface-copy max-w-xl text-sm">
            Premium digital strategy, design, and launch support for ambitious businesses.
          </p>
        </div>

        <div className="flex flex-col gap-4 border-t border-black/5 pt-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {navigationItems.map((item) => (
              <AppLink key={item.href} href={item.href} className="surface-copy font-label-mono text-[10px] uppercase tracking-[0.26em] transition-colors hover:text-secondary">
                {item.label}
              </AppLink>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {socialItems.map((item) => (
              <AppLink key={item.href} href={item.href} className="surface-copy font-label-mono text-[10px] uppercase tracking-[0.26em] transition-colors hover:text-secondary">
                {item.label}
              </AppLink>
            ))}
            {legalLinks.map((item) => (
              <AppLink key={item.href} href={item.href} className="surface-copy font-label-mono text-[10px] uppercase tracking-[0.26em] transition-colors hover:text-secondary">
                {item.label}
              </AppLink>
            ))}
          </div>
        </div>

        <div className="surface-copy flex flex-col gap-2 border-t border-black/5 pt-4 text-[10px] uppercase tracking-[0.26em] md:flex-row md:items-center md:justify-between">
          <p>© {year} {brand.name}</p>
          <p>Digital experiences for ambitious teams.</p>
        </div>
      </div>
    </footer>
  );
}
