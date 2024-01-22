import color from 'color';
import { Theme, themeDirectionKeys, themeModeKeys } from 'types';
import { CLASSNAMES } from 'core';
import { deepMerge } from 'utils';
import { palette as colorPalette } from './palette';
import Color from 'color';

// Style common prefixes
const __onDisabled = '&:disabled';
const __onHover = '&:hover';
const __onFocus = '&:focus';
const __onActive = '&:active';
const __onHoverFocus = '&:hover, &:focus';
const __onHoverFocusActive = '&:hover, &:focus, &:active';

const __isLoading = `&.${CLASSNAMES.__STATE.loading}`;
const __isActive = `&.${CLASSNAMES.__STATE.active}`;
const __isDisabled = `&.${CLASSNAMES.__STATE.disabled}`;
const __isDisabledAlt = `${__onDisabled}, &.${CLASSNAMES.__STATE.disabled}`;

const getButtonLikeVariants = (
  key:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'error'
    | 'warning'
    | 'info'
    | 'success'
    | 'inverted',
  palette: Theme['palette']
) => {
  return {
    [`&.variant--contained`]: {
      backgroundColor: palette[key].main,
      color: palette[key].text,
      borderColor: palette[key].main,

      [`${__onHoverFocus}:not(${__isDisabledAlt})`]: {},
      [__isDisabledAlt]: {
        backgroundColor: palette.action.disabled,
        color: color(palette.action.disabled).darken(0.5).toString(),
        borderColor: palette.action.disabled,
      },
    },
    [`&.variant--outlined`]: {
      backgroundColor: 'transparent',
      color: palette[key].main,
      borderColor: palette[key].main,

      [`${__onHoverFocus}:not(${__isDisabledAlt})`]: {},
      [__isDisabledAlt]: {
        borderColor: palette[key].main,
      },
    },
    [`&.variant--text`]: {
      backgroundColor: 'transparent',
      color: palette[key].main,
      borderColor: 'transparent',

      [`${__onHoverFocus}:not(${__isDisabledAlt})`]: {},
      [__isDisabledAlt]: {
        borderColor: palette[key].main,
      },
    },
  };
};

