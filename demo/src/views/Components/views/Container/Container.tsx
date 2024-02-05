import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { DetailLayout } from '../../components/index';
import Preview from './_Preview';
import Api from './_Api';
import Playground from './_Playground';

const ContainerView = () => (
  <Routes>
    <Route path="/" element={<DetailLayout route="container" title="C O N T A I N E R" />}>
      <Route index element={<Preview />} />
      <Route path="api" element={<Api />} />
      <Route path="playground" element={<Playground />} />
    </Route>
  </Routes>
);

export default ContainerView;
