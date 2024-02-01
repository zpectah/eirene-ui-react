import React from 'react';
import { Button } from 'components';
import { View } from '../../../../Layout';
import { Article, Section } from '../../../../components';

const ButtonView = () => {
  return (
    <View title="Button">
      <Article>
        <Section title="Button default">
          Article Section : Button
          <br />
          <Button>Button</Button>
        </Section>
      </Article>
    </View>
  );
};

export default ButtonView;
