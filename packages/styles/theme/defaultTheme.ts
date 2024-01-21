import { Theme, themeDirectionKeys, themeModeKeys } from 'types';
import { CLASSNAMES } from 'core';

const __onHover = '&:hover';
const __onFocus = '&:focus';

const __isLoading = `&.${CLASSNAMES.__STATE.loading}`;
const __isDisabled = `&.${CLASSNAMES.__STATE.disabled}`;
const __isActive = `&.${CLASSNAMES.__STATE.active}`;

const defaultTheme: Theme = {
  breakpoints: {},
  components: {
    ButtonBase: {
      root: {
        margin: 0,
        padding: 0,
        display: 'inline-flex',
        border: 0,
        fontSize: 14,
        // TODO
        // '@media (min-width: 1024px)': {
        //   fontSize: 12,
        // },
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
      },
      startIcon: {},
      endIcon: {},
      loadingIcon: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(200,200,200,.5)',
      },
    },
  },
  palette: {
    mode: themeModeKeys.light,
  },
  spacing: {},
  shapes: {},
  typography: {
    direction: themeDirectionKeys.ltr,
  },
  transitions: {},
  zIndex: {},
};

export default defaultTheme;
