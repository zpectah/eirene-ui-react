import clsx from 'clsx';
import { UseButtonProps, UseButtonPropsReturn } from 'types';
import { BUTTON_DEFAULT_VALUES } from 'core';
import { capitalizeFirstLetter } from 'utils';

export const useButtonProps = (props: UseButtonProps): UseButtonPropsReturn => {
  const {
    style,
    className,
    isLoading,
    isActive,
    isDisabled,
    fullWidth,
    size = BUTTON_DEFAULT_VALUES.size,
    variant = BUTTON_DEFAULT_VALUES.variant,
    color = BUTTON_DEFAULT_VALUES.color,
  } = props;

  const disabledClassName = `is--disabled`;
  const activeClassName = `is--active`;
  const fullWidthClassName = `is--fullWidth`;
  const loadingClassName = `is--loading`;

  const rootPrefix = 'Button';

  const sizeLargeClassName = `${rootPrefix}-sizeLarge`;
  const sizeMediumClassName = `${rootPrefix}-sizeMedium`;
  const sizeSmallClassName = `${rootPrefix}-sizeSmall`;

  const containedClassName = `${rootPrefix}-contained`;
  const outlinedClassName = `${rootPrefix}-outlined`;
  const textClassName = `${rootPrefix}-text`;

  const sizeClassName = {
    large: sizeLargeClassName,
    medium: sizeMediumClassName,
    small: sizeSmallClassName,
  };

  const variantClassName = {
    text: textClassName,
    contained: containedClassName,
    outlined: outlinedClassName,
  };

  const colorVariantClassName = {
    text: `${textClassName}${capitalizeFirstLetter(color)}`,
    contained: `${containedClassName}${capitalizeFirstLetter(color)}`,
    outlined: `${outlinedClassName}${capitalizeFirstLetter(color)}`,
  };

  return {
    root: {
      className: clsx(
        rootPrefix,
        variantClassName[variant],
        colorVariantClassName[variant],
        sizeClassName[size],
        isLoading && loadingClassName,
        isDisabled && disabledClassName,
        isActive && activeClassName,
        fullWidth && fullWidthClassName,
        className
      ),
      style: { ...style },
      disabled: isDisabled,
    },
    iconStart: {},
    iconEnd: {},
    iconLoading: {},
  };
};
