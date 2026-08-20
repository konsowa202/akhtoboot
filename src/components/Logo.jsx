import React from 'react';

export function OctopusMark({ size = 40, color, style, ...rest }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} role="img" aria-label="Akhtoboot" style={{ color: color, display: 'block', flex: 'none', ...style }} {...rest}>
      <path fill="currentColor" d="M18,58 C18,31 32,14 50,14 C68,14 82,31 82,58 A8 13 0 0 1 66 58 A8 13 0 0 1 50 58 A8 13 0 0 1 34 58 A8 13 0 0 1 18 58 Z" />
    </svg>
  );
}

export default function Logo({ variant = 'full', lang = 'ar', tone = 'brand', size = 40, style, ...rest }) {
  const palette = {
    brand: { mark: 'var(--purple-500)', text: 'var(--ink-900)' },
    ink: { mark: 'var(--ink-900)', text: 'var(--ink-900)' },
    inverse: { mark: '#ffffff', text: '#ffffff' }
  }[tone] || { mark: 'var(--purple-500)', text: 'var(--ink-900)' };

  const word = lang === 'en' ? 'Akhtoboot' : 'أخطبوط';

  if (variant === 'mark') {
    return <OctopusMark size={size} color={palette.mark} style={style} {...rest} />;
  }

  const wordmark = (
    <span style={{
      fontFamily: lang === 'en' ? 'var(--font-sans)' : 'var(--font-display)',
      fontWeight: 900,
      fontSize: lang === 'en' ? size * 0.78 : size * 0.86,
      lineHeight: 1,
      letterSpacing: '-0.01em',
      color: palette.text,
      direction: lang === 'en' ? 'ltr' : 'rtl'
    }}>
      {word}
    </span>
  );

  if (variant === 'wordmark') {
    return <span style={{ display: 'inline-flex', alignItems: 'center', ...style }} {...rest}>{wordmark}</span>;
  }

  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: size * 0.28, ...style }} {...rest}>
      <OctopusMark size={size} color={palette.mark} />
      {wordmark}
    </span>
  );
}
