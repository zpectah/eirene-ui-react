import { ThemeTypography, textDirectionKeys } from 'types';

export const createThemeTypography = (
  typography?: ThemeTypography
): ThemeTypography => {
  const fontSize = typography?.fontSize || 16;
  const fontFamily =
    typography?.fontFamily || '"Barlow", "Helvetica", "Arial", sans-serif';
  const fontWeightLight = typography?.fontWeightLight || 300;
  const fontWeightRegular = typography?.fontWeightRegular || 400;
  const fontWeightMedium = typography?.fontWeightMedium || 500;
  const fontWeightSemiBold = typography?.fontWeightMedium || 600;
  const fontWeightBold = typography?.fontWeightBold || 800;
  const direction = typography?.direction || textDirectionKeys.ltr;

  return {
    fontSize,
    fontFamily,
    fontWeightLight,
    fontWeightRegular,
    fontWeightMedium,
    fontWeightSemiBold,
    fontWeightBold,
    direction,
    h1: {
      fontFamily: typography?.h1.fontFamily || fontFamily,
      fontWeight: fontWeightLight,
      fontSize: '2.25rem',
      lineHeight: 1.125,
      textTransform: typography?.h1.textTransform || 'none',
      letterSpacing: '0',
    },
    h2: {
      fontFamily: typography?.h2.fontFamily || fontFamily,
      fontWeight: fontWeightLight,
      fontSize: '2.125rem',
      lineHeight: 1.125,
      textTransform: typography?.h2.textTransform || 'none',
      letterSpacing: '0',
    },
    h3: {
      fontFamily: typography?.h3.fontFamily || fontFamily,
      fontWeight: fontWeightRegular,
      fontSize: '2rem',
      lineHeight: 1.15,
      textTransform: typography?.h3.textTransform || 'none',
      letterSpacing: '0',
    },
    h4: {
      fontFamily: typography?.h4.fontFamily || fontFamily,
      fontWeight: fontWeightRegular,
      fontSize: '1.75rem',
      lineHeight: 1.25,
      textTransform: typography?.h4.textTransform || 'none',
      letterSpacing: '0',
    },
    h5: {
      fontFamily: typography?.h5.fontFamily || fontFamily,
      fontWeight: fontWeightMedium,
      fontSize: '1.5rem',
      lineHeight: 1.334,
      textTransform: typography?.h5.textTransform || 'none',
      letterSpacing: '0',
    },
    h6: {
      fontFamily: typography?.h6.fontFamily || fontFamily,
      fontWeight: fontWeightMedium,
      fontSize: '1.25rem',
      lineHeight: 1.6,
      textTransform: typography?.h6.textTransform || 'none',
      letterSpacing: '0',
    },
    body1: {
      fontFamily: typography?.body1.fontFamily || fontFamily,
      fontWeight: fontWeightRegular,
      fontSize: '1rem',
      lineHeight: 1.45,
      textTransform: typography?.body1.textTransform || 'none',
      letterSpacing: '0',
    },
    body2: {
      fontFamily: typography?.body2.fontFamily || fontFamily,
      fontWeight: fontWeightRegular,
      fontSize: '0.875rem',
      lineHeight: 1.25,
      textTransform: typography?.body2.textTransform || 'none',
      letterSpacing: '0',
    },
    caption: {
      fontFamily: typography?.caption.fontFamily || fontFamily,
      fontWeight: fontWeightMedium,
      fontSize: '0.75rem',
      lineHeight: 1.55,
      textTransform: typography?.caption.textTransform || 'none',
      letterSpacing: '0',
    },
    overline: {
      fontFamily: typography?.overline.fontFamily || fontFamily,
      fontWeight: typography?.overline.fontWeight || fontWeightMedium,
      fontSize: typography?.overline.fontSize || '0.75rem',
      lineHeight: typography?.overline.lineHeight || 2.25,
      textTransform: typography?.overline.textTransform || 'uppercase',
      letterSpacing: '0',
    },
    button: {
      fontFamily: typography?.button.fontFamily || fontFamily,
      fontWeight: typography?.button.fontWeight || fontWeightSemiBold,
      fontSize: typography?.button.fontSize || '0.975rem',
      lineHeight: typography?.button.lineHeight || 1.25,
      textTransform: typography?.overline.textTransform || 'none',
      letterSpacing: '0',
    },
  };
};
