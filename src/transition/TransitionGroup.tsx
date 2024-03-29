import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { TransitionProps } from './Transition';

interface ObserverProps {
  wrap?: string;
  className?: string;
  children?: any;
  style?: React.CSSProperties;
}

export type ChildrenMap = {
  [key: string]: React.ReactNode;
};

const TransitionGroup: React.FC<ObserverProps> = (props) => {
  const {
    children: _children,
    wrap = 'div',
    className = '',
    style = {},
  } = props;

  const mergeMap = (p: ChildrenMap, n: ChildrenMap): ChildrenMap => {
    let prev = p || {};
    let next = n || {};
    function getValueForKey(key: React.ReactText) {
      return key in next ? next[key] : prev[key];
    }
    let nextKeysPending = Object.create(null);
    let pendingKeys = [];
    for (let prevKey in prev) {
      if (prevKey in next) {
        if (pendingKeys.length) {
          nextKeysPending[prevKey] = pendingKeys;
          pendingKeys = [];
        }
      } else {
        pendingKeys.push(prevKey);
      }
    }
    let i;
    let childMapping: ChildrenMap = {};
    for (let nextKey in next) {
      if (Object.prototype.hasOwnProperty.call(next, nextKey)) {
        if (nextKeysPending[nextKey]) {
          for (i = 0; i < nextKeysPending[nextKey].length; i++) {
            let pendingNextKey = nextKeysPending[nextKey][i];
            childMapping[pendingNextKey] = getValueForKey(pendingNextKey);
          }
        }
        childMapping[nextKey] = getValueForKey(nextKey);
      }
    }
    for (i = 0; i < pendingKeys.length; i++) {
      childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
    }
    return childMapping;
  };

  const getMap = (
    children: React.ReactNode,
    callback?: (child: React.ReactNode) => React.ReactNode,
  ): ChildrenMap => {
    const map = Object.create(null);
    if (children) {
      // 如果没有手动添加key, React.Children.map会自动添加key
      React.Children.map(children, (c) => c)?.forEach((child) => {
        const key = (child as React.ReactElement).key || '';
        if (key) {
          if (React.isValidElement(child) && callback) {
            map[key] = callback(child);
          } else {
            map[key] = child;
          }
        }
      });
    }
    return map;
  };

  const handleLeave = (key: React.ReactText) => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    setChildren((prevChildren) => {
      if (key in prevChildren) {
        delete prevChildren[key];
      }
      return { ...prevChildren };
    });
  };

  const initChildren = (children: React.ReactNode): ChildrenMap => {
    return getMap(children, (child) => {
      return React.cloneElement(child as React.ReactElement, {
        animation: true,
        _onLeaveed: () => {
          const key = (child as React.ReactElement).key || '';
          handleLeave(key);
        },
      });
    });
  };

  const nextChildren = (
    nextChildren: React.ReactNode,
    prevChildrenMap: ChildrenMap,
  ): ChildrenMap => {
    const nextChildrenMap = getMap(nextChildren);
    const children = mergeMap(prevChildrenMap, nextChildrenMap);
    Object.keys(children).forEach((key) => {
      const child = children[key];

      if (!React.isValidElement(child)) {
        return;
      }
      const hasKeyByNew = nextChildrenMap[key] !== undefined;
      const hasKeyByPrev = prevChildrenMap[key] !== undefined;
      const isNew = hasKeyByNew && !hasKeyByPrev;
      const isDelete = !hasKeyByNew && hasKeyByPrev;
      const isNeverChange = hasKeyByNew && hasKeyByPrev;
      const prevProps: any = (prevChildrenMap[key] as React.ReactElement)
        ?.props as TransitionProps;
      if (isNew) {
        children[key] = React.cloneElement(child as any, {
          show: true,
          _onLeaveed: () => {
            const key = (child as React.ReactElement).key || '';
            handleLeave(key);
          },
        });
      } else if (isDelete) {
        children[key] = React.cloneElement(child as any, {
          show: false,
        });
      } else if (isNeverChange) {
        children[key] = React.cloneElement(child as any, {
          show: prevProps.show,
          _onLeaveed: () => {
            const key = (child as React.ReactElement).key || '';
            handleLeave(key);
          },
        });
      }
    });
    return children;
  };

  const firstMount = useRef<boolean>(true);
  const [children, setChildren] = useState<ChildrenMap>(() => {
    return initChildren(_children);
  });

  useEffect(() => {
    if (!firstMount.current) {
      setChildren(nextChildren(_children, children));
    }
    firstMount.current = false;
  }, [_children]);

  const ChildNode = Object.values(children);

  if (wrap) {
    const WrapChildNode = React.createElement(
      wrap,
      {
        className,
        style,
      },
      ChildNode,
    );

    return <>{WrapChildNode}</>;
  }

  return <>{ChildNode}</>;
};

export default TransitionGroup;
