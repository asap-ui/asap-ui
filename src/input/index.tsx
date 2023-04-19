import { useState } from 'asap-ui/utils/hooks';
import React, { type FC } from 'react';
import '../styles/common.less';
import { createNameSpace } from '../utils/components';
import './index.less';
import { defaultProps, InputProps } from './props';

const Input: FC<InputProps> = (p) => {
  const { n, classes } = createNameSpace('input');
  const props = { ...defaultProps, ...p };
  const [focus, setFocus] = useState(false);

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    setFocus(false);
  };

  return (
    <div className={classes(n(), n('$--box'), [focus, n('active')])}>
      <input className={n('input')} onFocus={handleFocus} onBlur={handleBlur} />
      <label
        className={classes(n('placeholder'), n('$--ellipsis'), [
          focus,
          n('focus'),
        ])}
      >
        {props.placeholder}
      </label>
    </div>
  );
};

export default Input;
