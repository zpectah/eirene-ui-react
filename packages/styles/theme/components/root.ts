import { ThemeComponents, CreateThemeComponent } from 'types';
import { createThemeComponentsButton } from './Button';

export const createThemeComponents = (
  props: CreateThemeComponent
): ThemeComponents => {
  return {
    Button: createThemeComponentsButton(props),
  };
};
