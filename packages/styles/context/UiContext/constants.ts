import { UiContextProps } from 'types';
import { theme } from '../../theme';

export const defaultUiContext: UiContextProps = {
  theme: theme,
  setTheme: () => {},
  setThemeMode: () => {},
  toggleThemeMode: () => {},
};
