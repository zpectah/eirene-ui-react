import { WithChildren } from '../common';
import { Theme, ThemeMode } from './theme';

export interface UiContextProps {
  theme: Theme;
  setTheme: (theme: Partial<Theme>) => void;
  setThemeMode: (mode: ThemeMode) => void;
  toggleThemeMode: () => void;
}

export interface UiProviderProps extends WithChildren {
  theme?: Partial<Theme>;
  withGlobalStyles?: boolean;
}
