import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PlainLayout, View } from '../../../../Layout';
import { Article, Section } from '../../../../components';

const InstallationView = () => {
  return (
    <Routes>
      <Route path="/" element={<PlainLayout />}>
        <Route
          index
          element={
            <>
              <View title="Usage - installation">
                <Article>
                  <Section>...installation...</Section>
                </Article>
              </View>
            </>
          }
        />
      </Route>
    </Routes>
  );
};

export default InstallationView;
