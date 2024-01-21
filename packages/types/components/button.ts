import { CSSProperties, ElementType, ReactNode } from 'react';
import { ButtonBaseProps } from '../base';

export type ButtonProps<T extends ElementType> = {
  startIcon?: ReactNode;
  endIcon?: ReactNode;

  disabled?: boolean;
  fullWidth?: boolean;

  color?: string; // TODO
  size?: 'small' | 'medium' | 'large' | string; // TODO
  variant?: 'text' | 'outlined' | 'contained' | string; // TODO

  isLoading?: boolean;
} & ButtonBaseProps<T>;

export interface UseButtonStyles {
  className: string;
  style: CSSProperties;
}

export interface UseButtonStylesReturn extends UseButtonStyles {}
