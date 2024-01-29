import Color from 'color';
import { ThemePalette, ThemeMode, themeModeKeys } from 'types';
import { DEFAULT_PALETTE, PALETTE_RATIO } from 'core';

const getPropsByTheme = (mode: ThemeMode, palette?: Partial<ThemePalette>) => {
  let textPrimaryDark,
    backgroundBodyDark,
    textPrimaryLight,
    backgroundBodyLight;
  const ratio = {
    textSecondary: palette?.ratio?.textSecondary || PALETTE_RATIO.textSecondary,
    textTertiary: palette?.ratio?.textTertiary || PALETTE_RATIO.textTertiary,
    shapeDivider: palette?.ratio?.shapeDivider || PALETTE_RATIO.shapeDivider,
    shapeBorder: palette?.ratio?.shapeBorder || PALETTE_RATIO.shapeBorder,
    backgroundSurface:
      palette?.ratio?.backgroundSurface || PALETTE_RATIO.backgroundSurface,
    shapeAction: palette?.ratio?.shapeAction || PALETTE_RATIO.shapeAction,
  };

  switch (mode) {
    case themeModeKeys.dark:
      textPrimaryDark = palette?.text?.primary || DEFAULT_PALETTE.white;
      backgroundBodyDark = palette?.background?.body || DEFAULT_PALETTE.dark;

      return {
        text: {
          primary: textPrimaryDark,
          secondary:
            palette?.text?.secondary ||
            Color(textPrimaryDark).darken(ratio.textSecondary).toString(),
          tertiary:
            palette?.text?.tertiary ||
            Color(textPrimaryDark).darken(ratio.textTertiary).toString(),
          disabled: palette?.text?.disabled || DEFAULT_PALETTE.disabled,
        },
        shape: {
          divider:
            palette?.shape?.divider ||
            Color(textPrimaryDark).darken(ratio.shapeDivider).toString(),
          border:
            palette?.shape?.border ||
            Color(textPrimaryDark).darken(ratio.shapeBorder).toString(),
        },
        background: {
          body: backgroundBodyDark,
          surface:
            palette?.background?.surface ||
            Color(backgroundBodyDark)
              .lighten(ratio.backgroundSurface)
              .toString(),
        },
        inverted: {
          main: backgroundBodyDark,
          dark:
            palette?.inverted?.dark ||
            Color(backgroundBodyDark).darken(ratio.shapeAction).toString(),
          light:
            palette?.inverted?.light ||
            Color(backgroundBodyDark).lighten(ratio.shapeAction).toString(),
          contrast: palette?.inverted?.contrast || DEFAULT_PALETTE.light,
        },
      };

    case themeModeKeys.light:
    default:
      textPrimaryLight = palette?.text?.primary || DEFAULT_PALETTE.black;
      backgroundBodyLight = palette?.background?.body || DEFAULT_PALETTE.light;

      return {
        text: {
          primary: textPrimaryLight,
          secondary:
            palette?.text?.secondary ||
            Color(textPrimaryLight).lighten(ratio.textSecondary).toString(),
          tertiary:
            palette?.text?.tertiary ||
            Color(textPrimaryLight).lighten(ratio.textTertiary).toString(),
          disabled: palette?.text?.disabled || DEFAULT_PALETTE.disabled,
        },
        shape: {
          divider:
            palette?.shape?.divider ||
            Color(textPrimaryLight).lighten(ratio.shapeDivider).toString(),
          border:
            palette?.shape?.border ||
            Color(textPrimaryLight).lighten(ratio.shapeBorder).toString(),
        },
        background: {
          body: backgroundBodyLight,
          surface:
            palette?.background?.surface ||
            Color(backgroundBodyLight)
              .darken(ratio.backgroundSurface)
              .toString(),
        },
        inverted: {
          main: backgroundBodyLight,
          dark:
            palette?.inverted?.dark ||
            Color(backgroundBodyLight).darken(ratio.shapeAction).toString(),
          light:
            palette?.inverted?.light ||
            Color(backgroundBodyLight).lighten(ratio.shapeAction).toString(),
          contrast: palette?.inverted?.contrast || DEFAULT_PALETTE.dark,
        },
      };
  }
};

