import { JssPropertyValue } from './jss';

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
export type ThemePaletteCluster = {
  main: string;
  light: string;
  dark: string;
  text: string;
};

export interface ThemeBreakpoints {}
export interface ThemeComponents {
  ButtonBase: {
    root: JssPropertyValue;
  };
  Button: {
    root: JssPropertyValue;
    startIcon: JssPropertyValue;
    endIcon: JssPropertyValue;
    loadingIcon: JssPropertyValue;
  };
}
export interface ThemePalette {
  mode: ThemeMode;
  common: {
    black: string;
    white: string;
  };

  primary: ThemePaletteCluster;
  secondary: ThemePaletteCluster;
  tertiary: ThemePaletteCluster;
  error: ThemePaletteCluster;
  warning: ThemePaletteCluster;
  info: ThemePaletteCluster;
  success: ThemePaletteCluster;
  inverted: ThemePaletteCluster;

  // TODO - typography
  // TODO - background
  // TODO - border / divider

  action: {
    hover: string;
    hoverOpacity: number;
    disabled: string;
    disabledOpacity: number;
    active: string;
    activeOpacity: number;
  };
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
