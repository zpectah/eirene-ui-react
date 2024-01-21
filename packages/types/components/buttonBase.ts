import { ElementType, CSSProperties } from 'react';
import { PolymorphicComponentPropsWithRef, WithJss } from 'types';

export type ButtonInitialProps<T extends ElementType> =
  {} & PolymorphicComponentPropsWithRef<T>;

export type ButtonBaseProps<T extends ElementType> = ButtonInitialProps<T> &
  WithJss & {};

export interface UseButtonBaseStyles extends WithJss {
  className: string;
  style: CSSProperties;
}

export interface UseButtonBaseStylesReturn extends UseButtonBaseStyles {}
