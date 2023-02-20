import React from 'react';

export type BreadcrumbProps = {
  separator?: string;
  onClick?: (event: Event) => void;
  children: React.ReactNode;
};
