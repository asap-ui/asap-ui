import React from 'react';

export type ButtonProps = {
  type?: 'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger';
  nativeType?: 'button' | 'reset' | 'submit';
  size?: 'normal' | 'mini' | 'small' | 'large';
  loading?: boolean;
  round?: boolean;
  block?: boolean;
  text?: boolean;
  outline?: boolean;
  disabled?: boolean;
  ripple?: boolean;
  color?: string;
  textColor?: string;
  autoLoading?: boolean;
  onClick?: (event: React.MouseEvent) => void;
  onTouchstart?: (event: React.MouseEvent) => void;
  children?: React.ReactNode;
};

export const defaultProps: ButtonProps = {
  type: 'default',
  nativeType: 'button',
  size: 'normal',
  loading: false,
  round: false,
  block: false,
  text: false,
  outline: false,
  disabled: false,
  ripple: false,
};
