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
            {/*<Route path={routes.components.route} element={<Components />} />*/}
            <Route path={routes.customization.route} element={<Customization />} />
            <Route path={routes.usage.route} element={<Usage />} />

            <Route path="components/*" element={<Components />} />
            {/*<Route path="test-components" element={<ViewLayout sidebar={<>My components menu</>} />}>*/}
            {/*  <Route index element={<div>view index</div>} />*/}
            {/*  <Route path="aa" element={<div>view AA</div>} />*/}
            {/*  <Route path="bb" element={<div>view BB</div>} />*/}
            {/*  <Route path="button" element={<TestSidebarLayout sidebar={<>My BUTTON menu</>} />}>*/}
            {/*    <Route index element={<div>view BUTTON index</div>} />*/}
            {/*    <Route path="api" element={<div>view BUTTON API</div>} />*/}
            {/*    <Route path="playground" element={<div>view BUTTON PLAYGROUND</div>} />*/}
            {/*  </Route>*/}
            {/*  <Route path="link" element={<TestSidebarLayout sidebar={<>My LINK menu</>} />}>*/}
            {/*    <Route index element={<div>view LINK index</div>} />*/}
            {/*    <Route path="api" element={<div>view LINK API</div>} />*/}
            {/*    <Route path="playground" element={<div>view LINK PLAYGROUND</div>} />*/}
            {/*  </Route>*/}
            {/*</Route>*/}

            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UiProvider>
  );
};

export default App;
