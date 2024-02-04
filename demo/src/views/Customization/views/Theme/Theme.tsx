import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { View, PlainLayout } from '../../../../Layout';
import { Article, Section } from '../../../../components';

const ThemeView = () => {
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

export default ThemeView;
