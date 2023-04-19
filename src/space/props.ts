import { isArray, isNumber, isString } from 'asap-ui/utils/shared';
import { ReactNode } from 'react';

export type SpaceAlign =
  | 'stretch'
  | 'center'
  | 'start'
  | 'end'
  | 'baseline'
  | 'flex-start'
  | 'flex-end';

export type SpaceDirection = 'row' | 'column';

export type SpaceJustify =
  | 'start'
  | 'end'
  | 'center'
  | 'space-around'
  | 'space-between'
  | 'flex-start'
  | 'flex-end';

export type SpaceInternalSize = 'mini' | 'small' | 'normal' | 'large';

export type SpaceSize =
  | SpaceInternalSize
  | number
  | string
  | [number | string, number | string];

export const internalSizeValidator = (size: any) =>
  ['mini', 'small', 'normal', 'large'].includes(size);

export const sizeValidator = (size: any) => {
  return (
    internalSizeValidator(size) ||
    isArray(size) ||
    isNumber(size) ||
    isString(size)
  );
};

export interface SpaceProps {
  children?: ReactNode;
  size?: SpaceSize;
  wrap?: boolean;
  direction?: SpaceDirection;
  justify?: SpaceJustify;
  align?: SpaceAlign;
  inline?: boolean;
}

export const defaultProps: SpaceProps = {
  size: 'normal',
  wrap: true,
  direction: 'row',
  justify: 'flex-start',
  inline: false,
};
