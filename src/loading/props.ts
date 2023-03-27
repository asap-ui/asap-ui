import { ReactElement } from 'react';
export type LoadingType = 'circle' | 'wave' | 'cube' | 'rect' | 'disappear';

export type LoadingSize = 'normal' | 'mini' | 'small' | 'large';

export type LoadingProps = {
  type?: LoadingType;
  radius?: string | number;
  size?: LoadingSize;
  color?: string;
  description?: string | ReactElement;
  content?: string | ReactElement;
  loading?: boolean;
};

export const defaultProps: LoadingProps = {
  type: 'circle',
  size: 'normal',
  loading: true,
};
