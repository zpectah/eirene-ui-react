import color from 'color';
import { Theme, themeDirectionKeys, themeModeKeys } from 'types';
import { CLASSNAMES } from 'core';
import { deepMerge } from 'utils';
import { palette as colorPalette } from './palette';

const __onHover = '&:hover';
const __onFocus = '&:focus';

const __isLoading = `&.${CLASSNAMES.__STATE.loading}`;
const __isDisabled = `&.${CLASSNAMES.__STATE.disabled}`;
const __isActive = `&.${CLASSNAMES.__STATE.active}`;

export const createTheme = (theme?: Partial<Theme>): Theme => {
  const preparedPalette = {
    primary: theme?.palette?.primary.main || colorPalette.primary,
    secondary: theme?.palette?.secondary.main || colorPalette.secondary,
    tertiary: theme?.palette?.tertiary.main || colorPalette.tertiary,
    error: theme?.palette?.error.main || colorPalette.error,
    warning: theme?.palette?.warning.main || colorPalette.warning,
    info: theme?.palette?.info.main || colorPalette.info,
    success: theme?.palette?.success.main || colorPalette.success,
  };

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
    action: {
      disabled: '',
      disabledOpacity: 0,
      active: '',
      activeOpacity: 0,
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
        margin: 0,
        padding: 0,
        display: 'inline-flex',
        border: 0,
        color: 'inherit',
        backgroundColor: 'none',
        alignItems: 'space-between',
        justifyContent: 'center',
        cursor: 'pointer',
      },
    },
    Button: {
      root: {
        margin: 0,
        padding: '0 1rem',
        display: 'inline-flex',
        border: 0,
        fontSize: 16,
        color: 'rgb(255,255,255)',
        backgroundColor: 'rgb(250,0,0)',

        // TODO
        // '@media (min-width: 1024px)': {
        //   fontSize: 12,
        // },

        [__onHover]: {
          backgroundColor: 'rgb(0,250,0)',
        },
        [__onFocus]: {},

        [__isLoading]: {
          position: 'relative',
          overflow: 'hidden',
        },
        [__isDisabled]: {},
        [__isActive]: {},

        [`&.${CLASSNAMES.BUTTON.root}${CLASSNAMES.__SUFFIX.fullWidth}`]: {
          width: '100%',
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
