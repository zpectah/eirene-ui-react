import React from 'react';
import { Button } from 'components';
import { Article, Section } from '../../../../components';

const Preview = () => {
  return (
    <Article>
      <Section title="Button default">
        Article Section : Button
        <br />
        <Button>Button</Button>
      </Section>
    </Article>
  );
};

export default Preview;
