import { Theme } from 'types';
import { getThemeComponents } from './components';
import { getThemePalette } from './palette';

// TODO: make this as function

export const theme: Theme = {
  palette: getThemePalette(),
  components: getThemeComponents(),
};
