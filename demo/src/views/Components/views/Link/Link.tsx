import React from 'react';
import { View } from '../../../../Layout';
import { useRenderHashView } from '../../hooks';
import { ViewNavigation } from '../../components/index';
import Preview from './_Preview';
import Documentation from './_Documentation';
import Playground from './_Playground';

const LinkView = () => {
  const { renderHashView } = useRenderHashView({
    defaultView: Preview,
    documentationView: Documentation,
    playgroundView: Playground,
  });

  return (
    <View title="Link">
      <ViewNavigation route="link" />
      {renderHashView}
    </View>
  );
};

export default LinkView;
