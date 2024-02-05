import React from 'react';
import { useUiContext } from 'styles';
import { View, withPlainLayout } from '../../../Layout';
import { Article, Section } from '../../../components';

const TypographyView = () => {
  const { theme } = useUiContext();

  return (
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
  );
};

export default withPlainLayout(TypographyView);
