import clsx from 'clsx';
import { UseButtonBaseStyles, UseButtonBaseStylesReturn } from 'types';
import { CLASSNAMES } from 'core';
import { deepMerge } from 'utils';
import { useAttachStylesheet, useUiContext } from 'styles';

export const useButtonBaseStyles = ({
  className,
  style,
  jss,
  isDisabled,
}: UseButtonBaseStyles): UseButtonBaseStylesReturn => {
  const { theme } = useUiContext();

  const stylesheet = {
    [CLASSNAMES.BUTTON.base]: deepMerge(
      theme.components.ButtonBase.root,
      jss?.root
    ),
  };

  const { classes } = useAttachStylesheet(stylesheet).attach();

  return {
    root: {
      className: clsx(
        classes[CLASSNAMES.BUTTON.base],
        isDisabled && CLASSNAMES.__STATE.disabled,
        className
      ),
      style,
    },
  };
};
