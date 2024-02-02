import { DeepPartial, ThemeComponents } from 'types';

export const createThemeComponents = (components?: DeepPartial<ThemeComponents>) => {
  return {
    Button: {
      root: components?.Button?.root,
      iconStart: components?.Button?.iconStart,
      iconEnd: components?.Button?.iconEnd,
      iconLoading: components?.Button?.iconLoading,
    },
  };
};
