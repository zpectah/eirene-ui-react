import React, { useEffect, useMemo, useState } from 'react';
import { Global, css, SerializedStyles } from '@emotion/react';
import { Theme, ThemeMode, themeModeKeys, UiProviderProps } from 'types';
import { createTheme } from '../../theme';
import { UiContextProvider } from '../UiContext';
import { cssReset, createGlobalStyles } from '../../global';

const UiProvider = ({
  children,
  theme,
  styles,
  applyCSSReset,
  applyGlobalStyles,
}: UiProviderProps) => {
  const [uiTheme, setUiTheme] = useState<Theme>(createTheme(theme));

  const setThemeHandler = (theme: Partial<Theme>) =>
    setUiTheme(createTheme(theme));

  const defaultProviderValues = useMemo(() => {
    return {
      theme: uiTheme,
      setTheme: setThemeHandler,
      setThemeMode: (themeMode: ThemeMode) => {
        setUiTheme(
          createTheme(Object.assign({ palette: { mode: themeMode } }))
        );
      },
      toggleThemeMode: () => {
        const newMode =
          uiTheme.palette.mode === themeModeKeys.light
            ? themeModeKeys.dark
            : themeModeKeys.light;

        setUiTheme(createTheme(Object.assign({ palette: { mode: newMode } })));
      },
    };
  }, [uiTheme]);

  const defaultGlobalStyles = css([
    applyCSSReset && cssReset,
    applyGlobalStyles && createGlobalStyles(uiTheme),
    styles as SerializedStyles,
  ]);

  useEffect(() => setUiTheme(createTheme(theme)), [theme]);

  return (
    <UiContextProvider value={defaultProviderValues}>
      <Global styles={defaultGlobalStyles} />
      {children}
    </UiContextProvider>
  );
};

export default UiProvider;
