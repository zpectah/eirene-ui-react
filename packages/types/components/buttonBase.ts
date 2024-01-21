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

export type ButtonBaseInitialProps<T extends ElementType> =
  {} & PolymorphicComponentPropsWithRef<T>;

export type ButtonBaseProps<T extends ElementType> =
  {} & ButtonBaseInitialProps<T> & Partial<ButtonBaseJssProps>;

export interface UseButtonBaseStyles
  extends ComponentStyleProps,
    ButtonBaseJssProps {}

export interface UseButtonBaseStylesReturn {
  root: ComponentStyleProps;
}
