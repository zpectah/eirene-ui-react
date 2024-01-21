import jss, { Styles, StyleSheetFactoryOptions } from 'jss';
import preset from 'jss-preset-default';

jss.setup(preset());

export const useAttachStylesheet = (
  stylesheet: Partial<Styles<string | number, any, undefined>>,
  options?: StyleSheetFactoryOptions
) => jss.createStyleSheet(stylesheet, options).attach();
