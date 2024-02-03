import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UiComponentsList } from 'types';
import { Button } from 'components';
import { routes } from '../../../../config';

export interface ViewNavigationProps {
  route: UiComponentsList;
}

const ViewNavigation = ({ route }: ViewNavigationProps) => {
  const { hash } = useLocation();

  const menuItems = [
    {
      key: 1,
      hash: '',
      label: 'Preview',
    },
    {
      key: 2,
      hash: '#api',
      label: 'API',
    },
    {
      key: 3,
      hash: '#playground',
      label: 'Playground',
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '.5rem' }}>
      {menuItems.map((item) => (
        <Button
          key={item.key}
          as={Link}
          to={`${routes.components.routes[route]}${item.hash}`}
          variant={hash === item.hash ? 'contained' : 'outlined'}
          size="small"
        >
          {item.label}
        </Button>
      ))}
    </div>
  );
};

export default ViewNavigation;
