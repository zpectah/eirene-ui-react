import React from 'react';
import { useUiContext } from 'styles';

const TypographyView = () => {
  const { theme } = useUiContext();

  return (
    <article>
      <div>
        <div
          style={{
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '.5rem',
          }}
        >
          <p style={{ color: theme.palette.text.primary }}>
            [primary] Lorem ipsum dolor sit amet ...
          </p>
          <p style={{ color: theme.palette.text.secondary }}>
            [secondary] Lorem ipsum dolor sit amet ...
          </p>
          <p style={{ color: theme.palette.text.tertiary }}>
            [tertiary] Lorem ipsum dolor sit amet ...
          </p>
          <p style={{ color: theme.palette.text.disabled }}>
            [disabled] Lorem ipsum dolor sit amet ...
          </p>
        </div>
      </div>
    </article>
  );
};

export default TypographyView;
