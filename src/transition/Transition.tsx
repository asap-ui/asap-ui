import React, {
  ReactElement,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

type handleFn = undefined | (() => void);

export type TransitionProps = {
  appear?: boolean;
  name?: string;
  children: ReactElement;
  timeout?: number;
  in?: boolean;
  unmountOnExit?: boolean;
  delay?: number;
  onEntered?: handleFn;
  onEntering?: handleFn;
  onExiting?: handleFn;
  onExited?: handleFn;
  onUnmounted?: handleFn;
};

type waitForTransitionStartCallback = (...args: any[]) => any;

enum STATUS {
  ENTERING = 'entering',
  ENTERED = 'entered',
  EXITING = 'exiting',
  EXITED = 'exited',
  UNMOUNTED = 'unmounted',
}
const noop = () => {};
const durationDefaults = 200;
const delayDefaults = 0;

const rAF = typeof window !== 'undefined' && window.requestAnimationFrame;

const waitForTransitionStart = rAF
  ? (callback: waitForTransitionStartCallback) => {
      rAF(() => {
        rAF(callback);
      });
    }
  : (callback: waitForTransitionStartCallback) => {
      setTimeout(callback, 50);
    };

const waitTransition = (
  duration: number,
  callback: waitForTransitionStartCallback,
) => {
  const timer = setTimeout(callback, duration);
  return timer;
};

export default function Transition(props: TransitionProps) {
  const {
    appear = false,
    children,
    name = 'r',

    in: _in = false,
    unmountOnExit = false,
    onEntered = noop,
    onEntering = noop,
    onExiting = noop,
    onExited = noop,
    onUnmounted = noop,
  } = props;

  let {
    delay: transitionDelay = delayDefaults,
    timeout: transitionDuration = durationDefaults,
  } = props;

  const prevClassNames = useRef(children!.props.className || '');
  const prevStyle = useRef(children!.props.style || '');
  const [animation, setAnimation] = useState<boolean>(_in!);
  const timers = useRef(new Set<number>([]));
  const [status, setStatus] = useState<STATUS>(() => {
    if (_in) {
      if (appear) {
        return STATUS['ENTERED'];
      } else {
        return STATUS['EXITED'];
      }
    } else {
      if (unmountOnExit) {
        return STATUS['UNMOUNTED'];
      } else {
        return STATUS['EXITED'];
      }
    }
  });
  const firstMount = useRef(true);
  const [interval, setIntervalTime] = useState<number>(0);

  const handleUnmounted = () => {
    if (!firstMount.current) {
      onUnmounted!();
    }
    if (animation) {
      setStatus(STATUS['EXITED']);
    }
  };

  const handleExited = () => {
    if (animation) {
      transitionDelay += interval;
      waitForTransitionStart(() => {
        const timer = waitTransition(transitionDelay!, () => {
          setStatus(STATUS['ENTERING']);
        });
        timers.current.add(timer);
      });
    } else {
      onExited!();

      const { _onLeaveed } = props as any;
      if (_onLeaveed) {
        _onLeaveed();
      }

      if (unmountOnExit) {
        setStatus(STATUS['UNMOUNTED']);
      }
    }
  };

  const handleExiting = () => {
    onExiting!();
    if (animation) {
      transitionDelay += interval;
      const timer = waitTransition(transitionDelay!, () => {
        setStatus(STATUS['ENTERING']);
      });
      timers.current.add(timer);
    } else {
      const timer = waitTransition(transitionDuration, () => {
        setStatus(STATUS['EXITED']);
      });
      timers.current.add(timer);
    }
  };

  const handleEntered = () => {
    onEntered!();
    if (animation) {
    } else {
      transitionDelay += interval;
      const timer = waitTransition(transitionDelay!, () => {
        setStatus(STATUS['EXITING']);
      });
      timers.current.add(timer);
    }
  };

  const handleEntering = () => {
    onEntering();

    if (animation) {
      const timer = waitTransition(transitionDuration!, () => {
        setStatus(STATUS['ENTERED']);
      });
      timers.current.add(timer);
    } else {
      transitionDelay += interval;
      const timer = waitTransition(transitionDelay!, () => {
        setStatus(STATUS['EXITING']);
      });
      timers.current.add(timer);
    }
  };

  useEffect(() => {
    timers.current.forEach((timer) => {
      clearTimeout(timer);
    });
    timers.current.clear();

    switch (status) {
      case STATUS['UNMOUNTED']:
        handleUnmounted();
        break;
      case STATUS['EXITED']:
        handleExited();
        break;
      case STATUS['EXITING']:
        handleExiting();
        break;
      case STATUS['ENTERED']:
        handleEntered();
        break;
      case STATUS['ENTERING']:
        handleEntering();
        break;
    }
    firstMount.current = false;
  }, [status, animation]);

 

  useEffect(() => {
    setAnimation(_in);
  }, [_in]);


  const className = useMemo(() => {
    const classPrefix = name;
    switch (status) {
      case STATUS['EXITED']:
        return `${classPrefix}-exited`;
      case STATUS['EXITING']:
        return `${classPrefix}-exiting`;
      case STATUS['ENTERED']:
        return `${classPrefix}-entered`;
      case STATUS['ENTERING']:
        return `${classPrefix}-entering`;
    }
  }, [status, name]);

  const nextStyle = useMemo(() => {
    if (status === STATUS['EXITED'] && !unmountOnExit && !animation) {
      return {
        display: 'none',
      };
    }
    return null;
  }, [unmountOnExit, status, animation]);

  const nextClassName = prevClassNames.current
    ? `${className} ${prevClassNames.current}`
    : `${className}`;

  if (status === STATUS['UNMOUNTED']) {
    return null;
  }

  return React.cloneElement(React.Children.only(children as any), {
    className: nextClassName,
    style: {
      ...prevStyle.current,
      ...nextStyle,
    },
  });
}

Transition.displayName = 'Transition';
