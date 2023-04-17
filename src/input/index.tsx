import React, { type FC } from 'react';
import '../styles/common.less';
import { createNameSpace } from '../utils/components';
import './index.less';
import { defaultProps, InputProps } from './props';

const Input: FC<InputProps> = (p) => {
  const { n, classes } = createNameSpace('input');
  const props = { ...defaultProps, ...p };

  return (
    <div className={classes(n(), n('$--box'))}>
      <input className={n('input')} />
      <label className={classes(n('placeholder'), n('$--ellipsis'))}>
        {props.placeholder}
      </label>
    </div>
  );
};

export default Input;
