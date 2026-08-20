import React from 'react';

const sizes = {
  sm: { padding: '0 14px', height: 36, fontSize: 'var(--text-sm)', radius: 'var(--radius-sm)', gap: 6 },
  md: { padding: '0 20px', height: 44, fontSize: 'var(--text-base)', radius: 'var(--radius-md)', gap: 8 },
  lg: { padding: '0 28px', height: 54, fontSize: 'var(--text-lg)', radius: 'var(--radius-md)', gap: 10 },
};

const variants = {
  primary: {
    background: 'var(--brand)', color: 'var(--brand-on)', border: '1px solid transparent',
    boxShadow: 'var(--shadow-brand)',
    '--hover-bg': 'var(--brand-hover)', '--active-bg': 'var(--brand-active)',
  },
  secondary: {
    background: 'var(--accent)', color: 'var(--accent-on)', border: '1px solid transparent',
    boxShadow: 'none',
    '--hover-bg': 'var(--accent-hover)', '--active-bg': 'var(--teal-700)',
  },
  outline: {
    background: 'transparent', color: 'var(--brand)', border: '1px solid var(--border-brand)',
    boxShadow: 'none',
    '--hover-bg': 'var(--brand-subtle)', '--active-bg': 'var(--purple-100)',
  },
  ghost: {
    background: 'transparent', color: 'var(--text-body)', border: '1px solid transparent',
    boxShadow: 'none',
    '--hover-bg': 'var(--ink-50)', '--active-bg': 'var(--ink-100)',
  },
};

/** Primary action button. */
export function Button({
  variant = 'primary', size = 'md', disabled = false, fullWidth = false,
  startIcon, endIcon, children, style, ...rest
}) {
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  const [state, setState] = React.useState('rest');

  const bg = disabled ? undefined
    : state === 'active' ? v['--active-bg']
    : state === 'hover' ? v['--hover-bg']
    : v.background;

  return (
    <button
      disabled={disabled}
      onMouseEnter={() => setState('hover')}
      onMouseLeave={() => setState('rest')}
      onMouseDown={() => setState('active')}
      onMouseUp={() => setState('hover')}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        gap: s.gap, height: s.height, padding: s.padding, width: fullWidth ? '100%' : undefined,
        fontFamily: 'var(--font-body)', fontWeight: 'var(--fw-medium)', fontSize: s.fontSize,
        lineHeight: 1, borderRadius: s.radius, cursor: disabled ? 'not-allowed' : 'pointer',
        border: v.border, background: bg || v.background, color: v.color,
        boxShadow: state === 'rest' && !disabled ? v.boxShadow : 'none',
        opacity: disabled ? 0.45 : 1,
        transform: state === 'active' && !disabled ? 'translateY(1px)' : 'none',
        transition: 'background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
        whiteSpace: 'nowrap', ...style,
      }}
      {...rest}
    >
      {startIcon && <span style={{ display: 'inline-flex' }}>{startIcon}</span>}
      {children}
      {endIcon && <span style={{ display: 'inline-flex' }}>{endIcon}</span>}
    </button>
  );
}
