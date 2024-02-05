import React from 'react';
import { View, withPlainLayout } from '../../../Layout';
import { Article, Section } from '../../../components';

const OverviewView = () => {
  return (
    <View title="OverviewView">
      <Article>
        <Section>...OverviewView...</Section>
      </Article>
    </View>
  );
};

export default withPlainLayout(OverviewView);
