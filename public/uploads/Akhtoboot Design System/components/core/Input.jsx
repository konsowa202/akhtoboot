import React from 'react';

/** Text input with optional label, helper, and error states. */
export function Input({
  label, helper, error, startIcon, size = 'md', style, id, ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || React.useId();
  const heights = { sm: 38, md: 46, lg: 54 };
  const h = heights[size] || heights.md;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--font-body)' }}>
      {label && (
        <label htmlFor={inputId} style={{
          fontSize: 'var(--text-sm)', fontWeight: 'var(--fw-medium)', color: 'var(--text-strong)',
        }}>{label}</label>
      )}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8, height: h, padding: '0 14px',
        background: 'var(--surface-card)', borderRadius: 'var(--radius-md)',
        border: `1px solid ${error ? 'var(--danger)' : focus ? 'var(--brand)' : 'var(--border)'}`,
        boxShadow: focus ? 'var(--focus-ring)' : 'none',
        transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
      }}>
        {startIcon && <span style={{ display: 'inline-flex', color: 'var(--text-subtle)' }}>{startIcon}</span>}
        <input
          id={inputId}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            flex: 1, border: 'none', outline: 'none', background: 'transparent',
            fontFamily: 'inherit', fontSize: 'var(--text-base)', color: 'var(--text-strong)',
            minWidth: 0, ...style,
          }}
          {...rest}
        />
      </div>
      {(helper || error) && (
        <span style={{ fontSize: 'var(--text-xs)', color: error ? 'var(--danger)' : 'var(--text-muted)' }}>
          {error || helper}
        </span>
      )}
    </div>
  );
}
