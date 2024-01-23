import { CLASSNAMES } from 'core';

export const globalStyleReset = {
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
    '-webkit-user-select': 'auto',
  },
  ['textarea']: {
    whiteSpace: 'revert',
  },
  [`meter`]: {
    '-webkit-appearance': 'revert',
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
    '-moz-user-modify': 'read-write',
    '-webkit-user-modify': 'read-write',
    overflowWrap: 'break-word',
    '-webkit-line-break': 'after-white-space',
    '-webkit-user-select': 'auto',
  },
  [`:where([draggable="true"])`]: {
    '-webkit-user-drag': 'element',
  },
  [`:where(dialog:modal)`]: {
    all: 'revert',
  },
};

export const globalStyle = {
  [CLASSNAMES.GLOBAL]: {
    html: {
      margin: 0,
      padding: 0,
      fontSize: '16px', // TODO
    },
    body: {
      margin: 0,
      padding: 0,
      fontFamily: '"Barlow", sans-serif', // TODO
      fontSize: '1rem', // TODO
      fontWeight: 400,
    },
    ...globalStyleReset,
  },
};
