import React from 'react';

export type LinkProps = {
  type?: 'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger';
  underline?: 'always' | 'hover' | 'none';
  disabled?: boolean;
  href?: string;
  target?: string;
  to?: string;
  color?: string;
  size?: string | number;
  onClick?: (event: React.MouseEvent) => void;
  children?: React.ReactNode;
};

export const defaultProps: LinkProps = {
  type: 'default',
  underline: 'always',
  disabled: false,
};
