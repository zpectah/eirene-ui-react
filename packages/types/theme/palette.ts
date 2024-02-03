import { themeModeKeys } from '../enums';

export type ThemeMode = keyof typeof themeModeKeys;

export interface ThemePaletteCluster {
  main: string;
  dark: string;
  light: string;
  contrast: string;
}

export interface ThemePalette {
  mode: ThemeMode;
  ratio: {
    activeAlpha: number;
    hoverAlpha: number;
    disabledAlpha: number;
    backgroundDarken: number;
    backgroundLighten: number;
    textSecondary: number;
    textTertiary: number;
    shapeDivider: number;
    shapeBorder: number;
    backgroundSurface: number;
    hoverShadowAlpha: number;
    focusOutlineAlpha: number;
    disabledInvertedAlpha: number;
    loadingLabelAlpha: number;
  };
  common: {
    black: string;
    white: string;
    dark: string;
    light: string;
    grey: string;
    red: string;
    pink: string;
    purple: string;
    deepPurple: string;
    indigo: string;
    blue: string;
    lightBlue: string;
    cyan: string;
    teal: string;
    green: string;
    lightGreen: string;
    lime: string;
    yellow: string;
    amber: string;
    orange: string;
    deepOrange: string;
    brown: string;
    blueGrey: string;
  };
  grey: {
    10: string;
    20: string;
    30: string;
    40: string;
    50: string;
    60: string;
    70: string;
    80: string;
    90: string;
    100: string;
  };
  text: {
    primary: string;
    secondary: string;
    tertiary: string;
    muted: string;
    disabled: string;
  };
  shape: {
    divider: string;
    border: string;
  };
  background: {
    body: string;
    surface: string;
  };
  action: {
    active: string;
    hover: string;
    disabled: string;
  };
  primary: ThemePaletteCluster;
  secondary: ThemePaletteCluster;
  tertiary: ThemePaletteCluster;
  error: ThemePaletteCluster;
  warning: ThemePaletteCluster;
  info: ThemePaletteCluster;
  success: ThemePaletteCluster;
  inverted: ThemePaletteCluster;
  getContrastColor: (primary: string, secondary: string) => string;
  getLightenColor: (color: string, ratio: number) => string;
  getDarkenColor: (color: string, ratio: number) => string;
}
