import React from 'react';

export type BreadcrumbProps = {
  separator?: string | React.ReactNode;
  onClick?: (event: Event) => void;
  children: React.ReactNode;
};
