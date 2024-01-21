import React from 'react';
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
            backgroundColor: 'blue',
            '&:hover': { backgroundColor: 'brown' },
          }}
        >
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
