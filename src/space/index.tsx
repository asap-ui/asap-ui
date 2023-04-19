import { createNameSpace } from 'asap-ui/utils/components';
import { padStartFlex, toSizeUnit } from 'asap-ui/utils/elements';
import { isArray } from 'asap-ui/utils/shared';
import React, { Children, type FC } from 'react';
import './index.less';
import { computeMargin } from './margin';
import {
  defaultProps,
  internalSizeValidator,
  SpaceProps,
  SpaceSize,
} from './props';

const Space: FC<SpaceProps> = (p) => {
  const { classes, n } = createNameSpace('space');
  const props = { ...defaultProps, ...p };
  const { children, inline, justify, align, wrap, direction, size } = props;
  const getSize = (size: SpaceSize, isInternalSize: boolean): string[] => {
    return isInternalSize
      ? [`var(--space-size-${size}-y)`, `var(--space-size-${size}-x)`]
      : isArray(size)
      ? (size.map(toSizeUnit) as string[])
      : ([toSizeUnit(size), toSizeUnit(size)] as string[]);
  };
  const isInternalSize = internalSizeValidator(size);
  const [y, x] = getSize(size!, isInternalSize);

  const lastIndex = Children.count(children) - 1;
  const spacers = Children.toArray(children).map((child, index) => {
    const margin = computeMargin(y, x, {
      direction: direction!,
      justify: justify!,
      index,
      lastIndex,
    });

    return (
      <div key={index} style={{ margin }}>
        {child}
      </div>
    );
  });

  return (
    <div
      className={classes(n(), n('$--box'), [inline, n('--inline')])}
      style={{
        flexDirection: direction,
        justifyContent: padStartFlex(justify),
        alignItems: padStartFlex(align),
        flexWrap: wrap ? 'wrap' : 'nowrap',
        margin: direction === 'row' ? `calc(-1 * ${y} / 2) 0` : undefined,
      }}
    >
      {spacers}
    </div>
  );
};

export default Space;
