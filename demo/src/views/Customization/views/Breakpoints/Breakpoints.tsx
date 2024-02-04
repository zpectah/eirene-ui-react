import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PlainLayout, View } from '../../../../Layout';
import { Article, Section } from '../../../../components';

const BreakpointsView = () => {
  return (
    <Routes>
      <Route path="/" element={<PlainLayout />}>
        <Route
          index
          element={
            <>
              <View title="Breakpoints">
                <Article>
                  <Section>...Breakpoints...</Section>
                </Article>
              </View>
            </>
          }
        />
      </Route>
    </Routes>
  );
};

export default BreakpointsView;
