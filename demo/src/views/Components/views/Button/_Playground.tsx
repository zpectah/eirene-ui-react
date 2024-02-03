import React from 'react';
import { useUiContext } from 'styles';
import { Button } from 'components';
import { Article, Section } from '../../../../components';

const Playground = () => {
  const { theme } = useUiContext();

  return (
    <Article>
      {/* TODO */}
      <Section>
        <div style={{ display: 'flex', flexDirection: 'row', gap: theme.spacing.get(2) }}>
          <Button variant="text" color="primary">
            Button
          </Button>
          <Button variant="text" color="secondary">
            Button
          </Button>
          <Button variant="text" color="tertiary">
            Button
          </Button>
          <Button variant="text" color="success">
            Button
          </Button>
          <Button variant="text" color="info">
            Button
          </Button>
          <Button variant="text" color="warning">
            Button
          </Button>
          <Button variant="text" color="error">
            Button
          </Button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: theme.spacing.get(2) }}>
          <Button variant="outlined" color="primary">
            Button
          </Button>
          <Button variant="outlined" color="secondary">
            Button
          </Button>
          <Button variant="outlined" color="tertiary">
            Button
          </Button>
          <Button variant="outlined" color="success">
            Button
          </Button>
          <Button variant="outlined" color="info">
            Button
          </Button>
          <Button variant="outlined" color="warning">
            Button
          </Button>
          <Button variant="outlined" color="error">
            Button
          </Button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: theme.spacing.get(2) }}>
          <Button variant="contained" color="primary">
            Button
          </Button>
          <Button variant="contained" color="secondary">
            Button
          </Button>
          <Button variant="contained" color="tertiary">
            Button
          </Button>
          <Button variant="contained" color="success">
            Button
          </Button>
          <Button variant="contained" color="info">
            Button
          </Button>
          <Button variant="contained" color="warning">
            Button
          </Button>
          <Button variant="contained" color="error">
            Button
          </Button>
        </div>
      </Section>
      <Section>
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
      <Section>
        <div style={{ display: 'flex', flexDirection: 'row', gap: theme.spacing.get(2) }}>
          <Button variant="text" color="primary" isDisabled>
            Button
          </Button>
          <Button variant="text" color="secondary" isDisabled>
            Button
          </Button>
          <Button variant="text" color="tertiary" isDisabled>
            Button
          </Button>
          <Button variant="text" color="success" isDisabled>
            Button
          </Button>
          <Button variant="text" color="info" isDisabled>
            Button
          </Button>
          <Button variant="text" color="warning" isDisabled>
            Button
          </Button>
          <Button variant="text" color="error" isDisabled>
            Button
          </Button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: theme.spacing.get(2) }}>
          <Button variant="outlined" color="primary" isDisabled>
            Button
          </Button>
          <Button variant="outlined" color="secondary" isDisabled>
            Button
          </Button>
          <Button variant="outlined" color="tertiary" isDisabled>
            Button
          </Button>
          <Button variant="outlined" color="success" isDisabled>
            Button
          </Button>
          <Button variant="outlined" color="info" isDisabled>
            Button
          </Button>
          <Button variant="outlined" color="warning" isDisabled>
            Button
          </Button>
          <Button variant="outlined" color="error" isDisabled>
            Button
          </Button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: theme.spacing.get(2) }}>
          <Button variant="contained" color="primary" isDisabled>
            Button
          </Button>
          <Button variant="contained" color="secondary" isDisabled>
            Button
          </Button>
          <Button variant="contained" color="tertiary" isDisabled>
            Button
          </Button>
          <Button variant="contained" color="success" isDisabled>
            Button
          </Button>
          <Button variant="contained" color="info" isDisabled>
            Button
          </Button>
          <Button variant="contained" color="warning" isDisabled>
            Button
          </Button>
          <Button variant="contained" color="error" isDisabled>
            Button
          </Button>
        </div>
      </Section>
      <Section>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: theme.spacing.get(2),
            padding: theme.spacing.get(2),
            backgroundColor: theme.palette.text.primary,
          }}
        >
          <Button variant="text" color="inverted" isDisabled>
            Text
          </Button>
          <Button variant="outlined" color="inverted" isDisabled>
            Outlined
          </Button>
          <Button variant="contained" color="inverted" isDisabled>
            Contained
          </Button>
        </div>
      </Section>
    </Article>
  );
};

export default Playground;
