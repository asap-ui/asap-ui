import React from 'react';

export type AvatarProps = {
  round?: boolean;
  size?: 'mini' | 'small' | 'normal' | 'large' | number | string;
  color?: string;
  src?: string;
  fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
  bordered?: boolean;
  borderColor?: string;
  loading?: string;
  error?: string;
  lazy?: boolean;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent) => void;
  onLoad?: (event: HTMLImageElement) => void;
  onError?: (event: React.MouseEvent) => void;
};

export const defaultProps: AvatarProps = {
  round: true,
  size: 'normal',
  fit: 'cover',
  lazy: false,
};
