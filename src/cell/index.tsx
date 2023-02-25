import { Icon } from 'asap-ui';
import React, { useMemo, type FC } from 'react';
import { createNameSpace } from '../utils/components';
import './index.less';
import { CellProps, defaultProps } from './props';

const Cell: FC<CellProps> = (p) => {
  const { n, classes } = createNameSpace('cell');
  const props = { ...defaultProps, ...p };

  const iconSlot = useMemo(() => {
    if (!props.icon) return null;
    return (
      <div className={classes(n('icon'), props.iconClass)}>
        <Icon name={props.icon} />
      </div>
    );
  }, [props.icon]);

  const contentSlot = useMemo(() => {
    if (!props.title && !props.description && !props.children) return null;
    return (
      <div className={n('content')}>
        {props.children ?? (
          <div className={classes(n('title'), props.titleClass)}>
            {props.title}
          </div>
        )}
        <div className={classes(n('description'), props.description)}>
          {props.description}
        </div>
      </div>
    );
  }, [props.title, props.description, props.children]);

  const extraSlot = useMemo(() => {
    if (!props.extra) return null;
    return (
      <div className={classes(n('extra'), props.extraClass)}>{props.extra}</div>
    );
  }, [props.extra]);

  return (
    <div
      onClick={props.onClick}
      className={classes(
        n(),
        [props.border, n('--border')],
        [props.onClick, n('--cursor')],
      )}
    >
      {iconSlot}
      {contentSlot}
      {extraSlot}
    </div>
  );
};

export default Cell;
