import React, { Children, cloneElement, type FC } from 'react';
import { createNameSpace } from '../utils/components';
import { useStatus } from '../utils/hooks';
import './index.less';
import { BreadcrumbsProps, defaultProps } from './props';

const Breadcrumbs: FC<BreadcrumbsProps> = (p) => {
  const [Provide] = useStatus();
  const { n } = createNameSpace('breadcrumbs');
  const childrenCount = Children.count(p.children);
  const props = { ...defaultProps, ...p };

  return (
    <div className={n()}>
      {Children.map(props.children, (child: any, index) => {
        const isLastChild = index === childrenCount - 1;
        return cloneElement(child, {
          isLastChild,
          preSeparator: props.separator,
        });
      })}
    </div>
  );
};

export default Breadcrumbs;
