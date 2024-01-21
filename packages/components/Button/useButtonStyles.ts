import clsx from 'clsx';
import { UseButtonStyles, UseButtonStylesReturn } from 'types';
import { CLASSNAMES } from 'core';
import { useAttachStylesheet, buttonStyle } from 'styles';

export const useButtonStyles = (
  props: UseButtonStyles
): UseButtonStylesReturn => {
  const { className, style } = props;
  const { classes } = useAttachStylesheet(buttonStyle);

  return {
    className: clsx(classes[CLASSNAMES.BUTTON.root], className),
    style,
  };
};
