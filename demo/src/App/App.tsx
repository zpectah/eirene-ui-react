import React from 'react';
import { ButtonBase } from 'base';
import { Button } from 'components';
import { UiProvider } from 'styles';

const App = () => {
  return (
    <UiProvider withGlobalStyles>
      <main>
        mein app
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
          My Button
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
        <div>...</div>
      </main>
    </UiProvider>
  );
};

export default App;
