import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { USAGE_SIDEBAR_NAVIGATION } from '../../config';
import { ViewLayout } from '../../Layout';
import { InstallationView } from './views';

const Usage = () => {
  return (
    <Routes>
      <Route path="/" element={<ViewLayout items={USAGE_SIDEBAR_NAVIGATION} />}>
        {/*<Route index element={<div>some usage index view </div>} />*/}
        <Route path="/installation/*" element={<InstallationView />} />
      </Route>
    </Routes>
  );
};

export default Usage;
