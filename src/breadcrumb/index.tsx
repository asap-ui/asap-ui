import React, { type FC } from 'react';
import '../styles/common.less';
import { createNameSpace } from '../utils/components';
import './index.less';
import { BreadcrumbProps } from './props';

const Breadcrumb: FC<BreadcrumbProps> = (props) => {
  const { classes, n } = createNameSpace('breadcrumb');

  const handleClick: React.MouseEventHandler<HTMLElement> = (e) => {
    if (props.isLastChild) return;
    props.onClick?.(e);
  };

  return (
    <div className={n()}>
      <div
        className={classes(n('content'), [!props.isLastChild, n('--active')])}
        onClick={handleClick}
      >
        {props.children}
      </div>
      {!props.isLastChild && (
        <div className={n('separator')}>
          {props.separator ?? props.preSeparator}
        </div>
      )}
    </div>
  );
};

export default Breadcrumb;
