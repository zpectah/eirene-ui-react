import React from 'react';
import { View, withPlainLayout } from '../../../Layout';
import { Article, Section } from '../../../components';

const BreakpointsView = () => {
  return (
    <View title="Breakpoints">
      <Article>
        <Section>...Breakpoints...</Section>
      </Article>
    </View>
  );
};

export default withPlainLayout(BreakpointsView);
