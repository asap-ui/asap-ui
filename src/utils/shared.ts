export const isString = (val: unknown): val is string =>
  typeof val === 'string';

export const isBoolean = (val: unknown): val is boolean =>
  typeof val === 'boolean';

export const isNumber = (val: unknown): val is number =>
  typeof val === 'number';

export const isPlainObject = (val: unknown): val is Record<string, any> =>
  Object.prototype.toString.call(val) === '[object Object]';

export const isObject = (val: unknown): val is Record<string, any> =>
  typeof val === 'object' && val !== null;

// eslint-disable-next-line
export const isFunction = (val: unknown): val is Function =>
  typeof val === 'function';

export const isArray = (val: unknown): val is Array<any> => Array.isArray(val);

export const isURL = (val: string | undefined | null) => {
  if (!val) {
    return false;
  }

  return /^(http)|(\.*\/)/.test(val);
};

export const isEmpty = (val: unknown) =>
  val === undefined ||
  val === null ||
  val === '' ||
  (Array.isArray(val) && !val.length);

export const toNumber = (
  val: number | string | boolean | undefined | null,
): number => {
  if (val === null || val === undefined) return 0;

  if (isString(val)) {
    let value = parseFloat(val);
    value = Number.isNaN(value) ? 0 : value;
    return value;
  }

  if (isBoolean(val)) return Number(val);

  return val;
};
