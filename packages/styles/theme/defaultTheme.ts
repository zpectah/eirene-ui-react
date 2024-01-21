import { Theme, themeDirectionKeys, themeModeKeys } from 'types';
import { CLASSNAMES } from 'core';
import { deepMerge } from 'utils';
import { palette as colorPalette } from './palette';

const __onHover = '&:hover';
const __onFocus = '&:focus';

const __isLoading = `&.${CLASSNAMES.__STATE.loading}`;
const __isDisabled = `&.${CLASSNAMES.__STATE.disabled}`;
const __isActive = `&.${CLASSNAMES.__STATE.active}`;

export const getTheme = (theme?: Partial<Theme>): Theme => {
  const breakpoints: Theme['breakpoints'] = {};
  const palette: Theme['palette'] = {
    mode: themeModeKeys.light,
    common: {
      black: colorPalette.black,
      white: colorPalette.white,
    },
    primary: {
      main: colorPalette.primary,
      light: '',
      dark: '',
      text: colorPalette.light,
    },
    secondary: {
      main: colorPalette.secondary,
      light: '',
      dark: '',
      text: colorPalette.light,
    },
    tertiary: {
      main: colorPalette.tertiary,
      light: '',
      dark: '',
      text: colorPalette.light,
    },
    error: {
      main: colorPalette.error,
      light: '',
      dark: '',
      text: colorPalette.light,
    },
    warning: {
      main: colorPalette.warning,
      light: '',
      dark: '',
      text: colorPalette.light,
    },
    info: {
      main: colorPalette.info,
      light: '',
      dark: '',
      text: colorPalette.light,
    },
    success: {
      main: colorPalette.success,
      light: '',
      dark: '',
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

const defaultTheme: Theme = getTheme();

export default defaultTheme;
