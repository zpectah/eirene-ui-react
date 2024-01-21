import React, { forwardRef, ElementType } from 'react';
import { ButtonProps, PolymorphicIntrinsicElementRef } from 'types';
import { ButtonBase } from 'base';
import { useButtonStyles } from './useButtonStyles';

const Button = forwardRef(
  <T extends ElementType>(
    props: ButtonProps<T>,
    ref: PolymorphicIntrinsicElementRef<T>
  ) => {
    const { children, className, style, jss, startIcon, endIcon, ...rest } =
      props;

    const { className: composedClassName, style: composedStyle } =
      useButtonStyles({ className, style, jss });

    return (
      <ButtonBase
        className={composedClassName}
        style={composedStyle}
        ref={ref}
        {...rest}
      >
        {startIcon}
        {children}
        {endIcon}
      </ButtonBase>
    );
  }
);

export default Button;
