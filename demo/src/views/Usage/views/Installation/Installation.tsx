import React from 'react';
import { View, withPlainLayout } from '../../../../Layout';
import { Article, Section } from '../../../../components';

const InstallationView = () => {
  return (
    <View title="Usage - installation">
      <Article>
        <Section>...installation...</Section>
      </Article>
    </View>
  );
};

export default withPlainLayout(InstallationView);
