import clsx from 'clsx';
import { UseButtonStyles, UseButtonStylesReturn } from 'types';
import { CLASSNAMES } from 'core';
import { deepMerge } from 'utils';
import { useAttachStylesheet, useUiContext } from 'styles';

export const useButtonStyles = (
  props: UseButtonStyles
): UseButtonStylesReturn => {
  const { className, style, jss } = props;

  const { theme } = useUiContext();

  const buttonStyle = {
    [CLASSNAMES.BUTTON.root]: deepMerge(theme.components.Button.root, jss),
    [CLASSNAMES.BUTTON.startIcon]: {},
    [CLASSNAMES.BUTTON.endIcon]: {},
  };

  const { classes } = useAttachStylesheet(buttonStyle);

  return {
    className: clsx(classes[CLASSNAMES.BUTTON.root], className),
    style,
  };
};
