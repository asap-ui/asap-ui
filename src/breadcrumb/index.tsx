import React, { type FC } from 'react';
import '../styles/common.less';
import { createNameSpace } from '../utils/components';
import { useStatus } from '../utils/hooks';
import './index.less';
import { BreadcrumbProps } from './props';

const Breadcrumb: FC<BreadcrumbProps> = (props) => {
  const [_, value] = useStatus();
  const { classes, n } = createNameSpace('breadcrumb');
  console.log(value, 111);
  return (
    <div className={n()}>
      <div className={n('--active')}>{props.children}</div>
      <div className={n('separator')}>{value.separator}</div>
    </div>
  );
};

export default Breadcrumb;
