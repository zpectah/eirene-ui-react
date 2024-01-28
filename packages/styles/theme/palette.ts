import Color from 'color';
import { ThemePalette, ThemeMode, themeModeKeys } from 'types';
import { defaultPalette } from 'core';

const getPropsByTheme = (mode: ThemeMode, palette?: Partial<ThemePalette>) => {
  const coefficients = {
    textSecondary: 25,
    textTertiary: 35,
    shapeDivider: 65,
    shapeBorder: 75,
    backgroundSurface: 0.025,
  };

  switch (mode) {
    case themeModeKeys.dark:
      const textPrimaryDark = palette?.text?.primary || defaultPalette.white;
      const backgroundBodyDark =
        palette?.background?.body || defaultPalette.dark;

      return {
        text: {
          primary: textPrimaryDark,
          secondary:
            palette?.text?.secondary ||
            Color(textPrimaryDark).darken(25).toString(),
          tertiary:
            palette?.text?.tertiary ||
            Color(textPrimaryDark).darken(50).toString(),
          disabled: palette?.text?.disabled || defaultPalette.disabled,
        },
        shape: {
          divider:
            palette?.shape?.divider ||
            Color(textPrimaryDark).darken(65).toString(),
          border:
            palette?.shape?.border ||
            Color(textPrimaryDark).darken(75).toString(),
        },
        background: {
          body: backgroundBodyDark,
          surface:
            palette?.background?.surface ||
            Color(backgroundBodyDark).lighten(0.025).toString(),
        },
        inverted: {
          main: backgroundBodyDark,
          dark:
            palette?.inverted?.dark ||
            Color(backgroundBodyDark).darken(0.25).toString(),
          light:
            palette?.inverted?.light ||
            Color(backgroundBodyDark).lighten(0.25).toString(),
          contrast: palette?.inverted?.contrast || defaultPalette.light,
        },
      };

    case themeModeKeys.light:
    default:
      const textPrimaryLight = palette?.text?.primary || defaultPalette.black;
      const backgroundBodyLight =
        palette?.background?.body || defaultPalette.light;

      return {
        text: {
          primary: textPrimaryLight,
          secondary:
            palette?.text?.secondary ||
            Color(textPrimaryLight).lighten(25).toString(),
          tertiary:
            palette?.text?.tertiary ||
            Color(textPrimaryLight).lighten(50).toString(),
          disabled: palette?.text?.disabled || defaultPalette.disabled,
        },
        shape: {
          divider:
            palette?.shape?.divider ||
            Color(textPrimaryLight).lighten(65).toString(),
          border:
            palette?.shape?.border ||
            Color(textPrimaryLight).lighten(75).toString(),
        },
        background: {
          body: backgroundBodyLight,
          surface:
            palette?.background?.surface ||
            Color(backgroundBodyLight).darken(0.025).toString(),
        },
        inverted: {
          main: backgroundBodyLight,
          dark:
            palette?.inverted?.dark ||
            Color(backgroundBodyLight).darken(0.25).toString(),
          light:
            palette?.inverted?.light ||
            Color(backgroundBodyLight).lighten(0.25).toString(),
          contrast: palette?.inverted?.contrast || defaultPalette.dark,
        },
      };
  }
};

