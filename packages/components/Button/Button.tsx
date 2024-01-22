import React, { forwardRef, ElementType, useMemo } from 'react';
import { ButtonProps, PolymorphicIntrinsicElementRef } from 'types';
import { ButtonBase } from 'base';
import { useButtonStyles } from './useButtonStyles';

const Button = forwardRef(
  <T extends ElementType>(
    props: ButtonProps<T>,
    ref: PolymorphicIntrinsicElementRef<T>
  ) => {
    const {
      children,
      className,
      style,
      jss,
      startIcon,
      endIcon,
      startIconProps,
      endIconProps,
      isLoading,
      isActive,
      loadingIcon,
      loadingIconProps,
      fullWidth,
      color = 'primary',
      size = 'medium',
      variant = 'contained',
      ...rest
    } = props;

    const {
      root,
      startIcon: startIconStyleProps,
      endIcon: endIconStyleProps,
      loadingIcon: loadingIconStyleProps,
    } = useButtonStyles({
      className,
      style,
      jss,
      isLoading,
      isActive,
      startIconProps,
      endIconProps,
      loadingIconProps,
      fullWidth,
      color,
      size,
      variant,
    });

    const renderChildrenNode = useMemo(() => {
      return (
        <>
          {isLoading && <span {...loadingIconStyleProps}>Loading</span>}
          {startIcon && <span {...startIconStyleProps}>{startIcon}</span>}
          {children}
          {endIcon && <span {...endIconStyleProps}>{endIcon}</span>}
        </>
      );
    }, [
      children,
      startIcon,
      endIcon,
      startIconStyleProps,
      endIconStyleProps,
      isLoading,
      loadingIconStyleProps,
    ]);

    return (
      <ButtonBase ref={ref} {...root} {...rest}>
        {renderChildrenNode}
      </ButtonBase>
    );
  }
);

export default Button;
