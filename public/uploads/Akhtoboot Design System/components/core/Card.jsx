import React from 'react';

/** Surface container with optional elevation and accent. */
export function Card({
  elevation = 'sm', interactive = false, accent = false, padding = 'var(--space-5)',
  children, style, ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const shadows = {
    none: 'none', sm: 'var(--shadow-sm)', md: 'var(--shadow-md)', lg: 'var(--shadow-lg)',
  };
  return (
    <div
      onMouseEnter={() => interactive && setHover(true)}
      onMouseLeave={() => interactive && setHover(false)}
      style={{
        background: 'var(--surface-card)',
        border: '1px solid var(--border)',
        borderTop: accent ? '3px solid var(--brand)' : '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)',
        padding,
        boxShadow: hover ? shadows.lg : shadows[elevation],
        transform: hover ? 'translateY(-2px)' : 'none',
        transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
        cursor: interactive ? 'pointer' : 'default',
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
