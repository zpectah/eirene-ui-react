import { ThemeBreakpoints, BreakpointKeys } from 'types';
import { DEFAULT_BREAKPOINTS } from 'core';

export const createThemeBreakpoints = (
  breakpoints?: Partial<ThemeBreakpoints>
): ThemeBreakpoints => {
  const values = {
    xs: breakpoints?.values?.xs || DEFAULT_BREAKPOINTS.xs,
    sm: breakpoints?.values?.sm || DEFAULT_BREAKPOINTS.sm,
    md: breakpoints?.values?.md || DEFAULT_BREAKPOINTS.md,
    lg: breakpoints?.values?.lg || DEFAULT_BREAKPOINTS.lg,
    xl: breakpoints?.values?.xl || DEFAULT_BREAKPOINTS.xl,
    xxl: breakpoints?.values?.xxl || DEFAULT_BREAKPOINTS.xxl,
  };
  const unit = 'px';

  const upMixinHandler = (min: BreakpointKeys) =>
    `@media (min-width: ${values[min]}${unit})`;
  const downMixinHandler = (max: BreakpointKeys) =>
    `@media (max-width: ${values[max]}${unit})`;
  const betweenMixinHandler = (min: BreakpointKeys, max: BreakpointKeys) =>
    `@media (min-width: ${values[min]}${unit}) and (max-width: ${values[max]}${unit})`;
  const onlyMixinHandler = (key: BreakpointKeys) => {
    let min, max;
    switch (key) {
      case 'xs':
        min = `${values.xs}${unit}`;
        max = `${values.sm - 1}${unit}`;
        break;

      case 'sm':
        min = `${values.sm}${unit}`;
        max = `${values.md - 1}${unit}`;
        break;

      case 'md':
        min = `${values.md}${unit}`;
        max = `${values.lg - 1}${unit}`;
        break;

      case 'lg':
        min = `${values.lg}${unit}`;
        max = `${values.xl - 1}${unit}`;
        break;

      case 'xl':
        min = `${values.xl}${unit}`;
        max = `${values.xxl - 1}${unit}`;
        break;

      case 'xxl':
        min = `${values.xxl}${unit}`;
        max = '100%';
        break;
    }

    return `@media (min-width: ${min}) and (max-width: ${max})`;
  };

  return {
    values,
    unit,
    up: upMixinHandler,
    down: downMixinHandler,
    between: betweenMixinHandler,
    only: onlyMixinHandler,
  };
};
