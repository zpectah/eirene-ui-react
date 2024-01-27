import { WithChildren } from '../common';
import { Theme, ThemeMode } from '../theme';
import { GlobalStyles } from './interpolation';

export interface UiContextProps {
  theme: Theme;
  setTheme: (theme: Partial<Theme>) => void;
  setThemeMode: (mode: ThemeMode) => void;
  toggleThemeMode: () => void;
}

export interface UiProviderProps extends WithChildren {
  theme?: Partial<Theme>;
  styles?: GlobalStyles;
  applyCSSReset?: boolean;
  applyGlobalStyles?: boolean;
}
