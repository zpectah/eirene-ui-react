import React from 'react';
import { View } from '../../../../Layout';
import { useRenderHashView } from '../../hooks';
import { ViewNavigation } from '../../components/index';
import Preview from './_Preview';
import Documentation from './_Documentation';
import Playground from './_Playground';

const TypographyView = () => {
  const { renderHashView } = useRenderHashView({
    defaultView: Preview,
    documentationView: Documentation,
    playgroundView: Playground,
  });

  return (
    <View title="Typography">
      <ViewNavigation route="typography" />
      {renderHashView}
    </View>
  );
};

export default TypographyView;
