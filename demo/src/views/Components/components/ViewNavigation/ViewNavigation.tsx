import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { UiComponentsList } from 'types';
import { Button } from 'components';
import { routes, DETAIL_NAVIGATION } from '../../../../config';

export interface ViewNavigationProps {
  route: UiComponentsList;
}

const ViewNavigation = ({ route }: ViewNavigationProps) => {
  const { panel } = useParams();

  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '.5rem' }}>
      {DETAIL_NAVIGATION.map((item) => (
        <Button
          key={item.key}
          as={Link}
          to={`${routes.components.routes[route]}${item.panel}`}
          variant={panel === item.panel.slice(1) ? 'contained' : 'outlined'}
          size="small"
        >
          {item.label}
        </Button>
      ))}
    </div>
  );
};

export default ViewNavigation;
