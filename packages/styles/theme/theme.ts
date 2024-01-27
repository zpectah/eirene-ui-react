import { Theme } from 'types';
import { createThemeComponents } from './components';
import { createThemePalette } from './palette';
import { createThemeShape } from './shape';
import { createThemeTypography } from './typography';

export const createTheme = (theme?: Partial<Theme>): Theme => {
  const breakpoints = {
    /* TODO */
  };
  const spacing = {
    /* TODO */
  };
  const transitions = {
    /* TODO */
  };
  const zIndex = {
    /* TODO */
  };
  const palette = createThemePalette(theme?.palette);
  const shape = createThemeShape(theme?.shape);
  const typography = createThemeTypography(theme?.typography);
  const shadows = {
    /* TODO */
    // palette as dependency
  };
  const components = createThemeComponents({
    palette,
    shape,
    typography,
    components: theme?.components,
  });

  return {
    palette,
    components,
    shape,
    typography,
  };
};
