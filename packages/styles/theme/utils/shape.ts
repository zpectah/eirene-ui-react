import Color from 'color';

export const getFocusPropertyValue = (
  background: string,
  focusOutlineAlpha: number,
  focusOutlineWidth: string
) => {
  return {
    outline: `${focusOutlineWidth} solid ${Color(background).alpha(focusOutlineAlpha).toString()}`,
  };
};

export const getContainedButtonVariant = (
  background: string,
  hover: string,
  contrast: string,
  disabled: string,
  focusOutlineWidth: string,
  focusOutlineAlpha: number,
  inverted?: boolean
) => {
  return {
    backgroundColor: background,
    color: contrast,
    borderColor: background,

    '&:hover:not(&.is--disabled)': {
      boxShadow: `inset 0 0 0 2.5rem ${hover}`,
      borderColor: hover,
    },

    '&:focus': getFocusPropertyValue(
      background,
      focusOutlineAlpha,
      focusOutlineWidth
    ),

    '&:disabled, &[disabled], &.is--disabled': inverted
      ? {
          backgroundColor: background,
          color: contrast,
          borderColor: background,
        }
      : {
          backgroundColor: disabled,
          borderColor: 'transparent',
          textShadow: `0 1px .25rem ${disabled}`,
        },
  };
};

export const getOutlinedButtonVariant = (
  background: string,
  hover: string,
  contrast: string,
  disabled: string,
  focusOutlineWidth: string,
  focusOutlineAlpha: number,
  hoverShadowAlpha: number,
  inverted?: boolean
) => {
  return {
    backgroundColor: 'transparent',
    color: background,
    borderColor: background,

    '&:hover:not(&.is--disabled)': {
      boxShadow: `inset 0 0 0 2.5rem ${Color(hover).alpha(hoverShadowAlpha).toString()}`,
      color: hover,
      borderColor: hover,
    },

    '&:focus': getFocusPropertyValue(
      background,
      focusOutlineAlpha,
      focusOutlineWidth
    ),

    '&:disabled, &[disabled], &.is--disabled': inverted
      ? {
          color: background,
          borderColor: background,
        }
      : {
          color: disabled,
          borderColor: disabled,
        },
  };
};

export const getTextButtonVariant = (
  background: string,
  hover: string,
  contrast: string,
  disabled: string,
  focusOutlineWidth: string,
  focusOutlineAlpha: number,
  hoverShadowAlpha: number,
  inverted?: boolean
) => {
  return {
    backgroundColor: 'transparent',
    color: background,
    borderColor: 'transparent',

    '&:hover:not(&.is--disabled)': {
      boxShadow: `inset 0 0 0 2.5rem ${Color(hover).alpha(hoverShadowAlpha).toString()}`,
      color: hover,
    },

    '&:focus': getFocusPropertyValue(
      background,
      focusOutlineAlpha,
      focusOutlineWidth
    ),

    '&:disabled, &[disabled], &.is--disabled': inverted
      ? {
          color: background,
        }
      : {
          color: disabled,
        },
  };
};
