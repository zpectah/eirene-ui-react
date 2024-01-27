import React, { useMemo } from 'react';
import { Global, css, SerializedStyles } from '@emotion/react';
import { Theme, UiProviderProps } from 'types';
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
  const defaultProviderValues = useMemo(() => {
    return {
      theme: createTheme(theme),
      setTheme: (theme: Partial<Theme>) => createTheme(theme),
      // TODO
      setThemeMode: () => {},
      toggleThemeMode: () => {},
    };
  }, [theme]);

  const defaultGlobalStyles = css([
    applyCSSReset && cssReset,
    applyGlobalStyles && createGlobalStyles(),
    styles as SerializedStyles,
  ]);

  console.log('Provider is loaded', defaultProviderValues);

  return (
    <UiContextProvider value={defaultProviderValues}>
      <Global styles={defaultGlobalStyles} />
      {children}
    </UiContextProvider>
  );
};

export default UiProvider;
