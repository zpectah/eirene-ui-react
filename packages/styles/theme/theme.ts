import { Theme } from 'types';
import { createThemeComponents } from './components';
import { createThemePalette } from './palette';
import { createThemeShape } from './shape';
import { createThemeTypography } from './typography';

export const createTheme = (theme?: Partial<Theme>): Theme => {
  const palette = createThemePalette(theme?.palette);
  const shape = createThemeShape(theme?.shape);
  const typography = createThemeTypography(theme?.typography);
  const components = createThemeComponents({ palette, shape, typography });

  return {
    palette,
    components,
    shape,
    typography,
  };
};
