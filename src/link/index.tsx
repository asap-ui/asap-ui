import { createNameSpace } from 'asap-ui/utils/components';
import React, { useMemo, type FC } from 'react';
import { Link } from 'react-router-dom';
import { defaultProps, LinkProps } from '../link/props';
import './index.less';

const Links: FC<LinkProps> = (p) => {
  const { classes, n } = createNameSpace('link');
  const props = { ...defaultProps, ...p };

  const className = useMemo(() => {
    return classes(
      n(),
      n('$--box'),
      n('$--inline-flex'),
      n(`--${props.type}`),
      [props.underline !== 'none', n(`--underline-${props.underline}`)],
      [props.disabled, n('--disabled')],
    );
  }, [props.underline, props.disabled]);
  const style = useMemo(() => {
    return { color: props.color, fontSize: props.size };
  }, [props.color, props.size]);

  return useMemo(() => {
    if (props.disabled) {
      return (
        <span style={style} className={className}>
          {props.children}
        </span>
      );
    }
    if (props?.to) {
      return (
        <Link
          onClick={props.onClick}
          style={style}
          className={className}
          to={props.to}
        >
          {props.children}
        </Link>
      );
    }
    return (
      <a {...props} style={style} className={className} onClick={props.onClick}>
        {props.children}
      </a>
    );
  }, [props.to, props.href]);
};

export default Links;
