import { TextTransform, TextDirection } from '../common';

export interface ThemeTypographyCluster {
  fontFamily: string;
  fontWeight: number;
  fontSize: string;
  lineHeight: number;
  letterSpacing: string;
  textTransform: TextTransform;
}

export interface ThemeTypography {
  fontSize: number;
  fontFamily: string;
  fontWeightLight: number;
  fontWeightRegular: number;
  fontWeightMedium: number;
  fontWeightSemiBold: number;
  fontWeightBold: number;
  fontWeightExtraBold: number;
  direction: TextDirection;
  h1: ThemeTypographyCluster;
  h2: ThemeTypographyCluster;
  h3: ThemeTypographyCluster;
  h4: ThemeTypographyCluster;
  h5: ThemeTypographyCluster;
  h6: ThemeTypographyCluster;
  subtitle1: ThemeTypographyCluster;
  subtitle2: ThemeTypographyCluster;
  body1: ThemeTypographyCluster;
  body2: ThemeTypographyCluster;
  caption: ThemeTypographyCluster;
  overline: ThemeTypographyCluster;
  button: {
    small: ThemeTypographyCluster;
    medium: ThemeTypographyCluster;
    large: ThemeTypographyCluster;
  };
}
