import React, { forwardRef, ElementType } from 'react';
import { ButtonBaseProps, PolymorphicIntrinsicElementRef } from 'types';
import { config } from 'core';
import { useButtonBaseStyles } from './useButtonBaseStyles';

const ButtonBase = forwardRef(
  <T extends ElementType>(
    props: ButtonBaseProps<T>,
    ref: PolymorphicIntrinsicElementRef<T>
  ) => {
    const {
      as: Component = config.BUTTON_DEFAULT_ELEMENT_TYPE,
      className,
      style,
      ...rest
    } = props;

    const { className: composedClassName, style: composedStyle } =
      useButtonBaseStyles({ className, style });

    return (
      <Component
        ref={ref}
        className={composedClassName}
        style={composedStyle}
        {...rest}
      />
    );
  }
);

export default ButtonBase;
