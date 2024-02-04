import React from 'react';
import { View, withPlainLayout } from '../../../../Layout';
import { Article, Section } from '../../../../components';

const ComponentsView = () => {
  return (
    <View title="Theme">
      <Article>
        <Section>...Theme...</Section>
      </Article>
    </View>
  );
};

export default withPlainLayout(ComponentsView);
