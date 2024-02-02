import React from 'react';
import { Link } from 'react-router-dom';
import { useUiContext } from 'styles';
import { Button } from 'components';
import { meta, routes } from '../../config';
import { HEADER_DESKTOP_HEIGHT } from '../../constants';

const Welcome = () => {
  const { theme } = useUiContext();

  return (
    <article
      style={{
        width: '100%',
        height: `calc(100% - ${HEADER_DESKTOP_HEIGHT})`,
        minHeight: '500px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
        }}
      >
        <h2 style={{ ...theme.typography.h1, textTransform: 'uppercase' }}>{meta.name}</h2>
        <h4 style={{ ...theme.typography.subtitle1 }}>{meta.title}</h4>
        <p
          style={{
            ...theme.typography.body1,
            width: '50%',
            textAlign: 'center',
          }}
        >
          {meta.description}
        </p>
        <div
          style={{
            paddingTop: '2rem',
            display: 'flex',
            flexDirection: 'row',
            gap: '1rem',
          }}
        >
          <Button as={Link} to={routes.components.path}>
            Try it yourself
          </Button>
          <Button as="a" href={meta.gitHubRepository} target="_blank" variant="outlined" color="secondary">
            Github
          </Button>
        </div>
      </div>
    </article>
  );
};

export default Welcome;
