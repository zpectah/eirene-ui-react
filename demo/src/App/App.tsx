import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UiProvider } from 'styles';
import { routes } from '../config';
import { PageLayout } from '../Layout';
import { Error, Welcome, Components, Usage, Customization } from '../views';

const App = () => {
  return (
    <UiProvider
      // theme={{
      //   palette: { mode: 'dark' },
      //   components: { Button: { root: { padding: '5rem', margin: '2rem' } } },
      // }}
      applyCSSReset
      applyGlobalStyles
    >
      <BrowserRouter>
        <Routes>
          <Route path={routes.welcome.route} element={<PageLayout />}>
            <Route index element={<Welcome />} />

            <Route path="components/*" element={<Components />} />
            <Route path="customization/*" element={<Customization />} />
            <Route path="usage/*" element={<Usage />} />

            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UiProvider>
  );
};

export default App;
