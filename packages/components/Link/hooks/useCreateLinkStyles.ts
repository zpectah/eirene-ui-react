import { Theme, LinkStylesProps } from 'types';
import Color from 'color';

export const useCreateLinkStyles = (theme: Theme, stylesProps: LinkStylesProps) => {
  const { variant, color, underline } = stylesProps;

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
  const rootBaseColor = rootColorMap[color];

  const rootBase = {
    color: rootBaseColor,
    cursor: 'pointer',
  };
  const rootVariant = theme.typography[variant];
  const rootUnderline = {
    none: {},
    hover: {
      textDecoration: 'none',

      '&:hover': {
        textDecoration: 'underline',
      },
    },
    always: {
      textDecoration: 'underline',

      '&:hover': {
        textDecorationColor: Color(rootBaseColor).alpha(0.5).toString(),
      },
    },
  };

  const styles = {
    root: Object.assign({
      ...rootBase,
      ...rootVariant,
      ...rootUnderline[underline],
    }),
  };

  return {
    styles,
  };
};
