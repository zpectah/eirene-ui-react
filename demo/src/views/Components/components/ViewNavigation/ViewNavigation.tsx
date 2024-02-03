import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { UiComponentsList } from 'types';
import { Button } from 'components';
import { routes } from '../../../../config';

export interface ViewNavigationProps {
  route: UiComponentsList;
}

const ViewNavigation = ({ route }: ViewNavigationProps) => {
  const { panel } = useParams();

  const menuItems = [
    {
      key: 1,
      panel: '',
      label: 'Preview',
    },
    {
      key: 2,
      panel: '/api',
      label: 'API',
    },
    {
      key: 3,
      panel: '/playground',
      label: 'Playground',
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '.5rem' }}>
      {menuItems.map((item) => (
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
