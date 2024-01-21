import { ElementType, CSSProperties } from 'react';
import { PolymorphicComponentPropsWithRef } from 'types';

export type ButtonInitialProps<T extends ElementType> =
  {} & PolymorphicComponentPropsWithRef<T>;

export type ButtonBaseProps<T extends ElementType> = ButtonInitialProps<T> & {};

export interface UseButtonBaseStyles {
  className: string;
  style: CSSProperties;
}

export interface UseButtonBaseStylesReturn extends UseButtonBaseStyles {}
