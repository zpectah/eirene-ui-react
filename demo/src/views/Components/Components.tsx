import React, { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container } from 'components';
import { routes } from '../../config';
import { componentRouteKeys } from '../../enums';
import { ButtonView, ContainerView, StackView, LinkView, TypographyView } from './views';

const Components = () => {
  const { id } = useParams();

  const components = [
    {
      key: 1,
      label: 'Button',
      path: routes.components.routes.button,
    },
    {
      key: 2,
      label: 'Link',
      path: routes.components.routes.link,
    },
    {
      key: 3,
      label: 'Container',
      path: routes.components.routes.container,
    },
    {
      key: 4,
      label: 'Stack',
      path: routes.components.routes.stack,
    },
    {
      key: 5,
      label: 'Typography',
      path: routes.components.routes.typography,
    },
  ];

  const renderView = useMemo(() => {
    switch (id) {
      case componentRouteKeys.button:
        return <ButtonView />;

      case componentRouteKeys.link:
        return <LinkView />;

      case componentRouteKeys.container:
        return <ContainerView />;

      case componentRouteKeys.stack:
        return <StackView />;

      case componentRouteKeys.typography:
        return <TypographyView />;

      case undefined:
      default:
        return <>Error, no component selected</>;
    }
  }, [id]);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <aside>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
          {components.map(({ key, label, path }) => (
            <Link key={key} to={path}>
              {label}
            </Link>
          ))}
        </div>
      </aside>
      <div style={{ flex: 1 }}>
        <Container>{renderView}</Container>
      </div>
    </div>
  );
};

export default Components;