export const createThemePalette = (
  palette?: Partial<ThemePalette>
): ThemePalette => {
  const mode = palette?.mode || themeModeKeys.light;

  const primaryColorMain = palette?.primary?.main || DEFAULT_PALETTE.primary;
  const secondaryColorMain =
    palette?.secondary?.main || DEFAULT_PALETTE.secondary;
  const tertiaryColorMain = palette?.tertiary?.main || DEFAULT_PALETTE.tertiary;
  const errorColorMain = palette?.error?.main || DEFAULT_PALETTE.error;
  const warningColorMain = palette?.warning?.main || DEFAULT_PALETTE.warning;
  const infoColorMain = palette?.info?.main || DEFAULT_PALETTE.info;
  const successColorMain = palette?.success?.main || DEFAULT_PALETTE.success;

  const greyColorBase =
    (palette?.grey && palette?.grey['100']) || DEFAULT_PALETTE.grey;

  const ratio = {
    activeOpacity: palette?.ratio?.activeOpacity || PALETTE_RATIO.activeOpacity,
    hoverOpacity: palette?.ratio?.hoverOpacity || PALETTE_RATIO.hoverOpacity,
    disabledOpacity:
      palette?.ratio?.disabledOpacity || PALETTE_RATIO.disabledOpacity,
    loadingOpacity:
      palette?.ratio?.loadingOpacity || PALETTE_RATIO.loadingOpacity,
    textSecondary: palette?.ratio?.textSecondary || PALETTE_RATIO.textSecondary,
    textTertiary: palette?.ratio?.textTertiary || PALETTE_RATIO.textTertiary,
    shapeDivider: palette?.ratio?.shapeDivider || PALETTE_RATIO.shapeDivider,
    shapeBorder: palette?.ratio?.shapeBorder || PALETTE_RATIO.shapeBorder,
    backgroundSurface:
      palette?.ratio?.backgroundSurface || PALETTE_RATIO.backgroundSurface,
    shapeAction: palette?.ratio?.shapeAction || PALETTE_RATIO.shapeAction,
    hoverShadowOpacity:
      palette?.ratio?.hoverShadowOpacity || PALETTE_RATIO.hoverShadowOpacity,
    focusOutlineOpacity:
      palette?.ratio?.focusOutlineOpacity || PALETTE_RATIO.focusOutlineOpacity,
  };
  const common = {
    black: palette?.common?.black || DEFAULT_PALETTE.black,
    white: palette?.common?.white || DEFAULT_PALETTE.white,
    dark: palette?.common?.dark || DEFAULT_PALETTE.dark,
    light: palette?.common?.light || DEFAULT_PALETTE.light,
    red: palette?.common?.red || DEFAULT_PALETTE.red,
    pink: palette?.common?.pink || DEFAULT_PALETTE.pink,
    purple: palette?.common?.purple || DEFAULT_PALETTE.purple,
    deepPurple: palette?.common?.deepPurple || DEFAULT_PALETTE.deepPurple,
    indigo: palette?.common?.indigo || DEFAULT_PALETTE.indigo,
    blue: palette?.common?.blue || DEFAULT_PALETTE.blue,
    lightBlue: palette?.common?.lightBlue || DEFAULT_PALETTE.lightBlue,
    cyan: palette?.common?.cyan || DEFAULT_PALETTE.cyan,
    teal: palette?.common?.teal || DEFAULT_PALETTE.teal,
    green: palette?.common?.green || DEFAULT_PALETTE.green,
    lightGreen: palette?.common?.lightGreen || DEFAULT_PALETTE.lightGreen,
    lime: palette?.common?.lime || DEFAULT_PALETTE.lime,
    yellow: palette?.common?.yellow || DEFAULT_PALETTE.yellow,
    amber: palette?.common?.amber || DEFAULT_PALETTE.amber,
    orange: palette?.common?.orange || DEFAULT_PALETTE.orange,
    deepOrange: palette?.common?.deepOrange || DEFAULT_PALETTE.deepOrange,
    brown: palette?.common?.brown || DEFAULT_PALETTE.brown,
    blueGrey: palette?.common?.blueGrey || DEFAULT_PALETTE.blueGrey,
  };
  const grey = {
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

  const actionActive = palette?.action?.active || DEFAULT_PALETTE.active;
  const actionHover = palette?.action?.hover || DEFAULT_PALETTE.hover;
  const actionDisabled = palette?.action?.disabled || DEFAULT_PALETTE.disabled;
  const actionLoading = palette?.action?.loading || DEFAULT_PALETTE.black;
  const actionLoadingContrast =
    palette?.action?.loadingContrast || DEFAULT_PALETTE.white;

  const action = {
    active: Color(actionActive).alpha(ratio.activeOpacity).toString(),
    hover: Color(actionHover).alpha(ratio.hoverOpacity).toString(),
    disabled: Color(actionDisabled).alpha(ratio.disabledOpacity).toString(),
    loading: Color(actionLoading).alpha(ratio.loadingOpacity).toString(),
    loadingContrast: actionLoadingContrast,
  };

  const utils = {
    getContrastColor: (primary: string, secondary: string) =>
      Color(primary).contrast(Color(secondary)).toString(),
    lightenColor: (color: string, ratio: number) =>
      Color(color).lighten(ratio).toString(),
    darkenColor: (color: string, ratio: number) =>
      Color(color).darken(ratio).toString(),
  };

  const themePrimary = {
    mode,
    common,
    action,
    ratio,
    grey,
  };
  const themeSecondary = getPropsByTheme(mode, { ...palette, ...themePrimary });

  return {
    ...themePrimary,
    ...themeSecondary,
    ...utils,
    primary: {
      main: primaryColorMain,
      dark:
        palette?.primary?.dark ||
        Color(primaryColorMain).darken(ratio.shapeAction).toString(),
      light:
        palette?.primary?.light ||
        Color(primaryColorMain).lighten(ratio.shapeAction).toString(),
      contrast: palette?.primary?.contrast || DEFAULT_PALETTE.white,
    },
    secondary: {
      main: secondaryColorMain,
      dark:
        palette?.secondary?.dark ||
        Color(secondaryColorMain).darken(ratio.shapeAction).toString(),
      light:
        palette?.secondary?.light ||
        Color(secondaryColorMain).lighten(ratio.shapeAction).toString(),
      contrast: palette?.secondary?.contrast || DEFAULT_PALETTE.white,
    },
    tertiary: {
      main: tertiaryColorMain,
      dark:
        palette?.tertiary?.dark ||
        Color(tertiaryColorMain).darken(ratio.shapeAction).toString(),
      light:
        palette?.tertiary?.light ||
        Color(tertiaryColorMain).lighten(ratio.shapeAction).toString(),
      contrast: palette?.tertiary?.contrast || DEFAULT_PALETTE.white,
    },
    error: {
      main: errorColorMain,
      dark:
        palette?.error?.dark ||
        Color(errorColorMain).darken(ratio.shapeAction).toString(),
      light:
        palette?.error?.light ||
        Color(errorColorMain).lighten(ratio.shapeAction).toString(),
      contrast: palette?.error?.contrast || DEFAULT_PALETTE.white,
    },
    warning: {
      main: warningColorMain,
      dark:
        palette?.warning?.dark ||
        Color(warningColorMain).darken(ratio.shapeAction).toString(),
      light:
        palette?.warning?.light ||
        Color(warningColorMain).lighten(ratio.shapeAction).toString(),
      contrast: palette?.warning?.contrast || DEFAULT_PALETTE.white,
    },
    info: {
      main: infoColorMain,
      dark:
        palette?.info?.dark ||
        Color(infoColorMain).darken(ratio.shapeAction).toString(),
      light:
        palette?.info?.light ||
        Color(infoColorMain).lighten(ratio.shapeAction).toString(),
      contrast: palette?.info?.contrast || DEFAULT_PALETTE.white,
    },
    success: {
      main: successColorMain,
      dark:
        palette?.success?.dark ||
        Color(successColorMain).darken(ratio.shapeAction).toString(),
      light:
        palette?.success?.light ||
        Color(successColorMain).lighten(ratio.shapeAction).toString(),
      contrast: palette?.success?.contrast || DEFAULT_PALETTE.white,
    },
  };
};
