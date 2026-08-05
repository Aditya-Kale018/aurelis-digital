export type SurfaceTone = 'light' | 'dark';

export function getSurfaceTone(element: Element | null): SurfaceTone | null {
  let current: Element | null = element;

  while (current) {
    if (current instanceof HTMLElement) {
      const tone = current.dataset.surfaceTone;
      if (tone === 'light' || tone === 'dark') {
        return tone;
      }
    }
    current = current.parentElement;
  }

  return null;
}

