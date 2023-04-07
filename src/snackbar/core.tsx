import Icon from 'asap-ui/icon';
import Loading from 'asap-ui/loading';
import { createNameSpace } from 'asap-ui/utils/components';
import { useLock } from 'asap-ui/utils/lock';
import { useZIndex } from 'asap-ui/utils/zIndex';
import React, { CSSProperties, FC, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Transition } from 'asap-ui/transition';
import { SNACKBAR_TYPE } from '.';
import { defaultProps, SnackbarProps, SnackbarType } from './props';

const { n, classes } = createNameSpace('snackbar');

const ICON_TYPE_DICT: Record<SnackbarType, string> = {
  success: 'checkbox-marked-circle',
  warning: 'warning',
  info: 'information',
  error: 'error',
  loading: '',
};

const Snackbar: FC<SnackbarProps> = (props) => {
  const nodeRef = useRef(null);
  const [display, setDisplay] = useState(false);
  const [lock, setLock] = useState(props.lockScroll);
  const zIndex = useZIndex(props.show, 1);
  const iconName = props.type ? ICON_TYPE_DICT[props.type] : null;

  let timer: any;

  useLock(props.show, lock);

  useEffect(() => {
    if (props.show) {
      clearTimeout(timer);
      setDisplay(false);
      timer = setTimeout(() => {
        setDisplay(false);
        clearTimeout(timer);
      }, props.duration);
    } else {
      setLock(false);
    }
    setDisplay(props.show!);

    return () => {
      clearTimeout(timer);
    };
  }, [props.show]);

  return (
    <Transition
      name={n('fade')}
      timeout={props.timeout!}
      in={display}
      unmountOnExit
      onEntered={props.onOpened}
      onEntering={props.onOpen}
      onExiting={props.onClose}
      onExited={props.onClosed}
    >
      <div
        ref={nodeRef}
        className={classes(n(), [
          (props.callType === 'function' &&
            props.style?.position === 'absolute') ||
            props.callType !== 'function',
          n('transition'),
        ])}
        style={{
          pointerEvents:
            props.type === 'loading' || props.forbidClick ? 'auto' : 'none',
          zIndex,
          ...props.style,
        }}
      >
        <div
          className={classes(
            n('wrapper'),
            n(`wrapper-${props.position}`),
            n('$-elevation--4'),
            [props.vertical, n('vertical')],
            [
              props.type && SNACKBAR_TYPE.includes(props.type),
              n(`wrapper-${props.type}`),
            ],
          )}
          style={{ zIndex }}
        >
          <div className={classes(n('content'), props.contentClass)}>
            {props.content}
          </div>
          <div className={n('action')}>
            {iconName && <Icon name={iconName} />}
            {props.type === 'loading' && (
              <Loading
                type={props.loadingType}
                size={props.loadingSize}
                color={props.loadingColor}
                radius={props.loadingRadius}
              />
            )}
            {props.action}
          </div>
        </div>
      </div>
    </Transition>
  );
};

const SnackbarCore: FC<SnackbarProps> = (p) => {
  const props = { ...defaultProps, ...p };

  return props.callType === 'function' ? (
    <Snackbar {...props} />
  ) : (
    createPortal(<Snackbar {...props} />, props.teleport!)
  );
};

export default SnackbarCore;
