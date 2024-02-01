import {
  UseButtonStyles,
  UseButtonStylesReturn,
  ButtonStylesProps,
} from 'types';
import { useUiContext } from 'styles';
import { useCreateButtonStyles } from './useCreateButtonStyles';

export const useButtonStyles = (
  { styles }: UseButtonStyles,
  { ...buttonStyles }: ButtonStylesProps
): UseButtonStylesReturn => {
  const { theme } = useUiContext();
  const {
    styles: { root, iconStart, iconEnd, iconLoading },
  } = useCreateButtonStyles(theme, buttonStyles);

  const composedStyles = {
    root: [root, styles?.root],
    iconStart: [iconStart, styles?.iconStart],
    iconEnd: [iconEnd, styles?.iconEnd],
    iconLoading: [iconLoading, styles?.iconLoading],
  };

  return { composedStyles };
};
