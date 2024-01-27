import { UseButtonStyles, UseButtonStylesReturn } from 'types';
import { useUiContext } from 'styles';

export const useButtonStyles = ({
  styles,
}: UseButtonStyles): UseButtonStylesReturn => {
  const { theme } = useUiContext();

  const composedCss = {
    root: [theme.components.Button.root, styles?.root],
    iconStart: [theme.components.Button.iconStart, styles?.iconStart],
    iconEnd: [theme.components.Button.iconEnd, styles?.iconEnd],
    iconLoading: [theme.components.Button.iconLoading, styles?.iconLoading],
  };

  return { composedCss };
};
