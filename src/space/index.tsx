import { createNameSpace } from 'asap-ui/utils/components';
import React, { Children, CSSProperties, useMemo, type FC } from 'react';
import './index.less';
import { defaultProps, SpaceProps, SpaceSize } from './props';

const Space: FC<SpaceProps> = (p) => {
  const { classes, n } = createNameSpace('space');
  const props = { ...defaultProps, ...p };
  const className = useMemo(
    () =>
      classes(
        n(),
        n('$--box'),
        n(`--${props.direction}`),
        n(`--align-${props.align}`),
        [props.fill, n('--fill')],
        [props.wrap, n('--wrap')],
      ),
    [props.direction, props.align],
  );

  const { children } = p;
  const childrenCount = Children.count(children);

  const getMargin = (size: SpaceSize) =>
    typeof size === 'number' ? size + 'px' : size;

  const getMarginStyle = (isLast: boolean): CSSProperties => {
    const style: CSSProperties = {};

    const marginRight = `${getMargin(
      (Array.isArray(props.size) ? props.size[0] : props.size) as SpaceSize,
    )}`;
    const marginBottom = `${getMargin(
      (Array.isArray(props.size) ? props.size[1] : props.size) as SpaceSize,
    )}`;

    if (isLast) {
      return props.wrap ? { marginBottom } : {};
    }

    if (props.direction === 'horizontal') {
      style.marginRight = marginRight;
    }
    if (props.direction === 'vertical' || props.wrap) {
      style.marginBottom = marginBottom;
    }

    return style;
  };

  return (
    <div className={className} style={p.style}>
      {Children.toArray(children).map((Child, index) => (
        <div key={index} style={{...getMarginStyle(index === childrenCount - 1),width:'100%'}}>
          {Child}
        </div>
      ))}
    </div>
  );
};

export default Space;
