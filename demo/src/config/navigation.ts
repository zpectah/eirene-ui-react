import { routes } from './routes';

export const primaryNavigation = [
  {
    key: 1,
    label: 'Components',
    path: routes.components.path,
  },
  {
    key: 2,
    label: 'Customization',
    path: routes.customization.path,
  },
  {
    key: 3,
    label: 'Usage',
    path: routes.usage.path,
  },
];

export const componentsSidebarNavigation = [
  {
    key: 1,
    label: 'Button',
    path: routes.components.routes.button,
  },
];

export const customizationSidebarNavigation = [
  {
    key: 1,
    label: 'Theme',
    path: routes.customization.routes.theme,
  },
  {
    key: 2,
    label: 'Palette',
    path: routes.customization.routes.palette,
  },
  {
    key: 3,
    label: 'Typography',
    path: routes.customization.routes.typography,
  },
  {
    key: 4,
    label: 'Breakpoints',
    path: routes.customization.routes.breakpoints,
  },
  {
    key: 5,
    label: 'Components',
    path: routes.customization.routes.components,
  },
];
