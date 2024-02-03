import React from 'react';
import { View } from '../../../../Layout';
import { useRenderHashView } from '../../hooks';
import { ViewNavigation } from '../../components/index';
import Preview from './_Preview';
import Documentation from './_Documentation';
import Playground from './_Playground';

const StackView = () => {
  const { renderHashView } = useRenderHashView({
    defaultView: Preview,
    documentationView: Documentation,
    playgroundView: Playground,
  });

  return (
    <View title="Stack">
      <ViewNavigation route="stack" />
      {renderHashView}
    </View>
  );
};

export default StackView;
