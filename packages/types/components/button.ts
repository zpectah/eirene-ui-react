import { ElementType, ReactNode } from 'react';
import { PolymorphicComponentPropsWithRef, WithStyle } from '../common';
import { ComponentStyles, Color, ShapeSize, ShapeVariant } from '../styles';

export interface ButtonStyles {
  root: ComponentStyles;
  iconStart: ComponentStyles;
  iconEnd: ComponentStyles;
  iconLoading: ComponentStyles;
}

export type ButtonInitialProps<T extends ElementType> = NonNullable<unknown> & PolymorphicComponentPropsWithRef<T>;

export interface ButtonElementaryProps extends Partial<WithStyle> {
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  loadingIcon?: ReactNode;
}

export interface ButtonStateProps {
  isLoading: boolean;
  isDisabled: boolean;
  isActive: boolean;
}

export interface ButtonShapeProps {
  fullWidth: boolean;
  color: Color;
  size: ShapeSize;
  variant: ShapeVariant;
}

export type ButtonProps<T extends ElementType> = {
  styles?: Partial<ButtonStyles>;
} & ButtonInitialProps<T> &
  ButtonElementaryProps &
  Partial<ButtonStateProps> &
  Partial<ButtonShapeProps>;

export interface UseButtonStyles {
  styles?: Partial<ButtonStyles>;
}

export interface UseButtonStylesReturn {
  composedStyles: ButtonStyles;
}

export interface UseButtonProps extends Partial<ButtonStateProps>, Partial<ButtonShapeProps>, Partial<WithStyle> {}

export interface UseButtonPropsReturn {
  root: WithStyle & { disabled?: boolean };
  iconStart: WithStyle;
  iconEnd: WithStyle;
  iconLoading: WithStyle;
}

export interface ButtonStylesProps extends ButtonStateProps, ButtonShapeProps {}
