import React from 'react';

export type ChipProps = {
  type?: 'default' | 'primary' | 'info' | 'success' | 'warning' | 'danger';
  size?: 'normal' | 'mini' | 'small' | 'large';
  color?: string;
  textColor?: string;
  plain?: boolean;
  round?: boolean;
  block?: boolean;
  closable?: boolean;
  onClose?: (event: React.MouseEvent) => void;
  children?: React.ReactNode;
};

export const defaultProps: ChipProps = {
  type: 'default',
  size: 'normal',
  plain: false,
  round: true,
  block: false,
  closable: false,
};
