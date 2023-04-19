import { toSizeUnit } from 'asap-ui/utils/elements';
import { toNumber } from 'asap-ui/utils/shared';
import React, { PropsWithChildren, type FC } from 'react';
import '../styles/common.less';
import { createNameSpace } from '../utils/components';
import './index.less';
import { defaultProps, SkeletonProps } from './props';

const Skeleton: FC<PropsWithChildren<SkeletonProps>> = (p) => {
  const { n, classes } = createNameSpace('skeleton');
  const props = { ...defaultProps, ...p };

  return (
    <div className={classes(n('$--box'), n())}>
      {!props.loading && <div className={n('data')}>{props.children}</div>}

      {props.loading && !props.fullscreen && (
        <div className={n('content')}>
          {props.card && (
            <div
              className={n('card')}
              style={{ height: toSizeUnit(props.cardHeight) }}
            >
              <div className={n('--animation')}></div>
            </div>
          )}
          {(props.avatar || props.title || toNumber(props.rows) > 0) && (
            <div className={n('article')}>
              {props.avatar && (
                <div
                  className={n('avatar')}
                  style={{
                    width: toSizeUnit(props.avatarSize),
                    height: toSizeUnit(props.avatarSize),
                  }}
                >
                  <div className={n('--animation')}></div>
                </div>
              )}
              {(props.title || toNumber(props.rows) > 0) && (
                <div className={n('section')}>
                  {props.title && (
                    <div
                      className={n('title')}
                      style={{ width: toSizeUnit(props.titleWidth) }}
                    >
                      <div className={n('--animation')}></div>
                    </div>
                  )}
                  {new Array(toNumber(props.rows)).fill('').map((r, index) => (
                    <div
                      key={index}
                      className={n('row')}
                      style={{ width: toSizeUnit(props.rowsWidth![index]) }}
                    >
                      <div className={n('--animation')}></div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {props.loading && props.fullscreen && (
        <div
          className={n('fullscreen')}
          style={{ zIndex: toNumber(props.fullscreenZIndex) }}
        >
          <div className={n('--animation')}></div>
        </div>
      )}
    </div>
  );
};

export default Skeleton;
