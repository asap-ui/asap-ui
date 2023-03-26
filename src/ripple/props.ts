export interface RippleProps {
  color?: string;
  disabled?: boolean;
  touchmoveForbid?: boolean;
  children: React.ReactElement;
}

export interface RippleStyles {
  x: number;
  y: number;
  centerX: number;
  centerY: number;
  size: number;
}

export interface RippleOptions {
  removeRipple: any;
  touchmoveForbid: boolean;
  color?: string;
  disabled?: boolean;
  tasker?: number | null;
}

export interface RippleHTMLElement extends HTMLElement {
  _ripple?: RippleOptions;
}