export const createThemePalette = (
  palette?: Partial<ThemePalette>
): ThemePalette => {
  const mode = palette?.mode || themeModeKeys.light;

  const primaryColorMain = palette?.primary?.main || defaultPalette.primary;
  const secondaryColorMain =
    palette?.secondary?.main || defaultPalette.secondary;
  const tertiaryColorMain = palette?.tertiary?.main || defaultPalette.tertiary;
  const errorColorMain = palette?.error?.main || defaultPalette.error;
  const warningColorMain = palette?.warning?.main || defaultPalette.warning;
  const infoColorMain = palette?.info?.main || defaultPalette.info;
  const successColorMain = palette?.success?.main || defaultPalette.success;

  const actionActiveOpacity = palette?.action?.activeOpacity || 0.12;
  const actionHoverOpacity = palette?.action?.hoverOpacity || 0.25;
  const actionDisabledOpacity = palette?.action?.disabledOpacity || 0.35;
  const actionActive = palette?.action?.active || defaultPalette.active;
  const actionHover = palette?.action?.hover || defaultPalette.hover;
  const actionDisabled = palette?.action?.disabled || defaultPalette.disabled;

  const greyColorBase =
    (palette?.grey && palette?.grey['100']) || defaultPalette.grey;

  const common = {
    black: palette?.common?.black || defaultPalette.black,
    white: palette?.common?.white || defaultPalette.white,
    dark: palette?.common?.dark || defaultPalette.dark,
    light: palette?.common?.light || defaultPalette.light,
  };
  const grey = {
    5: Color(greyColorBase).lighten(0.95).toString(),
    10: Color(greyColorBase).lighten(0.9).toString(),
    20: Color(greyColorBase).lighten(0.8).toString(),
    30: Color(greyColorBase).lighten(0.7).toString(),
    40: Color(greyColorBase).lighten(0.6).toString(),
    50: Color(greyColorBase).lighten(0.5).toString(),
    60: Color(greyColorBase).lighten(0.4).toString(),
    70: Color(greyColorBase).lighten(0.3).toString(),
    80: Color(greyColorBase).lighten(0.2).toString(),
    90: Color(greyColorBase).lighten(0.1).toString(),
    100: greyColorBase,
  };
  const action = {
    active: Color(actionActive).alpha(actionActiveOpacity).toString(),
    activeOpacity: actionActiveOpacity,
    hover: Color(actionHover).alpha(actionHoverOpacity).toString(),
    hoverOpacity: actionHoverOpacity,
    disabled: Color(actionDisabled).alpha(actionDisabledOpacity).toString(),
    disabledOpacity: actionDisabledOpacity,
  };

  const themePrimary = {
    mode,
    common,
    action,
  };

  const themeSecondary = getPropsByTheme(mode, palette);

  return {
    ...themePrimary,
    ...themeSecondary,
    grey,
    primary: {
      main: primaryColorMain,
      dark:
        palette?.primary?.dark ||
        Color(primaryColorMain).darken(0.25).toString(),
      light:
        palette?.primary?.light ||
        Color(primaryColorMain).lighten(0.25).toString(),
      contrast: palette?.primary?.contrast || defaultPalette.white,
    },
    secondary: {
      main: secondaryColorMain,
      dark:
        palette?.secondary?.dark ||
        Color(secondaryColorMain).darken(0.25).toString(),
      light:
        palette?.secondary?.light ||
        Color(secondaryColorMain).lighten(0.25).toString(),
      contrast: palette?.secondary?.contrast || defaultPalette.white,
    },
    tertiary: {
      main: tertiaryColorMain,
      dark:
        palette?.tertiary?.dark ||
        Color(tertiaryColorMain).darken(0.25).toString(),
      light:
        palette?.tertiary?.light ||
        Color(tertiaryColorMain).lighten(0.25).toString(),
      contrast: palette?.tertiary?.contrast || defaultPalette.white,
    },
    error: {
      main: errorColorMain,
      dark:
        palette?.error?.dark || Color(errorColorMain).darken(0.25).toString(),
      light:
        palette?.error?.light || Color(errorColorMain).lighten(0.25).toString(),
      contrast: palette?.error?.contrast || defaultPalette.white,
    },
    warning: {
      main: warningColorMain,
      dark:
        palette?.warning?.dark ||
        Color(warningColorMain).darken(0.25).toString(),
      light:
        palette?.warning?.light ||
        Color(warningColorMain).lighten(0.25).toString(),
      contrast: palette?.warning?.contrast || defaultPalette.white,
    },
    info: {
      main: infoColorMain,
      dark: palette?.info?.dark || Color(infoColorMain).darken(0.25).toString(),
      light:
        palette?.info?.light || Color(infoColorMain).lighten(0.25).toString(),
      contrast: palette?.info?.contrast || defaultPalette.white,
    },
    success: {
      main: successColorMain,
      dark:
        palette?.success?.dark ||
        Color(successColorMain).darken(0.25).toString(),
      light:
        palette?.success?.light ||
        Color(successColorMain).lighten(0.25).toString(),
      contrast: palette?.success?.contrast || defaultPalette.white,
    },
  };
};
