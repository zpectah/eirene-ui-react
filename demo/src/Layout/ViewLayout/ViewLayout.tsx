import React, { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

export interface ViewLayoutProps {
  sidebar?: ReactNode;
}

const ViewLayout = (props: ViewLayoutProps) => {
  const { sidebar } = props;

  return (
    <div>
      {sidebar && <aside>SIDEBAR:{sidebar}</aside>}
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default ViewLayout;
