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
    backgroundSurface: ratio?.backgroundSurface || PALETTE_RATIO.backgroundSurface,
    hoverShadowAlpha: ratio?.hoverShadowAlpha || PALETTE_RATIO.hoverShadowAlpha,
    focusOutlineAlpha: ratio?.focusOutlineAlpha || PALETTE_RATIO.focusOutlineAlpha,
    disabledInvertedAlpha: ratio?.disabledInvertedAlpha || PALETTE_RATIO.disabledInvertedAlpha,
    loadingLabelAlpha: ratio?.loadingLabelAlpha || PALETTE_RATIO.loadingLabelAlpha,
  };
};

export const getThemePaletteProps = (mode: ThemeMode, palette?: DeepPartial<ThemePalette>) => {
  const ratio = getRatio(palette?.ratio);
  let textColor, backgroundColor;

  switch (mode) {
    case themeModeKeys.dark:
      textColor = palette?.text?.primary || PALETTE.white;
      backgroundColor = palette?.background?.primary || PALETTE.dark;

      return {
        text: {
          primary: textColor,
          secondary:
            palette?.text?.secondary ||
            Color(textColor)
              .darken(ratio.textSecondary / 100)
              .toString(),
          tertiary:
            palette?.text?.tertiary ||
            Color(textColor)
              .darken(ratio.textTertiary / 100)
              .toString(),
          muted: palette?.text?.muted || PALETTE.muted,
          disabled: palette?.text?.disabled || Color(PALETTE.muted).alpha(ratio.disabledAlpha).toString(),
        },
        shape: {
          divider:
            palette?.shape?.divider ||
            Color(textColor)
              .darken(ratio.shapeDivider / 100)
              .toString(),
          border:
            palette?.shape?.border ||
            Color(textColor)
              .darken(ratio.shapeBorder / 100)
              .toString(),
        },
        background: {
          primary: backgroundColor,
          secondary:
            palette?.background?.secondary ||
            Color(backgroundColor)
              .lighten(ratio.backgroundSurface * 4)
              .toString(),
          tertiary:
            palette?.background?.tertiary ||
            Color(backgroundColor)
              .lighten(ratio.backgroundSurface * 6)
              .toString(),
        },
        inverted: {
          main: palette?.inverted?.main || backgroundColor,
          dark: palette?.inverted?.dark || Color(backgroundColor).darken(ratio.backgroundDarken).toString(),
          light: palette?.inverted?.light || Color(backgroundColor).lighten(ratio.backgroundLighten).toString(),
          contrast: palette?.inverted?.contrast || PALETTE.light,
        },
        neutral: {
          main: palette?.neutral?.main || textColor,
          dark: palette?.neutral?.dark || Color(textColor).darken(ratio.backgroundDarken).toString(),
          light: palette?.neutral?.light || Color(textColor).lighten(ratio.backgroundLighten).toString(),
          contrast: palette?.neutral?.contrast || PALETTE.dark,
        },
      };

    case themeModeKeys.light:
    default:
      textColor = palette?.text?.primary || PALETTE.black;
      backgroundColor = palette?.background?.primary || PALETTE.light;

      return {
        text: {
          primary: textColor,
          secondary: palette?.text?.secondary || Color(textColor).lighten(ratio.textSecondary).toString(),
          tertiary: palette?.text?.tertiary || Color(textColor).lighten(ratio.textTertiary).toString(),
          muted: palette?.text?.muted || PALETTE.muted,
          disabled: palette?.text?.disabled || Color(PALETTE.muted).alpha(ratio.disabledAlpha).toString(),
        },
        shape: {
          divider: palette?.shape?.divider || Color(textColor).lighten(ratio.shapeDivider).toString(),
          border: palette?.shape?.border || Color(textColor).lighten(ratio.shapeBorder).toString(),
        },
        background: {
          primary: backgroundColor,
          secondary:
            palette?.background?.secondary || Color(backgroundColor).darken(ratio.backgroundSurface).toString(),
          tertiary:
            palette?.background?.tertiary ||
            Color(backgroundColor)
              .darken(ratio.backgroundSurface * 1.75)
              .toString(),
        },
        inverted: {
          main: palette?.inverted?.main || backgroundColor,
          dark: palette?.inverted?.dark || Color(backgroundColor).darken(ratio.backgroundDarken).toString(),
          light: palette?.inverted?.light || Color(backgroundColor).lighten(ratio.backgroundLighten).toString(),
          contrast: palette?.inverted?.contrast || PALETTE.dark,
        },
        neutral: {
          main: palette?.neutral?.main || textColor,
          dark: palette?.neutral?.dark || Color(textColor).darken(ratio.backgroundDarken).toString(),
          light: palette?.neutral?.light || Color(textColor).lighten(ratio.backgroundLighten).toString(),
          contrast: palette?.neutral?.contrast || PALETTE.light,
        },
      };
  }
};
