export const sectionToneClass = {
  light: 'section-light',
  dark: 'section-dark',
} as const;

export const panelToneClass = {
  light: 'panel-light',
  dark: 'panel-dark',
} as const;

// Mobile-first ramps that land on the original fixed desktop value at `lg:`
// (1024px), so desktop rendering is unchanged while smaller viewports get
// proportionally smaller spacing.
export const sectionPaddingX = 'px-6 sm:px-10 md:px-14 lg:px-margin-desktop';
export const sectionPaddingY = 'py-16 sm:py-20 md:py-28 lg:py-section-gap';
export const sectionPadding = `${sectionPaddingX} ${sectionPaddingY}`;

