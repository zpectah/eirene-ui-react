import { UiContextProps } from 'types';
import { defaultTheme } from '../theme';

export const defaultUiContext: UiContextProps = {
  theme: defaultTheme,
  setTheme: () => {},
  setThemeMode: () => {},
};
