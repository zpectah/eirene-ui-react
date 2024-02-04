import { Theme, TypographyColor } from 'types';

export const getTypographyColor = (theme: Theme, color: TypographyColor) => {
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
    muted: theme.palette.text.muted,
    disabled: theme.palette.text.disabled,
    inherit: 'inherit',
  };

  return rootColorMap[color];
};
