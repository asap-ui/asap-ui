import { createNameSpace } from 'asap-ui/utils/components';
import React, { useEffect, useRef } from 'react';
import '../styles/common.less';
import './index.less';
import {
  RippleHTMLElement,
  RippleOptions,
  RippleProps,
  RippleStyles,
} from './props';

const { classes, n } = createNameSpace('ripple');

const ANIMATION_DURATION = 250;

function supportTouch() {
  const inBrowser = typeof window !== 'undefined';
  return inBrowser && 'ontouchstart' in window;
}

function setStyles(element: RippleHTMLElement) {
  const { zIndex, position } = window.getComputedStyle(element);

  element.style.overflow = 'hidden';
  element.style.overflowX = 'hidden';
  element.style.overflowY = 'hidden';
  position === 'static' && (element.style.position = 'relative');
  zIndex === 'auto' && (element.style.zIndex = '1');
}

function computeRippleStyles(
  element: RippleHTMLElement,
  event: TouchEvent,
): RippleStyles {
  const { top, left }: DOMRect = element.getBoundingClientRect();
  const { clientWidth, clientHeight } = element;

  const radius: number = Math.sqrt(clientWidth ** 2 + clientHeight ** 2) / 2;
  const size: number = radius * 2;

  const localX: number = event.touches[0].clientX - left;
  const localY: number = event.touches[0].clientY - top;

  const centerX: number = (clientWidth - radius * 2) / 2;
  const centerY: number = (clientHeight - radius * 2) / 2;

  const x: number = localX - radius;
  const y: number = localY - radius;

  return { x, y, centerX, centerY, size };
}

function createRipple(this: RippleHTMLElement, event: TouchEvent) {
  const _ripple = this._ripple as RippleOptions;
  _ripple.removeRipple();

  if (_ripple.disabled || _ripple.tasker) {
    return;
  }

  const task = () => {
    _ripple.tasker = null;

    const { x, y, centerX, centerY, size }: RippleStyles = computeRippleStyles(
      this,
      event,
    );
    const ripple: RippleHTMLElement = document.createElement('div');
    ripple.classList.add(n());
    ripple.style.opacity = `0`;
    ripple.style.transform = `translate(${x}px, ${y}px) scale3d(.3, .3, .3)`;
    ripple.style.width = `${size}px`;
    ripple.style.height = `${size}px`;
    _ripple.color && (ripple.style.backgroundColor = _ripple.color);
    ripple.dataset.createdAt = String(performance.now());

    setStyles(this);

    this.appendChild(ripple);

    window.setTimeout(() => {
      ripple.style.transform = `translate(${centerX}px, ${centerY}px) scale3d(1, 1, 1)`;
      ripple.style.opacity = `.25`;
    }, 20);
  };

  _ripple.tasker = window.setTimeout(task, 30);
}

function removeRipple(this: RippleHTMLElement) {
  const _ripple = this._ripple as RippleOptions;

  const task = () => {
    const ripples: NodeListOf<RippleHTMLElement> = this.querySelectorAll(
      `.${n()}`,
    );
    if (!ripples.length) {
      return;
    }

    const lastRipple: RippleHTMLElement = ripples[ripples.length - 1];
    const delay: number =
      ANIMATION_DURATION -
      performance.now() +
      Number(lastRipple.dataset.createdAt);

    setTimeout(() => {
      lastRipple.style.opacity = `0`;

      setTimeout(
        () => lastRipple.parentNode?.removeChild(lastRipple),
        ANIMATION_DURATION,
      );
    }, delay);
  };

  _ripple.tasker ? setTimeout(task, 30) : task();
}

function forbidRippleTask(this: RippleHTMLElement) {
  const _ripple = this._ripple as RippleOptions;

  if (!supportTouch()) {
    return;
  }

  if (!_ripple.touchmoveForbid) {
    return;
  }

  _ripple.tasker && window.clearTimeout(_ripple.tasker);
  _ripple.tasker = null;
}

const Ripple = ({
  children,
  color = '',
  disabled = false,
  touchmoveForbid = true,
}: RippleProps) => {
  const childDomRef = useRef<null | RippleHTMLElement>(null);
  const Component = React.cloneElement(children, { ref: childDomRef });

  useEffect(() => {
    if (childDomRef.current) {
      childDomRef.current._ripple = {
        tasker: null,
        color,
        disabled,
        touchmoveForbid,
        removeRipple: removeRipple.bind(childDomRef.current),
      };

      childDomRef.current.addEventListener('touchstart', createRipple, {
        passive: true,
      });
      childDomRef.current.addEventListener('touchmove', forbidRippleTask, {
        passive: true,
      });
      childDomRef.current.addEventListener('dragstart', removeRipple, {
        passive: true,
      });
      document.addEventListener(
        'touchend',
        childDomRef.current._ripple.removeRipple,
        {
          passive: true,
        },
      );
      document.addEventListener(
        'touchcancel',
        childDomRef.current._ripple.removeRipple,
        {
          passive: true,
        },
      );
    }

    return () => {
      childDomRef.current?.removeEventListener('touchstart', createRipple);
      childDomRef.current?.removeEventListener('touchmove', forbidRippleTask);
      childDomRef.current?.removeEventListener('dragstart', removeRipple);
      document.removeEventListener(
        'touchend',
        childDomRef.current?._ripple!.removeRipple,
      );
      document.removeEventListener(
        'touchcancel',
        childDomRef.current?._ripple!.removeRipple,
      );
    };
  }, []);

  useEffect(() => {
    if (!childDomRef.current) return;
    const newProps = {
      touchmoveForbid: touchmoveForbid || true,
      color: color || '',
      disabled: disabled || false,
    };
    const diff =
      newProps.touchmoveForbid !==
        childDomRef.current!._ripple?.touchmoveForbid ||
      newProps.color !== childDomRef.current!._ripple?.color ||
      newProps.disabled !== childDomRef.current!._ripple?.disabled;

    if (diff) {
      childDomRef.current._ripple = {
        tasker: newProps.disabled ? null : childDomRef.current._ripple?.tasker,
        removeRipple: childDomRef.current._ripple?.removeRipple,
        ...newProps,
      };
    }
  }, [color, disabled, touchmoveForbid]);

  return <>{Component}</>;
};

export default Ripple;
