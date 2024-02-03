import Color from 'color';
import { DeepPartial, ThemeMode, themeModeKeys, ThemePalette } from 'types';
import { PALETTE, PALETTE_RATIO } from 'core';

export const getRatio = (ratio?: Partial<ThemePalette['ratio']>) => {
  return {
    activeAlpha: ratio?.activeAlpha || PALETTE_RATIO.activeAlpha,
    hoverAlpha: ratio?.hoverAlpha || PALETTE_RATIO.hoverAlpha,
    disabledAlpha: ratio?.disabledAlpha || PALETTE_RATIO.disabledAlpha,
    backgroundDarken: ratio?.backgroundDarken || PALETTE_RATIO.backgroundDarken,
    backgroundLighten: ratio?.backgroundLighten || PALETTE_RATIO.backgroundLighten,
    textSecondary: ratio?.textSecondary || PALETTE_RATIO.textSecondary,
    textTertiary: ratio?.textTertiary || PALETTE_RATIO.textTertiary,
    shapeDivider: ratio?.shapeDivider || PALETTE_RATIO.shapeDivider,
    shapeBorder: ratio?.shapeBorder || PALETTE_RATIO.shapeBorder,
    surfaceBackground: ratio?.surfaceBackground || PALETTE_RATIO.surfaceBackground,
    hoverShadowAlpha: ratio?.hoverShadowAlpha || PALETTE_RATIO.hoverShadowAlpha,
    focusOutlineAlpha: ratio?.focusOutlineAlpha || PALETTE_RATIO.focusOutlineAlpha,
    disabledInvertedAlpha: ratio?.disabledInvertedAlpha || PALETTE_RATIO.disabledInvertedAlpha,
    loadingLabelAlpha: ratio?.loadingLabelAlpha || PALETTE_RATIO.loadingLabelAlpha,
  };
};

export const getThemePaletteProps = (mode: ThemeMode, palette?: DeepPartial<ThemePalette>) => {
  let textPrimaryDark, backgroundBodyDark, textPrimaryLight, backgroundBodyLight;
  const ratio = getRatio(palette?.ratio);

  switch (mode) {
    case themeModeKeys.dark:
      textPrimaryDark = palette?.text?.primary || PALETTE.white;
      backgroundBodyDark = palette?.background?.body || PALETTE.dark;

      return {
        text: {
          primary: textPrimaryDark,
          secondary: palette?.text?.secondary || Color(textPrimaryDark).darken(ratio.textSecondary).toString(),
          tertiary: palette?.text?.tertiary || Color(textPrimaryDark).darken(ratio.textTertiary).toString(),
          muted: palette?.text?.muted || PALETTE.muted,
          disabled: palette?.text?.disabled || Color(PALETTE.muted).alpha(ratio.disabledAlpha).toString(),
        },
        shape: {
          divider: palette?.shape?.divider || Color(textPrimaryDark).darken(ratio.shapeDivider).toString(),
          border: palette?.shape?.border || Color(textPrimaryDark).darken(ratio.shapeBorder).toString(),
        },
        background: {
          body: backgroundBodyDark,
          surface:
            palette?.background?.surface || Color(backgroundBodyDark).lighten(ratio.surfaceBackground).toString(),
        },
        inverted: {
          main: backgroundBodyDark,
          dark: palette?.inverted?.dark || Color(backgroundBodyDark).darken(ratio.backgroundDarken).toString(),
          light: palette?.inverted?.light || Color(backgroundBodyDark).lighten(ratio.backgroundLighten).toString(),
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
          secondary: palette?.text?.secondary || Color(textPrimaryLight).lighten(ratio.textSecondary).toString(),
          tertiary: palette?.text?.tertiary || Color(textPrimaryLight).lighten(ratio.textTertiary).toString(),
          muted: palette?.text?.muted || PALETTE.muted,
          disabled: palette?.text?.disabled || Color(PALETTE.muted).alpha(ratio.disabledAlpha).toString(),
        },
        shape: {
          divider: palette?.shape?.divider || Color(textPrimaryLight).lighten(ratio.shapeDivider).toString(),
          border: palette?.shape?.border || Color(textPrimaryLight).lighten(ratio.shapeBorder).toString(),
        },
        background: {
          body: backgroundBodyLight,
          surface:
            palette?.background?.surface || Color(backgroundBodyLight).darken(ratio.surfaceBackground).toString(),
        },
        inverted: {
          main: backgroundBodyLight,
          dark: palette?.inverted?.dark || Color(backgroundBodyLight).darken(ratio.backgroundDarken).toString(),
          light: palette?.inverted?.light || Color(backgroundBodyLight).lighten(ratio.backgroundLighten).toString(),
          contrast: palette?.inverted?.contrast || PALETTE.dark,
        },
      };
  }
};
