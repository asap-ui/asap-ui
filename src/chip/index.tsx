import { ChipProps, defaultProps } from 'asap-ui/chip/props';
import React, { FC, useMemo } from 'react';
import { createNameSpace } from '../utils/components';
import './index.less';

const Chip: FC<ChipProps> = (p) => {
  const props = { ...defaultProps, ...p };
  const { n, classes } = createNameSpace('chip');

  const chipStyle = useMemo(() => {
    const { color, textColor, plain } = props;
    if (plain)
      return {
        borderColor: color,
        color: textColor || color,
      };
    return {
      backgroundColor: color,
      color: textColor,
    };
  }, [props]);

  const contentClass = useMemo(() => {
    const { size, block, type, plain, round } = props;
    const blockClass = block ? n('$--flex') : n('$--inline-flex');
    const plainTypeClass = plain
      ? `${n('plain')} ${n(`plain-${type}`)}`
      : n(`--${type}`);
    const roundClass = round ? n('--round') : null;
    return [n(`--${size}`), blockClass, plainTypeClass, roundClass];
  }, [props]);

  return (
    <>
      <span
        className={classes(n(), n('$--box'), ...contentClass)}
        style={chipStyle}
      >
        <span className={n(`test-${props.size}`)}>{props.children}</span>
      </span>
    </>
  );
};

export default Chip;
