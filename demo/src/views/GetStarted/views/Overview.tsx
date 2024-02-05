import React from 'react';
import { View, withPlainLayout } from '../../../Layout';
import { Article, Section } from '../../../components';

const OverviewView = () => {
  return (
    <View
      title="Overview"
      subtitle="Metus dignissim, vehicula adipiscing nibh duis id bibendum efficitur vel, congue consequat ut hendrerit placerat. Donec odio leo, risus maximus nam fermentum bibendum ligula congue nulla, sit amet at sem ac hendrerit nulla. Ultricies donec, ut id ante at sem sed ac turpis aliquet lorem ipsum dolor sit amet posuere, sapien vivamus rhoncus at quam. Integer eget, nec integer bibendum proin nec commodo quam nulla, arcu tellus eget id."
    >
      <Article>
        <Section>...OverviewView...</Section>
      </Article>
    </View>
  );
};

export default withPlainLayout(OverviewView);
