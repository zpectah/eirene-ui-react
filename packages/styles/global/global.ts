import { css } from '@emotion/react';

export const createGlobalStyles = () => {
  return css({
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
  });
};
