type BrandMarkProps = {
  variant?: 'dark' | 'light';
  className?: string;
  imageClassName?: string;
  showWordmark?: boolean;
};

export function BrandMark({ variant = 'dark', className = '', imageClassName = '', showWordmark = true }: BrandMarkProps) {
  const src = variant === 'dark' ? '/AurelisDark.png' : '/AurelisWhite.png';

  return (
    <div className={`inline-flex items-center gap-4 ${className}`}>
      <img
        alt="Aurelis Digital"
        className={`block h-auto w-auto object-contain ${imageClassName}`}
        loading="eager"
        src={src}
      />
      {showWordmark ? <span className="sr-only">Aurelis Digital</span> : null}
    </div>
  );
}
