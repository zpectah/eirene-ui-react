import React from 'react';
import { Link } from 'react-router-dom';
import { useUiContext } from 'styles';
import { PRIMARY_NAVIGATION } from '../../config';
import { HEADER_DESKTOP_HEIGHT } from '../../constants';
import { Button } from 'components';

const Header = () => {
  const { theme, toggleThemeMode } = useUiContext();

  return (
    <header
      style={{
        width: '100%',
        height: HEADER_DESKTOP_HEIGHT,
        padding: '0 .5rem',
        position: 'fixed',
        top: 0,
        left: 0,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.primary.contrast,
      }}
    >
      <Link to="/" style={{ padding: '0 .25rem' }}>
        <h1 style={{ ...theme.typography.h5 }}>Eirine UI</h1>
      </Link>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '.5rem', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '.5rem' }}>
          {PRIMARY_NAVIGATION.map((item) => (
            <Link key={item.key} to={item.path}>
              {item.label}
            </Link>
          ))}
        </div>
        <div>
          <Button onClick={toggleThemeMode}>Toggle theme [{theme.palette.mode}]</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
