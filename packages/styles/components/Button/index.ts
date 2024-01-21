import { CLASSNAMES } from 'core';

export const buttonStyle = {
  [CLASSNAMES.BUTTON.root]: {
    margin: 0,
    padding: 0,
    display: 'inline-flex',
    border: 0,
    color: 'rgb(255,255,255)',
    backgroundColor: 'rgb(250,0,0)',
    '&:hover': {
      backgroundColor: 'rgb(0,250,0)',
    },
  },
};
