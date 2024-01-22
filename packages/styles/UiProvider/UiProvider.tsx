import React, { useCallback, useMemo, useState } from 'react';
import { UiProviderProps, Theme, ThemeMode } from 'types';
import { deepMerge } from 'utils';
import { globalStyle } from '../global';
import { defaultTheme, createTheme } from '../theme';
import { useAttachStylesheet } from '../hooks';
import { UiContextProvider } from '../UiContext';

const UiProvider = ({ children, theme, withGlobalStyles }: UiProviderProps) => {
  const [uiTheme, setUiTheme] = useState<Theme>({
    ...defaultTheme,
    ...theme,
  });

  const setThemeHandler = (theme: Partial<Theme>) => {
    const newTheme = createTheme(theme);
    const composedTheme = deepMerge(defaultTheme, newTheme);

    setUiTheme(composedTheme);
  };

  const setThemeModeHandler = useCallback(
    (mode: ThemeMode) => {
      const composedTheme = deepMerge(uiTheme, {
        palette: { ...uiTheme.palette, mode },
      });

      setUiTheme(composedTheme);
    },
    [uiTheme]
  );

  const toggleThemeModeHandler = useCallback(() => {
    const mode = uiTheme.palette.mode === 'light' ? 'dark' : 'light'; // TODO
    const composedTheme = deepMerge(uiTheme, {
      palette: { ...uiTheme.palette, mode },
    });

    setUiTheme(composedTheme);
  }, [uiTheme]);

  const defaultProviderValues = useMemo(() => {
    return {
      theme: uiTheme,
      setTheme: setThemeHandler,
      setThemeMode: setThemeModeHandler,
      toggleThemeMode: toggleThemeModeHandler,
    };
  }, [uiTheme]);

  if (withGlobalStyles) useAttachStylesheet(globalStyle).attach();

  return (
    <UiContextProvider value={defaultProviderValues}>
      {children}
    </UiContextProvider>
  );
};

export default UiProvider;
