import { ThemePalette, ThemeMode, themeModeKeys } from 'types';
import { defaultPalette } from 'core';

const getPropsByTheme = (mode: ThemeMode, palette?: Partial<ThemePalette>) => {
  switch (mode) {
    case themeModeKeys.dark:
      return {
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

  const primaryColor = defaultPalette.primary;
  const secondaryColor = defaultPalette.secondary;
  const tertiaryColor = defaultPalette.tertiary;
  const errorColor = defaultPalette.error;
  const warningColor = defaultPalette.warning;
  const infoColor = defaultPalette.info;
  const successColor = defaultPalette.success;

  const blackColor = defaultPalette.black;
  const whiteColor = defaultPalette.white;
  const darkColor = defaultPalette.dark;
  const lightColor = defaultPalette.light;

  const { text, shape, background, inverted } = getPropsByTheme(mode, palette); // TODO

  return {
    mode,
    text,
    shape,
    background,
    inverted,
    common: {
      black: blackColor,
      white: whiteColor,
      dark: darkColor,
      light: lightColor,
    },
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
    action: {
      active: defaultPalette.active, // TODO #computed-value
      activeOpacity: 0.12, // TODO #computed-value
      hover: defaultPalette.hover, // TODO #computed-value
      hoverOpacity: 0.04, // TODO #computed-value
      disabled: defaultPalette.disabled, // TODO #computed-value
      disabledOpacity: 0.35, // TODO #computed-value
    },
    primary: {
      main: primaryColor,
      dark: '', // TODO #computed-value
      light: '', // TODO #computed-value
      contrast: '', // TODO #computed-value
    },
    secondary: {
      main: secondaryColor,
      dark: '', // TODO #computed-value
      light: '', // TODO #computed-value
      contrast: '', // TODO #computed-value
    },
    tertiary: {
      main: tertiaryColor,
      dark: '', // TODO #computed-value
      light: '', // TODO #computed-value
      contrast: '', // TODO #computed-value
    },
    error: {
      main: errorColor,
      dark: '', // TODO #computed-value
      light: '', // TODO #computed-value
      contrast: '', // TODO #computed-value
    },
    warning: {
      main: warningColor,
      dark: '', // TODO #computed-value
      light: '', // TODO #computed-value
      contrast: '', // TODO #computed-value
    },
    info: {
      main: infoColor,
      dark: '', // TODO #computed-value
      light: '', // TODO #computed-value
      contrast: '', // TODO #computed-value
    },
    success: {
      main: successColor,
      dark: '', // TODO #computed-value
      light: '', // TODO #computed-value
      contrast: '', // TODO #computed-value
    },
  };
};
