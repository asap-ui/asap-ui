import React from 'react';

export type LinkProps = {
  type?: 'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger';
  children?: React.ReactNode;
};

export const defaultProps: LinkProps = {
  type: 'default',
};
