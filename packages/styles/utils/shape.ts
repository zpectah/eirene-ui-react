import Color from 'color';
import { STATUS_CLASS_NAMES, BUTTON_ICON_LOADING } from 'core';
import { ButtonStylesProps, ThemePalette } from 'types';

export const getFocusPropertyValue = (background: string, focusOutlineAlpha: number, focusOutlineWidth: string) => {
  return {
    outline: `${focusOutlineWidth} solid ${Color(background).alpha(focusOutlineAlpha).toString()}`,
  };
};

export const getContainedButtonLikeVariant = (palette: ThemePalette, { color }: ButtonStylesProps) => {
  const baseColor = palette[color];
  const isInverted = color === 'inverted';
  const isLightMode = palette.mode === 'light';

  const bgMain = baseColor.main;
  const bgLight = baseColor.light;
  const bgDark = baseColor.dark;
  const bgContrast = baseColor.contrast;
  const bgDisabled = palette.action.disabled;

  // TODO
  const HOVER_SHADOW_WIDTH = '3.5rem';
  const FOCUS_OUTLINE_WIDTH = '2px';
  const FOCUS_OUTLINE_ALPHA = 0.5;
  const DISABLED_INVERTED_ALPHA = 0.5;
  const HOVER_SHADOW_ALPHA = 0.05;
  const LOADING_ALPHA = HOVER_SHADOW_ALPHA * 2.5;

  return {
    backgroundColor: bgMain,
    color: bgContrast,
    borderColor: bgMain,

    [`&:hover:not(&.${STATUS_CLASS_NAMES.isDisabled})`]: isInverted
      ? {
          boxShadow: `inset 0 0 0 ${HOVER_SHADOW_WIDTH} ${isLightMode ? bgLight : bgDark}`,
          borderColor: isLightMode ? bgLight : bgDark,
        }
      : {
          boxShadow: `inset 0 0 0 ${HOVER_SHADOW_WIDTH} ${isLightMode ? bgDark : bgLight}`,
          borderColor: isLightMode ? bgDark : bgLight,
        },
    ['&:focus']: getFocusPropertyValue(bgLight, FOCUS_OUTLINE_ALPHA, FOCUS_OUTLINE_WIDTH),
    [`&.${STATUS_CLASS_NAMES.isDisabled}`]: isInverted
      ? {
          backgroundColor: bgDisabled,
          color: Color(bgMain).alpha(DISABLED_INVERTED_ALPHA).toString(),
          borderColor: bgDisabled,
        }
      : {
          backgroundColor: bgDisabled,
          borderColor: 'transparent',
          textShadow: `0 1px .25rem ${bgDisabled}`,
        },
    [`&.${STATUS_CLASS_NAMES.isLoading} .${BUTTON_ICON_LOADING}`]: {
      color: bgContrast,
      backgroundColor: Color(bgMain).alpha(LOADING_ALPHA).toString(),
    },
    [`&.${STATUS_CLASS_NAMES.isActive}`]: {
      /* TODO */
    },
    [`&.${STATUS_CLASS_NAMES.isActive}:hover`]: {
      /* TODO */
    },
  };
};

