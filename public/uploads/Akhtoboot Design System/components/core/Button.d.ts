import * as React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default 'primary' */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  /** @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  /** Icon node placed before the label. */
  startIcon?: React.ReactNode;
  /** Icon node placed after the label. */
  endIcon?: React.ReactNode;
  children?: React.ReactNode;
}

/**
 * Akhtoboot action button.
 * @startingPoint section="Core" subtitle="Buttons — primary, secondary, outline, ghost" viewport="700x180"
 */
export function Button(props: ButtonProps): JSX.Element;
