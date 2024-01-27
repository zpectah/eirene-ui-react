import { ThemeTransitions } from 'types';

export const createThemeTransitions = (
  transitions?: Partial<ThemeTransitions>
): ThemeTransitions => {
  return {
    easing: {
      easeInOut:
        transitions?.easing?.easeInOut || 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: transitions?.easing?.easeOut || 'cubic-bezier(0.0, 0, 0.2, 1)',
      easeIn: transitions?.easing?.easeIn || 'cubic-bezier(0.4, 0, 1, 1)',
      sharp: transitions?.easing?.sharp || 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
    duration: {
      shortest: transitions?.duration?.shortest || 125,
      short: transitions?.duration?.short || 250,
      standard: transitions?.duration?.standard || 300,
      complex: transitions?.duration?.complex || 375,
      screen: transitions?.duration?.screen || 200,
    },
  };
};
