import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import { routes } from '../../config';
import { ButtonView, ContainerView, StackView, LinkView, TypographyView, ModalDialogView } from './views';
import { ViewLayout } from '../../Layout';

const Components = () => {
  return (
    <Routes>
      <Route path="/" element={<ViewLayout sidebar={<>My components 000 menu</>} />}>
        <Route index element={<div>some components index view </div>} />
        {/* ... */}
        <Route path="/button*" element={<ButtonView />} />
        <Route path="/link*" element={<LinkView />} />
        <Route path="/container*" element={<ContainerView />} />
        <Route path="/stack*" element={<StackView />} />
        <Route path="/typography*" element={<TypographyView />} />
        <Route path="/modal-dialog*" element={<ModalDialogView />} />
      </Route>
    </Routes>
  );
};

export default Components;
