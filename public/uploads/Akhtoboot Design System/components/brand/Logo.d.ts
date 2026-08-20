import * as React from 'react';

export interface OctopusMarkProps extends React.SVGAttributes<SVGSVGElement> {
  /** Pixel size of the square mark. @default 40 */
  size?: number;
  /** Fill color (any CSS color). Defaults to currentColor / brand purple. */
  color?: string;
}

/** The Akhtoboot octopus mark on its own. */
export function OctopusMark(props: OctopusMarkProps): JSX.Element;

export interface LogoProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** @default 'full' */
  variant?: 'full' | 'mark' | 'wordmark';
  /** Wordmark script. @default 'ar' */
  lang?: 'ar' | 'en';
  /** Color treatment. @default 'brand' */
  tone?: 'brand' | 'ink' | 'inverse';
  /** Mark size in px; wordmark scales from it. @default 40 */
  size?: number;
}

/**
 * The Akhtoboot logo lockup — octopus mark + Thmanyah wordmark.
 * @startingPoint section="Brand" subtitle="Logo lockups & octopus mark" viewport="700x200"
 */
export function Logo(props: LogoProps): JSX.Element;
