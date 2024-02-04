import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import { routes } from '../../config';
import { ViewLayout } from '../../Layout';
import { ButtonView, ContainerView, StackView, LinkView, TypographyView, ModalDialogView } from './views';

const Components = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ViewLayout
            items={[
              {
                key: 1,
                label: 'Button',
                path: `/components/button`,
              },
              {
                key: 2,
                label: 'Link',
                path: `/components/link`,
              },
              {
                key: 3,
                label: 'Container',
                path: `/components/container`,
              },
              {
                key: 4,
                label: 'Stack',
                path: `/components/stack`,
              },
              {
                key: 5,
                label: 'Typography',
                path: `/components/typography`,
              },
              {
                key: 6,
                label: 'Modal Dialog',
                path: `/components/modal-dialog`,
              },
            ]}
          />
        }
      >
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
