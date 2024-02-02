import {
  DeepPartial,
  breakpointKeys,
  ThemeBreakpoints,
  BreakpointKeys,
} from 'types';
import { BREAKPOINTS, BREAKPOINTS_UNIT } from 'core';

export const createThemeBreakpoints = (
  breakpoints?: DeepPartial<ThemeBreakpoints>
): ThemeBreakpoints => {
  const values = {
    xs: breakpoints?.values?.xs || BREAKPOINTS.xs,
    sm: breakpoints?.values?.sm || BREAKPOINTS.sm,
    md: breakpoints?.values?.md || BREAKPOINTS.md,
    lg: breakpoints?.values?.lg || BREAKPOINTS.lg,
    xl: breakpoints?.values?.xl || BREAKPOINTS.xl,
    xxl: breakpoints?.values?.xxl || BREAKPOINTS.xxl,
  };
  const unit = breakpoints?.unit || BREAKPOINTS_UNIT;

  const up = (min: BreakpointKeys) =>
    `@media (min-width: ${values[min]}${unit})`;
  const down = (max: BreakpointKeys) =>
    `@media (max-width: ${values[max]}${unit})`;
  const between = (min: BreakpointKeys, max: BreakpointKeys) =>
    `@media (min-width: ${values[min]}${unit}) and (max-width: ${values[max]}${unit})`;
  const only = (key: BreakpointKeys) => {
    let min, max;
    switch (key) {
      case breakpointKeys.xs:
        min = `${values.xs}${unit}`;
        max = `${values.sm - 1}${unit}`;
        break;

      case breakpointKeys.sm:
        min = `${values.sm}${unit}`;
        max = `${values.md - 1}${unit}`;
        break;

      case breakpointKeys.md:
        min = `${values.md}${unit}`;
        max = `${values.lg - 1}${unit}`;
        break;

      case breakpointKeys.lg:
        min = `${values.lg}${unit}`;
        max = `${values.xl - 1}${unit}`;
        break;

      case breakpointKeys.xl:
        min = `${values.xl}${unit}`;
        max = `${values.xxl - 1}${unit}`;
        break;

      case breakpointKeys.xxl:
        min = `${values.xxl}${unit}`;
        max = '100%';
        break;
    }

    return `@media (min-width: ${min}) and (max-width: ${max})`;
  };

  return {
    values,
    unit,
    up,
    down,
    between,
    only,
  };
};
