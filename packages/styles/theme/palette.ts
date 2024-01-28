import Color from 'color';
import { ThemePalette, ThemeMode, themeModeKeys } from 'types';
import { defaultPalette } from 'core';

const getPropsByTheme = (mode: ThemeMode, palette?: Partial<ThemePalette>) => {
  switch (mode) {
    case themeModeKeys.dark:
      return {
        grey: {
          5: '',
          10: '',
          20: '',
          30: '',
          40: '',
          50: '',
          60: '',
          70: '',
          80: '',
          90: '',
          100: '',
        },
        text: {
          primary: 'hsl(0, 0.0%, 99.2%)',
          secondary: '',
          tertiary: '',
          disabled: '',
        },
        shape: {
          divider: '',
          border: '',
        },
        background: {
          body: 'hsl(0, 0.0%, 0.8%)',
          surface: '',
        },
        inverted: {
          main: '', // TODO #depends on mode
          dark: '', // TODO #depends on mode
          light: '', // TODO #depends on mode
          contrast: '', // TODO #depends on mode
        },
      };

    case themeModeKeys.light:
    default:
      return {
        grey: {
          5: '',
          10: '',
          20: '',
          30: '',
          40: '',
          50: '',
          60: '',
          70: '',
          80: '',
          90: '',
          100: '',
        },
        text: {
          primary: 'hsl(0, 0.0%, 0.8%)',
          secondary: '',
          tertiary: '',
          disabled: '',
        },
        shape: {
          divider: '',
          border: '',
        },
        background: {
          body: 'hsl(0, 0.0%, 99.2%)',
          surface: '',
        },
        inverted: {
          main: '', // TODO #depends on mode
          dark: '', // TODO #depends on mode
          light: '', // TODO #depends on mode
          contrast: '', // TODO #depends on mode
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

  const blackColor = palette?.common?.black || defaultPalette.black;
  const whiteColor = palette?.common?.white || defaultPalette.white;
  const darkColor = palette?.common?.dark || defaultPalette.dark;
  const lightColor = palette?.common?.light || defaultPalette.light;

  const actionActiveOpacity = palette?.action?.activeOpacity || 0.12;
  const actionHoverOpacity = palette?.action?.hoverOpacity || 0.25;
  const actionDisabledOpacity = palette?.action?.disabledOpacity || 0.35;

  const actionActive = palette?.action?.active || defaultPalette.active;
  const actionHover = palette?.action?.hover || defaultPalette.hover;
  const actionDisabled = palette?.action?.disabled || defaultPalette.disabled;

  // TODO - Sem se musí dostat už skoro hotový objekt !!!
  // TODO - Takže je potřeba poskládal ještě před
  const { text, shape, background, inverted, grey } = getPropsByTheme(
    mode,
    palette
  ); // TODO

  return {
    mode,
    text,
    shape,
    background,
    grey,
    inverted,
    common: {
      black: blackColor,
      white: whiteColor,
      dark: darkColor,
      light: lightColor,
    },
    action: {
      active: Color(actionActive).alpha(actionActiveOpacity).toString(),
      activeOpacity: actionActiveOpacity,
      hover: Color(actionHover).alpha(actionHoverOpacity).toString(),
      hoverOpacity: actionHoverOpacity,
      disabled: Color(actionDisabled).alpha(actionDisabledOpacity).toString(),
      disabledOpacity: actionDisabledOpacity,
    },
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
