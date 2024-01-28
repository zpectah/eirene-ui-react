import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
      <div>Eirine UI</div>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '.5rem' }}>
        <Link to="/">Home</Link>
        <Link to="/components">Components</Link>
        <Link to="/theme">Theme</Link>
        <Link to="/usage">Usage</Link>
      </div>
    </header>
  );
};

export default Header;
