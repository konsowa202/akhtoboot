import React from 'react';

const palettes = {
  brand:   { bg: 'var(--purple-50)',  fg: 'var(--purple-700)', bd: 'var(--purple-200)' },
  accent:  { bg: 'var(--teal-100)',   fg: 'var(--teal-700)',   bd: 'var(--teal-200)' },
  neutral: { bg: 'var(--ink-50)',     fg: 'var(--ink-600)',    bd: 'var(--ink-200)' },
  success: { bg: 'var(--success-subtle)', fg: 'var(--green-700)', bd: 'var(--green-500)' },
  warning: { bg: 'var(--warning-subtle)', fg: 'var(--amber-700)', bd: 'var(--amber-500)' },
  danger:  { bg: 'var(--danger-subtle)',  fg: 'var(--red-700)',   bd: 'var(--red-500)' },
};

/** Small status / category label. */
export function Badge({ tone = 'brand', solid = false, dot = false, children, style, ...rest }) {
  const p = palettes[tone] || palettes.brand;
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', fontWeight: 'var(--fw-bold)',
        letterSpacing: '0.01em', lineHeight: 1, padding: '5px 10px', borderRadius: 'var(--radius-pill)',
        background: solid ? p.fg : p.bg,
        color: solid ? '#fff' : p.fg,
        border: solid ? '1px solid transparent' : `1px solid ${p.bd}`,
        ...style,
      }}
      {...rest}
    >
      {dot && <span style={{ width: 6, height: 6, borderRadius: '50%', background: solid ? '#fff' : p.fg }} />}
      {children}
    </span>
  );
}
