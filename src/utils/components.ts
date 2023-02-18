type ClassName = string | undefined | null;
type Classes = (ClassName | [any, ClassName, ClassName?])[];
export function createNameSpace(name: string) {
  const nameSpace = 'asap';
  const componentName = `${nameSpace}-${name}`;

  const createBem = (suffix?: string) => {
    if (!suffix) return componentName;

    if (suffix[0] === '$') {
      return suffix.replace('$', nameSpace);
    }
    return suffix.startsWith('--')
      ? `${componentName}${suffix}`
      : `${componentName}__${suffix}`;
  };

  const classes = (...classes: Classes) => {
    return classes
      .map((className) => {
        if (Array.isArray(className)) {
          const [condition, character, optional = null] = className;
          return condition ? character : optional;
        }
        return className;
      })
      .join(' ');
  };

  return {
    n: createBem,
    classes,
  };
}
