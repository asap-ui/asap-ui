import React, { type FC } from 'react';
import { createNameSpace } from '../utils/components';
import { useStatus } from '../utils/hooks';
import './index.less';
import { BreadcrumbsProps, defaultProps } from './props';

const Breadcrumbs: FC<BreadcrumbsProps> = (props) => {
  const [Provide] = useStatus();
  const { n } = createNameSpace('breadcrumbs');

  return (
    <Provide value={defaultProps}>
      <div className={n()}>{props.children}</div>
    </Provide>
  );
};

export default Breadcrumbs;
