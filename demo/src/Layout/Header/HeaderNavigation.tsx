import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from 'components';
import { PRIMARY_NAVIGATION } from '../../constants';

const HeaderNavigation = () => {
  const { pathname } = useLocation();

  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '.5rem' }}>
      {PRIMARY_NAVIGATION.map((item) => (
        <Button
          key={item.key}
          as={Link}
          to={item.path}
          variant={pathname === item.path ? 'outlined' : 'text'}
          color="light"
        >
          {item.label}
        </Button>
      ))}
    </div>
  );
};

export default HeaderNavigation;
