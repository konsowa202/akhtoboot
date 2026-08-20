import * as React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Resting elevation. @default 'sm' */
  elevation?: 'none' | 'sm' | 'md' | 'lg';
  /** Lift + deepen shadow on hover. @default false */
  interactive?: boolean;
  /** Add a 3px brand top border. @default false */
  accent?: boolean;
  /** CSS padding value. @default 'var(--space-5)' */
  padding?: string;
  children?: React.ReactNode;
}

/** Rounded surface container. */
export function Card(props: CardProps): JSX.Element;
