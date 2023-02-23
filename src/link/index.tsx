import { createNameSpace } from 'asap-ui/utils/components';
import React, { type FC } from 'react';
import { defaultProps, LinkProps } from '../link/props';
import './index.less';

const Link: FC<LinkProps> = (p) => {
  const { classes, n } = createNameSpace('link');
  const props = { ...defaultProps, ...p };

  return (
    <div
      className={classes(
        n(),
        n('$--box'),
        n('$--inline-flex'),
        n(`--${props.type}`),
      )}
    >
      {props.children}
    </div>
  );
};

export default Link;
