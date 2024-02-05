import React from 'react';
import { View, withPlainLayout } from '../../../Layout';
import { Article, Section } from '../../../components';

const UsageView = () => {
  return (
    <View title="Usage">
      <Article>
        <Section>...UsageView...</Section>
      </Article>
    </View>
  );
};

export default withPlainLayout(UsageView);
