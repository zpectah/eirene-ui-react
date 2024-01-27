import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import Claim from './Claim';
import ButtonView from './views/Button';

const Components = () => {
  const { id } = useParams();

  const renderSidebarMenu = useMemo(() => {
    if (!id) return null;

    return (
      <aside>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
          <Link to="/components">Overview</Link>
          <Link to="/components/button">Button</Link>
        </div>
      </aside>
    );
  }, [id]);

  const renderSecondarySidebarMenu = useMemo(() => {
    if (!id) return null;

    return <aside>secondary menu</aside>;
  }, [id]);

  const renderView = useMemo(() => {
    switch (id) {
      case 'button':
        return <ButtonView />;

      case undefined:
      default:
        return <Claim />;
    }
  }, [id]);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {renderSidebarMenu}
      <div style={{ flex: 1 }}>{renderView}</div>
      {renderSecondarySidebarMenu}
    </div>
  );
};

export default Components;
