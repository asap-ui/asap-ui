import React from 'react';

export type BreadcrumbProps = {
  separator?: string | React.ReactNode;
  preSeparator?: string | React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  isLastChild?: string;
  children: React.ReactNode;
};
