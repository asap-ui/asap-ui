import React from 'react';

export type ImageProps = {
  src?: string;
  fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
  alt?: string;
  title?: string;
  width?: string | number;
  height?: string | number;
  radius?: string | number;
  loading?: string;
  error?: string;
  lazy?: boolean;
  ripple?: boolean;
  block?: boolean;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent) => void;
  onLoad?: (event: HTMLImageElement) => void;
  onError?: (event: React.MouseEvent) => void;
};

export const defaultProps: ImageProps = {
  fit: 'fill',
  lazy: false,
  ripple: false,
  block: true,
};
