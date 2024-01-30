import { Theme } from 'types';
import { createThemeBreakpoints } from './breakpoints';
import { createThemeComponents } from './components';
import { createThemePalette } from './palette';
import { createThemeShadows } from './shadows';
import { createThemeShape } from './shape';
import { createThemeSpacing } from './spacing';
import { createThemeTransitions } from './transitions';
import { createThemeTypography } from './typography';
import { createThemeZIndex } from './zIndex';

export const createTheme = (theme?: Partial<Theme>): Theme => {
  const breakpoints = createThemeBreakpoints(theme?.breakpoints);
  const palette = createThemePalette(theme?.palette);
  const shape = createThemeShape(theme?.shape);
  const spacing = createThemeSpacing(theme?.spacing);
  const transitions = createThemeTransitions(theme?.transitions);
  const typography = createThemeTypography(theme?.typography);
  const zIndex = createThemeZIndex(theme?.zIndex);

  const shadows = createThemeShadows(palette, theme?.shadows);
  const components = createThemeComponents({
    palette,
    shape,
    typography,
    transitions,
    spacing,
    components: theme?.components,
  });

  return {
    palette,
    components,
    shape,
    typography,
    breakpoints,
    spacing,
    transitions,
    shadows,
    zIndex,
  };
};
