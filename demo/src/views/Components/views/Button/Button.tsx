import React from 'react';
import { View } from '../../../../Layout';
import { useRenderPanelView } from '../../hooks';
import { ViewNavigation } from '../../components/index';
import Preview from './_Preview';
import Api from './_Api';
import Playground from './_Playground';

const ButtonView = () => {
  const { renderHashView } = useRenderPanelView({
    defaultView: Preview,
    apiView: Api,
    playgroundView: Playground,
  });

  return (
    <View title="Button">
      <ViewNavigation route="button" />
      {renderHashView}
    </View>
  );
};

export default ButtonView;
