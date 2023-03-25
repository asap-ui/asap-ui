import { CSSProperties } from 'react';

export type SpaceSize = number | string | number[] | string[];
export type SpaceAlign = 'start' | 'end' | 'center' | 'baseline';

export type SpaceProps = {
  fill?: boolean;
  wrap?: boolean;
  size?: SpaceSize;
  direction?: 'vertical' | 'horizontal';
  align?: SpaceAlign;
  style?: CSSProperties;
  onClick?: (event: React.MouseEvent) => void;
  children?: React.ReactNode;
};

export const defaultProps: SpaceProps = {
  wrap: false,
  fill: false,
  size: 8,
  direction: 'horizontal',
  align: 'center',
};
