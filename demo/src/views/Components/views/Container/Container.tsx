import React from 'react';
import { useUiContext } from 'styles';
import { View } from '../../../../Layout';
import { Article, Section } from '../../../../components';

const ContainerView = () => {
  const { theme } = useUiContext();

  return (
    <View title="Container">
      <Article>
        <Section title="Container default">
          ...Section default...
          <div style={{ padding: theme.spacing.get(2, 3) }}>
            some spaced container
          </div>
        </Section>
      </Article>
    </View>
  );
};

export default ContainerView;
