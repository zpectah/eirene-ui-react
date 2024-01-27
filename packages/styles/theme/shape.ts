import { ThemeShape } from 'types';

export const createThemeShape = (shape?: Partial<ThemeShape>): ThemeShape => {
  return {
    borderRadius: {
      small: '0.125rem',
      medium: '0.25rem',
      large: '0.5rem',
    },
  };
};
