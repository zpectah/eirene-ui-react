import { uiComponentsListKeys } from 'types';
import { customizationRouteKeys, usageRouteKeys } from '../enums';

const componentsRootPath = '/components';
const customizationRootPath = '/customization';
const usageRootPath = '/usage';

export const routes = {
  welcome: {
    root: '/',
    route: '/',
  },
  components: {
    root: `${componentsRootPath}/${uiComponentsListKeys.button}`,
    route: 'components/*',
    routes: {
      button: `${componentsRootPath}/${uiComponentsListKeys.button}`,
      link: `${componentsRootPath}/${uiComponentsListKeys.link}`,
      container: `${componentsRootPath}/${uiComponentsListKeys.container}`,
      stack: `${componentsRootPath}/${uiComponentsListKeys.stack}`,
      typography: `${componentsRootPath}/${uiComponentsListKeys.typography}`,
      'modal-dialog': `${componentsRootPath}/${uiComponentsListKeys['modal-dialog']}`,
    },
  },
  customization: {
    root: `${customizationRootPath}/${customizationRouteKeys.theme}`,
    route: 'customization/*',
    routes: {
      theme: `${customizationRootPath}/${customizationRouteKeys.theme}`,
      palette: `${customizationRootPath}/${customizationRouteKeys.palette}`,
      typography: `${customizationRootPath}/${customizationRouteKeys.typography}`,
      breakpoints: `${customizationRootPath}/${customizationRouteKeys.breakpoints}`,
      components: `${customizationRootPath}/${customizationRouteKeys.components}`,
    },
  },
  usage: {
    root: `${usageRootPath}/${usageRouteKeys.installation}`,
    route: 'usage/*',
    routes: {
      installation: `${usageRootPath}/${usageRouteKeys.installation}`,
    },
  },
};
