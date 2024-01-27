import { Theme } from 'types';
import { getThemeComponents } from './components';
import { getThemePalette } from './palette';

// eslint-disable-next-line
export const createTheme = (theme?: Partial<Theme>): Theme => {
  const palette = getThemePalette();
  const components = getThemeComponents();

  return {
    palette,
    components,
  };
};
