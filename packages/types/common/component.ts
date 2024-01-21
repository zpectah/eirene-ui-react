import { ElementType, ComponentPropsWithRef, Ref } from 'react';

export type PolymorphicComponentPropsWithRef<T extends ElementType> = {
  as?: T;
} & ComponentPropsWithRef<T>;

export type PolymorphicIntrinsicElementRef<T extends ElementType> = Ref<
  T extends keyof JSX.IntrinsicElements ? JSX.IntrinsicElements[T] : T
>;
