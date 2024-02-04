import React, { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { useUiContext } from 'styles';
import { HEADER_DESKTOP_HEIGHT, SIDEBAR_DESKTOP_WIDTH } from '../../constants';
import { Footer } from '../Footer';
import { SidebarNavigation, SidebarNavigationItemProps } from '../SidebarNavigation';

export interface ViewLayoutProps {
  sidebar?: ReactNode;
  items?: SidebarNavigationItemProps[];
}

const ViewLayout = (props: ViewLayoutProps) => {
  const { sidebar, items = [] } = props;

  const { theme } = useUiContext();

  return (
    <div
      style={{
        width: '100%',
        height: `calc(100% - ${HEADER_DESKTOP_HEIGHT})`,
        position: 'fixed',
        top: HEADER_DESKTOP_HEIGHT,
        left: 0,
      }}
    >
      <aside
        style={{
          width: SIDEBAR_DESKTOP_WIDTH,
          height: `calc(100% - ${HEADER_DESKTOP_HEIGHT})`,
          position: 'fixed',
          top: HEADER_DESKTOP_HEIGHT,
          left: 0,
          backgroundColor: theme.palette.background.tertiary,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: 'calc(100% + 30px)',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            overflowX: 'hidden',
            overflowY: 'auto',
          }}
        >
          <div>
            <SidebarNavigation items={items} />
            {sidebar}
          </div>
        </div>
      </aside>
      <div
        style={{
          width: `calc(100% - ${SIDEBAR_DESKTOP_WIDTH})`,
          height: '100%',
          position: 'absolute',
          top: 0,
          right: 0,
          overflowX: 'hidden',
          overflowY: 'auto',
        }}
      >
        <div style={{ width: '100%', height: 'auto' }}>
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ViewLayout;
