import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useUiContext } from 'styles';
import { PlainLayout, View } from '../../../../Layout';
import { Article, Section } from '../../../../components';

const TypographyView = () => {
  const { theme } = useUiContext();

  return (
    <Routes>
      <Route path="/" element={<PlainLayout />}>
        <Route
          index
          element={
            <>
              <View title="Typography">
                <Article>
                  <Section title="default">
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '.5rem',
                      }}
                    >
                      <p style={{ color: theme.palette.text.primary }}>[primary] Lorem ipsum dolor sit amet ...</p>
                      <p style={{ color: theme.palette.text.secondary }}>[secondary] Lorem ipsum dolor sit amet ...</p>
                      <p style={{ color: theme.palette.text.tertiary }}>[tertiary] Lorem ipsum dolor sit amet ...</p>
                      <p style={{ color: theme.palette.text.muted }}>[muted] Lorem ipsum dolor sit amet ...</p>
                      <p style={{ color: theme.palette.text.disabled }}>[disabled] Lorem ipsum dolor sit amet ...</p>
                    </div>
                  </Section>
                </Article>
              </View>
            </>
          }
        />
      </Route>
    </Routes>
  );
};

export default TypographyView;
