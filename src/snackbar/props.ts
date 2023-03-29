import { CSSProperties } from 'react';
import { LoadingSize, LoadingType } from '../loading/props';

export type SnackbarType = 'success' | 'warning' | 'info' | 'error' | 'loading';

export type SnackbarPosition = 'top' | 'center' | 'bottom';

export type SnackbarProps = {
  callType?: 'component' | 'function';
  style?: CSSProperties;
  type?: SnackbarType;
  position?: SnackbarPosition;
  duration?: number;
  timeout?: number;
  action?: string | React.ReactElement;
  content?: string | React.ReactElement;
  contentClass?: string | undefined;
  vertical?: boolean;
  loadingType?: LoadingType;
  loadingSize?: LoadingSize;
  loadingColor?: string;
  loadingRadius?: string | number;
  lockScroll?: boolean;
  show?: boolean;
  forbidClick?: boolean;
  teleport?: Element;
  onOpen?: () => void;
  onOpened?: () => void;
  onClose?: () => void;
  onClosed?: () => void;
};

export type SnackbarOptions = Omit<
  SnackbarProps,
  'callType' | 'teleport' | 'show'
>;

export type SnackbarHandel = {
  clear: () => void;
};

export type Snackbar = {
  (options?: SnackbarOptions | string): SnackbarHandel;

  allowMultiple(bool: boolean): void;

  success(options: SnackbarOptions | string): SnackbarHandel;

  warning(options: SnackbarOptions | string): SnackbarHandel;

  info(options: SnackbarOptions | string): SnackbarHandel;

  error(options: SnackbarOptions | string): SnackbarHandel;

  loading(options: SnackbarOptions | string): SnackbarHandel;

  clear(): void;

  setDefaultOptions(options: SnackbarOptions): void;

  resetDefaultOptions(): void;

  [key: string]: any;
};

export const defaultProps: SnackbarProps = {
  style: {},
  type: undefined,
  content: '',
  position: 'top',
  duration: 3000,
  timeout: 300,
  vertical: false,
  contentClass: undefined,
  loadingType: 'circle',
  loadingSize: 'normal',
  lockScroll: false,
  show: false,
  teleport: document.body,
  forbidClick: false,
  onOpen: () => {},
  onOpened: () => {},
  onClose: () => {},
  onClosed: () => {},
};
