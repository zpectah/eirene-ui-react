import { Theme, themeDirectionKeys, themeModeKeys } from 'types';

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
        '&:hover': {
          backgroundColor: 'rgb(0,250,0)',
        },
      },
      // startIcon: {},
      // endIcon: {},
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
