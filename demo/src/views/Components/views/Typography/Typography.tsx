import React from 'react';
import { DetailLayout } from '../../components/index';
import Preview from './_Preview';
import Api from './_Api';
import Playground from './_Playground';
import { Route, Routes } from 'react-router-dom';

const TypographyView = () => (
  <Routes>
    <Route path="/" element={<DetailLayout route="typography" title="T Y P O G R A P H Y" />}>
      <Route index element={<Preview />} />
      <Route path="api" element={<Api />} />
      <Route path="playground" element={<Playground />} />
    </Route>
  </Routes>
);

export default TypographyView;
