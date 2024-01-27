import React, { forwardRef, ElementType } from 'react';
import { ButtonProps, PolymorphicIntrinsicElementRef } from 'types';
import { useButtonStyles } from './useButtonStyles';
import { useButtonProps } from './useButtonProps';
import { buttonDefaultValues } from './constants';

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
    size = buttonDefaultValues.size,
    variant = buttonDefaultValues.variant,
    color = buttonDefaultValues.color,
    ...rest
  } = props;
  const { composedCss } = useButtonStyles({ styles });
  const { root: composedProps } = useButtonProps({
    style,
    className,
    isLoading,
    isActive,
    isDisabled,
    fullWidth,
    variant,
    color,
    size,
  });

  return (
    <Component ref={ref} css={composedCss.root} {...composedProps} {...rest}>
      {isLoading && (
        <span css={composedCss.iconLoading}>
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
