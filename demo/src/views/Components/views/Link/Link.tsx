import React from 'react';
import { View } from '../../../../Layout';
import { useRenderPanelView } from '../../hooks';
import { ViewNavigation } from '../../components/index';
import Preview from './_Preview';
import Api from './_Api';
import Playground from './_Playground';

const LinkView = () => {
  const { renderHashView } = useRenderPanelView({
    defaultView: Preview,
    apiView: Api,
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
