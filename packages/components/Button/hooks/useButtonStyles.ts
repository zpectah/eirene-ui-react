import { UseButtonStyles, UseButtonStylesReturn, ButtonStylesProps } from 'types';
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
    root: [root, theme.components.Button.root, styles?.root],
    iconStart: [iconStart, theme.components.Button.iconStart, styles?.iconStart],
    iconEnd: [iconEnd, theme.components.Button.iconEnd, styles?.iconEnd],
    iconLoading: [iconLoading, theme.components.Button.iconLoading, styles?.iconLoading],
  };

  return { composedStyles };
};
