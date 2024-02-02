import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../../../config';
import { View } from '../../../../Layout';
import { useRenderHashView } from '../hooks';
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
      <div style={{ display: 'flex', flexDirection: 'row', gap: '.5rem' }}>
        <Link to={routes.components.routes.stack}>Preview</Link>
        <Link to={`${routes.components.routes.stack}#documentation`}>Documentation</Link>
        <Link to={`${routes.components.routes.stack}#playground`}>Playground</Link>
      </div>
      {renderHashView}
    </View>
  );
};

export default StackView;
