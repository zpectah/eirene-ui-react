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
    subtitle1: {
      fontFamily: typography?.subtitle1.fontFamily || fontFamily,
      fontWeight: fontWeightRegular,
      fontSize: '1rem',
      lineHeight: 1.45,
      textTransform: typography?.subtitle1.textTransform || 'none',
      letterSpacing: '0',
    },
    subtitle2: {
      fontFamily: typography?.subtitle2.fontFamily || fontFamily,
      fontWeight: fontWeightRegular,
      fontSize: '0.875rem',
      lineHeight: 1.25,
      textTransform: typography?.subtitle2.textTransform || 'none',
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
      letterSpacing: typography?.overline.letterSpacing || '0',
    },
    button: {
      small: {
        fontFamily: typography?.button.small.fontFamily || fontFamily,
        fontWeight: typography?.button.small.fontWeight || fontWeightSemiBold,
        fontSize: typography?.button.small.fontSize || '0.85rem',
        lineHeight: typography?.button.small.lineHeight || 1.07,
        textTransform: typography?.overline.textTransform || 'none',
        letterSpacing: typography?.overline.letterSpacing || '0',
      },
      medium: {
        fontFamily: typography?.button.medium.fontFamily || fontFamily,
        fontWeight: typography?.button.medium.fontWeight || fontWeightSemiBold,
        fontSize: typography?.button.medium.fontSize || '0.975rem',
        lineHeight: typography?.button.medium.lineHeight || 1.41,
        textTransform: typography?.overline.textTransform || 'none',
        letterSpacing: typography?.overline.letterSpacing || '0',
      },
      large: {
        fontFamily: typography?.button.large.fontFamily || fontFamily,
        fontWeight: typography?.button.large.fontWeight || fontWeightSemiBold,
        fontSize: typography?.button.large.fontSize || '1rem',
        lineHeight: typography?.button.large.lineHeight || 1.5,
        textTransform: typography?.overline.textTransform || 'none',
        letterSpacing: typography?.overline.letterSpacing || '0',
      },
    },
  };
};
