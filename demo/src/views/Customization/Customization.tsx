import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import { routes } from '../../config';
import { ViewLayout } from '../../Layout';
import { ThemeView, BreakpointsView, PaletteView, TypographyView, ComponentsView } from './views';

const Customization = () => {
  return (
    <Routes>
      <Route path="/" element={<ViewLayout sidebar={<>My customization 000 menu</>} />}>
        <Route index element={<div>some customization index view </div>} />
        {/* ... */}
        <Route path="/theme*" element={<ThemeView />} />
        <Route path="/breakpoints*" element={<BreakpointsView />} />
        <Route path="/palette*" element={<PaletteView />} />
        <Route path="/typography*" element={<TypographyView />} />
        <Route path="/components*" element={<ComponentsView />} />
      </Route>
    </Routes>
  );
};

export default Customization;
