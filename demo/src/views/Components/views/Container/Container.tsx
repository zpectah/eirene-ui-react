import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../../../config';
import { View } from '../../../../Layout';
import { useRenderHashView } from '../hooks';
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
      <div style={{ display: 'flex', flexDirection: 'row', gap: '.5rem' }}>
        <Link to={routes.components.routes.container}>Preview</Link>
        <Link to={`${routes.components.routes.container}#documentation`}>Documentation</Link>
        <Link to={`${routes.components.routes.container}#playground`}>Playground</Link>
      </div>
      {renderHashView}
    </View>
  );
};

export default ContainerView;
