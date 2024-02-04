import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PlainLayout, View } from '../../../../Layout';
import { Article, Section } from '../../../../components';

const ComponentsView = () => {
  return (
    <Routes>
      <Route path="/" element={<PlainLayout />}>
        <Route
          index
          element={
            <>
              <View title="Theme">
                <Article>
                  <Section>...Theme...</Section>
                </Article>
              </View>
            </>
          }
        />
      </Route>
    </Routes>
  );
};

export default ComponentsView;
