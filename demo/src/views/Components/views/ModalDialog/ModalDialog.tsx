import React from 'react';
import { View } from '../../../../Layout';
import { useRenderPanelView } from '../../hooks';
import { ViewNavigation } from '../../components/index';
import Preview from './_Preview';
import Api from './_Api';
import Playground from './_Playground';

const ModalDialogView = () => {
  const { renderHashView } = useRenderPanelView({
    defaultView: Preview,
    apiView: Api,
    playgroundView: Playground,
  });

  return (
    <View title="Modal Dialog">
      <ViewNavigation route="modal-dialog" />
      {renderHashView}
    </View>
  );
};

export default ModalDialogView;
