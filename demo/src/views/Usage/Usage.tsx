import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import { routes } from '../../config';
import { ViewLayout } from '../../Layout';
import { InstallationView } from './views';

const Usage = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ViewLayout
            items={[
              {
                key: 1,
                label: 'Installation',
                path: `/usage/installation`,
              },
            ]}
          />
        }
      >
        <Route index element={<div>some usage index view </div>} />
        {/* ... */}
        <Route path="/installation*" element={<InstallationView />} />
      </Route>
    </Routes>
  );
};

export default Usage;
