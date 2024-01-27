import { defaultPalette } from 'core';
import { ThemePalette, themeModeKeys } from 'types';

export const getThemePalette = (
  // eslint-disable-next-line
  palette?: Partial<ThemePalette>
): ThemePalette => {
  return {
    mode: themeModeKeys.light,
    common: {
      black: defaultPalette.black,
      white: defaultPalette.white,
      dark: defaultPalette.dark,
      light: defaultPalette.light,
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
    text: {
      // TODO #depends on mode
      primary: '',
      secondary: '',
      tertiary: '',
      disabled: '',
    },
    shape: {
      // TODO #depends on mode
      divider: '',
      border: '',
    },
    background: {
      // TODO #depends on mode
      body: '',
      surface: '',
    },
    action: {
      active: '', // TODO #computed-value
      activeOpacity: 0.12, // TODO #computed-value
      hover: '', // TODO #computed-value
      hoverOpacity: 0.04, // TODO #computed-value
      disabled: '', // TODO #computed-value
      disabledOpacity: 0.35, // TODO #computed-value
    },
    primary: {
      main: defaultPalette.primary,
      dark: '', // TODO #computed-value
      light: '', // TODO #computed-value
      contrast: '', // TODO #computed-value
    },
    secondary: {
      main: defaultPalette.secondary,
      dark: '', // TODO #computed-value
      light: '', // TODO #computed-value
      contrast: '', // TODO #computed-value
    },
    tertiary: {
      main: defaultPalette.tertiary,
      dark: '', // TODO #computed-value
      light: '', // TODO #computed-value
      contrast: '', // TODO #computed-value
    },
    error: {
      main: defaultPalette.error,
      dark: '', // TODO #computed-value
      light: '', // TODO #computed-value
      contrast: '', // TODO #computed-value
    },
    warning: {
      main: defaultPalette.warning,
      dark: '', // TODO #computed-value
      light: '', // TODO #computed-value
      contrast: '', // TODO #computed-value
    },
    info: {
      main: defaultPalette.info,
      dark: '', // TODO #computed-value
      light: '', // TODO #computed-value
      contrast: '', // TODO #computed-value
    },
    success: {
      main: defaultPalette.success,
      dark: '', // TODO #computed-value
      light: '', // TODO #computed-value
      contrast: '', // TODO #computed-value
    },
    inverted: {
      main: '', // TODO #depends on mode
      dark: '', // TODO #depends on mode
      light: '', // TODO #depends on mode
      contrast: '', // TODO #depends on mode
    },
  };
};
