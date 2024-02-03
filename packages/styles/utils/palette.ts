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
      backgroundColor = palette?.background?.body || PALETTE.dark;

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
          body: backgroundColor,
          surface:
            palette?.background?.surface ||
            Color(backgroundColor)
              .lighten(ratio.backgroundSurface * 4)
              .toString(),
        },
        inverted: {
          main: backgroundColor,
          dark: palette?.inverted?.dark || Color(backgroundColor).darken(ratio.backgroundDarken).toString(),
          light: palette?.inverted?.light || Color(backgroundColor).lighten(ratio.backgroundLighten).toString(),
          contrast: palette?.inverted?.contrast || PALETTE.light,
        },
      };

    case themeModeKeys.light:
    default:
      textColor = palette?.text?.primary || PALETTE.black;
      backgroundColor = palette?.background?.body || PALETTE.light;

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
          body: backgroundColor,
          surface: palette?.background?.surface || Color(backgroundColor).darken(ratio.backgroundSurface).toString(),
        },
        inverted: {
          main: backgroundColor,
          dark: palette?.inverted?.dark || Color(backgroundColor).darken(ratio.backgroundDarken).toString(),
          light: palette?.inverted?.light || Color(backgroundColor).lighten(ratio.backgroundLighten).toString(),
          contrast: palette?.inverted?.contrast || PALETTE.dark,
        },
      };
  }
};
