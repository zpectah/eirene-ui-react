import { ThemeComponents } from 'types';
import { getThemeComponentsButton } from './Button';

export const getThemeComponents = (): ThemeComponents => {
  return {
    Button: getThemeComponentsButton(),
  };
};
