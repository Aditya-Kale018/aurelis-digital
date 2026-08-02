import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

type NavigationContextValue = {
  pathname: string;
  navigate: (href: string) => void;
};

const NavigationContext = createContext<NavigationContextValue | null>(null);

function normalizePath(href: string) {
  if (!href) return '/';
  try {
    const url = new URL(href, window.location.origin);
    return `${url.pathname.replace(/\/+$/, '') || '/'}${url.search}${url.hash}`;
  } catch {
    return href;
  }
}

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [pathname, setPathname] = useState(() => window.location.pathname);

  useEffect(() => {
    const onPopState = () => setPathname(window.location.pathname);
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = (href: string) => {
    const next = normalizePath(href);
    if (!next.startsWith('/')) {
      window.location.href = next;
      return;
    }

    const current = `${window.location.pathname}${window.location.search}${window.location.hash}`;
    if (next === current) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    window.history.pushState({}, '', next);
    setPathname(window.location.pathname);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const value = useMemo(() => ({ pathname, navigate }), [pathname]);

  return <NavigationContext.Provider value={value}>{children}</NavigationContext.Provider>;
}

export function useNavigation() {
  const value = useContext(NavigationContext);
  if (!value) {
    throw new Error('useNavigation must be used inside NavigationProvider');
  }
  return value;
}

export function isExternalHref(href: string) {
  return /^(https?:|mailto:|tel:)/.test(href);
}

export function isInternalHref(href: string) {
  return href.startsWith('/') && !href.startsWith('//');
}