export const createTheme = (theme?: Partial<Theme>): Theme => {
  // Theme prepared objects
  // What comes from theme props will be processed, so there are default values
  const preparedPalette = {
    primary: theme?.palette?.primary.main || colorPalette.primary,
    secondary: theme?.palette?.secondary.main || colorPalette.secondary,
    tertiary: theme?.palette?.tertiary.main || colorPalette.tertiary,
    error: theme?.palette?.error.main || colorPalette.error,
    warning: theme?.palette?.warning.main || colorPalette.warning,
    info: theme?.palette?.info.main || colorPalette.info,
    success: theme?.palette?.success.main || colorPalette.success,
    inverted: theme?.palette?.inverted.main || colorPalette.light,
  };
  const preparedActionColors = {
    hover: theme?.palette?.action.hover || colorPalette.hover,
    disabled: theme?.palette?.action.disabled || colorPalette.disabled,
    active: theme?.palette?.action.active || colorPalette.active,
  };
  const preparedActionOpacities = {
    hoverOpacity: theme?.palette?.action.hoverOpacity || 0.075,
    disabledOpacity: theme?.palette?.action.disabledOpacity || 0.5,
    activeOpacity: theme?.palette?.action.activeOpacity || 0.25,
  };

  // Theme sub-objects
  const breakpoints: Theme['breakpoints'] = {};
  const palette: Theme['palette'] = {
    mode: themeModeKeys.light,
    common: {
      black: colorPalette.black,
      white: colorPalette.white,
    },
    primary: {
      main: preparedPalette.primary,
      light: color(preparedPalette.primary).lighten(0.5).string(),
      dark: color(preparedPalette.primary).darken(0.5).string(),
      text: colorPalette.light,
    },
    secondary: {
      main: preparedPalette.secondary,
      light: color(preparedPalette.secondary).lighten(0.5).string(),
      dark: color(preparedPalette.secondary).darken(0.5).string(),
      text: colorPalette.light,
    },
    tertiary: {
      main: preparedPalette.tertiary,
      light: color(preparedPalette.tertiary).lighten(0.5).string(),
      dark: color(preparedPalette.tertiary).darken(0.5).string(),
      text: colorPalette.light,
    },
    error: {
      main: preparedPalette.error,
      light: color(preparedPalette.error).lighten(0.5).string(),
      dark: color(preparedPalette.error).darken(0.5).string(),
      text: colorPalette.light,
    },
    warning: {
      main: preparedPalette.warning,
      light: color(preparedPalette.warning).lighten(0.5).string(),
      dark: color(preparedPalette.warning).darken(0.5).string(),
      text: colorPalette.light,
    },
    info: {
      main: preparedPalette.info,
      light: color(preparedPalette.info).lighten(0.5).string(),
      dark: color(preparedPalette.info).darken(0.5).string(),
      text: colorPalette.light,
    },
    success: {
      main: preparedPalette.success,
      light: color(preparedPalette.success).lighten(0.5).string(),
      dark: color(preparedPalette.success).darken(0.5).string(),
      text: colorPalette.light,
    },
    inverted: {
      main: preparedPalette.inverted,
      light: color(preparedPalette.inverted).lighten(0.5).string(),
      dark: color(preparedPalette.inverted).darken(0.5).string(),
      text: colorPalette.dark,
    },
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
        [__onHoverFocusActive]: {
          textDecoration: 'none',
        },
        [__isDisabledAlt]: {
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
        // fontSize: 16,
        // color: 'rgb(255,255,255)',
        // backgroundColor: 'rgb(250,0,0)',

        // TODO
        // '@media (min-width: 1024px)': {
        //   fontSize: 12,
        // },
        // TODO
        borderRadius: '.25rem',

        // TODO
        // [`&[a]`]: {
        //   '-webkit-appearance': 'button',
        //   '-moz-appearance': 'button',
        //   appearance: 'button',
        // },

        [__onHover]: {},
        [__onActive]: {},
        [__onFocus]: {},

        // [`${__onHoverFocus}:not(${__isDisabledAlt})`]: {
        //   boxShadow: `inset 0 0 0 3rem ${palette.action.hover}`,
        // },

        [__isLoading]: {
          position: 'relative',
          overflow: 'hidden',
        },
        [__isActive]: {},
        // [__isDisabledAlt]: {
        //   boxShadow: `inset 0 0 0 3rem ${palette.action.disabled}`,
        //   borderColor: palette.action.disabled,
        // },

        // Button isFullWidth
        [`&.${CLASSNAMES.BUTTON.root}${CLASSNAMES.__SUFFIX.fullWidth}`]: {
          width: '100%',
        },

        // Button sizes
        [`&.size--small`]: {
          padding: '0.125rem 0.25rem',
          fontSize: '0.8rem',
          lineHeight: '0.9rem',
        },
        [`&.size--medium`]: {
          padding: '0.25rem 0.5rem',
          fontSize: '1rem',
          lineHeight: '1.125rem',
        },
        [`&.size--large`]: {
          padding: '0.35rem 0.75rem',
          fontSize: '1rem',
          lineHeight: '1.125rem',
        },

        // Button colors & variants
        [`&.color--primary`]: getButtonLikeVariants('primary', palette),
        [`&.color--secondary`]: getButtonLikeVariants('secondary', palette),
        [`&.color--tertiary`]: getButtonLikeVariants('tertiary', palette),
        [`&.color--error`]: getButtonLikeVariants('error', palette),
        [`&.color--warning`]: getButtonLikeVariants('warning', palette),
        [`&.color--info`]: getButtonLikeVariants('info', palette),
        [`&.color--success`]: getButtonLikeVariants('success', palette),
        // TODO
        [`&.color--inverted`]: {
          [`&.variant--contained`]: {
            backgroundColor: palette.inverted.main,
            color: palette.inverted.text,
            borderColor: palette.inverted.main,

            [`${__onHoverFocus}:not(${__isDisabledAlt})`]: {},
            [__isDisabledAlt]: {},
          },
          [`&.variant--outlined`]: {
            backgroundColor: 'transparent',
            color: palette.inverted.main,
            borderColor: palette.inverted.main,

            [`${__onHoverFocus}:not(${__isDisabledAlt})`]: {},
            [__isDisabledAlt]: {},
          },
          [`&.variant--text`]: {
            backgroundColor: 'transparent',
            color: palette.inverted.main,
            borderColor: 'transparent',

            [`${__onHoverFocus}:not(${__isDisabledAlt})`]: {},
            [__isDisabledAlt]: {},
          },
        },
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

const defaultTheme: Theme = createTheme();

export default defaultTheme;
