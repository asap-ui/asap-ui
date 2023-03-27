import '@mdi/font/css/materialdesignicons.min.css';
import React, { type FC } from 'react';
import { IconProps } from './props';

const Icon: FC<IconProps> = ({ name, size, color }) => {
  const className = `mdi mdi-${name}`;
  const style = { fontSize: size, color };

  return <i className={className} style={style} />;
};

export default Icon;
