import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UiProvider } from 'styles';
import { Layout } from '../Layout';
import { Error, Welcome, Components, Usage } from '../views';

const App = () => {
  return (
    <UiProvider applyCSSReset applyGlobalStyles>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Welcome />} />
            <Route path="components/" element={<Components />} />
            <Route path="components/:id" element={<Components />} />
            <Route path="usage" element={<Usage />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UiProvider>
  );
};

export default App;
