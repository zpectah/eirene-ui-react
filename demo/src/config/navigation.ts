import { routes } from './routes';

export const PRIMARY_NAVIGATION = [
  {
    key: 1,
    label: 'Get started',
    path: routes.getStarted.root,
  },
  {
    key: 2,
    label: 'Components',
    path: routes.components.root,
  },
  {
    key: 3,
    label: 'Customization',
    path: routes.customization.root,
  },
];

export const DETAIL_NAVIGATION = [
  {
    key: 1,
    label: 'Preview',
    panel: '',
  },
  {
    key: 2,
    label: 'API',
    panel: '/api',
  },
  {
    key: 3,
    label: 'Playground',
    panel: '/playground',
  },
];

export const GET_STARTED_SIDEBAR_NAVIGATION = [
  {
    key: 1,
    label: 'Overview',
    path: routes.getStarted.routes.overview,
  },
  {
    key: 2,
    label: 'Installation',
    path: routes.getStarted.routes.installation,
  },
  {
    key: 3,
    label: 'Usage',
    path: routes.getStarted.routes.usage,
  },
];

export const COMPONENTS_SIDEBAR_NAVIGATION = [
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
  {
    key: 6,
    label: 'Modal Dialog',
    path: routes.components.routes['modal-dialog'],
  },
];

export const CUSTOMIZATION_SIDEBAR_NAVIGATION = [
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
    label: 'Breakpoints',
    path: routes.customization.routes.breakpoints,
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
