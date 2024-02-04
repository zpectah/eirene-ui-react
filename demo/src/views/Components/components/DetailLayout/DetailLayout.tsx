import React, { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { UiComponentsList } from 'types';
import { ViewNavigation } from '../ViewNavigation';

export interface DetailLayoutProps {
  route: UiComponentsList;
  title: string;
  secondary?: ReactNode;
}

const DetailLayout = (props: DetailLayoutProps) => {
  const { route, title, secondary } = props;

  return (
    <div>
      <div>
        <div>{title}</div>
        <div>
          <ViewNavigation route={route} />
        </div>
        {secondary && <div>{secondary}</div>}
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default DetailLayout;
