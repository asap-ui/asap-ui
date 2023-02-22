import React from 'react';

export type BreadcrumbsProps = {
  separator?: string;
  children?: React.ReactNode;
};

export const defaultProps: BreadcrumbsProps = {
  separator: '/',
};
