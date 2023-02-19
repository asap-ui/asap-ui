import React, { type FC } from 'react';
import { IconProps } from './props';
import './style.less';

const Icon: FC<IconProps> = ({ name, size, color }) => {
  const className = `icon icon-${name}`;
  const style = { fontSize: size, color };

  return <i className={className} style={style} />;
};

export default Icon;
