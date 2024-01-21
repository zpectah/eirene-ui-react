import clsx from 'clsx';
import { UseButtonStyles, UseButtonStylesReturn } from 'types';
import { CLASSNAMES } from 'core';
import { useAttachStylesheet, buttonStyle, useUiContext } from 'styles';
import { useEffect } from 'react';

export const useButtonStyles = (
  props: UseButtonStyles
): UseButtonStylesReturn => {
  const { className, style } = props;

  const { theme } = useUiContext();
  const { classes } = useAttachStylesheet(buttonStyle);

  useEffect(() => {
    console.log('theme', theme.components.Button);
  }, []);

  return {
    className: clsx(classes[CLASSNAMES.BUTTON.root], className),
    style,
  };
};
