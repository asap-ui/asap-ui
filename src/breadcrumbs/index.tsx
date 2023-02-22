import React, { type FC } from 'react';
import { createNameSpace } from '../utils/components';
import { useStatus } from '../utils/hooks';
import './index.less';
import { BreadcrumbsProps, defaultProps } from './props';

const Breadcrumbs: FC<BreadcrumbsProps> = (p) => {
  const [Provide] = useStatus();
  const { n } = createNameSpace('breadcrumbs');
  const props = { ...defaultProps, ...p };

  return (
    <Provide value={props}>
      <div className={n()}>{props.children}</div>
    </Provide>
  );
};

export default Breadcrumbs;
