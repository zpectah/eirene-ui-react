import React from 'react';
import { ButtonBase } from 'base';
import { Button } from 'components';
import { UiProvider } from 'styles';
import View from './View.tsx';

const App = () => {
  return (
    <UiProvider withGlobalStyles>
      <main>
        mein app
        <br />
        <br />
        <View />
        <br />
        <br />
        <Button>My Button</Button>
        <br />
        <br />
        <Button as="a" href="/">
          My Button
        </Button>
        <br />
        <br />
        <Button startIcon={<span>XY</span>} endIcon={<span>XY</span>}>
          My Button
        </Button>
        <br />
        <br />
        <Button
          jss={{
            root: {
              backgroundColor: 'blue',
              '&:hover': { backgroundColor: 'brown' },
            },
          }}
        >
          My custom styled Button
        </Button>
        <br />
        <br />
        <ButtonBase as="a" href="/">
          My Base Button
        </ButtonBase>
        <br />
        <br />
        <Button
          as="a"
          href="/"
          startIcon={<span>XY</span>}
          endIcon={<span>XY</span>}
          endIconProps={{ style: { paddingLeft: '3rem' } }}
        >
          My Button
        </Button>
        <br />
        <br />
        <Button as="a" href="/" isLoading>
          My Button
        </Button>
        <br />
        <br />
        <Button fullWidth>My fullwidth Button</Button>
        <br />
        <br />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '.5rem' }}>
            <Button as="a" href="/" color="primary">
              Primary Button
            </Button>
            <Button as="a" href="/" color="secondary">
              Secondary Button
            </Button>
            <Button as="a" href="/" color="tertiary">
              Tertiary Button
            </Button>
            <Button as="a" href="/" color="error">
              Error Button
            </Button>
            <Button as="a" href="/" color="warning">
              Warning Button
            </Button>
            <Button as="a" href="/" color="info">
              Info Button
            </Button>
            <Button as="a" href="/" color="success">
              Success Button
            </Button>
            <Button as="a" href="/" color="inverted">
              Inverted Button
            </Button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '.5rem' }}>
            <Button as="a" href="/" color="primary" variant="outlined">
              Primary Button
            </Button>
            <Button as="a" href="/" color="secondary" variant="outlined">
              Secondary Button
            </Button>
            <Button as="a" href="/" color="tertiary" variant="outlined">
              Tertiary Button
            </Button>
            <Button as="a" href="/" color="error" variant="outlined">
              Error Button
            </Button>
            <Button as="a" href="/" color="warning" variant="outlined">
              Warning Button
            </Button>
            <Button as="a" href="/" color="info" variant="outlined">
              Info Button
            </Button>
            <Button as="a" href="/" color="success" variant="outlined">
              Success Button
            </Button>
            <Button as="a" href="/" color="inverted" variant="outlined">
              Inverted Button
            </Button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '.5rem' }}>
            <Button as="a" href="/" color="primary" variant="text">
              Primary Button
            </Button>
            <Button as="a" href="/" color="secondary" variant="text">
              Secondary Button
            </Button>
            <Button as="a" href="/" color="tertiary" variant="text">
              Tertiary Button
            </Button>
            <Button as="a" href="/" color="error" variant="text">
              Error Button
            </Button>
            <Button as="a" href="/" color="warning" variant="text">
              Warning Button
            </Button>
            <Button as="a" href="/" color="info" variant="text">
              Info Button
            </Button>
            <Button as="a" href="/" color="success" variant="text">
              Success Button
            </Button>
            <Button as="a" href="/" color="inverted" variant="text">
              Inverted Button
            </Button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '.5rem' }}>
            <Button as="a" href="/" color="primary" isDisabled>
              Primary Button
            </Button>
            <Button as="a" href="/" color="secondary" isDisabled>
              Secondary Button
            </Button>
            <Button as="a" href="/" color="tertiary" isDisabled>
              Tertiary Button
            </Button>
            <Button as="a" href="/" color="error" isDisabled>
              Error Button
            </Button>
            <Button as="a" href="/" color="warning" isDisabled>
              Warning Button
            </Button>
            <Button as="a" href="/" color="info" isDisabled>
              Info Button
            </Button>
            <Button as="a" href="/" color="success" isDisabled>
              Success Button
            </Button>
            <Button as="a" href="/" color="inverted" isDisabled>
              Inverted Button
            </Button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '.5rem' }}>
            <Button
              as="a"
              href="/"
              color="primary"
              variant="outlined"
              isDisabled
            >
              Primary Button
            </Button>
            <Button
              as="a"
              href="/"
              color="secondary"
              variant="outlined"
              isDisabled
            >
              Secondary Button
            </Button>
            <Button
              as="a"
              href="/"
              color="tertiary"
              variant="outlined"
              isDisabled
            >
              Tertiary Button
            </Button>
            <Button as="a" href="/" color="error" variant="outlined" isDisabled>
              Error Button
            </Button>
            <Button
              as="a"
              href="/"
              color="warning"
              variant="outlined"
              isDisabled
            >
              Warning Button
            </Button>
            <Button as="a" href="/" color="info" variant="outlined" isDisabled>
              Info Button
            </Button>
            <Button
              as="a"
              href="/"
              color="success"
              variant="outlined"
              isDisabled
            >
              Success Button
            </Button>
            <Button
              as="a"
              href="/"
              color="inverted"
              variant="outlined"
              isDisabled
            >
              Inverted Button
            </Button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '.5rem' }}>
            <Button as="a" href="/" color="primary" variant="text" isDisabled>
              Primary Button
            </Button>
            <Button as="a" href="/" color="secondary" variant="text" isDisabled>
              Secondary Button
            </Button>
            <Button as="a" href="/" color="tertiary" variant="text" isDisabled>
              Tertiary Button
            </Button>
            <Button as="a" href="/" color="error" variant="text" isDisabled>
              Error Button
            </Button>
            <Button as="a" href="/" color="warning" variant="text" isDisabled>
              Warning Button
            </Button>
            <Button as="a" href="/" color="info" variant="text" isDisabled>
              Info Button
            </Button>
            <Button as="a" href="/" color="success" variant="text" isDisabled>
              Success Button
            </Button>
            <Button as="a" href="/" color="inverted" variant="text" isDisabled>
              Inverted Button
            </Button>
          </div>
        </div>
        <br />
        <br />
        <div>...</div>
      </main>
    </UiProvider>
  );
};

export default App;
