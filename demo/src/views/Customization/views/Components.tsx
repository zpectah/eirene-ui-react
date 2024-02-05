import React from 'react';
import { View, withPlainLayout } from '../../../Layout';
import { Article, Section } from '../../../components';

const ComponentsView = () => {
  return (
    <View title="Components">
      <Article>
        <Section>...Components...</Section>
      </Article>
    </View>
  );
};

export default withPlainLayout(ComponentsView);
