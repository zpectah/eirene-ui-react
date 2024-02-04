import React from 'react';
import { View, withPlainLayout } from '../../../../Layout';
import { Article, Section } from '../../../../components';

const ThemeView = () => {
  return (
    <View title="Theme">
      <Article>
        <Section>...Theme...</Section>
      </Article>
    </View>
  );
};

export default withPlainLayout(ThemeView);
