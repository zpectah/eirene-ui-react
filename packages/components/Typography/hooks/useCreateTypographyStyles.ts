import { Theme, TypographyStylesProps } from 'types';

export const useCreateTypographyStyles = (theme: Theme, stylesProps: TypographyStylesProps) => {
  const { variant, color, truncate } = stylesProps;

  const getRootColor = () => {
    switch (color) {
      case 'primary':
        return theme.palette.primary.main;

      case 'secondary':
        return theme.palette.secondary.main;

      case 'tertiary':
        return theme.palette.tertiary.main;

      case 'error':
        return theme.palette.error.main;

      case 'warning':
        return theme.palette.warning.main;

      case 'info':
        return theme.palette.info.main;

      case 'success':
        return theme.palette.success.main;

      case 'inverted':
        return theme.palette.inverted.main;

      case 'text-primary':
        return theme.palette.text.primary;

      case 'text-secondary':
        return theme.palette.text.secondary;

      case 'text-tertiary':
        return theme.palette.text.tertiary;

      case 'text-muted':
        return theme.palette.text.muted;

      case 'text-disabled':
        return theme.palette.text.disabled;

      case 'inherit':
      default:
        return 'inherit';
    }
  };

  const rootBase = {
    color: getRootColor(),
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
