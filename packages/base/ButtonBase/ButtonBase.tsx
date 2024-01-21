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
      jss,
      ...rest
    } = props;

    const { root } = useButtonBaseStyles({ className, style, jss });

    return <Component ref={ref} {...root} {...rest} />;
  }
);

export default ButtonBase;
