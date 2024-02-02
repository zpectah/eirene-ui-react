import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../../../config';
import { View } from '../../../../Layout';
import { useRenderHashView } from '../hooks';
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
      <div style={{ display: 'flex', flexDirection: 'row', gap: '.5rem' }}>
        <Link to={routes.components.routes.link}>Preview</Link>
        <Link to={`${routes.components.routes.link}#documentation`}>Documentation</Link>
        <Link to={`${routes.components.routes.link}#playground`}>Playground</Link>
      </div>
      {renderHashView}
    </View>
  );
};

export default LinkView;
