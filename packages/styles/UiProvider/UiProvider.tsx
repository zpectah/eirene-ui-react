import React, { useEffect, useState } from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
import { UiProviderProps, Theme, ThemeMode } from 'types';
import { globalStyle } from '../global';
import { defaultTheme } from '../theme';
import { UiContextProvider } from '../UiContext';

jss.setup(preset());

const UiProvider = ({ children, theme, withGlobalStyles }: UiProviderProps) => {
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
    // console.log('composedTheme', composedTheme); // TODO #delete
    setUiTheme(composedTheme);
  };
  const setThemeModeHandler = (mode: ThemeMode) => {
    const composedTheme = {
      ...uiTheme,
      palette: {
        mode,
      },
    };
    // console.log('composedTheme', composedTheme); // TODO #delete
    setUiTheme(composedTheme);
  };

  const defaultProviderValues = {
    theme: uiTheme,
    setTheme: setThemeHandler,
    setThemeMode: setThemeModeHandler,
  };

  console.log('Ui provider is loaded', defaultProviderValues); // TODO #delete

  useEffect(() => {
    if (withGlobalStyles) jss.createStyleSheet(globalStyle).attach().toString();
  }, [withGlobalStyles]);

  return (
    <UiContextProvider value={defaultProviderValues}>
      {children}
    </UiContextProvider>
  );
};

export default UiProvider;
