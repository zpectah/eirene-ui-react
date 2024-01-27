import React from 'react';
import { UiProvider } from 'styles';
import { Button } from 'components';

const App = () => {
  return (
    <UiProvider applyCSSReset applyGlobalStyles>
      <main>
        <div>APP ???</div>
        <div className="some-class">...</div>
        <div>
          <Button as="a" href="/">
            Button
          </Button>
          <Button>Button</Button>
          <Button
            styles={{
              root: {
                padding: '2rem', // Will not work
                '&:hover': { backgroundColor: 'purple' },
                '&.Button-sizeMedium': {
                  padding: '2rem', // Will work
                },
              },
            }}
          >
            Button with custom padding
          </Button>
        </div>
        <div>
          <Button startIcon={<>000</>} endIcon={<>000</>}>
            Buttonek
          </Button>
          <Button isLoading>Buttonek</Button>
          <Button startIcon={<>000</>} endIcon={<>000</>} isLoading>
            Buttonek
          </Button>
        </div>
        <div>
          <div
            style={{
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            <div
              style={{ display: 'flex', flexDirection: 'row', gap: '.5rem' }}
            >
              <div
                style={{
                  padding: '.5rem',
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '.5rem',
                }}
              >
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
              </div>
              <div
                style={{ backgroundColor: 'rgb(25,25,25)', padding: '.5rem' }}
              >
                <Button as="a" href="/" color="inverted">
                  Inverted Button
                </Button>
              </div>
            </div>
            <div
              style={{ display: 'flex', flexDirection: 'row', gap: '.5rem' }}
            >
              <div
                style={{
                  padding: '.5rem',
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '.5rem',
                }}
              >
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
              </div>
              <div
                style={{ backgroundColor: 'rgb(25,25,25)', padding: '.5rem' }}
              >
                <Button as="a" href="/" color="inverted" variant="outlined">
                  Inverted Button
                </Button>
              </div>
            </div>
            <div
              style={{ display: 'flex', flexDirection: 'row', gap: '.5rem' }}
            >
              <div
                style={{
                  padding: '.5rem',
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '.5rem',
                }}
              >
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
              </div>
              <div
                style={{ backgroundColor: 'rgb(25,25,25)', padding: '.5rem' }}
              >
                <Button as="a" href="/" color="inverted" variant="text">
                  Inverted Button
                </Button>
              </div>
            </div>
            <div
              style={{ display: 'flex', flexDirection: 'row', gap: '.5rem' }}
            >
              <div
                style={{
                  padding: '.5rem',
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '.5rem',
                }}
              >
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
              </div>
              <div
                style={{ backgroundColor: 'rgb(25,25,25)', padding: '.5rem' }}
              >
                <Button as="a" href="/" color="inverted" isDisabled>
                  Inverted Button
                </Button>
              </div>
            </div>
            <div
              style={{ display: 'flex', flexDirection: 'row', gap: '.5rem' }}
            >
              <div
                style={{
                  padding: '.5rem',
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '.5rem',
                }}
              >
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
                <Button
                  as="a"
                  href="/"
                  color="error"
                  variant="outlined"
                  isDisabled
                >
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
                <Button
                  as="a"
                  href="/"
                  color="info"
                  variant="outlined"
                  isDisabled
                >
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
              </div>
              <div
                style={{ backgroundColor: 'rgb(25,25,25)', padding: '.5rem' }}
              >
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
            </div>
            <div
              style={{ display: 'flex', flexDirection: 'row', gap: '.5rem' }}
            >
              <div
                style={{
                  padding: '.5rem',
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '.5rem',
                }}
              >
                <Button
                  as="a"
                  href="/"
                  color="primary"
                  variant="text"
                  isDisabled
                >
                  Primary Button
                </Button>
                <Button
                  as="a"
                  href="/"
                  color="secondary"
                  variant="text"
                  isDisabled
                >
                  Secondary Button
                </Button>
                <Button
                  as="a"
                  href="/"
                  color="tertiary"
                  variant="text"
                  isDisabled
                >
                  Tertiary Button
                </Button>
                <Button as="a" href="/" color="error" variant="text" isDisabled>
                  Error Button
                </Button>
                <Button
                  as="a"
                  href="/"
                  color="warning"
                  variant="text"
                  isDisabled
                >
                  Warning Button
                </Button>
                <Button as="a" href="/" color="info" variant="text" isDisabled>
                  Info Button
                </Button>
                <Button
                  as="a"
                  href="/"
                  color="success"
                  variant="text"
                  isDisabled
                >
                  Success Button
                </Button>
              </div>
              <div
                style={{ backgroundColor: 'rgb(25,25,25)', padding: '.5rem' }}
              >
                <Button
                  as="a"
                  href="/"
                  color="inverted"
                  variant="text"
                  isDisabled
                >
                  Inverted Button
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </UiProvider>
  );
};

export default App;
