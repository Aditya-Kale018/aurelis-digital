import type { AnchorHTMLAttributes, MouseEvent } from 'react';
import { isExternalHref, isInternalHref, useNavigation } from '../lib/navigation';

type AppLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export function AppLink({ href, onClick, target, rel, children, ...rest }: AppLinkProps) {
  const { navigate } = useNavigation();
  const external = isExternalHref(href);
  const internal = isInternalHref(href);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) return;
    if (!internal || external) return;
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.altKey ||
      event.ctrlKey ||
      event.shiftKey ||
      target === '_blank'
    ) {
      return;
    }

    event.preventDefault();
    navigate(href);
  };

  return (
    <a
      {...rest}
      href={href}
      onClick={handleClick}
      target={target}
      rel={rel ?? (external ? 'noreferrer noopener' : undefined)}
    >
      {children}
    </a>
  );
}
