import type { HTMLAttributes, ReactNode } from 'react';

export type TextTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

export interface TextProps extends HTMLAttributes<HTMLElement> {
  tag?: TextTag;
  className?: string;
  children: ReactNode;
}
