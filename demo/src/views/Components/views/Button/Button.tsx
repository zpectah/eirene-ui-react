import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../../../config';
import { View } from '../../../../Layout';
import { useRenderHashView } from '../hooks';
import Preview from './_Preview';
import Documentation from './_Documentation';
import Playground from './_Playground';

const ButtonView = () => {
  const { renderHashView } = useRenderHashView({
    defaultView: Preview,
    documentationView: Documentation,
    playgroundView: Playground,
  });

  return (
    <View title="Button">
      <div style={{ display: 'flex', flexDirection: 'row', gap: '.5rem' }}>
        <Link to={routes.components.routes.button}>Preview</Link>
        <Link to={`${routes.components.routes.button}#documentation`}>Documentation</Link>
        <Link to={`${routes.components.routes.button}#playground`}>Playground</Link>
      </div>
      {renderHashView}
    </View>
  );
};

export default ButtonView;
