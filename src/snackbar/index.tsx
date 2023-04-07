import { isPlainObject, isString } from 'asap-ui/utils/shared';
import React, { createRef } from 'react';
import { createRoot } from 'react-dom/client';
import { TransitionGroup } from 'asap-ui/transition';
import { createNameSpace } from '../utils/components';
import SnackbarCore from './core';
import {
  defaultProps,
  Snackbar as TSnackbar,
  SnackbarHandel,
  SnackbarOptions,
  SnackbarType,
} from './props';

import '../styles/common.less';
import './index.less';

type UniqSnackbarOptions = SnackbarOptions & { key: string; show: boolean };

export type SnackbarContainerProps = {
  allowMultiple?: boolean;
};

export type SnackbarContainerState = {
  snackbarList: UniqSnackbarOptions[];
  allowMultiple: boolean;
};

export const SNACKBAR_TYPE: Array<SnackbarType> = [
  'loading',
  'success',
  'warning',
  'info',
  'error',
];

function normalizeOptions(options = {}): SnackbarOptions {
  return isString(options) ? { content: options } : options;
}

const { n, classes } = createNameSpace('snackbar');

let seed = 0;
const genUuid = () => `SNACKBAR_${Date.now()}_${seed++}`;

class SnackbarContainer extends React.PureComponent<
  SnackbarContainerProps,
  SnackbarContainerState
> {
  state: SnackbarContainerState = {
    snackbarList: [],
    allowMultiple: this.props.allowMultiple || false,
  };

  remove = (snackbar: UniqSnackbarOptions) => {
    this.toggle({ ...snackbar, show: true });
    this.forceUpdate(() => {
      this.setState((prev) => ({
        ...prev,
        snackbarList: prev.snackbarList.filter(
          ({ key }) => key !== snackbar.key,
        ),
      }));
    });
  };

  add = (snackbar: UniqSnackbarOptions) => {
    const addItem = () => {
      this.setState((prev) => ({
        ...prev,
        snackbarList: [...prev.snackbarList, snackbar],
      }));

      setTimeout(() => {
        this.remove(snackbar);
      }, snackbar.duration);
    };

    if (!this.state.allowMultiple && this.state.snackbarList.length === 1) {
      this.clear(() => addItem());
    } else {
      addItem();
    }
  };

  toggle = (snackbar: UniqSnackbarOptions) => {
    const { snackbarList } = this.state;

    for (let i = 0; i < snackbarList.length; i++) {
      if (snackbarList[i].key === snackbar.key) {
        snackbarList[i] = { ...snackbarList[i], show: !snackbarList[i].show };
        break;
      }
    }

    this.setState({
      snackbarList,
    });
  };

  clear = (callback?: () => void) => {
    const { length } = this.state.snackbarList;
    for (let i = 0; i < length; i++) {
      this.toggle({ ...this.state.snackbarList[i], show: false });
      if (i === length - 1) {
        this.forceUpdate(() => {
          this.setState({ snackbarList: [] });
          callback && callback();
        });
      }
    }
  };

  allowMultiple = (bool: boolean) => {
    this.setState({ allowMultiple: bool }, () => {
      if (this.state.snackbarList.length > 1 && !this.state.allowMultiple) {
        for (let i = 0; i < this.state.snackbarList.length - 1; i++) {
          this.remove(this.state.snackbarList[i]);
        }
      }
      this.forceUpdate();
    });
  };

  render() {
    const { allowMultiple } = this.state;

    return (
      <TransitionGroup
        className={n('$-snackbar--group')}
        style={{ zIndex: 3000 }}
      >
        {this.state.snackbarList.map((options) => {
          return (
            <SnackbarCore
              {...options}
              callType="function"
              show={options.show}
              style={{ position: allowMultiple ? 'relative' : 'absolute' }}
              teleport={document.querySelector(`.${n('$-snackbar--group')}`)!}
              onClosed={() => {
                this.toggle(options);
              }}
            />
          );
        })}
      </TransitionGroup>
    );
  }
}

const snackbarRootId = 'asap-snackbar-root';
let el = document.getElementById(snackbarRootId);
let originalDefaultPropsValue = { ...defaultProps };
let defaultPropsValue = { ...defaultProps };

function createSnackbar(): TSnackbar {
  const ref = createRef<SnackbarContainer>();
  if (!el) {
    el = document.createElement('div');
    el.id = snackbarRootId;
    document.body.append(el);
    createRoot(el).render(<SnackbarContainer ref={ref} />);
  }

  const Snackbar: TSnackbar = ((
    options: SnackbarOptions | string,
  ): SnackbarHandel => {
    if (ref.current) {
      const snackOptions: SnackbarOptions = normalizeOptions(options);
      const uniqSnackbarOptionItem: UniqSnackbarOptions = {
        key: genUuid(),
        ...defaultPropsValue,
        ...snackOptions,
        show: true,
      };

      ref.current.add(uniqSnackbarOptionItem);
      return {
        clear: () => ref.current?.remove(uniqSnackbarOptionItem),
      };
    }

    throw 'createSnackbar has some error';
  }) as unknown as TSnackbar;

  SNACKBAR_TYPE.forEach((type) => {
    Snackbar[type] = (options: SnackbarOptions | string): SnackbarHandel => {
      if (isPlainObject(options)) {
        options.type = type;
      } else {
        options = {
          content: options,
          type,
        };
      }
      return Snackbar(options);
    };
  });

  Snackbar['allowMultiple'] = (bool: boolean) => {
    ref.current?.allowMultiple(bool);
  };

  Snackbar['resetDefaultOptions'] = () => {
    defaultPropsValue = { ...originalDefaultPropsValue };
  };

  Snackbar['setDefaultOptions'] = (options: SnackbarOptions) => {
    defaultPropsValue = options;
  };

  return Snackbar;
}

const Snackbar = createSnackbar();

export { Snackbar, SnackbarCore as AsapSnackbar };
