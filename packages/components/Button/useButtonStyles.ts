import clsx from 'clsx';
import { UseButtonStyles, UseButtonStylesReturn } from 'types';
import { CLASSNAMES } from 'core';
import { deepMerge } from 'utils';
import { useAttachStylesheet, useUiContext } from 'styles';

export const useButtonStyles = ({
  className,
  style,
  jss,
  isLoading,
  isActive,
  startIconProps,
  endIconProps,
  loadingIconProps,
  fullWidth,
  color,
  size,
  variant,
}: UseButtonStyles): UseButtonStylesReturn => {
  const { theme } = useUiContext();

  const stylesheet = {
    [CLASSNAMES.BUTTON.root]: deepMerge(
      theme.components.Button.root,
      jss?.root
    ),
    [CLASSNAMES.BUTTON.startIcon]: deepMerge(
      theme.components.Button.startIcon,
      jss?.startIcon
    ),
    [CLASSNAMES.BUTTON.endIcon]: deepMerge(
      theme.components.Button.endIcon,
      jss?.endIcon
    ),
    [CLASSNAMES.BUTTON.loadingIcon]: deepMerge(
      theme.components.Button.loadingIcon,
      jss?.loadingIcon
    ),
  };

  const { classes } = useAttachStylesheet(stylesheet).attach();

  return {
    root: {
      className: clsx(
        classes[CLASSNAMES.BUTTON.root],
        `size--${size}`,
        `variant--${variant}`,
        `color--${color}`,
        isLoading && CLASSNAMES.__STATE.loading,
        isActive && CLASSNAMES.__STATE.active,
        fullWidth &&
          `${CLASSNAMES.BUTTON.root}${CLASSNAMES.__SUFFIX.fullWidth}`,
        className
      ),
      style,
    },
    startIcon: {
      className: clsx(
        classes[CLASSNAMES.BUTTON.startIcon],
        startIconProps?.className
      ),
      style: { ...startIconProps?.style },
    },
    endIcon: {
      className: clsx(
        classes[CLASSNAMES.BUTTON.endIcon],
        endIconProps?.className
      ),
      style: {
        ...endIconProps?.style,
      },
    },
    loadingIcon: {
      className: clsx(
        classes[CLASSNAMES.BUTTON.loadingIcon],
        loadingIconProps?.className
      ),
      style: {
        ...loadingIconProps?.style,
      },
    },
  };
};