export const getOutlinedButtonLikeVariant = (palette: ThemePalette, { color }: ButtonStylesProps) => {
  const baseColor = palette[color];
  const isInverted = color === 'inverted';
  const isLightMode = palette.mode === 'light';

  const bgMain = baseColor.main;
  const bgLight = baseColor.light;
  const bgDark = baseColor.dark;
  // const bgContrast = baseColor.contrast;
  const bgDisabled = palette.action.disabled;

  // TODO
  const HOVER_SHADOW_WIDTH = '3.5rem';
  const FOCUS_OUTLINE_WIDTH = '2px';
  const FOCUS_OUTLINE_ALPHA = 0.5;
  const HOVER_SHADOW_ALPHA = 0.05;
  const LOADING_ALPHA = HOVER_SHADOW_ALPHA * 2.5;

  return {
    backgroundColor: 'transparent',
    color: bgMain,
    borderColor: bgMain,

    [`&:hover:not(&.${STATUS_CLASS_NAMES.isDisabled})`]: isInverted
      ? {
          boxShadow: `inset 0 0 0 ${HOVER_SHADOW_WIDTH} ${Color(isLightMode ? bgLight : bgDark)
            .alpha(HOVER_SHADOW_ALPHA)
            .toString()}`,
          color: isLightMode ? bgLight : bgDark,
          borderColor: isLightMode ? bgLight : bgDark,
        }
      : {
          boxShadow: `inset 0 0 0 ${HOVER_SHADOW_WIDTH} ${Color(bgLight).alpha(HOVER_SHADOW_ALPHA).toString()}`,
          color: isLightMode ? bgDark : bgLight,
          borderColor: isLightMode ? bgDark : bgLight,
        },
    ['&:focus']: getFocusPropertyValue(bgLight, FOCUS_OUTLINE_ALPHA, FOCUS_OUTLINE_WIDTH),
    [`&.${STATUS_CLASS_NAMES.isDisabled}`]: isInverted
      ? {
          color: bgDisabled,
          borderColor: bgDisabled,
        }
      : {
          color: bgDisabled,
          borderColor: bgDisabled,
        },
    [`&.${STATUS_CLASS_NAMES.isLoading} .${BUTTON_ICON_LOADING}`]: {
      color: bgMain,
      backgroundColor: Color(bgMain).alpha(LOADING_ALPHA).toString(),
    },
    [`&.${STATUS_CLASS_NAMES.isActive}`]: {
      /* TODO */
    },
    [`&.${STATUS_CLASS_NAMES.isActive}:hover`]: {
      /* TODO */
    },
  };
};

export const getTextButtonLikeVariant = (palette: ThemePalette, { color }: ButtonStylesProps) => {
  const baseColor = palette[color];
  const isInverted = color === 'inverted';
  const isLightMode = palette.mode === 'light';

  const bgMain = baseColor.main;
  const bgLight = baseColor.light;
  const bgDark = baseColor.dark;
  // const bgContrast = baseColor.contrast;
  const bgDisabled = palette.action.disabled;

  // TODO
  const HOVER_SHADOW_WIDTH = '3.5rem';
  const FOCUS_OUTLINE_WIDTH = '2px';
  const HOVER_SHADOW_ALPHA = 0.05;
  const FOCUS_OUTLINE_ALPHA = 0.5;
  const LOADING_ALPHA = HOVER_SHADOW_ALPHA * 2.5;

  return {
    backgroundColor: 'transparent',
    color: bgMain,
    borderColor: 'transparent',

    [`&:hover:not(&.${STATUS_CLASS_NAMES.isDisabled})`]: isInverted
      ? {
          boxShadow: `inset 0 0 0 ${HOVER_SHADOW_WIDTH} ${Color(isLightMode ? bgLight : bgDark)
            .alpha(HOVER_SHADOW_ALPHA)
            .toString()}`,
          color: isLightMode ? bgLight : bgDark,
        }
      : {
          boxShadow: `inset 0 0 0 ${HOVER_SHADOW_WIDTH} ${Color(bgLight).alpha(HOVER_SHADOW_ALPHA).toString()}`,
          color: isLightMode ? bgDark : bgLight,
        },
    ['&:focus']: getFocusPropertyValue(bgLight, FOCUS_OUTLINE_ALPHA, FOCUS_OUTLINE_WIDTH),
    [`&.${STATUS_CLASS_NAMES.isDisabled}`]: isInverted
      ? {
          color: bgDisabled,
        }
      : {
          color: bgDisabled,
        },
    [`&.${STATUS_CLASS_NAMES.isLoading} .${BUTTON_ICON_LOADING}`]: {
      color: bgMain,
      backgroundColor: Color(bgMain).alpha(LOADING_ALPHA).toString(),
    },
    [`&.${STATUS_CLASS_NAMES.isActive}`]: {
      /* TODO */
    },
    [`&.${STATUS_CLASS_NAMES.isActive}:hover`]: {
      /* TODO */
    },
  };
};
