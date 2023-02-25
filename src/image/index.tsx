import { createNameSpace } from 'asap-ui/utils/components';
import React, { useMemo, type FC } from 'react';
import './index.less';
import { defaultProps, ImageProps } from './props';

const Image: FC<ImageProps> = (p) => {
  const { n, classes } = createNameSpace('image');
  const props = { ...defaultProps, ...p };

  const imgSlot = useMemo(() => {
    if (props.lazy) {
      // return (
      //   <img
      //
      //   />
      // )
    }
    return (
      <img
        className={n('image')}
        alt={props.alt}
        title={props.title}
        src={props.src}
        onClick={props.onClick}
        style={{ objectFit: props.fit }}
      />
    );
  }, [props]);

  return (
    <div
      className={classes(n(), n('$--box'), [
        !props.block,
        n('$--inline-block'),
      ])}
      style={{
        width: props.width,
        height: props.height,
        borderRadius: props.radius,
      }}
    >
      {imgSlot}
    </div>
  );
};

export default Image;
