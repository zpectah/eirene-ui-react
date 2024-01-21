import clsx from 'clsx';
import { UseButtonBaseStyles, UseButtonBaseStylesReturn } from 'types';
import { CLASSNAMES } from 'core';
import { useAttachStylesheet, buttonBaseStyle } from 'styles';

export const useButtonBaseStyles = (
  props: UseButtonBaseStyles
): UseButtonBaseStylesReturn => {
  const { className, style } = props;
  const { classes } = useAttachStylesheet(buttonBaseStyle);

  return {
    className: clsx(classes[CLASSNAMES.BUTTON.base], className),
    style,
  };
};
