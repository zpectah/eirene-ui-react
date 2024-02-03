import { Theme, TypographyStylesProps } from 'types';

export const useCreateTypographyStyles = (theme: Theme, stylesProps: TypographyStylesProps) => {
  const { variant, color, truncate } = stylesProps;

  const rootColorMap = {
    primary: theme.palette.primary.main,
    secondary: theme.palette.secondary.main,
    tertiary: theme.palette.tertiary.main,
    error: theme.palette.error.main,
    warning: theme.palette.warning.main,
    info: theme.palette.info.main,
    success: theme.palette.success.main,
    inverted: theme.palette.inverted.main,
    'text-primary': theme.palette.text.primary,
    'text-secondary': theme.palette.text.secondary,
    'text-tertiary': theme.palette.text.tertiary,
    'text-muted': theme.palette.text.muted,
    'text-disabled': theme.palette.text.disabled,
    inherit: 'inherit',
  };

  const rootBase = {
    color: rootColorMap[color],
  };
  const rootVariant = theme.typography[variant];
  const rootTruncate = truncate
    ? {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }
    : {};

  const styles = {
    root: Object.assign({
      ...rootBase,
      ...rootVariant,
      ...rootTruncate,
    }),
  };

  return { styles };
};
