import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Color family. @default 'brand' */
  tone?: 'brand' | 'accent' | 'neutral' | 'success' | 'warning' | 'danger';
  /** Filled solid instead of subtle tint. @default false */
  solid?: boolean;
  /** Show a leading status dot. @default false */
  dot?: boolean;
  children?: React.ReactNode;
}

/** Pill-shaped status / category label. */
export function Badge(props: BadgeProps): JSX.Element;
