import Color from 'color';
import { DeepPartial, ThemePalette, themeModeKeys } from 'types';
import { PALETTE } from 'core';
import { getRatio, getThemePaletteProps } from '../utils';

export const createThemePalette = (palette?: DeepPartial<ThemePalette>): ThemePalette => {
  const mode = palette?.mode || themeModeKeys.light;
  const primaryColorMain = palette?.primary?.main || PALETTE.primary;
  const secondaryColorMain = palette?.secondary?.main || PALETTE.secondary;
  const tertiaryColorMain = palette?.tertiary?.main || PALETTE.tertiary;
  const errorColorMain = palette?.error?.main || PALETTE.error;
  const warningColorMain = palette?.warning?.main || PALETTE.warning;
  const infoColorMain = palette?.info?.main || PALETTE.info;
  const successColorMain = palette?.success?.main || PALETTE.success;
  const lightColorMain = palette?.success?.light || PALETTE.light;
  const darkColorMain = palette?.success?.dark || PALETTE.dark;

  const utils = {
    getContrastColor: (primary: string, secondary: string) => Color(primary).contrast(Color(secondary)).toString(),
    getLightenColor: (color: string, ratio: number) => Color(color).lighten(ratio).toString(),
    getDarkenColor: (color: string, ratio: number) => Color(color).darken(ratio).toString(),
  };

  const common = {
    black: palette?.common?.black || PALETTE.black,
    white: palette?.common?.white || PALETTE.white,
    dark: palette?.common?.dark || PALETTE.dark,
    light: palette?.common?.light || PALETTE.light,
    grey: palette?.common?.grey || PALETTE.grey,
    red: palette?.common?.red || PALETTE.red,
    pink: palette?.common?.pink || PALETTE.pink,
    purple: palette?.common?.purple || PALETTE.purple,
    deepPurple: palette?.common?.deepPurple || PALETTE.deepPurple,
    indigo: palette?.common?.indigo || PALETTE.indigo,
    blue: palette?.common?.blue || PALETTE.blue,
    lightBlue: palette?.common?.lightBlue || PALETTE.lightBlue,
    cyan: palette?.common?.cyan || PALETTE.cyan,
    teal: palette?.common?.teal || PALETTE.teal,
    green: palette?.common?.green || PALETTE.green,
    lightGreen: palette?.common?.lightGreen || PALETTE.lightGreen,
    lime: palette?.common?.lime || PALETTE.lime,
    yellow: palette?.common?.yellow || PALETTE.yellow,
    amber: palette?.common?.amber || PALETTE.amber,
    orange: palette?.common?.orange || PALETTE.orange,
    deepOrange: palette?.common?.deepOrange || PALETTE.deepOrange,
    brown: palette?.common?.brown || PALETTE.brown,
    blueGrey: palette?.common?.blueGrey || PALETTE.blueGrey,
  };
  const grey = {
    10: Color(common.grey).lighten(0.9).toString(),
    20: Color(common.grey).lighten(0.8).toString(),
    30: Color(common.grey).lighten(0.7).toString(),
    40: Color(common.grey).lighten(0.6).toString(),
    50: Color(common.grey).lighten(0.5).toString(),
    60: Color(common.grey).lighten(0.4).toString(),
    70: Color(common.grey).lighten(0.3).toString(),
    80: Color(common.grey).lighten(0.2).toString(),
    90: Color(common.grey).lighten(0.1).toString(),
    100: common.grey,
  };

  const ratio = getRatio(palette?.ratio);

  const _action = {
    active: palette?.action?.active || primaryColorMain,
    hover: palette?.action?.hover || PALETTE.hover,
    disabled: palette?.action?.disabled || PALETTE.muted,
  };
  const action = {
    active: Color(_action.active).alpha(ratio.activeAlpha).toString(),
    hover: Color(_action.hover).alpha(ratio.hoverAlpha).toString(),
    disabled: Color(_action.disabled).alpha(ratio.disabledAlpha).toString(),
  };

  const themePrimary = {
    mode,
    common,
    action,
    ratio,
    grey,
  };
  const themeSecondary = getThemePaletteProps(mode, {
    ...palette,
    ...themePrimary,
  });

  return {
    ...themePrimary,
    ...themeSecondary,
    ...utils,
    primary: {
      main: primaryColorMain,
      dark: palette?.primary?.dark || Color(primaryColorMain).darken(ratio.backgroundDarken).toString(),
      light: palette?.primary?.light || Color(primaryColorMain).lighten(ratio.backgroundLighten).toString(),
      contrast: palette?.primary?.contrast || PALETTE.white,
    },
    secondary: {
      main: secondaryColorMain,
      dark: palette?.secondary?.dark || Color(secondaryColorMain).darken(ratio.backgroundDarken).toString(),
      light: palette?.secondary?.light || Color(secondaryColorMain).lighten(ratio.backgroundLighten).toString(),
      contrast: palette?.secondary?.contrast || PALETTE.white,
    },
    tertiary: {
      main: tertiaryColorMain,
      dark: palette?.tertiary?.dark || Color(tertiaryColorMain).darken(ratio.backgroundDarken).toString(),
      light: palette?.tertiary?.light || Color(tertiaryColorMain).lighten(ratio.backgroundLighten).toString(),
      contrast: palette?.tertiary?.contrast || PALETTE.white,
    },
    error: {
      main: errorColorMain,
      dark: palette?.error?.dark || Color(errorColorMain).darken(ratio.backgroundDarken).toString(),
      light: palette?.error?.light || Color(errorColorMain).lighten(ratio.backgroundLighten).toString(),
      contrast: palette?.error?.contrast || PALETTE.white,
    },
    warning: {
      main: warningColorMain,
      dark: palette?.warning?.dark || Color(warningColorMain).darken(ratio.backgroundDarken).toString(),
      light: palette?.warning?.light || Color(warningColorMain).lighten(ratio.backgroundLighten).toString(),
      contrast: palette?.warning?.contrast || PALETTE.white,
    },
    info: {
      main: infoColorMain,
      dark: palette?.info?.dark || Color(infoColorMain).darken(ratio.backgroundDarken).toString(),
      light: palette?.info?.light || Color(infoColorMain).lighten(ratio.backgroundLighten).toString(),
      contrast: palette?.info?.contrast || PALETTE.white,
    },
    success: {
      main: successColorMain,
      dark: palette?.success?.dark || Color(successColorMain).darken(ratio.backgroundDarken).toString(),
      light: palette?.success?.light || Color(successColorMain).lighten(ratio.backgroundLighten).toString(),
      contrast: palette?.success?.contrast || PALETTE.white,
    },
    light: {
      main: lightColorMain,
      dark: palette?.light?.dark || Color(lightColorMain).darken(ratio.backgroundDarken).toString(),
      light: palette?.light?.light || Color(lightColorMain).lighten(ratio.backgroundLighten).toString(),
      contrast: palette?.light?.contrast || PALETTE.dark,
    },
    dark: {
      main: darkColorMain,
      dark: palette?.dark?.dark || Color(darkColorMain).darken(ratio.backgroundDarken).toString(),
      light: palette?.dark?.light || Color(darkColorMain).lighten(ratio.backgroundLighten).toString(),
      contrast: palette?.dark?.contrast || PALETTE.light,
    },
  };
};
