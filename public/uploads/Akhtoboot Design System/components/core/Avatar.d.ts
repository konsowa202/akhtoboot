import * as React from 'react';

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Image URL. Falls back to initials, then the octopus mark. */
  src?: string;
  /** Full name — used for initials and alt text. */
  name?: string;
  /** Preset size or a pixel number. @default 'md' */
  size?: 'sm' | 'md' | 'lg' | number;
  /** Fallback tint. @default 'brand' */
  tone?: 'brand' | 'accent' | 'neutral';
}

/** Circular avatar with image / initials / octopus fallback. */
export function Avatar(props: AvatarProps): JSX.Element;
