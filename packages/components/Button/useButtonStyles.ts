import clsx from 'clsx';
import { UseButtonStyles, UseButtonStylesReturn } from 'types';
import { CLASSNAMES, CLASSNAME_PREFIX, CLASSNAME_SUFFIX } from 'core';
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
    // [CLASSNAMES.BUTTON.root]: deepMerge(
    //   theme.components.Button.root,
    //   jss?.root
    // ),
    // [CLASSNAMES.BUTTON.startIcon]: deepMerge(
    //   theme.components.Button.startIcon,
    //   jss?.startIcon
    // ),
    // [CLASSNAMES.BUTTON.endIcon]: deepMerge(
    //   theme.components.Button.endIcon,
    //   jss?.endIcon
    // ),
    // [CLASSNAMES.BUTTON.loadingIcon]: deepMerge(
    //   theme.components.Button.loadingIcon,
    //   jss?.loadingIcon
    // ),
    // TODO - use react-jss !!!
    [CLASSNAMES.BUTTON.root]: theme.components.Button.root,
    [`${CLASSNAMES.BUTTON.root}_custom`]: jss?.root,
    [CLASSNAMES.BUTTON.startIcon]: theme.components.Button.startIcon,
    [`${CLASSNAMES.BUTTON.startIcon}_custom`]: jss?.startIcon,
    [CLASSNAMES.BUTTON.endIcon]: theme.components.Button.endIcon,
    [`${CLASSNAMES.BUTTON.endIcon}_custom`]: jss?.endIcon,
    [CLASSNAMES.BUTTON.loadingIcon]: theme.components.Button.loadingIcon,
    [`${CLASSNAMES.BUTTON.loadingIcon}_custom`]: jss?.loadingIcon,
  };

  const { classes } = useAttachStylesheet(stylesheet).attach();

  return {
    root: {
      className: clsx(
        classes[CLASSNAMES.BUTTON.root],
        classes[`${CLASSNAMES.BUTTON.root}_custom`],
        `${CLASSNAME_PREFIX.size}${size}`,
        `${CLASSNAME_PREFIX.variant}${variant}`,
        `${CLASSNAME_PREFIX.color}${color}`,
        isLoading && CLASSNAMES.__STATE.loading,
        isActive && CLASSNAMES.__STATE.active,
        fullWidth && `${CLASSNAMES.BUTTON.root}${CLASSNAME_SUFFIX.fullWidth}`,
        className
      ),
      style,
    },
    startIcon: {
      className: clsx(
        classes[CLASSNAMES.BUTTON.startIcon],
        classes[`${CLASSNAMES.BUTTON.startIcon}_custom`],
        startIconProps?.className
      ),
      style: { ...startIconProps?.style },
    },
    endIcon: {
      className: clsx(
        classes[CLASSNAMES.BUTTON.endIcon],
        classes[`${CLASSNAMES.BUTTON.endIcon}_custom`],
        endIconProps?.className
      ),
      style: {
        ...endIconProps?.style,
      },
    },
    loadingIcon: {
      className: clsx(
        classes[CLASSNAMES.BUTTON.loadingIcon],
        classes[`${CLASSNAMES.BUTTON.loadingIcon}_custom`],
        loadingIconProps?.className
      ),
      style: {
        ...loadingIconProps?.style,
      },
    },
  };
};
