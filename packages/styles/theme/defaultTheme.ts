import { Theme, themeDirectionKeys, themeModeKeys } from 'types';

const defaultTheme: Theme = {
  breakpoints: {},
  components: {
    ButtonBase: {
      root: {},
    },
    Button: {
      root: {
        margin: 0,
        padding: 0,
      },
      startIcon: {},
      endIcon: {},
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
