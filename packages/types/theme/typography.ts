export interface ThemeTypographyCluster {
  fontFamily: string;
  fontWeight: number;
  fontSize: string;
  lineHeight: number;
  letterSpacing: string;
}

export interface ThemeTypography {
  fontSize: number;
  fontFamily: string;
  fontWeightLight: number;
  fontWeightRegular: number;
  fontWeightMedium: number;
  fontWeightBold: number;

  h1: ThemeTypographyCluster;
  h2: ThemeTypographyCluster;
  h3: ThemeTypographyCluster;
  h4: ThemeTypographyCluster;
  h5: ThemeTypographyCluster;
  h6: ThemeTypographyCluster;
  body1: ThemeTypographyCluster;
  body2: ThemeTypographyCluster;
  caption: ThemeTypographyCluster;
  overline: ThemeTypographyCluster;
  button: ThemeTypographyCluster;
}
