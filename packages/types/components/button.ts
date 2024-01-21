import { CSSProperties, ElementType, ReactNode } from 'react';
import { WithJss } from '../styles';
import { ButtonBaseProps } from './buttonBase';

export type ButtonProps<T extends ElementType> = {
  startIcon?: ReactNode;
  endIcon?: ReactNode;

  fullWidth?: boolean;

  color?: string; // TODO
  size?: 'small' | 'medium' | 'large' | string; // TODO
  variant?: 'text' | 'outlined' | 'contained' | string; // TODO

  isDisabled?: boolean;
  isActive?: boolean;
  isLoading?: boolean;
} & ButtonBaseProps<T>;

export interface UseButtonStyles extends WithJss {
  className: string;
  style: CSSProperties;
}

export interface UseButtonStylesReturn extends UseButtonStyles {}
