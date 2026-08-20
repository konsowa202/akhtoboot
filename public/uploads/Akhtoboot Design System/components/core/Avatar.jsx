import React from 'react';

const sizeMap = { sm: 32, md: 44, lg: 64 };

/** User/entity avatar — image, initials, or octopus fallback. */
export function Avatar({ src, name, size = 'md', tone = 'brand', style, ...rest }) {
  const px = sizeMap[size] || size;
  const initials = name
    ? name.trim().split(/\s+/).slice(0, 2).map((w) => w[0]).join('').toUpperCase()
    : null;
  const toneBg = { brand: 'var(--purple-100)', accent: 'var(--teal-100)', neutral: 'var(--ink-100)' }[tone] || 'var(--purple-100)';
  const toneFg = { brand: 'var(--purple-700)', accent: 'var(--teal-700)', neutral: 'var(--ink-600)' }[tone] || 'var(--purple-700)';

  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: px, height: px, borderRadius: '50%', overflow: 'hidden', flex: 'none',
        background: toneBg, color: toneFg, fontFamily: 'var(--font-body)',
        fontWeight: 'var(--fw-bold)', fontSize: px * 0.4, ...style,
      }}
      {...rest}
    >
      {src ? (
        <img src={src} alt={name || ''} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      ) : initials ? (
        initials
      ) : (
        <svg viewBox="0 0 100 100" width={px * 0.62} height={px * 0.62} aria-hidden="true">
          <path fill="currentColor" d="M18,58 C18,31 32,14 50,14 C68,14 82,31 82,58 A8 13 0 0 1 66 58 A8 13 0 0 1 50 58 A8 13 0 0 1 34 58 A8 13 0 0 1 18 58 Z" />
        </svg>
      )}
    </span>
  );
}
