import { CLASSNAMES } from 'core';

export const buttonBaseStyle = {
  [CLASSNAMES.BUTTON.base]: {
    margin: 0,
    padding: 0,
    display: 'inline-flex',
    border: 0,
    fontSize: 12,
    '@media (min-width: 1024px)': {
      fontSize: 16,
    },
  },
};
