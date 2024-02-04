import { uiComponentsListKeys } from 'types';
import { customizationRouteKeys } from '../enums';

const componentsRootPath = '/components';
const customizationRootPath = '/customization';

export const routes = {
  welcome: {
    path: '/',
    route: '/',
  },
  components: {
    path: `${componentsRootPath}/${uiComponentsListKeys.button}`,
    route: 'components/:id/:panel?',
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
