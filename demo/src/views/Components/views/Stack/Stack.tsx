import React from 'react';
import { View } from '../../../../Layout';
import { Article, Section } from '../../../../components';

const StackView = () => {
  return (
    <View title="Stack">
      <Article>
        <Section title="Stack default">...Section default...</Section>
      </Article>
    </View>
  );
};

export default StackView;
