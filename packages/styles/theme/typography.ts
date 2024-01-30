import { ThemeTypography, textDirectionKeys } from 'types';

export const createThemeTypography = (
  typography?: ThemeTypography
): ThemeTypography => {
  const fontSize = typography?.fontSize || 16; // TODO #default-values
  const fontFamily =
    typography?.fontFamily || '"Open Sans", "Helvetica", "Arial", sans-serif'; // TODO #default-values
  const fontWeightLight = typography?.fontWeightLight || 300; // TODO #default-values
  const fontWeightRegular = typography?.fontWeightRegular || 400; // TODO #default-values
  const fontWeightMedium = typography?.fontWeightMedium || 500; // TODO #default-values
  const fontWeightSemiBold = typography?.fontWeightMedium || 600; // TODO #default-values
  const fontWeightBold = typography?.fontWeightBold || 700; // TODO #default-values
  const fontWeightExtraBold = typography?.fontWeightExtraBold || 800; // TODO #default-values
  const direction = typography?.direction || textDirectionKeys.ltr; // TODO #default-values

  return {
    fontSize,
    fontFamily,
    fontWeightLight,
    fontWeightRegular,
    fontWeightMedium,
    fontWeightSemiBold,
    fontWeightBold,
    fontWeightExtraBold,
    direction,
    h1: {
      fontFamily: typography?.h1.fontFamily || fontFamily,
      fontWeight: typography?.h1.fontWeight || fontWeightLight,
      fontSize: typography?.h1.fontSize || '2.25rem',
      lineHeight: typography?.h1.lineHeight || 1.125,
      letterSpacing: typography?.h1.letterSpacing || '0',
    },
    h2: {
      fontFamily: typography?.h2.fontFamily || fontFamily,
      fontWeight: typography?.h2.fontWeight || fontWeightLight,
      fontSize: typography?.h2.fontSize || '2.125rem',
      lineHeight: typography?.h2.lineHeight || 1.125,
      letterSpacing: typography?.h2.letterSpacing || '0',
    },
    h3: {
      fontFamily: typography?.h3.fontFamily || fontFamily,
      fontWeight: typography?.h3.fontWeight || fontWeightRegular,
      fontSize: typography?.h3.fontSize || '2rem',
      lineHeight: typography?.h3.lineHeight || 1.15,
      letterSpacing: typography?.h3.letterSpacing || '0',
    },
    h4: {
      fontFamily: typography?.h4.fontFamily || fontFamily,
      fontWeight: typography?.h4.fontWeight || fontWeightRegular,
      fontSize: typography?.h4.fontSize || '1.75rem',
      lineHeight: typography?.h4.lineHeight || 1.25,
      letterSpacing: typography?.h4.letterSpacing || '0',
    },
    h5: {
      fontFamily: typography?.h5.fontFamily || fontFamily,
      fontWeight: typography?.h5.fontWeight || fontWeightMedium,
      fontSize: typography?.h5.fontSize || '1.5rem',
      lineHeight: typography?.h5.lineHeight || 1.334,
      letterSpacing: typography?.h5.letterSpacing || '0',
    },
    h6: {
      fontFamily: typography?.h6.fontFamily || fontFamily,
      fontWeight: typography?.h6.fontWeight || fontWeightMedium,
      fontSize: typography?.h6.fontSize || '1.25rem',
      lineHeight: typography?.h6.lineHeight || 1.6,
      letterSpacing: typography?.h6.letterSpacing || '0',
    },
    subtitle1: {
      fontFamily: typography?.subtitle1.fontFamily || fontFamily,
      fontWeight: typography?.subtitle1.fontWeight || fontWeightRegular,
      fontSize: typography?.subtitle1.fontSize || '1rem',
      lineHeight: typography?.subtitle1.lineHeight || 1.75,
      letterSpacing: typography?.subtitle1.letterSpacing || '0',
    },
    subtitle2: {
      fontFamily: typography?.subtitle2.fontFamily || fontFamily,
      fontWeight: typography?.subtitle2.fontWeight || fontWeightMedium,
      fontSize: typography?.subtitle2.fontSize || '0.875rem',
      lineHeight: typography?.subtitle2.lineHeight || 1.57,
      letterSpacing: typography?.subtitle2.letterSpacing || '0',
    },
    body1: {
      fontFamily: typography?.body1.fontFamily || fontFamily,
      fontWeight: typography?.body1.fontWeight || fontWeightRegular,
      fontSize: typography?.body1.fontSize || '1rem',
      lineHeight: typography?.body1.lineHeight || 1.45,
      letterSpacing: typography?.body1.letterSpacing || '0',
    },
    body2: {
      fontFamily: typography?.body2.fontFamily || fontFamily,
      fontWeight: typography?.body2.fontWeight || fontWeightRegular,
      fontSize: typography?.body2.fontSize || '0.875rem',
      lineHeight: typography?.body2.lineHeight || 1.25,
      letterSpacing: typography?.body2.letterSpacing || '0',
    },
    caption: {
      fontFamily: typography?.caption.fontFamily || fontFamily,
      fontWeight: typography?.caption.fontWeight || fontWeightMedium,
      fontSize: typography?.caption.fontSize || '0.75rem',
      lineHeight: typography?.caption.lineHeight || 1.55,
      letterSpacing: typography?.caption.letterSpacing || '0',
    },
    overline: {
      fontFamily: typography?.overline.fontFamily || fontFamily,
      fontWeight: typography?.overline.fontWeight || fontWeightMedium,
      fontSize: typography?.overline.fontSize || '0.75rem',
      lineHeight: typography?.overline.lineHeight || 2.25,
      textTransform: typography?.overline.textTransform || 'uppercase',
      letterSpacing: typography?.overline.letterSpacing || '0',
    },
    shapeSmall: {
      fontFamily: typography?.shapeSmall.fontFamily || fontFamily,
      fontWeight: typography?.shapeSmall.fontWeight || fontWeightSemiBold,
      fontSize: typography?.shapeSmall.fontSize || '0.85rem',
      lineHeight: typography?.shapeSmall.lineHeight || 1.07,
      textTransform: typography?.shapeSmall.textTransform || 'none',
      letterSpacing: typography?.shapeSmall.letterSpacing || '0',
    },
    shapeMedium: {
      fontFamily: typography?.shapeMedium.fontFamily || fontFamily,
      fontWeight: typography?.shapeMedium.fontWeight || fontWeightSemiBold,
      fontSize: typography?.shapeMedium.fontSize || '0.975rem',
      lineHeight: typography?.shapeMedium.lineHeight || 1.158,
      textTransform: typography?.shapeMedium.textTransform || 'none',
      letterSpacing: typography?.shapeMedium.letterSpacing || '0',
    },
    shapeLarge: {
      fontFamily: typography?.shapeLarge.fontFamily || fontFamily,
      fontWeight: typography?.shapeLarge.fontWeight || fontWeightSemiBold,
      fontSize: typography?.shapeLarge.fontSize || '1rem',
      lineHeight: typography?.shapeLarge.lineHeight || 1.19,
      textTransform: typography?.shapeLarge.textTransform || 'none',
      letterSpacing: typography?.shapeLarge.letterSpacing || '0',
    },
  };
};
