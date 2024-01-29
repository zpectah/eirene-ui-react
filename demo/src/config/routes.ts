import { componentRouteKeys, customizationRouteKeys } from '../enums';

const componentsRootPath = '/components';
const customizationRootPath = '/customization';

export const routes = {
  welcome: {
    path: '/',
    route: '/',
  },
  components: {
    path: `${componentsRootPath}/${componentRouteKeys.button}`,
    route: 'components/:id',
    routes: {
      button: `${componentsRootPath}/${componentRouteKeys.button}`,
      link: `${componentsRootPath}/${componentRouteKeys.link}`,
      container: `${componentsRootPath}/${componentRouteKeys.container}`,
      stack: `${componentsRootPath}/${componentRouteKeys.stack}`,
    },
  },
  customization: {
    path: `${customizationRootPath}/${customizationRouteKeys.theme}`,
    route: 'customization/:id',
    routes: {
      theme: `${customizationRootPath}/${customizationRouteKeys.theme}`,
      palette: `${customizationRootPath}/${customizationRouteKeys.palette}`,
      typography: `${customizationRootPath}/${customizationRouteKeys.typography}`,
      breakpoints: `${customizationRootPath}/${customizationRouteKeys.breakpoints}`,
      components: `${customizationRootPath}/${customizationRouteKeys.components}`,
    },
  },
  usage: {
    path: '/usage',
    route: 'usage',
  },
};
