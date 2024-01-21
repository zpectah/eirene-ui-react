import React, { forwardRef, ElementType } from 'react';
import { ButtonProps, PolymorphicIntrinsicElementRef } from 'types';
import { ButtonBase } from 'base';
import { useButtonStyles } from './useButtonStyles';

const Button = forwardRef(
  <T extends ElementType>(
    props: ButtonProps<T>,
    ref: PolymorphicIntrinsicElementRef<T>
  ) => {
    const { children, className, style, startIcon, endIcon, ...rest } = props;

    const { className: composedClassName, style: composedStyle } =
      useButtonStyles({ className, style });

    return (
      <ButtonBase
        className={composedClassName}
        style={composedStyle}
        {...rest}
        ref={ref}
      >
        {startIcon}
        {children}
        {endIcon}
      </ButtonBase>
    );
  }
);

export default Button;
