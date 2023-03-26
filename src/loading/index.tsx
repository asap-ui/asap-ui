import React, { type FC } from 'react';
import '../styles/common.less';
import { createNameSpace } from '../utils/components';
import { multiplySizeUnit } from '../utils/elements';
import './index.less';
import { defaultProps, LoadingProps } from './props';

const loadingTypeDict = {
  wave: 5,
  cube: 4,
  rect: 8,
  disappear: 3,
};

const Loading: FC<LoadingProps> = (p) => {
  const { n, classes } = createNameSpace('loading');
  const props = { ...defaultProps, ...p };

  return (
    <div className={n()}>
      {props.content && (
        <div
          className={classes(n('content'), [
            props.loading,
            n('content--active'),
          ])}
        >
          {props.content}
          <div className={n('content-mask')}></div>
        </div>
      )}

      {props.loading && (
        <div
          className={classes(n('$--box'), n('body'), [
            props.content,
            n('inside'),
          ])}
        >
          {props.type === 'circle' && (
            <div className={n('circle')}>
              <span
                className={classes(
                  n('circle-block'),
                  n(`circle-block--${props.size}`),
                )}
                style={{
                  width: multiplySizeUnit(props.radius, 2),
                  height: multiplySizeUnit(props.radius, 2),
                }}
              >
                <svg viewBox="25 25 50 50">
                  <circle cx="50" cy="50" r="20" fill="none"></circle>
                </svg>
              </span>
            </div>
          )}

          {Object.entries(loadingTypeDict).map(([key, number]) =>
            props.type === key ? (
              <div
                className={classes(n(key), n(`${key}--${props.size}`))}
                key={key}
              >
                {new Array(number).fill('').map((item, index) => (
                  <div
                    key={index}
                    style={{ backgroundColor: props.color }}
                    className={classes(
                      n(`${key}-item`),
                      n(`${key}-item--${props.size}`),
                    )}
                  ></div>
                ))}
              </div>
            ) : null,
          )}

          {props.description && (
            <div
              className={classes(
                n('description'),
                n(`description--${props.size}`),
              )}
            >
              {props.description}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Loading;
