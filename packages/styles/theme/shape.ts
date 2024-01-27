import { ThemeShape } from 'types';

export const createThemeShape = (shape?: Partial<ThemeShape>): ThemeShape => {
  const borderRadius = {
    small: shape?.borderRadius?.small || '0.125rem',
    medium: shape?.borderRadius?.medium || '0.25rem',
    large: shape?.borderRadius?.large || '0.5rem',
  };

  return {
    borderRadius,
  };
};
