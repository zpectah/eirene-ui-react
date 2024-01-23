import color from 'color';
import { Theme, themeDirectionKeys, themeModeKeys } from 'types';
import {
  CLASSNAMES,
  CLASSNAME_PREFIX,
  CLASSNAME_SUFFIX,
  SELECTORS,
  PSEUDO_SELECTORS,
} from 'core';
import { deepMerge } from 'utils';
import { defaultColorPalette } from './palette';

// Style common prefixes
const _withAllDisabled = `&${PSEUDO_SELECTORS.DISABLED}, &${SELECTORS.DISABLED}, &.${CLASSNAMES.__STATE.disabled}`;
const _onHoverFocusNotDisabled = `&${PSEUDO_SELECTORS.HOVER}:not(${_withAllDisabled}), &${PSEUDO_SELECTORS.FOCUS}:not(${_withAllDisabled})`;

export const createTheme = (theme?: Partial<Theme>): Theme => {
  // Theme prepared objects
  // What comes from theme props will be processed, so there are default values
  const preparedPalette = {
    primary: theme?.palette?.primary.main || defaultColorPalette.primary,
    secondary: theme?.palette?.secondary.main || defaultColorPalette.secondary,
    tertiary: theme?.palette?.tertiary.main || defaultColorPalette.tertiary,
    error: theme?.palette?.error.main || defaultColorPalette.error,
    warning: theme?.palette?.warning.main || defaultColorPalette.warning,
    info: theme?.palette?.info.main || defaultColorPalette.info,
    success: theme?.palette?.success.main || defaultColorPalette.success,
    inverted: theme?.palette?.inverted.main || defaultColorPalette.light,
  };
  const preparedActionColors = {
    hover: theme?.palette?.action.hover || defaultColorPalette.hover,
    disabled: theme?.palette?.action.disabled || defaultColorPalette.disabled,
    active: theme?.palette?.action.active || defaultColorPalette.active,
  };
  const preparedActionOpacities = {
    hoverOpacity: theme?.palette?.action.hoverOpacity || 0.075,
    disabledOpacity: theme?.palette?.action.disabledOpacity || 0.25,
    activeOpacity: theme?.palette?.action.activeOpacity || 0.25,
  };

  // Helpers methods
  // TODO

  // Theme sub-objects
  const breakpoints: Theme['breakpoints'] = {};
  const palette: Theme['palette'] = {
    mode: themeModeKeys.light, // TODO - make switcher for incoming mode
    common: {
      black: defaultColorPalette.black,
      white: defaultColorPalette.white,
    },
    primary: {
      main: preparedPalette.primary,
      light: color(preparedPalette.primary).lighten(0.5).string(),
      dark: color(preparedPalette.primary).darken(0.5).string(),
      text: defaultColorPalette.light,
    },
    secondary: {
      main: preparedPalette.secondary,
      light: color(preparedPalette.secondary).lighten(0.5).string(),
      dark: color(preparedPalette.secondary).darken(0.5).string(),
      text: defaultColorPalette.light,
    },
    tertiary: {
      main: preparedPalette.tertiary,
      light: color(preparedPalette.tertiary).lighten(0.5).string(),
      dark: color(preparedPalette.tertiary).darken(0.5).string(),
      text: defaultColorPalette.light,
    },
    error: {
      main: preparedPalette.error,
      light: color(preparedPalette.error).lighten(0.5).string(),
      dark: color(preparedPalette.error).darken(0.5).string(),
      text: defaultColorPalette.light,
    },
    warning: {
      main: preparedPalette.warning,
      light: color(preparedPalette.warning).lighten(0.5).string(),
      dark: color(preparedPalette.warning).darken(0.5).string(),
      text: defaultColorPalette.light,
    },
    info: {
      main: preparedPalette.info,
      light: color(preparedPalette.info).lighten(0.5).string(),
      dark: color(preparedPalette.info).darken(0.5).string(),
      text: defaultColorPalette.light,
    },
    success: {
      main: preparedPalette.success,
      light: color(preparedPalette.success).lighten(0.5).string(),
      dark: color(preparedPalette.success).darken(0.5).string(),
      text: defaultColorPalette.light,
    },
    inverted: {
      main: preparedPalette.inverted,
      light: color(preparedPalette.inverted).lighten(0.5).string(),
      dark: color(preparedPalette.inverted).darken(0.5).string(),
      text: defaultColorPalette.dark,
    },

    // TODO - typography
    // TODO - background
    // TODO - border / divider

    action: {
      hover: color(preparedActionColors.hover)
        .alpha(preparedActionOpacities.hoverOpacity)
        .toString(),
      disabled: color(preparedActionColors.disabled)
        .alpha(preparedActionOpacities.disabledOpacity)
        .toString(),
      active: color(preparedActionColors.active)
        .alpha(preparedActionOpacities.activeOpacity)
        .toString(),
      ...preparedActionOpacities,
    },
  };
  const spacing: Theme['spacing'] = {};
  const shapes: Theme['shapes'] = {};
  const typography: Theme['typography'] = {
    direction: themeDirectionKeys.ltr,
  };
  const transitions: Theme['transitions'] = {};
  const zIndex: Theme['zIndex'] = {};

  // Components helpers methods
  const getButtonLikeVariants = (
    key:
      | 'primary'
      | 'secondary'
      | 'tertiary'
      | 'error'
      | 'warning'
      | 'info'
      | 'success'
      | 'inverted'
  ) => {
    const main = palette[key].main;
    const text = palette[key].text;
    const hover = palette.action.hover;
    const disabled = palette.action.disabled;
    const shadowPrefix = 'inset 0 0 0 2.5rem';
    const isInverted = key === 'inverted';

    return {
      [`&.${CLASSNAMES.__VARIANT.contained}`]: {
        backgroundColor: main,
        color: text,
        borderColor: main,
        [`${_onHoverFocusNotDisabled}`]: !isInverted
          ? {
              boxShadow: `${shadowPrefix} ${hover}`,
            }
          : {
              boxShadow: `${shadowPrefix} ${hover}`,
              borderColor: color(hover).darken(0.1).toString(),
            },
        [_withAllDisabled]: !isInverted
          ? {
              backgroundColor: color(disabled).lighten(3.5).toString(),
              color: color(disabled).darken(5).toString(),
              borderColor: color(disabled).lighten(3.5).toString(),
            }
          : {
              /* Inverted without special definition for disabled */
            },
      },
      [`&.${CLASSNAMES.__VARIANT.outlined}`]: {
        backgroundColor: 'transparent',
        color: main,
        borderColor: main,
        [`${_onHoverFocusNotDisabled}`]: !isInverted
          ? {
              boxShadow: `${shadowPrefix} ${color(main)
                .alpha(palette.action.hoverOpacity)
                .toString()}`,
              color: color(main).darken(palette.action.hoverOpacity).toString(),
              borderColor: color(main)
                .darken(palette.action.hoverOpacity)
                .toString(),
            }
          : {
              boxShadow: `${shadowPrefix} ${hover}`,
              borderColor: hover,
              color: palette.inverted.text,
            },
        [_withAllDisabled]: !isInverted
          ? {
              borderColor: disabled,
              color: disabled,
            }
          : {
              /* Inverted without special definition for disabled */
            },
      },
      [`&.${CLASSNAMES.__VARIANT.text}`]: {
        backgroundColor: 'transparent',
        color: main,
        borderColor: 'transparent',
        [`${_onHoverFocusNotDisabled}`]: !isInverted
          ? {
              boxShadow: `${shadowPrefix} ${color(main)
                .alpha(palette.action.hoverOpacity)
                .toString()}`,
              color: color(main).darken(palette.action.hoverOpacity).toString(),
            }
          : {
              boxShadow: `${shadowPrefix} ${hover}`,
              color: palette.inverted.text,
              borderColor: hover,
            },
        [_withAllDisabled]: !isInverted
          ? {
              color: disabled,
            }
          : {
              /* Inverted without special definition for disabled */
            },
      },
    };
  };

  // Components style definitions
  const components: Theme['components'] = {
    ButtonBase: {
      root: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        textDecoration: 'none',
        verticalAlign: 'middle',
        userSelect: 'none',
        cursor: 'pointer',
        [`&${PSEUDO_SELECTORS.HOVER}, &${PSEUDO_SELECTORS.FOCUS}, &${PSEUDO_SELECTORS.ACTIVE}`]:
          {
            textDecoration: 'none',
          },
        [`${_withAllDisabled}`]: {
          pointerEvents: 'none',
          cursor: 'default',
        },
      },
    },
    Button: {
      root: {
        margin: 0,

        // TODO
        borderWidth: '1px',
        borderStyle: 'solid',

        // TODO
        borderRadius: '.25rem',

        // TODO
        transition: `background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms`,

        // Button is loading
        [`&.${CLASSNAMES.__STATE.loading}`]: {
          position: 'relative',
          overflow: 'hidden',
        },

        // Button is active
        [`&.${CLASSNAMES.__STATE.active}`]: {},

        // Button isFullWidth
        [`&.${CLASSNAMES.BUTTON.root}${CLASSNAME_SUFFIX.fullWidth}`]: {
          width: '100%',
        },

        // Button sizes
        [`&.${CLASSNAMES.__SIZE.small}`]: {
          padding: '0.125rem 0.25rem',
          fontSize: '0.8rem',
          lineHeight: '0.9rem',
        },
        [`&.${CLASSNAMES.__SIZE.medium}`]: {
          padding: '0.25rem 0.5rem',
          fontSize: '1rem',
          lineHeight: '1.125rem',
        },
        [`&.${CLASSNAMES.__SIZE.large}`]: {
          padding: '0.35rem 0.75rem',
          fontSize: '1rem',
          lineHeight: '1.125rem',
        },

        // Button colors & variants
        [`&.${CLASSNAMES.__COLOR.primary}`]: getButtonLikeVariants('primary'),
        [`&.${CLASSNAMES.__COLOR.secondary}`]:
          getButtonLikeVariants('secondary'),
        [`&.${CLASSNAMES.__COLOR.tertiary}`]: getButtonLikeVariants('tertiary'),
        [`&.${CLASSNAMES.__COLOR.error}`]: getButtonLikeVariants('error'),
        [`&.${CLASSNAMES.__COLOR.warning}`]: getButtonLikeVariants('warning'),
        [`&.${CLASSNAMES.__COLOR.info}`]: getButtonLikeVariants('info'),
        [`&.${CLASSNAMES.__COLOR.success}`]: getButtonLikeVariants('success'),
        [`&.${CLASSNAMES.__COLOR.inverted}`]: getButtonLikeVariants('inverted'),
      },
      startIcon: {},
      endIcon: {},
      loadingIcon: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        backgroundColor: 'rgba(25,25,25, .5)',
      },
    },
  };

  const composedTheme = {
    breakpoints,
    palette,
    spacing,
    shapes,
    typography,
    transitions,
    zIndex,
    components,
  };

  return deepMerge(composedTheme, theme);
};
