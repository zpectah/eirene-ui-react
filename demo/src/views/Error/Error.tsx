import React from 'react';
import { HEADER_DESKTOP_HEIGHT } from '../../constants';

const Error = () => {
  return (
    <article
      style={{
        width: '100%',
        height: `calc(100% - ${HEADER_DESKTOP_HEIGHT})`,
        minHeight: '500px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      error view
    </article>
  );
};

export default Error;
