import * as React from 'react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Field label rendered above the input. */
  label?: string;
  /** Helper text below the field. */
  helper?: string;
  /** Error message — overrides helper and turns the field red. */
  error?: string;
  /** Leading icon node. */
  startIcon?: React.ReactNode;
  /** @default 'md' */
  size?: 'sm' | 'md' | 'lg';
}

/** Labeled text input with focus ring and error state. */
export function Input(props: InputProps): JSX.Element;
