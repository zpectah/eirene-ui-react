import { ThemeShape } from 'types';

export const createThemeShape = (shape?: Partial<ThemeShape>): ThemeShape => {
  const borderRadius = {
    small: shape?.borderRadius?.small || '0.125rem', // TODO #default-values
    medium: shape?.borderRadius?.medium || '0.25rem', // TODO #default-values
    large: shape?.borderRadius?.large || '0.5rem', // TODO #default-values
  };
  const borderWidth = {
    button: shape?.borderWidth?.button || '1px', // TODO #default-values
    input: shape?.borderWidth?.input || '1px', // TODO #default-values
    divider: shape?.borderWidth?.divider || '1px', // TODO #default-values
  };

  return {
    borderRadius,
    borderWidth,
  };
};
