import React, { useState } from 'react';
import { UiProviderProps, Theme, ThemeMode } from 'types';
import { UiContextProvider } from '../UiContext';

import { defaultTheme } from '../theme';

const UiProvider = ({ children, theme }: UiProviderProps) => {
  /*
   *
   * TODO
   * Tady bude výchozí Theme objekt
   * Pokud přijdou nějaké změny v theme - opatrně mergnout celý objekt a nahradit nové údaje
   *
   * */
  const [uiTheme, setUiTheme] = useState<Theme>({
    ...defaultTheme,
    ...theme,
  });

  const setThemeHandler = (theme: Partial<Theme>) => {
    const composedTheme = {
      ...defaultTheme,
      ...theme,
    };
    console.log('composedTheme', composedTheme); // TODO #delete
    setUiTheme(composedTheme);
  };
  const setThemeModeHandler = (mode: ThemeMode) => {
    const composedTheme = {
      ...uiTheme,
      palette: {
        mode,
      },
    };
    console.log('composedTheme', composedTheme); // TODO #delete
    setUiTheme(composedTheme);
  };

  const defaultProviderValues = {
    theme: uiTheme,
    setTheme: setThemeHandler,
    setThemeMode: setThemeModeHandler,
  };

  console.log('Ui provider is loaded', defaultProviderValues);

  return (
    <UiContextProvider value={defaultProviderValues}>
      {children}
    </UiContextProvider>
  );
};

export default UiProvider;
