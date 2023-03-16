import { ChipProps, defaultProps } from 'asap-ui/chip/props';
import React, { FC } from 'react';
import { createNameSpace } from '../utils/components';
import './index.less';

const Chip: FC<ChipProps> = (p) => {
  const props = { ...defaultProps, ...p };
  const { n, classes } = createNameSpace('chip');
  return (
    <>
      <span className={classes(n(), n('$--box'))}>
        <span className={n(`test-${props.size}`)}>{props.children}</span>
      </span>
    </>
  );
};

export default Chip;
