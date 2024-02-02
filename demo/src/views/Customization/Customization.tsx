import React, { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { routes } from '../../config';
import { customizationRouteKeys } from '../../enums';
import { ThemeView, BreakpointsView, PaletteView, TypographyView, ComponentsView } from './views';

const Customization = () => {
  const { id } = useParams();

  const customization = [
    {
      key: 1,
      label: 'Theme',
      path: routes.customization.routes.theme,
    },
    {
      key: 2,
      label: 'Breakpoints',
      path: routes.customization.routes.breakpoints,
    },
    {
      key: 3,
      label: 'Palette',
      path: routes.customization.routes.palette,
    },
    {
      key: 4,
      label: 'Typography',
      path: routes.customization.routes.typography,
    },
    {
      key: 5,
      label: 'Components',
      path: routes.customization.routes.components,
    },
  ];

  const renderView = useMemo(() => {
    switch (id) {
      case customizationRouteKeys.theme:
        return <ThemeView />;

      case customizationRouteKeys.breakpoints:
        return <BreakpointsView />;

      case customizationRouteKeys.palette:
        return <PaletteView />;

      case customizationRouteKeys.typography:
        return <TypographyView />;

      case customizationRouteKeys.components:
        return <ComponentsView />;
    }
  }, [id]);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <aside>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
          {customization.map(({ key, label, path }) => (
            <Link key={key} to={path}>
              {label}
            </Link>
          ))}
        </div>
      </aside>
      <div style={{ flex: 1 }}>{renderView}</div>
    </div>
  );
};

export default Customization;
