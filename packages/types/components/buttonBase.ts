import { ElementType } from 'react';
import {
  PolymorphicComponentPropsWithRef,
  ComponentStyleProps,
  JssPropertyValue,
} from 'types';

export interface ButtonBaseJssProps {
  jss: {
    root: JssPropertyValue;
  };
}

export interface ButtonBaseElementaryProps {
  isDisabled?: boolean;
}

export type ButtonBaseInitialProps<T extends ElementType> =
  {} & PolymorphicComponentPropsWithRef<T>;

export type ButtonBaseProps<T extends ElementType> =
  {} & ButtonBaseInitialProps<T> &
    Partial<ButtonBaseJssProps> &
    ButtonBaseElementaryProps;

export interface UseButtonBaseStyles
  extends ComponentStyleProps,
    ButtonBaseJssProps,
    ButtonBaseElementaryProps {}

export interface UseButtonBaseStylesReturn {
  root: ComponentStyleProps;
}
