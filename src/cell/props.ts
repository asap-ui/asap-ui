import React from 'react';

export type CellProps = {
  title?: string | number;
  icon?: string;
  description?: string;
  border?: boolean;
  borderOffset?: number | string;
  iconClass?: string;
  titleClass?: string;
  descriptionClass?: string;
  extraClass?: string;
  ripple?: boolean;
  onClick?: (event: React.MouseEvent) => void;
  children?: React.ReactNode;
  extra?: React.ReactNode;
};

export const defaultProps: CellProps = {
  border: false,
  ripple: false,
};
