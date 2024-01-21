import { WithChildren } from '../common';

export enum themeDirectionKeys {
  ltr = 'ltr',
  rtl = 'rtl',
}
export enum themeModeKeys {
  light = 'light',
  dark = 'dark',
}

export type ThemeMode = keyof typeof themeModeKeys;
export type ThemeDirection = keyof typeof themeDirectionKeys;

export interface ThemeBreakpoints {}
export interface ThemeComponents {}
export interface ThemePalette {
  mode: ThemeMode;
}
export interface ThemeShapes {}
export interface ThemeSpacing {}
export interface ThemeTransitions {}
export interface ThemeTypography {
  direction: ThemeDirection;
}
export interface ThemeZIndex {}

export interface Theme {
  breakpoints: ThemeBreakpoints;
  components: ThemeComponents;
  palette: ThemePalette;
  shapes: ThemeShapes;
  spacing: ThemeSpacing;
  typography: ThemeTypography;
  transitions: ThemeTransitions;
  zIndex: ThemeZIndex;
}

export interface UiContextProps {
  theme: Theme;
  setTheme: (theme: Partial<Theme>) => void;
  setThemeMode: (mode: ThemeMode) => void;
}

export interface UiProviderProps extends WithChildren {
  theme?: Partial<Theme>;
}
