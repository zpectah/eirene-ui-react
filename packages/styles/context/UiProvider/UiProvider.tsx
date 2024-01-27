import React, { useMemo } from 'react';
import { Global, css, SerializedStyles } from '@emotion/react';
import { UiProviderProps } from 'types';
import { theme } from '../../theme';
import { UiContextProvider } from '../UiContext';

const UiProvider = (props: UiProviderProps) => {
  const defaultProviderValues = useMemo(() => {
    return {
      theme, // TODO
      setTheme: () => {}, // TODO
      setThemeMode: () => {}, // TODO
      toggleThemeMode: () => {}, // TODO
    };
  }, []);

  const defaultGlobalStyles = css([
    props.applyCSSReset && {
      [`*:where(:not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *))`]:
        {
          all: 'unset',
          display: 'revert',
        },
      [`*, *::before, *::after`]: {
        boxSizing: 'border-box',
      },
      [`a, button`]: {
        cursor: 'revert',
      },
      [`ol, ul, menu`]: {
        listStyle: 'none',
      },
      [`img`]: {
        maxInlineSize: '100%',
        maxBlockSize: '100%',
      },
      [`table`]: {
        borderCollapse: 'collapse',
      },
      [`input, textarea`]: {
        WebkitUserSelect: 'auto',
      },
      ['textarea']: {
        whiteSpace: 'revert',
      },
      [`meter`]: {
        WebkitAppearance: 'revert',
        appearance: 'revert',
      },
      [`:where(pre)`]: {
        all: 'revert',
      },
      [`::placeholder`]: {
        color: 'unset',
      },
      [`::marker`]: {
        content: 'initial',
      },
      [`:where([hidden])`]: {
        display: 'none',
      },
      [`:where([contenteditable]:not([contenteditable="false"]))`]: {
        MozUserModify: 'read-write',
        WebkitUserModify: 'read-write',
        overflowWrap: 'break-word',
        // WebkitLineBreak: 'after-white-space',
        WebkitUserSelect: 'auto',
      },
      [`:where([draggable="true"])`]: {
        WebkitUserDrag: 'element',
      },
      [`:where(dialog:modal)`]: {
        all: 'revert',
      },
    },
    props.applyGlobalStyles && {
      html: {
        margin: 0,
        padding: 0,
        fontSize: '16px', // TODO
      },
      body: {
        margin: 0,
        padding: 0,
        fontSize: '1rem', // TODO
        fontFamily: '"Barlow", "Helvetica", "Arial", sans-serif', // TODO
        fontWeight: 400, // TODO
      },
    },
    props.styles as SerializedStyles,
  ]);

  console.log('Provider is loaded', theme);

  return (
    <UiContextProvider value={defaultProviderValues}>
      <Global styles={defaultGlobalStyles} />
      {props.children}
    </UiContextProvider>
  );
};

export default UiProvider;
