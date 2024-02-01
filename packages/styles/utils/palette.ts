import Color from 'color';
import { ThemeMode, themeModeKeys, ThemePalette } from 'types';
import { PALETTE, PALETTE_RATIO } from 'core';

export const getThemePaletteProps = (
  mode: ThemeMode,
  palette?: Partial<ThemePalette>
) => {
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
    disabledOpacity:
      palette?.ratio?.disabledOpacity || PALETTE_RATIO.disabledOpacity,
  };

  switch (mode) {
    case themeModeKeys.dark:
      textPrimaryDark = palette?.text?.primary || PALETTE.white;
      backgroundBodyDark = palette?.background?.body || PALETTE.dark;

      return {
        text: {
          primary: textPrimaryDark,
          secondary:
            palette?.text?.secondary ||
            Color(textPrimaryDark).darken(ratio.textSecondary).toString(),
          tertiary:
            palette?.text?.tertiary ||
            Color(textPrimaryDark).darken(ratio.textTertiary).toString(),
          muted: palette?.text?.muted || PALETTE.muted,
          disabled:
            palette?.text?.disabled ||
            Color(PALETTE.muted).alpha(ratio.disabledOpacity).toString(),
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
          contrast: palette?.inverted?.contrast || PALETTE.light,
        },
      };

    case themeModeKeys.light:
    default:
      textPrimaryLight = palette?.text?.primary || PALETTE.black;
      backgroundBodyLight = palette?.background?.body || PALETTE.light;

      return {
        text: {
          primary: textPrimaryLight,
          secondary:
            palette?.text?.secondary ||
            Color(textPrimaryLight).lighten(ratio.textSecondary).toString(),
          tertiary:
            palette?.text?.tertiary ||
            Color(textPrimaryLight).lighten(ratio.textTertiary).toString(),
          muted: palette?.text?.muted || PALETTE.muted,
          disabled:
            palette?.text?.disabled ||
            Color(PALETTE.muted).alpha(ratio.disabledOpacity).toString(),
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
          contrast: palette?.inverted?.contrast || PALETTE.dark,
        },
      };
  }
};
