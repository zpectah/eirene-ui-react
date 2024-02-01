import {
  UseButtonStyles,
  UseButtonStylesReturn,
  ButtonClassProps,
} from 'types';
import { useUiContext } from 'styles';
import { useCreateButtonStyles } from './useCreateButtonStyles';

export const useButtonStyles = (
  { styles }: UseButtonStyles,
  { ...buttonClasses }: ButtonClassProps
): UseButtonStylesReturn => {
  const { theme } = useUiContext();
  const { classes } = useCreateButtonStyles(theme, buttonClasses);

  const composedCss = {
    root: [Object.assign(classes.root), styles?.root],
    iconStart: [Object.assign(classes.iconStart), styles?.iconStart],
    iconEnd: [Object.assign(classes.iconEnd), styles?.iconEnd],
    iconLoading: [Object.assign(classes.iconLoading), styles?.iconLoading],
  };

  return { composedCss };
};
