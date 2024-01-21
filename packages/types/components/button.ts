import { ElementType, ReactNode } from 'react';
import {
  ComponentStyleProps,
  PolymorphicComponentPropsWithRef,
} from '../common';
import { JssPropertyValue } from '../styles';

export interface ButtonJssProps {
  jss: {
    root: JssPropertyValue;
    startIcon: JssPropertyValue;
    endIcon: JssPropertyValue;
    loadingIcon: JssPropertyValue;
  };
}

export interface ButtonIconProps {
  startIcon?: ReactNode;
  startIconProps?: Partial<ComponentStyleProps>;
  endIcon?: ReactNode;
  endIconProps?: Partial<ComponentStyleProps>;
}

export interface ButtonLoadingProps {
  isLoading?: boolean;
  loadingIcon?: ReactNode;
  loadingIconProps?: Partial<ComponentStyleProps>;
}

export interface ButtonElementaryProps {
  fullWidth?: boolean;
  color?: 'primary' | 'secondary' | 'tertiary'; // TODO
  size?: 'small' | 'medium' | 'large' | string; // TODO
  variant?: 'text' | 'outlined' | 'contained' | string; // TODO
  isDisabled?: boolean;
  isActive?: boolean;
}

export type ButtonInitialProps<T extends ElementType> =
  {} & PolymorphicComponentPropsWithRef<T>;

export type ButtonProps<T extends ElementType> = {} & ButtonInitialProps<T> &
  Partial<ButtonJssProps> &
  ButtonIconProps &
  ButtonLoadingProps &
  ButtonElementaryProps;

export interface UseButtonStyles
  extends ComponentStyleProps,
    ButtonJssProps,
    Omit<ButtonIconProps, 'startIcon' | 'endIcon'>,
    Omit<ButtonLoadingProps, 'loadingIcon'>,
    ButtonElementaryProps {}

export interface UseButtonStylesReturn {
  root: ComponentStyleProps;
  startIcon: ComponentStyleProps;
  endIcon: ComponentStyleProps;
  loadingIcon: ComponentStyleProps;
}
