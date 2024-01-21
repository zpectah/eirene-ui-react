import clsx from 'clsx';
import { UseButtonBaseStyles, UseButtonBaseStylesReturn } from 'types';
import { CLASSNAMES } from 'core';
import { deepMerge } from 'utils';
import { useAttachStylesheet, useUiContext } from 'styles';

export const useButtonBaseStyles = (
  props: UseButtonBaseStyles
): UseButtonBaseStylesReturn => {
  const { className, style, jss } = props;

  const { theme } = useUiContext();

  const buttonBaseStyle = {
    [CLASSNAMES.BUTTON.base]: deepMerge(theme.components.ButtonBase.root, jss),
  };

  const { classes } = useAttachStylesheet(buttonBaseStyle);

  return {
    className: clsx(classes[CLASSNAMES.BUTTON.base], className),
    style,
  };
};
