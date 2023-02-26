import { createNameSpace } from 'asap-ui/utils/components';
import React, { type FC } from 'react';
import '../styles/common.less';
import './index.less';
import { AvatarProps, defaultProps } from './props';

const Avatar: FC<AvatarProps> = (p) => {
  const { n, classes } = createNameSpace('avatar');
  const props = { ...defaultProps, ...p };
  return (
    <div
      className={classes(
        n(),
        n('$--box'),
        [props.size, n(`--${props.size}`)],
        [props.round, n('--round')],
        [props.bordered, n('--bordered')],
      )}
      style={{
        borderColor: props.borderColor,
        background: props.color,
      }}
      onClick={props.onClick}
    >
      <img
        className={n('image')}
        src={props.src}
        alt={''}
        style={{ objectFit: props.fit }}
      />

      <div className={n('text')}>{props.children}</div>
    </div>
  );
};

export default Avatar;
