import React, { forwardRef } from 'react';
import '../styles/common.less';
import { createNameSpace } from '../utils/components';
import './index.less';
import { ButtonProps, defaultProps } from './props';

const Button = forwardRef<any, ButtonProps>((p, ref) => {
  const { n, classes } = createNameSpace('button');
  const props = { ...defaultProps, ...p };

  return (
    <button
      ref={ref}
      /* eslint-disable react/button-has-type */
      type={props.nativeType}
      disabled={props.disabled}
      onClick={props.onClick}
      className={classes(
        n(),
        n('$--box'),
        n(`--${props.size}`),
        [props.block, `${n('$--flex')} ${n('--block')}`, n('$--inline-flex')],
        [props.disabled, n('--disabled')],
        [
          props.text,
          `${n(`--text-${props.type}`)} ${n('--text')}`,
          `${n(`--${props.type}`)} ${n('$-elevation--2')}`,
        ],
        [props.text && props.disabled, n('--text-disabled')],
        [props.round, n('--round')],
        [props.outline, n('--outline')],
      )}
    >
      {props.children}
    </button>
  );
});

export default Button;
