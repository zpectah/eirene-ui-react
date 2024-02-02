import React from 'react';
import { useUiContext } from 'styles';
import { Article, Section } from '../../../../components';

const Preview = () => {
  const { theme } = useUiContext();

  return (
    <Article>
      <Section title="Container default">
        ...Section default...
        <div style={{ padding: theme.spacing.get(2, 3) }}>some spaced container</div>
      </Section>
    </Article>
  );
};

export default Preview;
