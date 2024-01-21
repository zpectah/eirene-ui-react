import { JssStyle, MinimalObservable, Styles } from 'jss';

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

type Func<P, T, R> = T extends undefined
  ? (data: P) => R
  : (data: P & { theme: T }) => R;
export type JssPropertyValue<
  Name extends string | number | symbol = string,
  Props = unknown,
  Theme = undefined,
> = Record<
  Name,
  | JssStyle<Props, Theme>
  | Array<JssStyle<Props, Theme>>
  | string
  | number
  | Func<
      Props,
      Theme,
      JssStyle<undefined, undefined> | string | null | undefined
    >
  | MinimalObservable<JssStyle | string | null | undefined>
>;

export interface ThemeBreakpoints {}
export interface ThemeComponents {
  ButtonBase: {
    root: JssPropertyValue;
  };
  Button: {
    root: JssPropertyValue;
    startIcon: JssPropertyValue;
    endIcon: JssPropertyValue;
  };
}
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
