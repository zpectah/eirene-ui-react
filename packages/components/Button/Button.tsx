import React, { forwardRef, ElementType } from 'react';
import { ButtonProps, PolymorphicIntrinsicElementRef } from 'types';
import { BUTTON_DEFAULT_VALUES } from 'core';
import { useButtonStyles } from './useButtonStyles';
import { useButtonProps } from './useButtonProps';

const Button = <T extends ElementType>(
  props: ButtonProps<T>,
  ref: PolymorphicIntrinsicElementRef<T>
) => {
  const {
    as: Component = 'button',
    styles,
    style,
    className,
    children,
    startIcon,
    loadingIcon,
    endIcon,
    isLoading,
    isActive,
    isDisabled,
    fullWidth,
    size = BUTTON_DEFAULT_VALUES.size,
    variant = BUTTON_DEFAULT_VALUES.variant,
    color = BUTTON_DEFAULT_VALUES.color,
    ...rest
  } = props;
  const { composedCss } = useButtonStyles(
    { styles },
    { isLoading, isDisabled, isActive, fullWidth, size, variant, color }
  );
  const { root: composedProps } = useButtonProps({
    style,
    className,
    isDisabled,
  });

  return (
    <Component ref={ref} css={composedCss.root} {...composedProps} {...rest}>
      {isLoading && (
        <span css={composedCss.iconLoading}>
          {/* TODO */}
          {loadingIcon ? loadingIcon : <>loading</>}
        </span>
      )}
      {startIcon && <span css={composedCss.iconStart}>{startIcon}</span>}
      {children}
      {endIcon && <span css={composedCss.iconEnd}>{endIcon}</span>}
    </Component>
  );
};

export default forwardRef(Button);
