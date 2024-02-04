import React from 'react';
import { Outlet } from 'react-router-dom';
import { UiComponentsList } from 'types';
import { View } from '../../../../Layout';
import { ViewNavigation } from '../ViewNavigation';

export interface DetailLayoutProps {
  route: UiComponentsList;
  title: string;
}

const DetailLayout = (props: DetailLayoutProps) => {
  const { route, title } = props;

  return (
    <View title={title}>
      <ViewNavigation route={route} />
      <Outlet />
    </View>
  );
};

export default DetailLayout;
