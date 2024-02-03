import React from 'react';
import { View } from '../../../../Layout';
import { useRenderHashView } from '../../hooks';
import { ViewNavigation } from '../../components/index';
import Preview from './_Preview';
import Documentation from './_Documentation';
import Playground from './_Playground';

const ContainerView = () => {
  const { renderHashView } = useRenderHashView({
    defaultView: Preview,
    documentationView: Documentation,
    playgroundView: Playground,
  });

  return (
    <View title="Container">
      <ViewNavigation route="container" />
      {renderHashView}
    </View>
  );
};

export default ContainerView;
