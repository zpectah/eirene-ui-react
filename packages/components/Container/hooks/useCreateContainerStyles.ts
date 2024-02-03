import { Theme, ContainerStylesProps } from 'types';

export const useCreateContainerStyles = (theme: Theme, stylesProps: ContainerStylesProps) => {
  const { maxWidth, isFluid, xOffset } = stylesProps;
  const {
    breakpoints: { container, unit, up },
  } = theme;

  const rootBase = {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    boxSizing: 'border-box',
    paddingLeft: theme.spacing.get(xOffset),
    paddingRight: theme.spacing.get(xOffset),
  };

  const rootMaxWidth = {
    xs: {
      [`${up('xs')}`]: {
        maxWidth: isFluid ? '100%' : `${container.xs}${unit}`,
      },
    },
    sm: {
      [`${up('sm')}`]: {
        maxWidth: isFluid ? '100%' : `${container.sm}${unit}`,
      },
    },
    md: {
      [`${up('md')}`]: {
        maxWidth: isFluid ? '100%' : `${container.md}${unit}`,
      },
    },
    lg: {
      [`${up('lg')}`]: {
        maxWidth: isFluid ? '100%' : `${container.lg}${unit}`,
      },
    },
    xl: {
      [`${up('xl')}`]: {
        maxWidth: isFluid ? '100%' : `${container.xl}${unit}`,
      },
    },
    xxl: {
      [`${up('xxl')}`]: {
        maxWidth: isFluid ? '100%' : `${container.xxl}${unit}`,
      },
    },
  };

  const styles = {
    root: Object.assign({
      ...rootBase,
      ...rootMaxWidth[maxWidth],
    }),
  };

  return { styles };
};
