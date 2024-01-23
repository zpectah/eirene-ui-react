export const CLASSNAME_PREFIX = {
  size: 'size--',
  variant: 'variant--',
  color: 'color--',
  is: 'is--',
};

export const CLASSNAME_SUFFIX = {
  fullWidth: '--fullWidth',
};

export const CLASSNAMES = {
  __STATE: {
    disabled: `${CLASSNAME_PREFIX.is}disabled`,
    loading: `${CLASSNAME_PREFIX.is}loading`,
    active: `${CLASSNAME_PREFIX.is}active`,
  },
  __VARIANT: {
    contained: `${CLASSNAME_PREFIX.variant}contained`,
    outlined: `${CLASSNAME_PREFIX.variant}outlined`,
    text: `${CLASSNAME_PREFIX.variant}text`,
  },
  __COLOR: {
    primary: `${CLASSNAME_PREFIX.color}primary`,
    secondary: `${CLASSNAME_PREFIX.color}secondary`,
    tertiary: `${CLASSNAME_PREFIX.color}tertiary`,
    error: `${CLASSNAME_PREFIX.color}error`,
    warning: `${CLASSNAME_PREFIX.color}warning`,
    info: `${CLASSNAME_PREFIX.color}info`,
    success: `${CLASSNAME_PREFIX.color}success`,
    inverted: `${CLASSNAME_PREFIX.color}inverted`,
  },
  __SIZE: {
    small: `${CLASSNAME_PREFIX.size}small`,
    medium: `${CLASSNAME_PREFIX.size}medium`,
    large: `${CLASSNAME_PREFIX.size}large`,
  },
  BUTTON: {
    base: 'ButtonBase',
    root: 'Button',
    startIcon: 'Button-startIcon',
    endIcon: 'Button-endIcon',
    loadingIcon: 'Button-loadingIcon',
  },
  BADGE: {
    root: 'Badge',
  },
  CHIP: {
    root: 'Chip',
    actionIcon: 'Chip-actionIcon',
  },
};
