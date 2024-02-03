import React from 'react';
import { useUiContext } from 'styles';
import { Button } from 'components';
import { Article, Section } from '../../../../components';

const Preview = () => {
  const { theme } = useUiContext();

  return (
    <Article>
      <Section title="Basic Button">
        <div style={{ display: 'flex', flexDirection: 'row', gap: theme.spacing.get(2) }}>
          <Button variant="text">Text</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="contained">Contained</Button>
        </div>
      </Section>
      <Section title="Text Button">
        <div style={{ display: 'flex', flexDirection: 'row', gap: theme.spacing.get(2) }}>
          <Button variant="text">Text</Button>
          <Button variant="text" isDisabled>
            Disabled
          </Button>
          <Button variant="text" as="a" href="/">
            Link
          </Button>
        </div>
      </Section>
      <Section title="Outlined Button">
        <div style={{ display: 'flex', flexDirection: 'row', gap: theme.spacing.get(2) }}>
          <Button variant="outlined">Outlined</Button>
          <Button variant="outlined" isDisabled>
            Disabled
          </Button>
          <Button variant="outlined" as="a" href="/">
            Link
          </Button>
        </div>
      </Section>
      <Section title="Contained Button">
        <div style={{ display: 'flex', flexDirection: 'row', gap: theme.spacing.get(2) }}>
          <Button variant="contained">Contained</Button>
          <Button variant="contained" isDisabled>
            Disabled
          </Button>
          <Button variant="contained" as="a" href="/">
            Link
          </Button>
        </div>
      </Section>
      <Section title="Color">
        <div style={{ display: 'flex', flexDirection: 'row', gap: theme.spacing.get(2) }}>
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
          <Button variant="contained" color="tertiary">
            Tertiary
          </Button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: theme.spacing.get(2) }}>
          <Button variant="contained" color="success">
            Success
          </Button>
          <Button variant="contained" color="info">
            Info
          </Button>
          <Button variant="contained" color="warning">
            Warning
          </Button>
          <Button variant="contained" color="error">
            Error
          </Button>
        </div>
      </Section>
      <Section title="Inverted Button">
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: theme.spacing.get(2),
            padding: theme.spacing.get(2),
            backgroundColor: theme.palette.text.primary,
          }}
        >
          <Button variant="text" color="inverted">
            Text
          </Button>
          <Button variant="outlined" color="inverted">
            Outlined
          </Button>
          <Button variant="contained" color="inverted">
            Contained
          </Button>
        </div>
      </Section>
    </Article>
  );
};

export default Preview;
