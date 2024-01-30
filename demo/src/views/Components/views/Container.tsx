import React from 'react';
import { useUiContext } from 'styles';

const ContainerView = () => {
  const { theme } = useUiContext();

  return (
    <article>
      ...ContainerView...
      <div style={{ padding: theme.spacing.get(2, 3) }}>
        some spaced container
      </div>
    </article>
  );
};

export default ContainerView;
