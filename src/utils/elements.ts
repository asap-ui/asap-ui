import { isNumber, isString, toNumber } from './shared';

// example 1rem
export const isRem = (value: unknown): value is string =>
  isString(value) && value.endsWith('rem');

// e.g. 1 || 1px
export const isPx = (value: unknown): value is string | number =>
  (isString(value) && value.endsWith('px')) || isNumber(value);

// e.g. 1%
export const isPercent = (value: unknown): value is string =>
  isString(value) && value.endsWith('%');

// e.g. 1vw
export const isVw = (value: unknown): value is string =>
  isString(value) && value.endsWith('vw');

// e.g. 1vh
export const isVh = (value: unknown): value is string =>
  isString(value) && value.endsWith('vh');

// e.g. calc(1px + 1px)
export const isCalc = (value: unknown): value is string =>
  isString(value) && value.startsWith('calc(');

// e.g. var(--color-primary)
export const isVar = (value: unknown): value is string =>
  isString(value) && value.startsWith('var(');

// e.g. return 1
export const toPxNum = (value: unknown): number => {
  if (isNumber(value)) {
    return value;
  }

  if (isPx(value)) {
    return +(value as string).replace('px', '');
  }

  if (isVw(value)) {
    return (+(value as string).replace('vw', '') * window.innerWidth) / 100;
  }

  if (isVh(value)) {
    return (+(value as string).replace('vh', '') * window.innerHeight) / 100;
  }

  if (isRem(value)) {
    const num = +(value as string).replace('rem', '');
    const rootFontSize = window.getComputedStyle(
      document.documentElement,
    ).fontSize;

    return num * parseFloat(rootFontSize);
  }

  if (isString(value)) {
    return toNumber(value);
  }

  // % and other
  return 0;
};
// e.g. return 1px 1% 1vw 1vh 1rem null var(--color-primary) calc(1px + 1px)
export const toSizeUnit = (value: unknown) => {
  if (value === null || value === undefined) {
    return undefined;
  }

  if (
    isPercent(value) ||
    isVw(value) ||
    isVh(value) ||
    isRem(value) ||
    isCalc(value) ||
    isVar(value)
  ) {
    return value;
  }

  return `${toPxNum(value)}px`;
};

export const multiplySizeUnit = (value: unknown, quantity = 1) => {
  if (value === null || value === undefined) {
    return undefined;
  }

  const legalSize = toSizeUnit(value) as string;

  const unit = legalSize.match(/(vh|%|rem|px|vw)$/)![0];

  return `${parseFloat(legalSize) * quantity}${unit}`;
};

export function padStartFlex(style: string | undefined) {
  return style === 'start' || style === 'end' ? `flex-${style}` : style;
}
