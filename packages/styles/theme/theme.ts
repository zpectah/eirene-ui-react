import { Theme, themeDirectionKeys, themeModeKeys } from 'types';

const defaultTheme: Theme = {
  breakpoints: {},
  components: {},
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
