import { useEffect } from 'react';

function updateMetaTag(selector: string, value: string) {
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement('meta');
    const name = selector.match(/name="([^"]+)"/)?.[1] ?? selector.match(/property="([^"]+)"/)?.[1];
    if (selector.includes('name="') && name) {
      element.setAttribute('name', name);
    }
    if (selector.includes('property="') && name) {
      element.setAttribute('property', name);
    }
    document.head.appendChild(element);
  }
  element.setAttribute('content', value);
}

export function useSeo(title: string, description: string) {
  useEffect(() => {
    document.title = title;
    updateMetaTag('meta[name="description"]', description);
    updateMetaTag('meta[property="og:title"]', title);
    updateMetaTag('meta[property="og:description"]', description);
    updateMetaTag('meta[name="twitter:title"]', title);
    updateMetaTag('meta[name="twitter:description"]', description);
  }, [description, title]);
}

