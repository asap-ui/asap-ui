import { AppBarProps } from 'asap-ui/app-bar/props';
import React, { type FC } from 'react';
import '../styles/common.less';
import { createNameSpace } from '../utils/components';
import './index.less';

const AppBar: FC<AppBarProps> = (props) => {
  const { n, classes } = createNameSpace('app-bar');
  const { flex = true } = props;
  return (
    <div className={classes(n())}>
      <div>{props.title}</div>
      <div className={classes([flex, n('--flex'), n('--block')])}>
        {props.children}
      </div>
    </div>
  );
};

export default AppBar;
